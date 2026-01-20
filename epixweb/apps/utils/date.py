from datetime import datetime
import time

from dateutil import parser as dateutil_parser


def parse_date(date_str):
    try:
        time_obj = time.strptime(date_str, '%a %b %d %H:%M:%S +0000 %Y')
        return datetime(*time_obj[:6])
    except ValueError:
        return dateutil_parser.parse(date_str)
