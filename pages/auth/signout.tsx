import { providers, signOut } from "next-auth/client";

export default function SignOut() {
  return <>{Object.values(providers).map((provider) => {})}</>;
}
