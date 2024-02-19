import type { NextPage } from "next";
import dynamic from "next/dynamic";

import createNextPage from "@/utils/createNextPage";
import { DashboardLayout } from "../layouts";

const Partnership = dynamic(async () => await import("@/modules/partnership/index"));

const PartnershipPage: NextPage = () => {
  return <Partnership />;
};

export default createNextPage(PartnershipPage, {
  layout: children => <DashboardLayout>{children}</DashboardLayout>,
});
