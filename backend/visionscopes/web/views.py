from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, logout
from django.contrib.auth.forms import UserCreationForm

import os
from django.conf import settings

# public landing page

def index(request):
    return render(request, 'web/index.html')


def signup(request):
    """Registration view using Django's built-in UserCreationForm."""
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('web:dashboard')
    else:
        form = UserCreationForm()
    return render(request, 'registration/signup.html', {'form': form})

def logout_view(request):
    """Logout view."""
    logout(request)
    return redirect('web:index')

def login(request):
    """Login view using Django's built-in authentication views."""
    # We will use the built-in login view, so just redirect to it
    return redirect('login')  # This will go to the URL defined by django.contrib.auth.urls


@login_required
def dashboard(request):
    """Simple protected page for logged-in users.

    Handles video uploads in a very basic way: when the form is POSTed with a
    file field named `video` we write it to a `videos` folder inside the
    project root.  This folder is also used as MEDIA_ROOT in settings.
    """
    context = {}

    # the view is decorated with @login_required, but we also guard in code
    # to make the intent explicit and avoid saving anything for anonymous users.
    if request.method == 'POST' and request.user.is_authenticated and request.FILES.get('video'):
        video_file = request.FILES['video']
        # determine save directory; fall back if settings.MEDIA_ROOT is empty
        save_dir = getattr(settings, 'MEDIA_ROOT', '')
        if not save_dir:
            # this shouldn't normally happen, but protect against misconfiguration
            save_dir = os.path.join(settings.BASE_DIR, 'videos')

        # ensure destination directory exists, makedirs handles paths safely
        os.makedirs(save_dir, exist_ok=True)
        dest_path = os.path.join(save_dir, video_file.name)

        # write the uploaded chunks to disk
        with open(dest_path, 'wb+') as dest:
            for chunk in video_file.chunks():
                dest.write(chunk)

        context['message'] = f"{video_file.name} uploaded successfully."
    elif request.method == 'POST' and not request.user.is_authenticated:
        # should never happen because of the decorator, but handle softly
        return redirect('login')

    return render(request, 'web/dashboard.html', context)

