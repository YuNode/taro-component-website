webpackJsonp([23],{"71":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),l=a(12),r=_interopRequireDefault(a(0)),c=a(11),i=_interopRequireDefault(a(88));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var u=function(e){function PageInput(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,PageInput);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(PageInput.__proto__||Object.getPrototypeOf(PageInput)).apply(this,arguments));return e.state={"value":""},e.onInput=function(t){e.setState({"value":t.target.value})},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(PageInput,l.Component),n(PageInput,[{"key":"render","value":function render(){return r.default.createElement(c.View,{"className":"container"},r.default.createElement(i.default,{"class":"Input"}),r.default.createElement(c.View,{"className":"page-body"},r.default.createElement(c.View,{"className":"page-section"},r.default.createElement(c.View,{"className":"page-section-title"},r.default.createElement(c.Text,null,"可以自动聚焦的input")),r.default.createElement(c.View,{"className":"page-section-spacing-reset","style":"background:#fff;padding:15px 30px;"},r.default.createElement(c.Input,{"type":"text","placeholder":"将会获取焦点","focus":!0}))),r.default.createElement(c.View,{"className":"page-section"},r.default.createElement(c.View,{"className":"page-section-title"},r.default.createElement(c.Text,null,"控制最大输入长度的input")),r.default.createElement(c.View,{"className":"page-section-spacing-reset","style":"background:#fff;padding:15px 30px;"},r.default.createElement(c.Input,{"type":"text","placeholder":"最大输入长度为10","maxlength":"10"}))),r.default.createElement(c.View,{"className":"page-section"},r.default.createElement(c.View,{"className":"page-section-title"},r.default.createElement(c.Text,null,"实时获取输入值:",this.state.value)),r.default.createElement(c.View,{"className":"page-section-spacing-reset","style":"background:#fff;padding:15px 30px;"},r.default.createElement(c.Input,{"type":"text","placeholder":"输入同步到view中","value":this.state.value,"onInput":this.onInput}))),r.default.createElement(c.View,{"className":"page-section"},r.default.createElement(c.View,{"className":"page-section-title"},r.default.createElement(c.Text,null,"数字输入的input")),r.default.createElement(c.View,{"className":"page-section-spacing-reset","style":"background:#fff;padding:15px 30px;"},r.default.createElement(c.Input,{"type":"number","placeholder":"这是一个数字输入框"}))),r.default.createElement(c.View,{"className":"page-section"},r.default.createElement(c.View,{"className":"page-section-title"},r.default.createElement(c.Text,null,"密码输入的input")),r.default.createElement(c.View,{"className":"page-section-spacing-reset","style":"background:#fff;padding:15px 30px;"},r.default.createElement(c.Input,{"type":"password","password":!0,"placeholder":"这是一个密码输入框"}))),r.default.createElement(c.View,{"className":"page-section"},r.default.createElement(c.View,{"className":"page-section-title"},r.default.createElement(c.Text,null,"带小数点的input")),r.default.createElement(c.View,{"className":"page-section-spacing-reset","style":"background:#fff;padding:15px 30px;"},r.default.createElement(c.Input,{"type":"digit","placeholder":"带小数点的数字键盘"}))),r.default.createElement(c.View,{"className":"page-section"},r.default.createElement(c.View,{"className":"page-section-title"},r.default.createElement(c.Text,null,"身份证输入的input")),r.default.createElement(c.View,{"className":"page-section-spacing-reset","style":"background:#fff;padding:15px 30px;"},r.default.createElement(c.Input,{"type":"idcard","placeholder":"身份证输入键盘"}))),r.default.createElement(c.View,{"className":"page-section"},r.default.createElement(c.View,{"className":"page-section-title"},r.default.createElement(c.Text,null,"控制占位符颜色的input")),r.default.createElement(c.View,{"className":"page-section-spacing-reset","style":"background:#fff;padding:15px 30px;"},r.default.createElement(c.Input,{"type":"text","placeholder":"占位符字体是红色的","placeholderStyle":"color:red"})))))}}]),PageInput}();t.default=u},"88":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),l=a(12),r=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(a(0)),c=a(11);var i=function(e){function Head(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Head),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Head.__proto__||Object.getPrototypeOf(Head)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Head,l.Component),n(Head,[{"key":"render","value":function render(){return r.default.createElement(c.View,{"className":"page-head"},r.default.createElement(c.View,{"className":"page-head-title"},this.props.title),r.default.createElement(c.View,{"className":"page-head-line"}),this.props.desc&&r.default.createElement(c.View,{"className":"page-head-desc"},this.props.desc))}}]),Head}();t.default=i}});