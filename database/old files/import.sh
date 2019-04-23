#! /bin/bash

mongoimport --host menudb --db Menu --collection census --type json --file /mongo-seed/census.json --jsonArray