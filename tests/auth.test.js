import { describe, it, expect, beforeEach, vi } from 'vitest';
import { 
  validateEmail, 
  validatePassword, 
  loginUser, 
  logoutUser, 
  isAuthenticated 
} from '../src/scripts/auth.js';


// Simulación de localStorage para las pruebas de Vitest. 
beforeEach(() => {
  vi.stubGlobal('localStorage', {
    storage: {},
    getItem(key) { return this.storage[key] || null; },
    setItem(key, value) { this.storage[key] = String(value); },
    removeItem(key) { delete this.storage[key]; },
    clear() { this.storage = {}; }
  });
});

describe('Módulo de Autenticación (auth.js)', () => {

  // 1. Tests para Validación de Email
  describe('validateEmail()', () => {
    it('debería retornar true para emails válidos', () => {
      expect(validateEmail('admin@dashboard.com')).toBe(true);
      expect(validateEmail('empleado.coder@f5.es')).toBe(true);
    });

    it('debería retornar false para emails inválidos', () => {
      expect(validateEmail('usuario')).toBe(false);           // Sin @ ni dominio
      expect(validateEmail('usuario@')).toBe(false);          // Sin dominio
      expect(validateEmail('usuario@dominio')).toBe(false);   // Sin extensión (.com, .es)
    });
  });

  // 2. Tests para Validación de Contraseña
  describe('validatePassword()', () => {
    it('debería retornar true si tiene al menos 8 caracteres y un número', () => {
      expect(validatePassword('admin1234')).toBe(true);
      expect(validatePassword('contraseña2026')).toBe(true);
    });

    it('debería retornar false si tiene menos de 8 caracteres', () => {
      expect(validatePassword('sec1')).toBe(false);           // Tiene número pero es corta
    });

    it('debería retornar false si no contiene ningún número', () => {
      expect(validatePassword('adminletras')).toBe(false);    // Es larga pero sin dígitos
    });
  });

  // 3. Tests para Gestión de Sesión (localStorage)
  describe('Gestión de Estado de Sesión', () => {
    it('loginUser() debería guardar "isLoggedIn" como "true" en localStorage', () => {
      loginUser();
      expect(localStorage.getItem('isLoggedIn')).toBe('true');
    });

    it('logoutUser() debería eliminar "isLoggedIn" de localStorage', () => {
      localStorage.setItem('isLoggedIn', 'true'); // Forzamos login previo
      logoutUser();
      expect(localStorage.getItem('isLoggedIn')).toBeNull();
    });

    it('isAuthenticated() debería verificar correctamente si el usuario está logueado', () => {
      // Caso 1: No logueado
      expect(isAuthenticated()).toBe(false);

      // Caso 2: Logueado
      localStorage.setItem('isLoggedIn', 'true');
      expect(isAuthenticated()).toBe(true);
    });
  });

});