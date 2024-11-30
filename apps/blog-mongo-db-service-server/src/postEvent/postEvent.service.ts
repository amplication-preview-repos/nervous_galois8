import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PostEventServiceBase } from "./base/postEvent.service.base";

@Injectable()
export class PostEventService extends PostEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
