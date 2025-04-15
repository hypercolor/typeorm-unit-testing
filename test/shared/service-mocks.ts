import {container} from "tsyringe";
import {ServiceMock} from "./service-mock";
import {DmService} from "../../src/services/dm-service";
import {IndexApiManager} from "../../src/managers/index-api-manager";

export class ServiceMocks {
  public static getMocks() {

      const dmService = new ServiceMock();
      const indexApiManager = new ServiceMock();

      container.register(DmService, {useValue: dmService as any});
      container.register(IndexApiManager, {useValue: indexApiManager as any});

    return {
        dmService
    }
  }
}
