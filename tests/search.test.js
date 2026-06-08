// @vitest-environment jsdom
import { it, expect } from 'vitest';
import '../src/scripts/search'; // Carga el event listener

it('debería filtrar empleados según la búsqueda', () => {
  document.body.innerHTML = `
    <input id="search" value="ana" />
    <div id="ana" class="employee"><h2>Ana</h2></div>
    <div id="carlos" class="employee"><h2>Carlos</h2></div>
  `;

  document.getElementById('search').dispatchEvent(new Event('keyup', { bubbles: true }));

  expect(document.getElementById('ana').classList.contains('filter')).toBe(false);
  expect(document.getElementById('carlos').classList.contains('filter')).toBe(true);
});