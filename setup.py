#!/usr/bin/env python
from setuptools import setup, find_packages

setup(
    name='epixweb',
    version='0.1',
    description="",
    author="Damian Moore",
    author_email='damian@epixstudios.co.uk',
    url='',
    packages=find_packages(),
    package_data={'epixweb': ['static/*.*', 'templates/*.*']},
    scripts=['manage.py'],
)
