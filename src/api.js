"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIManager = void 0;
const axios_1 = __importDefault(require("axios"));
class APIManager {
    constructor(baseURL, nodeManager) {
        this.zkpBaseURL = 'https://zkp.synnq.io';
        this.baseURL = baseURL;
        this.nodeManager = nodeManager;
    }
    registerNode(node) {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.post(`${this.baseURL}/register_node`, node);
        });
    }
    getNodes() {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.get(`${this.baseURL}/nodes`);
        });
    }
    sendData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.post(`${this.baseURL}/receive_data`, data);
        });
    }
    // ZKP related methods with fixed URL
    generateProof(secret) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.post(`${this.zkpBaseURL}/zkp/generate_proof`, {
                secret,
            });
            return response.data;
        });
    }
    verifyProof(zkpData) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.post(`${this.zkpBaseURL}/zkp/verify_proof`, zkpData);
            return response.data;
        });
    }
}
exports.APIManager = APIManager;
