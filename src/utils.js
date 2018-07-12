import { wikiApi } from './constants';

export const wikiUrl = (query) => `${wikiApi}${query}`;
