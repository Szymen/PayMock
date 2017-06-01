from django.db import models


class Buyer(models.Model):
    customerID = models.IntegerField()
    email = models.EmailField() #required somewhere ^-^