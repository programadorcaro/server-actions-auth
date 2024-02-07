import { redirect } from "next/navigation";
import { getSession, logout } from "@/lib";
import LoginForm from "@/components/login-form";

export default async function Page() {
  const session = await getSession();
  return (
    <section>
      <LoginForm />

      <form
        action={async () => {
          "use server";
          await logout();
          redirect("/");
        }}
      >
        <button type="submit">Logout</button>
      </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  );
}
