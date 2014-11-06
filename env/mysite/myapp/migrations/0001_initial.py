# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='registration',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('fname', models.CharField(default=None, max_length=100, blank=True)),
                ('lname', models.CharField(default=None, max_length=100, blank=True)),
                ('email', models.CharField(default=None, max_length=100, blank=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
