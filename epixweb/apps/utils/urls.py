from django.conf.urls import url

from views import error_404, error_500


urlpatterns = [
    url(r'^404/$', error_404, name='error-404'),
    url(r'^500/$', error_500, name='error-500'),
]
