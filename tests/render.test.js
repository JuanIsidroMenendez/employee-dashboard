// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { renderEmployees } from '../src/scripts/render';

describe('renderEmployees', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="employee-gallery"></div>';
  });

  it('debería renderizar la lista de empleados correctamente', () => {
    const gallery = document.getElementById('employee-gallery');
    const mockData = [{ name: 'Ana', avatar: 'ana.jpg' }];

    renderEmployees(mockData);

    expect(gallery.querySelectorAll('article.employee')).toHaveLength(1);
    expect(gallery.querySelector('img').src).toContain('ana.jpg');
    expect(gallery.querySelector('h2').textContent).toBe('Ana');
  });

  it('no debería fallar si el contenedor no existe en el DOM', () => {
    document.body.innerHTML = ''; // Forzamos a que no exista la galería
    
    expect(() => renderEmployees([])).not.toThrow();
  });
});