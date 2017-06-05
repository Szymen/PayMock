from django.shortcuts import render, render_to_response
from django.shortcuts import HttpResponse
from django.shortcuts import HttpResponseRedirect
from django.views.generic import TemplateView
from django.views.decorators.csrf import csrf_exempt

# Create your views here.


class OverView(TemplateView):
    template_name = "overview.html"


def over_view(request):
    return render(request, "overview.html")


def index(request):
    print("Dostalem taki request {}".format(request))
    return HttpResponse("Hello world!")


def payment_agreement(request):
    a = {"name": "aa", "cost": "10", "currency": "PLN"}
    b = {"name": "bb", "cost": "20", "currency": "EURO"}
    c = {"name": "cc", "cost": "32", "currency": "PESOS"}
    suma = 103

    data = {
        "elements_list": [a, b, c],
        "suma" : 103
    }

    return render_to_response("payment_agreement.html", data)

def thanksman(request):
    return render(request, 'thanksman.html')

def agree(request):
    return render(request, 'agree.html')

def order(request):

    if request.method != 'POST': #it should be post
        return HttpResponse("FALSHE RICHTUNG!", 418)

    else:
        return HttpResponse("BRAWO!")

def to_next_stage(request):

    return HttpResponseRedirect["/pay.html/"]

def getToken(request):
    if request.method == 'POST':
        grant_type = request.POST.get("grant_type")
        client_id = request.POST.get("client_id")
        client_secret = request.POST.get("client_secret")
