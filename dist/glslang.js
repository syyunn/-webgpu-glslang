
var glslangModule = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  return (
function(glslangModule) {
  glslangModule = glslangModule || {};

var d;d||(d=typeof glslangModule !== 'undefined' ? glslangModule : {});d.compileGLSLZeroCopy=function(a,b,c){c=!!c;if("vertex"===b)var e=0;else if("fragment"===b)e=4;else if("compute"===b)e=5;else throw Error("shader_stage must be 'vertex', 'fragment', or 'compute'");b=d._malloc(4);var f=d._malloc(4),g=aa([a,e,c,b,f]);c=ba(b);a=ba(f);d._free(b);d._free(f);if(0===a)throw Error("GLSL compilation failed");b={};f=c/4;b.data=d.HEAPU32.subarray(f,f+a);b.aa=function(){d._destroy_output_buffer(g)};return b};
d.compileGLSL=function(a,b,c){a=d.compileGLSLZeroCopy(a,b,c);b=a.data.slice();a.aa();return b};var m={},p;for(p in d)d.hasOwnProperty(p)&&(m[p]=d[p]);d.arguments=[];d.thisProgram="./this.program";d.quit=function(a,b){throw b;};d.preRun=[];d.postRun=[];var r="";r=__dirname+"/";var ca,da;d.read=function(a,b){ca||(ca=require("fs"));da||(da=require("path"));a=da.normalize(a);a=ca.readFileSync(a);return b?a:a.toString()};
d.readBinary=function(a){a=d.read(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||t("Assertion failed: undefined");return a};1<process.argv.length&&(d.thisProgram=process.argv[1].replace(/\\/g,"/"));d.arguments=process.argv.slice(2);process.on("uncaughtException",function(a){if(!(a instanceof u))throw a;});process.on("unhandledRejection",t);d.quit=function(a){process.exit(a)};d.inspect=function(){return"[Emscripten Module object]"};
var ea=d.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),v=d.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||ea);for(p in m)m.hasOwnProperty(p)&&(d[p]=m[p]);m=void 0;"object"!==typeof WebAssembly&&v("no native wasm support detected");
function ba(a){var b="i32";"*"===b.charAt(b.length-1)&&(b="i32");switch(b){case "i1":return w[a>>0];case "i8":return w[a>>0];case "i16":return x[a>>1];case "i32":return y[a>>2];case "i64":return y[a>>2];case "float":return fa[a>>2];case "double":return ha[a>>3];default:t("invalid type for getValue: "+b)}return null}var z,ia=!1;function ja(){var a=d._convert_glsl_to_spirv;a||t("Assertion failed: Cannot call unknown function convert_glsl_to_spirv, make sure it is exported");return a}
function aa(a){var b=["string","number","boolean","number","number"],c={string:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1;b=ka(c);A(a,B,b,c)}return b},array:function(a){var b=ka(a.length);w.set(a,b);return b}},e=ja(),f=[],g=0;if(a)for(var h=0;h<a.length;h++){var k=c[b[h]];k?(0===g&&(g=la()),f[h]=k(a[h])):f[h]=a[h]}a=e.apply(null,f);0!==g&&ma(g);return a}var na="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function oa(a,b,c){var e=b+c;for(c=b;a[c]&&!(c>=e);)++c;if(16<c-b&&a.subarray&&na)return na.decode(a.subarray(b,c));for(e="";b<c;){var f=a[b++];if(f&128){var g=a[b++]&63;if(192==(f&224))e+=String.fromCharCode((f&31)<<6|g);else{var h=a[b++]&63;f=224==(f&240)?(f&15)<<12|g<<6|h:(f&7)<<18|g<<12|h<<6|a[b++]&63;65536>f?e+=String.fromCharCode(f):(f-=65536,e+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else e+=String.fromCharCode(f)}return e}function C(a){return a?oa(B,a,void 0):""}
function A(a,b,c,e){if(0<e){e=c+e-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var h=a.charCodeAt(++f);g=65536+((g&1023)<<10)|h&1023}if(127>=g){if(c>=e)break;b[c++]=g}else{if(2047>=g){if(c+1>=e)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=e)break;b[c++]=224|g>>12}else{if(c+3>=e)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0}}
function pa(a){for(var b=0,c=0;c<a.length;++c){var e=a.charCodeAt(c);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|a.charCodeAt(++c)&1023);127>=e?++b:b=2047>=e?b+2:65535>=e?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function qa(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,w,B,x,ra,y,D,fa,ha;
function sa(){d.HEAP8=w=new Int8Array(buffer);d.HEAP16=x=new Int16Array(buffer);d.HEAP32=y=new Int32Array(buffer);d.HEAPU8=B=new Uint8Array(buffer);d.HEAPU16=ra=new Uint16Array(buffer);d.HEAPU32=D=new Uint32Array(buffer);d.HEAPF32=fa=new Float32Array(buffer);d.HEAPF64=ha=new Float64Array(buffer)}var E=d.TOTAL_MEMORY||16777216;5242880>E&&v("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+E+"! (TOTAL_STACK=5242880)");d.wasmMemory?z=d.wasmMemory:z=new WebAssembly.Memory({initial:E/65536});
z&&(buffer=z.buffer);E=buffer.byteLength;sa();y[71144]=5527488;function F(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.ba;"number"===typeof c?void 0===b.Z?d.dynCall_v(c):d.dynCall_vi(c,b.Z):c(void 0===b.Z?null:b.Z)}}}var ta=[],ua=[],va=[],wa=[];function xa(){var a=d.preRun.shift();ta.unshift(a)}var ya=Math.abs,za=Math.sqrt,Aa=Math.floor,H=0,Ba=null,I=null;d.preloadedImages={};d.preloadedAudios={};var J="glslang.wasm";
if(String.prototype.startsWith?!J.startsWith("data:application/octet-stream;base64,"):0!==J.indexOf("data:application/octet-stream;base64,")){var Ca=J;J=d.locateFile?d.locateFile(Ca,r):r+Ca}
function Da(a){function b(a){d.asm=a.exports;H--;d.monitorRunDependencies&&d.monitorRunDependencies(H);0==H&&(null!==Ba&&(clearInterval(Ba),Ba=null),I&&(a=I,I=null,a()))}var c={env:a};H++;d.monitorRunDependencies&&d.monitorRunDependencies(H);if(d.instantiateWasm)try{return d.instantiateWasm(c,b)}catch(e){return v("Module.instantiateWasm callback failed with error: "+e),!1}(function(){try{a:{try{if(d.wasmBinary){var a=new Uint8Array(d.wasmBinary);break a}if(d.readBinary){a=d.readBinary(J);break a}throw"sync fetching of the wasm failed: you can preload it to Module['wasmBinary'] manually, or emcc.py will do that for you when generating HTML (but not JS)";
}catch(h){t(h)}a=void 0}var f=new WebAssembly.Module(a);var g=new WebAssembly.Instance(f,c)}catch(h){return v("failed to compile wasm module: "+h),0<=h.toString().indexOf("imported Memory with incompatible size")&&v("Memory size incompatibility issues may be due to changing TOTAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set TOTAL_MEMORY at runtime to something smaller than it was at compile time)."),!1}b(g,f)})();return d.asm}
d.asm=function(a,b){b.memory=z;b.table=new WebAssembly.Table({initial:900,maximum:900,element:"anyfunc"});return Da(b)};ua.push({ba:function(){Ea()}});function Fa(){return!!Fa.T}function Ga(a){d.___errno_location&&(y[d.___errno_location()>>2]=a)}var Ha=[null,[],[]],K=0;function L(){K+=4;return y[K-4>>2]}var M={};function Ia(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Ka=void 0;
function N(a){for(var b="";B[a];)b+=Ka[B[a++]];return b}var La={},Ma={},Na={};function Oa(a,b){if(void 0===a)a="_unknown";else{a=a.replace(/[^a-zA-Z0-9_]/g,"$");var c=a.charCodeAt(0);a=48<=c&&57>=c?"_"+a:a}return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}
function Pa(a){var b=Error,c=Oa(a,function(b){this.name=a;this.message=b;b=Error(b).stack;void 0!==b&&(this.stack=this.toString()+"\n"+b.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var Qa=void 0;function O(a){throw new Qa(a);}
function P(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=b.name;a||O('type "'+e+'" must have a positive integer typeid pointer');if(Ma.hasOwnProperty(a)){if(c.ea)return;O("Cannot register type '"+e+"' twice")}Ma[a]=b;delete Na[a];La.hasOwnProperty(a)&&(b=La[a],delete La[a],b.forEach(function(a){a()}))}var Ra=[],Q=[{},{value:void 0},{value:null},{value:!0},{value:!1}];
function Sa(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Ra.length?Ra.pop():Q.length;Q[b]={ga:1,value:a};return b}}function Ta(a){return this.fromWireType(D[a>>2])}function Ua(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}
function Va(a,b){switch(b){case 2:return function(a){return this.fromWireType(fa[a>>2])};case 3:return function(a){return this.fromWireType(ha[a>>3])};default:throw new TypeError("Unknown float type: "+a);}}
function Wa(a,b,c){switch(b){case 0:return c?function(a){return w[a]}:function(a){return B[a]};case 1:return c?function(a){return x[a>>1]}:function(a){return ra[a>>1]};case 2:return c?function(a){return y[a>>2]}:function(a){return D[a>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var Xa={};function R(a){if(0===a)return 0;a=C(a);if(!Xa.hasOwnProperty(a))return 0;R.T&&S(R.T);a=Xa[a];var b=pa(a)+1,c=Ya(b);c&&A(a,w,c,b);R.T=c;return R.T}
function Za(a){a=qa(a);var b=buffer.byteLength;try{return-1!==z.grow((a-b)/65536)?(buffer=z.buffer,!0):!1}catch(c){return!1}}function T(a){return 0===a%4&&(0!==a%100||0===a%400)}function $a(a,b){for(var c=0,e=0;e<=b;c+=a[e++]);return c}var U=[31,29,31,30,31,30,31,31,30,31,30,31],V=[31,28,31,30,31,30,31,31,30,31,30,31];
function W(a,b){for(a=new Date(a.getTime());0<b;){var c=a.getMonth(),e=(T(a.getFullYear())?U:V)[c];if(b>e-a.getDate())b-=e-a.getDate()+1,a.setDate(1),11>c?a.setMonth(c+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}
function ab(a,b,c,e){function f(a,b,c){for(a="number"===typeof a?a.toString():a||"";a.length<b;)a=c[0]+a;return a}function g(a,b){return f(a,b,"0")}function h(a,b){function c(a){return 0>a?-1:0<a?1:0}var X;0===(X=c(a.getFullYear()-b.getFullYear()))&&0===(X=c(a.getMonth()-b.getMonth()))&&(X=c(a.getDate()-b.getDate()));return X}function k(a){switch(a.getDay()){case 0:return new Date(a.getFullYear()-1,11,29);case 1:return a;case 2:return new Date(a.getFullYear(),0,3);case 3:return new Date(a.getFullYear(),
0,2);case 4:return new Date(a.getFullYear(),0,1);case 5:return new Date(a.getFullYear()-1,11,31);case 6:return new Date(a.getFullYear()-1,11,30)}}function q(a){a=W(new Date(a.R+1900,0,1),a.Y);var b=k(new Date(a.getFullYear()+1,0,4));return 0>=h(k(new Date(a.getFullYear(),0,4)),a)?0>=h(b,a)?a.getFullYear()+1:a.getFullYear():a.getFullYear()-1}var l=y[e+40>>2];e={ja:y[e>>2],ia:y[e+4>>2],W:y[e+8>>2],V:y[e+12>>2],S:y[e+16>>2],R:y[e+20>>2],X:y[e+24>>2],Y:y[e+28>>2],sa:y[e+32>>2],ha:y[e+36>>2],ka:l?C(l):
""};c=C(c);l={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var n in l)c=c.replace(new RegExp(n,"g"),l[n]);var G="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
Ja="January February March April May June July August September October November December".split(" ");l={"%a":function(a){return G[a.X].substring(0,3)},"%A":function(a){return G[a.X]},"%b":function(a){return Ja[a.S].substring(0,3)},"%B":function(a){return Ja[a.S]},"%C":function(a){return g((a.R+1900)/100|0,2)},"%d":function(a){return g(a.V,2)},"%e":function(a){return f(a.V,2," ")},"%g":function(a){return q(a).toString().substring(2)},"%G":function(a){return q(a)},"%H":function(a){return g(a.W,2)},
"%I":function(a){a=a.W;0==a?a=12:12<a&&(a-=12);return g(a,2)},"%j":function(a){return g(a.V+$a(T(a.R+1900)?U:V,a.S-1),3)},"%m":function(a){return g(a.S+1,2)},"%M":function(a){return g(a.ia,2)},"%n":function(){return"\n"},"%p":function(a){return 0<=a.W&&12>a.W?"AM":"PM"},"%S":function(a){return g(a.ja,2)},"%t":function(){return"\t"},"%u":function(a){return a.X||7},"%U":function(a){var b=new Date(a.R+1900,0,1),c=0===b.getDay()?b:W(b,7-b.getDay());a=new Date(a.R+1900,a.S,a.V);return 0>h(c,a)?g(Math.ceil((31-
c.getDate()+($a(T(a.getFullYear())?U:V,a.getMonth()-1)-31)+a.getDate())/7),2):0===h(c,b)?"01":"00"},"%V":function(a){var b=k(new Date(a.R+1900,0,4)),c=k(new Date(a.R+1901,0,4)),e=W(new Date(a.R+1900,0,1),a.Y);return 0>h(e,b)?"53":0>=h(c,e)?"01":g(Math.ceil((b.getFullYear()<a.R+1900?a.Y+32-b.getDate():a.Y+1-b.getDate())/7),2)},"%w":function(a){return a.X},"%W":function(a){var b=new Date(a.R,0,1),c=1===b.getDay()?b:W(b,0===b.getDay()?1:7-b.getDay()+1);a=new Date(a.R+1900,a.S,a.V);return 0>h(c,a)?g(Math.ceil((31-
c.getDate()+($a(T(a.getFullYear())?U:V,a.getMonth()-1)-31)+a.getDate())/7),2):0===h(c,b)?"01":"00"},"%y":function(a){return(a.R+1900).toString().substring(2)},"%Y":function(a){return a.R+1900},"%z":function(a){a=a.ha;var b=0<=a;a=Math.abs(a)/60;return(b?"+":"-")+String("0000"+(a/60*100+a%60)).slice(-4)},"%Z":function(a){return a.ka},"%%":function(){return"%"}};for(n in l)0<=c.indexOf(n)&&(c=c.replace(new RegExp(n,"g"),l[n](e)));n=bb(c);if(n.length>b)return 0;w.set(n,a);return n.length-1}
for(var cb=Array(256),Y=0;256>Y;++Y)cb[Y]=String.fromCharCode(Y);Ka=cb;Qa=d.BindingError=Pa("BindingError");d.InternalError=Pa("InternalError");d.count_emval_handles=function(){for(var a=0,b=5;b<Q.length;++b)void 0!==Q[b]&&++a;return a};d.get_first_emval=function(){for(var a=5;a<Q.length;++a)if(void 0!==Q[a])return Q[a];return null};function bb(a){var b=Array(pa(a)+1);A(a,b,0,b.length);return b}
var Z=d.asm({},{D:function(){ia=!0;throw"Pure virtual function called!";},w:function(){return!!Fa.T},z:function(){},v:function(){Ga(1);return-1},A:function(a,b){K=b;try{return M.da(),L(),L(),L(),L(),0}catch(c){return t(c),-c.$}},j:function(a,b){K=b;try{var c=L(),e=L(),f=L();for(b=a=0;b<f;b++){for(var g=y[e+8*b>>2],h=y[e+(8*b+4)>>2],k=0;k<h;k++){var q=B[g+k],l=Ha[c];0===q||10===q?((1===c?ea:v)(oa(l,0)),l.length=0):l.push(q)}a+=h}return a}catch(n){return t(n),-n.$}},C:function(a,b){K=b;return 0},B:function(a,
b){K=b;try{return M.da(),0}catch(c){return t(c),-c.$}},u:function(a,b){K=b;try{var c=L();var e=L();if(-1==c||0==e)var f=-22;else{var g=M.fa[c];if(g&&e===g.pa){var h=(void 0).na(g.fd);M.ma(c,h,e,g.flags);(void 0).ra(h);M.fa[c]=null;g.la&&S(g.qa)}f=0}return f}catch(k){return t(k),-k.$}},i:function(){},n:function(a,b,c,e,f){var g=Ia(c);b=N(b);P(a,{name:b,fromWireType:function(a){return!!a},toWireType:function(a,b){return b?e:f},argPackAdvance:8,readValueFromPointer:function(a){if(1===c)var e=w;else if(2===
c)e=x;else if(4===c)e=y;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(e[a>>g])},U:null})},l:function(a,b){b=N(b);P(a,{name:b,fromWireType:function(a){var b=Q[a].value;4<a&&0===--Q[a].ga&&(Q[a]=void 0,Ra.push(a));return b},toWireType:function(a,b){return Sa(b)},argPackAdvance:8,readValueFromPointer:Ta,U:null})},k:function(a,b,c){c=Ia(c);b=N(b);P(a,{name:b,fromWireType:function(a){return a},toWireType:function(a,b){if("number"!==typeof b&&"boolean"!==typeof b)throw new TypeError('Cannot convert "'+
Ua(b)+'" to '+this.name);return b},argPackAdvance:8,readValueFromPointer:Va(b,c),U:null})},c:function(a,b,c,e,f){function g(a){return a}b=N(b);-1===f&&(f=4294967295);var h=Ia(c);if(0===e){var k=32-8*c;g=function(a){return a<<k>>>k}}var q=-1!=b.indexOf("unsigned");P(a,{name:b,fromWireType:g,toWireType:function(a,c){if("number"!==typeof c&&"boolean"!==typeof c)throw new TypeError('Cannot convert "'+Ua(c)+'" to '+this.name);if(c<e||c>f)throw new TypeError('Passing a number "'+Ua(c)+'" from JS side to C/C++ side to an argument of type "'+
b+'", which is outside the valid range ['+e+", "+f+"]!");return q?c>>>0:c|0},argPackAdvance:8,readValueFromPointer:Wa(b,h,0!==e),U:null})},b:function(a,b,c){function e(a){a>>=2;var b=D;return new f(b.buffer,b[a+1],b[a])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=N(c);P(a,{name:c,fromWireType:e,argPackAdvance:8,readValueFromPointer:e},{ea:!0})},h:function(a,b){b=N(b);var c="std::string"===b;P(a,{name:b,fromWireType:function(a){var b=D[a>>
2];if(c){var e=B[a+4+b],h=0;0!=e&&(h=e,B[a+4+b]=0);var k=a+4;for(e=0;e<=b;++e){var q=a+4+e;if(0==B[q]){k=C(k);if(void 0===l)var l=k;else l+=String.fromCharCode(0),l+=k;k=q+1}}0!=h&&(B[a+4+b]=h)}else{l=Array(b);for(e=0;e<b;++e)l[e]=String.fromCharCode(B[a+4+e]);l=l.join("")}S(a);return l},toWireType:function(a,b){b instanceof ArrayBuffer&&(b=new Uint8Array(b));var e="string"===typeof b;e||b instanceof Uint8Array||b instanceof Uint8ClampedArray||b instanceof Int8Array||O("Cannot pass non-string to std::string");
var f=(c&&e?function(){return pa(b)}:function(){return b.length})(),k=Ya(4+f+1);D[k>>2]=f;if(c&&e)A(b,B,k+4,f+1);else if(e)for(e=0;e<f;++e){var q=b.charCodeAt(e);255<q&&(S(k),O("String has UTF-16 code units that do not fit in 8 bits"));B[k+4+e]=q}else for(e=0;e<f;++e)B[k+4+e]=b[e];null!==a&&a.push(S,k);return k},argPackAdvance:8,readValueFromPointer:Ta,U:function(a){S(a)}})},m:function(a,b,c){c=N(c);if(2===b){var e=function(){return ra};var f=1}else 4===b&&(e=function(){return D},f=2);P(a,{name:c,
fromWireType:function(a){for(var b=e(),c=D[a>>2],g=Array(c),l=a+4>>f,n=0;n<c;++n)g[n]=String.fromCharCode(b[l+n]);S(a);return g.join("")},toWireType:function(a,c){var g=e(),h=c.length,l=Ya(4+h*b);D[l>>2]=h;for(var n=l+4>>f,G=0;G<h;++G)g[n+G]=c.charCodeAt(G);null!==a&&a.push(S,l);return l},argPackAdvance:8,readValueFromPointer:Ta,U:function(a){S(a)}})},o:function(a,b){b=N(b);P(a,{oa:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},a:function(){d.abort()},q:function(a,
b,c){B.set(B.subarray(b,b+c),a)},e:ya,y:Aa,f:R,s:function(){return 0},r:function(){return 0},x:function(){},p:function(){},d:function(a){a|=0;var b=w.length|0;var c=y[71144]|0;var e=c+a|0;if(0<(a|0)&(e|0)<(c|0)|0>(e|0))return t("OOM"),0,Ga(12),-1;if(a=(e|0)>(b|0)){a=e|0;if(2147418112<a)a=!1;else{for(b=Math.max(w.length,16777216);b<a;)536870912>=b?b=qa(2*b):b=Math.min(qa((3*b+2147483648)/4),2147418112);Za(b)?(sa(),a=!0):a=!1}a=!(a|0)}if(a)return Ga(12),-1;y[71144]=e|0;return c|0},g:za,t:function(a,
b,c,e){return ab(a,b,c,e)}},buffer),Ea=d.___wasm_call_ctors=Z.E;d._convert_glsl_to_spirv=Z.F;d._destroy_output_buffer=Z.G;var Ya=d._malloc=Z.H,S=d._free=Z.I;d.___getTypeName=Z.J;d.___embind_register_native_and_builtin_types=Z.K;var la=d.stackSave=Z.L,ka=d.stackAlloc=Z.M,ma=d.stackRestore=Z.N;d.dynCall_vi=Z.O;d.dynCall_v=Z.P;d.asm=Z;d.then=function(a){if(d.calledRun)a(d);else{var b=d.onRuntimeInitialized;d.onRuntimeInitialized=function(){b&&b();a(d)}}return d};
function u(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}u.prototype=Error();u.prototype.constructor=u;I=function db(){d.calledRun||eb();d.calledRun||(I=db)};
function eb(){function a(){if(!d.calledRun&&(d.calledRun=!0,!ia)){F(ua);F(va);if(d.onRuntimeInitialized)d.onRuntimeInitialized();if(d.postRun)for("function"==typeof d.postRun&&(d.postRun=[d.postRun]);d.postRun.length;){var a=d.postRun.shift();wa.unshift(a)}F(wa)}}if(!(0<H)){if(d.preRun)for("function"==typeof d.preRun&&(d.preRun=[d.preRun]);d.preRun.length;)xa();F(ta);0<H||d.calledRun||(d.setStatus?(d.setStatus("Running..."),setTimeout(function(){setTimeout(function(){d.setStatus("")},1);a()},1)):
a())}}d.run=eb;function t(a){if(d.onAbort)d.onAbort(a);void 0!==a?(ea(a),v(a),a='"'+a+'"'):a="";ia=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}d.abort=t;if(d.preInit)for("function"==typeof d.preInit&&(d.preInit=[d.preInit]);0<d.preInit.length;)d.preInit.pop()();d.noExitRuntime=!0;eb();


  return glslangModule
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = glslangModule;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return glslangModule; });
    else if (typeof exports === 'object')
      exports["glslangModule"] = glslangModule;
    