pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS-21'
    }
    
    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
                bat 'npx playwright install'
            }
        }
        
        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }
    
    post {
        always {
            publishHTML([
                reportName: 'Playwright Report',
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                keepAll: true,
                alwaysLinkToLastBuild: true
            ])
        }
    }
}