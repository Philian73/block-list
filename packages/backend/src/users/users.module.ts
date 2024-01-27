import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { DbModule } from '../db/db.module';
import { AccountModule } from '../account/account.module';
import { BlockListModule } from '../block-list/block-list.module';

@Module({
  imports: [DbModule, AccountModule, BlockListModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
