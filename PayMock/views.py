from django.shortcuts import render
from django.shortcuts import HttpResponse

# Create your views here.


def index(request):
    print("Dostalem taki request {}".format(request))
    return HttpResponse("Hello world!")