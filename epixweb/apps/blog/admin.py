from django.contrib import admin
from django.db import models
from pagedown.widgets import AdminPagedownWidget

from .models import Post


class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'status', 'created', 'updated')
    list_filter = ('status', 'created', 'updated')
    search_fields = ('title', 'slug', 'status')
    ordering = ('-created',)
    prepopulated_fields = {"slug": ("title",)}
    exclude = ('created', 'updated')

    formfield_overrides = {
        models.TextField: {'widget': AdminPagedownWidget},
    }


admin.site.register(Post, PostAdmin)
