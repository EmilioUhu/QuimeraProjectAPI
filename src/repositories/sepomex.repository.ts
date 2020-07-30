import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {sepomex, SepomexRelations} from '../models';

export class SepomexRepository extends DefaultCrudRepository<
  sepomex,
  typeof sepomex.prototype.id,
  SepomexRelations
> {
  constructor(@inject('datasources.mysql') dataSource: MysqlDataSource) {
    super(sepomex, dataSource);
  }
}
