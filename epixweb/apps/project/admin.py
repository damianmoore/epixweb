from django.contrib import admin
from treebeard.admin import TreeAdmin

from models import Project


class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'priority', 'status', 'created', 'updated')
    list_filter = ('status', 'created', 'updated')
    search_fields = ('title', 'slug', 'status')
    ordering = ('-priority',)


admin.site.register(Project, ProjectAdmin)
