import { withSessionRoute } from "../../lib/config/withSession";

export default withSessionRoute(createSessionRoute);

async function createSessionRoute(req, res) {
    // if (req.method === "POST") {
    // const { userName, password } = req.body;

    // if (
    //     userName === process.env.ADMIN_NAME &&
    //     password === process.env.ADMIN_PASSWORD
    // ) {
    //     req.session.user = {
    //         username: "admin",
    //         isAdmin: true,
    //     };
    //     await req.session.save();
    //     res.send({ ok: true });
    // }
    return res.status(403).send("nope");
    // }
    // return res.status(401).send("nope");
}
