from django.core.urlresolvers import reverse
from django.db import models
from markupfield.fields import MarkupField
from photologue.models import Photo
from mptt.models import MPTTModel, TreeForeignKey
from taggit_autosuggest.managers import TaggableManager

from epixweb.apps.utils.models import VersionedModel


PROJECT_STATUSES = (
    ('draft', 'Draft'),
    ('published', 'Published'),
)

class Project(MPTTModel, VersionedModel):
    title = models.CharField(max_length=50)
    slug = models.SlugField(max_length=50)
    status = models.CharField(max_length=20, choices=PROJECT_STATUSES, default=PROJECT_STATUSES[0][0])
    content = MarkupField(default_markup_type='markdown')
    photo = models.ForeignKey(Photo, null=True, blank=True)
    github_uri = models.CharField(max_length=100, blank=True)
    parent = TreeForeignKey('self', null=True, blank=True, related_name='children')
    tags = TaggableManager(blank=True)

    def __unicode__(self):
        return self.title

    def get_absolute_url(self):
        slug_parts = []
        for ancestor in self.get_ancestors():
            slug_parts.append(ancestor.slug)
        slug_parts.append(self.slug)
        slug = '/'.join(slug_parts)
        return reverse('project-detail', kwargs={'slug': slug})
