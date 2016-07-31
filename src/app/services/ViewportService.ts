import { SmallService } from "./SmallService";
import { LargeService } from "./LargeService";
import { SizeService } from "./SizeService";

export class ViewportService {
  determineService(): SizeService {
    let w: number  = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    return (w < 800) ? new SmallService() : new LargeService();
  }
}
