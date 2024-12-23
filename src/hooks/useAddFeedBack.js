import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertFeedback } from "../services/FeedBackApi";
import toast from "react-hot-toast";

export function useAddFeedBack() {
  const queryClient = useQueryClient();
  const { mutate: addFeedBack, isLoading: isCreating } = useMutation({
    mutationFn: insertFeedback,
    onSuccess: () => {
      queryClient.invalidateQueries("feedbacks");
    },
    onError: () => {
      toast("Error", { icon: "🚫" });
    },
  });
  return { addFeedBack, isCreating };
}
