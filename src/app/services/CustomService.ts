import { SizeService } from "./SizeService";

export class CustomService implements SizeService {
  run(): void {
    console.log("Custom service...")
  }
}
