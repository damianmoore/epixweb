#!/bin/sh
if [ "$ENV" = "loc" ]
then
  >&2 echo "Starting Django runserver as not in prd mode"
  python /srv/manage.py runserver 0.0.0.0:8000
else
  >&2 echo "Starting Gunicorn server as in prd mode"
  cd /srv && gunicorn -b 0.0.0.0:8000 -w 4 epixweb.wsgi:application
fi
