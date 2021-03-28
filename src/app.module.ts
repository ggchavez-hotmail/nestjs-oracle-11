import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import "reflect-metadata";
import { Cliente } from './users/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: 'localhost',
      port: 1521,
      username: 'desarrollo',
      password: '123456',
      sid: 'XE',
      entities: [Cliente],
      synchronize: false,
    }),
    UsersModule,
  ],
})
export class AppModule {}
