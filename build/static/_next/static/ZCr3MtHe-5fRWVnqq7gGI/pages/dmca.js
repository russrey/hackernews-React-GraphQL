(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"/0+H":function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=o(n("q1tI")),i=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,o=t.hybrid,r=void 0!==o&&o,i=t.hasQuery;return n||r&&(void 0!==i&&i)}e.isInAmpMode=a,e.useAmp=function(){return a(r.default.useContext(i.AmpStateContext))}},"/GRZ":function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},"48fX":function(t,e,n){var o=n("qhzo");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},"5fIB":function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},"8Kt/":function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=o(n("q1tI")),i=o(n("Xuae")),a=n("lwAK"),l=n("FYa8"),s=n("/0+H");function c(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function u(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===r.default.Fragment?t.concat(r.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=c;var f=["name","httpEquiv","charSet","itemProp"];function d(t,e){return t.reduce((function(t,e){var n=r.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(u,[]).reverse().concat(c(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,o={};return function(r){var i=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var a=r.key.slice(r.key.indexOf("$")+1);t.has(a)?i=!1:t.add(a)}switch(r.type){case"title":case"base":e.has(r.type)?i=!1:e.add(r.type);break;case"meta":for(var l=0,s=f.length;l<s;l++){var c=f[l];if(r.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?i=!1:n.add(c);else{var u=r.props[c],d=o[c]||new Set;d.has(u)?i=!1:(d.add(u),o[c]=d)}}}return i}}()).reverse().map((function(t,e){var n=t.key||e;return r.default.cloneElement(t,{key:n})}))}var p=i.default();function h(t){var e=t.children;return r.default.createElement(a.AmpStateContext.Consumer,null,(function(t){return r.default.createElement(l.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:s.isInAmpMode(t)},e)}))}))}h.rewind=p.rewind,e.default=h},"C+bE":function(t,e){function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(e){return"function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=o=function(t){return n(t)}:t.exports=o=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},o(e)}t.exports=o},FYa8:function(t,e,n){"use strict";var o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var r=o(n("q1tI"));e.HeadManagerContext=r.createContext(null)},Fv7D:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dmca",function(){return n("IOhX")}])},IOhX:function(t,e,n){"use strict";n.r(e),n.d(e,"DMCAPage",(function(){return h}));var o=n("8Kt/"),r=n.n(o),i=n("q1tI"),a=n("WKAt"),l=i.createElement,s={fontSize:"11.5pt",fontFamily:"Helvetica",color:"#444444"},c={marginBottom:"7.5pt",lineHeight:"normal",background:"white"},u={color:"#444444",marginBottom:"15.0pt",lineHeight:"normal",background:"white"},f={fontSize:"10.5pt",fontFamily:"Helvetica"},d={marginTop:"7.5pt",marginRight:"0in",marginBottom:"15.0pt",marginLeft:"0in",lineHeight:"normal",background:"white"},p={fontSize:"13.5pt",fontFamily:"Helvetica",color:"#444444"};function h(){return l(a.a,null,l(r.a,null,l("link",{rel:"stylesheet",type:"text/css",href:"/static/dmca.css"})),l("p",{className:"MsoNormal",style:{marginBottom:"15.0pt",lineHeight:"normal",background:"white"}},l("span",{style:s},"Y Combinator has adopted the following policy toward copyright infringement on the Services in accordance with the Digital Millennium Copyright Act (a copy of which is located at"," "),l("a",{href:"http://www.loc.gov/copyright/legislation/dmca.pdf"},l("span",{style:{fontSize:"11.5pt",fontFamily:"Helvetica"}},"http://www.loc.gov/copyright/legislation/dmca.pdf")),l("span",{style:s},', the "',l("b",null,"DMCA"),'"). The address of Y Combinator\'s Designated Agent for copyright takedown notices ("',l("b",null,"Designated Agent"),'") is listed below.')),l("p",{className:"MsoNormal",style:c},l("b",null,l("span",{style:p},"Reporting Instances of Copyright Infringement:"))),l("p",{className:"MsoNormal",style:d},l("span",{style:s},"If you believe that content residing or accessible on or through the our website (\u201cServices\u201d) infringes a copyright, please send a written notice (by fax or regular mail) to the Designated Agent at the address below."," ",l("b",null,"You may not communicate the information specified below by email. "),"Please note that you will be liable for damages (including costs and attorney\u2019s fees) if you materially misrepresent that material is infringing your copyright(s). Please use the following format (including section numbers) when you send written notice to us:"," ")),l("ol",{style:{marginTop:"0in"},start:1,type:"1"},l("li",{className:"MsoNormal",style:u},l("span",{style:f},"Identification of the work or material being infringed. ",l("i",null,"\xa0"))),l("li",{className:"MsoNormal",style:u},l("span",{style:f},"Identification of the material that is claimed to be infringing, including its location, with sufficient detail so that Y Combinator is capable of finding it and verifying its existence.")),l("li",{className:"MsoNormal",style:u},l("span",{style:f},'Contact information for the notifying party (the "',l("b",null,"Notifying Party"),'"), including name, address, telephone number and e-mail address.')),l("li",{className:"MsoNormal",style:u},l("span",{style:f},"A statement that the Notifying Party has a good faith belief that the material is not authorized by the copyright owner, its agent or law.")),l("li",{className:"MsoNormal",style:u},l("span",{style:f},"A statement made under penalty of perjury that the information provided in the notice is accurate and that the Notifying Party is either the copyright owner, or authorized to make the complaint on behalf of the copyright owner.")),l("li",{className:"MsoNormal",style:u},l("span",{style:f},"A signature of the copyright owner, or a person authorized to act on behalf of the owner of the copyright that has been allegedly infringed."))),l("p",{className:"MsoNormal",style:d},l("span",{style:s},"After removing material pursuant to a valid DMCA notice, Y Combinator will notify the Subscriber responsible for the allegedly infringing material that it has removed or disabled access to the material. Y Combinator reserves the right, in its sole discretion, to immediately terminate the account of any Subscriber who is the subject of repeated DMCA notifications.")),l("p",{className:"MsoNormal",style:c},l("b",null,l("span",{style:p},"Submitting a DMCA Counter-Notification:"))),l("p",{className:"MsoNormal",style:d},l("span",{style:s},"If you believe you are the wrongful subject of a DMCA notification, you may file a counter-notification with Y Combinator by providing the following information to the Designated Agent at the address below:")),l("ul",{style:{listStyleType:"disc",marginTop:"0in"}},l("li",{className:"MsoNormal",style:u},l("span",{style:f},"The specific URLs of material that Y Combinator has removed or to which Y Combinator has disabled access.")),l("li",{className:"MsoNormal",style:u},l("span",{style:f},"Your name, address, telephone number, and email address.")),l("li",{className:"MsoNormal",style:u},l("span",{style:f},"A statement that you consent to the jurisdiction of Federal District Court for the judicial district in which your address is located (or the federal district courts located in San Francisco, CA if your address is outside of the United States), and that you will accept service of process from the person who provided the original DMCA notification or an agent of such person.")),l("li",{className:"MsoNormal",style:u},l("span",{style:f},'The following statement: "I swear, under penalty of perjury, that I have a good faith belief that the material was removed or disabled as a result of a mistake or misidentification of the material to be removed or disabled."')),l("li",{className:"MsoNormal",style:u},l("span",{style:f},"Sign the written document."))),l("p",{className:"MsoNormal",style:d},l("span",{style:s},"Upon receipt of a valid counter-notification, Y Combinator will forward it to Notifying Party who submitted the original DMCA notification. The original Notifying Party (or the copyright holder he or she represents) will then have ten (10) days to notify us that he or she has filed legal action relating to the allegedly infringing material. If Y Combinator does not receive any such notification within ten (10) days, we may restore the material to the Services.")),l("p",{className:"MsoNormal",style:c},l("b",null,l("span",{style:p},"Designated Agent"))),l("p",{className:"MsoNormal",style:d},l("span",{style:s},"Y Combinator",l("br",null),"320 Pioneer Way, Mountain View, CA 94041",l("br",null),l("b",null,"Attn:")," Copyright Agent; Legal ",l("br",null),l("b",null,"Fax:")," 650.360.3189",l("br",null),l("br",null))),l("p",{className:"MsoNormal"},"\xa0"))}e.default=h},Qetd:function(t,e,n){"use strict";var o=Object.assign.bind(Object);t.exports=o,t.exports.default=t.exports},T0f4:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},WKAt:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n("8Kt/"),r=n.n(o),i=n("q1tI"),a=i.createElement;function l(t){var e=t.children;return a("div",{className:"WordSection1"},a(r.a,null,a("title",null,"Hacker News Clone"),a("meta",{name:"referrer",content:"origin"}),a("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),a("link",{rel:"shortcut icon",href:"/static/favicon.ico"})),e)}},Xuae:function(t,e,n){"use strict";var o=n("/GRZ"),r=n("qXWd"),i=n("i2R6"),a=n("tCBg"),l=n("T0f4"),s=n("48fX"),c=n("mPvQ");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(e,"__esModule",{value:!0});var f=n("q1tI"),d=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(c(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(c){s(h,c);var f,p=(f=h,function(){var t,e=l(f);if(u()){var n=l(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return a(this,t)});function h(t){var i;return o(this,h),i=p.call(this,t),d&&(e.add(r(i)),n(r(i))),i}return i(h,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),i(h,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),h}(f.Component)}},i2R6:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.exports=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lwAK:function(t,e,n){"use strict";var o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var r=o(n("q1tI"));e.AmpStateContext=r.createContext({})},mPvQ:function(t,e,n){var o=n("5fIB"),r=n("rlHP"),i=n("kG2m");t.exports=function(t){return o(t)||r(t)||i()}},qXWd:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},qhzo:function(t,e){function n(e,o){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,o)}t.exports=n},rlHP:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},tCBg:function(t,e,n){var o=n("C+bE"),r=n("qXWd");t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?r(t):e}}},[["Fv7D",0,1]]]);