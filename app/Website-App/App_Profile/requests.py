import json


class SignupRequest:

    auth_status = "public"
    request_method = "POST"

    def get_from_request(self, request):
        try:
            request.username = json.loads(request.body.decode('utf-8'))['username']
            request.email = json.loads(request.body.decode('utf-8'))['email']
            request.password = json.loads(request.body.decode('utf-8'))['password']
            return request
        except:
            return None


class LoginRequest:

    auth_status = "public"
    request_method = "POST"

    def get_from_request(self, request):
        try:
            request.credential = json.loads(request.body.decode('utf-8'))["credential"]
            request.password = json.loads(request.body.decode('utf-8'))["password"]
            return request
        except:
            return None


class LogoutRequest:

    auth_status = "user"
    request_method = "GET"

    def get_from_request(self, request):
        try:
            return request
        except:
            return None


class AuthRequest:

    auth_status = "user"
    request_method = "GET"

    def get_from_request(self, request):
        try:
            return request
        except:
            return None

class UsernameCheckRequest:

    auth_status = "public"
    request_method = "GET"

    def get_from_request(self, request):
        try:
            request.username = request.GET.get("username")
            return request
        except:
            return None

class EmailCheckRequest:

    auth_status = "public"
    request_method = "GET"

    def get_from_request(self, request):
        try:
            request.email = request.GET.get("email")
            return request
        except:
            return None

class DetailsRequest:

    auth_status = "user"
    request_method = "GET"

    def get_from_request(self, request):
        try:
            return request
        except:
            return None
