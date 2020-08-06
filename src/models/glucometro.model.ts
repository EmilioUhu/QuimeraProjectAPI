import {Entity, model, property} from '@loopback/repository';

@model()
export class Glucometro extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  id_instrumento: number;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_glucometro?: number;

  @property({
    type: 'number',
    required: true,
  })
  nivel_glucosa: number;


  constructor(data?: Partial<Glucometro>) {
    super(data);
  }
}

export interface GlucometroRelations {
  // describe navigational properties here
}

export type GlucometroWithRelations = Glucometro & GlucometroRelations;
