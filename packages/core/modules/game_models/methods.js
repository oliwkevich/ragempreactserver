"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminMethods = exports.userMethods = void 0;
const states = __importStar(require("./states"));
exports.userMethods = {
    init: (player) => {
        states.default.forEach((declaratedState) => {
            exports.userMethods.setState(player, declaratedState, false);
        });
    },
    setState: (player, state, value) => {
        states.default.forEach((declaratedState) => {
            if (declaratedState === state) {
                player.setVariable(state, value);
                console.log(`${declaratedState} now set to ${value}`);
            }
            ;
        });
    },
    getState: (player, state) => {
        states.default.forEach((declaratedState) => {
            if (declaratedState === state) {
                return player.getVariable(state);
            }
            ;
        });
    },
    teleport: (player, Vector3Mp) => {
        player.position = Vector3Mp;
    }
};
exports.adminMethods = Object.assign({}, exports.userMethods);
