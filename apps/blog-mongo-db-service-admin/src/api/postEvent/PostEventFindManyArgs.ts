import { PostEventWhereInput } from "./PostEventWhereInput";
import { PostEventOrderByInput } from "./PostEventOrderByInput";

export type PostEventFindManyArgs = {
  where?: PostEventWhereInput;
  orderBy?: Array<PostEventOrderByInput>;
  skip?: number;
  take?: number;
};
