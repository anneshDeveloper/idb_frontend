import { useState } from "react";
import Head from "../../components/head/Head";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AppDrawer from "../../components/appDrawer/AppDrawer";

export default function Layout({ children, socialMediaIcon, contactUsData }) {
  const [visbility, setVisbility] = useState(false);
  return (
    <>
      <Head logo={"/favicon.ico"} />
      <Header
        menuIcon={"/Title Icon set1.svg"}
        logo={"/Title_Logo.svg"}
        setDrawerVisbility={setVisbility}
      />
      {children}
      <Footer
        logo={"/StaffSocialClub-Logo_footer.png"}
        socialMediaIcon={socialMediaIcon}
        contactUsData={contactUsData}
      />
      <AppDrawer visbility={visbility} setVisbility={setVisbility} />
    </>
  );
}