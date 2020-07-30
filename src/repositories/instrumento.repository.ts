import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {instrumento, InstrumentoRelations} from '../models';

export class InstrumentoRepository extends DefaultCrudRepository<
  instrumento,
  typeof instrumento.prototype.id_instrumento,
  InstrumentoRelations
> {
  constructor(@inject('datasources.mysql') dataSource: MysqlDataSource) {
    super(instrumento, dataSource);
  }
}
