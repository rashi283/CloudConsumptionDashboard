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
from .forms import registrationForm

# Create your views here.
def registration(request):
    form = registrationForm(request.POST or None)
    if form.is_valid():
        save_it = form.save(commit=False)
        save_it.save()
        return HttpResponse('Registration successful')
        
    return render_to_response('registration.html', locals(), context_instance=RequestContext(request) )
