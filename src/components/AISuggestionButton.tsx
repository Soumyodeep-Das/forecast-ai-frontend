import { useState } from "react";
import { fetchSuggestions } from "../services/suggestionService";
import SuggestionCard from "./SuggestionCard";
import { GridLoader } from "react-spinners";

const AISuggestionButton = () => {
    const [suggestionData, setSuggestionData] = useState<{ suggestions: string[], context: string } | null>(null);
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        try {
            setLoading(true);
            const fetchedSuggestions = await fetchSuggestions();
            setSuggestionData(fetchedSuggestions);
            console.log("Fetched suggestions:", fetchedSuggestions);
        } catch (error) {
            console.error("Failed to fetch suggestions:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={handleClick}
                className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded hover:bg-gray-600"
            >
                Get AI Suggestions
            </button>

            {loading && (
                <div className="flex justify-center mt-4">
                    <div className="block dark:hidden">
                        <GridLoader color="#000" />
                    </div>
                    <div className="hidden dark:block">
                        <GridLoader color="#fff" />
                    </div>
                </div>
            )}


            {!loading && suggestionData && (
                <div className="mt-4">
                    <SuggestionCard
                        suggestions={suggestionData.suggestions}
                        context={suggestionData.context}
                    />
                </div>
            )}
        </>
    );
};

export default AISuggestionButton;
