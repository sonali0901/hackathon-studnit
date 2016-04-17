from django.shortcuts import render

def home(request):
    return render(request, 'studnit_app/index.html', {})
