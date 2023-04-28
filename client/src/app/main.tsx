import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import ErrorBoundary from "@shared/ui/ErrorBoundary";
import { Router } from "@pages/index";
import { DEFAULT_THEME } from "@shared/config/themes";
import "@shared/assets/scss/main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div style={{ height: "100vh" }}>
      <ErrorBoundary>
        <ConfigProvider theme={DEFAULT_THEME}>
          <Router />
        </ConfigProvider>
      </ErrorBoundary>
    </div>
  </React.StrictMode>
);
