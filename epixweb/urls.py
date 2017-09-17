from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin


admin.autodiscover()

urlpatterns = [
    url(r'', include('epixweb.apps.utils.urls')),
    url(r'^projects/', include('epixweb.apps.project.urls')),
    url(r'^blog/', include('epixweb.apps.blog.urls')),
    url(r'^api/', include('epixweb.apps.api.urls')),
    url(r'^filer/', include('filer.urls')),
    url(r'^taggit_autosuggest/', include('taggit_autosuggest.urls')),
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'', include('epixweb.apps.homepage.urls')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_DIR)
