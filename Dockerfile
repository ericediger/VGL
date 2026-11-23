FROM python:3.12-slim
ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1 PIP_NO_CACHE_DIR=1 PYTHONPATH=/app/src
WORKDIR /app
COPY requirements.lock ./
RUN python -m pip install --require-hashes -r requirements.lock
COPY src/vgl ./src/vgl
COPY data ./data
COPY demo ./demo
COPY tests ./tests
COPY pyproject.toml ./
EXPOSE 8000
CMD ["uvicorn", "vgl.api:app", "--host", "0.0.0.0", "--port", "8000"]
