import { Component, OnInit } from '@angular/core';
import { GlobalService } from "../global.service";
import { Plugins } from '@capacitor/core';
const { CapacitorFirebasex } = Plugins;


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  constructor(public global: GlobalService) {}

  ngOnInit() {

    CapacitorFirebasex.initRemoteConfig({minimumFetchInterval:3600});
    CapacitorFirebasex.initSecondaryRemoteConfig({minimumFetchInterval:3600, projectId: "capapp2-30c06"});

    CapacitorFirebasex.fetch().then(
      ()=>{
        CapacitorFirebasex.activate().then(() => {
          CapacitorFirebasex.getString({key:'colorMenu'})
          .then((res: any) => {
            console.log('Remote Config colorMenu:' + res.value);
            this.global.colorMenu= res.value;
          });
          CapacitorFirebasex.getString({key:'displayImagen'})
          .then((res: any) => {
            console.log('Remote Config displayImagen:' + res.value);
            this.global.displayImagen= res.value;
          })
        })
      }
    );

    CapacitorFirebasex.fetchAndActivate({secondary:true})
    .then(()=>{
      CapacitorFirebasex.getString({key:'colorMenu',secondary:true})
      .then((res: any) => {
        console.log('Remote Config colorMenu:' + res.value);
        this.global.colorMenu= res.value;
      });
      CapacitorFirebasex.getString({key:'displayImagen',secondary:true})
      .then((res: any) => {
        console.log('Remote Config displayImagen:' + res.value);
        this.global.displayImagenSecondary= res.value;
      })
    });
    
  }

}
