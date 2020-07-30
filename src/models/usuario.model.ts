import {Entity, model, property} from '@loopback/repository';

@model()
export class usuario extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_usuario?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  ap_paterno: string;

  @property({
    type: 'string',
  })
  ap_materno?: string;

  @property({
    type: 'string',
  })
  telefono?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  estatus: boolean;

  @property({
    type: 'number',
    required: true,
  })
  id_tipo: number;

  @property({
    type: 'string',
    required: true,
  })
  contrasena: string;

  @property({
    type: 'string',
    required: true,
  })
  curp: string;

  @property({
    type: 'string',
    required: true,
  })
  correo_electronico: string;


  constructor(data?: Partial<usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = usuario & UsuarioRelations;
