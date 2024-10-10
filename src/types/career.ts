export interface CareerNode {
    id: number;
    title: string;
    description: string;
    children?: CareerNode[];
}