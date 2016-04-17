from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^login/$', views.login, name='login'),
    	url(r'^home/$', views.home, name='home'),
	url(r'^home/y12$',views.y12,name='y12'),
]

