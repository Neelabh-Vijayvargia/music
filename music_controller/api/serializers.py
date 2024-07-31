# def serializer: takes model and translates it into JSON response

from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'room_code', 'host','guest_can_pause','votes_to_skip', 'created_at')

class CreateRoomSerializer(serializers.ModelSerializer):
    #incoming serializer to handle crate-room POST request
    class Meta:
        model = Room
        fields = ('guest_can_pause', 'votes_to_skip')