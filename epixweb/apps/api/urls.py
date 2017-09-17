from django.conf.urls import url

from views import posts, blog


urlpatterns = [
    url(r'^posts/$', posts, name='posts'),
    url(r'^blog/(?P<slug>[-_\w/]+)/$', blog, name='blog'),
    # url(r'^gallery/(?P<slug>[-_\w/]+)/$', posts, name='gallery'),
]
