# Generated by Django 5.0.1 on 2024-05-02 18:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resumeScanner', '0002_rename_feedback_resumescanner_resume_feedback_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='resumescanner',
            name='resume_type',
        ),
        migrations.AddField(
            model_name='resumescanner',
            name='resume_id',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
