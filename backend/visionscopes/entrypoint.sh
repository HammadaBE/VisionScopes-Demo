#!/bin/bash
set -e

echo "⏳ Waiting for PostgreSQL..."
while ! python -c "import psycopg2; psycopg2.connect(host='$DB_HOST', port='$DB_PORT', user='$DB_USER', password='$DB_PWD', dbname='$DB_NAME')" 2>/dev/null; do
  sleep 1
done
echo "✅ PostgreSQL is ready"

echo "⏳ Running migrations..."
python manage.py migrate --noinput

echo "⏳ Loading sample data..."
python manage.py loaddata fixtures/sample_data.json || echo "⚠️ No fixtures found, skipping"

echo "⏳ Collecting static files..."
python manage.py collectstatic --noinput

echo "🚀 Starting Gunicorn..."
gunicorn visionscopes.wsgi:application \
  --bind 0.0.0.0:8000 \
  --workers 3 \
  --timeout 120