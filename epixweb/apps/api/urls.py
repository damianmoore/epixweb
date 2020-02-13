from django.urls import path

from .views import posts, blog


urlpatterns = [
    path('posts/', posts, name='posts'),
    path('blog/<slug:slug>/', blog, name='blog'),
    # path('gallery/<slug:slug>/', posts, name='gallery'),
]
