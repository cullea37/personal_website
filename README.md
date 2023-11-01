# Personal Website

This is my personal website, created with:

- Frontend: React.js / Next.js
- Backend: Django / Gunicorn / PostgreSQL / Nginx
- Platform: Docker / Self-Hosted on Raspberry Pi 4

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Docker: You will need Docker and Docker Compose installed on your machine. You can download them from the [official website](https://www.docker.com/get-started).

### Running the Project

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/cullea37/personal_website.git
    ```

2. Navigate into the project directory:

    ```bash
    cd personal_website
    ```

3. Build and run the Docker containers:

   For development:
      :
  
    ```bash
    docker-compose up dev --build
    ```

   For production:

    ```bash
    docker-compose up nginx --build
    ```

  This command will build the Docker images and then start the Docker containers. Your Django application should now be running at `http://127.0.0.1:8000`, and your Next.js application should be running at `http://localhost:3000`.

To stop the Docker containers, you can press `Ctrl+C` in the terminal window where `docker-compose up` is running. To stop and remove the containers, networks, and volumes defined in your `docker-compose.yml` file, you can run `docker-compose down`.

## License

This project is licensed under the GNU GENERAL PUBLIC LICENSE - see the [LICENSE](LICENSE) file for details.
