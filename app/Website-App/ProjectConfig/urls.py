from django.conf.urls import url, include

urlpatterns = [

    url(r'^profile/api/', include('App_Profile.urls')),
    url(r'^', include('Static.urls')),

]
