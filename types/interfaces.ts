export interface IWork {
    id: number;
    title: string;
    description: string;
    description_long?: string;
    dates?: [{ date: string; venue: string }];
    main_img_src?: string;
    img_src?: [string];
    credits_role?: [string];
    credits_name?: [string];
}
