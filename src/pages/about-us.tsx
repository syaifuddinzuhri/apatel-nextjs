import type { NextPage } from "next";
import dynamic from "next/dynamic";

import createNextPage from "@/utils/createNextPage";
import { DashboardLayout } from "../layouts";

const AboutUs = dynamic(async () => await import("@/modules/about-us/index"));

const AboutUsPage: NextPage = () => {
  return <AboutUs />;
};

export default createNextPage(AboutUsPage, {
  layout: children => <DashboardLayout>{children}</DashboardLayout>,
});
