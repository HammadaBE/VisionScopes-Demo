from django.urls import path
from . import views

urlpatterns = [
    path('', views.submit_video, name='submit_video'),
    path('api-videos/', views.SubmitVideoView.as_view(), name='submit_video_api'),
    path('api-videos/delete/<int:pk>/', views.SubmitVideoDelete.as_view(), name='submit_video_delete_api'), 

]