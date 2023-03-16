// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { prismaClient } from "../../prisma/client";

type Data = {
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const dbTest = await prismaClient.works.findMany();
    console.log(dbTest);

    res.status(200).json({ name: "John Doe" });
}
