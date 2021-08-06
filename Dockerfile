FROM node:12-alpine
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools
RUN pip3 install --no-cache django djangorestframework django-cors-headers
RUN apk add  --no-cache bash
WORKDIR /app
COPY . /app
RUN python backend/manage.py makemigrations
RUN python backend/manage.py migrate
RUN chmod +x run.sh
RUN chmod +x setup.sh
RUN ./setup.sh
CMD ["./run.sh"]