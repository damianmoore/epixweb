from django.conf.urls import include, url

from feeds import BlogFeed
from views import PostList, PostDetail


urlpatterns = [
    url('^$', PostList.as_view(), name='blog-post-list'),
    url(r'^feed/$', BlogFeed(), name='blog-post-feed'),
    url(r'^(?P<slug>[-_\w]+)/$', PostDetail.as_view(), name='blog-post-detail'),
]
