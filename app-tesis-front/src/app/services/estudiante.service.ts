import { Injectable } from '@angular/core';
import { clienteAxios } from '../helpers/clientAxios';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor() { }

  async createEstudiante(estudiante: any) {
    try {
      const { data } = await clienteAxios.post('/estudiante/add', estudiante);
      return data;
    } catch (error) {
      console.error('Error Angular:', error);
      throw error;
    }
  }

  async listarEstudiantes() {
    try {
      const { data } = await clienteAxios.get('/estudiante/list');
      return data;
    } catch (error) {
      console.error('Error Angular:', error);
      throw error;
    }
  }

  async obtenerUnEstudiante(id: string) {
    try {
      const { data } = await clienteAxios.get(`/estudiante/one/${id}`);
      return data;
    } catch (error) {
      console.error('Error Angular:', error);
      throw error;
    }
  }

  async editarEstudiante(id: string, estudiante: any) {
    try {
      const { data } = await clienteAxios.put(`/estudiante/edit/${id}`, estudiante);
      return data;
    } catch (error) {
      console.error('Error Angular:', error);
      throw error;
    }
  }

  async borrarEstudiante(id: string) {
    try {
      const { data } = await clienteAxios.delete(`/estudiante/delete/${id}`);
      return data;
    } catch (error) {
      console.error('Error Angular:', error);
      throw error;
    }
  }
}
