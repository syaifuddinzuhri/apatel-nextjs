import type { NextPage } from "next";
import dynamic from "next/dynamic";

import createNextPage from "@/utils/createNextPage";
import { DashboardLayout } from "../../layouts";

const Units = dynamic(async () => await import("@/modules/unit/index"));

const UnitsPage: NextPage = () => {
  return <Units />;
};

export default createNextPage(UnitsPage, {
  layout: children => <DashboardLayout>{children}</DashboardLayout>,
});
