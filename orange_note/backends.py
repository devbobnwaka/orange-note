from django.contrib.auth import get_user_model
from django.contrib.auth.backends import ModelBackend

class EmailAuthBackend(ModelBackend):
    def authenticate(self, request, username:str =None, password:str=None, **kwargs):
        UserModel = get_user_model()
        try:
            user = UserModel.objects.get(email=username)
        except UserModel.DoesNotExist:
            return None
        else:
            if user.check_password(password):
                return user
        return None

# from django.contrib.auth.models import User, check_password

# class EmailAuthBackend(object):
#     def authenticate(self, username=None, password=None):
#         try:
#             user = User.objects.get(email=username)
#             if user.check_password(password):
#                 return user
#         except User.DoesNotExist:
#             return None

#     def get_user(self, user_id):
#         try:  
#             return User.objects.get(pk=user_id)
#         except User.DoesNotExist:
#             return None