from django.contrib.auth.models import User
from rest_framework import serializers
from .models import VideoSubmission


class VideoSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoSubmission
        fields = ["id", "title", "description", "submitted_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}