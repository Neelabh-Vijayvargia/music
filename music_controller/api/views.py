from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
# code for creating views

def main(request):
    return HttpResponse("<h1>Hello</h1>")