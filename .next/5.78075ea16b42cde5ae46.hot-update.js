webpackHotUpdate(5,{

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(30);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(31);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(55);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(59);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(557);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(27);

var _react2 = _interopRequireDefault(_react);

var _responsive = __webpack_require__(558);

var _gradient = __webpack_require__(563);

var _Chart = __webpack_require__(575);

var _Chart2 = _interopRequireDefault(_Chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sprazzeus/Code/vx-btc-chart-tutorial/pages/bitcoin.js?entry';


var Background = function Background(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return _react2.default.createElement('svg', {
    width: width,
    height: height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_gradient.LinearGradient, { id: 'fill', vertical: false, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('stop', { stopColor: '#a943e4', offset: '0%', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('stop', { stopColor: '#f55989', offset: '50%', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement('stop', { stopColor: '#ffaf84', offset: '100%', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  })), _react2.default.createElement('rect', { width: width, height: height, fill: 'url(#fill)', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }));
};

var App = function (_React$Component) {
  (0, _inherits3.default)(App, _React$Component);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

    _this.state = {
      data: {}
    };
    return _this;
  }

  (0, _createClass3.default)(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch('https://api.coindesk.com/v1/bpi/historical/close.json').then(function (res) {
        return res.json();
      }).then(function (json) {
        _this2.setState({
          data: json
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          screenWidth = _props.screenWidth,
          screenHeight = _props.screenHeight;
      var data = this.state.data;

      return _react2.default.createElement('div', { className: 'app', 'data-jsx': 865300195,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(Background, { width: screenWidth, height: screenHeight, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement('div', { className: 'center', 'data-jsx': 865300195,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement('div', { className: 'chart', 'data-jsx': 865300195,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('div', { className: 'title', 'data-jsx': 865300195,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, 'Bitcoin Price'), _react2.default.createElement('div', { className: 'chart-container', 'data-jsx': 865300195,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_Chart2.default, { data: data, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }))), _react2.default.createElement('p', { className: 'disclaimer', 'data-jsx': 865300195,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, data.disclaimer)), _react2.default.createElement(_style2.default, {
        styleId: 865300195,
        css: '.app[data-jsx="865300195"],.center[data-jsx="865300195"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;right:0;bottom:0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:Arial;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.title[data-jsx="865300195"]{padding:15px}.chart-container[data-jsx="865300195"]{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.chart[data-jsx="865300195"]{width:600px;height:400px;background-color:#27273f;border-radius:8px;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.disclaimer[data-jsx="865300195"]{color:white;opacity:0.4;font-size:11px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2JpdGNvaW4uanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURvQixBQUcwQixBQVlBLEFBR04sQUFJSyxBQVNBLFlBUkMsQUFTRCxDQWhCZCxXQWlCaUIsQ0FUVSxRQUxaLE1BZWYsV0FUb0Isa0JBQ04sTUF0Qk0sTUF1QkwsWUF0QlAsTUFDQyxPQUNDLEVBYVYsTUFaVyxTQUNjLGdDQW1CRCxtRUFsQkgsV0FtQnJCLGtGQWxCb0Isa0JBQ0ksOEVBQ3hCIiwiZmlsZSI6InBhZ2VzL2JpdGNvaW4uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NwcmF6emV1cy9Db2RlL3Z4LWJ0Yy1jaGFydC10dXRvcmlhbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhTY3JlZW5TaXplIH0gZnJvbSAnQHZ4L3Jlc3BvbnNpdmUnXG5pbXBvcnQgeyBMaW5lYXJHcmFkaWVudCB9IGZyb20gJ0B2eC9ncmFkaWVudCdcbmltcG9ydCBDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL0NoYXJ0J1xuXG5jb25zdCBCYWNrZ3JvdW5kID0gKHsgd2lkdGgsIGhlaWdodCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgPlxuICAgICAgPExpbmVhckdyYWRpZW50IGlkPVwiZmlsbFwiIHZlcnRpY2FsPXtmYWxzZX0+XG4gICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNhOTQzZTRcIiBvZmZzZXQ9XCIwJVwiIC8+XG4gICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNmNTU5ODlcIiBvZmZzZXQ9XCI1MCVcIiAvPlxuICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjZmZhZjg0XCIgb2Zmc2V0PVwiMTAwJVwiIC8+XG4gICAgICA8L0xpbmVhckdyYWRpZW50PlxuICAgICAgPHJlY3Qgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZmlsbD1cInVybCgjZmlsbClcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIgKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiB7fVxuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgZmV0Y2goJ2h0dHBzOi8vYXBpLmNvaW5kZXNrLmNvbS92MS9icGkvaGlzdG9yaWNhbC9jbG9zZS5qc29uJylcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkYXRhOiBqc29uXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHNjcmVlbldpZHRoLCBzY3JlZW5IZWlnaHQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgICAgPEJhY2tncm91bmQgd2lkdGg9e3NjcmVlbldpZHRofSBoZWlnaHQ9e3NjcmVlbkhlaWdodH0vPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgQml0Y29pbiBQcmljZVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8Q2hhcnQgZGF0YT17ZGF0YX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc2NsYWltZXJcIj5cbiAgICAgICAgICAgIHtkYXRhLmRpc2NsYWltZXJ9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5hcHAsIC5jZW50ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2hhcnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2hhcnQge1xuICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3M2Y7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRpc2NsYWltZXIge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTY3JlZW5TaXplKEFwcClcbiJdfQ== */\n/*@ sourceURL=pages/bitcoin.js?entry */'
      }));
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = (0, _responsive.withScreenSize)(App);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2JpdGNvaW4uanMiXSwibmFtZXMiOlsid2l0aFNjcmVlblNpemUiLCJMaW5lYXJHcmFkaWVudCIsIkNoYXJ0IiwiQmFja2dyb3VuZCIsIndpZHRoIiwiaGVpZ2h0IiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwic2V0U3RhdGUiLCJzY3JlZW5XaWR0aCIsInNjcmVlbkhlaWdodCIsImRpc2NsYWltZXIiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLGFBQWEsU0FBYixBQUFhLGlCQUF1QjtNQUFwQixBQUFvQixhQUFwQixBQUFvQjtNQUFiLEFBQWEsY0FBYixBQUFhLEFBQ3hDOzt5QkFDRSxjQUFBO1dBQUEsQUFDUyxBQUNQO1lBRkYsQUFFVTs7Z0JBRlY7a0JBQUEsQUFJRTtBQUpGO0FBQ0UsR0FERixrQkFJRSxBQUFDLDBDQUFlLElBQWhCLEFBQW1CLFFBQU8sVUFBMUIsQUFBb0M7Z0JBQXBDO2tCQUFBLEFBQ0U7QUFERjs2Q0FDUSxXQUFOLEFBQWdCLFdBQVUsUUFBMUIsQUFBaUM7Z0JBQWpDO2tCQURGLEFBQ0UsQUFDQTtBQURBOzhDQUNNLFdBQU4sQUFBZ0IsV0FBVSxRQUExQixBQUFpQztnQkFBakM7a0JBRkYsQUFFRSxBQUNBO0FBREE7OENBQ00sV0FBTixBQUFnQixXQUFVLFFBQTFCLEFBQWlDO2dCQUFqQztrQkFQSixBQUlFLEFBR0UsQUFFRjtBQUZFOytDQUVJLE9BQU4sQUFBYSxPQUFPLFFBQXBCLEFBQTRCLFFBQVEsTUFBcEMsQUFBeUM7Z0JBQXpDO2tCQVZKLEFBQ0UsQUFTRSxBQUdMO0FBSEs7O0FBWE47O0ksQUFnQk07K0JBQ0o7O2VBQUEsQUFBYSxPQUFPO3dDQUFBOztnSUFBQSxBQUNYLEFBQ1A7O1VBQUEsQUFBSztZQUZhLEFBRWxCLEFBQWEsQUFDTDtBQURLLEFBQ1g7V0FFSDs7Ozs7d0NBQ29CO21CQUNuQjs7WUFBQSxBQUFNLHlEQUFOLEFBQ0MsS0FBSyxlQUFBO2VBQU8sSUFBUCxBQUFPLEFBQUk7QUFEakIsU0FBQSxBQUVDLEtBQUssZ0JBQVEsQUFDWjtlQUFBLEFBQUs7Z0JBQUwsQUFBYyxBQUNOLEFBRVQ7QUFIZSxBQUNaO0FBSkosQUFPRDs7Ozs2QkFDUzttQkFDOEIsS0FEOUIsQUFDbUM7VUFEbkMsQUFDQSxxQkFEQSxBQUNBO1VBREEsQUFDYSxzQkFEYixBQUNhO1VBRGIsQUFFQSxPQUFTLEtBRlQsQUFFYyxNQUZkLEFBRUEsQUFDUjs7NkJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZSxtQkFBZjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO09BQUEsZ0NBQ0UsQUFBQyxjQUFXLE9BQVosQUFBbUIsYUFBYSxRQUFoQyxBQUF3QztvQkFBeEM7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsY0FBQSxTQUFLLFdBQUwsQUFBZSxzQkFBZjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWUscUJBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlLHFCQUFmOztvQkFBQTtzQkFBQTtBQUFBO1NBREYsQUFDRSxBQUdBLGtDQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWUsK0JBQWY7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLGlDQUFNLE1BQVAsQUFBYTtvQkFBYjtzQkFOTixBQUNFLEFBSUUsQUFDRSxBQUdKO0FBSEk7NEJBR0osY0FBQSxPQUFHLFdBQUgsQUFBYSwwQkFBYjs7b0JBQUE7c0JBQUEsQUFDRztBQURIO2NBWEosQUFFRSxBQVNFLEFBQ1E7aUJBWlo7YUFERixBQUNFLEFBb0RIO0FBcERHOzs7OztFQXBCWSxnQixBQUFNLEFBMkV4Qjs7a0JBQWUsZ0NBQWYsQUFBZSxBQUFlIiwiZmlsZSI6ImJpdGNvaW4uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NwcmF6emV1cy9Db2RlL3Z4LWJ0Yy1jaGFydC10dXRvcmlhbCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/sprazzeus/Code/vx-btc-chart-tutorial/pages/bitcoin.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/sprazzeus/Code/vx-btc-chart-tutorial/pages/bitcoin.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(109)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/bitcoin")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS43ODA3NWVhMTZiNDJjZGU1YWU0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYml0Y29pbi5qcz8zYmY4YzEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhTY3JlZW5TaXplIH0gZnJvbSAnQHZ4L3Jlc3BvbnNpdmUnXG5pbXBvcnQgeyBMaW5lYXJHcmFkaWVudCB9IGZyb20gJ0B2eC9ncmFkaWVudCdcbmltcG9ydCBDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL0NoYXJ0J1xuXG5jb25zdCBCYWNrZ3JvdW5kID0gKHsgd2lkdGgsIGhlaWdodCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgPlxuICAgICAgPExpbmVhckdyYWRpZW50IGlkPVwiZmlsbFwiIHZlcnRpY2FsPXtmYWxzZX0+XG4gICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNhOTQzZTRcIiBvZmZzZXQ9XCIwJVwiIC8+XG4gICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNmNTU5ODlcIiBvZmZzZXQ9XCI1MCVcIiAvPlxuICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjZmZhZjg0XCIgb2Zmc2V0PVwiMTAwJVwiIC8+XG4gICAgICA8L0xpbmVhckdyYWRpZW50PlxuICAgICAgPHJlY3Qgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZmlsbD1cInVybCgjZmlsbClcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIgKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiB7fVxuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgZmV0Y2goJ2h0dHBzOi8vYXBpLmNvaW5kZXNrLmNvbS92MS9icGkvaGlzdG9yaWNhbC9jbG9zZS5qc29uJylcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkYXRhOiBqc29uXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHNjcmVlbldpZHRoLCBzY3JlZW5IZWlnaHQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgICAgPEJhY2tncm91bmQgd2lkdGg9e3NjcmVlbldpZHRofSBoZWlnaHQ9e3NjcmVlbkhlaWdodH0vPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgQml0Y29pbiBQcmljZVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8Q2hhcnQgZGF0YT17ZGF0YX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc2NsYWltZXJcIj5cbiAgICAgICAgICAgIHtkYXRhLmRpc2NsYWltZXJ9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5hcHAsIC5jZW50ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2hhcnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2hhcnQge1xuICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3M2Y7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRpc2NsYWltZXIge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTY3JlZW5TaXplKEFwcClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2JpdGNvaW4uanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBR0E7QUFIQTs7QUFYQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUdBO0FBR0E7QUFGQTtBQUdBOzs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBWkE7QUFvREE7QUFwREE7Ozs7O0FBcEJBO0FBQ0E7QUEwRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==