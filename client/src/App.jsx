import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import { Navbar, Footer, NotFound, Loader } from "./components";

const Home = React.lazy(() => import("./pages/Home"));
const SendEther = React.lazy(() => import("./pages/SendEther"));
const Lottery = React.lazy(() => import("./pages/Lottery"));
const LotteryPool = React.lazy(() => import("./pages/LotteryPool"));
const BuyToken = React.lazy(() => import("./pages/BuyToken"));

const App = () => (
  <div className="min-h-screen flex flex-col overflow-hidden">
    <Navbar />
    
    <Footer />
  </div>
);

export default App;
