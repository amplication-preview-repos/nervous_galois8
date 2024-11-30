import { Module } from "@nestjs/common";
import { PostEventModuleBase } from "./base/postEvent.module.base";
import { PostEventService } from "./postEvent.service";
import { PostEventController } from "./postEvent.controller";
import { PostEventResolver } from "./postEvent.resolver";

@Module({
  imports: [PostEventModuleBase],
  controllers: [PostEventController],
  providers: [PostEventService, PostEventResolver],
  exports: [PostEventService],
})
export class PostEventModule {}
