from django.shortcuts import get_object_or_404
from django.views.generic import ListView, DetailView
from models import Post


class PostList(ListView):
    queryset = Post.objects.filter(status='published').order_by('-created')
    paginate_by = 10

class PostDetail(DetailView):
    model = Post
