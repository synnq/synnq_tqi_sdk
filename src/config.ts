import fs from 'fs';

export class Config {
  address: string;
  uuid: string;

  constructor(configFile: string) {
    const configData = fs.readFileSync(configFile, 'utf8');
    const config = JSON.parse(configData);
    this.address = config.address;
    this.uuid = config.uuid;
  }
}
