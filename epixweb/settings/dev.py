"""Settings for Development Server"""
from epixweb.settings.base import *   # pylint: disable=W0614,W0401

DEBUG = True

VAR_ROOT = '/var/www/epixweb'
MEDIA_ROOT = os.path.join(VAR_ROOT, 'uploads')
STATIC_ROOT = os.path.join(VAR_ROOT, 'static')

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'epixweb',
#        'USER': 'dbuser',
#        'PASSWORD': 'dbpassword',
    }
}

# WSGI_APPLICATION = 'epixweb.wsgi.dev.application'
