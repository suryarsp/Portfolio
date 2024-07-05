export type ServiceDetail = {
    id: number;
    title: string;
    slug: string;
    category: string;
    imgSrc: string;
    img ?: string;
    description: string[];
    bestPractices: {
        title: string;
        content: string[];
    }[];
}