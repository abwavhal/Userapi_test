import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {UserloopDataSource} from '../datasources';
import {User, UserRelations} from '../models';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {
  constructor(
    @inject('datasources.userloop') dataSource: UserloopDataSource,
  ) {
    super(User, dataSource);
  }
}
