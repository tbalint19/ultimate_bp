from App_Profile.models import Profile
from App_Profile.requests import *
from _Middleware import API


@API.endpoint(SignupRequest)
def signup_user(request):
    errors = Profile.objects.check_if_possible(request.username, request.email)
    if not errors:
        Profile.objects.create_profile(request.username, request.email, request.password)
    return {'errors': errors}


@API.endpoint(LoginRequest)
def login_user(request):
    user = Profile.objects.authenticate_user(request, request.credential, request.password)
    if user is not None:
        from django.contrib.auth import login
        login(request, user)
    return {"is_successful": user is not None}


@API.endpoint(LogoutRequest)
def logout_user(request):
    from django.contrib.auth import logout
    logout(request)
    return {'is_successful': True}


@API.endpoint(AuthRequest)
def auth(request):
    return {'is_successful': True}


@API.endpoint(UsernameCheckRequest)
def check_username(request):
    return {'username_exists': Profile.objects.filter(user_obj__username=request.username).exists()}


@API.endpoint(EmailCheckRequest)
def check_email(request):
    return {'email_exists': Profile.objects.filter(user_obj__email=request.email).exists()}


@API.endpoint(DetailsRequest)
def user_details(request):
    return {'profile': request.user.profile}
