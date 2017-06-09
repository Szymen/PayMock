from django.db import models
from .firmy_model import Firma


class Platnosci(models.Model):
    date = models.DateTimeField('date published')
    koszt = models.DecimalField(max_digits=8, decimal_places=2)
    nazwaFirmy = models.ForeignKey(Firma, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "Płatności"