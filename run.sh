#!/bin/sh
python3 backend/manage.py runserver & 
cd frontend
npm start 
