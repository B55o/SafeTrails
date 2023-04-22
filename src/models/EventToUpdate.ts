export interface UpdatedEvent {
    type: string;
    date?: string;
    description: string;
    creator: string | null;
}