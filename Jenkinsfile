pipeline {

    agent any

    triggers {
        pollSCM '* * * * *'
    }

    stages {


        stage('git') {
            steps {
            
            	sh "echo iniciando pipeline"
            	
                // Get some code from a GitHub repository
                git url: 'https://github.com/MigPalSer/hola-cipres'
		
            }
        }


 stage('cipres test') {
            steps {
            sh "/home/gftadmin/.nodenv/bin/nodenv 14.18.2"
            	sh "npm run test"
		
            }
		
        }

    }

post {
        always {
		sh "fin pipeline"

	
        }
    }

}
