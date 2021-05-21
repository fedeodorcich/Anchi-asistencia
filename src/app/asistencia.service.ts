import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AsistenciaService {

  APP_ASISTENCIA = 'http://192.168.10.114:3007/asistencia/';
  CONNECTED = 'http://192.168.10.114:3007/asistencia';




  constructor(private http:HttpClient) { }

  getConnectionStatus(){
    return this.http.get(`${this.CONNECTED}`,{responseType:'text'}); //se le agrega el response type para que envie el formato texto
  }

  //  Lista de personas
  getUserList(name){
    switch(name)
    {
      case 'anchipurac':{
        return this.http.get(`${this.APP_ASISTENCIA}userlist/${name}`);
        break;
      }
      case 'observatorio':{
        return this.http.get(`${this.APP_ASISTENCIA}userlist/${name}`);
        break;
      }
    }
  }
  

}
