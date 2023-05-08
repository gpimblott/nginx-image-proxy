# Use an official nginx runtime as a parent image
FROM nginx

# Set the working directory to /app
WORKDIR /app

# Copy the nginx configuration file into the container
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the entrypoint script into the container
COPY entrypoint.sh /app/entrypoint.sh

# Run the entrypoint script when the container starts
CMD ["./entrypoint.sh"]
