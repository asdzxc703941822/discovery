(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00b9157c"],{"2dc7":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("el-dialog",{staticClass:"moduledDialog",staticStyle:{margin:"0",height:"100%"},attrs:{title:"查询页面",visible:t.dialogTableVisible,width:"100%",top:"0"},on:{"update:visible":function(e){t.dialogTableVisible=e},close:t.closeDialog}}),n("div",{staticClass:"allPickingArea"},[n("el-container",[n("el-header",[n("div",{staticClass:"pageTitle"},[t._v("任务清单")])]),n("el-main",[n("el-container",[n("el-header",[n("el-form",{staticClass:"demo-form-inline pageForm",attrs:{inline:!0}},[n("el-form-item",{attrs:{label:"日期"}},[n("el-date-picker",{attrs:{type:"date",size:"small",placeholder:"选择日期","value-format":"yyyy-MM-dd",format:"yyyy-MM-dd"},model:{value:t.FDate,callback:function(e){t.FDate=e},expression:"FDate"}})],1)],1)],1),n("el-main",{staticClass:"tableStyle"},[n("el-table",{attrs:{data:t.taskBillData,height:"100%",stripe:"",border:""},on:{"row-dblclick":t.rowDblClick}},t._l(t.taskBillColumn,function(e,r){return n("el-table-column",{key:r,attrs:{align:"center",prop:e.prop,label:e.label}},[e.children?t._l(e.children,function(t,e){return n("el-table-column",{key:e,attrs:{label:t.label,"min-width":t.minWidth,prop:t.prop}})}):t._e()],2)}),1)],1),n("el-footer",[n("el-pagination",{staticStyle:{"text-align":"right"},attrs:{"current-page":t.currentPage,"page-sizes":t.pagesizeDate,"page-size":t.pagesize,layout:"total, sizes, prev, pager, next",total:t.pageTotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)],1)],1)],1)],1)],1)},i=[],a=n("5a0c"),s=n.n(a),u={data:function(){return{macNumber:"",taskNumber:"",FDate:s()().format("YYYY-MM-DD"),currentPage:1,pagesize:10,pagesizeDate:[10,20,50,100],pageTotal:0,taskBillData:[{FMacNumber:"1",FStaffNumber:"2",FTaskNumber:"3",FTaskQty:"4",FCusName:"5",FPartCode:"6",FPartName:"7",FBatchNumber:"8",FReportQty:"9",FPlanStartDate:"10",FPlanEndDate:"11",FWarnDate:"12",FNote:"13"}],taskBillColumn:[{label:"机台号码",prop:"FMacNumber"},{label:"员工工号",prop:"FStaffNumber"},{label:"任务单号",prop:"FTaskNumber"},{label:"任务数量",prop:"FTaskQty"},{label:"客户名称",prop:"FCusName"},{label:"零件代码",prop:"FPartCode"},{label:"零件名称",prop:"FPartName"},{label:"生产批号",prop:"FBatchNumber"},{label:"汇报数量",prop:"FReportQty"},{label:"计划开工日",prop:"FPlanStartDate"},{label:"计划完工日",prop:"FPlanEndDate"},{label:"预警日期",prop:"FWarnDate"},{label:"摘要",prop:"FNote"}],dialogTableVisible:!1}},methods:{rowDblClick:function(t,e,n,r){this.dialogTableVisible=!0},closeDialog:function(){},handleSizeChange:function(){},handleCurrentChange:function(){}},mounted:function(){}},o=u,l=n("2877"),c=Object(l["a"])(o,r,i,!1,null,null,null);e["default"]=c.exports},"5a0c":function(t,e,n){!function(e,n){t.exports=n()}(0,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",a="week",s="month",u="quarter",o="year",l=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},f={s:h,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+h(r,2,"0")+":"+h(i,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,s),i=e-r<0,a=t.clone().add(n+(i?-1:1),s);return Number(-(n+(e-r)/(i?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(l){return{M:s,y:o,w:a,d:i,h:r,m:n,s:e,ms:t,Q:u}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p="en",m={};m[p]=d;var g=function(t){return t instanceof D},$=function(t,e,n){var r;if(!t)return p;if("string"==typeof t)m[t]&&(r=t),e&&(m[t]=e,r=t);else{var i=t.name;m[i]=t,r=i}return n||(p=r),r},b=function(t,e,n){if(g(t))return t.clone();var r=e?"string"==typeof e?{format:e,pl:n}:e:{};return r.date=t,new D(r)},y=f;y.l=$,y.i=g,y.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u})};var D=function(){function h(t){this.$L=this.$L||$(t.locale,null,!0),this.parse(t)}var f=h.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r)return n?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(e)}(t),this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return y},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return b(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<b(t)},f.$g=function(t,e,n){return y.u(t)?this[e]:this.set(n,t)},f.year=function(t){return this.$g(t,"$y",o)},f.month=function(t){return this.$g(t,"$M",s)},f.day=function(t){return this.$g(t,"$W",i)},f.date=function(t){return this.$g(t,"$D","date")},f.hour=function(t){return this.$g(t,"$H",r)},f.minute=function(t){return this.$g(t,"$m",n)},f.second=function(t){return this.$g(t,"$s",e)},f.millisecond=function(e){return this.$g(e,"$ms",t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,u){var l=this,c=!!y.u(u)||u,h=y.p(t),f=function(t,e){var n=y.w(l.$u?Date.UTC(l.$y,e,t):new Date(l.$y,e,t),l);return c?n:n.endOf(i)},d=function(t,e){return y.w(l.toDate()[t].apply(l.toDate(),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),l)},p=this.$W,m=this.$M,g=this.$D,$="set"+(this.$u?"UTC":"");switch(h){case o:return c?f(1,0):f(31,11);case s:return c?f(1,m):f(0,m+1);case a:var b=this.$locale().weekStart||0,D=(p<b?p+7:p)-b;return f(c?g-D:g+(6-D),m);case i:case"date":return d($+"Hours",0);case r:return d($+"Minutes",1);case n:return d($+"Seconds",2);case e:return d($+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(a,u){var l,c=y.p(a),h="set"+(this.$u?"UTC":""),f=(l={},l[i]=h+"Date",l.date=h+"Date",l[s]=h+"Month",l[o]=h+"FullYear",l[r]=h+"Hours",l[n]=h+"Minutes",l[e]=h+"Seconds",l[t]=h+"Milliseconds",l)[c],d=c===i?this.$D+(u-this.$W):u;if(c===s||c===o){var p=this.clone().set("date",1);p.$d[f](d),p.init(),this.$d=p.set("date",Math.min(this.$D,p.daysInMonth())).toDate()}else f&&this.$d[f](d);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[y.p(t)]()},f.add=function(t,u){var l,c=this;t=Number(t);var h=y.p(u),f=function(e){var n=b(c);return y.w(n.date(n.date()+Math.round(e*t)),c)};if(h===s)return this.set(s,this.$M+t);if(h===o)return this.set(o,this.$y+t);if(h===i)return f(1);if(h===a)return f(7);var d=(l={},l[n]=6e4,l[r]=36e5,l[e]=1e3,l)[h]||1,p=this.valueOf()+t*d;return y.w(p,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=y.z(this),i=this.$locale(),a=this.$H,s=this.$m,u=this.$M,o=i.weekdays,l=i.months,h=function(t,r,i,a){return t&&(t[r]||t(e,n))||i[r].substr(0,a)},f=function(t){return y.s(a%12||12,t,"0")},d=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:y.s(u+1,2,"0"),MMM:h(i.monthsShort,u,l,3),MMMM:l[u]||l(this,n),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(a),HH:y.s(a,2,"0"),h:f(1),hh:f(2),a:d(a,s,!0),A:d(a,s,!1),m:String(s),mm:y.s(s,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||p[t]||r.replace(":","")})},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,l,c){var h,f=y.p(l),d=b(t),p=6e4*(d.utcOffset()-this.utcOffset()),m=this-d,g=y.m(this,d);return g=(h={},h[o]=g/12,h[s]=g,h[u]=g/3,h[a]=(m-p)/6048e5,h[i]=(m-p)/864e5,h[r]=m/36e5,h[n]=m/6e4,h[e]=m/1e3,h)[f]||m,c?g:y.a(g)},f.daysInMonth=function(){return this.endOf(s).$D},f.$locale=function(){return m[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone();return n.$L=$(t,e,!0),n},f.clone=function(){return y.w(this.toDate(),this)},f.toDate=function(){return new Date(this.$d)},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},h}();return b.prototype=D.prototype,b.extend=function(t,e){return t(e,D,b),b},b.locale=$,b.isDayjs=g,b.unix=function(t){return b(1e3*t)},b.en=m[p],b.Ls=m,b})}}]);
//# sourceMappingURL=chunk-00b9157c.64e15c1c.js.map