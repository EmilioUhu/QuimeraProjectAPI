import {DefaultCrudRepository} from '@loopback/repository';
import {medico, MedicoRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MedicoRepository extends DefaultCrudRepository<
  medico,
  typeof medico.prototype.id_medico,
  MedicoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(medico, dataSource);
  }
}
