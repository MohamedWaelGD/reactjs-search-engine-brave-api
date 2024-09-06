import React, { useEffect, useState } from "react";
import { News } from "../../models/News.Model";
import Loading from "../Loading";

const NewsPage = (props: any) => {
    const [newsData, setNewsData] = useState<News[]>();
    const { search } = props;

    useEffect(() => {
        async function getNewsResults() {
            try {
                setNewsData(undefined);

                const baseUrl = `https://news-searcher.p.rapidapi.com/v1/news_search/search_and_parse/?query=${
                    search || "games"
                }&page=1`;
                const res = await fetch(baseUrl, {
                    headers: {
                        "x-rapidapi-key":
                            "64e90bbfb3msh3e1a137ffaf8c25p15700fjsnbb66b815b2bb",
                        "x-rapidapi-host": "news-searcher.p.rapidapi.com",
                    },
                });

                const data = await res.json();
                if (data) {
                    setNewsData(data);
                }
            } catch (error) {
                console.error(error);
            }
        }

        getNewsResults();
    }, [search]);

    return newsData ? (
        <div className="grid grid-cols-2 gap-5 container mx-auto">
            {newsData?.map((data, index) => (
                <div className="flex flex-col gap-1" key={index}>
                    {data.publisher && (
                        <a
                            href={data.publisher?.href}
                            className="text-gray-600 hover:underline text-lg font-bold"
                        >
                            {data.publisher.title}
                        </a>
                    )}
                    <a
                        href={data.url}
                        target="_blank"
                        className="text-sky-400 text-lg hover:underline"
                    >
                        {data.title}
                    </a>
                    <p className="text-gray-500">{data["published date"]}</p>
                </div>
            ))}
        </div>
    ) : (
        <Loading />
    );
};

export default NewsPage;
