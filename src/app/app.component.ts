import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Plugins } from '@capacitor/core';
const { CapacitorFirebasex } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {


  firebaseConfig = {
    apiKey: "AIzaSyD_jw2tymuOCCR67XsloCFBbP-7rUpZGJE",
    authDomain: "capapp2-30c06.firebaseapp.com",
    databaseURL: "https://capapp2-30c06.firebaseio.com",
    projectId: "capapp2-30c06",
    storageBucket: "capapp2-30c06.appspot.com",
    messagingSenderId: "1066963435934",
    appId: "1:1066963435934:web:5e65bc58cacf9c3557968f",
    measurementId: "G-THW603BHKV"
  };

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.initializeFirebaseApps();
    });
  }

  initializeFirebaseApps(){
    CapacitorFirebasex.initializeAppFirebase();
    CapacitorFirebasex.initializeSecondaryAppFirebase(this.firebaseConfig);
  }
}
