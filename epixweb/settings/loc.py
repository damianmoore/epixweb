"""
Example settings for local development

Use this file as a base for your local development settings and copy
it to epixweb/settings/local.py. It should not be checked into
your code repository.

"""
from epixweb.settings.base import *   # pylint: disable=W0614,W0401

DEBUG = True

ADMINS = (
    ('You', 'your@email'),
)
MANAGERS = ADMINS

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'HOST': os.environ.get('MYSQL_HOST', '127.0.0.1'),
        'NAME': os.environ.get('MYSQL_DATABASE', 'epixweb'),
        'USER': os.environ.get('MYSQL_USER', 'root'),
        'PASSWORD': os.environ.get('MYSQL_PASSWORD', 'password'),
    }
}
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': 'db.sqlite',
#     }
# }
