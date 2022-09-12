import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const slug = req?.query?.slug?.toString() || "";

    if (req.method === "GET") {
      const views = await prisma.blogViews.findUnique({
        where: {
          slug,
        },
      });

      return res.status(200).json({ total: views?.count.toString() || 0 });
    } else if (req.method === "POST") {
      const views = await prisma.blogViews.upsert({
        where: { slug },
        create: {
          slug,
        },
        update: {
          count: {
            increment: 1,
          },
        },
      });

      return res.status(200).json({
        total: views.count.toString() || 0,
      });
    } else
      return res.status(400).json({
        message:
          "Malformed request, make sure that this is a `POST` or `GET` request containing a query parameter called `slug`",
      });
  } catch (e: any) {
    return res.status(500).json({ message: e?.message || "Server error" });
  }
}
