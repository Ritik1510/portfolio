import dayjs from "dayjs";
import dayjsRelativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(dayjsRelativeTime);

export const relativeTime = (time) => {
  return `${dayjs(time).fromNow()}`;
};

export default dayjs;