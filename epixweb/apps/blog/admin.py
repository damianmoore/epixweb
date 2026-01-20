from django.contrib import admin
from django.db import models

from .models import Post
from epixweb.apps.utils.admin import VersionedAdmin, CustomAdminPagedownWidget


class PostAdmin(VersionedAdmin):
    list_display = ('title', 'slug', 'status', 'created', 'updated')
    list_filter = ('status', 'created', 'updated')
    search_fields = ('title', 'slug', 'status')
    ordering = ('-created',)
    prepopulated_fields = {"slug": ("title",)}

    formfield_overrides = {
        models.TextField: {'widget': CustomAdminPagedownWidget},
    }

    fieldsets = (
        (None, {
            'fields': ('title', 'slug', 'status', 'content', 'photo', 'tags',),
        }),
    ) + VersionedAdmin.fieldsets


admin.site.register(Post, PostAdmin)
