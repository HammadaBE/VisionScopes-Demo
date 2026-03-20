"""
URL configuration for visionscopes project.
The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
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
from api.views import UserCreateView
from rest_framework_simplejwt.views import TokenRefreshView
from api.serializers import CustomTokenObtainPairView  # 👈 swapped to custom view
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    # built-in authentication (login, logout, password reset etc.)
    path('accounts/', include('django.contrib.auth.urls')),
    # our web application
    path('web', include('web.urls')),
    # submit video page
    path('submitVideo/', include('submitVideo.urls')),
    # API endpoint for user registration
    path('api/user/register/', UserCreateView.as_view(), name='register'),
    # API endpoints for JWT authentication
    path('api/token/', CustomTokenObtainPairView.as_view(), name='get_token'),  # 👈 swapped
    path('api/token/refresh/', TokenRefreshView.as_view(), name='refresh'),
    # for browsable API login/logout in development
    path('api-auth/', include('rest_framework.urls')),
    #path('api/', include('api.urls')),  # Include API app URLs
]

# serve media uploads in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)