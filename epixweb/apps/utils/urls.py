from django.urls import path

from .views import error_404, error_500


urlpatterns = [
    path('404/', error_404, name='error-404'),
    path('500/', error_500, name='error-500'),
]
