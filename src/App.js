import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { primary } from "./app/themes";

import ServiceSinglePage from "./pages/ServicesSinglePage/ServiceSinglePage";
import BlogSinglePage from "./pages/BlogSinglePage/BlogSinglePage";
import TEXTS from "./shared/texts";
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
                  posteddate={
                    TEXTS.SingleBlogPage.ShouldIBuyaNewCarorLeaseaNewCarin2021
                      .posteddate
                  }
                  title={
                    TEXTS.SingleBlogPage.ShouldIBuyaNewCarorLeaseaNewCarin2021
                      .title
                  }
                  text={
                    TEXTS.SingleBlogPage.ShouldIBuyaNewCarorLeaseaNewCarin2021
                      .underTitleText
                  }
                  img={
                    TEXTS.SingleBlogPage.ShouldIBuyaNewCarorLeaseaNewCarin2021
                      .img
                  }
                />
              }
            />
            <Route
              path="/blog/GetanAwesomeNumberPlateforYourNewCar"
              element={
                <BlogSinglePage
                  img={
                    TEXTS.SingleBlogPage.GetanAwesomeNumberPlateforYourNewCar
                      .img
                  }
                  posteddate={
                    TEXTS.SingleBlogPage.GetanAwesomeNumberPlateforYourNewCar
                      .posteddate
                  }
                  title={
                    TEXTS.SingleBlogPage.GetanAwesomeNumberPlateforYourNewCar
                      .title
                  }
                  text={
                    TEXTS.SingleBlogPage.GetanAwesomeNumberPlateforYourNewCar
                      .underTitleText
                  }
                />
              }
            />
            <Route
              path="/blog/WouldyouLetaRobotDriveyourCarOurAIFuture"
              element={
                <BlogSinglePage
                  img={
                    TEXTS.SingleBlogPage
                      .WouldyouLetaRobotDriveyourCarOurAIFuture.img
                  }
                  posteddate={
                    TEXTS.SingleBlogPage
                      .WouldyouLetaRobotDriveyourCarOurAIFuture.posteddate
                  }
                  title={
                    TEXTS.SingleBlogPage
                      .WouldyouLetaRobotDriveyourCarOurAIFuture.title
                  }
                  text={
                    TEXTS.SingleBlogPage
                      .WouldyouLetaRobotDriveyourCarOurAIFuture.underTitleText
                  }
                />
              }
            />
            <Route
              path="/blog/WillElectricTechnologySoonRuleTheRoad"
              element={
                <BlogSinglePage
                  img={
                    TEXTS.SingleBlogPage.WillElectricTechnologySoonRuleTheRoad
                      .img
                  }
                  posteddate={
                    TEXTS.SingleBlogPage.WillElectricTechnologySoonRuleTheRoad
                      .posteddate
                  }
                  title={
                    TEXTS.SingleBlogPage.WillElectricTechnologySoonRuleTheRoad
                      .title
                  }
                  text={
                    TEXTS.SingleBlogPage.WillElectricTechnologySoonRuleTheRoad
                      .text
                  }
                />
              }
            />
            <Route
              path="/blog/5-genius-car-accessories-you-should-never-drive-without"
              element={
                <BlogSinglePage
                  img={
                    TEXTS.SingleBlogPage
                      .geniuscaraccessoriesyoushouldneverdrivewithout.img
                  }
                  posteddate={
                    TEXTS.SingleBlogPage
                      .geniuscaraccessoriesyoushouldneverdrivewithout.posteddate
                  }
                  title={
                    TEXTS.SingleBlogPage
                      .geniuscaraccessoriesyoushouldneverdrivewithout.title
                  }
                  text={
                    TEXTS.SingleBlogPage
                      .geniuscaraccessoriesyoushouldneverdrivewithout.text
                  }
                />
              }
            />
            <Route
              path="/blog/5-genius-car-accessories-you-should-never-drive-without-second"
              element={
                <BlogSinglePage
                  img={
                    TEXTS.SingleBlogPage
                      .geniuscaraccessoriesyoushouldneverdrivewithoutsecond.img
                  }
                  posteddate={
                    TEXTS.SingleBlogPage
                      .geniuscaraccessoriesyoushouldneverdrivewithoutsecond
                      .posteddate
                  }
                  title={
                    TEXTS.SingleBlogPage
                      .geniuscaraccessoriesyoushouldneverdrivewithoutsecond
                      .title
                  }
                  text={
                    TEXTS.SingleBlogPage
                      .geniuscaraccessoriesyoushouldneverdrivewithoutsecond.text
                  }
                />
              }
            />
            <Route
              path="/blog/we-provide-blow-straight-past-it-with-the-wheels-skidding"
              element={
                <BlogSinglePage
                  img={
                    TEXTS.SingleBlogPage
                      .weprovideblowstraightpastitwiththewheelsskidding.img
                  }
                  posteddate={
                    TEXTS.SingleBlogPage
                      .weprovideblowstraightpastitwiththewheelsskidding
                      .posteddate
                  }
                  title={
                    TEXTS.SingleBlogPage
                      .weprovideblowstraightpastitwiththewheelsskidding.title
                  }
                  text={
                    TEXTS.SingleBlogPage
                      .weprovideblowstraightpastitwiththewheelsskidding.text
                  }
                />
              }
            />
            <Route
              path="/blog/we-provide-blow-straight-past-it-with-the-wheels-skidding-second"
              element={
                <BlogSinglePage
                  img={
                    TEXTS.SingleBlogPage
                      .weprovideblowstraightpastitwiththewheelsskiddingsecond
                      .img
                  }
                  posteddate={
                    TEXTS.SingleBlogPage
                      .weprovideblowstraightpastitwiththewheelsskiddingsecond
                      .posteddate
                  }
                  title={
                    TEXTS.SingleBlogPage
                      .weprovideblowstraightpastitwiththewheelsskiddingsecond
                      .title
                  }
                  text={
                    TEXTS.SingleBlogPage
                      .weprovideblowstraightpastitwiththewheelsskiddingsecond
                      .text
                  }
                />
              }
            />
            <Route
              path="/blog/5-genius-car-accessories-you-should-never-drive-without-third"
              element={
                <BlogSinglePage
                  img={
                    TEXTS.SingleBlogPage
                      .geniuscaraccessoriesyoushouldneverdrivewithoutthird.img
                  }
                  posteddate={
                    TEXTS.SingleBlogPage
                      .geniuscaraccessoriesyoushouldneverdrivewithoutthird
                      .posteddate
                  }
                  title={
                    TEXTS.SingleBlogPage
                      .geniuscaraccessoriesyoushouldneverdrivewithoutthird.title
                  }
                  text={
                    TEXTS.SingleBlogPage
                      .geniuscaraccessoriesyoushouldneverdrivewithoutthird.text
                  }
                />
              }
            />
            <Route
              path="/blog/5-genius-car-accessories-you-should-never-drive-without-fourth"
              element={
                <BlogSinglePage
                  img={
                    TEXTS.SingleBlogPage
                      .geniuscaraccessoriesyoushouldneverdrivewithoutfourth.img
                  }
                  posteddate={
                    TEXTS.SingleBlogPage
                      .geniuscaraccessoriesyoushouldneverdrivewithoutfourth
                      .posteddate
                  }
                  title={
                    TEXTS.SingleBlogPage
                      .geniuscaraccessoriesyoushouldneverdrivewithoutfourth
                      .title
                  }
                  text={
                    TEXTS.SingleBlogPage
                      .geniuscaraccessoriesyoushouldneverdrivewithoutfourth.text
                  }
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
