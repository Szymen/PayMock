import json

from django.shortcuts import render, render_to_response
from django.shortcuts import HttpResponse
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


@csrf_exempt  # we should give everybody a chance to get one.
def get_token(request):
    print(request.body)

    if request.method != 'POST': # it should be post
        return HttpResponse("FALSCHE RICHTUNG!", 418)

    else:  # means method is POST
        response = {
            "access_token": "8f79c971-195e-43f5-bd83-ad2104414acc",
            "token_type": "bearer",
            "expires_in": 43199,
            "grant_type": "client_credentials"
            }

        return HttpResponse(json.dumps(response))
