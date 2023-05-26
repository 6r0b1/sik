export interface IWork {
    id: number;
    title_de: string;
    description_de: string;
    description_long_de?: string[];
    title_en: string;
    description_en: string;
    description_long_en?: string[];
    links?: ILinks[];
    dates?: IDates[];
    main_img_src: string;
    images?: IImages[];
    credits?: ICredits[];
}

export interface ILinks {
    link: string;
    link_text_de: string;
    link_text_en: string;
}

export interface IDates {
    date: string;
    time: string;
    venue: string;
}

export interface IImages {
    src: string;
    alt_de: string;
    alt_en: string;
}

export interface ICredits {
    role_de: string;
    role_en: string;
    name_de: string;
    name_en: string;
}
