import { relativeTime } from "@/utils/dayjs";

export default function Time({ time }) {
  return (
    <time dateTime={time} title={new Date(time).toString()}>
      {relativeTime(time)}
    </time>
  );
}

/**
 * --> this function takes a time in string formate and
 * --> the child function takes a input and 
 * --> compare with current time and return the human readable time formate 
 */