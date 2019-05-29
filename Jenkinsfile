pipeline {
   agent any
      environment {
         PATH='/usr/local/bin:/usr/bin:/bin'
      }

   stage('Android Build') {
   steps {
      bat 'ionic cordova build android --release'
      echo "Android Build"
   }
  }

   stage('APK Sign') {
   steps {
      bat 'jarsigner -storepass cat123 -keystore my-cat.jks platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk myCat'
   }
   }

   stage('Publish Android') {
     steps {
    echo "Publish Android API Action"
   }
  }

 }
}