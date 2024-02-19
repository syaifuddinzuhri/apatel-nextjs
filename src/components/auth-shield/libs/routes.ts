import type { RoleAccess } from "../types/props";

export function verifyPath(routes: string[], uri: string): boolean | undefined {
  return routes.some(route => {
    if (route.endsWith("*")) {
      const baseRoute = route.slice(0, -1);
      return uri.startsWith(baseRoute);
    } else {
      return route === uri;
    }
  });
}

export function getAccessRoute(
  RBAC: RoleAccess<string[]> | undefined,
  userRole: string | undefined,
  accessRoute: string | undefined
): string {
  if (typeof accessRoute !== "undefined") return accessRoute;

  if (RBAC != null && userRole) return RBAC[userRole].accessRoute;

  return "/";
}
