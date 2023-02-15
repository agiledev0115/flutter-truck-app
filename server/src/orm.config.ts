import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const commonConf = {
  SYNCRONIZE: false,
  ENTITIES: [__dirname + '/domain/*.entity{.ts,.js}'],
  MIGRATIONS: [__dirname + '/migrations/**/*{.ts,.js}'],
  CLI: {
    migrationsDir: 'src/migrations'
  },
  MIGRATIONS_RUN: true
};

let ormconfig: TypeOrmModuleOptions = {
  name: 'default',
  type: 'mysql',
  database: 'lacus',
  url: 'mysql://root:@localhost:3306/lacus',
  logging: false,
  synchronize: true,
  entities: commonConf.ENTITIES,
  migrations: commonConf.MIGRATIONS,
  cli: commonConf.CLI,
  migrationsRun: commonConf.MIGRATIONS_RUN
};

if (process.env.NODE_ENV === 'prod') {
  ormconfig = {
    name: 'default',
    type: 'mysql',
    database: 'lacus',
    url: 'mysql://YOUR_USER:YOUR_PWD@localhost:27017/lacus',
    logging: false,
    synchronize: commonConf.SYNCRONIZE,
    entities: commonConf.ENTITIES,
    migrations: commonConf.MIGRATIONS,
    cli: commonConf.CLI,
    migrationsRun: commonConf.MIGRATIONS_RUN
  };
}

if (process.env.NODE_ENV === 'test') {
  ormconfig = {
    name: 'default',
    type: 'sqlite',
    database: ':memory:',
    logging: true,
    synchronize: true,
    entities: commonConf.ENTITIES,
    migrations: commonConf.MIGRATIONS,
    cli: commonConf.CLI,
    migrationsRun: commonConf.MIGRATIONS_RUN
  };
}

export { ormconfig };
