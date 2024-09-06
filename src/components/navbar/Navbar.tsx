import SearchInput from "./SearchInput";

const Navbar = (props: any) => {
    const { setSearch, setDarkMode, darkMode } = props;

    return (
        <div className="flex justify-between align-middle px-6 py-3">
            <div className="flex align-middle space-x-52">
                <div className="bg-sky-800 text-sky-50 rounded bold px-5 py-2 font-bold text-xl">
                    BrVe 🔎
                </div>
                <SearchInput setSearch={setSearch} />
            </div>
            <button onClick={() => setDarkMode(!darkMode)} className="border-0 rounded bg-slate-50 text-sky-950 dark:bg-sky-800 dark:text-sky-50 hover:bg-slate-300 dark:hover:bg-sky-600 outline-none px-5 py-2 text-xl transition">
                {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
        </div>
    );
};

export default Navbar;
