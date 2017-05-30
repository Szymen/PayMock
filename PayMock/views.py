from django.shortcuts import render, render_to_response
from django.shortcuts import HttpResponse

# Create your views here.


def index(request):
    print("Dostalem taki request {}".format(request))
    return HttpResponse("Hello world!")


def payU(request):
    return render(request, "PayUstrona/Podsumowanie.html")


def payment_agreement(request):
    data = {
        "text": "To jest tekst"

    }

    return render_to_response("PaymentAgreement.html", data)