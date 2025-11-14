pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
        KUBECONFIG_CREDENTIALS = credentials('kubeconfig')
        IMAGE_NAME = "anshbahl7/node-backend:${env.BUILD_NUMBER}"
    }

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/anshbahl4/Devops_main'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${IMAGE_NAME} backend/"
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    sh """
                        echo ${DOCKERHUB_CREDENTIALS_PSW} | docker login -u ${DOCKERHUB_CREDENTIALS_USR} --password-stdin
                        docker push ${IMAGE_NAME}
                    """
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    sh """
                        mkdir -p ~/.kube
                        cp ${KUBECONFIG_CREDENTIALS} ~/.kube/config
                        sed -i 's#<your-image>#${IMAGE_NAME}#g' k8s/backend-deployment.yaml
                        kubectl apply -f k8s/
                    """
                }
            }
        }
    }
}
