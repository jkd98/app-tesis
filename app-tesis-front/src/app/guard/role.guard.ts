import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    // Obtener el rol del usuario del sessionStorage
    const userRole = sessionStorage.getItem('usr');

    // Verificar si el usuario está autenticado y tiene un rol
    if (userRole) {
      
      // Obtener los roles esperados de la ruta
      const expectedRoles = route.data['expectedRole'];

      // Verificar si se especificaron roles esperados para la ruta
      if (expectedRoles && expectedRoles.length > 0) {
        const rolU = JSON.parse(userRole);
        // Verificar si el rol del usuario está presente en los roles esperados
        if (expectedRoles.includes(rolU.rol)) {
          return true; // Permitir el acceso
        } else {
          // Redirigir al usuario a una página de acceso no autorizado
          console.log('No')
          this.router.navigate(['/regist/auth']);
          return false; // Impedir el acceso
        }

      } else {
        return true; // Permitir el acceso si no se especificaron roles esperados
      }
      
    } else {
      // Redirigir al usuario a la página de inicio de sesión si no tiene un rol
      this.router.navigate(['/regist/auth']);
      return false; // Impedir el acceso
    }
  }
}
