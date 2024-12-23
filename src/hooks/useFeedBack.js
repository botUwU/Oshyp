import { useQuery } from "@tanstack/react-query";
import { getFeedBacks } from "../services/FeedBackApi";

export function useFeedBack() {
  const { isLoading, data: feedbacks } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: getFeedBacks,
  });
  return { isLoading, feedbacks };
}
