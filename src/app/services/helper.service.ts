import { Injectable } from '@angular/core';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private alertService:AlertController,
              private toastController:ToastController,
              private loaderController: LoadingController) { }


  async showAlert(msg:string, tittle:string){
    var alert = await this.alertService.create({cssClass:"alertClass", header:tittle, message:msg, buttons:["Aceptar"]})

    await alert.present()
  }

  async showConfirm(msg:string,btn_confirmar:string,btn_cancelar:string){
    let promise = new Promise<boolean>(async (resolve) =>
    {
      var alert = await this.alertService.create(
        {
          cssClass:"confirmarCss",
          message:msg,
          buttons:
          [
            {
              text:btn_confirmar,
              handler:() =>{
                resolve(true);
              }
            },
            {
              text:btn_cancelar,
              handler:() =>{
                resolve(false);
              }
            }
          ]
        })
        await alert.present();
    });
    return promise;
  }

  async presentToast(message: string, duration: number = 2000) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration
    });
    toast.present();
  }

  async showLoading(msg:string){
    var loader = await this.loaderController.create(
      {
        cssClass:"loaderCss",message:msg,translucent:true
      });
    await loader.present();
    return loader;
  }

  async dismissLoading() {
    await this.loaderController.dismiss();
  }
  

}
