export enum Epages {
    auth = 'Auth',
    news = 'News',
    main = 'Main',
}

export interface IeventsManager {
    events: any; // Иначе не работает (object[test] = 44) 0 - условно!
    callCEF: Function;
    add: Function;
}

declare global {
    interface Window {
        eventsManager?: IeventsManager;
    }
}
