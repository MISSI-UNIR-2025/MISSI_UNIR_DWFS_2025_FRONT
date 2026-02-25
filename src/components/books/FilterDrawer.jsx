import { useState, useEffect } from "react";
import {
    Drawer,
    Button,
    Checkbox,
    Collapse,
    Badge,
    Tag,
    Divider,
    Rate,
    Space,
    Tooltip,
    Input,
} from "antd";
import {
    FilterOutlined,
    ClearOutlined,
    CheckOutlined,
    TagOutlined,
    UserOutlined,
    StarOutlined,
    DollarOutlined,
    SearchOutlined,
} from "@ant-design/icons";
import useBooksStore from "../../store/useBooksStore";
import { useApiBooks } from "../../hooks/useApiBooks";

const { Panel } = Collapse;

const SECTION_ICONS = {
    categories: <TagOutlined className="text-indigo-400 mr-1.5" />,
    authors: <UserOutlined className="text-indigo-400 mr-1.5" />,
    ratings: <StarOutlined className="text-indigo-400 mr-1.5" />,
    priceRanges: <DollarOutlined className="text-indigo-400 mr-1.5" />,
};

export default function FilterDrawer({ onFiltersChange }) {
    const [open, setOpen] = useState(false);

    // búsquedas internas
    const [categorySearch, setCategorySearch] = useState("");
    const [authorSearch, setAuthorSearch] = useState("");
    const { fetchBooks } = useApiBooks();

    // mostrar más
    const [showAllCategories, setShowAllCategories] = useState(false);
    const [showAllAuthors, setShowAllAuthors] = useState(false);

    const { facets, setAdvancedFilters, searchBooks } = useBooksStore();

    const [selected, setSelected] = useState({
        categories: [],
        authors: [],
        ratings: [],
        priceRanges: [],
    });

    useEffect(() => {
        onFiltersChange?.(selected);
    }, [selected]);

    const toggle = (group, key) => {
        setSelected((prev) => {
            const arr = prev[group];
            return {
                ...prev,
                [group]: arr.includes(key)
                    ? arr.filter((k) => k !== key)
                    : [...arr, key],
            };
        });
    };

    const clearAll = () => {
        setSelected({ categories: [], authors: [], ratings: [], priceRanges: [] });
        setCategorySearch("");
        setAuthorSearch("");
    };

    const totalActive = Object.values(selected).flat().length;

    // ── Filtrado + paginado ──────────────────────────────────────────────────
    const filteredCategories = facets.categories.filter(({ key }) =>
        key.toLowerCase().includes(categorySearch.toLowerCase())
    );
    const filteredAuthors = facets.authors.filter(({ key }) =>
        key.toLowerCase().includes(authorSearch.toLowerCase())
    );

    // Solo mostramos "ver más" cuando NO hay búsqueda activa
    const visibleCategories = (categorySearch || showAllCategories)
        ? filteredCategories
        : filteredCategories.slice(0, 8);

    const visibleAuthors = (authorSearch || showAllAuthors)
        ? filteredAuthors
        : filteredAuthors.slice(0, 6);

    // ── Item checkbox ────────────────────────────────────────────────────────
    const renderCheckItem = (group, { key, count }) => {
        const isChecked = selected[group].includes(key);
        return (
            <div
                key={key}
                onClick={() => toggle(group, key)}
                className={`
                    flex items-center justify-between
                    px-2 py-1 rounded-md cursor-pointer
                    transition-all duration-150
                    ${isChecked
                        ? "bg-indigo-50 border border-indigo-200"
                        : "hover:bg-slate-50 border border-transparent"
                    }
                `}
            >
                <Space size={6} align="center">
                    <Checkbox
                        checked={isChecked}
                        onChange={() => toggle(group, key)}
                        onClick={(e) => e.stopPropagation()}
                    />
                    {group === "ratings" ? (
                        <Rate
                            disabled
                            value={parseInt(key)}
                            style={{ fontSize: 11, color: "#f59e0b" }}
                        />
                    ) : (
                        <span className="text-xs text-slate-600 select-none leading-none">
                            {key}
                        </span>
                    )}
                </Space>
                <span
                    className={`
                        text-[10px] font-semibold px-1.5 py-0.5 rounded-full leading-none
                        ${isChecked
                            ? "bg-indigo-200 text-indigo-700"
                            : "bg-slate-100 text-slate-400"
                        }
                    `}
                >
                    {count}
                </span>
            </div>
        );
    };

    const renderSearchBox = (value, onChange, placeholder) => (
        <Input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            prefix={<SearchOutlined className="text-slate-300" style={{ fontSize: 11 }} />}
            allowClear
            size="small"
            className="!rounded-lg !text-xs !mb-2"
            style={{ fontSize: 11 }}
            onClick={(e) => e.stopPropagation()}
        />
    );

    const noResults = (
        <p className="text-[10px] text-slate-400 text-center py-1 italic">
            No results found
        </p>
    );

    // ── Header del drawer ─────────────────────────────────────────────────────
    const drawerTitle = (
        <div className="flex flex-col">
            <span className="text-white font-extrabold text-base leading-tight">
                Filter Books
            </span>
            <span className="text-indigo-100 text-xs mt-0.5">
                {totalActive > 0
                    ? `${totalActive} active filter${totalActive > 1 ? "s" : ""}`
                    : "Refine your search"}
            </span>
        </div>
    );

    const searchResult = () => {
        setOpen(false);
        setAdvancedFilters(selected);
        searchBooks(fetchBooks);

    }

    return (
        <>
            {/* ── Botón abrir ── */}
            <Badge count={totalActive} color="#6366f1" size="small" offset={[-4, 4]}>
                <Button
                    icon={<FilterOutlined />}
                    onClick={() => setOpen(true)}
                    className="
                        !bg-gradient-to-r !from-indigo-500 !to-indigo-400
                        !text-white !font-bold !border-0 !rounded-xl
                        !h-10 !px-5
                        hover:!opacity-90 !transition-opacity
                        !shadow-lg !shadow-indigo-300
                    "
                >
                    Filters
                </Button>
            </Badge>

            {/* ── Drawer ── */}
            <Drawer
                title={drawerTitle}
                placement="left"
                onClose={() => setOpen(false)}
                open={open}
                size={300}
                styles={{
                    header: {
                        background: "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)",
                        borderBottom: "none",
                        padding: "12px 16px",
                    },
                    body: { padding: "8px 12px", overflowY: "auto" },
                    footer: {
                        padding: "10px 12px",
                        borderTop: "1px solid #e2e8f0",
                        background: "#fafafa",
                    },
                    mask: { backdropFilter: "blur(4px)" },
                }}
                footer={
                    <div className="flex gap-2 w-full">
                        <Tooltip title={totalActive === 0 ? "No active filters" : ""}>
                            <Button
                                icon={<ClearOutlined />}
                                onClick={clearAll}
                                disabled={totalActive === 0}
                                size="small"
                                className="flex-1 !rounded-lg !font-semibold !text-xs !border-slate-200 !text-slate-600 hover:!border-indigo-300 hover:!text-indigo-500"
                            >
                                Clear
                            </Button>
                        </Tooltip>
                        <Button
                            icon={<CheckOutlined />}
                            onClick={() => searchResult()}
                            size="small"
                            className="flex-[2] !rounded-lg !font-bold !border-0 !text-xs !bg-gradient-to-r !from-indigo-500 !to-indigo-400 !text-white !shadow-md !shadow-indigo-200 hover:!opacity-90"
                        >
                            Results
                        </Button>
                    </div>
                }
            >

                {totalActive > 0 && (
                    <div className="mb-2">
                        <p className="text-[10px] text-slate-400 font-semibold tracking-widest uppercase mb-1.5">
                            Active
                        </p>
                        <div className="flex flex-wrap gap-1">
                            {Object.entries(selected).flatMap(([group, keys]) =>
                                keys.map((key) => (
                                    <Tag
                                        key={`${group}-${key}`}
                                        closable
                                        onClose={() => toggle(group, key)}
                                        className="!bg-indigo-50 !border-indigo-200 !text-indigo-600 !rounded-md !text-[10px] !font-semibold !m-0"
                                    >
                                        {group === "ratings" ? "★".repeat(parseInt(key)) : key}
                                    </Tag>
                                ))
                            )}
                        </div>
                        <Divider className="!my-2" />
                    </div>
                )}

                {/* Secciones */}
                <Collapse
                    defaultActiveKey={["categories", "authors", "ratings", "priceRanges"]}
                    ghost
                    expandIconPlacement="end"
                    size="small"
                    style={{ fontSize: 12 }}
                >
                    {/* ── Categories ── */}
                    <Panel
                        key="categories"
                        header={
                            <span className="font-bold text-slate-700 text-xs">
                                {SECTION_ICONS.categories} Categories
                            </span>
                        }
                    >
                        {renderSearchBox(categorySearch, setCategorySearch, "Search category...")}
                        <div className="flex flex-col gap-0.5">
                            {visibleCategories.length > 0
                                ? visibleCategories.map((item) => renderCheckItem("categories", item))
                                : noResults
                            }
                        </div>
                        {/* Ver más solo si no hay búsqueda activa */}
                        {!categorySearch && filteredCategories.length > 8 && (
                            <button
                                onClick={() => setShowAllCategories(!showAllCategories)}
                                className="text-indigo-500 text-[10px] font-semibold mt-1 ml-1 hover:text-indigo-700 bg-transparent border-0 cursor-pointer"
                            >
                                {showAllCategories
                                    ? "Show less ↑"
                                    : `Show all (${filteredCategories.length}) ↓`}
                            </button>
                        )}
                    </Panel>

                    {/* ── Authors ── */}
                    <Panel
                        key="authors"
                        header={
                            <span className="font-bold text-slate-700 text-xs">
                                {SECTION_ICONS.authors} Authors
                            </span>
                        }
                    >
                        {renderSearchBox(authorSearch, setAuthorSearch, "Search author...")}
                        <div className="flex flex-col gap-0.5">
                            {visibleAuthors.length > 0
                                ? visibleAuthors.map((item) => renderCheckItem("authors", item))
                                : noResults
                            }
                        </div>
                        {!authorSearch && filteredAuthors.length > 6 && (
                            <button
                                onClick={() => setShowAllAuthors(!showAllAuthors)}
                                className="text-indigo-500 text-[10px] font-semibold mt-1 ml-1 hover:text-indigo-700 bg-transparent border-0 cursor-pointer"
                            >
                                {showAllAuthors
                                    ? "Show less ↑"
                                    : `Show all (${filteredAuthors.length}) ↓`}
                            </button>
                        )}
                    </Panel>

                    {/* ── Rating ── */}
                    <Panel
                        key="ratings"
                        header={
                            <span className="font-bold text-slate-700 text-xs">
                                {SECTION_ICONS.ratings} Rating
                            </span>
                        }
                    >
                        <div className="flex flex-col gap-0.5">
                            {facets.ratings.map((item) => renderCheckItem("ratings", item))}
                        </div>
                    </Panel>

                    {/* ── Price Range ── */}
                    <Panel
                        key="priceRanges"
                        header={
                            <span className="font-bold text-slate-700 text-xs">
                                {SECTION_ICONS.priceRanges} Price Range
                            </span>
                        }
                    >
                        <div className="flex flex-col gap-0.5">
                            {facets.priceRanges.map((item) => renderCheckItem("priceRanges", item))}
                        </div>
                    </Panel>
                </Collapse>
            </Drawer>

        </>
    );
}