// imports from frameworks
import { NextApiHandler, NextApiRequest } from "next";
// imports from node_modules
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";
import sharp from "sharp";
// imports from clients/configs
import { ironOptions } from "../../lib/config/iron-config";
import { getIronSession } from "iron-session";
// supress next bodyparser
export const config = {
    api: {
        bodyParser: false,
    },
};
// initialize fileName
let fileName = "";
// read file from request
const readFile = (
    req: NextApiRequest,
    saveLocally?: boolean
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
    const options: formidable.Options = {};
    // set options for file handling
    if (saveLocally) {
        // set directory and uid safe filename
        options.uploadDir = path.join(process.cwd(), "/public/images");
        options.filename = (name, ext, path, form) => {
            const uniqueFileName =
                Date.now().toString() + "_" + path.originalFilename;
            fileName = uniqueFileName;
            return uniqueFileName;
        };
    }
    // set max file size
    options.maxFileSize = 4000 * 1024 * 1024;
    // create form with options
    const form = formidable(options);
    // parse form
    return new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) reject(err);
            resolve({ fields, files });
        });
    });
};
// resize and compress image using sharp
// not currently used, inconsistent image quality
const resizeAndCompress = () => {
    sharp(`./public/uploads/${fileName}`)
        .resize({ width: 4000 })
        .jpeg({ quality: 100 })
        .toFile(`./public/images/${fileName.split(".")[0]}.jpg`);
};

const handler: NextApiHandler = async (req, res) => {
    // this is a protected route that can only be accessed by the content manager
    // ----------------------------------------------------------------------------
    // get the session
    const session = await getIronSession(req, res, ironOptions);
    // check if admin is logged in, see also api/login.js
    if (session.user?.isAdmin) {
        if (req.method !== "POST") {
            res.status(405).send("Nope");
            return;
        }
        // check if directory exists, if not create it
        try {
            await fs.readdir(path.join(process.cwd() + "/public", "/images"));
        } catch (error) {
            await fs.mkdir(path.join(process.cwd() + "/public", "/images"));
        }
        // read file from request
        await readFile(req, true);
        res.send(`${fileName}`);
    } else {
        // turn away if not logged in
        res.send("nope");
    }
};

export default handler;
