# Generated by Django 5.0.1 on 2024-04-24 17:29

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0003_alter_answer_uuid_alter_category_uuid_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='answer',
            name='uuid',
            field=models.UUIDField(default=uuid.UUID('7fc1ca93-7bd3-4bf1-a69b-2673904b1865'), editable=False, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='category',
            name='uuid',
            field=models.UUIDField(default=uuid.UUID('7fc1ca93-7bd3-4bf1-a69b-2673904b1865'), editable=False, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='question',
            name='uuid',
            field=models.UUIDField(default=uuid.UUID('7fc1ca93-7bd3-4bf1-a69b-2673904b1865'), editable=False, primary_key=True, serialize=False),
        ),
    ]
