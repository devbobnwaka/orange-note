from django import forms  
from django.contrib.auth.models import User  
from django.contrib.auth.forms import UserCreationForm  
from django.core.exceptions import ValidationError  
# from django.forms.fields import EmailField  
from django.forms.forms import Form 
from .models import Note 

  
class CustomUserCreationForm(UserCreationForm):  
    username = forms.CharField(label='Username', 
                                min_length=3, 
                                max_length=150, 
                                widget=forms.TextInput(attrs={'class': "username", 'id': "username", 'placeholder':"username"}))  
    email = forms.EmailField(label='Email',
                                min_length=3, 
                                max_length=150, 
                                widget=forms.TextInput(attrs={'class': "mail", 'id':"mail", 'placeholder':"email"}))  
    password1 = forms.CharField(label='Password', 
                                widget=forms.PasswordInput(attrs={'class': "password", 'id':"pword", 'placeholder':"password"}))  
    password2 = forms.CharField(label='Confirm Password', 
                                widget=forms.PasswordInput(attrs={'class': "confirmPassword", 'id':"confirm_password", 'placeholder':"confirm password"}))
    field_order=['email', 'username', 'password1', 'password2']

    def username_clean(self):  
        username = self.cleaned_data['username'].lower()  
        new = User.objects.filter(username = username)  
        if new.count():  
            raise ValidationError("User Already Exist") 
        return username  
  
    def email_clean(self):  
        email = self.cleaned_data['email'].lower()  
        new = User.objects.filter(email=email)  
        if new.count():  
            raise ValidationError("Email Already Exist")  
        return email  
  
    def clean_password2(self):  
        password1 = self.cleaned_data['password1']  
        password2 = self.cleaned_data['password2']  
  
        if password1 and password2 and password1 != password2:  
            raise ValidationError("Password don't match")  
        return password2  
  
    def save(self, commit = True):  
        user = User.objects.create_user(  
            self.cleaned_data['username'],  
            self.cleaned_data['email'],  
            self.cleaned_data['password1']  
        )  
        return user  


class AuthForm(forms.Form):
    email = forms.EmailField(label='Email',
                                min_length=3, 
                                max_length=150, 
                                widget=forms.TextInput(attrs={'class': "mail2", 'id':"email", 'placeholder':"email"}))  
    password = forms.CharField(label='Password', 
                                widget=forms.PasswordInput(attrs={'class': "password2", 'id':"password", 'placeholder':"password"})) 


class NoteForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['note'].label = ""

    class Meta:
        model = Note
        fields = ['title', 'note']
        widgets = {
            'title': forms.TextInput(attrs={
                'class': "title-input",
                'placeholder': 'Enter title',
                'value':''
                }),
            'note': forms.Textarea(attrs={ 
                'hidden': 'hidden',
                'name':'note',
                'class':'note-textarea',
                'value':''
                })
        }