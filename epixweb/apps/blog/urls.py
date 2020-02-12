from django.conf.urls import include, url

from .feeds import BlogFeed
from .views import PostList, PostDetail


urlpatterns = [
    url('', PostList.as_view(), name='blog-post-list'),
    url('feed/', BlogFeed(), name='blog-post-feed'),
    url('<slug:slug>/', PostDetail.as_view(), name='blog-post-detail'),
]
