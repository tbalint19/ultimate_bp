from App_Profile.requests import SignupRequest, LoginRequest, LogoutRequest, AuthRequest
from App_Profile.models import Profile
from _Middleware import API


@API.endpoint(SignupRequest)
def signup_user(request):
    errors = Profile.objects.check_if_possible(request.username, request.email)
    if not errors:
        Profile.objects.create_profile(request.username, request.email, request.password)
    return {'errors': errors}


@API.endpoint(LoginRequest)
def login_user(request):
    user = Profile.objects.authenticate_user(request, request.identification, request.password)
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
