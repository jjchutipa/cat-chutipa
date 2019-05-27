pipeline {
   agent any
      environment {
         PATH='/usr/local/bin:/usr/bin:/bin'
      }
   stages {
      stage('NPM Setup') {
      steps {
         bat('npm install')
      }
   }

   stage('Android Build') {
   steps {
      bat('ionic cordova build android --release')
   }
  }

   stage('APK Sign') {
   steps {
      bat('jarsigner -storepass cat123 -keystore keys/cat123.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk myCat')
   }
   }

   stage('Publish Android') {
     steps {
    echo "Publish Android API Action"
   }
  }

 }
}