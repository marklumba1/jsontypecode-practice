import { createRoot } from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = document.getElementById("root");
const queryClient = new QueryClient();

if (root)
  createRoot(root).render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>,
  );
else throw new Error("Root element not found.");
