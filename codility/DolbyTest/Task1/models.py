from django.db import models


class Project(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)


class User(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=30)


class Bug(models.Model):
    # for foreign fields use on_delete=models.CASCADE
    id = models.AutoField(primary_key=True)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.CharField(max_length=100)
