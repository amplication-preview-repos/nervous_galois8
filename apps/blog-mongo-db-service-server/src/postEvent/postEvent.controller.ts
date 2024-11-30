import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PostEventService } from "./postEvent.service";
import { PostEventControllerBase } from "./base/postEvent.controller.base";

@swagger.ApiTags("postEvents")
@common.Controller("postEvents")
export class PostEventController extends PostEventControllerBase {
  constructor(protected readonly service: PostEventService) {
    super(service);
  }
}
