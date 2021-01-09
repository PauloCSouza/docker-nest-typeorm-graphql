import * as path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const options: TypeOrmModuleOptions = {
    type: 'mongodb',
    host: "database",
    port: 27017,
    database: "poemaemvideo",
    logging: true,
    entities: [path.resolve(__dirname, '..', 'db', 'models', '*')],
    migrations: [path.resolve(__dirname, '..', 'db', 'migrations', '*')],
};

module.exports = options;