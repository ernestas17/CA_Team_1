import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceSinglePage from "./pages/ServicesSinglePage/ServiceSinglePage";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));

function App() {
  return (
    <>
      <Header />

      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:service" element={<ServiceSinglePage />} />
          <Route
            path="/services/autodiagnostics"
            element={
              <ServiceSinglePage
                img="autodiagnostics"
                title="Auto Diagnostics"
              />
            }
          />
          <Route
            path="/services/bodywork"
            element={<ServiceSinglePage img="bodywork" title="Body Work" />}
          />
          <Route
            path="/services/acrepair"
            element={<ServiceSinglePage img="acrepair" title="AC Repair" />}
          />
          <Route
            path="/services/wheelrepair"
            element={
              <ServiceSinglePage img="wheelrepair" title="Wheel Repair" />
            }
          />
          <Route
            path="/services/oilfilter"
            element={<ServiceSinglePage img="oilfilter" title="Oil Filter" />}
          />
          <Route
            path="/services/insuranceclaim"
            element={
              <ServiceSinglePage img="insuranceclaim" title="Insurance Claim" />
            }
          />
          <Route
            path="/services/enginerepair"
            element={
              <ServiceSinglePage img="enginerepair" title="Engine Repair" />
            }
          />
          <Route
            path="/services/batteries"
            element={<ServiceSinglePage img="batteries" title="Batteries" />}
          />
          <Route
            path="/services/carwash"
            element={<ServiceSinglePage img="carwash" title="Car Wash" />}
          />
          <Route path="/services/customservice" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
