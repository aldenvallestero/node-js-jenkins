pipeline {
    agent any
    tools {
        nodejs 'node-js-21.3.0'
    }
    stages {
        stage('setup') {
            steps {
                sh 'node --version'
                sh 'npm ci'
            }
        }
        stage('build') {
          steps {
            sh 'npm run build && npm run test:unit'
          }
        }
    }
}