from django.contrib.syndication.views import Feed

from .models import Project


class ProjectFeed(Feed):
    title = "Damian Moore's Project Feed"
    link = "/projects/"
    description = "New projects from Damian Moore."

    def items(self):
        return Project.objects.order_by('-created')[:100]

    def item_title(self, item):
        return item.title

    def item_description(self, item):
        return item.content.rendered
