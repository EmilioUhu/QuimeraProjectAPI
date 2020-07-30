import {Entity, model, property} from '@loopback/repository';

@model()
export class medico extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_medico?: number;

  @property({
    type: 'number',
    required: true,
  })
  id_usuario: number;

  @property({
    type: 'number',
    required: true,
  })
  id_institucion: number;

  @property({
    type: 'string',
    required: true,
  })
  cedula: string;

  @property({
    type: 'string',
    required: true,
  })
  especialidad: string;


  constructor(data?: Partial<medico>) {
    super(data);
  }
}

export interface MedicoRelations {
  // describe navigational properties here
}

export type MedicoWithRelations = medico & MedicoRelations;
