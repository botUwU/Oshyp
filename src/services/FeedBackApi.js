import { supabase } from "./supabase";
import toast, { Toaster } from "react-hot-toast";

export async function insertFeedback({ feedback }) {
  console.log(feedback);
  const { data, error } = await supabase
    .from("FeedBack")
    .insert([{ ...feedback }])
    .select();
  if (error) {
    toast("Error", { icon: "🚫" });
    throw new Error(error.message);
  }

  return data;
}

export async function getFeedBacks() {
  let { data: feedbacks, error } = await supabase.from("FeedBack").select("*");

  if (error) {
    toast("Feedbacks could not be loaded", { icon: "🚫" });
    throw new Error("FeedBack could not be loaded");
  }
  return feedbacks;
}
