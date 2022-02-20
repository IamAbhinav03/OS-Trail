from rest_framework import serializers
from .models import Questions

class QuestionSerializer(serializers.ModelSerializer):
	class Meta:
		model = Questions
		fields = ['id', 'category', 'prompt', 'num_options', 'option1', 'option2', 'option3']