from html.parser import HTMLParser
import re

import markdown

from epixweb.apps.utils.image import gallery_dir


class MLStripper(HTMLParser):
    def __init__(self):
        self.reset()
        self.strict = False
        self.convert_charrefs = True
        self.fed = []

    def handle_data(self, d):
        self.fed.append(d)

    def get_data(self):
        return ''.join(self.fed)


def strip_tags(html):
    s = MLStripper()
    s.feed(html)
    return s.get_data()


def summarize_post_body(content, num_chars=300):
    summary = strip_tags(markdown.markdown(
        re.sub('(\[!gallery-dir [\S]+\])', '', content)))[:num_chars]
    if len(summary) == num_chars:
        summary = ' '.join(summary.split(' ')[:-1]) + '…'
    return summary


def expand_custom_markdown(content):
    contentElements = []
    for item in re.split('(\[!gallery-dir [\S]+\])', content):
        if item.startswith('[!gallery-dir '):
            path = re.match(r'\[!gallery-dir ([\S]+)\]', item).group(1)
            contentElements.append(gallery_dir(path))
        else:
            contentElements.append(item)

    return ''.join(contentElements)
