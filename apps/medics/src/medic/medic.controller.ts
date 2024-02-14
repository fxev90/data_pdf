import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MedicService } from "./medic.service";
import { MedicControllerBase } from "./base/medic.controller.base";

@swagger.ApiTags("medics")
@common.Controller("medics")
export class MedicController extends MedicControllerBase {
  constructor(
    protected readonly service: MedicService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
