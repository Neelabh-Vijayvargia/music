from django.db import models
import string
import random

def generate_unique_code():
    length = 6

    while True:
        #generate random code
        code = ''.join(random.choices(string.ascii_uppercase, k = length))

        #check code being unique
        if Room.objects.filter(code=code).count() == 0:
            break
    
    return code


# Create your models here.
# defining how a table looks in the database
# fat models + thin views

# room model
class Room(models.Model):
    # unique:=unique_key
    room_code = models.CharField(max_length=8, default='', unique=True)
    host = models.CharField(max_length=50, unique=True) #unique == only one room per host
    guest_can_pause = models.BooleanField(null = False, default=False)
    votes_to_skip = models.IntegerField(null = False, default = 1)
    created_at = models.DateTimeField(auto_now_add=True)

