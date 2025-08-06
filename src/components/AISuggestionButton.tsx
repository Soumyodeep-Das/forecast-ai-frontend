import { useState } from "react";
import { fetchSuggestions } from "../services/suggestionService";
import SuggestionCard from "./SuggestionCard";
import { GridLoader } from "react-spinners";
import ProductButton from "./ProductButton"; // Assuming you want to keep the original ProductButton
import ErrorCard from "./ErrorCard";

const AISuggestionButton = () => {
    const [suggestionData, setSuggestionData] = useState<{ suggestions: string[], context: string } | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleClick = async () => {
        try {
            setLoading(true);
            const fetchedSuggestions = await fetchSuggestions();
            setSuggestionData(fetchedSuggestions);
            localStorage.setItem("suggestionData", JSON.stringify(fetchedSuggestions));
            console.log("Fetched suggestions:", fetchedSuggestions);
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
            console.error("Failed to fetch suggestions:", errorMessage);
            setError(errorMessage);
            setSuggestionData(null);
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
                <div className="mt-4 flex flex-col items-center justify-center">
                    <SuggestionCard
                        suggestions={suggestionData.suggestions}
                        context={suggestionData.context}
                    />
                    <ProductButton />
                </div>

            )}

            {!loading && error && (
                <div className="mt-4 flex justify-center">
                    <ErrorCard
                        errorMessage={error}
                        onRetry={handleClick}
                    />
                </div>
            )}

        </>
    );
};

export default AISuggestionButton;
