from datetime import datetime, timedelta

from django.db import models


class VersionedModel(models.Model):
    created = models.DateTimeField(blank=True)
    updated = models.DateTimeField(blank=True)

    def save(self, *args, **kwargs):
        now = datetime.now()
        if not self.created:
            self.created = now
        self.updated = now
        super(VersionedModel, self).save()
