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
import {medico} from '../models';
import {MedicoRepository} from '../repositories';

export class MedicoController {
  constructor(
    @repository(MedicoRepository)
    public medicoRepository : MedicoRepository,
  ) {}

  @post('/medicos', {
    responses: {
      '200': {
        description: 'Medico model instance',
        content: {'application/json': {schema: getModelSchemaRef(medico)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(medico, {
            title: 'NewMedico',
            exclude: ['id_medico'],
          }),
        },
      },
    })
    medico: Omit<medico, 'id_medico'>,
  ): Promise<medico> {
    return this.medicoRepository.create(medico);
  }

  @get('/medicos/count', {
    responses: {
      '200': {
        description: 'Medico model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(medico) where?: Where<medico>,
  ): Promise<Count> {
    return this.medicoRepository.count(where);
  }

  @get('/medicos', {
    responses: {
      '200': {
        description: 'Array of Medico model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(medico, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(medico) filter?: Filter<medico>,
  ): Promise<medico[]> {
    return this.medicoRepository.find(filter);
  }

  @patch('/medicos', {
    responses: {
      '200': {
        description: 'Medico PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(medico, {partial: true}),
        },
      },
    })
    medico: medico,
    @param.where(medico) where?: Where<medico>,
  ): Promise<Count> {
    return this.medicoRepository.updateAll(medico, where);
  }

  @get('/medicos/{id}', {
    responses: {
      '200': {
        description: 'Medico model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(medico, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(medico, {exclude: 'where'}) filter?: FilterExcludingWhere<medico>
  ): Promise<medico> {
    return this.medicoRepository.findById(id, filter);
  }

  @patch('/medicos/{id}', {
    responses: {
      '204': {
        description: 'Medico PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(medico, {partial: true}),
        },
      },
    })
    medico: medico,
  ): Promise<void> {
    await this.medicoRepository.updateById(id, medico);
  }

  @put('/medicos/{id}', {
    responses: {
      '204': {
        description: 'Medico PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() medico: medico,
  ): Promise<void> {
    await this.medicoRepository.replaceById(id, medico);
  }

  @del('/medicos/{id}', {
    responses: {
      '204': {
        description: 'Medico DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.medicoRepository.deleteById(id);
  }
}
