#!/bin/sh
python3 backend/manage.py runserver 2> backend.log & 
cd frontend
npm start 
