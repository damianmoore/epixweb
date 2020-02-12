from django.conf.urls import url

from .views import posts, blog


urlpatterns = [
    url('posts/', posts, name='posts'),
    url('blog/<slug:slug>/', blog, name='blog'),
    # url('gallery/<slug:slug>/', posts, name='gallery'),
]
