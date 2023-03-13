export interface IWork {
    id: number;
    title: string;
    description: string;
    description_long?: string;
    links?: ILinks[];
    dates?: IDates[];
    main_img_src?: string;
    img_src?: [string];
    credits?: ICredits[];
}

export interface ILinks {
    link: string;
    link_text: string;
}

export interface IDates {
    date: string;
    venue: string;
}

export interface ICredits {
    role: string;
    name: string;
}
