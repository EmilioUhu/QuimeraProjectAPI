import {DefaultCrudRepository} from '@loopback/repository';
import {tipousuario, TipousuarioRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TipousuarioRepository extends DefaultCrudRepository<
  tipousuario,
  typeof tipousuario.prototype.id_tipo,
  TipousuarioRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(tipousuario, dataSource);
  }
}
