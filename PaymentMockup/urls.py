"""PaymentMockup URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""

from django.conf.urls import url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

from PayMock import views


urlpatterns = [

    url(r'^api/v0_1/orders', views.order, name = 'order'),
    url(r'^admin', admin.site.urls, name = 'admin_panel'),
    url(r'^index', views.index, name='index'),
    url(r'^own', views.payment_agreement, name='payment_agreement'),
    url(r'^$', views.over_view, name='overview')

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
