from django.urls import path
from .import views

urlpatterns = [
    path('quiz/', views.quiz, name="quiz"),
    # path('get_quiz_data/', views.get_quiz_data, name="get_quiz_data"),
    path('get-quiz-data/', views.get_quiz_data, name='get_quiz_data')
    # path('api/get-quiz/', views.get_quiz, name="get_quiz")
]
