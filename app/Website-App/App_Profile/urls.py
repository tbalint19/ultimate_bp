from django.conf.urls import url
from . import views

urlpatterns = [

    url(r'^signup$', views.signup_user, name='signup_user'),
    url(r'^login$', views.login_user, name='login_user'),
    url(r'^logout$', views.logout_user, name='logout_user'),

    url(r'^auth$', views.auth, name='auth'),

]
