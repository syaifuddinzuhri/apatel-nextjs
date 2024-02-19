import type { NextPage } from "next";
import dynamic from "next/dynamic";

import createNextPage from "@/utils/createNextPage";
import { DashboardLayout } from "../../layouts";

const UnitDetail = dynamic(async () => await import("@/modules/unit/detail"));

const UnitDetailPage: NextPage = () => {
  return <UnitDetail />;
};

export default createNextPage(UnitDetailPage, {
  layout: children => <DashboardLayout>{children}</DashboardLayout>,
});
