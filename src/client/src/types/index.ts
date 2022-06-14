export enum Epages {
    auth = 'Auth',
    registration = 'Registration',
    news = 'News',
    main = 'Main',
    inventory = 'Inventory',
    property = 'Property',
    transport = 'Transport',
    characterChange = 'Character Change',
    donate = 'Donate',
    settings = 'Settings',
    statistics = 'Statistics',

    admin = 'Admin menu',
    exit = 'Exit',
}

export enum EtypeMenu {
    auth = 'Auth',
    default = 'Default',
}

export interface IeventsManager {
    events: any; // Иначе не работает (object[test] = 44) - условно!
    callCEF: Function;
    add: Function;

}

export type settings = {};

declare global {
    interface Window {
        eventsManager?: IeventsManager;
    }
}
