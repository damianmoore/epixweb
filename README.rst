.. 

epixweb
======================

Quickstart
----------

To bootstrap the project::

    virtualenv epixweb
    source epixweb/bin/activate
    cd path/to/epixweb/repository
    pip install -r requirements.pip
    pip install -e .
    cp epixweb/settings/local.py.example epixweb/settings/local.py
    manage.py syncdb --migrate

Documentation
-------------

Developer documentation is available in Sphinx format in the docs directory.

Initial installation instructions (including how to build the documentation as
HTML) can be found in docs/install.rst.
