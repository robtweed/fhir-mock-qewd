# fhir-mock-qewd

## QEWD-Up-based Mocked FHIR Service

This demonstrates a simple mocked FHIR service

See /configuration/routes.json for APIs

Start as a standalone monolith QEWD-Up Docker application using:

        docker run -d --name fhir_dummy --rm -p 3000:8080 -v ~/fhir-mock-qewd:/opt/qewd/mapped rtweed/qewd-server



