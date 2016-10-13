"""Base settings shared by all environments"""
# Import global settings to make it easier to extend settings.
from django.conf.global_settings import *   # pylint: disable=W0614,W0401

#==============================================================================
# Generic Django project settings
#==============================================================================

DEBUG = True
TEMPLATE_DEBUG = DEBUG

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

    'south',
    #'markupfield',
    'mptt',
    'mptt_tree_editor',
    'tagging',
    'taggit',
    'taggit_templatetags',
    'taggit_autosuggest',
    'photologue',
    #'djcelery',
    #'cacheback',

    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.admin',
    'django.contrib.admindocs',
)

#==============================================================================
# Calculation of directories relative to the project module location
#==============================================================================

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

#==============================================================================
# Project URLS and media settings
#==============================================================================

ROOT_URLCONF = 'epixweb.urls'

LOGIN_URL = '/login/'
LOGOUT_URL = '/logout/'
LOGIN_REDIRECT_URL = '/'

STATIC_URL = '/static/'
MEDIA_URL = '/uploads/'

STATIC_ROOT = os.path.join(VAR_ROOT, 'static')
MEDIA_ROOT = os.path.join(VAR_ROOT, 'uploads')

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'static'),
)

#==============================================================================
# Templates
#==============================================================================

TEMPLATE_DIRS = (
    os.path.join(BASE_DIR, 'templates'),
)

TEMPLATE_CONTEXT_PROCESSORS += (
    'django.core.context_processors.request',
)

#==============================================================================
# Middleware
#==============================================================================

MIDDLEWARE_CLASSES += (
)

#==============================================================================
# Auth / security
#==============================================================================

AUTHENTICATION_BACKENDS += (
)

#==============================================================================
# Miscellaneous project settings
#==============================================================================

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


#==============================================================================
# Third party app settings
#==============================================================================

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
