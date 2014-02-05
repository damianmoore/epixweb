from django.contrib.syndication.views import Feed

from models import Post


class BlogFeed(Feed):
    title = "Damian Moore's Blog Feed"
    link = "/blog/"
    description = "New blog posts from Damian Moore."

    def items(self):
        return Post.objects.order_by('-created')[:100]

    def item_title(self, item):
        return item.title

    def item_description(self, item):
        return item.content.rendered
