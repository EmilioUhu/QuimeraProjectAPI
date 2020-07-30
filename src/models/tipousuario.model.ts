import {Entity, model, property} from '@loopback/repository';

@model()
export class tipousuario extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_tipo?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre_tipo: string;


  constructor(data?: Partial<tipousuario>) {
    super(data);
  }
}

export interface TipousuarioRelations {
  // describe navigational properties here
}

export type TipousuarioWithRelations = tipousuario & TipousuarioRelations;
