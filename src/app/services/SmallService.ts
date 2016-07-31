import { SizeService } from "./SizeService";

export class SmallService implements SizeService {
  run(): void {
    console.log("Small service...")
  }
}
