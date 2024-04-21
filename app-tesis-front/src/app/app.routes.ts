import { Routes } from '@angular/router';
import { RoleGuard } from './guard/role.guard';
//data: { expectedRole: 'adm' } canActivate: [AuthGuard]
export const routes: Routes = [
    {
        path:'regist',
        title:'Registrar Usuarios',
        loadComponent:() => import("./layouts/usuarios/usuarios.component"),
        children:[
            {
                path:'estudiante',
                title:'Registro de Estudiantes',
                loadComponent:() => import("../app/components/regist-user/regist-user.component")
            },{
                path:'profesor',
                title:'Registro de Profesores',
                loadComponent:() => import("../app/components/profe/profe.component")
            },
            {
                path:'auth',
                title:'Iniciar Sesion',
                loadComponent:() => import("../app/components/login/login.component")
            },
            {
                path:'',
                redirectTo:'auth',
                pathMatch:'full'
            }
        ]
    },
    {
        path:'inicio',
        title:'Inicio-Tesis',
        loadComponent:() => import("../app/layouts/tesis-layou/tesis-layou.component"),
        canActivate: [RoleGuard],
        data: { expectedRole: ['Alumno','Profesor'] },
        children:[
            {
                path:'tesis',
                title:'Lista de Tesis',
                loadComponent:() => import("../app/components/home/home.component")
            },
            {
                path:'tesis/:id',
                title:'Detalles Tesis',
                loadComponent:() => import("../app/components/one-tesis/one-tesis.component")
            },
            {
                path:'',
                redirectTo:'tesis',
                pathMatch:'full'
            }
        ]

    },
    {
        path:'admin',
        title:'Administrar Tesis',
        loadComponent:()=>import("../app/layouts/admin-lay/admin-lay.component"),
        canActivate: [RoleGuard],
        data: { expectedRole: ['adm'] },
        children:[
            {
                path:'tesis',
                title:'Lista de Tesis',
                loadComponent:() => import("../app/components/home/home.component")
            },
            {
                path:'tesis/edit/:id',
                title:'Detalles Tesis',
                loadComponent:() => import("../app/components/edit-onde-tesis/edit-onde-tesis.component")
            },
            {
                path:'',
                redirectTo:'tesis',
                pathMatch:'full'
            }
        ]
    },
    {
        path:'',
        redirectTo:'regist/auth',
        pathMatch:'full'
    }
];
