from django.urls import path

from .views import posts, blog, project


urlpatterns = [
    path('posts/', posts, name='posts'),
    path('blog/<slug:slug>/', blog, name='blog'),
    path('project/<slug:slug>/', project, name='project'),
    # path('gallery/<slug:slug>/', posts, name='gallery'),
]
