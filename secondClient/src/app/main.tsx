import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider, theme } from "antd";
import ErrorBoundary from "@shared/ui/ErrorBoundary";
import { Router } from "@pages/index";
import "@shared/assets/scss/main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div style={{ height: "100vh" }}>
      <ErrorBoundary>
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
          }}
        >
          <Router />
        </ConfigProvider>
      </ErrorBoundary>
    </div>
  </React.StrictMode>
);
