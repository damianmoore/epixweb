from easy_thumbnails.files import get_thumbnailer


def get_thumbnail(obj, width=492, height=1000, crop=False):
    options = {
        'size': (width, height),
        'crop': crop,
        'quality': 60,
    }
    thumbnailer = get_thumbnailer(obj)
    return thumbnailer.get_thumbnail(options).url
