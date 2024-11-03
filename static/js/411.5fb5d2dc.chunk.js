"use strict";(self.webpackChunkweb_portfolio=self.webpackChunkweb_portfolio||[]).push([[411],{411:(e,a,t)=>{t.r(a),t.d(a,{default:()=>U});var l=t(791),s=t(230),n=t(506),r=t(7);const o=(0,r.Ry)({name:(0,r.Z_)().trim().required("Name is a required field"),telegram:(0,r.Z_)().trim(),email:(0,r.Z_)().email().required("Email is a required field"),message:(0,r.Z_)().trim().required("Message is a required field")});var c=t(294),i=t(694),m=t.n(i);const d="https://api.telegram.org/bot".concat("6758528711:AAEjayHvFKVDXyoLE5L4pwWbUVTF134hlSI","/sendMessage"),h="Formik_label__PQ4oW",_="Formik_error__VykRM";var A=t(184);const p=e=>{let{name:a}=e;return(0,A.jsx)(n.Bc,{name:a,render:e=>(0,A.jsx)("p",{className:_,children:e})})},x=e=>{let{label:a,name:t,...l}=e;return(0,A.jsxs)("label",{className:h,htmlFor:t,children:[a,(0,A.jsx)(n.gN,{id:t,name:t,...l}),(0,A.jsx)(p,{name:t})]})},u=e=>{const{label:a,name:t,...l}=e;return(0,A.jsxs)("label",{className:h,htmlFor:t,children:[a,(0,A.jsx)(n.gN,{id:t,as:"textarea",name:t,...l}),(0,A.jsx)(p,{name:t})]})},f=e=>{const{control:a,...t}=e;switch(a){case"input":return(0,A.jsx)(x,{...t});case"textarea":return(0,A.jsx)(u,{...t});default:return null}},b="FormFeedback_form__oWu83",g="FormFeedback_block__-z-K5",j="FormFeedback_input__Er6lC",N="FormFeedback_textarea__Ken1p",k="FormFeedback_button__htcIx",w=()=>{const[e,a]=(0,l.useState)(!1),{t:t}=(0,s.$G)(),r=t("form.notify");return(0,A.jsx)(n.J9,{initialValues:{name:"",telegram:"",email:"",message:""},validationSchema:o,onSubmit:async(e,t)=>{a(!0),t.resetForm(),m().Notify.success(r),(async e=>{const{name:a,telegram:t,email:l,message:s}=e,n="\u041f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u0432\u0456\u0434: ".concat(a,"\n").concat(s,"\nTelegram: ").concat(t,"\nEmail: ").concat(l);try{await c.Z.post(d,{chat_id:"-1002010097355",text:n},{headers:{"Content-Type":"application/json"}})}catch(r){m().Notify.failure(r.message)}})(e),a(!1)},children:(0,A.jsxs)(n.l0,{className:b,autoComplete:"off",children:[(0,A.jsxs)("div",{className:g,children:[(0,A.jsx)(f,{className:j,control:"input",type:"text",name:"name",label:t("form.name"),placeholder:t("form.placeholderN")}),(0,A.jsx)(f,{className:j,control:"input",type:"text",name:"telegram",label:t("form.telegram"),placeholder:t("form.placeholderT")})]}),(0,A.jsx)(f,{className:j,control:"input",type:"email",name:"email",label:t("form.email"),placeholder:t("form.placeholderE")}),(0,A.jsx)(f,{className:N,control:"textarea",name:"message",label:t("form.message"),placeholder:t("form.placeholderM")}),(0,A.jsx)("button",{className:k,type:"submit",disabled:e,children:t("form.button")})]})})};var y=t(182);const C=JSON.parse('[{"id":1,"icon":"icon-phone","label":"+38 068-944-18-77","href":"tel:+380689441877"},{"id":2,"icon":"icon-email","label":"solo991@ukr.net","href":"mailto: solo991@ukr.net","target":"_blank","rel":"noopener noreferrer nofollow"},{"id":3,"icon":"icon-telegram","label":"alexander_solonar","href":"https://t.me/alexander_solonar","target":"_blank","rel":"noopener noreferrer nofollow"},{"id":4,"icon":"icon-linkedin","label":"Linkedin","href":"https://www.linkedin.com/in/alexandersolonar","target":"_blank","rel":"noopener noreferrer nofollow"},{"id":5,"icon":"icon-github","label":"GitHub","href":"https://github.com/Alexander-Solonar","target":"_blank","rel":"noopener noreferrer nofollow"}]'),F="MyContacts_block-contacts__SU6In",E="MyContacts_title__ZpBLo",M="MyContacts_list__ADKv3",v="MyContacts_item__DIEE+",R="MyContacts_link__ZYmsc",S="MyContacts_sun-title__RSPpj",q="MyContacts_address__RWpDa",B=()=>{const{t:e}=(0,s.$G)();return(0,A.jsxs)("div",{className:F,children:[(0,A.jsx)("h1",{className:E,children:e("contacts.title")}),(0,A.jsx)("ul",{className:M,children:C.map((e=>{let{id:a,icon:t,label:l,...s}=e;return(0,A.jsx)("li",{className:v,children:(0,A.jsxs)("a",{className:R,...s,children:[(0,A.jsx)(y.Z,{width:22,height:22,icon:t}),(0,A.jsx)("span",{children:l})]})},a)}))}),(0,A.jsxs)("h3",{className:S,children:[e("contacts.sub")," :"]}),(0,A.jsx)("address",{className:q,children:(0,A.jsxs)("a",{className:R,href:"https://goo.gl/maps/qAHahXqh9R1bDvRt6",target:"_blank",rel:"noopener noreferrer nofollow",children:[e("location")," ",(0,A.jsx)("img",{width:24,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAYAAAAMJL+VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAsSURBVHgB7dMxEQAACMPAgmessqOkiOA60Rj4KYEaQlhCnAED94INf2DgO7ANIQVIDRg05gAAAABJRU5ErkJggg==",alt:"flag-ukr"})]})})]})},I="SectionContacts_contacts__aOCHx",D="SectionContacts_content__P9xen",Q=()=>(0,A.jsx)("section",{className:I,children:(0,A.jsx)("div",{className:"container",children:(0,A.jsxs)("div",{className:D,children:[(0,A.jsx)(B,{}),(0,A.jsx)(w,{})]})})}),U=()=>{const{t:e}=(0,s.$G)();return(0,l.useEffect)((()=>{document.title=e("title.contacts"),window.scrollTo(0,0)}),[e]),(0,A.jsx)(Q,{})}}}]);
//# sourceMappingURL=411.5fb5d2dc.chunk.js.map