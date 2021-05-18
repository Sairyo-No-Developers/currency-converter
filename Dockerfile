FROM python:latest

WORKDIR /app
COPY ./backend .
RUN pip install -r requirements.txt
EXPOSE 6002
CMD ["python", "app.py"]