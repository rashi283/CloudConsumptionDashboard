from django.db import models

# Create your models here.
class registration(models.Model):
    fname = models.CharField(max_length=100, default=None, blank=True)
    lname = models.CharField(max_length=100, default=None, blank=True)
    email = models.CharField(max_length=100, default=None, blank=True)

class cpu_data(models.Model):
    consName = models.CharField(max_length=100, default=None, blank=True)
    date = models.CharField(max_length=100, default=None, blank=True)
    time = models.CharField(max_length=100, default=None, blank=True)
    value = models.IntegerField(default=None, blank=True)