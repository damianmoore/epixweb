#!/usr/bin/python
# -*- coding: utf-8 -*-

import json
from time import sleep

from django.http import HttpResponse


def posts(request):
    data = [
      {
        'type': 'project',
        'name': 'bob',
        'slug': 'bob',
      },
      {
        'type': 'project',
        'name': 'Internet radio alarm clock',
        'slug': 'internet-radio',
      },
      {
        'type': 'photos',
        'name': 'London',
        'slug': 'london',
        'url':  'https://www.flickr.com/photos/damianmoore/albums/72157649413678702',
        'coverImage': 'https://farm7.staticflickr.com/6143/5975987832_a99a863040_z_d.jpg',
      },
      {
        'type': 'project',
        'name': 'Music streaming system',
        'slug': 'music-streaming-system',
      },
      {
        'type': 'blog',
        'name': 'Laser mapping a home',
        'slug': 'laser-mapping-home',
        'summary': 'My employer, onefinestay, ran a tech team off-site event recently over a couple of days. I suggested an idea of using laser range finding equipment to map the layout of a home and a group of us got to work on a solution. A full description of what we did is on our tech blog so check it out.',
      },
      {
        'type': 'project',
        'name': 'Wifi Lamp',
        'slug': 'wifi-lamp',
      },
      {
        'type': 'photos',
        'name': 'USA West Coast',
        'slug': 'usa-west-coast',
        'url':  'https://www.flickr.com/photos/damianmoore/albums/72157649413912751',
        'coverImage': 'https://farm4.staticflickr.com/3916/15019190575_132d755794_z_d.jpg',
      },
      {
        'type': 'project',
        'name': 'CNC-milled bamboo picture frame',
        'slug': 'cnc-picture-frame',
      },
      {
        'type': 'photos',
        'name': 'Cornwall',
        'slug': 'cornwall',
        'url':  'https://www.flickr.com/photos/damianmoore/albums/72157649006769397',
        'coverImage': 'https://farm4.staticflickr.com/3854/14821031780_4fc2bf3310_z_d.jpg',
      },
      {
        'type': 'project',
        'name': 'Laser-etched plywood sketch inspired by The Grand Budapest Hotel',
        'slug': 'laser-grand-budapest-hotel',
      },
      {
        'type': 'project',
        'name': 'Internet controlled underfloor heating system',
        'slug': 'internet-underfloor-heating',
      },
      {
        'type': 'project',
        'name': 'Christmas card 2015',
        'slug': 'christmas-card-2015',
      },
      {
        'type': 'project',
        'name': 'Woodland themed placemats',
        'slug': 'woodland-placemats',
      },
      {
        'type': 'project',
        'name': 'Adjustable trumpet mute',
        'slug': 'trumpet-mute',
      },
      {
        'type': 'project',
        'name': 'Battersea power station painting',
        'slug': 'battersea-power-station-painting',
      },
      {
        'type': 'project',
        'name': 'Bluebell jewelery stand',
        'slug': 'bluebell-jewelery-stand',
      },
      {
        'type': 'project',
        'name': 'Podium web content management system',
        'slug': 'podium-cms',
      },
      {
        'type': 'project',
        'name': 'Courchevel ski apartment rental website',
        'slug': 'courchevel-website',
      },
      {
        'type': 'project',
        'name': 'Part Mill — Web-based CNC tool path generator',
        'slug': 'part-mill',
      },
    ]
    sleep(4)
    return HttpResponse(json.dumps(data), mimetype='application/json')
