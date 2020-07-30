import {DefaultCrudRepository} from '@loopback/repository';
import {usuario, UsuarioRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UsuarioRepository extends DefaultCrudRepository<
  usuario,
  typeof usuario.prototype.id_usuario,
  UsuarioRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(usuario, dataSource);
  }
}
