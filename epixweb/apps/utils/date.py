from datetime import datetime
import time

from feedparser import _parse_date


def parse_date(date_str):
    try:
        time_obj = time.strptime(date_str, '%a %b %d %H:%M:%S +0000 %Y')
    except ValueError:
        time_obj = _parse_date(date_str)
    return datetime(*time_obj[:6])
