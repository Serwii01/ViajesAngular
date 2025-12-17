import { Component } from '@angular/core';

interface Transporte {
  nombre: string;
  descripcion: string;
  icono: string;
}

@Component({
  selector: 'app-plan-list',
  standalone : false,
  templateUrl: './plan-list.html',
  styleUrls: ['./plan-list.css']
})
export class PlanList {
  transportes: Transporte[] = [
    {
      nombre: 'Avión',
      descripcion: 'Rápido para largas distancias y viajes internacionales.',
      icono: '✈'
    },
    {
      nombre: 'Coche',
      descripcion: 'Ideal para rutas flexibles y escapadas de fin de semana.',
      icono: '🚗'
    },
    {
      nombre: 'Tren',
      descripcion: 'Cómodo para medias distancias y viajes entre ciudades.',
      icono: '🚆'
    },
    {
      nombre: 'Barco',
      descripcion: 'Perfecto para cruceros y destinos costeros.',
      icono: '🛳'
    }
  ];
}
