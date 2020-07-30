import {Entity, model, property} from '@loopback/repository';

@model()
export class instrumento extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_instrumento?: number;

  @property({
    type: 'number',
    required: true,
  })
  id_paciente: number;

  @property({
    type: 'boolean',
    required: true,
  })
  estatus: boolean;

  @property({
    type: 'date',
    required: true,
  })
  fecha_uso: string;

  @property({
    type: 'string',
    required: true,
  })
  hora_uso: string;

  @property({
    type: 'number',
    required: true,
  })
  id_tipo: number;

  constructor(data?: Partial<instrumento>) {
    super(data);
  }
}

export interface InstrumentoRelations {
  // describe navigational properties here
}

export type InstrumentoWithRelations = instrumento & InstrumentoRelations;
