import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(query);
        setQuery();
    };

    return (
        <header>
            <form onSubmit={handleSubmit} className={css.searchForm}>
                <button type="submit" className={css.searchBtn}>
                    <FaSearch className={css.searchSvg} />
                </button>
                <input
                    type="text"
                    placeholder="Search images and photos"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    autoComplete="off"
                    className={css.searchArea}
                />
            </form>
        </header>
    );
};