import { ourFileRouter } from "@/app/api/uploadthing/core";
import { createNextRouteHandler } from "uploadthing/next";

export const dynamic = "force-dynamic";

export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
});
