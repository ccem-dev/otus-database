FROM mongo:4.0.4 AS database

ARG INITDB_FILE=database/initdb.sh

ENV OTUS_USER="otus"
ENV OTUS_PASS="otus"

ENV DOMAIN_USER="domain"
ENV DOMAIN_PASS="domain"

ENV OUTCOMES_USER="outcomes" 
ENV OUTCOMES_PASS="outcomes"

ENV COMMUNICATION_USER="communication" 
ENV COMMUNICATION_PASS="communication"

ENV DISTRIBUTION_USER="distribution"
ENV DISTRIBUTION_PASS="distribution"

ENV MONGO_INITDB_ROOT_USERNAME="admin"
ENV MONGO_INITDB_ROOT_PASSWORD="admin"
ENV MONGO_INITDB_DATABASE="admin"

USER root

COPY database/initdb /initdb
COPY ${INITDB_FILE} /docker-entrypoint-initdb.d/
COPY database/custom-mongo.conf /etc/custom-mongo.conf

EXPOSE 27017

CMD ["mongod","--replSet" ,"rs0","--auth", "-f", "/etc/custom-mongo.conf"]