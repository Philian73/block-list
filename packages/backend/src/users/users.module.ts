import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { DbModule } from '../db/db.module';
import { AccountModule } from '../account/account.module';

@Module({
  imports: [DbModule, AccountModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
