import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import MenuPage from "./components/pages/MenuPage";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <MenuPage />
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}
