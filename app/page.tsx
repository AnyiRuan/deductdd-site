// Redirect / to /(marketing)
import { redirect } from "next/navigation";
export default function Index() {
  redirect("/");
}
