# epixweb

Running the project should be simple if you have Make, Docker and Docker Compose installed. Run the following:

    make build
    make start

By default the site should be visible at [http://localhost:8000/](http://localhost:8000/) unless that port is already in use. The `Makefile` uses Docker Compose for the actual running of services. See the `docker-compose.yml` file for details of containers and volumes.

To get into a Docker shell once it is started:

    make shell
