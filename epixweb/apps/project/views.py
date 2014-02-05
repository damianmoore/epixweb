from django.shortcuts import get_object_or_404
from django.views.generic import ListView, DetailView
from photologue.models import Gallery

from models import Project


class ProjectList(ListView):
    queryset = Project.objects.filter(status='published').order_by('-priority')
    paginate_by = 10

class ProjectDetail(DetailView):
    model = Project
    def get_context_data(self, *args, **kwargs):
        context = super(ProjectDetail, self).get_context_data(*args, **kwargs)
        try:
            context['gallery'] = Gallery.objects.get(title_slug=self.object.slug)
        except Gallery.DoesNotExist:
            pass
        return context
