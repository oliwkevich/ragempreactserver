const cReset = "\x1b[0m";
const cRed = "\x1b[31m";
const cGreen = "\x1b[32m";
const cYellow = "\x1b[33m";
const cBlue = "\x1b[34m";

function getDate() {
    let date = new Date();
    return `[${date.getHours()<10?`0${date.getHours()}`:date.getHours()}:${date.getMinutes()<10?`0${date.getMinutes()}`:date.getMinutes()}:${date.getSeconds()<10?`0${date.getSeconds()}`:date.getSeconds()}]`;
};

mp.debug = mp.config.debug ? {
    warn: (message: string) => {
        console.log(`${getDate()} ${cYellow}[WARN] ${cReset}${message}`);
        return {status: 1, message: message, time: getDate()};
    },

    log: (message: string) => {
        console.log(`${getDate()} ${cGreen}[LOG] ${cReset}${message}`);
        return {status: 1, message: message, time: getDate()};
    },

    error: (message: string, exit = false) => {
        console.log(`${getDate()} ${cRed}[${exit?`EXIT | `:``}ERROR] ${cReset}${message}`);
        exit ? process.exit(0) : "";
        return {status: 1, message: message, time: getDate()};
    },
    serviceLog:(message: string) => { 
        console.log(`${getDate()} ${cBlue}[Service] ${cReset}${message}`);
        return {status: 1, message: message, time: getDate()};
    }
}: {
    warn: (message: string) => { return {status: 0, message: message, time: getDate()}; },
    log: (message: string) => { return {status: 0, message: message, time: getDate()}; },
    error: (message: string) => { return {status: 0, message: message, time: getDate()}; },
    serviceLog:(message: string) => { 
        console.log(`${getDate()} ${cBlue}[Service] ${cReset}${message}`);
        return {status: 1, message: message, time: getDate()};
    }
};

(()=>{
    mp.debug.serviceLog(`Debug status: ${mp.config.debug}`)
})();