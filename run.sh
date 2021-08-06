#!/bin/sh
python3 backend/manage.py runserver 0.0.0.0:8000 & 
cd frontend
npm start 
