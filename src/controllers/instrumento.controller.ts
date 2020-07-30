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
import {instrumento} from '../models';
import {InstrumentoRepository} from '../repositories';

export class InstrumentoController {
  constructor(
    @repository(InstrumentoRepository)
    public instrumentoRepository: InstrumentoRepository,
  ) {}

  @post('/instrumentos', {
    responses: {
      '200': {
        description: 'Instrumento model instance',
        content: {'application/json': {schema: getModelSchemaRef(instrumento)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(instrumento, {
            title: 'NewInstrumento',
            exclude: ['id_instrumento'],
          }),
        },
      },
    })
    instrumento: Omit<instrumento, 'id_instrumento'>,
  ): Promise<instrumento> {
    return this.instrumentoRepository.create(instrumento);
  }

  @get('/instrumentos/count', {
    responses: {
      '200': {
        description: 'Instrumento model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(instrumento) where?: Where<instrumento>,
  ): Promise<Count> {
    return this.instrumentoRepository.count(where);
  }

  @get('/instrumentos', {
    responses: {
      '200': {
        description: 'Array of Instrumento model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(instrumento, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(instrumento) filter?: Filter<instrumento>,
  ): Promise<instrumento[]> {
    return this.instrumentoRepository.find(filter);
  }

  @patch('/instrumentos', {
    responses: {
      '200': {
        description: 'Instrumento PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(instrumento, {partial: true}),
        },
      },
    })
    instrumento: instrumento,
    @param.where(instrumento) where?: Where<instrumento>,
  ): Promise<Count> {
    return this.instrumentoRepository.updateAll(instrumento, where);
  }

  @get('/instrumentos/{id}', {
    responses: {
      '200': {
        description: 'Instrumento model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(instrumento, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(instrumento, {exclude: 'where'})
    filter?: FilterExcludingWhere<instrumento>,
  ): Promise<instrumento> {
    return this.instrumentoRepository.findById(id, filter);
  }

  @patch('/instrumentos/{id}', {
    responses: {
      '204': {
        description: 'Instrumento PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(instrumento, {partial: true}),
        },
      },
    })
    instrumento: instrumento,
  ): Promise<void> {
    await this.instrumentoRepository.updateById(id, instrumento);
  }

  @put('/instrumentos/{id}', {
    responses: {
      '204': {
        description: 'Instrumento PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() instrumento: instrumento,
  ): Promise<void> {
    await this.instrumentoRepository.replaceById(id, instrumento);
  }

  @del('/instrumentos/{id}', {
    responses: {
      '204': {
        description: 'Instrumento DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.instrumentoRepository.deleteById(id);
  }
}
