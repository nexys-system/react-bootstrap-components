import { c as createCommonjsModule, a as commonjsGlobal, g as getDefaultExportFromCjs } from './_commonjsHelpers-8c19dec8.js';
import { r as react } from './index-04edb6a1.js';

var orderUtils = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSort = exports.order = exports.getAttribute = void 0;
exports.getAttribute = (attribute, a) => {
    const ac = String(a[attribute]);
    if (typeof ac === 'number' && typeof ac === 'boolean') {
        return ac;
    }
    return String(ac).toLocaleLowerCase();
};
const getCompareAttributes = (a, b, attributeOrFunc) => {
    if (typeof attributeOrFunc === 'function') {
        const ac = attributeOrFunc(a);
        const bc = attributeOrFunc(b);
        return { ac, bc };
    }
    const ac = exports.getAttribute(attributeOrFunc, a);
    const bc = exports.getAttribute(attributeOrFunc, b);
    return { ac, bc };
};
const compareFunc = (a, b, attributeOrFunc) => {
    const { ac, bc } = getCompareAttributes(a, b, attributeOrFunc);
    if (ac < bc) {
        return -1;
    }
    if (ac > bc) {
        return 1;
    }
    return 0;
};
exports.order = (data, sortAttribute, sortDescAsc) => {
    if (!sortAttribute) {
        return data;
    }
    const ordered = data.sort((a, b) => compareFunc(a, b, sortAttribute));
    if (sortDescAsc === false) {
        return ordered.reverse();
    }
    return ordered;
};
exports.getSort = (def, sortAttribute) => {
    const i = def.find(x => x.name === sortAttribute);
    if (!i || !i.sort) {
        throw Error('sort attribute could not be matched');
    }
    if (typeof i.sort === 'object' && 'getAttribute' in i.sort) {
        return i.sort.getAttribute;
    }
    return sortAttribute;
};
});

var filterUtils = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = exports.transformFilterPropToStateFilter = exports.getFilterObj = exports.updateFilters = exports.addRemoveToArray = exports.applyFilter = exports.searchInObjectLinear = exports.searchInObject = exports.compare = exports.toFilterArray = exports.compareString = void 0;
exports.compareString = (main, searchString) => main.toLowerCase().indexOf(searchString.toLowerCase()) > -1;
exports.toFilterArray = (filters) => Object.entries(filters).map(([k, v]) => ({
    name: k,
    value: v
}));
// above is generalization of
// const filterArray:FilterUnit<Animal>[] = Object.entries(filters).map(([k, v]) => ({name: k as keyof Animal, value: v as FilterSearchValue}))
exports.compare = (main, search //| Search,
) => {
    const mainType = typeof main;
    const searchType = typeof search;
    if (searchType === 'string') {
        // here casting the `main` so that it can match with the search even if not of the same type
        switch (mainType) {
            case 'string':
                return exports.compareString(main, search);
            case 'number':
                return main === Number(search);
            default:
                return false;
        }
    }
    return false;
};
// this is a hack that will work for nested objects... leaving like this until better option
exports.searchInObject = (searchString, object) => JSON.stringify(object).toLowerCase().includes(searchString.toLowerCase());
// same as above but only works with linear object, the rsult will be more precise though
exports.searchInObjectLinear = (searchString, object) => Object.keys(object)
    .map(o => {
    const main = object[o];
    return exports.compare(main, searchString);
})
    .reduce((a, b) => a || b);
// todo here unfortunately `k` cant be typed as keyof A, typescript bug/limitation?
exports.applyFilter = (data, filters) => {
    const filterArray = exports.toFilterArray(filters);
    if (filterArray.length === 0) {
        return data;
    }
    return data.filter((d) => {
        return filterArray
            .map(f => {
            if (f.name === 'globalSearch' && typeof f.value === 'string') {
                return exports.searchInObject(f.value, d);
            }
            if (f.name !== 'globalSearch') {
                const key = f.name;
                if (typeof f.value === 'object') {
                    if (typeof f.value.func === 'function' && f.value.value) {
                        if (Array.isArray(f.value.value) && f.value.value.length > 0) {
                            return f.value.func(d, f.value.value, filters);
                        }
                        else {
                            return f.value.func(d, f.value.value.value, filters);
                        }
                    }
                    return true;
                }
                return exports.compare(d[key], f.value);
            }
            return true;
        })
            .reduce((a, b) => a && b);
    });
};
exports.addRemoveToArray = (v, a = []) => {
    if (!a) {
        return [v];
    }
    if (a.includes(v)) {
        const idx = a.indexOf(v);
        a.splice(idx, 1);
        return a;
    }
    a.push(v);
    return a;
};
exports.updateFilters = (filters, v) => {
    if (v.value === null || v.value === '') {
        delete filters[v.name];
    }
    else {
        // if object
        if (typeof v.value !== 'string') {
            if (v.type === 'category') {
                if (!filters[v.name]) {
                    filters[v.name] = { value: [], func: v.value.func };
                }
                filters[v.name].value = exports.addRemoveToArray(v.value.value, filters[v.name].value);
                if (filters[v.name].value.length === 0) {
                    delete filters[v.name];
                }
            }
            else {
                if (!filters[v.name]) {
                    filters[v.name] = { value: null, func: v.value.func };
                }
                filters[v.name].value = v.value;
            }
        }
        else {
            // if string
            filters[v.name] = v.value;
        }
    }
    // setState({ ...state, filters, pageIdx });
    return filters;
};
exports.getFilterObj = (def, filterAttribute) => {
    const i = def.find(x => x.name === filterAttribute);
    if (!i || !i.filter) {
        throw Error('filter attribute could not be matched');
    }
    if (typeof i.filter === 'object' && 'func' in i.filter) {
        return {
            type: i.filter.type,
            func: i.filter.func
        };
    }
    return filterAttribute;
};
exports.transformFilterPropToStateFilter = (def, filters) => {
    return Object.entries(filters)
        .map(([key, value]) => {
        const filterObj = exports.getFilterObj(def, key);
        return {
            key,
            value,
            filterObj
        };
    })
        .reduce((acc, cur) => {
        const { key } = cur;
        let filter;
        if (typeof cur.filterObj.func === 'function') {
            filter = {
                value: cur.filterObj.type === 'select'
                    ? { value: cur.value }
                    : cur.value,
                func: cur.filterObj.func
            };
        }
        else {
            filter = cur.value;
        }
        acc[key] = filter;
        return acc;
    }, {});
};
exports.debounce = (wait = 200) => {
    let timeout; //NodeJS.Timeout
    return (func) => {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    };
};
});

var paginationUtils = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.withPagination = exports.paginationBoundaries = exports.getPageTiles = exports.getPagination = exports.getNPage = void 0;
/**
 * get the number of pages
 * @param  {[type]} n        total number of rows
 * @param  {[type]} nPerPage number of rows per page
 * @return {[type]}          number of pages
 */
exports.getNPage = (n, nPerPage) => {
    return Math.ceil(n / nPerPage);
};
exports.getPagination = (n, nPerPageIn) => {
    const nPerPage = nPerPageIn || 10;
    const nPage = exports.getNPage(n, nPerPage);
    const idx = 1;
    return {
        idx,
        nPerPage,
        nPage
    };
};
/**
 * get list of page based on the index (-i means that there's a gap - we do not use null so that it can than be used as an index)
 * @param  {[type]} idx   the page on which the user id
 * @param  {[type]} nPage the total amount of pages
 * @return {[type]}       [1, null, idx - 1, idx, idx + 1, null, nPage]
 */
exports.getPageTiles = (idx, nPage) => {
    if (idx < 1) {
        idx = 1;
    }
    if (idx > nPage) {
        idx = nPage;
    }
    const b1 = idx - 1;
    const b2 = idx + 1;
    // init array
    const arr = [idx];
    if (idx > 1) {
        arr.unshift(b1);
    }
    if (idx === nPage && nPage > 3) {
        arr.unshift(b1 - 1);
    }
    if (idx < nPage) {
        arr.push(b2);
    }
    if (idx === 1 && nPage > 3) {
        arr.push(3);
    }
    if (b1 > 2 && nPage > 4) {
        arr.unshift(-1);
    }
    if (b1 > 1) {
        arr.unshift(1);
    }
    if (b2 < nPage - 1 && nPage > 4) {
        arr.push(-2);
    }
    if (b2 < nPage) {
        arr.push(nPage);
    }
    return arr;
};
exports.paginationBoundaries = (idx, nPerPage) => {
    const start = (idx - 1) * nPerPage;
    const end = idx * nPerPage;
    return { start, end };
};
exports.withPagination = (data, idx, nPerPage) => {
    const { start, end } = exports.paginationBoundaries(idx, nPerPage);
    return data.slice(start, end);
};
});

var type = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionType = void 0;
(function (ActionType) {
    ActionType["FETCH_DATA_REQUEST"] = "FETCH_DATA_REQUEST";
    ActionType["FETCH_DATA_SUCCESS"] = "FETCH_DATA_SUCCESS";
    ActionType["FILTER_CHANGE"] = "FILTER_CHANGE";
    ActionType["ORDER_CHANGE"] = "ORDER_CHANGE";
    ActionType["PAGE_CHANGE"] = "PAGE_CHANGE";
})(exports.ActionType || (exports.ActionType = {}));
});

var reducer = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

function listSuperReducer(state, action) {
    if (action.type === type.ActionType.FETCH_DATA_REQUEST) {
        return {
            ...state,
            loading: true
        };
    }
    if (action.type === type.ActionType.FETCH_DATA_SUCCESS) {
        const { data, numberOfTotalRows } = action.payload;
        return {
            ...state,
            loading: false,
            data,
            numberOfTotalRows
        };
    }
    if (action.type === type.ActionType.FILTER_CHANGE) {
        const { filters, pageIdx } = action.payload;
        return {
            ...state,
            filters,
            pageIdx
        };
    }
    if (action.type === type.ActionType.ORDER_CHANGE) {
        const { sortDescAsc, sortAttribute, pageIdx } = action.payload;
        return {
            ...state,
            sortDescAsc,
            sortAttribute,
            pageIdx
        };
    }
    if (action.type === type.ActionType.PAGE_CHANGE) {
        const { pageIdx } = action.payload;
        return {
            ...state,
            pageIdx
        };
    }
    return state;
}
exports.default = listSuperReducer;
});

var state = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
const getInitialState = (def, data, sortAttribute, sortDescAsc, filters) => ({
    data: data ? data : [],
    filters: filters || {},
    loading: false,
    numberOfTotalRows: data && data.length ? data.length : 0,
    sortAttribute,
    sortDescAsc: sortDescAsc !== undefined ? sortDescAsc : true,
    pageIdx: 1
});
exports.default = getInitialState;
});

var listSuperPartials = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInitialState = exports.listSuperReducer = void 0;
const reducer_1 = __importDefault(reducer);
exports.listSuperReducer = reducer_1.default;
const state_1 = __importDefault(state);
exports.getInitialState = state_1.default;
__exportStar(type, exports);
});

var listSuper = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(react);




const ListSuper = ({ HeaderUnit, FilterUnit, OrderController, ColCell, GlobalSearch, NoRow, Row, ListWrapper, ListContainer, ListHeader, ListBody, RecordInfo, Pagination, Loader }) => (props) => {
    const { def, config = {}, asyncData, CustomListContainer, CustomListItem } = props;
    const filtersFromProps = config.filters
        ? filterUtils.transformFilterPropToStateFilter(def, config.filters)
        : undefined;
    const [state, dispatch] = react_1.useReducer(listSuperPartials.listSuperReducer, listSuperPartials.getInitialState(def, props.data, config.sortAttribute, config.sortDescAsc, filtersFromProps));
    const { filters, pageIdx, sortAttribute, sortDescAsc, data, numberOfTotalRows, loading } = state;
    const nPerPage = config.nPerPage || props.nPerPage || 25;
    if (props.nPerPage) {
        console.warn('The use of nPerPage in props is deprecated. Add nPerPage to the config object prop.');
    }
    const fetchData = react_1.useCallback((config) => {
        if (asyncData) {
            dispatch({ type: listSuperPartials.ActionType.FETCH_DATA_REQUEST });
            asyncData({
                nPerPage,
                pageIdx: config && config.pageIdx ? config.pageIdx : pageIdx,
                filters: config && config.filters ? config.filters : filters,
                sort: {
                    attribute: config && config.sortAttribute
                        ? config.sortAttribute
                        : sortAttribute,
                    descAsc: config && typeof config.sortDescAsc !== 'undefined'
                        ? config.sortDescAsc
                        : sortDescAsc
                }
            }).then(res => {
                dispatch({
                    type: listSuperPartials.ActionType.FETCH_DATA_SUCCESS,
                    payload: { data: res.data, numberOfTotalRows: res.meta.n }
                });
            });
        }
    }, [asyncData, filters, nPerPage, pageIdx, sortAttribute, sortDescAsc]);
    react_1.useEffect(() => {
        fetchData();
    }, [asyncData, fetchData]);
    const handleFilterChange = (v) => {
        const newFilters = filterUtils.updateFilters(filters, v);
        // when a filter is applied, the page index is reset
        const pageIdx = 1;
        const config = {
            filters: newFilters,
            pageIdx
        };
        dispatch({
            type: listSuperPartials.ActionType.FILTER_CHANGE,
            payload: config
        });
        fetchData(config);
    };
    const handleFilterReset = (name) => {
        const newFilters = Object.assign({}, filters);
        delete newFilters[name];
        // when a filter is applied, the page index is reset
        const pageIdx = 1;
        const config = {
            filters: newFilters,
            pageIdx
        };
        dispatch({ type: listSuperPartials.ActionType.FILTER_CHANGE, payload: config });
        fetchData(config);
    };
    /**
     * defines order to apply
     * @param  {[type]} name    attribute/column
     * @param  {[type]} descAsc true/false - asc or desc. if null, will toggle
     * @return {[type]}         [description]
     * todo: allow custom ordering
     */
    const setOrder = (name, descAsc = null) => {
        if (descAsc === null) {
            descAsc = !sortDescAsc;
        }
        const config = { sortDescAsc: descAsc, sortAttribute: name, pageIdx: 1 };
        dispatch({
            type: listSuperPartials.ActionType.ORDER_CHANGE,
            payload: config
        });
    };
    const changePage = (pageIdx) => {
        // todo block beyond max page
        if (pageIdx > 0) {
            const config = { pageIdx };
            dispatch({ type: listSuperPartials.ActionType.PAGE_CHANGE, payload: config });
        }
    };
    const isSort = (h) => {
        return ((typeof h.sort === 'boolean' && h.sort === true) ||
            typeof h.sort === 'object');
    };
    const renderHeaders = () => {
        return def.map((h, i) => {
            const order = isSort(h) ? (react_1.default.createElement(OrderController, { descAsc: sortAttribute === h.name ? sortDescAsc : null, onClick: () => setOrder(h.name) })) : null;
            const filter = (react_1.default.createElement(FilterUnit, { key: i, filters: filters, name: h.name, filter: h.filter, onChange: handleFilterChange, onReset: handleFilterReset, debounceWait: config.debounceWait }));
            return (react_1.default.createElement(HeaderUnit, { key: i },
                h.label || '',
                " ",
                order,
                " ",
                filter));
        });
    };
    const renderBody = (data) => (react_1.default.createElement(react_1.default.Fragment, null, data.map((row, i) => (react_1.default.createElement(react_1.default.Fragment, { key: i }, CustomListItem ? (react_1.default.createElement(react_1.default.Fragment, null, CustomListContainer ? (CustomListItem(row)) : (react_1.default.createElement(Row, null,
        react_1.default.createElement(ColCell, { colSpan: def.length, style: {
                paddingLeft: 0,
                paddingRight: 0,
                borderBottom: 0
            } }, CustomListItem(row)))))) : (react_1.default.createElement(Row, null, def.map((h, j) => (react_1.default.createElement(ColCell, { key: j },
        h.render ? h.render(row) : row[h.name],
        ' '))))))))));
    const renderLoader = () => (react_1.default.createElement(Row, null,
        react_1.default.createElement(ColCell, { colSpan: def.length },
            react_1.default.createElement(Loader, null))));
    let fData = [];
    let fpData = [];
    let n = 0;
    if (!asyncData) {
        fData = filterUtils.applyFilter(data, filters);
        n = fData.length;
        fpData = sortAttribute
            ? paginationUtils.withPagination(orderUtils.order(fData, orderUtils.getSort(def, sortAttribute), sortDescAsc), pageIdx, nPerPage)
            : paginationUtils.withPagination(fData, pageIdx, nPerPage);
    }
    else {
        n = numberOfTotalRows;
    }
    const showPagination = typeof config.pagination !== 'undefined' ? config.pagination : true;
    const showRecordInfo = typeof config.recordInfo !== 'undefined' ? config.recordInfo : true;
    return (react_1.default.createElement(ListWrapper, null,
        react_1.default.createElement(GlobalSearch, { search: config.search, onChange: handleFilterChange, filters: filters, debounceWait: config.debounceWait }),
        CustomListContainer ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(ListContainer, null,
                react_1.default.createElement(ListHeader, null,
                    react_1.default.createElement(Row, null, renderHeaders()))),
            CustomListContainer(renderBody(asyncData ? data : fpData)))) : (react_1.default.createElement(ListContainer, { maxHeight: config.maxHeight, stickyHeader: config.stickyHeader },
            react_1.default.createElement(ListHeader, null,
                react_1.default.createElement(Row, null, renderHeaders())),
            react_1.default.createElement(ListBody, null, loading ? renderLoader() : renderBody(asyncData ? data : fpData)))),
        showRecordInfo && (react_1.default.createElement(RecordInfo, { n: n, idx: pageIdx, nPerPage: nPerPage })),
        showPagination && n > nPerPage && (react_1.default.createElement(Pagination, { n: n, nPerPage: nPerPage, idx: pageIdx, onClick: changePage })),
        !loading && react_1.default.createElement(NoRow, { n: n })));
};
exports.default = ListSuper;
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(listSuper);

export { __pika_web_default_export_for_treeshaking__ as _, filterUtils as f, listSuper as l, orderUtils as o, paginationUtils as p };
