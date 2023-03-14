export interface IWork {
    id: number;
    title: string;
    description: string;
    description_long?: string;
    links?: ILinks[];
    dates?: IDates[];
    main_img_src?: string;
    images?: IImages[];
    credits?: ICredits[];
}

export interface ILinks {
    link: string;
    link_text: string;
}

export interface IDates {
    date: string;
    time: string;
    venue: string;
}

export interface IImages {
    src: string;
    alt: string;
}

export interface ICredits {
    role: string;
    name: string;
}
