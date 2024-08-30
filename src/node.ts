import crypto from 'crypto';

export class Node {
  id: string;
  address: string;
  publicKey: string;
  validated: boolean;

  constructor(address: string) {
    this.id = crypto.randomUUID();
    this.address = address;
    this.publicKey = crypto
      .createPublicKey({
        key: crypto
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

export class NodeManager {
  nodes: Node[] = [];

  addNode(node: Node) {
    this.nodes.push(node);
  }

  getNodes(): Node[] {
    return this.nodes;
  }

  findNodeById(id: string): Node | undefined {
    return this.nodes.find((node) => node.id === id);
  }
}
