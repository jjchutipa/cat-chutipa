pipeline {
   agent any
      environment {
         PATH='/usr/local/bin:/usr/bin:/bin'
      }
   stages {
      stage('NPM Setup') {
      steps {
         bat 'npm install'
      }
   }

   stage('Android Build') {
   steps {
      bat 'ionic cordova build android --release'
   }
  }

   stage('APK Sign') {
   steps {
      bat 'jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-cat.jks app-release-unsigned.apk cat123'
   }
   }

   stage('Publish Android') {
     steps {
    echo "Publish Android API Action"
   }
  }

 }
}