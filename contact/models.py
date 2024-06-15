from django.db import models

class Contact_form(models.Model):
    name = models.CharField(max_length=50, null=True)
    emial = models.CharField(max_length=30, null=True),
    phone = models.CharField(max_length=15, null=True)
    message = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name

# Create your models here.
