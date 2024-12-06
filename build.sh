#!/usr/bin/env bash

set -o errexit

pip install -r requirements.txt

pyhton manage.py collectstatic --noinput
python manage.py migrate