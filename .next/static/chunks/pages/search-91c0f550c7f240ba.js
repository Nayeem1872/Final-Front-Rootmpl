(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{2774:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return t(1252)}])},3599:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});var o=t(2729),r=t(5893),u=t(8458);function i(){let n=(0,o._)(["\n  width: 100%;\n  padding: 10px;\n  margin-bottom: 10px;\n  border: 1px solid #aaa;\n  border-radius: 5px;\n  box-sizing: border-box;\n  font-size: 14px;\n\n  &:focus {\n    outline: none;\n    border-color: #007bff;\n    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);\n  }\n\n  @media (max-width: 768px) {\n    padding: 8px;\n    font-size: 12px;\n  }\n"]);return i=function(){return n},n}let c=u.zo.input(i());function s(n){return(0,r.jsx)(c,{...n})}},1252:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return _}});var o=t(2729),r=t(5893),u=t(8433),i=t(2758),c=t(3599),s=t(8458),d=t(7294),a=t(6154),f=t(8807),p=t(6486),l=t(5143);function x(){let n=(0,o._)(["\n  padding: 5px 10px;\n  border-radius: 5px;\n  font-size: 1.4rem;\n"]);return x=function(){return n},n}function h(){let n=(0,o._)(["\n  position: sticky;\n  top: 68px;\n  margin: 25px 0;\n  padding: 5px 0;\n  background-color: #eeeeeeaa;\n"]);return h=function(){return n},n}let g=(0,s.ZP)(c.Z).withConfig({componentId:"sc-316993f6-0"})(x()),b=s.ZP.div.withConfig({componentId:"sc-316993f6-1"})(h());function _(){let[n,e]=(0,d.useState)(""),[t,o]=(0,d.useState)([]),[c,s]=(0,d.useState)(!1),x=(0,d.useCallback)((0,p.debounce)(function(n){a.Z.get("/api/products?phrase="+encodeURIComponent(n)).then(n=>{o(n.data),s(!1)})},500),[]);return(0,d.useEffect)(()=>{n.length>0?(s(!0),x(n)):o([])},[n]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Z,{}),(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(b,{children:(0,r.jsx)(g,{autoFocus:!0,value:n,onChange:n=>e(n.target.value),placeholder:"Search for products..."})}),!c&&""!==n&&0===t.length&&(0,r.jsxs)("h2",{children:['No products found for query "',n,'"']}),c&&(0,r.jsx)(l.Z,{fullWidth:!0}),!c&&t.length>0&&(0,r.jsx)(f.Z,{products:t})]})]})}}},function(n){n.O(0,[662,682,154,216,774,888,179],function(){return n(n.s=2774)}),_N_E=n.O()}]);