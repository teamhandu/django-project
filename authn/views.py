from django.shortcuts import render

# Create your views here.


def sign(requst):
    return render(requst,'authn/sign.html')