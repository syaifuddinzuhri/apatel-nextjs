import { useQuery } from "@tanstack/react-query";

import type { QueryPropsDetail, QueryPropsList } from "@/interfaces/common";
import axios from "@/utils/api/callApi";

export const useGetSettingByParam = (param?: string, enabled?: boolean) =>
  useQuery<QueryPropsDetail<any>, Error>({
    queryKey: ["setting-by-param"],
    queryFn: () =>
      axios<QueryPropsDetail<any>>({
        method: "get",
        url: `/public/setting/get-by-param/${param}`,
      }),
    enabled,
  });
