import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import DetailMovie from "./pages/DetailMovie";
import NotFound from "./pages/NotFound";
import CreateMovie from "./pages/CreateMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importiamo il LoaderProvider
import { LoaderProvider } from "./context/LoaderContext";

function App() {
  return (
    <BrowserRouter>
      <LoaderProvider>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/movie/:id" element={<DetailMovie />} />
            <Route path="/movies/create" element={<CreateMovie />} />
            <Route path="/not-found" element={<NotFound />} />
          </Route>
        </Routes>
      </LoaderProvider>
    </BrowserRouter>
  );
}

export default App;
