import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mysql',
  connector: 'mysql',
  url: '',
  host: 'quimeraprojectserver.mysql.database.azure.com',
  port: '',
  user: 'emilio@quimeraprojectserver',
  password: 'Quimeraproject!',
  database: 'quimera',
};
//ssl: 'C:/BaltimoreCyberTrustRoot.crt.pem',
//  SSL: 'ca:fs.readFileSync(ECDHE-RSA-AES256-GCM-SHA384)',

// host: 'us-cdbr-east-02.cleardb.com',
// port: '',
// user: 'b4ee9455b7979a',
// password: 'e9449b51789f212',
// database: 'heroku_fef1a41aac1570a',

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MysqlDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mysql';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mysql', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
