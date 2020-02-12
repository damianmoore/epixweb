# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-14 11:58
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FlickrGallery',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(blank=True)),
                ('updated', models.DateTimeField(blank=True)),
                ('flickr_album_id', models.CharField(max_length=25)),
                ('title', models.CharField(blank=True, max_length=200)),
                ('slug', models.SlugField(blank=True, max_length=200)),
            ],
            options={
                'verbose_name_plural': 'Flickr galleries',
            },
        ),
        migrations.CreateModel(
            name='FlickrGalleryImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(blank=True)),
                ('updated', models.DateTimeField(blank=True)),
                ('flickr_photo_id', models.CharField(max_length=25)),
                ('title', models.CharField(blank=True, max_length=200)),
                ('index', models.PositiveSmallIntegerField()),
                ('aspect_ratio', models.FloatField()),
                ('sizes', models.TextField()),
                ('cover', models.BooleanField()),
                ('gallery', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='photos', to='photo.FlickrGallery')),
            ],
            options={
                'ordering': ['index'],
            },
        ),
    ]