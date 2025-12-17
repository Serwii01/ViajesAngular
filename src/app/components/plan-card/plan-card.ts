import { Component } from '@angular/core';

interface Destino {
  nombre: string;
  descripcion: string;
  pais: string;
}

@Component({
  selector: 'app-plan-card',
  standalone: false,
  templateUrl: './plan-card.html',
  styleUrls: ['./plan-card.css']
})
export class PlanCard {
  destinos: Destino[] = [
    {
      nombre: 'París',
      descripcion: 'Ciudad de la luz, ideal para una escapada romántica.',
      pais: 'Francia'
    },
    {
      nombre: 'Roma',
      descripcion: 'Historia, arte y gastronomía en cada esquina.',
      pais: 'Italia'
    },
    {
      nombre: 'Londres',
      descripcion: 'Ambiente cosmopolita y museos de primer nivel.',
      pais: 'Reino Unido'
    },
    {
      nombre: 'Tokio',
      descripcion: 'Tecnología, cultura tradicional y rascacielos.',
      pais: 'Japón'
    }
  ];
}
