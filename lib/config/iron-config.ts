import type { IronSessionOptions } from "iron-session";

export const ironOptions: IronSessionOptions = {
    cookieName: "userSession",
    password: process.env.SECRET_COOKIE_PASSWORD as string,
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
        secure: process.env.NODE_ENV === "production" ? true : false,
    },
};

declare module "iron-session" {
    interface IronSessionData {
        user?: {
            username: string;
            isAdmin: boolean;
        };
    }
    // interface ironOptions {
    //     cookieName: string;
    //     password: string | undefined;
    //     cookieOptions: {
    //         secure: boolean;
    //     };
    // }
}
