import { PostEvent as TPostEvent } from "../api/postEvent/PostEvent";

export const POSTEVENT_TITLE_FIELD = "id";

export const PostEventTitle = (record: TPostEvent): string => {
  return record.id?.toString() || String(record.id);
};
