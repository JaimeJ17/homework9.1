import { User } from './../../../modules/shared/interfaces/user.interface';
import { LocalstorageService } from '../../../modules/shared/services/localstorage.service';

const storage: LocalstorageService = new LocalstorageService();

const state: User = {
  email: null,
  password: null,
}


export const userState: User = !!storage.loadfile('user') ? storage.loadfile('user') : state;
