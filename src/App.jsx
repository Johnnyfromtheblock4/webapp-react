import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import DetailMovie from "./pages/DetailMovie";
import NotFound from "./pages/NotFound";
import CreateMovie from "./pages/CreateMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/movie/:id" element={<DetailMovie />} />
          <Route path="/movies/create" element={<CreateMovie />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
