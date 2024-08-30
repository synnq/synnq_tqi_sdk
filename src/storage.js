"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Storage = void 0;
const fs_1 = __importDefault(require("fs"));
class Storage {
    constructor(storageFile) {
        this.storageFile = storageFile;
        if (fs_1.default.existsSync(storageFile)) {
            this.data = JSON.parse(fs_1.default.readFileSync(storageFile, 'utf8'));
        }
        else {
            this.data = {};
        }
    }
    storeData(key, value) {
        this.data[key] = value;
        fs_1.default.writeFileSync(this.storageFile, JSON.stringify(this.data, null, 2));
    }
    getData(key) {
        return this.data[key];
    }
}
exports.Storage = Storage;
