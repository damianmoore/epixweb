from django.contrib import admin
from django.db import models
from pagedown.widgets import AdminPagedownWidget

from .models import Project
from epixweb.apps.utils.admin import VersionedAdmin


# class ProjectAdmin(TreeEditor):
class ProjectAdmin(VersionedAdmin):
    list_display = ('title', 'slug', 'status', 'created', 'updated')
    list_filter = ('status', 'created', 'updated')
    search_fields = ('title', 'slug', 'status')
    ordering = ('-created',)
    prepopulated_fields = {"slug": ("title",)}
    # exclude = ('created', 'updated')

    formfield_overrides = {
        models.TextField: {'widget': AdminPagedownWidget},
    }

    fieldsets = (
        (None, {
            'fields': ('title', 'slug', 'status', 'content', 'photo', 'github_uri', 'parent', 'tags',),
        }),
    ) + VersionedAdmin.fieldsets


admin.site.register(Project, ProjectAdmin)
