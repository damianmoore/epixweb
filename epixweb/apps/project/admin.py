from django.contrib import admin
from django.db import models
from mptt_tree_editor.admin import TreeEditor
from pagedown.widgets import AdminPagedownWidget

from .models import Project


# class ProjectAdmin(TreeEditor):
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'status', 'created', 'updated')
    list_filter = ('status', 'created', 'updated')
    search_fields = ('title', 'slug', 'status')
    exclude = ('created', 'updated')

    formfield_overrides = {
        models.TextField: {'widget': AdminPagedownWidget},
    }


admin.site.register(Project, ProjectAdmin)
