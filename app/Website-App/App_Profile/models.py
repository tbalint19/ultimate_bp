from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class ProfileManager(models.Manager):

    def create_profile(self, username, email, password):
        user = User.objects.create_user(username=username, email=email, password=password)
        profile = Profile(user_obj=user).set_confirmation_code()
        profile.save()
        return user

    def check_if_possible(self, username, email):
        return list(filter(None, [
            "username" if self.filter(user_obj__username=username).exists() else None,
            "email" if self.filter(user_obj__email=email).exists() else None]))

    def authenticate_user(self, request, credential, password):
        if "@" in credential:
            if self.filter(user_obj__email=credential).exists():
                username = self.get(user_obj__email=credential).user_obj.username
                return authenticate(request, username=username, password=password)
            return None
        return authenticate(request, username=credential, password=password)

class Profile(models.Model):

    user_obj = models.OneToOneField(User, on_delete=models.CASCADE)

    objects = ProfileManager()

    def __str__(self):
        return self.user_obj.username + "'s profile'"
