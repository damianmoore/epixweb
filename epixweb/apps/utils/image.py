import json

from easy_thumbnails.files import get_thumbnailer
import filer
from filer.models import Image, Folder


def get_thumbnail(obj, width=492, height=1000, crop=False):
    options = {
        'size': (width, height),
        'crop': crop,
        'quality': 60,
    }
    thumbnailer = get_thumbnailer(obj)
    return thumbnailer.get_thumbnail(options).url


def gallery_dir(path):
    files = []
    try:
        parent = None
        for component in path.split('/'):
            parent = Folder.objects.get(name=component, parent=parent)

        files = []
        for file in parent.files:
            files.append({
                'src': file.url,
                'srcSet': [
                    get_thumbnail(file, 500, 999999) + ' 500w',
                    get_thumbnail(file, 800, 999999) + ' 800w',
                    get_thumbnail(file, 1024, 999999) + ' 1024w',
                    get_thumbnail(file, 1600, 999999) + ' 1600w',
                    get_thumbnail(file, 1920, 999999) + ' 1920w',
                ],
                'width': file.width,
                'height': file.height,
            })
    except filer.models.foldermodels.Folder.DoesNotExist:
        pass
    return f'[!gallery-images {json.dumps(files)}]'