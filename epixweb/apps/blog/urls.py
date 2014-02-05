from django.conf.urls import patterns, include, url
from django.views.generic.base import TemplateView

from feeds import BlogFeed
from views import PostList, PostDetail


urlpatterns = patterns('',
    url('^$', PostList.as_view(), name='blog-post-list'),
    url(r'^feed/$', BlogFeed(), name='blog-post-feed'),
    url(r'^(?P<slug>[-_\w]+)/$', PostDetail.as_view(), name='blog-post-detail'),
)
