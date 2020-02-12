from django.http import Http404
from django.views.generic import DetailView
from django_filters.views import FilterView

from .models import Project#, ProjectFilter


# class ProjectList(FilterView):
#     model = Project
#     filterset_class = ProjectFilter
#     queryset = Project.objects.filter(status='published', level=0)
#     paginate_by = 10


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
        return project

    def get_context_data(self, *args, **kwargs):
        context = super(ProjectDetail, self).get_context_data(*args, **kwargs)
        context['sub_projects'] = self.object.get_descendants().filter(status='published')
        # try:
        #     context['gallery'] = Gallery.objects.get(title_slug=self.object.slug)
        # except Gallery.DoesNotExist:
        #     pass
        return context
