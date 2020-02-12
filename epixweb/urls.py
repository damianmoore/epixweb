from django.conf import settings
from django.conf.urls import include
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path


admin.autodiscover()

urlpatterns = [
    path('', include('epixweb.apps.utils.urls')),
    path('projects/', include('epixweb.apps.project.urls')),
    path('blog/', include('epixweb.apps.blog.urls')),
    path('api/', include('epixweb.apps.api.urls')),
    path('filer/', include('filer.urls')),
    path('taggit_autosuggest/', include('taggit_autosuggest.urls')),
    path('admin/', admin.site.urls),
    path('', include('epixweb.apps.homepage.urls')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_DIR)
