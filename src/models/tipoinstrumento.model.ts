import {Entity, model, property} from '@loopback/repository';

@model()
export class tipoinstrumento extends Entity {
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
  nombre: string;

  constructor(data?: Partial<tipoinstrumento>) {
    super(data);
  }
}

export interface TipoinstrumentoRelations {
  // describe navigational properties here
}

export type TipoinstrumentoWithRelations = tipoinstrumento &
  TipoinstrumentoRelations;
