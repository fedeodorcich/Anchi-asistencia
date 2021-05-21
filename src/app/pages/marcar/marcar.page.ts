import { Component, OnInit } from '@angular/core';
import { AsistenciaService } from '../../asistencia.service';
import { ToastController } from '@ionic/angular';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-marcar',
  templateUrl: './marcar.page.html',
  styleUrls: ['./marcar.page.scss'],
})
export class MarcarPage implements OnInit {

  step:any = 0;
  selected:String = '';
  list:any = [];

  constructor(private Servicio:AsistenciaService , public toastController: ToastController) { }

  ngOnInit() {
    this.ConnectionStatus();
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  
  radioChange(event:any){
    this.selected=event.target.value;
    this.presentToast('Seleccionó '+this.selected);
  }


  decrease(){
    this.step=this.step-1;
    console.log(this.step);
  }
  increase(){
    this.step=this.step+1;
    console.log(this.step);
    if(this.step==1){
      this.getUsers();
    }
  }
  

  //-----------------FUNCTIONS WITH API--------------
  ConnectionStatus(){
    this.Servicio.getConnectionStatus().subscribe(
      res=>{
        this.presentToast('Conectado al Host');
      },
      err=>{
        console.log(err);
        this.presentToast('Sin conexión al Host');
      }
    );
    
  }
  getUsers(){
    this.Servicio.getUserList(this.selected).subscribe(
      res=>{
        this.list.splice(0);
        this.list= Object.values(res);
        console.log(this.list);
      },
      err=>{
        console.log(err);
      }
    );
  }

}
