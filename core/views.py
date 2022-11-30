from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import CustomUserCreationForm, AuthForm, NoteForm
from django.urls import reverse
from django.core.paginator import Paginator
from .models import Note
from django.http import JsonResponse
from pprint import pprint
import json

# Create your views here.
def index(request):
    if request.user.is_authenticated:
        return redirect(reverse('core:home_view'))
    signup_form = CustomUserCreationForm(request.POST or None)
    signIn_form = AuthForm(request.POST or None)

    context = {
        'signup_form': signup_form,
        'signIn_form': signIn_form,
    }

    if signup_form.is_valid():
        user_obj = signup_form.save()
        messages.success(request, 'Sign up successful, you can now sign in!!!')
        home = reverse('core:home_view')
        return redirect(home)
    else:
        messages.error(request, 'Something went wrong try again!!!')
        
    if signIn_form.is_valid():
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(request, username=email, password=password)
        if user is None:
            messages.error(request, 'Invalid username or password!!!')
            return render(request, 'core/index.html', context)
        login(request, user)
        messages.success(request, 'You are logged in!!!')
        home = reverse('core:home_view')
        return redirect(home)

    return render(request, 'core/index.html', context)

    

@login_required
def home_view(request):
    note_list = Note.objects.all().order_by('-id')
    paginator = Paginator(note_list, 4)

    page_number = request.GET.get('page')

    if page_number:
        notes = paginator.get_page(page_number)
    else:
        notes = paginator.get_page(1)

    # pprint(page_obj)
    is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'
    if is_ajax:
        if request.method == "POST":
            data = json.load(request)
            form = NoteForm(data) 
            title = data.get('title')
            note = data.get('note')
            if title or len(note) > 11:
                note = form.save(commit=False)
                if note.user_id is None:
                    note.user_id = request.user.id
                note.save() 
        else:
            pass  
    form = NoteForm()
    context = {
        'form':form,
        'notes': notes
    }
    return render(request, 'core/home.html', context)

@login_required
def delete(request, id):
    pass

def edit(request, id):
    
    return redirect(reverse('core:home_view'))


@login_required
def logout_view(request):
    if request.method == "POST":
        logout(request)
        return redirect("core:index")
    return render(request, "core/logout.html")

def test_view(request):
    form = CustomUserCreationForm()
    context = {
        'form': form
    }
    # form.order_fields(field_order=['email', 'username', 'password1', 'password2'])
    return render(request, 'core/test.html', context)


