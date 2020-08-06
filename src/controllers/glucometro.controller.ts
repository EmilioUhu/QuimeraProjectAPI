import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Glucometro} from '../models';
import {GlucometroRepository} from '../repositories';

export class GlucometroController {
  constructor(
    @repository(GlucometroRepository)
    public glucometroRepository : GlucometroRepository,
  ) {}

  @post('/glucometros', {
    responses: {
      '200': {
        description: 'Glucometro model instance',
        content: {'application/json': {schema: getModelSchemaRef(Glucometro)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Glucometro, {
            title: 'NewGlucometro',
            exclude: ['id_glucometro'],
          }),
        },
      },
    })
    glucometro: Omit<Glucometro, 'id_glucometro'>,
  ): Promise<Glucometro> {
    return this.glucometroRepository.create(glucometro);
  }

  @get('/glucometros/count', {
    responses: {
      '200': {
        description: 'Glucometro model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Glucometro) where?: Where<Glucometro>,
  ): Promise<Count> {
    return this.glucometroRepository.count(where);
  }

  @get('/glucometros', {
    responses: {
      '200': {
        description: 'Array of Glucometro model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Glucometro, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Glucometro) filter?: Filter<Glucometro>,
  ): Promise<Glucometro[]> {
    return this.glucometroRepository.find(filter);
  }

  @patch('/glucometros', {
    responses: {
      '200': {
        description: 'Glucometro PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Glucometro, {partial: true}),
        },
      },
    })
    glucometro: Glucometro,
    @param.where(Glucometro) where?: Where<Glucometro>,
  ): Promise<Count> {
    return this.glucometroRepository.updateAll(glucometro, where);
  }

  @get('/glucometros/{id}', {
    responses: {
      '200': {
        description: 'Glucometro model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Glucometro, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Glucometro, {exclude: 'where'}) filter?: FilterExcludingWhere<Glucometro>
  ): Promise<Glucometro> {
    return this.glucometroRepository.findById(id, filter);
  }

  @patch('/glucometros/{id}', {
    responses: {
      '204': {
        description: 'Glucometro PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Glucometro, {partial: true}),
        },
      },
    })
    glucometro: Glucometro,
  ): Promise<void> {
    await this.glucometroRepository.updateById(id, glucometro);
  }

  @put('/glucometros/{id}', {
    responses: {
      '204': {
        description: 'Glucometro PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() glucometro: Glucometro,
  ): Promise<void> {
    await this.glucometroRepository.replaceById(id, glucometro);
  }

  @del('/glucometros/{id}', {
    responses: {
      '204': {
        description: 'Glucometro DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.glucometroRepository.deleteById(id);
  }
}
