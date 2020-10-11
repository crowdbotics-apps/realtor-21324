# Generated by Django 2.2.16 on 2020-10-10 19:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("course", "0001_initial"),
        ("users", "0002_auto_20201010_1033"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="group",
            field=models.ManyToManyField(
                blank=True, related_name="user_group", to="course.Group"
            ),
        ),
    ]
