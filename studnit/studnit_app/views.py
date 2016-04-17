from django.shortcuts import render
from django.contrib.auth import authenticate, logout
from django.contrib.auth import login as login_1

from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from studnit import settings

def login(request):
    next = request.GET.get('next', '/home/')
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)

        if user is not None:
            if user.is_active:
                login_1(request, user)
                print('test')
                return HttpResponseRedirect('/home/')
            else:
                return HttpResponse("Account is not active at the moment.")
        else:
            return HttpResponseRedirect(settings.LOGIN_URL)
    return render(request, "studnit_app/index.html", {'next': next})

def home(request):
	 return render(request, 'studnit_app/home.html', {})


def y12(request):
	return render(request, 'studnit_app/y12.html',{})


def Post(request):
    if request.method == "POST":
        msg = request.POST.get('msgbox', None)
        c = Chat(user=request.user, message=msg)
        if msg != '':
            c.save()
        return JsonResponse({ 'msg': msg, 'user': c.user.username })
    else:
        return HttpResponse('Request must be POST.')

