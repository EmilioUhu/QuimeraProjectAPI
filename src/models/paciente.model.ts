import {Entity, model, property} from '@loopback/repository';

@model()
export class paciente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_paciente?: number;

  @property({
    type: 'number',
    required: true,
  })
  id_medico: number;

  @property({
    type: 'number',
    required: true,
  })
  id_usuario: number;

  @property({
    type: 'string',
    required: true,
  })
  estatus_medico: string;

  @property({
    type: 'string',
  })
  d_estado?: string;

  @property({
    type: 'string',
  })
  d_ciudad?: string;

  @property({
    type: 'string',
  })
  d_asenta?: string;

  @property({
    type: 'string',
  })
  d_codigo?: string;

  @property({
    type: 'string',
  })
  calle?: string;

  @property({
    type: 'string',
  })
  avenida?: string;

  @property({
    type: 'string',
  })
  numero?: string;


  constructor(data?: Partial<paciente>) {
    super(data);
  }
}

export interface PacienteRelations {
  // describe navigational properties here
}

export type PacienteWithRelations = paciente & PacienteRelations;
