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
import {sepomex} from '../models';
import {SepomexRepository} from '../repositories';

export class SepomexController {
  constructor(
    @repository(SepomexRepository)
    public sepomexRepository: SepomexRepository,
  ) {}

  @post('/sepomexes', {
    responses: {
      '200': {
        description: 'Sepomex model instance',
        content: {'application/json': {schema: getModelSchemaRef(sepomex)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(sepomex, {
            title: 'NewSepomex',
            exclude: ['id'],
          }),
        },
      },
    })
    sepomex: Omit<sepomex, 'id'>,
  ): Promise<sepomex> {
    return this.sepomexRepository.create(sepomex);
  }

  @get('/sepomexes/count', {
    responses: {
      '200': {
        description: 'Sepomex model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(@param.where(sepomex) where?: Where<sepomex>): Promise<Count> {
    return this.sepomexRepository.count(where);
  }

  @get('/sepomexes', {
    responses: {
      '200': {
        description: 'Array of Sepomex model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(sepomex, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(sepomex) filter?: Filter<sepomex>,
  ): Promise<sepomex[]> {
    return this.sepomexRepository.find(filter);
  }

  @patch('/sepomexes', {
    responses: {
      '200': {
        description: 'Sepomex PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(sepomex, {partial: true}),
        },
      },
    })
    sepomex: sepomex,
    @param.where(sepomex) where?: Where<sepomex>,
  ): Promise<Count> {
    return this.sepomexRepository.updateAll(sepomex, where);
  }

  @get('/sepomexes/{id}', {
    responses: {
      '200': {
        description: 'Sepomex model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(sepomex, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(sepomex, {exclude: 'where'})
    filter?: FilterExcludingWhere<sepomex>,
  ): Promise<sepomex> {
    return this.sepomexRepository.findById(id, filter);
  }

  @patch('/sepomexes/{id}', {
    responses: {
      '204': {
        description: 'Sepomex PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(sepomex, {partial: true}),
        },
      },
    })
    sepomex: sepomex,
  ): Promise<void> {
    await this.sepomexRepository.updateById(id, sepomex);
  }

  @put('/sepomexes/{id}', {
    responses: {
      '204': {
        description: 'Sepomex PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() sepomex: sepomex,
  ): Promise<void> {
    await this.sepomexRepository.replaceById(id, sepomex);
  }

  @del('/sepomexes/{id}', {
    responses: {
      '204': {
        description: 'Sepomex DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.sepomexRepository.deleteById(id);
  }
}
