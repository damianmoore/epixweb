"""Production settings and globals."""

from .base import *


#CACHES = {}

#SECRET_KEY = get_env_setting('SECRET_KEY')

RAVEN_CONFIG = {
    'dsn': 'https://af9c09b01c61424d847b1a7665059d49:815acb2e61a94c1eb2bff39b753f7cb6@sentry.epixstudios.co.uk/2',
}

INSTALLED_APPS = INSTALLED_APPS + (
    'raven.contrib.django.raven_compat',
)
