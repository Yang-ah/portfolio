import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Layout } from "../components";
import {
  HomePage,
  MyFirstDiaryPage,
  AboutPage,
  MovieSelectorPage,
} from "../pages";

const router = (
  <Route>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="movieSelector" element={<MovieSelectorPage />} />
      <Route path="myFirstDiary" element={<MyFirstDiaryPage />} />
    </Route>
  </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(router));

export default rootRouter;
