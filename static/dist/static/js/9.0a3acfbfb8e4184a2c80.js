(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{105:function(t,e,s){"use strict";s.r(e);var n=s(106);var i=s.n(n);for(var a in n)if(a!=="default")(function(t){s.d(e,t,function(){return n[t]})})(a);e["default"]=i.a},106:function(t,e,s){"use strict";var n=s(0);Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;s(138);s(76);var i=n(s(15));var a=n(s(16));var r=n(s(139));var u=n(s(77));var o=n(s(78));var c=n(s(79));var _=n(s(80));var l=n(s(81));var v={name:"answer_question_detail",components:{bkRadio:l.default,bkRadioGroup:_.default,bkCheckbox:c.default,bkCheckboxGroup:o.default,bkInput:u.default,bkButton:r.default},data:function t(){return{count:"",seconds:0,msg:"",questionList:[],questionTitle:{},answer_info:[],paper_id:6}},mounted:function t(){this.Time();this.getPaperStatus();var e=this;setTimeout(function(){e.submitButtonDisabled()},2e3)},methods:{countDown:function t(){var e=parseInt(this.seconds/(60*60)%24);e=e<10?"0"+e:e;var s=parseInt(this.seconds/60%60);s=s<10?"0"+s:s;var n=parseInt(this.seconds%60);n=n<10?"0"+n:n;this.count=e+"时"+s+"分"+n+"秒"},Time:function t(){var e=this;setInterval(function(){e.seconds+=1;e.countDown();e.submitButtonDisabled()},1e3)},clickSavaAnswer:function t(){var e=this;this.$bkInfo({title:"确认要保存当前作答？",confirmLoading:true,confirmFn:function(){var t=(0,a.default)(i.default.mark(function t(){return i.default.wrap(function t(s){while(1){switch(s.prev=s.next){case 0:s.prev=0;s.next=3;return new Promise(function(t){setTimeout(function(){t("成功")},1500)});case 3:e.$bkMessage({message:"保存成功",theme:"success"});e.saveAnswer();e.toAnswerQuestionIndex();return s.abrupt("return",true);case 9:s.prev=9;s.t0=s["catch"](0);console.warn(s.t0);return s.abrupt("return",false);case 13:case"end":return s.stop()}}},t,null,[[0,9]])}));function s(){return t.apply(this,arguments)}return s}()})},saveAnswer:function t(){var e=this;this.questionList.forEach(function(t){e.answer_info.push({question_id:String(t.id),stu_answers:t.student_answer})});console.log("answer_info",this.answer_info);this.$http.post("course/save_answer/",{paper_id:this.paper_id,answer_info:this.answer_info,save_or_submit:1,cumulative_time:this.seconds}).then(function(t){})},clickSubmit:function t(){var e=this;this.$bkInfo({title:"确认要提交当前试卷？",confirmLoading:true,confirmFn:function(){var t=(0,a.default)(i.default.mark(function t(){return i.default.wrap(function t(s){while(1){switch(s.prev=s.next){case 0:s.prev=0;s.next=3;return new Promise(function(t){setTimeout(function(){t("成功")},1500)});case 3:e.$bkMessage({message:"提交成功",theme:"success"});e.submitAnswer();e.toAnswerQuestionIndex();return s.abrupt("return",true);case 9:s.prev=9;s.t0=s["catch"](0);console.warn(s.t0);return s.abrupt("return",false);case 13:case"end":return s.stop()}}},t,null,[[0,9]])}));function s(){return t.apply(this,arguments)}return s}()})},submitAnswer:function t(){var e=this;this.questionList.forEach(function(t){e.answer_info.push({question_id:String(t.question_id),stu_answers:t.student_answer})});console.log("answer_info",this.answer_info);this.$http.post("course/save_answer/",{paper_id:this.paper_id,answer_info:this.answer_info,save_or_submit:0}).then(function(t){})},toAnswerQuestionIndex:function t(){this.$router.push({name:"answer_question_index"})},lastQuestion:function t(){var e=document.querySelector(".question_lists");var s=document.querySelectorAll(".question_item");var n=s.length;var i=s[0].offsetHeight;var a=n*i;e.style.width=a+"px";var r=e.offsetTop;if(-r>0&&r<a*4){r=r+i;e.style.top=r+"px"}},nextQuestion:function t(){var e=document.querySelector(".question_lists");var s=document.querySelectorAll(".question_item");var n=s.length;var i=s[0].offsetHeight;var a=n*i;e.style.height=n*i+"px";var r=e.offsetTop;if(-r<a-280){r=r-i;e.style.top=r+"px"}},selectQuestion:function t(e){var s=document.querySelector(".question_lists");var n=document.querySelectorAll(".question_item");var i=this.questionList[0].id;var a=n[0].offsetHeight;var r=s.offsetTop;r=(i-e)*a;s.style.top=r+"px";i=e},getPaperStatus:function t(){var e=this;this.$http.get("/course/get_paper_status/",{params:{paper_id:this.paper_id}}).then(function(t){console.log("paper_status",t);if(t.data.paper_status==="RELEASE"){e.getQuestionList()}else if(t.data.paper_status!=="RELEASE"){e.$bkMessage({message:t.message,theme:"error"});e.toAnswerQuestionIndex()}})},getQuestionList:function t(){var e=this;this.$http.get("/course/answer_or_check_paper/",{params:{paper_id:this.paper_id}}).then(function(t){e.questionTitle=t.data;e.seconds=t.data.cumulative_time;for(var s in t.data){t.data[s].sort(function(t,e){return t.question_id-e.question_id});for(var n in t.data[s]){e.questionList.push(t.data[s][n])}}e.questionList.sort(function(t,e){return t.question_id-e.question_id})})},submitButtonDisabled:function t(){var e=this.questionList.some(function(t){return t.student_answer===""||t.student_answer===null});if(e===true){this.$refs.submit.$el.disabled=true}if(e===false){this.$refs.submit.$el.disabled=false}}}};e.default=v},107:function(t,e,s){},151:function(t,e,s){"use strict";var n=s(107);var i=s.n(n);var a=i.a},175:function(t,e,s){"use strict";var n=function(){var t=this;var e=t.$createElement;var s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("div",{staticClass:"progress"},[s("div",[s("bk-icon",{attrs:{type:"clock"}}),t._v("\n            累计答题时间："+t._s(t.count)+"\n        ")],1)]),t._v(" "),s("div",{staticClass:"answer_sheet"},[s("h3",[t._v("答题卡")]),t._v(" "),s("ul",{attrs:{id:"answer_sheet_title"}},t._l(t.questionTitle,function(e,n){return s("li",{key:n},[n!=="cumulative_time"?s("strong",[t._v(t._s(n))]):t._e(),t._v(" "),n!=="cumulative_time"?s("ul",{attrs:{id:"answer_sheet_number"}},t._l(t.questionTitle[n],function(e){return s("li",{key:e.id},[e.student_answer===""||e.student_answer===null?s("bk-button",{staticClass:"mr10 switchQuestion",attrs:{theme:"primary",type:"submit",size:"small"},on:{click:function(s){t.selectQuestion(e.id)}}},[t._v(t._s(e.id))]):e.student_answer!==""?s("bk-button",{staticClass:"mr10 switchQuestion",attrs:{theme:"success",type:"submit",size:"small"},on:{click:function(s){t.selectQuestion(e.id)}}},[t._v(t._s(e.id))]):t._e()],1)}),0):t._e(),s("br")])}),0),t._v(" "),s("div",{staticClass:"answer_sheet_explain"},[s("hr"),t._v(" "),s("div",{staticClass:"answer_explain_button"},[s("bk-button",{staticClass:"mr10",attrs:{theme:"primary",type:"submit"}},[t._v("\n                    未完成\n                ")]),t._v(" "),s("bk-button",{staticClass:"mr10",attrs:{theme:"success",type:"submit"}},[t._v("\n                    已完成\n                ")])],1)])]),t._v(" "),s("div",{staticClass:"answer"},[s("h3",[t._v("请在此处答题")]),t._v(" "),s("div",{staticClass:"answer_area"},[s("bk-button",{staticClass:"last mr10",attrs:{theme:"default",icon:"angle-left"},on:{click:t.lastQuestion}}),t._v(" "),s("div",{staticClass:"question_box"},[s("ul",{staticClass:"question_lists"},t._l(t.questionList,function(e){return s("li",{key:e.id,staticClass:"question_item"},[t._v(t._s(e.id)+"."+t._s(e.question)+"\n                        "),e.types==="SINGLE"?s("div",[s("bk-radio-group",{model:{value:e.student_answer,callback:function(s){t.$set(e,"student_answer",s)},expression:"item.student_answer"}},[s("bk-radio",{attrs:{value:"A"}},[t._v("\n                                    "+t._s(e.option_A)+"\n                                ")]),t._v(" "),s("br"),t._v(" "),s("bk-radio",{attrs:{value:"B"}},[t._v("\n                                    "+t._s(e.option_B)+"\n                                ")]),t._v(" "),s("br"),t._v(" "),s("bk-radio",{attrs:{value:"C"}},[t._v("\n                                    "+t._s(e.option_C)+"\n                                ")]),t._v(" "),s("br"),t._v(" "),s("bk-radio",{attrs:{value:"D"}},[t._v("\n                                    "+t._s(e.option_D)+"\n                                ")]),t._v(" "),s("br")],1),t._v(" "),s("p",{staticClass:"mb5"},[t._v("我的答案："+t._s(e.student_answer))])],1):e.types==="MULTIPLE"?s("div",[s("bk-checkbox-group",{model:{value:e.student_answer,callback:function(s){t.$set(e,"student_answer",s)},expression:"item.student_answer"}},[s("bk-checkbox",{attrs:{value:"A"}},[t._v(t._s(e.option_A))]),t._v(" "),s("br"),t._v(" "),s("bk-checkbox",{attrs:{value:"B"}},[t._v(t._s(e.option_B))]),t._v(" "),s("br"),t._v(" "),s("bk-checkbox",{attrs:{value:"C"}},[t._v(t._s(e.option_C))]),t._v(" "),s("br"),t._v(" "),s("bk-checkbox",{attrs:{value:"D"}},[t._v(t._s(e.option_D))]),t._v(" "),s("br")],1),t._v(" "),s("p",{staticClass:"mb5"},[t._v("我的答案："+t._s(e.student_answer))])],1):e.types==="JUDGE"?s("div",[s("bk-radio-group",{model:{value:e.student_answer,callback:function(s){t.$set(e,"student_answer",s)},expression:"item.student_answer"}},[s("bk-radio",{attrs:{value:"T"}},[t._v("\n                                    正确\n                                ")]),t._v(" "),s("br"),t._v(" "),s("bk-radio",{attrs:{value:"F"}},[t._v("\n                                    错误\n                                ")]),t._v(" "),s("br")],1),t._v(" "),s("p",{staticClass:"mb5"},[t._v("我的答案："+t._s(e.student_answer))])],1):e.types==="COMPLETION"?s("div",[s("div",{staticClass:"input-answer"},[s("bk-input",{attrs:{placeholder:"请输入你的答案",type:"textarea",rows:3,maxlength:255},model:{value:e.student_answer,callback:function(s){t.$set(e,"student_answer",s)},expression:"item.student_answer"}})],1),t._v(" "),s("p",{staticClass:"mb5"},[t._v("我的答案："+t._s(e.student_answer))])]):e.types==="SHORT_ANSWER"?s("div",[s("div",{staticClass:"input-answer"},[s("bk-input",{attrs:{placeholder:"请输入你的答案",type:"textarea",rows:3,maxlength:255},model:{value:e.student_answer,callback:function(s){t.$set(e,"student_answer",s)},expression:"item.student_answer"}})],1),t._v(" "),s("p",{staticClass:"mb5"},[t._v("我的答案："+t._s(e.student_answer))])]):t._e()])}),0)]),t._v(" "),s("bk-button",{staticClass:"next",attrs:{theme:"default",icon:"angle-right"},on:{click:t.nextQuestion}})],1),t._v(" "),s("div",{staticClass:"answer_submit"},[s("hr"),t._v(" "),s("div",{staticClass:"answer_submit_button"},[s("bk-button",{staticClass:"mr10",attrs:{theme:"primary",type:"submit",title:"基础按钮"},on:{click:t.clickSavaAnswer}},[t._v("\n                    保存\n                ")]),t._v(" "),s("bk-button",{ref:"submit",staticClass:"mr10",attrs:{theme:"primary",type:"submit",title:"基础按钮"},on:{click:t.clickSubmit}},[t._v("\n                    提交\n                ")])],1)])])])};var i=[];s.d(e,"a",function(){return n});s.d(e,"b",function(){return i})},75:function(t,e,s){"use strict";s.r(e);var n=s(175);var i=s(105);for(var a in i)if(a!=="default")(function(t){s.d(e,t,function(){return i[t]})})(a);var r=s(151);var u=s(2);var o=Object(u["a"])(i["default"],n["a"],n["b"],false,null,"cde0759a",null);e["default"]=o.exports}}]);