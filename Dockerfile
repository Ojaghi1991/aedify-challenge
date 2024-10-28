# Docker File to run Postgresql

FROM postgres:latest

# Enviroment Variable for initial password
ENV POSTGRES_PASSWORD

# Default Port for accessing to postgres
EXPOSE 5432

# Start container
CMD ["postgres"]
