from django.test import TestCase
from django.contrib.auth.models import User
from django.urls import reverse
from django.core.files.uploadedfile import SimpleUploadedFile
from django.test import override_settings
from django.conf import settings
import os
import tempfile
import shutil


# Create your tests here.

class DashboardUploadTests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user('tester', password='pass')

    @override_settings(MEDIA_ROOT=tempfile.mkdtemp())
    def test_upload_saves_video(self):
        self.client.login(username='tester', password='pass')
        video = SimpleUploadedFile('test.mp4', b'fakevideo')
        response = self.client.post(reverse('web:dashboard'), {'video': video})
        self.assertEqual(response.status_code, 200)
        saved_path = os.path.join(settings.MEDIA_ROOT, 'test.mp4')
        self.assertTrue(os.path.exists(saved_path))

        # cleanup the temporary directory ourselves since override_settings may not
        # remove it automatically until the decorator finishes.
        shutil.rmtree(settings.MEDIA_ROOT)

    def test_upload_without_media_root_falls_back(self):
        # simulate misconfiguration by clearing MEDIA_ROOT
        self.client.login(username='tester', password='pass')
        with override_settings(MEDIA_ROOT=''):
            video = SimpleUploadedFile('fallback.mp4', b'data')
            response = self.client.post(reverse('web:dashboard'), {'video': video})
            self.assertEqual(response.status_code, 200)
            # the code should write to BASE_DIR/videos
            default_dir = os.path.join(settings.BASE_DIR, 'videos')
            self.assertTrue(os.path.exists(os.path.join(default_dir, 'fallback.mp4')))
            # clean up fallback file/dir
            if os.path.exists(default_dir):
                shutil.rmtree(default_dir)

    def test_logout_clears_session(self):
        # log the user in then hit logout view and ensure they become anonymous
        self.client.login(username='tester', password='pass')
        response = self.client.get(reverse('web:logout'))
        # logout_view redirects to index
        self.assertRedirects(response, reverse('web:index'))
        # subsequent request should show anonymous nav
        response2 = self.client.get(reverse('web:index'))
        self.assertNotContains(response2, 'Hello tester!')
