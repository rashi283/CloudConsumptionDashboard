from django.conf import settings
from django.contrib import messages
from django.core.mail import send_mail
from django.shortcuts import render, render_to_response, RequestContext, HttpResponseRedirect, HttpResponse
from django import forms
from django.forms import ModelForm
from myapp.models import registration
from django.views.decorators.csrf import csrf_exempt
#import requests
import json
from .models import registration
from .models import cpu_data as cpu_data
from django.views.generic import ListView
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .forms import RegistrationForm

from myapp.forms import *
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from django.views.decorators.csrf import csrf_protect

# Create your views here.
def registration(request):
    form = registrationForm(request.POST or None)
    if form.is_valid():
        save_it = form.save(commit=False)
        save_it.save()
        return HttpResponse('Registration successful')
        
    return render_to_response('registration.html', locals(), context_instance=RequestContext(request) )


def consumer_Dashboard(request):
    return render_to_response('consumer_Dashboard.html', locals(), context_instance=RequestContext(request))
    
def provider_Dashboard(request):
    return render_to_response('provider_Dashboard.html', locals(), context_instance=RequestContext(request))

def index(request):
    return render_to_response('index.html', locals(), context_instance=RequestContext(request))

#def cpu_pagination(ListView):
#    queryset = cpu_data.objects.all()      # shorthand for setting queryset = models.Car.objects.all()
#    template_name = '/cpu_pagination.html'  # optional (the default is app_name/modelNameInLowerCase_list.html; which will look into your templates folder for that path and file)
#    context_object_name = "cpu_data"    #default is object_list as well as model's_verbose_name_list and/or model's_verbose_name_plural_list, if defined in the model's inner Meta class
#    paginate_by = 10
#    #return render_to_response('cpu_pagination.html', locals(), context_instance=RequestContext(request))

def cpu_pagination(request):
    cpu_data_list = cpu_data.objects.all()      # shorthand for setting queryset = models.Car.objects.all()
    paginator = Paginator(cpu_data_list, 5)
    page = request.GET.get('page')
    try:
        cpu_data_vals = paginator.page(page)
    except PageNotAnInteger:
        # If page is not an integer, deliver first page.
        cpu_data_vals = paginator.page(1)
    except EmptyPage:
        # If page is out of range (e.g. 9999), deliver last page of results.
        cpu_data_vals = paginator.page(paginator.num_pages)
    return render_to_response('cpu_pagination.html', {"cpu_data_vals": cpu_data_vals})

@csrf_protect
def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            user = User.objects.create_user(
            username=form.cleaned_data['username'],
            password=form.cleaned_data['password1'],
            email=form.cleaned_data['email']
            )
            return HttpResponseRedirect('/register/success/')
    else:
        form = RegistrationForm()
    variables = RequestContext(request, {
    'form': form
    })
 
    return render_to_response(
    'registration/register.html',
    variables,
    )
 
def register_success(request):
    return render_to_response(
    'registration/success.html',
    )
 
def logout_page(request):
    logout(request)
    return HttpResponseRedirect('/')
 
@login_required
def home(request):
    return render_to_response(
    'home.html',
    { 'user': request.user }
    )

