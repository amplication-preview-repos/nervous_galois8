import * as graphql from "@nestjs/graphql";
import { PostEventResolverBase } from "./base/postEvent.resolver.base";
import { PostEvent } from "./base/PostEvent";
import { PostEventService } from "./postEvent.service";

@graphql.Resolver(() => PostEvent)
export class PostEventResolver extends PostEventResolverBase {
  constructor(protected readonly service: PostEventService) {
    super(service);
  }
}
