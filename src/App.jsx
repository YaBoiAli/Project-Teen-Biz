import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn"; // Sign-In page
import MainPage1 from "./components/mainpage/homepage1"; // Main page
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute

import MainNav from "./components/navigation/mainNav";
import Product from "./components/Create-Product/Product";
import Service from "./components/Service/service";
import SellApp from "./components/App/app";
import DesignStation from "./components/Design-Station/Design-Station";
import SellinTeenBiz from "./components/Sell-Teen-Biz/sellinteenbiz";
import Writing from "./components/Write-a-book/write-a-book";
import CreateApp from "./components/CreateApp";
import WriteBook from "./components/WriteBook";
import Design from "./components/Design";
import CreateProduct from "./components/CreateProduct";
import SellTrailBlaze from "./components/SellTrailBlaze";
import TakeCourses from "./components/Take-a-course/takcourse";
import SellService from "./components/SellService";
import NotFound from "./components/NotFound";
import StoreDashboard from "./components/StoreDashboard"; // Import StoreDashboard
import FoodDrinkPage from "./components/Create-Product/FoodxDrink";


function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<SignIn />} /> {/* Default to Sign-In */}
        <Route path="/main" element={<MainPage1 />} /> {/* Allow Main Page */}

        {/* Protect all other routes */}
        <Route
          path="/nav"
          element={
            <ProtectedRoute>
              <MainNav />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product"
          element={
            <ProtectedRoute>
              <Product />
            </ProtectedRoute>
          }
        />
        <Route
          path="/service"
          element={
            <ProtectedRoute>
              <Service />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sellapp"
          element={
            <ProtectedRoute>
              <SellApp />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Design-Station"
          element={
            <ProtectedRoute>
              <DesignStation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sell-in-the-teen-biz-shop"
          element={
            <ProtectedRoute>
              <SellinTeenBiz />
            </ProtectedRoute>
          }
        />
        <Route
          path="/writing"
          element={
            <ProtectedRoute>
              <Writing />
            </ProtectedRoute>
          }
        />
        <Route path="/create-product/food-drink" element={<FoodDrinkPage />} />
        <Route
          path="/create-app"
          element={
            <ProtectedRoute>
              <CreateApp />
            </ProtectedRoute>
          }
        />
        <Route
          path="/write-book"
          element={
            <ProtectedRoute>
              <WriteBook />
            </ProtectedRoute>
          }
        />
        <Route
          path="/design"
          element={
            <ProtectedRoute>
              <Design />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-product"
          element={
            <ProtectedRoute>
              <CreateProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sell-trail-blaze"
          element={
            <ProtectedRoute>
              <SellTrailBlaze />
            </ProtectedRoute>
          }
        />
        <Route
          path="/take-course"
          element={
            <ProtectedRoute>
              <TakeCourses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sell-service"
          element={
            <ProtectedRoute>
              <SellService />
            </ProtectedRoute>
          }
        />

        {/* ✅ New Route for Store Dashboard */}
        <Route
          path="/store-dashboard"
          element={
            <ProtectedRoute>
              <StoreDashboard />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
