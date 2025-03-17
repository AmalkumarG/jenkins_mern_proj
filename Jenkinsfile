pipeline {
    agent { label 'node1' }  // Specify the agent node (node1)

    tools {
        dockerTool "docker"  // Specify the Docker tool (ensure it's properly configured in Jenkins)
    }

    environment {
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'  // Path to the Docker Compose file
    }

    stages {

        stage('Down Docker Compose') {
            steps {
                script {
                    // Tear down any existing Docker Compose containers to avoid conflicts
                    sh 'docker compose -f ${DOCKER_COMPOSE_FILE} down'  // Stop and remove the containers
                }
            }
        }

        stage('Run Docker Compose with Build and Detached') {
            steps {
                script {
                    // Build and start the containers using Docker Compose in detached mode
                    sh 'docker compose -f ${DOCKER_COMPOSE_FILE} up --build -d'  // Build and run Docker Compose in detached mode
                }
            }
        }

    }

    post {
        always {
            // Clean up resources even if the pipeline fails
            cleanWs()  // Clean workspace
        }
    }
}


