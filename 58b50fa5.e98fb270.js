(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{67:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(2),o=t(6),a=(t(0),t(91)),i={id:"command",title:"Command",sidebar_label:"Command"},c={unversionedId:"command",id:"command",isDocsHomePage:!1,title:"Command",description:"What",source:"@site/docs/segment-command.md",slug:"/command",permalink:"/docs/command",editUrl:"https://github.com/jandedobbeleer/oh-my-posh3/edit/main/docs/docs/segment-command.md",version:"current",sidebar_label:"Command",sidebar:"docs",previous:{title:"Battery",permalink:"/docs/battery"},next:{title:"Dotnet",permalink:"/docs/dotnet"}},l=[{value:"What",id:"what",children:[]},{value:"Sample Configuration",id:"sample-configuration",children:[]},{value:"Properties",id:"properties",children:[]}],m={rightToc:l};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"what"},"What"),Object(a.b)("p",null,"Command allows you run an arbitrary shell command. Be aware it spawn a new process to fetch the result, meaning\nit will not be able to fetch session based context. When the command errors or returns an empty string, this\nsegment isn't rendered."),Object(a.b)("p",null,"You have the ability to use ",Object(a.b)("inlineCode",{parentName:"p"},"||")," or ",Object(a.b)("inlineCode",{parentName:"p"},"&&")," to stitch commands together and achieve complex results. When using ",Object(a.b)("inlineCode",{parentName:"p"},"||"),"\nthe first command that returns a string will be used (or none when they all fail to produce output that's not an\nerror). The ",Object(a.b)("inlineCode",{parentName:"p"},"&&")," functionality will join the output of the commands when successful."),Object(a.b)("h2",{id:"sample-configuration"},"Sample Configuration"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "prompt",\n  "alignment": "right",\n  "segments": [\n    {\n      "type": "command",\n      "style": "plain",\n      "foreground": "#ffffff",\n      "properties": {\n        "shell": "bash",\n        "command": "git log --pretty=format:%cr -1 || date +%H:%m:%S"\n      }\n    }\n  ]\n}\n')),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"shell: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," - the shell in which to run the command in. Uses ",Object(a.b)("inlineCode",{parentName:"li"},"shell -c command")," under the hood."),Object(a.b)("li",{parentName:"ul"},"command: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," - the command(s) to run")))}s.isMDXComponent=!0},91:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=o.a.createContext({}),s=function(e){var n=o.a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return o.a.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,b=p["".concat(i,".").concat(d)]||p[d]||u[d]||a;return t?o.a.createElement(b,c(c({ref:n},m),{},{components:t})):o.a.createElement(b,c({ref:n},m))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var m=2;m<a;m++)i[m]=t[m];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);