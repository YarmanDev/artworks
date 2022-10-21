import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { ArtworkDetails, ArtworksView } from "./features";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledApp>
        <Routes>
          <Route path="/" element={<ArtworksView />} />
          <Route path="/artwork/:id" element={<ArtworkDetails />} />
        </Routes>
      </StyledApp>
    </QueryClientProvider>
  );
}

export default App;

const StyledApp = styled.div`
  background-image: linear-gradient(to right, #0f0c29, #302b63, #24243e);
  min-height: 100vh;
`;
