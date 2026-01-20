from epixweb.settings.base import *   # pylint: disable=W0614,W0401

DEBUG = False

ADMINS = (
    ('Damian Moore', 'webmaster@epixstudios.co.uk'),
)
MANAGERS = ADMINS

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'HOST': os.environ.get('DB_HOST', '127.0.0.1'),
        'PORT': os.environ.get('DB_PORT', '5432'),
        'NAME': os.environ.get('DB_NAME', 'epix-web'),
        'USER': os.environ.get('DB_USER', 'epix-web'),
        'PASSWORD': os.environ.get('DB_PASSWORD', 'password'),
    }
}
