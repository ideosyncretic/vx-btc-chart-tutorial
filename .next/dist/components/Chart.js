"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _responsive = require("@vx/responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/sprazzeus/Code/vx-btc-chart-tutorial/components/Chart.js";


function Chart(_ref) {
  var parentWidth = _ref.parentWidth,
      parentHeight = _ref.parentHeight;

  var margin = {
    top: 15,
    bottom: 40,
    left: 0,
    right: 0
  };
  var width = parentWidth - margin.left - margin.right;
  var height = parentHeight - margin.top - margin.bottom;
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement("svg", { width: width, height: height, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement("rect", {
    width: width,
    height: height,
    fill: "steelblue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  })));
}

exports.default = (0, _responsive.withParentSize)(Chart);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hhcnQuanMiXSwibmFtZXMiOlsid2l0aFBhcmVudFNpemUiLCJDaGFydCIsInBhcmVudFdpZHRoIiwicGFyZW50SGVpZ2h0IiwibWFyZ2luIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFTOzs7Ozs7O0FBRVQsU0FBQSxBQUFTLFlBQXFDO01BQTdCLEFBQTZCLG1CQUE3QixBQUE2QjtNQUFoQixBQUFnQixvQkFBaEIsQUFBZ0IsQUFDNUM7O01BQU07U0FBUyxBQUNSLEFBQ0w7WUFGYSxBQUVMLEFBQ1I7VUFIYSxBQUdQLEFBQ047V0FKRixBQUFlLEFBSU4sQUFFVDtBQU5lLEFBQ2I7TUFLSSxRQUFRLGNBQWMsT0FBZCxBQUFxQixPQUFPLE9BQTFDLEFBQWlELEFBQ2pEO01BQU0sU0FBUyxlQUFlLE9BQWYsQUFBc0IsTUFBTSxPQUEzQyxBQUFrRCxBQUNsRDt5QkFDRSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUEsU0FBSyxPQUFMLEFBQVksT0FBTyxRQUFuQixBQUEyQjtnQkFBM0I7a0JBQUEsQUFDRTtBQURGOztXQUNFLEFBQ1MsQUFDUDtZQUZGLEFBRVUsQUFDUjtVQUhGLEFBR087O2dCQUhQO2tCQUhOLEFBQ0UsQUFDRSxBQUNFLEFBUVA7QUFSTztBQUNFO0FBU1Y7O2tCQUFlLGdDQUFmLEFBQWUsQUFBZSIsImZpbGUiOiJDaGFydC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc3ByYXp6ZXVzL0NvZGUvdngtYnRjLWNoYXJ0LXR1dG9yaWFsIn0=