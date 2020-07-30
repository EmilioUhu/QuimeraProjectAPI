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
import {paciente} from '../models';
import {PacienteRepository} from '../repositories';

export class PacienteController {
  constructor(
    @repository(PacienteRepository)
    public pacienteRepository : PacienteRepository,
  ) {}

  @post('/pacientes', {
    responses: {
      '200': {
        description: 'Paciente model instance',
        content: {'application/json': {schema: getModelSchemaRef(paciente)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(paciente, {
            title: 'NewPaciente',
            exclude: ['id_paciente'],
          }),
        },
      },
    })
    paciente: Omit<paciente, 'id_paciente'>,
  ): Promise<paciente> {
    return this.pacienteRepository.create(paciente);
  }

  @get('/pacientes/count', {
    responses: {
      '200': {
        description: 'Paciente model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(paciente) where?: Where<paciente>,
  ): Promise<Count> {
    return this.pacienteRepository.count(where);
  }

  @get('/pacientes', {
    responses: {
      '200': {
        description: 'Array of Paciente model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(paciente, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(paciente) filter?: Filter<paciente>,
  ): Promise<paciente[]> {
    return this.pacienteRepository.find(filter);
  }

  @patch('/pacientes', {
    responses: {
      '200': {
        description: 'Paciente PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(paciente, {partial: true}),
        },
      },
    })
    paciente: paciente,
    @param.where(paciente) where?: Where<paciente>,
  ): Promise<Count> {
    return this.pacienteRepository.updateAll(paciente, where);
  }

  @get('/pacientes/{id}', {
    responses: {
      '200': {
        description: 'Paciente model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(paciente, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(paciente, {exclude: 'where'}) filter?: FilterExcludingWhere<paciente>
  ): Promise<paciente> {
    return this.pacienteRepository.findById(id, filter);
  }

  @patch('/pacientes/{id}', {
    responses: {
      '204': {
        description: 'Paciente PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(paciente, {partial: true}),
        },
      },
    })
    paciente: paciente,
  ): Promise<void> {
    await this.pacienteRepository.updateById(id, paciente);
  }

  @put('/pacientes/{id}', {
    responses: {
      '204': {
        description: 'Paciente PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() paciente: paciente,
  ): Promise<void> {
    await this.pacienteRepository.replaceById(id, paciente);
  }

  @del('/pacientes/{id}', {
    responses: {
      '204': {
        description: 'Paciente DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pacienteRepository.deleteById(id);
  }
}
