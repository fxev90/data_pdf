import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MedicModuleBase } from "./base/medic.module.base";
import { MedicService } from "./medic.service";
import { MedicController } from "./medic.controller";
import { MedicResolver } from "./medic.resolver";

@Module({
  imports: [MedicModuleBase, forwardRef(() => AuthModule)],
  controllers: [MedicController],
  providers: [MedicService, MedicResolver],
  exports: [MedicService],
})
export class MedicModule {}
