import { c as createCommonjsModule, a as commonjsGlobal, g as getDefaultExportFromCjs } from '../common/_commonjsHelpers-8c19dec8.js';
import { p as paginationUtils, l as listSuper, o as orderUtils, f as filterUtils } from '../common/list-super-48ae415c.js';
import { r as react } from '../common/index-04edb6a1.js';

var pagination = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(react);

const Pagination = ({ PaginationUnit, PaginationWrapper }) => (props) => {
    const { n, nPerPage, idx, onClick } = props;
    if (n === 0) {
        return null;
    }
    const { nPage } = paginationUtils.getPagination(n, nPerPage);
    const units = paginationUtils.getPageTiles(idx, nPage).map((i) => {
        if (i < 0) {
            return (react_1.default.createElement(PaginationUnit, { key: i, isDisabled: true }, "..."));
        }
        return (react_1.default.createElement(PaginationUnit, { key: i, isActive: i === idx, onClick: () => onClick(i) }, i));
    });
    return (react_1.default.createElement(PaginationWrapper, null,
        react_1.default.createElement(PaginationUnit, { isDisabled: idx === 1, onClick: () => onClick(idx - 1) }, "\u00AB"),
        units,
        react_1.default.createElement(PaginationUnit, { isDisabled: idx === nPage, onClick: () => onClick(idx + 1) }, "\u00BB")));
};
exports.default = Pagination;
});

var async = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
});

var config = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
});

var definition = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
});

var filter = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
});

var types = createCommonjsModule(function (module, exports) {
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
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(async, exports);
__exportStar(config, exports);
__exportStar(definition, exports);
__exportStar(filter, exports);
});

var uiType = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
});

var dist = createCommonjsModule(function (module, exports) {
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
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSuper = exports.PaginationSuper = void 0;
const list_super_1 = __importDefault(listSuper);
exports.ListSuper = list_super_1.default;
const pagination_1 = __importDefault(pagination);
exports.PaginationSuper = pagination_1.default;
exports.OrderUtils = __importStar(orderUtils);
exports.PaginationUtils = __importStar(paginationUtils);
exports.FilterUtils = __importStar(filterUtils);
exports.Types = __importStar(types);
exports.UITypes = __importStar(uiType);
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(dist);

var FilterUtils = dist.FilterUtils;
var ListSuper = dist.ListSuper;
var OrderUtils = dist.OrderUtils;
var PaginationSuper = dist.PaginationSuper;
var PaginationUtils = dist.PaginationUtils;
var Types = dist.Types;
var UITypes = dist.UITypes;
export default __pika_web_default_export_for_treeshaking__;
export { FilterUtils, ListSuper, OrderUtils, PaginationSuper, PaginationUtils, Types, UITypes, dist as __moduleExports };
