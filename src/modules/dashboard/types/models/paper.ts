export interface IPaper {
    id: string;
    title: string;
    author: string;
    description: string;
    paperFile: File[] | string;
    thumbnail: File[] | string;
    uploadDate: Date;
}

export type IPaperForm = Omit<IPaper, "id" | "uploadDate">;
