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
                console.log(`${declaratedState} now set to ${value}`);
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