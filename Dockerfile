FROM python:3.8.1-slim-buster

RUN apt-get update && \
    apt-get install -y \
        curl \
        default-libmysqlclient-dev \
        git \
        libjpeg-dev \
        locales \
        nginx-light \
        python-dev \
        python-pip \
        supervisor \
        && \
    apt-get clean && \
        rm -rf /var/lib/apt/lists/* \
               /tmp/* \
               /var/tmp/*

# Install Node & Yarn
RUN curl -sL https://deb.nodesource.com/setup_13.x | bash - && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && \
    apt-get install -y nodejs yarn && \
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

# Build Next.js app
COPY frontend /srv/frontend
RUN npm run build

WORKDIR /srv

# Collect Django static files from apps
RUN python manage.py collectstatic --noinput --link

CMD supervisord -c /srv/system/supervisord.conf

EXPOSE 80
