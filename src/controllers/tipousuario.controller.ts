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
import {tipousuario} from '../models';
import {TipousuarioRepository} from '../repositories';

export class TipousuarioController {
  constructor(
    @repository(TipousuarioRepository)
    public tipousuarioRepository : TipousuarioRepository,
  ) {}

  @post('/tipousuarios', {
    responses: {
      '200': {
        description: 'Tipousuario model instance',
        content: {'application/json': {schema: getModelSchemaRef(tipousuario)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(tipousuario, {
            title: 'NewTipousuario',
            exclude: ['id_tipo'],
          }),
        },
      },
    })
    tipousuario: Omit<tipousuario, 'id_tipo'>,
  ): Promise<tipousuario> {
    return this.tipousuarioRepository.create(tipousuario);
  }

  @get('/tipousuarios/count', {
    responses: {
      '200': {
        description: 'Tipousuario model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(tipousuario) where?: Where<tipousuario>,
  ): Promise<Count> {
    return this.tipousuarioRepository.count(where);
  }

  @get('/tipousuarios', {
    responses: {
      '200': {
        description: 'Array of Tipousuario model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(tipousuario, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(tipousuario) filter?: Filter<tipousuario>,
  ): Promise<tipousuario[]> {
    return this.tipousuarioRepository.find(filter);
  }

  @patch('/tipousuarios', {
    responses: {
      '200': {
        description: 'Tipousuario PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(tipousuario, {partial: true}),
        },
      },
    })
    tipousuario: tipousuario,
    @param.where(tipousuario) where?: Where<tipousuario>,
  ): Promise<Count> {
    return this.tipousuarioRepository.updateAll(tipousuario, where);
  }

  @get('/tipousuarios/{id}', {
    responses: {
      '200': {
        description: 'Tipousuario model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(tipousuario, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(tipousuario, {exclude: 'where'}) filter?: FilterExcludingWhere<tipousuario>
  ): Promise<tipousuario> {
    return this.tipousuarioRepository.findById(id, filter);
  }

  @patch('/tipousuarios/{id}', {
    responses: {
      '204': {
        description: 'Tipousuario PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(tipousuario, {partial: true}),
        },
      },
    })
    tipousuario: tipousuario,
  ): Promise<void> {
    await this.tipousuarioRepository.updateById(id, tipousuario);
  }

  @put('/tipousuarios/{id}', {
    responses: {
      '204': {
        description: 'Tipousuario PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tipousuario: tipousuario,
  ): Promise<void> {
    await this.tipousuarioRepository.replaceById(id, tipousuario);
  }

  @del('/tipousuarios/{id}', {
    responses: {
      '204': {
        description: 'Tipousuario DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tipousuarioRepository.deleteById(id);
  }
}
