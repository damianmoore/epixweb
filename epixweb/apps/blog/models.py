from django.core.urlresolvers import reverse
from django.db import models
import django_filters
from markupfield.fields import MarkupField
from photologue.models import Photo
from taggit_autosuggest.managers import TaggableManager

from epixweb.apps.utils.models import VersionedModel


POST_STATUSES = (
    ('draft', 'Draft'),
    ('published', 'Published'),
)

class Post(VersionedModel):
    title = models.CharField(max_length=50)
    slug = models.SlugField(max_length=50)
    status = models.CharField(max_length=20, choices=POST_STATUSES, default=POST_STATUSES[0][0])
    content = MarkupField(default_markup_type='markdown')
    photo = models.ForeignKey(Photo, null=True, blank=True)
    tags = TaggableManager(blank=True)

    def __unicode__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('blog-post-detail', kwargs={'slug': self.slug})


class PostFilter(django_filters.FilterSet):
    slug = django_filters.CharFilter(lookup_type='contains')

    class Meta:
        model = Post
        fields = ['slug', 'tags__name',]
