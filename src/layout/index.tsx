import React from "react";

import Footer from "./footer";
import Header from "./header";

import { BrowserRouter as Router } from "react-router-dom";
import { basename } from "../config";

import ToastProvider from "../components/notifications/provider";

function Layout({ children }: { children: any }) {
  return (
    <Router basename={basename}>
      <div className="d-flex flex-column min-vh-100">
        <Header />

        <ToastProvider>
          <main className="flex-fill">
            <div className="container">{children} </div>
          </main>
        </ToastProvider>

        <Footer />
      </div>
    </Router>
  );
}
export default Layout;
