"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateProof = generateProof;
exports.verifyProof = verifyProof;
const crypto_1 = __importDefault(require("crypto"));
function generateProof(secret) {
    const secretScalar = strToScalar(secret);
    const blinding = BigInt('0x' + crypto_1.default.randomBytes(32).toString('hex'));
    // Dummy implementation of proof generation
    const proof = crypto_1.default
        .createHmac('sha256', Buffer.from(blinding.toString(16), 'hex'))
        .update(Buffer.from(secretScalar.toString(16), 'hex'))
        .digest();
    return { proof, blinding };
}
function verifyProof(proof, secret, blinding) {
    const secretScalar = strToScalar(secret);
    // Dummy implementation of proof verification
    const validProof = crypto_1.default
        .createHmac('sha256', Buffer.from(blinding.toString(16), 'hex'))
        .update(Buffer.from(secretScalar.toString(16), 'hex'))
        .digest();
    return proof.equals(validProof);
}
function strToScalar(s) {
    const hash = crypto_1.default.createHash('sha256').update(s).digest('hex');
    return BigInt('0x' + hash);
}
