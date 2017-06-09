from django.db import models


class Firma(models.Model):
    idFirmy = models.IntegerField()
    nazwaFirmy = models.CharField(max_length=240)

    def __str__(self):
        return 'Firma: ' + self.nazwaFirmy

    class Meta:
        verbose_name_plural = "Firmy"