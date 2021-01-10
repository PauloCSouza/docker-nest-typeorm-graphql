import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  host: process.env.NODE_ENV === 'prod' ? "database" : "database",
  database: "poemaemvideo",
  synchronize: true,
  autoLoadEntities: true,
  useUnifiedTopology: true
}