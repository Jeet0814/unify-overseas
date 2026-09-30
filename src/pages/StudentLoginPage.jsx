import { Link } from "react-router-dom";
import { LoginLayout } from "@/components/LoginLayout";

export function StudentLoginPage() {
  return (
    <LoginLayout
      heading="Student Login"
      subheading="Welcome back. Sign in to see your applications, documents and visa status."
      identifierLabel="Email Address"
      badge="Student Portal"
      accentTone="gold"
      highlights={[
        "Track offer letters and admission decisions",
        "Upload documents once, reuse everywhere",
        "See your visa filing stage in real time",
      ]}
      footer={
        <>
          New to Unify Overseas?{" "}
          <Link to="/" className="font-medium text-accent hover:underline">
            Create account
          </Link>
        </>
      }
    />
  );
}

