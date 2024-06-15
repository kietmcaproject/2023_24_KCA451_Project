from django.shortcuts import render
from myquiz.models import MyQuiz
from django.http import JsonResponse
import random
from django.contrib.auth.decorators import login_required


# Create your views here.
@login_required(login_url="/login/")
def quiz(request):
     # return HttpResponse("hellp malik")
    total_questions = MyQuiz.objects.count()
    
    # Generate 10 unique random indices
    random_indices = random.sample(range(total_questions), 10)
    
    # Fetch questions based on random indices
    random_questions = MyQuiz.objects.filter(pk__in=random_indices).values('quetion', 'option_a', 'option_b', 'obtion_c', 'option_d', 'correct_option')

    data = list(random_questions)
    # quiz_data_json = json.dumps(list(random_questions))
    
    # return render(request, 'myquiz.html', {'data': quiz_data_json})
    # return render(request, 'myquiz.html', {'data': random_questions})
    print(list(random_questions)[0]["quetion"])
    return render(request, 'myquiz.html')


def get_quiz_data(request):
    # return HttpResponse("hellp malik")
    total_questions = MyQuiz.objects.count()
    
    # Generate 10 unique random indices
    random_indices = random.sample(range(total_questions), 10)
    
    # Fetch questions based on random indices
    random_questions = MyQuiz.objects.filter(pk__in=random_indices).values('quetion', 'option_a', 'option_b', 'obtion_c', 'option_d', 'correct_option')

    # if random_indices != None:
    return JsonResponse(list(random_questions), safe=False)

