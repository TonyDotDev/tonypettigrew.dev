import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const totalViewCount = await prisma.snippetViews.aggregate({
      _sum: {
        count: true,
      },
    });

    return res.status(200).json({ total: totalViewCount._sum.count?.toString() });
  } catch (e: any) {
    return res.status(500).json({ message: e?.message || "Server error" });
  }
}
