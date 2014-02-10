from django.contrib import admin
from mptt_tree_editor.admin import TreeEditor

from models import Project


class ProjectAdmin(TreeEditor):
    list_display = ('title', 'slug', 'priority', 'status', 'created', 'updated')
    list_filter = ('status', 'created', 'updated')
    search_fields = ('title', 'slug', 'status')
    ordering = ('-priority',)


admin.site.register(Project, ProjectAdmin)
