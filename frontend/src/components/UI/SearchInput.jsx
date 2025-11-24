const SearchInput = ({ value, onChange }) => {
    return (
        <input
            value={value}
            onChange={onChange}
            type="text"
            placeholder="Поиск..."
            className="block p-3 mb-8 mx-auto w-[50%] border border-black rounded-2xl"
        />
    );
};

export default SearchInput;
