import {DefaultCrudRepository} from '@loopback/repository';
import {paciente, PacienteRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PacienteRepository extends DefaultCrudRepository<
  paciente,
  typeof paciente.prototype.id_paciente,
  PacienteRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(paciente, dataSource);
  }
}
