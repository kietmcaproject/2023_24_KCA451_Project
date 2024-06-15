"""
URL configuration for MockMaster project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from MockMaster import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('interview.urls')),
    path('', include('quiz.urls')),
    path('', include('resumeScanner.urls')),
    path('', include('myquiz.urls')),
    path('', include('dashboard.urls')),
    path('', include('contact.urls')),
    path('', views.home_page, name='home_page'),
    path('register/', views.user_register, name='user_register'),
    # path('register/', views.verfiacation, name='user_register'),
    path('login/', views.user_login , name='user_login'),
    path('logout/', views.user_logout, name='user_logout'),
    path('about/', views.about_us, name='about_us'),
    path('verification/', views.verfiacation, name='otp_verification')

] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)