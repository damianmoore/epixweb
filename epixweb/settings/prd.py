from epixweb.settings.base import *   # pylint: disable=W0614,W0401

DEBUG = False

ADMINS = (
    ('Damian Moore', 'webmaster@epixstudios.co.uk'),
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
