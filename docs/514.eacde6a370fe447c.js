"use strict";(self.webpackChunkproway_computers=self.webpackChunkproway_computers||[]).push([[514],{7514:(de,O,y)=>{y.r(O),y.d(O,{ContatoModule:()=>me});var T=y(6895),H=y(9541),g=y(433),s=y(1571);function Z(a,h,e,t,i,n,l){try{var f=a[n](l),r=f.value}catch(o){return void e(o)}f.done?h(r):Promise.resolve(r).then(t,i)}const N=new s.OlP("ngx-mask config"),D=new s.OlP("new ngx-mask config"),$=new s.OlP("initial ngx-mask config"),J={suffix:"",prefix:"",thousandSeparator:" ",decimalMarker:[".",","],clearIfNotMatch:!1,showTemplate:!1,showMaskTyped:!1,placeHolderCharacter:"_",dropSpecialCharacters:!0,hiddenInput:void 0,shownMaskExpression:"",separatorLimit:"",allowNegativeNumbers:!1,validation:!0,specialCharacters:["-","/","(",")",".",":"," ","+",",","@","[","]",'"',"'"],leadZeroDateTime:!1,triggerOnMaskChange:!1,maskFilled:new s.vpe,patterns:{0:{pattern:new RegExp("\\d")},9:{pattern:new RegExp("\\d"),optional:!0},X:{pattern:new RegExp("\\d"),symbol:"*"},A:{pattern:new RegExp("[a-zA-Z0-9]")},S:{pattern:new RegExp("[a-zA-Z]")},U:{pattern:new RegExp("[A-Z]")},L:{pattern:new RegExp("[a-z]")},d:{pattern:new RegExp("\\d")},m:{pattern:new RegExp("\\d")},M:{pattern:new RegExp("\\d")},H:{pattern:new RegExp("\\d")},h:{pattern:new RegExp("\\d")},s:{pattern:new RegExp("\\d")}}},q=["Hh:m0:s0","Hh:m0","m0:s0"],B=["percent","Hh","s0","m0","separator","d0/M0/0000","d0/M0","d0","M0"];let R=(()=>{class a{constructor(e){this._config=e,this.maskExpression="",this.actualValue="",this.shownMaskExpression="",this._formatWithSeparators=(t,i,n,l)=>{let f=[],r="";if(Array.isArray(n)){const p=new RegExp(n.map(u=>"[\\^$.|?*+()".indexOf(u)>=0?`\\${u}`:u).join("|"));f=t.split(p),r=t.match(p)?.[0]??""}else f=t.split(n),r=n;const o=f.length>1?`${r}${f[1]}`:"";let m=f[0];const _=this.separatorLimit.replace(/\s/g,"");_&&+_&&(m="-"===m[0]?`-${m.slice(1,m.length).slice(0,_.length)}`:m.slice(0,_.length));const k=/(\d+)(\d{3})/;for(;i&&k.test(m);)m=m.replace(k,"$1"+i+"$2");return void 0===l?m+o:0===l?m:m+o.substr(0,l+1)},this.percentage=t=>Number(t)>=0&&Number(t)<=100,this.getPrecision=t=>{const i=t.split(".");return i.length>1?Number(i[i.length-1]):1/0},this.checkAndRemoveSuffix=t=>{for(let i=this.suffix?.length-1;i>=0;i--){const n=this.suffix.substr(i,this.suffix?.length);if(t.includes(n)&&(i-1<0||!t.includes(this.suffix.substr(i-1,this.suffix?.length))))return t.replace(n,"")}return t},this.checkInputPrecision=(t,i,n)=>{if(i<1/0){if(Array.isArray(n)){const r=n.find(o=>o!==this.thousandSeparator);n=r||n[0]}const l=new RegExp(this._charToRegExpExpression(n)+`\\d{${i}}.*$`),f=t.match(l);f&&f[0].length-1>i&&(t=t.substring(0,t.length-(f[0].length-1-i))),0===i&&this._compareOrIncludes(t[t.length-1],n,this.thousandSeparator)&&(t=t.substring(0,t.length-1))}return t},this._shift=new Set,this.clearIfNotMatch=this._config.clearIfNotMatch,this.dropSpecialCharacters=this._config.dropSpecialCharacters,this.maskSpecialCharacters=this._config.specialCharacters,this.maskAvailablePatterns=this._config.patterns,this.prefix=this._config.prefix,this.suffix=this._config.suffix,this.thousandSeparator=this._config.thousandSeparator,this.decimalMarker=this._config.decimalMarker,this.hiddenInput=this._config.hiddenInput,this.showMaskTyped=this._config.showMaskTyped,this.placeHolderCharacter=this._config.placeHolderCharacter,this.validation=this._config.validation,this.separatorLimit=this._config.separatorLimit,this.allowNegativeNumbers=this._config.allowNegativeNumbers,this.leadZeroDateTime=this._config.leadZeroDateTime}applyMaskWithPattern(e,t){const[i,n]=t;return this.customPattern=n,this.applyMask(e,i)}applyMask(e,t,i=0,n=!1,l=!1,f=(()=>{})){if(!t||"string"!=typeof e)return"";let r=0,o="",m=!1,_=!1,k=1,p=!1;e.slice(0,this.prefix.length)===this.prefix&&(e=e.slice(this.prefix.length,e.length)),this.suffix&&e?.length>0&&(e=this.checkAndRemoveSuffix(e));const u=e.toString().split("");if("IP"===t){const d=e.split(".");this.ipError=this._validIP(d),t="099.099.099.099"}const C=[];for(let d=0;d<e.length;d++)e[d]?.match("\\d")&&C.push(e[d]);if("CPF_CNPJ"===t&&(this.cpfCnpjError=11!==C.length&&14!==C.length,t=C.length>11?"00.000.000/0000-00":"000.000.000-00"),t.startsWith("percent")){if(e.match("[a-z]|[A-Z]")||e.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/.]/)){e=this._stripToDecimal(e);const d=this.getPrecision(t);e=this.checkInputPrecision(e,d,this.decimalMarker)}e.indexOf(".")>0&&!this.percentage(e.substring(0,e.indexOf(".")))&&(e=`${e.substring(0,e.indexOf(".")-1)}${e.substring(e.indexOf("."),e.length)}`),o=this.percentage(e)?e:e.substring(0,e.length-1)}else if(t.startsWith("separator")){(e.match("[w\u0430-\u044f\u0410-\u042f]")||e.match("[\u0401\u0451\u0410-\u044f]")||e.match("[a-z]|[A-Z]")||e.match(/[-@#!$%\\^&*()_\xa3\xac'+|~=`{}\[\]:";<>.?\/]/)||e.match("[^A-Za-z0-9,]"))&&(e=this._stripToDecimal(e)),e=e.length>1&&"0"===e[0]&&!this._compareOrIncludes(e[1],this.decimalMarker,this.thousandSeparator)&&!l?e.slice(1,e.length):e,l&&(e=this._compareOrIncludes(e[e.length-1],this.decimalMarker,this.thousandSeparator)?e.slice(0,e.length-1):e);const d=this._charToRegExpExpression(this.thousandSeparator);let c='@#!$%^&*()_+|~=`{}\\[\\]:\\s,\\.";<>?\\/'.replace(d,"");if(Array.isArray(this.decimalMarker))for(const x of this.decimalMarker)c=c.replace(this._charToRegExpExpression(x),"");else c=c.replace(this._charToRegExpExpression(this.decimalMarker),"");const S=new RegExp("["+c+"]");(e.match(S)||1===e.length&&this._compareOrIncludes(e,this.decimalMarker,this.thousandSeparator))&&(e=e.substring(0,e.length-1));const I=this.getPrecision(t),A=(e=this.checkInputPrecision(e,I,this.decimalMarker)).replace(new RegExp(d,"g"),"");o=this._formatWithSeparators(A,this.thousandSeparator,this.decimalMarker,I);const P=o.indexOf(",")-e.indexOf(","),v=o.length-e.length;if(v>0&&","!==o[i]){_=!0;let x=0;do{this._shift.add(i+x),x++}while(x<v)}else 0!==P&&i>0&&!(o.indexOf(",")>=i&&i>3)||!(o.indexOf(".")>=i&&i>3)&&v<=0?(this._shift.clear(),_=!0,k=v,this._shift.add(i+=v)):this._shift.clear()}else for(let d=0,c=u[0];d<u.length&&r!==t.length;d++,c=u[d])if(this._checkSymbolMask(c,t[r])&&"?"===t[r+1])o+=c,r+=2;else if("*"===t[r+1]&&m&&this._checkSymbolMask(c,t[r+2]))o+=c,r+=3,m=!1;else if(this._checkSymbolMask(c,t[r])&&"*"===t[r+1])o+=c,m=!0;else if("?"===t[r+1]&&this._checkSymbolMask(c,t[r+2]))o+=c,r+=3;else if(this._checkSymbolMask(c,t[r])){if("H"===t[r]&&Number(c)>2){r+=1,this._shiftStep(t,r,u.length),d--,this.leadZeroDateTime&&(o+="0");continue}if("h"===t[r]&&"2"===o&&Number(c)>3){r+=1,d--;continue}if("m"===t[r]&&Number(c)>5){r+=1,this._shiftStep(t,r,u.length),d--,this.leadZeroDateTime&&(o+="0");continue}if("s"===t[r]&&Number(c)>5){r+=1,this._shiftStep(t,r,u.length),d--,this.leadZeroDateTime&&(o+="0");continue}const S=31;if("d"===t[r]&&(Number(c)>3&&this.leadZeroDateTime||Number(e.slice(r,r+2))>S||"/"===e[r+1])){r+=1,this._shiftStep(t,r,u.length),d--,this.leadZeroDateTime&&(o+="0");continue}if("M"===t[r]){const A=0===r&&(Number(c)>2||Number(e.slice(r,r+2))>12||"/"===e[r+1]),P=e.slice(r-3,r-1).includes("/")&&("/"===e[r-2]&&Number(e.slice(r-1,r+1))>12&&"/"!==e[r]||"/"===e[r]||"/"===e[r-3]&&Number(e.slice(r-2,r))>12&&"/"!==e[r-1]||"/"===e[r-1]),v=Number(e.slice(r-3,r-1))<=S&&!e.slice(r-3,r-1).includes("/")&&"/"===e[r-1]&&(Number(e.slice(r,r+2))>12||"/"===e[r+1]),x=Number(e.slice(r-3,r-1))>S&&!e.slice(r-3,r-1).includes("/")&&!e.slice(r-2,r).includes("/")&&Number(e.slice(r-2,r))>12,fe=Number(e.slice(r-3,r-1))<=S&&!e.slice(r-3,r-1).includes("/")&&"/"!==e[r-1]&&Number(e.slice(r-1,r+1))>12;if(Number(c)>1&&this.leadZeroDateTime||A||P||v||x||fe){r+=1,this._shiftStep(t,r,u.length),d--,this.leadZeroDateTime&&(o+="0");continue}}o+=c,r++}else" "===c&&" "===t[r]?(o+=c,r++):-1!==this.maskSpecialCharacters.indexOf(t[r])?(o+=t[r],r++,this._shiftStep(t,r,u.length),d--):this.maskSpecialCharacters.indexOf(c)>-1&&this.maskAvailablePatterns[t[r]]&&this.maskAvailablePatterns[t[r]]?.optional?(!!u[r]&&"099.099.099.099"!==t&&"000.000.000-00"!==t&&"00.000.000/0000-00"!==t&&!t.match(/^9+\.0+$/)&&(o+=u[r]),r++,d--):"*"===this.maskExpression[r+1]&&this._findSpecialChar(this.maskExpression[r+2])&&this._findSpecialChar(c)===this.maskExpression[r+2]&&m||"?"===this.maskExpression[r+1]&&this._findSpecialChar(this.maskExpression[r+2])&&this._findSpecialChar(c)===this.maskExpression[r+2]&&m?(r+=3,o+=c):this.showMaskTyped&&this.maskSpecialCharacters.indexOf(c)<0&&c!==this.placeHolderCharacter&&(p=!0);o.length+1===t.length&&-1!==this.maskSpecialCharacters.indexOf(t[t.length-1])&&(o+=t[t.length-1]);let M=i+1;for(;this._shift.has(M);)k++,M++;let b=n&&!t.startsWith("separator")?r:this._shift.has(i)?k:0;p&&b--,f(b,_),k<0&&this._shift.clear();let w=!1;l&&(w=u.every(d=>this.maskSpecialCharacters.includes(d)));let E=`${this.prefix}${w?"":o}${this.suffix}`;return 0===o.length&&(E=`${this.prefix}${o}`),E}_findSpecialChar(e){return this.maskSpecialCharacters.find(t=>t===e)}_checkSymbolMask(e,t){return this.maskAvailablePatterns=this.customPattern?this.customPattern:this.maskAvailablePatterns,this.maskAvailablePatterns[t]&&this.maskAvailablePatterns[t].pattern&&this.maskAvailablePatterns[t].pattern.test(e)}_stripToDecimal(e){return e.split("").filter((t,i)=>t.match("^-?\\d")||t.match("\\s")||"."===t||","===t||"-"===t&&0===i&&this.allowNegativeNumbers).join("")}_charToRegExpExpression(e){return e&&(" "===e?"\\s":"[\\^$.|?*+()".indexOf(e)>=0?`\\${e}`:e)}_shiftStep(e,t,i){const n=/[*?]/g.test(e.slice(0,t))?i:t;this._shift.add(n+this.prefix.length||0)}_compareOrIncludes(e,t,i){return Array.isArray(t)?t.filter(n=>n!==i).includes(e):e===t}_validIP(e){return!(4===e.length&&!e.some((t,i)=>e.length!==i+1?""===t||Number(t)>255:""===t||Number(t.substring(0,3))>255))}}return a.\u0275fac=function(e){return new(e||a)(s.LFG(N))},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac}),a})(),F=(()=>{class a extends R{constructor(e,t,i,n){super(t),this.document=e,this._config=t,this._elementRef=i,this._renderer=n,this.maskExpression="",this.isNumberValue=!1,this.placeHolderCharacter="_",this.maskIsShown="",this.selStart=null,this.selEnd=null,this.writingValue=!1,this.maskChanged=!1,this.triggerOnMaskChange=!1,this.onChange=l=>{}}applyMask(e,t,i=0,n=!1,l=!1,f=(()=>{})){if(!t)return e!==this.actualValue?this.actualValue:e;if(this.maskIsShown=this.showMaskTyped?this.showMaskInInput():"","IP"===this.maskExpression&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(e||"#")),"CPF_CNPJ"===this.maskExpression&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(e||"#")),!e&&this.showMaskTyped)return this.formControlResult(this.prefix),this.prefix+this.maskIsShown;const r=e&&"number"==typeof this.selStart?e[this.selStart]:"";let o="";if(void 0!==this.hiddenInput&&!this.writingValue){let p=this.actualValue.split("");""!==e&&p.length?"number"==typeof this.selStart&&"number"==typeof this.selEnd&&(e.length>p.length?p.splice(this.selStart,0,r):e.length<p.length&&(p.length-e.length==1?p.splice(this.selStart-1,1):p.splice(this.selStart,this.selEnd-this.selStart))):p=[],this.showMaskTyped&&(e=this.removeMask(e)),o=this.actualValue.length&&p.length<=e.length?this.shiftTypedSymbols(p.join("")):e}this.showMaskTyped&&(e=this.removeMask(e)),o=Boolean(o)&&o.length?o:e;const m=super.applyMask(o,t,i,n,l,f);if(this.actualValue=this.getActualValue(m),"."===this.thousandSeparator&&"."===this.decimalMarker&&(this.decimalMarker=","),this.maskExpression.startsWith("separator")&&!0===this.dropSpecialCharacters&&(this.maskSpecialCharacters=this.maskSpecialCharacters.filter(p=>!this._compareOrIncludes(p,this.decimalMarker,this.thousandSeparator))),this.formControlResult(m),!this.showMaskTyped)return this.hiddenInput&&m&&m.length?this.hideInput(m,this.maskExpression):m;const _=m.length,k=this.prefix+this.maskIsShown;if(this.maskExpression.includes("H")){const p=this._numberSkipedSymbols(m);return m+k.slice(_+p)}return"IP"===this.maskExpression||"CPF_CNPJ"===this.maskExpression?m+k:m+k.slice(_)}_numberSkipedSymbols(e){const t=/(^|\D)(\d\D)/g;let i=t.exec(e),n=0;for(;null!=i;)n+=1,i=t.exec(e);return n}applyValueChanges(e,t,i,n=(()=>{})){const l=this._elementRef.nativeElement;l.value=this.applyMask(l.value,this.maskExpression,e,t,i,n),l!==this._getActiveElement()&&this.clearIfNotMatchFn()}hideInput(e,t){return e.split("").map((i,n)=>this.maskAvailablePatterns&&this.maskAvailablePatterns[t[n]]&&this.maskAvailablePatterns[t[n]]?.symbol?this.maskAvailablePatterns[t[n]]?.symbol:i).join("")}getActualValue(e){const t=e.split("").filter((i,n)=>this._checkSymbolMask(i,this.maskExpression[n])||this.maskSpecialCharacters.includes(this.maskExpression[n])&&i===this.maskExpression[n]);return t.join("")===e?t.join(""):e}shiftTypedSymbols(e){let t="";return(e&&e.split("").map((n,l)=>{if(this.maskSpecialCharacters.includes(e[l+1])&&e[l+1]!==this.maskExpression[l+1])return t=n,e[l+1];if(t.length){const f=t;return t="",f}return n})||[]).join("")}numberToString(e){return e||0===e?Number(e).toLocaleString("fullwide",{useGrouping:!1,maximumFractionDigits:20}):String(e)}showMaskInInput(e){if(this.showMaskTyped&&this.shownMaskExpression){if(this.maskExpression.length!==this.shownMaskExpression.length)throw new Error("Mask expression must match mask placeholder length");return this.shownMaskExpression}if(this.showMaskTyped){if(e){if("IP"===this.maskExpression)return this._checkForIp(e);if("CPF_CNPJ"===this.maskExpression)return this._checkForCpfCnpj(e)}return this.maskExpression.replace(/\w/g,this.placeHolderCharacter)}return""}clearIfNotMatchFn(){const e=this._elementRef.nativeElement;this.clearIfNotMatch&&this.prefix.length+this.maskExpression.length+this.suffix.length!==e.value.replace(/_/g,"").length&&(this.formElementProperty=["value",""],this.applyMask(e.value,this.maskExpression))}set formElementProperty([e,t]){Promise.resolve().then(()=>this._renderer.setProperty(this._elementRef.nativeElement,e,t))}checkSpecialCharAmount(e){return e.split("").filter(i=>this._findSpecialChar(i)).length}removeMask(e){return this._removeMask(this._removeSuffix(this._removePrefix(e)),this.maskSpecialCharacters.concat("_").concat(this.placeHolderCharacter))}_checkForIp(e){if("#"===e)return`${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;const t=[];for(let i=0;i<e.length;i++)e[i]?.match("\\d")&&t.push(e[i]);return t.length<=3?`${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`:t.length>3&&t.length<=6?`${this.placeHolderCharacter}.${this.placeHolderCharacter}`:t.length>6&&t.length<=9?this.placeHolderCharacter:""}_checkForCpfCnpj(e){const t=`${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`,i=`${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}/${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`;if("#"===e)return t;const n=[];for(let l=0;l<e.length;l++)e[l]?.match("\\d")&&n.push(e[l]);return n.length<=3?t.slice(n.length,t.length):n.length>3&&n.length<=6?t.slice(n.length+1,t.length):n.length>6&&n.length<=9?t.slice(n.length+2,t.length):n.length>9&&n.length<11?t.slice(n.length+3,t.length):11===n.length?"":12===n.length?i.slice(17===e.length?16:15,i.length):n.length>12&&n.length<=14?i.slice(n.length+4,i.length):""}_getActiveElement(e=this.document){const t=e?.activeElement?.shadowRoot;return t?.activeElement?this._getActiveElement(t):e.activeElement}formControlResult(e){this.writingValue||!this.triggerOnMaskChange&&this.maskChanged?this.maskChanged=!1:Array.isArray(this.dropSpecialCharacters)?this.onChange(this._toNumber(this._removeMask(this._removeSuffix(this._removePrefix(e)),this.dropSpecialCharacters))):this.onChange(this.dropSpecialCharacters?this._toNumber(this._checkSymbols(e)):this._removeSuffix(e))}_toNumber(e){if(!this.isNumberValue||""===e)return e;const t=Number(e);return Number.isNaN(t)?e:t}_removeMask(e,t){return e&&e.replace(this._regExpForRemove(t),"")}_removePrefix(e){return this.prefix?e&&e.replace(this.prefix,""):e}_removeSuffix(e){return this.suffix?e&&e.replace(this.suffix,""):e}_retrieveSeparatorValue(e){return this._removeMask(this._removeSuffix(this._removePrefix(e)),this.maskSpecialCharacters)}_regExpForRemove(e){return new RegExp(e.map(t=>`\\${t}`).join("|"),"gi")}_replaceDecimalMarkerToDot(e){const t=Array.isArray(this.decimalMarker)?this.decimalMarker:[this.decimalMarker];return e.replace(this._regExpForRemove(t),".")}_checkSymbols(e){if(""===e)return e;const t=this._retrieveSeparatorPrecision(this.maskExpression),i=this._replaceDecimalMarkerToDot(this._retrieveSeparatorValue(e));return this.isNumberValue?t?e===this.decimalMarker?null:this._checkPrecision(this.maskExpression,i):Number(i):i}_retrieveSeparatorPrecision(e){const t=e.match(new RegExp("^separator\\.([^d]*)"));return t?Number(t[1]):null}_checkPrecision(e,t){return e.indexOf("2")>0?Number(t).toFixed(2):Number(t)}}return a.\u0275fac=function(e){return new(e||a)(s.LFG(T.K0),s.LFG(N),s.LFG(s.SBq),s.LFG(s.Qsj))},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac}),a})(),U=(()=>{class a{constructor(e,t,i){this.document=e,this._maskService=t,this._config=i,this.maskExpression="",this.specialCharacters=[],this.patterns={},this.prefix="",this.suffix="",this.thousandSeparator=" ",this.decimalMarker=".",this.dropSpecialCharacters=null,this.hiddenInput=null,this.showMaskTyped=null,this.placeHolderCharacter=null,this.shownMaskExpression=null,this.showTemplate=null,this.clearIfNotMatch=null,this.validation=null,this.separatorLimit=null,this.allowNegativeNumbers=null,this.leadZeroDateTime=null,this.triggerOnMaskChange=null,this.maskFilled=new s.vpe,this._maskValue="",this._position=null,this._maskExpressionArray=[],this._justPasted=!1,this.onChange=n=>{},this.onTouch=()=>{}}ngOnChanges(e){const{maskExpression:t,specialCharacters:i,patterns:n,prefix:l,suffix:f,thousandSeparator:r,decimalMarker:o,dropSpecialCharacters:m,hiddenInput:_,showMaskTyped:k,placeHolderCharacter:p,shownMaskExpression:u,showTemplate:C,clearIfNotMatch:M,validation:b,separatorLimit:w,allowNegativeNumbers:E,leadZeroDateTime:d,triggerOnMaskChange:c}=e;if(t&&(t.currentValue!==t.previousValue&&!t.firstChange&&(this._maskService.maskChanged=!0),t.currentValue&&t.currentValue.split("||").length>1?(this._maskExpressionArray=t.currentValue.split("||").sort((S,I)=>S.length-I.length),this._setMask()):(this._maskExpressionArray=[],this._maskValue=t.currentValue||"",this._maskService.maskExpression=this._maskValue)),i){if(!i.currentValue||!Array.isArray(i.currentValue))return;this._maskService.maskSpecialCharacters=i.currentValue||[]}n&&n.currentValue&&(this._maskService.maskAvailablePatterns=n.currentValue),l&&(this._maskService.prefix=l.currentValue),f&&(this._maskService.suffix=f.currentValue),r&&(this._maskService.thousandSeparator=r.currentValue),o&&(this._maskService.decimalMarker=o.currentValue),m&&(this._maskService.dropSpecialCharacters=m.currentValue),_&&(this._maskService.hiddenInput=_.currentValue),k&&(this._maskService.showMaskTyped=k.currentValue),p&&(this._maskService.placeHolderCharacter=p.currentValue),u&&(this._maskService.shownMaskExpression=u.currentValue),C&&(this._maskService.showTemplate=C.currentValue),M&&(this._maskService.clearIfNotMatch=M.currentValue),b&&(this._maskService.validation=b.currentValue),w&&(this._maskService.separatorLimit=w.currentValue),E&&(this._maskService.allowNegativeNumbers=E.currentValue,this._maskService.allowNegativeNumbers&&(this._maskService.maskSpecialCharacters=this._maskService.maskSpecialCharacters.filter(S=>"-"!==S))),d&&(this._maskService.leadZeroDateTime=d.currentValue),c&&(this._maskService.triggerOnMaskChange=c.currentValue),this._applyMask()}validate({value:e}){if(!this._maskService.validation||!this._maskValue)return null;if(this._maskService.ipError)return this._createValidationError(e);if(this._maskService.cpfCnpjError)return this._createValidationError(e);if(this._maskValue.startsWith("separator")||B.includes(this._maskValue)||this._maskService.clearIfNotMatch)return null;if(q.includes(this._maskValue))return this._validateTime(e);if(e&&e.toString().length>=1){let t=0;for(const i in this._maskService.maskAvailablePatterns)if(this._maskService.maskAvailablePatterns[i].optional&&(this._maskValue.indexOf(i)!==this._maskValue.lastIndexOf(i)?t+=this._maskValue.split("").filter(l=>l===i).join("").length:-1!==this._maskValue.indexOf(i)&&t++,-1!==this._maskValue.indexOf(i)&&e.toString().length>=this._maskValue.indexOf(i)||t===this._maskValue.length))return null;if(1===this._maskValue.indexOf("{")&&e.toString().length===this._maskValue.length+Number(this._maskValue.split("{")[1].split("}")[0])-4||1===this._maskValue.indexOf("*")||1===this._maskValue.indexOf("?"))return null;if(this._maskValue.indexOf("*")>1&&e.toString().length<this._maskValue.indexOf("*")||this._maskValue.indexOf("?")>1&&e.toString().length<this._maskValue.indexOf("?")||1===this._maskValue.indexOf("{"))return this._createValidationError(e);if(-1===this._maskValue.indexOf("*")||-1===this._maskValue.indexOf("?")){const i=this._maskService.dropSpecialCharacters?this._maskValue.length-this._maskService.checkSpecialCharAmount(this._maskValue)-t:this._maskValue.length-t;if(e.toString().length<i)return this._createValidationError(e)}}return e&&this.maskFilled.emit(),null}onPaste(){this._justPasted=!0}onModelChange(e){(""===e||null==e)&&this._maskService.actualValue&&(this._maskService.actualValue=this._maskService.getActualValue(""))}onInput(e){const t=e.target;if(this._inputValue=t.value,this._setMask(),!this._maskValue)return void this.onChange(t.value);const i=1===t.selectionStart?t.selectionStart+this._maskService.prefix.length:t.selectionStart;let n=0,l=!1;if(this._maskService.applyValueChanges(i,this._justPasted,"Backspace"===this._code||"Delete"===this._code,(r,o)=>{this._justPasted=!1,n=r,l=o}),this._getActiveElement()!==t)return;this._position=1===this._position&&1===this._inputValue.length?null:this._position;let f=this._position?this._inputValue.length+i+n:i+("Backspace"!==this._code||l?n:0);f>this._getActualInputLength()&&(f=this._getActualInputLength()),f<0&&(f=0),t.setSelectionRange(f,f),this._position=null}onBlur(){this._maskValue&&this._maskService.clearIfNotMatchFn(),this.onTouch()}onClick(e){if(!this._maskValue)return;const t=e.target;null!==t&&null!==t.selectionStart&&t.selectionStart===t.selectionEnd&&t.selectionStart>this._maskService.prefix.length&&38!==e.keyCode&&this._maskService.showMaskTyped&&(this._maskService.maskIsShown=this._maskService.showMaskInInput(),t.setSelectionRange&&this._maskService.prefix+this._maskService.maskIsShown===t.value?(t.focus(),t.setSelectionRange(0,0)):t.selectionStart>this._maskService.actualValue.length&&t.setSelectionRange(this._maskService.actualValue.length,this._maskService.actualValue.length));const l=t.value&&t.value!==this._maskService.prefix?t.value:this._maskService.prefix+this._maskService.maskIsShown;t.value!==l&&(t.value=l),(t.selectionStart||t.selectionEnd)<=this._maskService.prefix.length?t.selectionStart=this._maskService.prefix.length:t.selectionEnd>this._getActualInputLength()&&(t.selectionEnd=this._getActualInputLength())}onKeyDown(e){if(!this._maskValue)return;this._code=e.code?e.code:e.key;const t=e.target;if(this._inputValue=t.value,this._setMask(),38===e.keyCode&&e.preventDefault(),37===e.keyCode||8===e.keyCode||46===e.keyCode){if(8===e.keyCode&&0===t.value.length&&(t.selectionStart=t.selectionEnd),8===e.keyCode&&0!==t.selectionStart)if(this.specialCharacters=this.specialCharacters?.length?this.specialCharacters:this._config.specialCharacters,this.prefix.length>1&&t.selectionStart<=this.prefix.length)t.setSelectionRange(this.prefix.length,t.selectionEnd);else if(this._inputValue.length!==t.selectionStart&&1!==t.selectionStart)for(;this.specialCharacters.includes(this._inputValue[t.selectionStart-1].toString())&&(this.prefix.length>=1&&t.selectionStart>this.prefix.length||0===this.prefix.length);)t.setSelectionRange(t.selectionStart-1,t.selectionEnd);this.checkSelectionOnDeletion(t),this._maskService.prefix.length&&t.selectionStart<=this._maskService.prefix.length&&t.selectionEnd<=this._maskService.prefix.length&&e.preventDefault();const i=t.selectionStart;8===e.keyCode&&!t.readOnly&&0===i&&t.selectionEnd===t.value.length&&0!==t.value.length&&(this._position=this._maskService.prefix?this._maskService.prefix.length:0,this._maskService.applyMask(this._maskService.prefix,this._maskService.maskExpression,this._position))}this.suffix&&this.suffix.length>1&&this._inputValue.length-this.suffix.length<t.selectionStart?t.setSelectionRange(this._inputValue.length-this.suffix.length,this._inputValue.length):(65===e.keyCode&&e.ctrlKey||65===e.keyCode&&e.metaKey)&&(t.setSelectionRange(0,this._getActualInputLength()),e.preventDefault()),this._maskService.selStart=t.selectionStart,this._maskService.selEnd=t.selectionEnd}writeValue(e){var t=this;return function L(a){return function(){var h=this,e=arguments;return new Promise(function(t,i){var n=a.apply(h,e);function l(r){Z(n,t,i,l,f,"next",r)}function f(r){Z(n,t,i,l,f,"throw",r)}l(void 0)})}}(function*(){"object"==typeof e&&null!==e&&"value"in e&&("disable"in e&&t.setDisabledState(Boolean(e.disable)),e=e.value),("number"==typeof e||t._maskValue.startsWith("separator"))&&(e=t._maskService.numberToString(e),Array.isArray(t.decimalMarker)||(e="."!==t.decimalMarker?e.replace(".",t.decimalMarker):e),t._maskService.isNumberValue=!0),"string"!=typeof e&&(e=""),t._inputValue=e,t._setMask(),e&&t._maskService.maskExpression||t._maskService.maskExpression&&(t._maskService.prefix||t._maskService.showMaskTyped)?(t._maskService.writingValue=!0,t._maskService.formElementProperty=["value",t._maskService.applyMask(e,t._maskService.maskExpression)],t._maskService.writingValue=!1):t._maskService.formElementProperty=["value",e],t._inputValue=e})()}registerOnChange(e){this.onChange=e,this._maskService.onChange=this.onChange}registerOnTouched(e){this.onTouch=e}_getActiveElement(e=this.document){const t=e?.activeElement?.shadowRoot;return t?.activeElement?this._getActiveElement(t):e.activeElement}checkSelectionOnDeletion(e){e.selectionStart=Math.min(Math.max(this.prefix.length,e.selectionStart),this._inputValue.length-this.suffix.length),e.selectionEnd=Math.min(Math.max(this.prefix.length,e.selectionEnd),this._inputValue.length-this.suffix.length)}setDisabledState(e){this._maskService.formElementProperty=["disabled",e]}_repeatPatternSymbols(e){return e.match(/{[0-9]+}/)&&e.split("").reduce((t,i,n)=>{if(this._start="{"===i?n:this._start,"}"!==i)return this._maskService._findSpecialChar(i)?t+i:t;this._end=n;const l=Number(e.slice(this._start+1,this._end));return t+new Array(l+1).join(e[this._start-1])},"")||e}_applyMask(){this._maskService.maskExpression=this._repeatPatternSymbols(this._maskValue||""),this._maskService.formElementProperty=["value",this._maskService.applyMask(this._inputValue,this._maskService.maskExpression)]}_validateTime(e){const t=this._maskValue.split("").filter(i=>":"!==i).length;return e&&(0==+e[e.length-1]&&e.length<t||e.length<=t-2)?this._createValidationError(e):null}_getActualInputLength(){return this._maskService.actualValue.length||this._maskService.actualValue.length+this._maskService.prefix.length}_createValidationError(e){return{mask:{requiredMask:this._maskValue,actualValue:e}}}_setMask(){this._maskExpressionArray.length>0&&this._maskExpressionArray.some(e=>{const t=this._maskService.removeMask(this._inputValue)?.length<=this._maskService.removeMask(e)?.length;if(this._inputValue&&t)return this._maskValue=e,this.maskExpression=e,this._maskService.maskExpression=e,t;this._maskValue=this._maskExpressionArray[this._maskExpressionArray.length-1],this.maskExpression=this._maskExpressionArray[this._maskExpressionArray.length-1],this._maskService.maskExpression=this._maskExpressionArray[this._maskExpressionArray.length-1]})}}return a.\u0275fac=function(e){return new(e||a)(s.Y36(T.K0),s.Y36(F),s.Y36(N))},a.\u0275dir=s.lG2({type:a,selectors:[["input","mask",""],["textarea","mask",""]],hostBindings:function(e,t){1&e&&s.NdJ("paste",function(){return t.onPaste()})("ngModelChange",function(n){return t.onModelChange(n)})("input",function(n){return t.onInput(n)})("blur",function(){return t.onBlur()})("click",function(n){return t.onClick(n)})("keydown",function(n){return t.onKeyDown(n)})},inputs:{maskExpression:["mask","maskExpression"],specialCharacters:"specialCharacters",patterns:"patterns",prefix:"prefix",suffix:"suffix",thousandSeparator:"thousandSeparator",decimalMarker:"decimalMarker",dropSpecialCharacters:"dropSpecialCharacters",hiddenInput:"hiddenInput",showMaskTyped:"showMaskTyped",placeHolderCharacter:"placeHolderCharacter",shownMaskExpression:"shownMaskExpression",showTemplate:"showTemplate",clearIfNotMatch:"clearIfNotMatch",validation:"validation",separatorLimit:"separatorLimit",allowNegativeNumbers:"allowNegativeNumbers",leadZeroDateTime:"leadZeroDateTime",triggerOnMaskChange:"triggerOnMaskChange"},outputs:{maskFilled:"maskFilled"},exportAs:["mask","ngxMask"],features:[s._Bn([{provide:g.JU,useExisting:(0,s.Gpc)(()=>a),multi:!0},{provide:g.Cf,useExisting:(0,s.Gpc)(()=>a),multi:!0},F]),s.TTD]}),a})();function Y(a,h){return h instanceof Function?{...a,...h()}:{...a,...h}}let Q=(()=>{class a{static forRoot(e){return{ngModule:a,providers:[{provide:D,useValue:e},{provide:$,useValue:J},{provide:N,useFactory:Y,deps:[$,D]},R]}}static forChild(){return{ngModule:a}}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=s.oAB({type:a}),a.\u0275inj=s.cJS({}),a})();const j=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function G(a,h){1&a&&(s.TgZ(0,"small",12),s._uU(1," Esse campo precisa de no minimo 4 carctere "),s.qZA())}function z(a,h){1&a&&(s.TgZ(0,"small",12),s._uU(1," Este campo \xe9 obrigatorio "),s.qZA())}function W(a,h){if(1&a&&(s.TgZ(0,"div"),s.YNc(1,G,2,0,"small",11),s.YNc(2,z,2,0,"small",11),s.qZA()),2&a){const e=s.oxw();s.xp6(1),s.Q6J("ngIf",e.formContato.controls.nome.hasError("minlength")),s.xp6(1),s.Q6J("ngIf",e.formContato.controls.nome.hasError("required"))}}function K(a,h){1&a&&(s.TgZ(0,"small",12),s._uU(1," Esse campo precisa de no minimo 10 carctere "),s.qZA())}function X(a,h){1&a&&(s.TgZ(0,"small",12),s._uU(1," Este campo \xe9 obrigatorio "),s.qZA())}function V(a,h){if(1&a&&(s.TgZ(0,"div"),s.YNc(1,K,2,0,"small",11),s.YNc(2,X,2,0,"small",11),s.qZA()),2&a){const e=s.oxw();s.xp6(1),s.Q6J("ngIf",e.formContato.controls.assunto.hasError("minlength")),s.xp6(1),s.Q6J("ngIf",e.formContato.controls.assunto.hasError("required"))}}function ee(a,h){1&a&&(s.TgZ(0,"small",12),s._uU(1," Esse campo precisa de no minimo 11 carctere "),s.qZA())}function te(a,h){1&a&&(s.TgZ(0,"small",12),s._uU(1," Este campo \xe9 obrigatorio "),s.qZA())}function se(a,h){if(1&a&&(s.TgZ(0,"div"),s.YNc(1,ee,2,0,"small",11),s.YNc(2,te,2,0,"small",11),s.qZA()),2&a){const e=s.oxw();s.xp6(1),s.Q6J("ngIf",e.formContato.controls.telefone.hasError("minlength")),s.xp6(1),s.Q6J("ngIf",e.formContato.controls.telefone.hasError("required"))}}function ie(a,h){1&a&&(s.TgZ(0,"small",12),s._uU(1," Esse campo precisa de no minimo 4 carctere "),s.qZA())}function re(a,h){1&a&&(s.TgZ(0,"small",12),s._uU(1," Este campo \xe9 obrigatorio "),s.qZA())}function ae(a,h){if(1&a&&(s.TgZ(0,"div"),s.YNc(1,ie,2,0,"small",11),s.YNc(2,re,2,0,"small",11),s.qZA()),2&a){const e=s.oxw();s.xp6(1),s.Q6J("ngIf",e.formContato.controls.email.hasError("minlength")),s.xp6(1),s.Q6J("ngIf",e.formContato.controls.email.hasError("required"))}}function ne(a,h){1&a&&(s.TgZ(0,"small",12),s._uU(1," Esse campo precisa de no minimo 4 carctere "),s.qZA())}function oe(a,h){1&a&&(s.TgZ(0,"small",12),s._uU(1," Este campo \xe9 obrigatorio "),s.qZA())}function le(a,h){if(1&a&&(s.TgZ(0,"div"),s.YNc(1,ne,2,0,"small",11),s.YNc(2,oe,2,0,"small",11),s.qZA()),2&a){const e=s.oxw();s.xp6(1),s.Q6J("ngIf",e.formContato.controls.mensagem.hasError("minlength")),s.xp6(1),s.Q6J("ngIf",e.formContato.controls.mensagem.hasError("required"))}}j.KeyboardEvent||(j.KeyboardEvent=function(a,h){});const he=[{path:"",component:(()=>{class a{constructor(e){this.fb=e,this.formContato=this.fb.group({nome:["",[g.kI.minLength(4),g.kI.required]],assunto:["",[g.kI.minLength(10),g.kI.required]],telefone:["",[g.kI.minLength(11),g.kI.required]],email:["",[g.kI.email,g.kI.required]],mensagem:["",[g.kI.minLength(20),g.kI.required]]})}ngOnInit(){}enviarFormulario(){alert("A mensagem foi enviada"),this.formContato.reset()}}return a.\u0275fac=function(e){return new(e||a)(s.Y36(g.qu))},a.\u0275cmp=s.Xpm({type:a,selectors:[["app-contato"]],decls:20,vars:27,consts:[[1,"contact__title"],[1,"contact__container"],[1,"contact-form",3,"formGroup","ngSubmit"],["type","text","placeholder","Digite o seu nome","formControlName","nome"],[4,"ngIf"],["type","text","placeholder","Digite o assunto","formControlName","assunto"],["type","tel","phaceholder","(00) 0000-0000","mask","(00) 0 0000-0000","formControlName","telefone"],["type","email","phaceholder","Digite o seu email","formControlName","email"],["maxlength","300","phaceholder","Digite a sua mensagem","formControlName","mensagem","rows","4"],["type","submit",3,"disabled"],["src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14230.300361031368!2d-49.0703074!3d-26.9169772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa5ec9dd8406a6a7!2sProWay!5e0!3m2!1sen!2sbr!4v1663260665081!5m2!1sen!2sbr","width","600","height","450","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border","0"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(e,t){1&e&&(s.TgZ(0,"h2",0),s._uU(1,"Entre em contato"),s.qZA(),s._UZ(2,"section",1),s.TgZ(3,"form",2),s.NdJ("ngSubmit",function(){return t.enviarFormulario()}),s._UZ(4,"input",3),s.YNc(5,W,3,2,"div",4),s._UZ(6,"input",5),s.YNc(7,V,3,2,"div",4),s._UZ(8,"input",6),s.YNc(9,se,3,2,"div",4),s._UZ(10,"input",7),s.YNc(11,ae,3,2,"div",4),s._UZ(12,"textarea",8),s.YNc(13,le,3,2,"div",4),s.TgZ(14,"button",9),s._uU(15,"Enviar"),s.qZA()(),s.TgZ(16,"address"),s._UZ(17,"iframe",10),s.TgZ(18,"p"),s._uU(19," R. 7 de Setembro, 1600 - 14\xba andar - Centro, Blumenau - SC, 89010-204"),s.qZA()()),2&e&&(s.xp6(3),s.Q6J("formGroup",t.formContato),s.xp6(1),s.ekj("valid",t.formContato.controls.nome.valid)("invalid",t.formContato.controls.nome.invalid&&(t.formContato.controls.nome.touched||t.formContato.controls.nome.dirty)),s.xp6(1),s.Q6J("ngIf",t.formContato.controls.nome.invalid&&(t.formContato.controls.nome.touched||t.formContato.controls.nome.dirty)),s.xp6(1),s.ekj("valid",t.formContato.controls.assunto.valid)("invalid",t.formContato.controls.assunto.invalid&&(t.formContato.controls.assunto.touched||t.formContato.controls.nome.dirty)),s.xp6(1),s.Q6J("ngIf",t.formContato.controls.assunto.invalid&&(t.formContato.controls.assunto.touched||t.formContato.controls.assunto.dirty)),s.xp6(1),s.ekj("valid",t.formContato.controls.telefone.valid)("invalid",t.formContato.controls.telefone.invalid&&(t.formContato.controls.telefone.touched||t.formContato.controls.telefone.dirty)),s.xp6(1),s.Q6J("ngIf",t.formContato.controls.telefone.invalid&&(t.formContato.controls.telefone.touched||t.formContato.controls.telefone.dirty)),s.xp6(1),s.ekj("valid",t.formContato.controls.email.valid)("invalid",t.formContato.controls.email.invalid&&(t.formContato.controls.email.touched||t.formContato.controls.email.dirty)),s.xp6(1),s.Q6J("ngIf",t.formContato.controls.email.invalid&&(t.formContato.controls.email.touched||t.formContato.controls.email.dirty)),s.xp6(1),s.ekj("valid",t.formContato.controls.mensagem.valid)("invalid",t.formContato.controls.mensagem.invalid&&(t.formContato.controls.mensagem.touched||t.formContato.controls.mensagem.dirty)),s.xp6(1),s.Q6J("ngIf",t.formContato.controls.mensagem.invalid&&(t.formContato.controls.mensagem.touched||t.formContato.controls.mensagem.dirty)),s.xp6(1),s.Q6J("disabled",t.formContato.invalid))},dependencies:[T.O5,g._Y,g.Fj,g.JJ,g.JL,g.nD,g.sg,g.u,U],styles:[".contact__title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}.contact-form[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;row-gap:20px;margin-bottom:50px;min-width:300px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:flex-end;background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px;width:200px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{filter:brightness(1.1)}.contact__container[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:20px;padding:20px 0}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:var(--gray)}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover{filter:none}"]}),a})()}];let ce=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=s.oAB({type:a}),a.\u0275inj=s.cJS({imports:[H.Bz.forChild(he),H.Bz]}),a})(),me=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=s.oAB({type:a}),a.\u0275inj=s.cJS({imports:[T.ez,ce,g.UX,Q.forRoot()]}),a})()}}]);