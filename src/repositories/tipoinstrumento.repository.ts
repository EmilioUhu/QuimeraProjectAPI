import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {tipoinstrumento, TipoinstrumentoRelations} from '../models';

export class TipoinstrumentoRepository extends DefaultCrudRepository<
  tipoinstrumento,
  typeof tipoinstrumento.prototype.id_tipo,
  TipoinstrumentoRelations
> {
  constructor(@inject('datasources.mysql') dataSource: MysqlDataSource) {
    super(tipoinstrumento, dataSource);
  }
}
