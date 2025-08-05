import { useState } from "react";
import { ClockLoader } from "react-spinners";
import ProductsCard from "./ProductsCard";

type SuggestionData = {
    suggestions: string[];
    context: string;
};

const ProductButton = () => {
    const [suggestionData, setSuggestionData] = useState<SuggestionData | null>(null);
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        try {
            setLoading(true);
            const stored = localStorage.getItem("suggestionData");
            const cachedSuggestionData = stored ? JSON.parse(stored) : null;
            setSuggestionData(cachedSuggestionData);
            console.log("Fetched suggestions:", cachedSuggestionData);
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
        </>
    );
};

export default ProductButton;
