import { Route, Routes } from "react-router-dom";

import { AgentLoginPage } from "@/pages/AgentLoginPage";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { StudentLoginPage } from "@/pages/StudentLoginPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/student-login" element={<StudentLoginPage />} />
      <Route path="/agent-login" element={<AgentLoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
