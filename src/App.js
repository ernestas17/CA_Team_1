import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceSinglePage from "./pages/ServicesSinglePage/ServiceSinglePage";
import BlogSinglePage from "./pages/BlogSinglePage/BlogSinglePage";

import { primary } from "./app/themes";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));

function App() {
  const theme = { primary };

  return (
    <>
      <ThemeProvider theme={theme}>
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
                <ServiceSinglePage
                  img="insuranceclaim"
                  title="Insurance Claim"
                />
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
            <Route
              path="/blog/ShouldIBuyaNewCarorLeaseaNewCarin2021"
              element={
                <BlogSinglePage
                  img="ShouldIBuyaNewCarorLeaseaNewCarin2021"
                  posteddate="Posted on October 6th 2021"
                  title="Should I Buy a New Car or Lease a New Car in 2021?"
                  text="We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical "
                />
              }
            />
            <Route
              path="/blog/GetanAwesomeNumberPlateforYourNewCar"
              element={
                <BlogSinglePage
                  img="americanvehiclenumberplates"
                  posteddate="Posted on October 6th 2021"
                  title="Get an Awesome Number Plate for Your New Car"
                  text="We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical "
                />
              }
            />
            <Route
              path="/blog/WouldyouLetaRobotDriveyourCarOurAIFuture"
              element={
                <BlogSinglePage
                  img="WouldyouLetaRobotDriveyourCarOurAIFuture"
                  posteddate="Posted on October 6th 2021"
                  title="Would you Let a Robot Drive your Car? Our AI Future"
                  text="We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical "
                />
              }
            />
            <Route
              path="/blog/WillElectricTechnologySoonRuleTheRoad"
              element={
                <BlogSinglePage
                  img="WillElectricTechnologySoonRuleTheRoad"
                  posteddate="Posted on October 6th 2021"
                  title="Would you Let a Robot Drive your Car? Our AI Future"
                  text="We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical "
                />
              }
            />
            <Route
              path="/blog/5-genius-car-accessories-you-should-never-drive-without"
              element={
                <BlogSinglePage
                  img="ShouldIBuyaNewCarorLeaseaNewCarin2021"
                  posteddate="Posted on October 6th 2021"
                  title="5 Genius Car Accessories You Should Never Drive Without"
                  text="We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical "
                />
              }
            />
            <Route
              path="/blog/5-genius-car-accessories-you-should-never-drive-without-second"
              element={
                <BlogSinglePage
                  img="americanvehiclenumberplates"
                  posteddate="Posted on October 6th 2021"
                  title="5 Genius Car Accessories You Should Never Drive Without"
                  text="We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical "
                />
              }
            />
            <Route
              path="/blog/we-provide-blow-straight-past-it-with-the-wheels-skidding"
              element={
                <BlogSinglePage
                  img="WouldyouLetaRobotDriveyourCarOurAIFuture"
                  posteddate="Posted on October 6th 2021"
                  title="We provide blow straight past it with the wheels skidding"
                  text="We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical "
                />
              }
            />
            <Route
              path="/blog/we-provide-blow-straight-past-it-with-the-wheels-skidding-second"
              element={
                <BlogSinglePage
                  img="WillElectricTechnologySoonRuleTheRoad"
                  posteddate="Posted on October 6th 2021"
                  title="We provide blow straight past it with the wheels skidding"
                  text="We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical "
                />
              }
            />{" "}
            <Route
              path="/blog/5-genius-car-accessories-you-should-never-drive-without-third"
              element={
                <BlogSinglePage
                  img="WouldyouLetaRobotDriveyourCarOurAIFuture"
                  posteddate="Posted on October 6th 2021"
                  title="5 Genius Car Accessories You Should Never Drive Without"
                  text="We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical "
                />
              }
            />
            <Route
              path="/blog/5-genius-car-accessories-you-should-never-drive-without-fourth"
              element={
                <BlogSinglePage
                  img="WillElectricTechnologySoonRuleTheRoad"
                  posteddate="Posted on October 6th 2021"
                  title="5 Genius Car Accessories You Should Never Drive Without"
                  text="We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical "
                />
              }
            />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>

        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
