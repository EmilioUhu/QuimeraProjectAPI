import {DefaultCrudRepository} from '@loopback/repository';
import {Glucometro, GlucometroRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GlucometroRepository extends DefaultCrudRepository<
  Glucometro,
  typeof Glucometro.prototype.id_glucometro,
  GlucometroRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Glucometro, dataSource);
  }
}
