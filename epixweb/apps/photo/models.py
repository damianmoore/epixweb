from datetime import datetime
import json

from django.conf import settings
from django.db import models
from django.utils.text import slugify

import flickrapi

from epixweb.apps.utils.models import VersionedModel


class FlickrGallery(VersionedModel):
    flickr_album_id = models.CharField(max_length=25)
    title = models.CharField(max_length=200, blank=True)
    slug = models.SlugField(max_length=200, blank=True)

    class Meta:
        verbose_name_plural = 'Flickr galleries'

    def __unicode__(self):
        return self.title

    @property
    def num_photos(self):
        return self.photos.count()

    @property
    def cover(self):
        return self.photos.filter(cover=True)[0]

    def save(self, *args, **kwargs):
        # Whenever this gets saved, generate FlickrGalleryImage objects from Flickr's API
        flickr = flickrapi.FlickrAPI(settings.FLICKR_API_KEY, settings.FLICKR_API_SECRET, format='parsed-json')
        photoset = flickr.photosets.getPhotos(photoset_id=self.flickr_album_id)['photoset']

        photoset_info = flickr.photosets.getInfo(photoset_id=self.flickr_album_id)['photoset']
        if not self.title:
            self.title = photoset['title']
            self.slug = slugify(self.title)
        if not self.created:
            self.created = datetime.fromtimestamp(int(photoset_info['date_create']))

        if self.id:
            FlickrGalleryImage.objects.filter(gallery_id=self.id).delete()

        self.cover_id = int(photoset_info['primary'])
        super(FlickrGallery, self).save()

        for i, photo in enumerate(photoset['photo']):
            size_data = {}
            sizes = flickr.photos.getSizes(photo_id=photo['id'])['sizes']['size']
            for size in sizes:
                size_data[size['label']] = size['source']
                if size['label'] == 'Original':
                    aspect_ratio = float(size['width']) / float(size['height'])

            FlickrGalleryImage(
                gallery=self,
                flickr_photo_id=photo['id'],
                title=photo['title'],
                index=i,
                aspect_ratio=aspect_ratio,
                sizes=json.dumps(size_data),
                cover=photo['id'] == photoset_info['primary']
            ).save()


class FlickrGalleryImage(VersionedModel):
    gallery = models.ForeignKey('FlickrGallery', related_name='photos', on_delete=models.CASCADE)
    flickr_photo_id = models.CharField(max_length=25)
    title = models.CharField(max_length=200, blank=True)
    index = models.PositiveSmallIntegerField()
    aspect_ratio = models.FloatField()
    sizes = models.TextField()
    cover = models.BooleanField()

    class Meta:
        ordering = ['index', ]

    def get_image(self, size):
        # Cache the JSON decoding on the object
        if not hasattr(self, '_sizes'):
            self._sizes = json.loads(self.sizes)
        return self._sizes.get(size, '')
