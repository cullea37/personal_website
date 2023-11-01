#!/bin/bash

# Create the user
psql -c "CREATE USER $POSTGRES_USER WITH PASSWORD '$POSTGRES_PASSWORD';"

# Create the database and grant privileges to the user
psql -c "CREATE DATABASE $POSTGRES_DB;"
psql -c "GRANT ALL PRIVILEGES ON DATABASE $POSTGRES_DB TO $POSTGRES_USER;"
