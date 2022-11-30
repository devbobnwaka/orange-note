from django.urls import path
from . import views


app_name='core'
urlpatterns = [
    path('', views.index, name='index'),
    path('home/', views.home_view, name='home_view'),
    path('edit/<int:id>/', views.edit, name='edit'),
    path('delete/<int:id>/', views.delete, name='delete'),
    path('logout/', views.logout_view, name='logout_view'),
    path('test/', views.test_view, name='test_view'),
]
