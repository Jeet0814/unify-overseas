import { Link, createFileRoute } from "@tanstack/react-router";

import { LoginLayout } from "@/components/LoginLayout";

export const Route = createFileRoute("/agent-login")({
  head: () => ({
    meta: [
      { title: "Agent Portal Login | Unify Overseas" },
      {
        name: "description",
        content:
          "Partner agents sign in to the Unify Overseas agent portal to submit student files and track commissions.",
      },
      { property: "og:title", content: "Agent Portal Login | Unify Overseas" },
      {
        property: "og:description",
        content: "Submit student files, monitor application stages and track payouts.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AgentLogin,
});

function AgentLogin() {
  return (
    <LoginLayout
      heading="Agent Portal"
      subheading="Sign in with your Agent ID to manage student files and track payouts."
      identifierLabel="Agent ID or Email"
      identifierType="text"
      badge="Partner Network"
      accentTone="navy"
      highlights={[
        "Submit and monitor multiple student files",
        "Shared document vault for every applicant",
        "Commission and payout statements",
      ]}
      footer={
        <>
          Want to partner with us?{" "}
          <Link to="/" className="font-medium text-accent hover:underline">
            Request agent access
          </Link>
        </>
      }
    />
  );
}
