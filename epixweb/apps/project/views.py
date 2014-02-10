from django.http import Http404
from django.shortcuts import get_object_or_404
from django.views.generic import ListView, DetailView
from photologue.models import Gallery

from models import Project


class ProjectList(ListView):
    queryset = Project.objects.filter(status='published', level=0)
    paginate_by = 10


class ProjectDetail(DetailView):
    model = Project

    def get_object(self):
        slug_parts = self.kwargs['slug'].split('/')
        try:
            for i, slug in enumerate(slug_parts):
                if i == 0:
                    project = Project.objects.get(slug=slug_parts[i])
                else:
                    project = project.get_descendants().get(slug=slug_parts[i])
        except Project.DoesNotExist:
            raise Http404
        #import pdb; pdb.set_trace()
        #project = get_object_or_404(Project, slug=self.kwargs['slug'])
        return project

    def get_context_data(self, *args, **kwargs):
        context = super(ProjectDetail, self).get_context_data(*args, **kwargs)
        context['sub_projects'] = self.object.get_descendants().filter(status='published')
        try:
            context['gallery'] = Gallery.objects.get(title_slug=self.object.slug)
        except Gallery.DoesNotExist:
            pass
        return context
