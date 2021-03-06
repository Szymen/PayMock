from django.shortcuts import render, render_to_response
from django.shortcuts import HttpResponse
from django.views.generic import TemplateView


class OverView(TemplateView):
    template_name = "overview.html"


def over_view(request):
    return render(request, "overview.html")


def index(request):
    print("Dostalem taki request {}".format(request))
    return HttpResponse("Hello world!")


def payment_agreement(request):
    a = {"name": "Bilet wstępu: Zawody w strzelaniu stojąc bokiem", "cost": "100", "currency": "PLN"}
    b = {"name": "Wypożyczenie sprzętu ochronnego", "cost": "200", "currency": "PLN"}
    c = {"name": "Opłata na ubezpieczenie", "cost": "12", "currency": "PLN"}
    suma = 312

    data = {
        "elements_list": [a, b, c],
        "suma" : suma
    }

    return render_to_response("payment_agreement.html", data)


def thanks_page(request):
    resp = render(request, 'thanks_page.html')
    return HttpResponse(resp)


def agree_at_bank(request):
    resp = render(request, 'agree_at_bank.html')
    return HttpResponse(resp)


def order(request):

    if request.method != 'POST': #it should be post
        return HttpResponse("FALSHE RICHTUNG!", 418)

    else:
        return HttpResponse("BRAWO!")


def get_token(request):
    resp = "TOKEN"
    return HttpResponse(resp)
