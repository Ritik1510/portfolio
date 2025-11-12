import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";

function ErrorBoundaryFallBack({ error, resetErrorBoundary }) {
  return (
    <div role="alert" style={{ padding: "1rem", border: "1px solid black" }}>
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary} style={{ marginTop: "0.5rem" }}>
        Try Again
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary
    FallbackComponent={ErrorBoundaryFallBack}
    onReset={() => {
      console.log("App state reset after error");
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>
);