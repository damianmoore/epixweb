from django.contrib import admin

from models import Post


class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'status', 'created', 'updated')
    list_filter = ('status', 'created', 'updated')
    search_fields = ('title', 'slug', 'status')
    ordering = ('slug', 'created', 'updated')


admin.site.register(Post, PostAdmin)
