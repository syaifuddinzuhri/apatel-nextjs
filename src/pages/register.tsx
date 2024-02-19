import type { NextPage } from "next";
import dynamic from "next/dynamic";

import createNextPage from "@/utils/createNextPage";
import { PublicLayout } from "../layouts";

const Register = dynamic(async () => await import("@/modules/auth/Register"));

const RegisterPage: NextPage = () => {
  return <Register />;
};

export default createNextPage(RegisterPage, {
  layout: children => <PublicLayout>{children}</PublicLayout>,
});
