import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/site/index.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", background: "#04070d", color: "#e8f1ff", display: "grid", placeItems: "center", fontFamily: "system-ui" }}>
      <p>جارٍ التحميل…</p>
    </div>
  );
}
