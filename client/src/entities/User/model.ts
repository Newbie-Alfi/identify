import { makeAutoObservable } from "mobx";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

export class User {
  fingerprint: string | undefined = undefined;

  constructor() {
    this.getFingerprint();

    makeAutoObservable(this);
  }

  async getFingerprint() {
    const fp = await FingerprintJS.load();

    const { visitorId } = await fp.get();

    this.fingerprint = visitorId;
  }
}
