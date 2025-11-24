import _ from "lodash";

const Pagination = ({ pageSize, posts, currentPage, onChange }) => {
    const numOfpage = Math.ceil(posts.length / pageSize);
    const pages = _.range(1, numOfpage + 1);
    return (
        <>
            {pages.length <= 1 ? null : (
                <nav className="flex items-center space-x-4 mt-auto">
                    <ul className="flex -space-x-px text-sm">
                        <li>
                            <button
                                onClick={() => onChange(currentPage, -1)}
                                style={
                                    currentPage === 1
                                        ? { visibility: "hidden" }
                                        : { visibility: "visible" }
                                }
                                className="flex items-center justify-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-[#a69f9f] shadow-xs font-medium leading-5 text-sm px-3 h-9"
                            >
                                Previous
                            </button>
                        </li>
                        {pages.map((page) => {
                            return (
                                <li key={page}>
                                    <button
                                        onClick={() => onChange(page)}
                                        className={
                                            currentPage === page
                                                ? "flex items-center justify-center border border-default-medium font-medium leading-5 text-sm w-9 h-9 bg-[#a69f9f]"
                                                : "flex items-center justify-center border border-default-medium font-medium leading-5 text-sm w-9 h-9"
                                        }
                                    >
                                        {page}
                                    </button>
                                </li>
                            );
                        })}
                        <li>
                            <button
                                onClick={() => onChange(currentPage, 1)}
                                style={
                                    currentPage === numOfpage
                                        ? { visibility: "hidden" }
                                        : { visibility: "visible" }
                                }
                                className="flex items-center justify-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-[#a69f9f] shadow-xs font-medium leading-5 text-sm px-3 h-9"
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    );
};

export default Pagination;
