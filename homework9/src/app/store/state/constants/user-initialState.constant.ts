import { User } from './../../../modules/shared/interfaces/user.interface';
import { LocalstorageService } from '../../../modules/shared/services/localstorage.service';

const storage: LocalstorageService = new LocalstorageService();

export const userInitialState: User = {
  email: null,
  password: null,
}


export const userState: User = !!storage.loadfile('user') ? storage.loadfile('user') : userInitialState;
