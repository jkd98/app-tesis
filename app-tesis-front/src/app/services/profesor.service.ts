import { Injectable } from '@angular/core';
import { clienteAxios } from '../helpers/clientAxios';
@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor() { }

  // Función para registrar un nuevo profesor
async createProf(profesor: any) {
  try {
    const { data } = await clienteAxios.post('/profe/add', profesor);
    return data;
  } catch (error) {
    console.error('Error Angular:', error);
    throw error;
  }
}

// Función para listar todos los profesores
async listarProfesores() {
  try {
    const { data } = await clienteAxios.get('/profe/list');
    return data;
  } catch (error) {
    console.error('Error Angular:', error);
    throw error;
  }
}

// Función para obtener un profesor por su ID
async obtenerUnProfesor(id: string) {
  try {
    const { data } = await clienteAxios.get(`/profe/one/${id}`);
    return data;
  } catch (error) {
    console.error('Error Angular:', error);
    throw error;
  }
}

// Función para editar un profesor por su ID
async editarProfesor(id: string, profesor: any) {
  try {
    const { data } = await clienteAxios.put(`/profe/edit/${id}`, profesor);
    return data;
  } catch (error) {
    console.error('Error Angular:', error);
    throw error;
  }
}

// Función para eliminar un profesor por su ID
async borrarProfesor(id: string) {
  try {
    const { data } = await clienteAxios.delete(`/profe/delete/${id}`);
    return data;
  } catch (error) {
    console.error('Error Angular:', error);
    throw error;
  }
}
}
