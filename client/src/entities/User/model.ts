import { makeAutoObservable } from "mobx";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { hash } from "bcryptjs";

export class User {
  fingerprint: string | undefined = undefined;

  constructor() {
    this.getFingerprint();

    makeAutoObservable(this);
  }

  async getFingerprint() {
    const fp = await FingerprintJS.load();

    const { components, visitorId } = await fp.get();


    const browser = components.vendorFlavors.value[0];
    const vendor = components.vendor.value;
    const timezone = components.timezone.value;
    const canvas = components.canvas.value?.text;
    const audio = components.audio.value;
    const architecture = components.architecture.value?.toString();
    const videoCardRenderer = components.videoCard.value?.renderer;

    const customVisitorId = [browser, vendor, timezone, canvas, audio, architecture, videoCardRenderer].join('');

    const customHash = await hash(customVisitorId, 5);

    this.fingerprint = visitorId;
  }
}
