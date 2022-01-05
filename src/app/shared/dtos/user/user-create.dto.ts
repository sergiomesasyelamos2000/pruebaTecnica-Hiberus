import { User } from 'src/app/shared/interface/user.model';
/**
 * Class for represent data for create user
 * @class
 */
export class CreateUserDto implements User {
  email: string = '';
  name: string = '';
  password: string = '';
  surname: string = '';
}
