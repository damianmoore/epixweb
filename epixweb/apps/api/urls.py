from django.conf.urls import patterns, url


urlpatterns = patterns('epixweb.apps.api.views',
    url(r'posts', 'posts', name='posts'),
)
