import json
import re
from time import sleep

from django.http import HttpResponse
import markdown

from epixweb.apps.blog.models import Post
from epixweb.apps.photo.models import FlickrGallery
from epixweb.apps.utils.text import strip_tags
from epixweb.apps.utils.image import get_thumbnail, gallery_dir


def posts(request):
    data = []

    for gallery in FlickrGallery.objects.all().order_by('-created'):
        photos = []
        for photo in gallery.photos.all():
            sizes = json.loads(photo.sizes)
            photos.append({
                'src': sizes['Medium 640'],
                'width': 640,
                'height': int(float(640) / photo.aspect_ratio),
                'aspectRatio': photo.aspect_ratio,
                'lightboxImage': {
                    'src': sizes['Large'],
                },
            })

        cover_image = None
        if gallery.cover:
            try:
                cover_image = get_thumbnail(gallery.cover)
            except:
                pass

        data.append({
            'type': 'photos',
            'name': gallery.title,
            'slug': gallery.slug,
            'coverImage': cover_image,
            'photos': photos,
            'created': gallery.created.isoformat(),
        })

    for post in Post.objects.filter(status='published').order_by('-created'):
        summary = strip_tags(markdown.markdown(re.sub('(\[!gallery-dir [\S]+\])', '', post.content)))[:300]
        if len(summary) == 300:
            summary = ' '.join(summary.split(' ')[:-1]) + '…'

        cover_image = None
        if post.photo:
            try:
                cover_image = get_thumbnail(post.photo)
            except:
                pass

        data.append({
            'type': 'blog',
            'name': post.title,
            'slug': post.slug,
            'summary': summary,
            'coverImage': cover_image,
            'created': post.created.isoformat(),
        })

    data = sorted(data, key=lambda post: post['created'], reverse=True)
    return HttpResponse(json.dumps(data), content_type='application/json')


def blog(request, slug):
    post = Post.objects.get(slug=slug)
    contentElements = []
    for item in re.split('(\[!gallery-dir [\S]+\])', post.content):
        if item.startswith('[!gallery-dir '):
            path = re.match(r'\[!gallery-dir ([\S]+)\]', item).group(1)
            contentElements.append(gallery_dir(path))
        else:
            contentElements.append(item)

    content = ''.join(contentElements)

    data = {
        'name':     post.title,
        'content':  content,
        'created':  post.created.isoformat(),
        'type':     'blog',
        'slug':     post.slug,
    }
    return HttpResponse(json.dumps(data), content_type='application/json')
