import {DefaultCrudRepository} from '@loopback/repository';
import {institucion, InstitucionRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class InstitucionRepository extends DefaultCrudRepository<
  institucion,
  typeof institucion.prototype.id_institucion,
  InstitucionRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(institucion, dataSource);
  }
}
