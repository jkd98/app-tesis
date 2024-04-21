import { Injectable } from '@angular/core';
import { clienteAxios } from '../helpers/clientAxios';

@Injectable({
  providedIn: 'root'
})
export class TesisService {

  constructor() { }

  async crearTesis(tesis: any) {
    try {
      const { data } = await clienteAxios.post('/tesis/add', tesis);
      return data;
    } catch (error) {
      console.error('Error Angular:', error);
      throw error;
    }
  }

  async listarTesis() {
    try {
      const { data } = await clienteAxios.get('/tesis/list');
      return data;
    } catch (error) {
      console.error('Error Angular:', error);
      throw error;
    }
  }

  async obtenerUnaTesis(id: string) {
    try {
      const { data } = await clienteAxios.get(`/tesis/one/${id}`);
      return data;
    } catch (error) {
      console.error('Error Angular:', error);
      throw error;
    }
  }

  async editarTesis(id: string, tesis: any) {
    try {
      const { data } = await clienteAxios.put(`/tesis/edit/${id}`, tesis);
      return data;
    } catch (error) {
      console.error('Error Angular:', error);
      throw error;
    }
  }

  async borrarTesis(id: string) {
    try {
      const { data } = await clienteAxios.delete(`/tesis/delete/${id}`);
      return data;
    } catch (error) {
      console.error('Error Angular:', error);
      throw error;
    }
  }

  async buscarTesis(filtros: any) {
    try {
      const { data } = await clienteAxios.get('/tesis/buscar', { params: filtros });
      return data;
    } catch (error) {
      console.error('Error Angular:', error);
      throw error;
    }
  }

  async obtenerCategorias(){
    try {
      const { data } = await clienteAxios.get('/tesis/categorias');
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error Angular:', error);
      throw error;
    }
  }
}
