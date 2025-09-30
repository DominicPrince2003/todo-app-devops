# Use a Python base image
FROM python:3.11-slim
 
# Set working directory inside the container
WORKDIR /app

# Copy the application code
COPY requirements.txt .
 
# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Define the default command to run the app:
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
 
