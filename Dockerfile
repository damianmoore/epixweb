FROM python:3.11-slim-bookworm

RUN apt-get update && \
    apt-get install -y \
        build-essential \
        curl \
        git \
        libcairo2-dev \
        libffi-dev \
        libjpeg-dev \
        libpq-dev \
        locales \
        nginx-light \
        pkg-config \
        supervisor \
        && \
    apt-get clean && \
        rm -rf /var/lib/apt/lists/* \
               /tmp/* \
               /var/tmp/*

# Install Node 18 LTS (required for older webpack/Next.js versions)
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* \
           /tmp/* \
           /var/tmp/*

# Install Python dependencies
COPY requirements.txt /srv/requirements.txt
RUN pip install -r /srv/requirements.txt

# Install Node dependencies
WORKDIR /srv/frontend
COPY frontend/package.json /srv/frontend/package.json
RUN npm install

# Copy project files
COPY epixweb /srv/epixweb
COPY system /srv/system
COPY static /srv/static
COPY templates /srv/templates
COPY manage.py /srv/manage.py

# Build Next.js app (use legacy OpenSSL for older webpack)
COPY frontend /srv/frontend
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build

WORKDIR /srv

# Set environment for production
ENV ENV=prd

# Collect Django static files from apps (copy files, don't use symlinks)
RUN python manage.py collectstatic --noinput

CMD supervisord -c /srv/system/supervisord.conf

EXPOSE 80
