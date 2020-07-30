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
import {usuario} from '../models';
import {UsuarioRepository} from '../repositories';
// ---------- ADD IMPORTS -------------
import {authenticate} from '@loopback/authentication';
@authenticate('jwt') // <---- Apply the @authenticate decorator at the class level
export class UsuarioController {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository: UsuarioRepository,
  ) {}

  @post('/usuarios', {
    responses: {
      '200': {
        description: 'Usuario model instance',
        content: {'application/json': {schema: getModelSchemaRef(usuario)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(usuario, {
            title: 'NewUsuario',
            exclude: ['id_usuario'],
          }),
        },
      },
    })
    usuario: Omit<usuario, 'id_usuario'>,
  ): Promise<usuario> {
    return this.usuarioRepository.create(usuario);
  }

  @get('/usuarios/count', {
    responses: {
      '200': {
        description: 'Usuario model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(@param.where(usuario) where?: Where<usuario>): Promise<Count> {
    return this.usuarioRepository.count(where);
  }

  @get('/usuarios', {
    responses: {
      '200': {
        description: 'Array of Usuario model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(usuario, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(usuario) filter?: Filter<usuario>,
  ): Promise<usuario[]> {
    return this.usuarioRepository.find(filter);
  }

  @patch('/usuarios', {
    responses: {
      '200': {
        description: 'Usuario PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(usuario, {partial: true}),
        },
      },
    })
    usuario: usuario,
    @param.where(usuario) where?: Where<usuario>,
  ): Promise<Count> {
    return this.usuarioRepository.updateAll(usuario, where);
  }

  @get('/usuarios/{id}', {
    responses: {
      '200': {
        description: 'Usuario model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(usuario, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(usuario, {exclude: 'where'})
    filter?: FilterExcludingWhere<usuario>,
  ): Promise<usuario> {
    return this.usuarioRepository.findById(id, filter);
  }

  @patch('/usuarios/{id}', {
    responses: {
      '204': {
        description: 'Usuario PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(usuario, {partial: true}),
        },
      },
    })
    usuario: usuario,
  ): Promise<void> {
    await this.usuarioRepository.updateById(id, usuario);
  }

  @put('/usuarios/{id}', {
    responses: {
      '204': {
        description: 'Usuario PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() usuario: usuario,
  ): Promise<void> {
    await this.usuarioRepository.replaceById(id, usuario);
  }

  @del('/usuarios/{id}', {
    responses: {
      '204': {
        description: 'Usuario DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.usuarioRepository.deleteById(id);
  }
}
