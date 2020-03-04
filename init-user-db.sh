#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE DATABASE dshop_development;
    CREATE DATABASE dshop_test;
    GRANT ALL PRIVILEGES ON DATABASE dshop_development TO dshop;
    GRANT ALL PRIVILEGES ON DATABASE dshop_test TO dshop;
EOSQL
