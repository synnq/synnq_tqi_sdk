"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const fs_1 = __importDefault(require("fs"));
class Config {
    constructor(configFile) {
        const configData = fs_1.default.readFileSync(configFile, 'utf8');
        const config = JSON.parse(configData);
        this.address = config.address;
        this.uuid = config.uuid;
    }
}
exports.Config = Config;
