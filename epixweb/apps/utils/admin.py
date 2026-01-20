from django.contrib import admin
from django import forms
from pagedown.widgets import AdminPagedownWidget


class CustomAdminPagedownWidget(AdminPagedownWidget):
    """Custom pagedown widget that excludes demo.css which breaks Django admin styling."""

    @property
    def media(self):
        # Completely override media to exclude demo.css
        return forms.Media(
            css={'all': ('admin/css/pagedown.css',)},
            js=(
                'admin/js/jquery.init.js',
                'pagedown/Markdown.Converter.js',
                'pagedown-extra/pagedown/Markdown.Converter.js',
                'pagedown/Markdown.Sanitizer.js',
                'pagedown/Markdown.Editor.js',
                'pagedown-extra/Markdown.Extra.js',
                'pagedown_init.js',
            )
        )


class VersionedAdmin(admin.ModelAdmin):
    fieldsets = (
        ('Created/Updated', {
            'classes': ('collapse',),
            'fields': ('created', 'updated')
        }),
    )
    # readonly_fields = ['created', 'updated']
