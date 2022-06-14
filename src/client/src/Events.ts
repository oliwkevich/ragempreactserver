import { IeventsManager } from './types';

const eventsManager: IeventsManager = {
    events: {},
    add(eventName: string, callback: Function) {
        this.events[eventName] = callback;
    },
    callCEF(eventName: string, ...props: any) {
        if (this.events[eventName]) {
            this.events[eventName](...props);
        }
    },
};

window.eventsManager = eventsManager;
export default eventsManager;

// ПРИМЕР ВЗАИМОДЕЙСТВИЯ CEF - CLIENT

// function handler(toggle: boolean) {
//     mp.trigger('log');
//     setActivePage(Epages.auth);
// }
// eventsManager.add('switchMenu', handler);

// eventsManager.addHandler('hideMenu', (arg: any) => {
//     console.log(arg);
// });

// eventsManager.trigger('hideMenu', {
//     test: 46545,
//     tes2: 51654,
// });
// interface aa {
//     events: object;
//     add: any;
// }
// const tesa: aa = {
//     events: {},
//     add() {
//         let te = 'aa';
//         // this.events[te] = 4;
//         console.log(this.events);
//     },
// };

// tesa.add();
// const EventManager = window.EventManager || {
//     events: {},

//     addHandler: function (eventName, handler) {
//         if (eventName in this.events) {
//             this.events[eventName].push(handler);
//         } else {
//             this.events[eventName] = [handler];
//         }
//     },

//     removeHandler: function (eventName, handler) {
//         if (eventName in this.events) {
//             this.events[eventName] = null;
//             delete this.events[eventName];
//             //var index = this.events[eventName].indexOf(handler);
//             //this.events[eventName].splice(index, 1);
//         }
//     },
// };

// window.EventManager = EventManager;
// export default EventManager;
