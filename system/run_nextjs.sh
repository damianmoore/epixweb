#!/bin/sh
if [ "$ENV" = "loc" ]
then
  >&2 echo "Starting Next.js dev server"
  cd /srv/frontend && PORT=3000 npm run dev
else
  >&2 echo "Starting Next.js prd server"
  cd /srv/frontend && PORT=3000 npm run start
fi
