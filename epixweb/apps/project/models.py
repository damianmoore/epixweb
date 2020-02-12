from django.db import models
from django.urls import reverse
from filer.fields.image import FilerImageField
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
    content = models.TextField()
    photo = FilerImageField(null=True, blank=True, related_name="project", on_delete=models.SET_NULL)
    github_uri = models.CharField(max_length=100, blank=True)
    parent = TreeForeignKey('self', null=True, blank=True, related_name='children', on_delete=models.SET_NULL)
    tags = TaggableManager(blank=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        slug_parts = []
        for ancestor in self.get_ancestors():
            slug_parts.append(ancestor.slug)
        slug_parts.append(self.slug)
        slug = '/'.join(slug_parts)
        return reverse('project-detail', kwargs={'slug': slug})


# class ProjectFilter(django_filters.FilterSet):
#     slug = django_filters.CharFilter(lookup_type='contains')

#     class Meta:
#         model = Project
#         fields = ['slug', 'tags__name', ]
