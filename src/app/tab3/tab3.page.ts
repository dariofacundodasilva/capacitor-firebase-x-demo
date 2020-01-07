import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { CapacitorFirebasex } = Plugins;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.initCrashlytics();
    });
  }

  initCrashlytics(){
    CapacitorFirebasex.setCrashlyticsCollectionEnabled();
    CapacitorFirebasex.setUser({id:"capApp", email:"dariofacundodasilva@gmail.com", name:"Facundo"});
  }

  crash() {
    CapacitorFirebasex.sendCrash();
  }

  logException() {
    CapacitorFirebasex.logException({message:"log error de crashlytics"});
  }

  log() {
    CapacitorFirebasex.log({message:"log de crashlytics"});
  }

}
