export interface News {
    title: string;
    "published date": string;
    url: string;
    publisher: Publisher;
    description: string;
}

export interface Publisher {
    href: string;
    title: string;
}
