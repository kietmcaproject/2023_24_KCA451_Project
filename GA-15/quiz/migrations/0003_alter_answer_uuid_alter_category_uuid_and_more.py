# Generated by Django 5.0.1 on 2024-04-24 17:18

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0002_rename_options_question_question_alter_answer_uuid_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='answer',
            name='uuid',
            field=models.UUIDField(default=uuid.UUID('5d574d7f-5b94-4daf-b05f-16399609293c'), editable=False, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='category',
            name='uuid',
            field=models.UUIDField(default=uuid.UUID('5d574d7f-5b94-4daf-b05f-16399609293c'), editable=False, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='question',
            name='uuid',
            field=models.UUIDField(default=uuid.UUID('5d574d7f-5b94-4daf-b05f-16399609293c'), editable=False, primary_key=True, serialize=False),
        ),
    ]
