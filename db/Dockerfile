FROM postgres:13.4

# Copy the scripts into the container
COPY ./init-db.sh /docker-entrypoint-initdb.d/init-db.sh

# Give the scripts execute permissions
RUN chmod +x /docker-entrypoint-initdb.d/init-db.sh
