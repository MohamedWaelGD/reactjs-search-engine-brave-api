import { Route, Routes } from "react-router-dom";
import WebSearchPage from "./WebSearchPage";
import NewsPage from "./NewsPage";
import ImagesPage from "./ImagesPage";
import VideosPage from "./VideosPage";

const RoutesPage = (props: any) => {
    const { search } = props;
    return (
        <div className="p-4">
            <Routes>
                <Route
                    path="/all"
                    element={<WebSearchPage search={search} />}
                />
                <Route path="/news" element={<NewsPage search={search} />} />
                <Route path="/images" element={<ImagesPage search={search} />} />
                <Route path="/videos" element={<VideosPage search={search} />} />
                <Route path="/" element={<WebSearchPage search={search} />} />
            </Routes>
        </div>
    );
};

export default RoutesPage;
