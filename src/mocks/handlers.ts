import fakeBankApi from './bank-handler';
import featureHandlers from './features-handler';
import bookHandlers from './books-handler';

export const handlers = [...fakeBankApi, ...featureHandlers, ...bookHandlers];
