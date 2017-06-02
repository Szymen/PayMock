from django.db import models


class OrderRetrieveResponse(models.Model):
    def __init__(self):
        self.records = {}


class OrderCancelResponse(models.Model):
    def __init__(self):
        self.records ={}


class RefundCreateResponse(models.Model):
    def __init__(self):
        self.records ={}


class OrderStatusUpdateResponse(models.Model):
    def __init__(self):
        self.records ={}


class OrderCreateResponse(models.Model):
    def __init__(self):
        self.records ={}


