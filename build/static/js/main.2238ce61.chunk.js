(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports={wrapper:"App_wrapper__3-t6S",main:"App_main__2eMxe"}},11:function(e,t,a){e.exports={button:"DrugsListItem_button__jCT8i","added-drug":"DrugsListItem_added-drug__KutVb"}},12:function(e,t,a){e.exports={"added-drugs":"AddedDrugs_added-drugs__35a8P",actions:"AddedDrugs_actions__1l7rl","drug-list":"AddedDrugs_drug-list__2ewaK"}},13:function(e,t,a){e.exports={button:"Button_button__3zqip","button--alt":"Button_button--alt__eS3Uc"}},14:function(e,t,a){e.exports={header:"Header_header__2nb6z",title:"Header_title__3CaIV"}},16:function(e,t,a){},17:function(e,t,a){e.exports={card:"Card_card__2SWy7"}},22:function(e,t,a){e.exports=a(58)},27:function(e,t,a){},49:function(e,t,a){e.exports=a.p+"static/media/bg.9de2b22e.jpeg"},50:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),o=a.n(i),l=(a(27),a(10)),c=a.n(l),s=a(17),u=a.n(s),d=function(e){return r.a.createElement("div",{className:u.a.card},e.children)},m=a(13),f=a.n(m),h=function(e){return r.a.createElement("button",{className:"".concat(f.a.button," ").concat(f.a[e.className]),type:e.type,onClick:e.onClick},e.children)},g=a(7),p=a.n(g),E=a(18),b=a.n(E),y=function(e){return r.a.createElement("div",{className:p.a.backdrop,onClick:e.onClick})},v=function(e){return r.a.createElement(b.a,null,r.a.createElement("div",{className:p.a.modal},r.a.createElement("header",{className:p.a.header},r.a.createElement("h1",{className:p.a.title},e.title)),r.a.createElement("main",{className:p.a.content},r.a.createElement("div",null,e.children),r.a.createElement("div",{className:p.a.actions},r.a.createElement(h,{type:"button",onClick:e.onClick},"Close")))))},_=function(e){return r.a.createElement(r.a.Fragment,null,Object(i.createPortal)(r.a.createElement(y,{onClick:e.onClick}),document.getElementById("modal-root")),Object(i.createPortal)(r.a.createElement(v,{title:e.title,onClick:e.onClick},e.children),document.getElementById("modal-root")))},D=r.a.createContext({addedDrugs:[],modal:null,isLoading:!1,addDrug:function(){},removeDrug:function(){},hideModal:function(){},removeAll:function(){},checkInteractions:function(){},errorHandler:function(){}}),k=a(19),x=a.n(k);a(16);function O(){return r.a.createElement("nav",{className:"nav"},r.a.createElement("a",{href:"/",className:"navbar-brand"},"INEXAMED"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"/interactions"},"Interactions")),r.a.createElement("li",null,r.a.createElement("a",{href:"/pregnancy"},"Pregnancy")),r.a.createElement("li",null,r.a.createElement("a",{href:"/references"},"References")),r.a.createElement("li",null,r.a.createElement("a",{href:"/login"},"Login"))))}var w=a(20),C=a(1);a(49),a(50);var N,j=a(14),I=a.n(j),A=function(){return r.a.createElement("header",{className:I.a.header},r.a.createElement("h1",{className:I.a.title},"INEXAMED Drug Drug Interaction Checker"))},M=a(5),T=a.n(M),L=a(9),R=a(3),S=a(6),P=a.n(S),F=function(){var e=Object(n.useState)([]),t=Object(R.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)(""),l=Object(R.a)(o,2),c=l[0],s=l[1],u=Object(n.useState)([]),d=Object(R.a)(u,2),m=d[0],f=d[1],g=Object(n.useState)(!1),p=Object(R.a)(g,2),E=p[0],b=p[1],y=Object(n.useState)(0),v=Object(R.a)(y,2),_=v[0],k=v[1],x=Object(n.useRef)(),O=Object(n.useContext)(D);Object(n.useEffect)(function(){var e=new AbortController;return function(){var t=Object(L.a)(T.a.mark(function t(){var a,n;return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://rxnav.nlm.nih.gov/REST/displaynames.json",{signal:e.signal});case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,i(n.displayTermsList.term);case 7:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()(),function(){e.abort()}},[]);Object(n.useEffect)(function(){E&&x.current&&x.current.scrollIntoView(!1)},[E]);var w=function(e){k(0),s(e.target.innerText),b(!1),f([])};return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:P.a.form,onSubmit:function(e){e.preventDefault(),0!==c.trim().length?(O.addDrug(c),s("")):O.errorHandler({title:"Empty input field",message:["Please enter a drug name."]})}},r.a.createElement("div",{className:P.a["form-control"]},r.a.createElement("label",{className:P.a.form__label},"Enter drug name:"),r.a.createElement("div",{className:P.a["input-control"]},r.a.createElement("input",{className:P.a.form__input,onChange:function(e){s(e.target.value),b(!0),e.target.value.length>1?f(a.filter(function(t){return t.startsWith(e.target.value)})):f([])},onFocus:function(){b(!0)},onClick:function(){b(!0)},onBlur:function(){var e;(e=300,new Promise(function(t){return setTimeout(t,e)})).then(function(){return b(!1)})},onKeyDown:function(e){if(27===e.keyCode&&e.target.blur(),0!==m.length)if(38===e.keyCode){if(0===_)return;k(function(e){return e-1})}else if(40===e.keyCode){if(_===m.length-1)return;k(function(e){return e+1})}else 13===e.keyCode&&E&&(s(m[_]),k(0),b(!1))},value:c}),r.a.createElement("ul",{className:P.a["suggestion-list"]},m&&E&&m.map(function(e){return r.a.createElement("li",{key:m.indexOf(e),className:m.indexOf(e)===_?P.a["suggestion-active"]:"",onClick:w,ref:m.indexOf(e)===_?x:null},e)})))),r.a.createElement(h,{type:"submit"},"Add")))};function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var B=function(e){return r.a.createElement("svg",G({className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},e),N||(N=r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})))},H=(a.p,a(11)),V=a.n(H),W=function(e){var t=Object(n.useContext)(D);return r.a.createElement("li",{className:V.a["added-drug"]},r.a.createElement("p",{className:V.a["drug-name"]},e.drug.name),r.a.createElement("button",{className:V.a.button,onClick:t.removeDrug.bind(null,e.drug.id)},r.a.createElement(B,null)))},z=a(12),U=a.n(z),X=function(){var e=Object(n.useContext)(D);return r.a.createElement("section",{className:U.a["added-drugs"]},r.a.createElement("ul",{className:U.a["drug-list"]},e.addedDrugs.map(function(e){return r.a.createElement(W,{drug:e,key:e.id})})),r.a.createElement("div",{className:U.a.actions},r.a.createElement(h,{onClick:e.checkInteractions},"Check for interactions"),r.a.createElement(h,{className:"button--alt",onClick:e.removeAll},"Clear")))},K=function(){return r.a.createElement("main",{className:c.a.main},r.a.createElement(F,null),r.a.createElement(X,null))},q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement(K,null))};var J=function(){var e=Object(n.useContext)(D);return r.a.createElement("div",{className:c.a.wrapper},r.a.createElement(O,null),r.a.createElement(w.a,null,r.a.createElement(C.c,null,r.a.createElement(C.a,{path:"/",element:r.a.createElement("div",{className:"main",style:{backgroundImage:"url(/bg.jpeg)"}},r.a.createElement("h1",{className:"title"},"Welcome to Inexamed Drug drug interaction Checker"),r.a.createElement("p",{className:"description"},"Welcome to InexaMed. Our mission is to provide reliable medical information on drug-drug interactions which helps healthcare professionals to make important decisions at the point-of-care. All the medication information in our database is retrieved from accredited and reliable resources such as the British National Formulary, Patient Information Leaflets, Electronic Medicines Compendium, journals and government regulatory agencies such as the Medicine and Healthcare Products Regulatory Agency and the US Food and Drug Administration. The information in our database is thoroughly peer-reviewed by pharmacists and physicians."),r.a.createElement("div",{className:"buttons"},r.a.createElement(h,{type:"submit"},"Let Get Started")))}),r.a.createElement(C.a,{path:"/pregnancy",element:r.a.createElement("div",null,r.a.createElement("h1",null,"Drug drug interaction Checker "),r.a.createElement("p",null," ","SApplication Program Interfaces (APIs) are available to users to retrieve data from several drug information sources, including RxNorm, MED-RT and RxTerms. Currently these APIs are available:"," "),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"RxNorm")," for retrieving data from the RxNorm data set"),r.a.createElement("li",null,"MED-RT"),r.a.createElement("li",null,"Prescribable RxNorm API "),r.a.createElement("li",null,"RxTerms API "),r.a.createElement("li",null,"RxClass API "),r.a.createElement("li",null,"Drug Interaction API ")),r.a.createElement("h2",null,"Drugs in Pregnancy"),r.a.createElement("p",null," ","Pregnancy is a unique period in a woman\u2019s life. Many changes are happening to her body that may affect the pharmacology of medications. During pregnancy, a woman\u2019s gastric pH is increased and gastric motility is reduced which may interfere with the rate and extent of medication absorption. Maternal plasma volume is increased leading to changes in the volume of distribution. In addition, increases in progesterone and estradiol levels may affect the hepatic metabolism of some medications. Glomerular filtration rate is increased due to increase renal blood flow which may affect renally cleared medications. Despite the changes, the pharmacology of most medications is not altered enough to require dosing changes.1",""),r.a.createElement("p",null," ","The placenta is an organ of exchange allowing the mother to pass nutrients and medications to the fetus; therefore, medications administered to pregnant women have the potential to affect the growing fetus. The fetus is generally at the greatest risk of developing teratogenic effects from medications during the first trimester, but it is drug specific. The use of medications in pregnancy should be evaluated for the benefits and risks to both the mother and fetus. Upon evaluation, some medications may be used sparingly during some trimesters and contraindicated in others. 2 All efforts should be made to optimize the risk benefit ratio."," "),r.a.createElement("p",null," ","Drugs with low molecular weight, low maternal protein binding, low ionization, and high lipophilicity are more likely to cross the placenta and cause pharmacologic affects.1 The developing fetus\u2019s body systems are not mature; therefore, the fetus may lack the ability to metabolize medications causing teratogenic effects."," "),r.a.createElement("p",null," ","The FDA has categorized the potential teratogenic risk of medications by an A, B, C, D, X system.",r.a.createElement("strong",null,"Category A: "),"Controlled studies in women have failed to demonstrate a risk to the fetus in the first trimester and there is no evidence of risk in later trimesters. The possibility of fetal harm appears remote. Medications in this class are considered safe to use in pregnancy. Examples of medications in this class are vitamins and levothyroxine."," "),r.a.createElement("p",null," ",r.a.createElement("strong",null,"Category B: "),"Either animal\u2010reproduction studies have not demonstrated a fetal risk but there are no controlled studies in pregnant women, or animal studies have demonstrated risk to the fetus that was not confirmed in controlled studies in pregnant women in the first trimester and there is no evidence of a risk in later trimesters. Medications in this class are generally considered safe. Examples of medications in this class are acetaminophen and amoxicillin."," "),r.a.createElement("p",null," ",r.a.createElement("strong",null,"Category C: "),"Evidence of human fetal risk has been documented, but the benefits to the mother may be acceptable despite the risk to the fetus. Drugs in this class may be used in pregnancy if the benefits to the mother outweigh the risk to the fetus (i.e. a life threatening situation or a serious disease for which safer medication cannot be used or are not efficacious). Examples of medications in this class are phenytoin and valproic acid."," "),r.a.createElement("p",null," ",r.a.createElement("strong",null,"Category D: "),"Evidence of human fetal risk has been documented, but the benefits to the mother may be acceptable despite the risk to the fetus. Drugs in this class may be used in pregnancy if the benefits to the mother outweigh the risk to the fetus (i.e. a life threatening situation or a serious disease for which safer medication cannot be used or are not efficacious). Examples of medications in this class are phenytoin and valproic acid."," "),r.a.createElement("p",null," ",r.a.createElement("strong",null,"Category X: "),"Studies in animals or humans have demonstrated teratogenic effects. The risk to the fetus clearly outweighs any potential benefit to the mother. Drugs in this category are contraindicated in pregnancy. Examples of medications in this class are thalidomide and warfarin.2"," "))}),r.a.createElement(C.a,{path:"/references",element:r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to Inexamed Drug drug interaction Checker"),r.a.createElement("p",null," ","Some medicines are safe to take during pregnancy while other medicines may have adverse effects on the unborn baby. Most medicines are assigned one of five FDA Pregnancy categories to help identify the potential level of risk. It is very important to check each and every medicine, including over-the-counter medicines and natural supplements, to determine if they are safe to take while pregnant. This is especially important during the first trimester of pregnancy (0-13 weeks), a critical time for development of the embyro and fetus."," "))}),r.a.createElement(C.a,{path:"/interactions",element:q()}))),r.a.createElement(d,null,e.isLoading&&r.a.createElement(x.a.Oval,{stroke:"Var(--color-primary)",strokeOpacity:.5,speed:1,strokeWidth:"5",style:{position:"absolute",top:"45%",left:"50%",zIndex:"100",transform:"translateX(-50%)"}})),e.modal&&r.a.createElement(_,{title:e.modal.title,onClick:e.hideModal},r.a.createElement("ul",null,e.modal.message.map(function(t){return r.a.createElement("li",{key:e.modal.message.indexOf(t)},t)})),"interactions"===e.modal.content&&r.a.createElement("p",{style:{color:"var(--color-grey-700)",marginTop:"1rem"}},r.a.createElement("strong",null,'Answers at the speed of life" '))))},Q=a(21),Y=a(4),Z=function(e,t){if("ADD_DRUG"===t.type){var a=Object(Y.a)({},t.drug,{id:(new Date).getTime()}),n=[].concat(Object(Q.a)(e.addedDrugs),[a]);return Object(Y.a)({},e,{addedDrugs:n})}if("ERROR"===t.type)return Object(Y.a)({},e,{modal:t.error});if("HIDE_MODAL"===t.type)return Object(Y.a)({},e,{modal:null});if("REMOVE_DRUG"===t.type){var r=e.addedDrugs.filter(function(e){return e.id!==t.id});return Object(Y.a)({},e,{addedDrugs:r})}return"REMOVE_ALL"===t.type?Object(Y.a)({},e,{addedDrugs:[]}):"INTERACTIONS"===t.type?Object(Y.a)({},e,{modal:t.interactions}):"LOADING"===t.type?Object(Y.a)({},e,{isLoading:!0}):"LOADED"===t.type?Object(Y.a)({},e,{isLoading:!1}):Object(Y.a)({},e)},$={addedDrugs:[],modal:null,isLoading:!1},ee=function(e){var t=Object(n.useReducer)(Z,$),a=Object(R.a)(t,2),i=a[0],o=a[1],l=function(e){o({type:"ERROR",error:e})},c={addedDrugs:i.addedDrugs,modal:i.modal,isLoading:i.isLoading,addDrug:function(e){function t(){return(t=Object(L.a)(T.a.mark(function t(){var a,n,r;return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o({type:"LOADING"}),t.prev=1,t.next=5,fetch("https://rxnav.nlm.nih.gov/REST/rxcui.json?name="+e);case 5:return a=t.sent,t.next=8,a.json();case 8:n=t.sent,r=null,n.idGroup.hasOwnProperty("rxnormId")&&(r=n.idGroup.rxnormId[0]),r?o({type:"ADD_DRUG",drug:{name:e,rxcui:r}}):l({title:"Drug not found",message:["Sorry, entered name was not found in database. Perhaps this drug is listed under a different name."],content:"error"}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),l({title:"Error",message:["Sorry, failed to connect to database."],content:"error"});case 17:o({type:"LOADED"});case 18:case"end":return t.stop()}},t,null,[[1,14]])}))).apply(this,arguments)}10!==i.addedDrugs.length?function(){t.apply(this,arguments)}():l({title:"Too many drugs added",message:["You can only run check for 10 drugs at once."],content:"error"})},removeDrug:function(e){o({type:"REMOVE_DRUG",id:e})},hideModal:function(){o({type:"HIDE_MODAL"})},removeAll:function(){o({type:"REMOVE_ALL"})},checkInteractions:function(e){function t(){return(t=Object(L.a)(T.a.mark(function e(){var t,a,n,r,c;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(e.prev=0,t="https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=",a=0;a<i.addedDrugs.length;a++)t+=0===a?i.addedDrugs[a].rxcui:"+".concat(i.addedDrugs[a].rxcui);return e.next=5,fetch(t);case 5:return n=e.sent,e.next=8,n.json();case 8:r=e.sent,c=r.fullInteractionTypeGroup?r.fullInteractionTypeGroup[0].fullInteractionType.map(function(e){return e.interactionPair[0].description}):["No interactions found."],o({type:"INTERACTIONS",interactions:{title:"Interaction result",message:c,content:"interactions"}}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),l({title:"Error",message:["Sorry, failed to connect to database."],content:"error"});case 16:o({type:"LOADED"});case 17:case"end":return e.stop()}},e,null,[[0,13]])}))).apply(this,arguments)}e.preventDefault(),i.addedDrugs.length<2?l({title:"No drugs added",message:["Please add at least two drug names to the list."],content:"error"}):(o({type:"LOADING"}),function(){t.apply(this,arguments)}())},errorHandler:l};return r.a.createElement(D.Provider,{value:c},e.children)},te=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,60)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),i(e),o(e)})};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null,r.a.createElement(J,null))),document.getElementById("root")),te()},6:function(e,t,a){e.exports={form:"SearchForm_form__2XlVT","form-control":"SearchForm_form-control__cM8tB",form__label:"SearchForm_form__label__3nFS-",form__input:"SearchForm_form__input__2DQ4d","input-control":"SearchForm_input-control__3K3Z3","suggestion-list":"SearchForm_suggestion-list___yV1t","suggestion-active":"SearchForm_suggestion-active__QE4WL"}},7:function(e,t,a){e.exports={backdrop:"Modal_backdrop__3rpL4",modal:"Modal_modal__2nndM",header:"Modal_header__cAcs4",title:"Modal_title__1XJah",content:"Modal_content__2lgh1",actions:"Modal_actions__1u1YD"}}},[[22,3,2]]]);
//# sourceMappingURL=main.2238ce61.chunk.js.map