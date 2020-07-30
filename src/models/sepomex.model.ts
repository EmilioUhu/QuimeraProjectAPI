import {Entity, model, property} from '@loopback/repository';

@model()
export class sepomex extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  d_codigo?: string;

  @property({
    type: 'string',
  })
  d_asenta?: string;

  @property({
    type: 'string',
  })
  d_tipo_asenta?: string;

  @property({
    type: 'string',
  })
  d_mnpio?: string;

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
  d_CP?: string;

  @property({
    type: 'string',
  })
  c_estado?: string;

  @property({
    type: 'string',
  })
  c_oficina?: string;

  @property({
    type: 'string',
  })
  c_CP?: string;

  @property({
    type: 'string',
  })
  c_tipo_asenta?: string;

  @property({
    type: 'string',
  })
  c_mnpio?: string;

  @property({
    type: 'string',
  })
  id_asenta_cpcons?: string;

  @property({
    type: 'string',
  })
  d_zona?: string;

  @property({
    type: 'string',
  })
  c_cve_ciudad?: string;

  constructor(data?: Partial<sepomex>) {
    super(data);
  }
}

export interface SepomexRelations {
  // describe navigational properties here
}

export type SepomexWithRelations = sepomex & SepomexRelations;
