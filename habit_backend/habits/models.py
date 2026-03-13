from django.db import models


class Habit(models.Model):

    title = models.CharField(max_length=512)
    description = models.TextField()
    created_at = models.DateField(auto_now_add=True)
    is_completed = models.BooleanField()
