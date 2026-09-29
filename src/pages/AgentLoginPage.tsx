import { Link } from "react-router-dom";

import { LoginLayout } from "@/components/LoginLayout";

export function AgentLoginPage() {
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

