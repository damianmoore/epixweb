from django.urls import path

from .views import homepage

urlpatterns = [
    path(r'', homepage, name='homepage'),
]
