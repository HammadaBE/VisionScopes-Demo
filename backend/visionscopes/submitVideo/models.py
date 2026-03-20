from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class VideoSubmission(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    #video_file = models.FileField(upload_to='videos/')
    submitted_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='video_submissions')

    def __str__(self):
        return self.title
    