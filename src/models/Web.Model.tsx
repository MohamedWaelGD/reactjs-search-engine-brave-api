export interface WebRequest {
    status: string;
    request_id: string;
    data: WebSearch[];
}

export interface WebSearch {
    title: string;
    snippet: string;
    url: string;
    domain: string;
    position: number;
}
