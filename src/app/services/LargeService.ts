import { SizeService } from "./SizeService";

export class LargeService implements SizeService {
  run(): void {
    console.log("Large service...")
  }
}
