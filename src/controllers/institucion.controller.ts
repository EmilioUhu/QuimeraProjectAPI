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
import {institucion} from '../models';
import {InstitucionRepository} from '../repositories';

export class InstitucionController {
  constructor(
    @repository(InstitucionRepository)
    public institucionRepository : InstitucionRepository,
  ) {}

  @post('/institucions', {
    responses: {
      '200': {
        description: 'Institucion model instance',
        content: {'application/json': {schema: getModelSchemaRef(institucion)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(institucion, {
            title: 'NewInstitucion',
            exclude: ['id_institucion'],
          }),
        },
      },
    })
    institucion: Omit<institucion, 'id_institucion'>,
  ): Promise<institucion> {
    return this.institucionRepository.create(institucion);
  }

  @get('/institucions/count', {
    responses: {
      '200': {
        description: 'Institucion model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(institucion) where?: Where<institucion>,
  ): Promise<Count> {
    return this.institucionRepository.count(where);
  }

  @get('/institucions', {
    responses: {
      '200': {
        description: 'Array of Institucion model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(institucion, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(institucion) filter?: Filter<institucion>,
  ): Promise<institucion[]> {
    return this.institucionRepository.find(filter);
  }

  @patch('/institucions', {
    responses: {
      '200': {
        description: 'Institucion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(institucion, {partial: true}),
        },
      },
    })
    institucion: institucion,
    @param.where(institucion) where?: Where<institucion>,
  ): Promise<Count> {
    return this.institucionRepository.updateAll(institucion, where);
  }

  @get('/institucions/{id}', {
    responses: {
      '200': {
        description: 'Institucion model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(institucion, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(institucion, {exclude: 'where'}) filter?: FilterExcludingWhere<institucion>
  ): Promise<institucion> {
    return this.institucionRepository.findById(id, filter);
  }

  @patch('/institucions/{id}', {
    responses: {
      '204': {
        description: 'Institucion PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(institucion, {partial: true}),
        },
      },
    })
    institucion: institucion,
  ): Promise<void> {
    await this.institucionRepository.updateById(id, institucion);
  }

  @put('/institucions/{id}', {
    responses: {
      '204': {
        description: 'Institucion PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() institucion: institucion,
  ): Promise<void> {
    await this.institucionRepository.replaceById(id, institucion);
  }

  @del('/institucions/{id}', {
    responses: {
      '204': {
        description: 'Institucion DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.institucionRepository.deleteById(id);
  }
}
