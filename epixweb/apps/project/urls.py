from django.conf.urls import url

from feeds import ProjectFeed
from views import ProjectList, ProjectDetail


urlpatterns = [
    url('^$', ProjectList.as_view(), name='project-list'),
    url(r'^feed/$', ProjectFeed(), name='project-feed'),
    url(r'^(?P<slug>[-_\w/]+)/$', ProjectDetail.as_view(), name='project-detail'),
]
