import { useQuery } from "@tanstack/react-query";

import type { UnitParams } from "@/interfaces/units";
import type { QueryPropsDetail, QueryPropsList } from "@/interfaces/common";
import axios from "@/utils/api/callApi";

export const useGetPublicUnitsQuery = (params?: UnitParams, enabled?: boolean) =>
  useQuery<QueryPropsList<any>, Error>({
    queryKey: ["public-units"],
    queryFn: () =>
      axios<QueryPropsList<any>>({
        method: "get",
        url: `/public/unit/get-all`,
        params,
      }),
    enabled,
  });
