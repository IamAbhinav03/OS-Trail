from operator import mod
from sre_parse import CATEGORIES
from unicodedata import category
from django.db import models

# Create your models here.

# specifying categories
CATEGORIES = (
	("l", "linux"),
	("w", "windows"),
	("m", "mac"),
	("u", "unix"),
	("p", "python"),
)

class Questions(models.Model):
	created = models.DateTimeField(auto_now_add=True)
	category = models.CharField(max_length=20, choices=CATEGORIES)
	propmt = models.TextField(blank=True)
	num_options = models.IntegerField()
	option1 = models.TextField(blank=True)
	option2 = models.TextField(blank=True)
	option3 = models.TextField(blank=True)

	class Meta:
		ordering = ['created']


	