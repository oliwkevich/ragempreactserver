import * as states from "./states";

export const userMethods = {
    init: (player: PlayerMp) => {
        states.default.forEach((declaratedState: string) => {
            userMethods.setState(player, declaratedState, false);
        })
    },

    setState: (player: PlayerMp, state: string, value: boolean) => {
        states.default.forEach((declaratedState: string) => {
            if(declaratedState === state) {
                player.setVariable(state, value);
                mp.debug.log(`${player.name} | ${declaratedState} now set to ${value}`)
            };
        });
    },

    switchState: (player: PlayerMp, state: string) => {
        states.default.forEach((declaratedState: string) => {
            if(declaratedState === state) {
                player.setVariable(state, !player.getVariable(state));
                mp.debug.log(`${player.name} | ${declaratedState} now switch to ${!player.getVariable(state)}`)
            };
        });
    },

    getState: (player: PlayerMp, state: string) => {
        // states.default.forEach((declaratedState: string) => {
        //     if(declaratedState === state) {
        //         return player.getVariable(state);
        //     };
        // });
    },

    teleport: (player: PlayerMp, Vector3Mp :Vector3Mp) => {
        player.position = Vector3Mp;
    }
};

export const adminMethods = {
    ...userMethods
};