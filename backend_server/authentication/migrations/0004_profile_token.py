# Generated by Django 4.2.1 on 2023-06-01 23:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0003_alter_profile_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='token',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
