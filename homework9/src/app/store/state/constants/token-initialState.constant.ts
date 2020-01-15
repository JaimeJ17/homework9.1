import { LocalstorageService } from '../../../modules/shared/services/localstorage.service';

const storage: LocalstorageService = new LocalstorageService();

export const tokenState: string = !!storage.loadfile('token') ? storage.loadfile('token') : null;
