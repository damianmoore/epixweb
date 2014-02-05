from django.core.urlresolvers import reverse
from django.db import models
from markupfield.fields import MarkupField
from photologue.models import Photo
from treebeard.mp_tree import MP_Node

from epixweb.apps.utils.models import VersionedModel


PROJECT_STATUSES = (
    ('draft', 'Draft'),
    ('published', 'Published'),
)

class Project(VersionedModel, MP_Node):
    title = models.CharField(max_length=50)
    slug = models.SlugField(max_length=50)
    priority = models.FloatField()
    status = models.CharField(max_length=20, choices=PROJECT_STATUSES, default=PROJECT_STATUSES[0][0])
    content = MarkupField(default_markup_type='markdown')
    photo = models.ForeignKey(Photo, null=True, blank=True)
    github_uri = models.CharField(max_length=100, blank=True)

    node_order_by = ['priority']

    def __unicode__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('project-detail', slug=self.slug)
