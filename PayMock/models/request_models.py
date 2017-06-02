from django.db import models

# Create your models here.


class OrderCreateRequest(models.Model):
    def __init__(self):
        self.records ={}


class OrderStatusUpdateRequest(models.Model):
    def __init__(self):
        self.records ={}


class RefundCreateRequest(models.Model):
    def __init__(self):
        self.records ={}


class OrderCancelRequest(models.Model):
    def __init__(self):
        self.records ={}


class OrderRetrieveRequest(models.Model):
    def __init__(self):
        self.records ={}

