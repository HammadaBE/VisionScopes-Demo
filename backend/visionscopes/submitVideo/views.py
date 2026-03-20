from django.shortcuts import render
from .models import VideoSubmission
from .serializers import VideoSubmissionSerializer

from django.contrib.auth.models import User
from rest_framework import generics
#from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny

from submitVideo import serializers


# Create your views here.

class SubmitVideoView(generics.ListCreateAPIView):
    queryset = VideoSubmission.objects.all()
    serializer_class = VideoSubmissionSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return VideoSubmission.objects.filter(author=user)
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            raise serializers.ValidationError(serializer.errors)

def submit_video(request):
    return render(request, 'submitVideo/submit_video.html')


class SubmitVideoDelete(generics.DestroyAPIView):
    
    serializer_class = VideoSubmissionSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return VideoSubmission.objects.filter(author=user)
    