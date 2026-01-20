"""Base settings shared by all environments"""
# Import only what's needed from global settings (avoid deprecated settings)
from django.conf.global_settings import AUTHENTICATION_BACKENDS  # pylint: disable=W0614,W0401

# ==============================================================================
# Generic Django project settings
# ==============================================================================

DEBUG = False

ALLOWED_HOSTS = ['*']

SITE_ID = 1
TIME_ZONE = 'Europe/London'
USE_TZ = True
USE_I18N = True
USE_L10N = True
LANGUAGE_CODE = 'en-gb'
LANGUAGES = (
    ('en', 'English'),
)

SECRET_KEY = 'm=c^9uhfgoi*$dd6^q!hbcng55xHs3nt-t7-zaqm_b4b9x6)%t'

INSTALLED_APPS = (
    'epixweb.apps.utils',
    'epixweb.apps.homepage',
    'epixweb.apps.project',
    'epixweb.apps.blog',
    'epixweb.apps.photo',
    'epixweb.apps.api',

    #'cacheback',
    #'djcelery',
    'easy_thumbnails',
    'filer',
    'mptt',
    'pagedown.apps.PagedownConfig',
    # 'south',
    # 'tagging',
    'taggit',
    # 'taggit_templatetags',
    'taggit_autosuggest',

    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.admin',
    'django.contrib.admindocs',
)

# ==============================================================================
# Calculation of directories relative to the project module location
# ==============================================================================

import os
import sys
import epixweb as project_module

PROJECT_DIR = os.path.dirname(os.path.realpath(project_module.__file__))
BASE_DIR = os.path.normpath(os.path.join(PROJECT_DIR, '..'))

PYTHON_BIN = os.path.dirname(sys.executable)
ve_path = os.path.dirname(os.path.dirname(os.path.dirname(PROJECT_DIR)))
# Assume that the presence of 'activate_this.py' in the python bin/
# directory means that we're running in a virtual environment.
if os.path.exists(os.path.join(PYTHON_BIN, 'activate_this.py')):
    # We're running with a virtualenv python executable.
    VAR_ROOT = os.path.join(os.path.dirname(PYTHON_BIN), 'var')
elif ve_path and os.path.exists(os.path.join(ve_path, 'bin',
        'activate_this.py')):
    # We're running in [virtualenv_root]/src/[project_name].
    VAR_ROOT = os.path.join(ve_path, 'var')
else:
    # Set the variable root to a path in the project which is
    # ignored by the repository.
    VAR_ROOT = os.path.join(PROJECT_DIR, 'var')

if not os.path.exists(VAR_ROOT):
    os.mkdir(VAR_ROOT)

# ==============================================================================
# Project URLs and media settings
# ==============================================================================

ROOT_URLCONF = 'epixweb.urls'

STATIC_DIR = os.path.join(BASE_DIR, 'static')
STATIC_ROOT = os.path.join(BASE_DIR, 'static_collected')
STATIC_URL = '/static/'

MEDIA_URL = '/uploads/'
MEDIA_ROOT = os.path.join(VAR_ROOT, 'uploads')

LOGIN_URL = '/login/'
LOGOUT_URL = '/logout/'
LOGIN_REDIRECT_URL = '/'

STATICFILES_DIRS = [
    STATIC_DIR,
]

# ==============================================================================
# Templates
# ==============================================================================

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates'), ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]


# ==============================================================================
# Middleware
# ==============================================================================

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# ==============================================================================
# Auth / security
# ==============================================================================

AUTHENTICATION_BACKENDS = list(AUTHENTICATION_BACKENDS)

# ==============================================================================
# Miscellaneous project settings
# ==============================================================================

# CACHES = {
#     "default": {
#         "BACKEND": "redis_cache.cache.RedisCache",
#         "LOCATION": "127.0.0.1:6379:1",
#         "OPTIONS": {
#             "CLIENT_CLASS": "redis_cache.client.DefaultClient",
#         }
#     }
# }

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'filters': {
        'require_debug_false': {
            '()': 'django.utils.log.RequireDebugFalse'
        }
    },
    'handlers': {
        'console': {
            'level': 'DEBUG',
            'class': 'logging.StreamHandler',
        }
    },
    'loggers': {
        'cacheback': {
            'handlers': ['console'],
            'level': 'DEBUG',
            'propagate': False,
        },
    }
}


# ==============================================================================
# Third party app settings
# ==============================================================================

import markdown
MARKUP_FIELD_TYPES = (
    ('markdown', markdown.markdown),
#    ('ReST', render_rest),
)


BROKER_URL = 'redis://localhost:6379/0'
#import djcelery
#djcelery.setup_loader()

TAGGIT_TAGCLOUD_MIN = 10
TAGGIT_TAGCLOUD_MAX = 20

THUMBNAIL_HIGH_RESOLUTION = True

# Django 4.2+ storages configuration
STORAGES = {
    "default": {
        "BACKEND": "django.core.files.storage.FileSystemStorage",
    },
    "staticfiles": {
        "BACKEND": "django.contrib.staticfiles.storage.StaticFilesStorage",
    },
}

# Required for Django 4.2+
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
