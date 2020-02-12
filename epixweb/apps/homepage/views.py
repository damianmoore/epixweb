from django.shortcuts import render
from django.template.context import RequestContext


def homepage(request):
    return render(request, 'homepage.html')
