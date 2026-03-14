from rest_framework import viewsets
from .serializers import HabitSerializer
from .models import Habit


class HabitViewSet(viewsets.ModelViewSet):
    queryset = Habit.objects.all()
    serializer_class = HabitSerializer
