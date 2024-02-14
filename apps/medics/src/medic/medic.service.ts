import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MedicServiceBase } from "./base/medic.service.base";

@Injectable()
export class MedicService extends MedicServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
