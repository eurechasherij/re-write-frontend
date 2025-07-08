import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import AboutPage from "@/pages/about";
import PostPage from "@/pages/post";
import DefaultLayout from "./layouts/DefaultLayout";
import BlogPage from "./pages/blog";

function App() {
  return (
    <DefaultLayout>
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<BlogPage />} path="/blog" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<PostPage />} path="/posts/:slug" />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
