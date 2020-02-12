#!/bin/sh
>&2 echo "Starting supervisor"
supervisord -c /srv/system/supervisord.conf
