from _Serializer.serializer import Serializer as S
from django.http import JsonResponse
import json
import time

class API:

    @classmethod
    def endpoint(cls, Expected):
        def decorate(view):
            def form_response(request):
                # TODO - delete for production
                time.sleep(2)
                # - for testing purposes (loading masks)
                if request.method != Expected.request_method:
                    return JsonResponse({}, status=404)
                request = Expected().get_from_request(request)
                if not request:
                    return JsonResponse({}, status=403)
                if not cls.is_authenticated(request, Expected.auth_status):
                    return JsonResponse({}, status=401)
                return JsonResponse(S.serialize(view(request)))
            return form_response
        return decorate

    @staticmethod
    def is_authenticated(request, auth_status):
        if auth_status == "user":
            return request.user.is_authenticated
        if auth_status == "admin":
            return request.user.is_superuser
        return True
