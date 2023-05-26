// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { prismaClient } from "../../prisma/client";
import { Prisma } from "@prisma/client";

type Data = {
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    // const dbTest: Works = await prismaClient.works.findMany();
    type worksWithImages = Prisma.WorksGetPayload<{
        include: {
            work_images: true;
        };
    }>;
    const testQuery: worksWithImages = await prismaClient.Works.findUnique({
        where: {
            id: 1,
        },
        include: {
            work_images: true,
        },
    });
    console.log(testQuery);

    res.status(200).json({ name: "John Doe" });
}
