import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
} from '@loopback/rest';
import {tipoinstrumento} from '../models';
import {TipoinstrumentoRepository} from '../repositories';

export class TipoinstrumentoController {
  constructor(
    @repository(TipoinstrumentoRepository)
    public tipoinstrumentoRepository: TipoinstrumentoRepository,
  ) {}

  @post('/tipoinstrumentos', {
    responses: {
      '200': {
        description: 'Tipoinstrumento model instance',
        content: {
          'application/json': {schema: getModelSchemaRef(tipoinstrumento)},
        },
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(tipoinstrumento, {
            title: 'NewTipoinstrumento',
            exclude: ['id_tipo'],
          }),
        },
      },
    })
    tipoinstrumento: Omit<tipoinstrumento, 'id_tipo'>,
  ): Promise<tipoinstrumento> {
    return this.tipoinstrumentoRepository.create(tipoinstrumento);
  }

  @get('/tipoinstrumentos/count', {
    responses: {
      '200': {
        description: 'Tipoinstrumento model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(tipoinstrumento) where?: Where<tipoinstrumento>,
  ): Promise<Count> {
    return this.tipoinstrumentoRepository.count(where);
  }

  @get('/tipoinstrumentos', {
    responses: {
      '200': {
        description: 'Array of Tipoinstrumento model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(tipoinstrumento, {
                includeRelations: true,
              }),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(tipoinstrumento) filter?: Filter<tipoinstrumento>,
  ): Promise<tipoinstrumento[]> {
    return this.tipoinstrumentoRepository.find(filter);
  }

  @patch('/tipoinstrumentos', {
    responses: {
      '200': {
        description: 'Tipoinstrumento PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(tipoinstrumento, {partial: true}),
        },
      },
    })
    tipoinstrumento: tipoinstrumento,
    @param.where(tipoinstrumento) where?: Where<tipoinstrumento>,
  ): Promise<Count> {
    return this.tipoinstrumentoRepository.updateAll(tipoinstrumento, where);
  }

  @get('/tipoinstrumentos/{id}', {
    responses: {
      '200': {
        description: 'Tipoinstrumento model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(tipoinstrumento, {
              includeRelations: true,
            }),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(tipoinstrumento, {exclude: 'where'})
    filter?: FilterExcludingWhere<tipoinstrumento>,
  ): Promise<tipoinstrumento> {
    return this.tipoinstrumentoRepository.findById(id, filter);
  }

  @patch('/tipoinstrumentos/{id}', {
    responses: {
      '204': {
        description: 'Tipoinstrumento PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(tipoinstrumento, {partial: true}),
        },
      },
    })
    tipoinstrumento: tipoinstrumento,
  ): Promise<void> {
    await this.tipoinstrumentoRepository.updateById(id, tipoinstrumento);
  }

  @put('/tipoinstrumentos/{id}', {
    responses: {
      '204': {
        description: 'Tipoinstrumento PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tipoinstrumento: tipoinstrumento,
  ): Promise<void> {
    await this.tipoinstrumentoRepository.replaceById(id, tipoinstrumento);
  }

  @del('/tipoinstrumentos/{id}', {
    responses: {
      '204': {
        description: 'Tipoinstrumento DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tipoinstrumentoRepository.deleteById(id);
  }
}
