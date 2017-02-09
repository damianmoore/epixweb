from django.conf.urls import include, url

from views import homepage

urlpatterns = [
    url(r'', homepage, name='homepage'),
]
