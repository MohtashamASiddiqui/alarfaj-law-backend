import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/english/Home";
import ArabicHome from "./components/arabic/Home";
import Blogs from "./components/english/Blogs";
import Navbar from "./Navbar";
import ArabicNavbar from "./ArabicNavbar";
import Footer from "./Footer";
import ArabicFooter from "./ArabicFooter";
import Allblogs from "./components/english/Allblogs";
import AllArabicblogs from "./components/arabic/Allblogs";
import Peoples from "./components/english/Peoples";
import ArabicPeoples from "./components/arabic/Peoples";
import ArabicBlogs from "./components/arabic/Blogs"; // Corrected import name
import style from "./style.css";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        {/* English routes */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/all"
          element={
            <>
              <Navbar />
              <Allblogs />
              <Footer />
            </>
          }
        />
        <Route
          path="/:category/:slug"
          element={
            <>
              <Navbar />
              <Blogs />
              <Footer />
            </>
          }
        />
        <Route
          path="/team/:url"
          element={
            <>
              <Navbar />
              <Peoples />
              <Footer />
            </>
          }
        />
        {/* Arabic routes */}
        <Route
          path="/ar"
          element={
            <>
              <ArabicNavbar />
              <ArabicHome />
              <ArabicFooter />
            </>
          }
        />
        <Route
          path="/ar/all"
          element={
            <>
              <ArabicNavbar />
              <AllArabicblogs />
              <ArabicFooter />
            </>
          }
        />
        <Route
          path="/ar/:urlCategory/:url"
          element={
            <>
              <ArabicNavbar />
              <ArabicBlogs />
              <ArabicFooter />
            </>
          }
        />
        {/* Corrected component name */}
        <Route
          path="/ar/team/:url"
          element={
            <>
              <ArabicNavbar />
              <ArabicPeoples />
              <ArabicFooter />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
