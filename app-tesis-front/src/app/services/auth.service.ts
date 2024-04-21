import { Injectable } from '@angular/core';
import { clienteAxios } from '../helpers/clientAxios';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  async iniciarSesion(datosUs:any) {
    try {
      const { data } = await clienteAxios.post('/login',datosUs);
      console.log(data);
      sessionStorage.setItem('usr',JSON.stringify(data.usr));
      return data;
    } catch (error) {
      console.error('Error Angular:', error);
      throw error;
    }
  }
}
