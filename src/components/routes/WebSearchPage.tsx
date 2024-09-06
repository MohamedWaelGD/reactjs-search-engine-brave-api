import React, { useEffect, useState } from "react";
import { WebRequest } from "../../models/Web.Model";
import Loading from "../Loading";

const WebSearchPage = (props: any) => {
    const [webData, setWebData] = useState<WebRequest>();
    const { search } = props;

    useEffect(() => {
        async function getWebResults() {
            try {
                setWebData(undefined);

                const baseUrl = `https://real-time-web-search.p.rapidapi.com/search?q=${
                    search || "games"
                }&limit=16`;
                const res = await fetch(baseUrl, {
                    headers: {
                        "x-rapidapi-key":
                            "64e90bbfb3msh3e1a137ffaf8c25p15700fjsnbb66b815b2bb",
                        "x-rapidapi-host":
                            "real-time-web-search.p.rapidapi.com",
                    },
                });

                const data = await res.json();
                if (data) {
                    setWebData(data);
                }
            } catch (error) {
                console.error(error);
            }
        }

        getWebResults();
    }, [search]);

    return webData ? (
        <div className="grid grid-cols-2 gap-5 container mx-auto">
            {webData?.data?.map((data, index) => (
                <div className="flex flex-col gap-1" key={index}>
                    <a
                        href={data.url}
                        target="_blank"
                        className="text-gray-500 text-sm truncate text-ellipsis w-72"
                    >
                        {data.url}
                    </a>
                    <a
                        href={data.url}
                        target="_blank"
                        className="text-sky-400 text-lg hover:underline"
                    >
                        {data.title}
                    </a>
                </div>
            ))}
        </div>
    ) : (
        <Loading />
    );
};

export default WebSearchPage;
