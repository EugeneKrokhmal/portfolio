import { useSearch } from "../context/SearchContext";
import data from "../data";

const SearchResults = () => {
    const { searchQuery } = useSearch();

    const allPages = [...data.projects, ...data.experiences, ...data.education];

    const matchesSearchQuery = (obj, query) => {
        return Object.values(obj).some((value) => {
            if (typeof value === "string") {
                return value.toLowerCase().includes(query.toLowerCase());
            } else if (Array.isArray(value)) {
                return value.some((item) => typeof item === "string" && item.toLowerCase().includes(query.toLowerCase()));
            } else if (typeof value === "object" && value !== null) {
                return matchesSearchQuery(value, query);
            }
            return false;
        });
    };

    const filteredResults = allPages.filter((item) => matchesSearchQuery(item, searchQuery));

    return (
        <div className="py-24 text-green-400 min-h-screen">
            <h2 className="mb-4 mt-4 text-4xl font-extrabold tracking-tight leading-none md:text-3xl text-green-400">
                Search Results for: "{searchQuery}"
            </h2>
            {filteredResults.length > 0 ? (
                filteredResults.map((result, index) => (
                    <div key={index} className="mb-2 p-2 border border-green-400">
                        <h3 className="text-lg font-bold">{result.title || result.institution}</h3>
                        <p className="text-sm">{result.company || result.degree || result.role}</p>
                        {result.link && (
                            <button
                                className="mt-2 px-3 py-1 bg-green-400 text-black"
                                onClick={() => window.open(result.link, "_blank")}
                            >
                                View
                            </button>
                        )}
                    </div>
                ))
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default SearchResults;
