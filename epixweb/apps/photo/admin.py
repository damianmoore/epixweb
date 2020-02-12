from django.contrib import admin
from django.utils.html import format_html

from .models import FlickrGallery, FlickrGalleryImage


class FlickrGalleryAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'num_photos', 'link', 'created', 'thumbnail')
    search_fields = ('title', 'slug', 'flickr_album_id')
    ordering = ('-created',)
    prepopulated_fields = {'slug': ('title',)}

    def link(self, obj):
        return format_html('<a href="https://www.flickr.com/photos/damianmoore/albums/{}" target="_new">Link</a>', obj.flickr_album_id)

    def thumbnail(self, obj):
        return format_html('<a href="{}" target="_new"><img src="{}" /></a>', obj.cover.get_image('Large'), obj.cover.get_image('Square'))


class FlickrGalleryImageAdmin(admin.ModelAdmin):
    list_display = ('flickr_photo_id', 'gallery', 'title', 'cover', 'thumbnail')
    list_filter = ('gallery', 'cover')
    search_fields = ('flickr_photo_id', 'title')
    ordering = ('-created',)

    def thumbnail(self, obj):
        return format_html('<a href="{}" target="_new"><img src="{}" /></a>', obj.get_image('Large'), obj.get_image('Square'))


admin.site.register(FlickrGallery, FlickrGalleryAdmin)
admin.site.register(FlickrGalleryImage, FlickrGalleryImageAdmin)
