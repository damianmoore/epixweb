from datetime import datetime
import re

# from cacheback.decorators import cacheback
from django import template
from django.conf import settings
from django.template.loader import render_to_string
import feedparser
import markdown
import requests
from twitter import Twitter, OAuth

from epixweb.apps.utils.date import parse_date


register = template.Library()


# @cacheback(lifetime=1200)  # 20 mins
def get_latest_tweets(limit=10):
    print 'FETCHING TWEETS'
    t = Twitter(
        auth=OAuth(
            settings.TWITTER_ACCESS_TOKEN,
            settings.TWITTER_ACCESS_TOKEN_SECRET,
            settings.TWITTER_CONSUMER_KEY,
            settings.TWITTER_CONSUMER_SECRET)
    )
    tweets = []
    for tweet in t.statuses.user_timeline()[:limit]:
        tweets.append({
            'text': tweet['text'],
            'date': parse_date(tweet['created_at']),
        })
    return tweets


@register.simple_tag
def twitter_feed():
    items = get_latest_tweets(limit=6)
    return render_to_string('utils/twitter_feed.html', {'items': items})


# @cacheback(lifetime=3600)  # 60 mins
def get_latest_github(limit=10):
    print 'FETCHING GITHUB'
    username = 'damianmoore'
    url = 'https://github.com/{}.atom'.format(username)
    items = []
    feed = feedparser.parse(url)
    for entry in feed['entries'][:limit]:
        title = ' '.join(entry['title'].split(username)[1:])
        date = datetime(*entry['updated_parsed'][:6])
        items.append({
            'title': title,
            'date': date,
        })
    return items


@register.simple_tag
def github_feed():
    items = get_latest_github()
    return render_to_string('utils/github_feed.html', {'items': items})


# @cacheback(lifetime=3600)  # 60 mins
def get_latest_flickr(limit=12):
    print 'FETCHING FLICKR'
    user_id = '55290748@N08'
    url = 'http://api.flickr.com/services/feeds/photos_public.gne?id={}'.format(user_id)
    items = []
    feed = feedparser.parse(url)
    for entry in feed['entries'][:limit]:
        date = datetime(*entry['published_parsed'][:6])
        thumbnail = re.search("src=\\\"(http://\w.+\.jpg)", entry['summary']).group(1)
        items.append({
            'title': entry['title'],
            'date': date,
            'thumbnail': thumbnail,
            'link': entry['link'],
        })
    return items


@register.simple_tag
def flickr_feed():
    items = get_latest_flickr()
    return render_to_string('utils/flickr_feed.html', {'items': items})


@register.filter
def limit_paras(value, arg=1):
    return '<p>'.join(value.split('<p>')[:arg + 1])


# @cacheback(lifetime=3600)  # 60 mins
def get_markdown_from_url(url):
    text = requests.get(url).text
    return markdown.markdown(text)


@register.filter
def fetch_external_markdown(value):
    matches = re.findall(r'(<p>*\s*{{\s*md\s+[\'\"](.+)[\'\"]\s*}}\s*</p>*)', value)
    for handle, url in matches:
        md = get_markdown_from_url(url)
        value = value.replace(handle, md)
    return value


@register.filter
def strip_heading(value):
    return re.sub(r'<h1>.*</h1>', '', value, count=1)
