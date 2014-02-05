from django.conf.urls import patterns, include, url


urlpatterns = patterns('epixweb.apps.homepage.views',
    url(r'^$', 'homepage', name='homepage'),
)
