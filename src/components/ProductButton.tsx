import { useState } from "react";
import { ClockLoader } from "react-spinners";
import ProductsCard from "./ProductsCard";
import ErrorCard from "./ErrorCard";

type SuggestionData = {
    suggestions: string[];
    context: string;
};

const ProductButton = () => {
    const [suggestionData, setSuggestionData] = useState<SuggestionData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleClick = async () => {
        try {
            setLoading(true);
            const stored = localStorage.getItem("suggestionData");
            const cachedSuggestionData = stored ? JSON.parse(stored) : null;
            setSuggestionData(cachedSuggestionData);
            console.log("Fetched suggestions:", cachedSuggestionData);
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
                className="mt-6 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded hover:bg-gray-600"
            >
                Want some Personalized Clothing Suggestions?
            </button>

            {loading && (
                <div className="flex justify-center mt-4">
                    <div className="block dark:hidden">
                        <ClockLoader color="#000" />
                    </div>
                    <div className="hidden dark:block">
                        <ClockLoader color="#fff" />
                    </div>
                </div>
            )}


            {!loading && suggestionData && (
                <div className="mt-4">
                    <ProductsCard
                        products={suggestionData.suggestions}
                        context={suggestionData.context}
                    />
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

export default ProductButton;
