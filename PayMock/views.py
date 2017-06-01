from django.shortcuts import render, render_to_response
from django.shortcuts import HttpResponse
from django.views.generic import TemplateView

# Create your views here.


class OverView(TemplateView):
    template_name = "overview.html"


def index(request):
    print("Dostalem taki request {}".format(request))
    return HttpResponse("Hello world!")



def payment_agreement(request):
    data = {
        "text": "To jest tekst"

    }

    return render_to_response("payment_agreement.html", data)


def order(request):

    if request.method != 'POST': #it should be post
        return HttpResponse("FALSHE RICHTUNG!", 418)

    else:
        return HttpResponse("BRAWO!")