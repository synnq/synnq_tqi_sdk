import fs from 'fs';

export class Storage {
  private storageFile: string;
  private data: Record<string, any>;

  constructor(storageFile: string) {
    this.storageFile = storageFile;
    if (fs.existsSync(storageFile)) {
      this.data = JSON.parse(fs.readFileSync(storageFile, 'utf8'));
    } else {
      this.data = {};
    }
  }

  storeData(key: string, value: any) {
    this.data[key] = value;
    fs.writeFileSync(this.storageFile, JSON.stringify(this.data, null, 2));
  }

  getData(key: string): any | undefined {
    return this.data[key];
  }
}
