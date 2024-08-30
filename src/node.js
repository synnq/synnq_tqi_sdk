"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeManager = exports.Node = void 0;
const crypto_1 = __importDefault(require("crypto"));
class Node {
    constructor(address) {
        this.id = crypto_1.default.randomUUID();
        this.address = address;
        this.publicKey = crypto_1.default
            .createPublicKey({
            key: crypto_1.default
                .generateKeyPairSync('rsa', {
                modulusLength: 2048,
            })
                .publicKey.export({ type: 'spki', format: 'pem' }),
            format: 'pem',
        })
            .export({ format: 'pem', type: 'spki' })
            .toString();
        this.validated = false;
    }
}
exports.Node = Node;
class NodeManager {
    constructor() {
        this.nodes = [];
    }
    addNode(node) {
        this.nodes.push(node);
    }
    getNodes() {
        return this.nodes;
    }
    findNodeById(id) {
        return this.nodes.find((node) => node.id === id);
    }
}
exports.NodeManager = NodeManager;
