"use strict";(self.webpackChunkweb_portfolio=self.webpackChunkweb_portfolio||[]).push([[36],{36:(e,s,a)=>{a.r(s),a.d(s,{default:()=>T});var t=a(791),l=a(230),n=a(413),r=a(182),c=a(506),o=a(7),i=a(294),m=a(694),h=a.n(m);const d="https://api.telegram.org/bot".concat("6758528711:AAEjayHvFKVDXyoLE5L4pwWbUVTF134hlSI","/sendMessage"),x="FormFeedback_form__oWu83",_="FormFeedback_block__-z-K5",g="FormFeedback_label__bWw3t",j="FormFeedback_input__Er6lC",A="FormFeedback_textarea__Ken1p",f="FormFeedback_button__htcIx",p="FormFeedback_error__IAbag";var u=a(184);const N=e=>{let{name:s}=e;return(0,u.jsx)(c.Bc,{name:s,render:e=>(0,u.jsx)("p",{className:p,children:e})})};let b=(0,o.Ry)({name:(0,o.Z_)().trim().required("Name is a required field"),telegram:(0,o.Z_)().trim(),email:(0,o.Z_)().email().required("Email is a required field"),message:(0,o.Z_)().trim().required("Message is a required field")});const y=()=>{const[e,s]=(0,t.useState)(!1),{t:a}=(0,l.$G)(),n=a("form.notify");return(0,u.jsx)(c.J9,{initialValues:{name:"",telegram:"",email:"",message:""},validationSchema:b,onSubmit:async(e,a)=>{s(!0),a.resetForm(),h().Notify.success(n),(async e=>{console.log(e);try{await fetch("https://my-portfolio-gytx.onrender.com/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch(s){h().Notify.failure(s.message)}})(e),(async e=>{const{name:s,telegram:a,email:t,message:l}=e,n="\u041f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u0432\u0456\u0434: ".concat(s,"\n").concat(l,"\nTelegram: ").concat(a,"\nEmail: ").concat(t);try{await i.Z.post(d,{chat_id:"-1002010097355",text:n},{headers:{"Content-Type":"application/json"}})}catch(r){h().Notify.failure(r.message)}})(e),s(!1)},children:(0,u.jsxs)(c.l0,{className:x,autoComplete:"off",children:[(0,u.jsxs)("div",{className:_,children:[(0,u.jsxs)("label",{className:g,children:[a("form.name"),(0,u.jsx)(c.gN,{className:j,type:"text",name:"name",placeholder:a("form.placeholderN")}),(0,u.jsx)(N,{name:"name"})]}),(0,u.jsxs)("label",{className:g,children:[a("form.telegram"),(0,u.jsx)(c.gN,{className:j,type:"text",name:"telegram",placeholder:a("form.placeholderT")})]})]}),(0,u.jsxs)("label",{className:g,children:[a("form.email"),(0,u.jsx)(c.gN,{className:j,type:"email",name:"email",placeholder:a("form.placeholderE")}),(0,u.jsx)(N,{name:"email"})]}),(0,u.jsxs)("label",{className:g,children:[a("form.message"),(0,u.jsx)(c.gN,{className:A,as:"textarea",name:"message",placeholder:a("form.placeholderM")}),(0,u.jsx)(N,{name:"message"})]}),(0,u.jsx)("button",{className:f,type:"submit",disabled:e,children:a("form.button")})]})})};var w=a(94);const k="MyContacts_block-contacts__SU6In",C="MyContacts_title__ZpBLo",v="MyContacts_list__ADKv3",F="MyContacts_item__DIEE+",E="MyContacts_link__ZYmsc",S="MyContacts_sun-title__RSPpj",M="MyContacts_address__RWpDa",Z=()=>{const{t:e}=(0,l.$G)();return(0,u.jsxs)("div",{className:k,children:[(0,u.jsx)("h1",{className:C,children:e("contacts.title")}),(0,u.jsxs)("ul",{className:v,children:[(0,u.jsx)("li",{className:F,children:(0,u.jsxs)("a",{className:E,href:"tel:+380689441877",children:[(0,u.jsx)("svg",{width:22,height:22,children:(0,u.jsx)("use",{href:"".concat(w.Z,"#icon-phone")})}),(0,u.jsx)("span",{children:"+38 068-944-18-77"})]})}),(0,u.jsx)("li",{className:F,children:(0,u.jsxs)("a",{className:E,href:"mailto: solo991@ukr.net",target:"_blank",rel:"noopener noreferrer nofollow",children:[(0,u.jsx)("svg",{width:22,height:22,children:(0,u.jsx)("use",{href:"".concat(w.Z,"#icon-email")})}),(0,u.jsx)("span",{children:"solo991@ukr.net"})]})}),(0,u.jsx)("li",{className:F,children:(0,u.jsxs)("a",{className:E,href:"https://t.me/alexander_solonar",target:"_blank",rel:"noopener noreferrer nofollow",children:[(0,u.jsx)("svg",{width:22,height:22,children:(0,u.jsx)("use",{href:"".concat(w.Z,"#icon-telegram")})}),(0,u.jsx)("span",{children:"Telegram"})]})}),(0,u.jsx)("li",{className:F,children:(0,u.jsxs)("a",{className:E,href:"https://www.linkedin.com/in/alexandersolonar",target:"_blank",rel:"noopener noreferrer nofollow",children:[(0,u.jsx)("svg",{width:22,height:22,children:(0,u.jsx)("use",{href:"".concat(w.Z,"#icon-linkedin")})}),(0,u.jsx)("span",{children:"Linkedin"})]})}),(0,u.jsx)("li",{className:F,children:(0,u.jsxs)("a",{className:E,href:"https://github.com/Alexander-Solonar",target:"_blank",rel:"noopener noreferrer nofollow",children:[(0,u.jsx)("svg",{width:22,height:22,children:(0,u.jsx)("use",{href:"".concat(w.Z,"#icon-github")})}),(0,u.jsx)("span",{children:"GitHub"})]})})]}),(0,u.jsxs)("h3",{className:S,children:[e("contacts.sub")," :"]}),(0,u.jsx)("address",{className:M,children:(0,u.jsxs)("a",{className:E,href:"https://goo.gl/maps/qAHahXqh9R1bDvRt6",target:"_blank",rel:"noopener noreferrer nofollow",children:[e("location")," ",(0,u.jsx)("img",{width:24,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAYAAAAMJL+VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAsSURBVHgB7dMxEQAACMPAgmessqOkiOA60Rj4KYEaQlhCnAED94INf2DgO7ANIQVIDRg05gAAAABJRU5ErkJggg==",alt:"flag-ukr"})]})})]})},R="SectionContacts_contacts__aOCHx",I="SectionContacts_contacts-light__tC2g4",q="SectionContacts_content__P9xen",B=()=>{const{theme:e}=(0,t.useContext)(n._);return(0,u.jsx)("section",{className:(0,r.Z)(R,e&&I),children:(0,u.jsx)("div",{className:"container",children:(0,u.jsxs)("div",{className:q,children:[(0,u.jsx)(Z,{}),(0,u.jsx)(y,{})]})})})},T=()=>{const{t:e}=(0,l.$G)();return(0,t.useEffect)((()=>{document.title=e("title.contacts"),window.scrollTo(0,0)}),[e]),(0,u.jsx)(B,{})}}}]);
//# sourceMappingURL=36.b41d8190.chunk.js.map