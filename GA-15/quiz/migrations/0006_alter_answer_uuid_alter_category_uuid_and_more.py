# Generated by Django 5.0.1 on 2024-05-07 10:36

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0005_alter_answer_uuid_alter_category_uuid_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='answer',
            name='uuid',
            field=models.UUIDField(default=uuid.UUID('2df2fbbb-b8b8-4ff5-bdb0-ed98b6776c48'), editable=False, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='category',
            name='uuid',
            field=models.UUIDField(default=uuid.UUID('2df2fbbb-b8b8-4ff5-bdb0-ed98b6776c48'), editable=False, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='question',
            name='uuid',
            field=models.UUIDField(default=uuid.UUID('2df2fbbb-b8b8-4ff5-bdb0-ed98b6776c48'), editable=False, primary_key=True, serialize=False),
        ),
    ]