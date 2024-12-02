import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/ContextApi";
import { fetchDataFromApi } from "../Constants/Api";
import SearchResultVideoCard from "./SearchResultVideoCard";


const SearchResult = () => {
    const [result, setResult] = useState();
    const { searchQuery } = useParams();
    const { setLoading } = useContext(Context);

    useEffect(() => {
        document.getElementById("root")?.classList.remove("custom-h");
        fetchSearchResults();
    }, [searchQuery]);

    const fetchSearchResults = () => {
        setLoading(true);
        fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
            console.log(res);
            setResult(res?.contents);
            setLoading(false);
        });
    };

    return (
        <div className="flex flex-row h-[calc(100%-56px)]">
            <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white">
                <div className="grid grid-cols-1 gap-2 p-5">
                    {result?.map((item) => {
                        if (item?.type !== "video") return false;
                        const video = item.video;
                        return (
                            <SearchResultVideoCard
                                key={video.videoId}
                                video={video}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SearchResult;