import { Link, createFileRoute } from "@tanstack/react-router";

import { LoginLayout } from "@/components/LoginLayout";

export const Route = createFileRoute("/student-login")({
  head: () => ({
    meta: [
      { title: "Student Login | Unify Overseas" },
      {
        name: "description",
        content:
          "Sign in to your Unify Overseas student account to track applications, documents and visa progress.",
      },
      { property: "og:title", content: "Student Login | Unify Overseas" },
      {
        property: "og:description",
        content: "Track your applications, documents and visa progress in one place.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StudentLogin,
});

function StudentLogin() {
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
