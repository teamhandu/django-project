from django.shortcuts import render

# Create your views here.


def sign(requst):
    return render(requst,'registration/sign.html')

# def login(requst):
#     return render(requst,'accounts/login.html')