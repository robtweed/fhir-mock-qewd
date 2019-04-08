#!/usr/bin/env bash

sudo docker run -d --name yhcr_service --rm --net qewd-net -p 3000:8080 -v ~/qewd-helm/fhir_dummy:/opt/qewd/mapped rtweed/qewd-server