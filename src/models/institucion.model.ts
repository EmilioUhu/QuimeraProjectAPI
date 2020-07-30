import {Entity, model, property} from '@loopback/repository';

@model()
export class institucion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_institucion?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre_institucion: string;

  @property({
    type: 'string',
  })
  numero_telefonico?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  estatus: boolean;

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


  constructor(data?: Partial<institucion>) {
    super(data);
  }
}

export interface InstitucionRelations {
  // describe navigational properties here
}

export type InstitucionWithRelations = institucion & InstitucionRelations;
