from django.urls import path

from .feeds import ProjectFeed
from .views import ProjectDetail  # , ProjectList


urlpatterns = [
    # path('^$', ProjectList.as_view(), name='project-list'),
    path('feed/', ProjectFeed(), name='project-feed'),
    path('<slug:slug>/', ProjectDetail.as_view(), name='project-detail'),
]
