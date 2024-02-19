import type { NextPage } from "next";
import dynamic from "next/dynamic";

import createNextPage from "@/utils/createNextPage";
import { DashboardLayout } from "../layouts";

const Promo = dynamic(async () => await import("@/modules/promo/index"));

const PromoPage: NextPage = () => {
  return <Promo />;
};

export default createNextPage(PromoPage, {
  layout: children => <DashboardLayout>{children}</DashboardLayout>,
});
