from django.conf.urls.static import static
from django.conf.urls import patterns, url, include
from django.conf import settings

from django.contrib import admin

admin.autodiscover()

urlpatterns = patterns('',
    (r'', include('epixweb.apps.utils.urls')),
    (r'^projects/', include('epixweb.apps.project.urls')),
    (r'^blog/', include('epixweb.apps.blog.urls')),
    (r'^photologue/', include('photologue.urls')),
    (r'^taggit_autosuggest/', include('taggit_autosuggest.urls')),
    (r'^admin/doc/', include('django.contrib.admindocs.urls')),
    (r'^admin/', include(admin.site.urls)),
    (r'', include('epixweb.apps.homepage.urls')),
)

if settings.DEBUG and settings.MEDIA_ROOT:
    urlpatterns += static(settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT)
