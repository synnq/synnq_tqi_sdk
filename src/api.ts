import axios from 'axios';
import { NodeManager, Node } from './node';
import { ZKPData } from './zkp';

export class APIManager {
  private baseURL: string;
  private nodeManager: NodeManager;
  private zkpBaseURL: string = 'https://zkp.synnq.io';

  constructor(baseURL: string, nodeManager: NodeManager) {
    this.baseURL = baseURL;
    this.nodeManager = nodeManager;
  }

  async registerNode(node: Node) {
    return axios.post(`${this.baseURL}/register_node`, node);
  }

  async getNodes() {
    return axios.get(`${this.baseURL}/nodes`);
  }

  async sendData(data: any) {
    return axios.post(`${this.baseURL}/receive_data`, data);
  }

  // ZKP related methods with fixed URL

  async generateProof(secret: string): Promise<ZKPData> {
    const response = await axios.post(`${this.zkpBaseURL}/zkp/generate_proof`, {
      secret,
    });
    return response.data;
  }

  async verifyProof(zkpData: ZKPData): Promise<boolean> {
    const response = await axios.post(
      `${this.zkpBaseURL}/zkp/verify_proof`,
      zkpData
    );
    return response.data;
  }
}
