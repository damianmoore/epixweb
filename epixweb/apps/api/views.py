import json
from time import sleep

from django.http import HttpResponse
import markdown

from epixweb.apps.blog.models import Post
from epixweb.apps.photo.models import FlickrGallery
from epixweb.apps.project.models import Project
from epixweb.apps.utils.image import get_thumbnail
from epixweb.apps.utils.text import summarize_post_body, expand_custom_markdown


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
        summary = summarize_post_body(post.content)

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

    for project in Project.objects.filter(status='published').order_by('-created'):
        summary = summarize_post_body(project.content)

        cover_image = None
        if project.photo:
            try:
                cover_image = get_thumbnail(project.photo)
            except:
                pass

        data.append({
            'type': 'project',
            'name': project.title,
            'slug': project.slug,
            'summary': summary,
            'coverImage': cover_image,
            'created': project.created.isoformat(),
        })

    data = sorted(data, key=lambda post: post['created'], reverse=True)
    return HttpResponse(json.dumps(data), content_type='application/json')


def blog(request, slug):
    post = Post.objects.get(slug=slug)

    data = {
        'name':     post.title,
        'content':  expand_custom_markdown(post.content),
        'created':  post.created.isoformat(),
        'type':     'blog',
        'slug':     post.slug,
    }
    return HttpResponse(json.dumps(data), content_type='application/json')


def project(request, slug):
    post = Project.objects.get(slug=slug)

    data = {
        'name':     post.title,
        'content':  expand_custom_markdown(post.content),
        'created':  post.created.isoformat(),
        'type':     'blog',
        'slug':     post.slug,
    }
    return HttpResponse(json.dumps(data), content_type='application/json')
