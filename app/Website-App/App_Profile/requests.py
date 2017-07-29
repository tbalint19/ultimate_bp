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
            request.identification = json.loads(request.body.decode('utf-8'))["identification"]
            request.password = json.loads(request.body.decode('utf-8'))["password"]
            return request
        except:
            return None


class LogoutRequest:

    auth_status = "user"
    request_method = "POST"

    def get_from_request(self, request):
        try:
            return request
        except:
            return None
