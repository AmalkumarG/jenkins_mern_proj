pipeline {
    agent { label 'node1' }  // Specify the agent node (node1)
    tools {
        dockerTool "docker"
    }
    environment {
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'  // Path to the Docker Compose file
    }

    stages {
        stage('Run Docker Compose with Build and Detached') {
            steps {
                script {
                    // Use the dockerCompose plugin to bring up the services in detached mode with build
                    dockerCompose.build()  // Build the images based on the docker-compose.yml file
                    dockerCompose.up(detached: true)  // Run Docker Compose in detached mode
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

