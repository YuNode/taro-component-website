(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"109":function(e,t,a){},"76":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}();a(109);var r=a(12),l=_interopRequireDefault(a(0)),o=a(13),i=_interopRequireDefault(a(89));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var c=function(e){function PageRadio(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,PageRadio);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(PageRadio.__proto__||Object.getPrototypeOf(PageRadio)).apply(this,arguments));return e.state={"isChecked":!1,"selectValue":"中国","list":[{"value":"美国","text":"美国","checked":!1},{"value":"中国","text":"中国","checked":!0},{"value":"巴西","text":"巴西","checked":!1},{"value":"日本","text":"日本","checked":!1},{"value":"英国","text":"英国","checked":!1},{"value":"法国","text":"法国","checked":!1}]},e.radioChange=function(t){var a=e.state.list.map(function(e){return e.checked=e.value==t.detail.value,e});e.setState({"list":a,"selectValue":t.detail.value})},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(PageRadio,r.Component),n(PageRadio,[{"key":"render","value":function render(){return l.default.createElement(o.View,{"className":"container"},l.default.createElement(i.default,{"title":"Radio"}),l.default.createElement(o.View,{"className":"page-body"},l.default.createElement(o.View,{"className":"page-section"},l.default.createElement(o.View,{"className":"page-section-title"},l.default.createElement(o.Text,null,"默认样式")),l.default.createElement(o.View,{"className":"page-section-spacing-reset"},l.default.createElement(o.Radio,{"value":"选中","checked":!0},"选中"),l.default.createElement(o.Radio,{"style":"margin-left: 50px","value":"未选中"},"未选中"),l.default.createElement(o.Radio,{"style":"margin-left: 50px","checked":this.state.isChecked,"onChange":this.handleChange},"数据绑定"))),l.default.createElement(o.View,{"className":"page-section"},l.default.createElement(o.View,{"className":"page-section-title"},l.default.createElement(o.Text,null,"推荐展示样式")),l.default.createElement(o.View,{"className":"select-box"},"选中的值是: ",this.state.selectValue),l.default.createElement(o.View,null,l.default.createElement(o.View,{"className":"radio-list"},l.default.createElement(o.RadioGroup,{"onChange":this.radioChange},this.state.list.map(function(e,t){return l.default.createElement(o.Label,{"className":"radio-list__label","for":t,"key":t},l.default.createElement(o.Radio,{"name":"radio","value":e.value,"checked":e.checked},e.text))})))))))}}]),PageRadio}();t.default=c},"89":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),r=a(12),l=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(a(0)),o=a(13);var i=function(e){function Head(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Head),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Head.__proto__||Object.getPrototypeOf(Head)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Head,r.Component),n(Head,[{"key":"render","value":function render(){return l.default.createElement(o.View,{"className":"page-head"},l.default.createElement(o.View,{"className":"page-head-title"},this.props.title),l.default.createElement(o.View,{"className":"page-head-line"}),this.props.desc&&l.default.createElement(o.View,{"className":"page-head-desc"},this.props.desc))}}]),Head}();t.default=i}}]);