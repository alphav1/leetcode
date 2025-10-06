import json
from django.http import HttpResponse
from django.http import HttpResponseNotFound
from django.http import HttpResponseNotAllowed

from .models import Bug, Project, User


def bugs(request):
    if request.method != 'GET':
        return HttpResponseNotAllowed(['GET'])

    project_id = request.GET.get('project_id')
    user_id = request.GET.get('user_id')

    if not project_id and not user_id:
        return HttpResponseNotFound()

    bug_queryset = Bug.objects.all()

    if project_id:
        try:
            project = Project.objects.get(id=project_id)
            bug_queryset = bug_queryset.filter(project=project)
        except Project.DoesNotExist:
            return HttpResponseNotFound()

    if user_id:
        try:
            user = User.objects.get(id=user_id)
            bug_queryset = bug_queryset.filter(user=user)
        except User.DoesNotExist:
            return HttpResponseNotFound()

    # Build response data
    bugs_data = []
    for bug in bug_queryset:
        bugs_data.append({
            "id": bug.id,
            "description": bug.description,
            "username": bug.user.username,
            "project": bug.project.name
        })

    response_data = {"bugs": bugs_data}

    return HttpResponse(
        content=json.dumps(response_data),
        content_type='application/json',
        status=200
    )
