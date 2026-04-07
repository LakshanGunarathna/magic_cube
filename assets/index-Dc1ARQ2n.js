(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nc="183",Br={ROTATE:0,DOLLY:1,PAN:2},Or={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Df=0,$c=1,Uf=2,_a=1,Ff=2,_s=3,gi=0,Jt=1,Hn=2,$n=0,zr=1,Yc=2,qc=3,jc=4,Nf=5,Vi=100,Of=101,Bf=102,zf=103,kf=104,Hf=200,Gf=201,Vf=202,Wf=203,Ko=204,Jo=205,Xf=206,$f=207,Yf=208,qf=209,jf=210,Zf=211,Kf=212,Jf=213,Qf=214,Qo=0,el=1,tl=2,Wr=3,nl=4,il=5,rl=6,sl=7,Vh=0,ep=1,tp=2,Rn=0,Wh=1,Xh=2,$h=3,Yh=4,qh=5,jh=6,Zh=7,Kh=300,Zi=301,Xr=302,lo=303,co=304,Xa=306,Ut=1e3,Xn=1001,al=1002,Dt=1003,np=1004,Xs=1005,zt=1006,uo=1007,qi=1008,rn=1009,Jh=1010,Qh=1011,ws=1012,ic=1013,Ln=1014,wn=1015,Zn=1016,rc=1017,sc=1018,As=1020,ed=35902,td=35899,nd=1021,id=1022,mn=1023,Kn=1026,ji=1027,rd=1028,ac=1029,$r=1030,oc=1031,lc=1033,xa=33776,va=33777,Ma=33778,Sa=33779,ol=35840,ll=35841,cl=35842,ul=35843,hl=36196,dl=37492,fl=37496,pl=37488,ml=37489,gl=37490,_l=37491,xl=37808,vl=37809,Ml=37810,Sl=37811,El=37812,yl=37813,bl=37814,Tl=37815,wl=37816,Al=37817,Rl=37818,Cl=37819,Pl=37820,Ll=37821,Il=36492,Dl=36494,Ul=36495,Fl=36283,Nl=36284,Ol=36285,Bl=36286,ip=3200,sd=0,rp=1,pi="",on="srgb",Yr="srgb-linear",Aa="linear",rt="srgb",Mr=7680,Zc=519,sp=512,ap=513,op=514,cc=515,lp=516,cp=517,uc=518,up=519,Kc=35044,Jc="300 es",An=2e3,Rs=2001;function hp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ra(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dp(){const n=Ra("canvas");return n.style.display="block",n}const Qc={};function eu(...n){const e="THREE."+n.shift();console.log(e,...n)}function ad(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ve(...n){n=ad(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ke(...n){n=ad(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ca(...n){const e=n.join(" ");e in Qc||(Qc[e]=!0,Ve(...n))}function fp(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const pp={[Qo]:el,[tl]:rl,[nl]:sl,[Wr]:il,[el]:Qo,[rl]:tl,[sl]:nl,[il]:Wr};class ur{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ea=Math.PI/180,zl=180/Math.PI;function ks(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function mp(n,e){return(n%e+e)%e}function ho(n,e,t){return(1-t)*n+t*e}function os(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Yt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const gp={DEG2RAD:Ea};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _i{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3],h=s[a+0],m=s[a+1],_=s[a+2],x=s[a+3];if(f!==x||c!==h||l!==m||u!==_){let p=c*h+l*m+u*_+f*x;p<0&&(h=-h,m=-m,_=-_,x=-x,p=-p);let d=1-o;if(p<.9995){const v=Math.acos(p),y=Math.sin(v);d=Math.sin(d*v)/y,o=Math.sin(o*v)/y,c=c*d+h*o,l=l*d+m*o,u=u*d+_*o,f=f*d+x*o}else{c=c*d+h*o,l=l*d+m*o,u=u*d+_*o,f=f*d+x*o;const v=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=v,l*=v,u*=v,f*=v}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[a],h=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+u*f+c*m-l*h,e[t+1]=c*_+u*h+l*f-o*m,e[t+2]=l*_+u*m+o*h-c*f,e[t+3]=u*_-o*f-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),f=o(s/2),h=c(i/2),m=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=h*u*f+l*m*_,this._y=l*m*f-h*u*_,this._z=l*u*_+h*m*f,this._w=l*u*f-h*m*_;break;case"YXZ":this._x=h*u*f+l*m*_,this._y=l*m*f-h*u*_,this._z=l*u*_-h*m*f,this._w=l*u*f+h*m*_;break;case"ZXY":this._x=h*u*f-l*m*_,this._y=l*m*f+h*u*_,this._z=l*u*_+h*m*f,this._w=l*u*f-h*m*_;break;case"ZYX":this._x=h*u*f-l*m*_,this._y=l*m*f+h*u*_,this._z=l*u*_-h*m*f,this._w=l*u*f+h*m*_;break;case"YZX":this._x=h*u*f+l*m*_,this._y=l*m*f+h*u*_,this._z=l*u*_-h*m*f,this._w=l*u*f-h*m*_;break;case"XZY":this._x=h*u*f-l*m*_,this._y=l*m*f-h*u*_,this._z=l*u*_+h*m*f,this._w=l*u*f+h*m*_;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+c*l+a*f-o*u,this.y=i+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fo.copy(this).projectOnVector(e),this.sub(fo)}reflect(e){return this.sub(fo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fo=new U,tu=new _i;class Ye{constructor(e,t,i,r,s,a,o,c,l){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],m=i[5],_=i[8],x=r[0],p=r[3],d=r[6],v=r[1],y=r[4],w=r[7],I=r[2],A=r[5],P=r[8];return s[0]=a*x+o*v+c*I,s[3]=a*p+o*y+c*A,s[6]=a*d+o*w+c*P,s[1]=l*x+u*v+f*I,s[4]=l*p+u*y+f*A,s[7]=l*d+u*w+f*P,s[2]=h*x+m*v+_*I,s[5]=h*p+m*y+_*A,s[8]=h*d+m*w+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,h=o*c-u*s,m=l*s-a*c,_=t*f+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*l-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=h*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=m*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(po.makeScale(e,t)),this}rotate(e){return this.premultiply(po.makeRotation(-e)),this}translate(e,t){return this.premultiply(po.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const po=new Ye,nu=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iu=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _p(){const n={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===rt&&(r.r=Yn(r.r),r.g=Yn(r.g),r.b=Yn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(r.r=kr(r.r),r.g=kr(r.g),r.b=kr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pi?Aa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ca("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ca("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Yr]:{primaries:e,whitePoint:i,transfer:Aa,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),n}const Je=_p();function Yn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function kr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Sr;class xp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Sr===void 0&&(Sr=Ra("canvas")),Sr.width=e.width,Sr.height=e.height;const r=Sr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Sr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ra("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Yn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yn(t[i]/255)*255):t[i]=Yn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vp=0;class hc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=ks(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(mo(r[a].image)):s.push(mo(r[a]))}else s=mo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function mo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let Mp=0;const go=new U;class kt extends ur{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=Xn,r=Xn,s=zt,a=qi,o=mn,c=rn,l=kt.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=ks(),this.name="",this.source=new hc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(go).x}get height(){return this.source.getSize(go).y}get depth(){return this.source.getSize(go).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ut:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ut:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Kh;kt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,i=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],m=c[5],_=c[9],x=c[2],p=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,w=(m+1)/2,I=(d+1)/2,A=(u+h)/4,P=(f+x)/4,M=(_+p)/4;return y>w&&y>I?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=P/i):w>I?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=A/r,s=M/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=P/s,r=M/s),this.set(i,r,s,t),this}let v=Math.sqrt((p-_)*(p-_)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(f-x)/v,this.z=(h-u)/v,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sp extends ur{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new kt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new hc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends Sp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class od extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ep extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ht{constructor(e,t,i,r,s,a,o,c,l,u,f,h,m,_,x,p){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,f,h,m,_,x,p)}set(e,t,i,r,s,a,o,c,l,u,f,h,m,_,x,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=_,d[11]=x,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Er.setFromMatrixColumn(e,0).length(),s=1/Er.setFromMatrixColumn(e,1).length(),a=1/Er.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,_=o*u,x=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=m+_*l,t[5]=h-x*l,t[9]=-o*c,t[2]=x-h*l,t[6]=_+m*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,m=c*f,_=l*u,x=l*f;t[0]=h+x*o,t[4]=_*o-m,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=x+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,m=c*f,_=l*u,x=l*f;t[0]=h-x*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=x-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,m=a*f,_=o*u,x=o*f;t[0]=c*u,t[4]=_*l-m,t[8]=h*l+x,t[1]=c*f,t[5]=x*l+h,t[9]=m*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,m=a*l,_=o*c,x=o*l;t[0]=c*u,t[4]=x-h*f,t[8]=_*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*f+_,t[10]=h-x*f}else if(e.order==="XZY"){const h=a*c,m=a*l,_=o*c,x=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+x,t[5]=a*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yp,e,bp)}lookAt(e,t,i){const r=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),oi.crossVectors(i,tn),oi.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),oi.crossVectors(i,tn)),oi.normalize(),$s.crossVectors(tn,oi),r[0]=oi.x,r[4]=$s.x,r[8]=tn.x,r[1]=oi.y,r[5]=$s.y,r[9]=tn.y,r[2]=oi.z,r[6]=$s.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],m=i[13],_=i[2],x=i[6],p=i[10],d=i[14],v=i[3],y=i[7],w=i[11],I=i[15],A=r[0],P=r[4],M=r[8],T=r[12],te=r[1],L=r[5],$=r[9],X=r[13],Z=r[2],H=r[6],z=r[10],B=r[14],he=r[3],ce=r[7],xe=r[11],fe=r[15];return s[0]=a*A+o*te+c*Z+l*he,s[4]=a*P+o*L+c*H+l*ce,s[8]=a*M+o*$+c*z+l*xe,s[12]=a*T+o*X+c*B+l*fe,s[1]=u*A+f*te+h*Z+m*he,s[5]=u*P+f*L+h*H+m*ce,s[9]=u*M+f*$+h*z+m*xe,s[13]=u*T+f*X+h*B+m*fe,s[2]=_*A+x*te+p*Z+d*he,s[6]=_*P+x*L+p*H+d*ce,s[10]=_*M+x*$+p*z+d*xe,s[14]=_*T+x*X+p*B+d*fe,s[3]=v*A+y*te+w*Z+I*he,s[7]=v*P+y*L+w*H+I*ce,s[11]=v*M+y*$+w*z+I*xe,s[15]=v*T+y*X+w*B+I*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],m=e[14],_=e[3],x=e[7],p=e[11],d=e[15],v=c*m-l*h,y=o*m-l*f,w=o*h-c*f,I=a*m-l*u,A=a*h-c*u,P=a*f-o*u;return t*(x*v-p*y+d*w)-i*(_*v-p*I+d*A)+r*(_*y-x*I+d*P)-s*(_*w-x*A+p*P)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],m=e[11],_=e[12],x=e[13],p=e[14],d=e[15],v=t*o-i*a,y=t*c-r*a,w=t*l-s*a,I=i*c-r*o,A=i*l-s*o,P=r*l-s*c,M=u*x-f*_,T=u*p-h*_,te=u*d-m*_,L=f*p-h*x,$=f*d-m*x,X=h*d-m*p,Z=v*X-y*$+w*L+I*te-A*T+P*M;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/Z;return e[0]=(o*X-c*$+l*L)*H,e[1]=(r*$-i*X-s*L)*H,e[2]=(x*P-p*A+d*I)*H,e[3]=(h*A-f*P-m*I)*H,e[4]=(c*te-a*X-l*T)*H,e[5]=(t*X-r*te+s*T)*H,e[6]=(p*w-_*P-d*y)*H,e[7]=(u*P-h*w+m*y)*H,e[8]=(a*$-o*te+l*M)*H,e[9]=(i*te-t*$-s*M)*H,e[10]=(_*A-x*w+d*v)*H,e[11]=(f*w-u*A-m*v)*H,e[12]=(o*T-a*L-c*M)*H,e[13]=(t*L-i*T+r*M)*H,e[14]=(x*y-_*I-p*v)*H,e[15]=(u*I-f*y+h*v)*H,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,h=s*l,m=s*u,_=s*f,x=a*u,p=a*f,d=o*f,v=c*l,y=c*u,w=c*f,I=i.x,A=i.y,P=i.z;return r[0]=(1-(x+d))*I,r[1]=(m+w)*I,r[2]=(_-y)*I,r[3]=0,r[4]=(m-w)*A,r[5]=(1-(h+d))*A,r[6]=(p+v)*A,r[7]=0,r[8]=(_+y)*P,r[9]=(p-v)*P,r[10]=(1-(h+x))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Er.set(r[0],r[1],r[2]).length();const o=Er.set(r[4],r[5],r[6]).length(),c=Er.set(r[8],r[9],r[10]).length();s<0&&(a=-a),un.copy(this);const l=1/a,u=1/o,f=1/c;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,t.setFromRotationMatrix(un),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,r,s,a,o=An,c=!1){const l=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),m=(i+r)/(i-r);let _,x;if(c)_=s/(a-s),x=a*s/(a-s);else if(o===An)_=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Rs)_=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=An,c=!1){const l=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),m=-(i+r)/(i-r);let _,x;if(c)_=1/(a-s),x=a/(a-s);else if(o===An)_=-2/(a-s),x=-(a+s)/(a-s);else if(o===Rs)_=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Er=new U,un=new ht,yp=new U(0,0,0),bp=new U(1,1,1),oi=new U,$s=new U,tn=new U,ru=new ht,su=new _i;class Ft{constructor(e=0,t=0,i=0,r=Ft.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ru.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ru,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return su.setFromEuler(this),this.setFromQuaternion(su,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ft.DEFAULT_ORDER="XYZ";class dc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tp=0;const au=new U,yr=new _i,Nn=new ht,Ys=new U,ls=new U,wp=new U,Ap=new _i,ou=new U(1,0,0),lu=new U(0,1,0),cu=new U(0,0,1),uu={type:"added"},Rp={type:"removed"},br={type:"childadded",child:null},_o={type:"childremoved",child:null};class Ht extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new U,t=new Ft,i=new _i,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ye}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(ou,e)}rotateY(e){return this.rotateOnAxis(lu,e)}rotateZ(e){return this.rotateOnAxis(cu,e)}translateOnAxis(e,t){return au.copy(e).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ou,e)}translateY(e){return this.translateOnAxis(lu,e)}translateZ(e){return this.translateOnAxis(cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ys.copy(e):Ys.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(ls,Ys,this.up):Nn.lookAt(Ys,ls,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),yr.setFromRotationMatrix(Nn),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uu),br.child=e,this.dispatchEvent(br),br.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rp),_o.child=e,this.dispatchEvent(_o),_o.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uu),br.child=e,this.dispatchEvent(br),br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,e,wp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,Ap,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new U(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;let st=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}};const Cp={type:"move"};class xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,i),d=this._getHandJoint(l,x);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,_=.005;l.inputState.pinching&&h>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cp)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new st;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},qs={h:0,s:0,l:0};function vo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=mp(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=vo(a,s,e+1/3),this.g=vo(a,s,e),this.b=vo(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=on){function i(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const i=ld[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return Je.workingToColorSpace(Bt.copy(this),e),Math.round(Ze(Bt.r*255,0,255))*65536+Math.round(Ze(Bt.g*255,0,255))*256+Math.round(Ze(Bt.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Bt.copy(this),t);const i=Bt.r,r=Bt.g,s=Bt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=on){Je.workingToColorSpace(Bt.copy(this),e);const t=Bt.r,i=Bt.g,r=Bt.b;return e!==on?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(qs);const i=ho(li.h,qs.h,t),r=ho(li.s,qs.s,t),s=ho(li.l,qs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new nt;nt.NAMES=ld;class bi extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ft,this.environmentIntensity=1,this.environmentRotation=new Ft,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const hn=new U,On=new U,Mo=new U,Bn=new U,Tr=new U,wr=new U,hu=new U,So=new U,Eo=new U,yo=new U,bo=new Mt,To=new Mt,wo=new Mt;class pn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),hn.subVectors(e,t),r.cross(hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){hn.subVectors(r,t),On.subVectors(i,t),Mo.subVectors(e,t);const a=hn.dot(hn),o=hn.dot(On),c=hn.dot(Mo),l=On.dot(On),u=On.dot(Mo),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(l*c-o*u)*h,_=(a*u-o*c)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Bn.x),c.addScaledVector(a,Bn.y),c.addScaledVector(o,Bn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return bo.setScalar(0),To.setScalar(0),wo.setScalar(0),bo.fromBufferAttribute(e,t),To.fromBufferAttribute(e,i),wo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(bo,s.x),a.addScaledVector(To,s.y),a.addScaledVector(wo,s.z),a}static isFrontFacing(e,t,i,r){return hn.subVectors(i,t),On.subVectors(e,t),hn.cross(On).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),hn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return pn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Tr.subVectors(r,i),wr.subVectors(s,i),So.subVectors(e,i);const c=Tr.dot(So),l=wr.dot(So);if(c<=0&&l<=0)return t.copy(i);Eo.subVectors(e,r);const u=Tr.dot(Eo),f=wr.dot(Eo);if(u>=0&&f<=u)return t.copy(r);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(Tr,a);yo.subVectors(e,s);const m=Tr.dot(yo),_=wr.dot(yo);if(_>=0&&m<=_)return t.copy(s);const x=m*l-c*_;if(x<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(i).addScaledVector(wr,o);const p=u*_-m*f;if(p<=0&&f-u>=0&&m-_>=0)return hu.subVectors(s,r),o=(f-u)/(f-u+(m-_)),t.copy(r).addScaledVector(hu,o);const d=1/(p+x+h);return a=x*d,o=h*d,t.copy(i).addScaledVector(Tr,a).addScaledVector(wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Hs{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,dn):dn.fromBufferAttribute(s,a),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),js.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),js.copy(i.boundingBox)),js.applyMatrix4(e.matrixWorld),this.union(js)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cs),Zs.subVectors(this.max,cs),Ar.subVectors(e.a,cs),Rr.subVectors(e.b,cs),Cr.subVectors(e.c,cs),ci.subVectors(Rr,Ar),ui.subVectors(Cr,Rr),Oi.subVectors(Ar,Cr);let t=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-Oi.z,Oi.y,ci.z,0,-ci.x,ui.z,0,-ui.x,Oi.z,0,-Oi.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-Oi.y,Oi.x,0];return!Ao(t,Ar,Rr,Cr,Zs)||(t=[1,0,0,0,1,0,0,0,1],!Ao(t,Ar,Rr,Cr,Zs))?!1:(Ks.crossVectors(ci,ui),t=[Ks.x,Ks.y,Ks.z],Ao(t,Ar,Rr,Cr,Zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zn=[new U,new U,new U,new U,new U,new U,new U,new U],dn=new U,js=new Hs,Ar=new U,Rr=new U,Cr=new U,ci=new U,ui=new U,Oi=new U,cs=new U,Zs=new U,Ks=new U,Bi=new U;function Ao(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Bi.fromArray(n,s);const o=r.x*Math.abs(Bi.x)+r.y*Math.abs(Bi.y)+r.z*Math.abs(Bi.z),c=e.dot(Bi),l=t.dot(Bi),u=i.dot(Bi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const yt=new U,Js=new We;let Pp=0;class Pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kc,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Js.fromBufferAttribute(this,t),Js.applyMatrix3(e),this.setXY(t,Js.x,Js.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=os(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=os(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=os(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=os(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=os(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),r=Yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kc&&(e.usage=this.usage),e}}class cd extends Pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ud extends Pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class qn extends Pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Lp=new Hs,us=new U,Ro=new U;class fc{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Lp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;us.subVectors(e,this.center);const t=us.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(us,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(us.copy(e.center).add(Ro)),this.expandByPoint(us.copy(e.center).sub(Ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ip=0;const sn=new ht,Co=new Ht,Pr=new U,nn=new Hs,hs=new Hs,Lt=new U;class ei extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hp(e)?ud:cd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,i){return sn.makeTranslation(e,t,i),this.applyMatrix4(sn),this}scale(e,t,i){return sn.makeScale(e,t,i),this.applyMatrix4(sn),this}lookAt(e){return Co.lookAt(e),Co.updateMatrix(),this.applyMatrix4(Co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(nn.min,hs.min),nn.expandByPoint(Lt),Lt.addVectors(nn.max,hs.max),nn.expandByPoint(Lt)):(nn.expandByPoint(hs.min),nn.expandByPoint(hs.max))}nn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Lt.fromBufferAttribute(o,l),c&&(Pr.fromBufferAttribute(e,l),Lt.add(Pr)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let M=0;M<i.count;M++)o[M]=new U,c[M]=new U;const l=new U,u=new U,f=new U,h=new We,m=new We,_=new We,x=new U,p=new U;function d(M,T,te){l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,te),h.fromBufferAttribute(s,M),m.fromBufferAttribute(s,T),_.fromBufferAttribute(s,te),u.sub(l),f.sub(l),m.sub(h),_.sub(h);const L=1/(m.x*_.y-_.x*m.y);isFinite(L)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(L),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(L),o[M].add(x),o[T].add(x),o[te].add(x),c[M].add(p),c[T].add(p),c[te].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let M=0,T=v.length;M<T;++M){const te=v[M],L=te.start,$=te.count;for(let X=L,Z=L+$;X<Z;X+=3)d(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const y=new U,w=new U,I=new U,A=new U;function P(M){I.fromBufferAttribute(r,M),A.copy(I);const T=o[M];y.copy(T),y.sub(I.multiplyScalar(I.dot(T))).normalize(),w.crossVectors(A,T);const L=w.dot(c[M])<0?-1:1;a.setXYZW(M,y.x,y.y,y.z,L)}for(let M=0,T=v.length;M<T;++M){const te=v[M],L=te.start,$=te.count;for(let X=L,Z=L+$;X<Z;X+=3)P(e.getX(X+0)),P(e.getX(X+1)),P(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new U,s=new U,a=new U,o=new U,c=new U,l=new U,u=new U,f=new U;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),o.add(u),c.add(u),l.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let m=0,_=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*u;for(let d=0;d<u;d++)h[_++]=l[m++]}return new Pn(h,u,f)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ei,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],m=e(h,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const m=l[f];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Dp=0;class Gs extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=zr,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ko,this.blendDst=Jo,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zr&&(i.blending=this.blending),this.side!==gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ko&&(i.blendSrc=this.blendSrc),this.blendDst!==Jo&&(i.blendDst=this.blendDst),this.blendEquation!==Vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const kn=new U,Po=new U,Qs=new U,hi=new U,Lo=new U,ea=new U,Io=new U;class pc{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Po.copy(e).add(t).multiplyScalar(.5),Qs.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(Po);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Qs),o=hi.dot(this.direction),c=-hi.dot(Qs),l=hi.lengthSq(),u=Math.abs(1-a*a);let f,h,m,_;if(u>0)if(f=a*c-o,h=a*o-c,_=s*u,f>=0)if(h>=-_)if(h<=_){const x=1/u;f*=x,h*=x,m=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*c)+l;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+h*(h+2*c)+l):h<=_?(f=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+h*(h+2*c)+l);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Po).addScaledVector(Qs,h),m}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const i=kn.dot(this.direction),r=kn.dot(kn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,i,r,s){Lo.subVectors(t,e),ea.subVectors(i,e),Io.crossVectors(Lo,ea);let a=this.direction.dot(Io),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hi.subVectors(this.origin,e);const c=o*this.direction.dot(ea.crossVectors(hi,ea));if(c<0)return null;const l=o*this.direction.dot(Lo.cross(hi));if(l<0||c+l>a)return null;const u=-o*hi.dot(Io);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hd extends Gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ft,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const du=new ht,zi=new pc,ta=new fc,fu=new U,na=new U,ia=new U,ra=new U,Do=new U,sa=new U,pu=new U,aa=new U;class dt extends Ht{constructor(e=new ei,t=new hd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){sa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(Do.fromBufferAttribute(f,e),a?sa.addScaledVector(Do,u):sa.addScaledVector(Do.sub(t),u))}t.add(sa)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(s),zi.copy(e.ray).recast(e.near),!(ta.containsPoint(zi.origin)===!1&&(zi.intersectSphere(ta,fu)===null||zi.origin.distanceToSquared(fu)>(e.far-e.near)**2))&&(du.copy(s).invert(),zi.copy(e.ray).applyMatrix4(du),!(i.boundingBox!==null&&zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const p=h[_],d=a[p.materialIndex],v=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let w=v,I=y;w<I;w+=3){const A=o.getX(w),P=o.getX(w+1),M=o.getX(w+2);r=oa(this,d,e,i,l,u,f,A,P,M),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=_,d=x;p<d;p+=3){const v=o.getX(p),y=o.getX(p+1),w=o.getX(p+2);r=oa(this,a,e,i,l,u,f,v,y,w),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const p=h[_],d=a[p.materialIndex],v=Math.max(p.start,m.start),y=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let w=v,I=y;w<I;w+=3){const A=w,P=w+1,M=w+2;r=oa(this,d,e,i,l,u,f,A,P,M),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=_,d=x;p<d;p+=3){const v=p,y=p+1,w=p+2;r=oa(this,a,e,i,l,u,f,v,y,w),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Up(n,e,t,i,r,s,a,o){let c;if(e.side===Jt?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===gi,o),c===null)return null;aa.copy(o),aa.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(aa);return l<t.near||l>t.far?null:{distance:l,point:aa.clone(),object:n}}function oa(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,na),n.getVertexPosition(c,ia),n.getVertexPosition(l,ra);const u=Up(n,e,t,i,na,ia,ra,pu);if(u){const f=new U;pn.getBarycoord(pu,na,ia,ra,f),r&&(u.uv=pn.getInterpolatedAttribute(r,o,c,l,f,new We)),s&&(u.uv1=pn.getInterpolatedAttribute(s,o,c,l,f,new We)),a&&(u.normal=pn.getInterpolatedAttribute(a,o,c,l,f,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new U,materialIndex:0};pn.getNormal(na,ia,ra,h.normal),u.face=h,u.barycoord=f}return u}class Fp extends kt{constructor(e=null,t=1,i=1,r,s,a,o,c,l=Dt,u=Dt,f,h){super(null,a,o,c,l,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Uo=new U,Np=new U,Op=new Ye;class fi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Uo.subVectors(i,t).cross(Np.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Uo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Op.getNormalMatrix(e),r=this.coplanarPoint(Uo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new fc,Bp=new We(.5,.5),la=new U;class mc{constructor(e=new fi,t=new fi,i=new fi,r=new fi,s=new fi,a=new fi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=An,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],f=s[5],h=s[6],m=s[7],_=s[8],x=s[9],p=s[10],d=s[11],v=s[12],y=s[13],w=s[14],I=s[15];if(r[0].setComponents(l-a,m-u,d-_,I-v).normalize(),r[1].setComponents(l+a,m+u,d+_,I+v).normalize(),r[2].setComponents(l+o,m+f,d+x,I+y).normalize(),r[3].setComponents(l-o,m-f,d-x,I-y).normalize(),i)r[4].setComponents(c,h,p,w).normalize(),r[5].setComponents(l-c,m-h,d-p,I-w).normalize();else if(r[4].setComponents(l-c,m-h,d-p,I-w).normalize(),t===An)r[5].setComponents(l+c,m+h,d+p,I+w).normalize();else if(t===Rs)r[5].setComponents(c,h,p,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){ki.center.set(0,0,0);const t=Bp.distanceTo(e.center);return ki.radius=.7071067811865476+t,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(la.x=r.normal.x>0?e.max.x:e.min.x,la.y=r.normal.y>0?e.max.y:e.min.y,la.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dd extends kt{constructor(e=[],t=Zi,i,r,s,a,o,c,l,u){super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hr extends kt{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cs extends kt{constructor(e,t,i=Ln,r,s,a,o=Dt,c=Dt,l,u=Kn,f=1){if(u!==Kn&&u!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class zp extends Cs{constructor(e,t=Ln,i=Zi,r,s,a=Dt,o=Dt,c,l=Kn){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class fd extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Jr extends ei{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new qn(l,3)),this.setAttribute("normal",new qn(u,3)),this.setAttribute("uv",new qn(f,2));function _(x,p,d,v,y,w,I,A,P,M,T){const te=w/P,L=I/M,$=w/2,X=I/2,Z=A/2,H=P+1,z=M+1;let B=0,he=0;const ce=new U;for(let xe=0;xe<z;xe++){const fe=xe*L-X;for(let _e=0;_e<H;_e++){const re=_e*te-$;ce[x]=re*v,ce[p]=fe*y,ce[d]=Z,l.push(ce.x,ce.y,ce.z),ce[x]=0,ce[p]=0,ce[d]=A>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(_e/P),f.push(1-xe/M),B+=1}}for(let xe=0;xe<M;xe++)for(let fe=0;fe<P;fe++){const _e=h+fe+H*xe,re=h+fe+H*(xe+1),ue=h+(fe+1)+H*(xe+1),oe=h+(fe+1)+H*xe;c.push(_e,re,oe),c.push(re,ue,oe),he+=6}o.addGroup(m,he,T),m+=he,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class $a extends ei{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,f=e/o,h=t/c,m=[],_=[],x=[],p=[];for(let d=0;d<u;d++){const v=d*h-a;for(let y=0;y<l;y++){const w=y*f-s;_.push(w,-v,0),x.push(0,0,1),p.push(y/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<o;v++){const y=v+l*d,w=v+l*(d+1),I=v+1+l*(d+1),A=v+1+l*d;m.push(y,w,A),m.push(w,I,A)}this.setIndex(m),this.setAttribute("position",new qn(_,3)),this.setAttribute("normal",new qn(x,3)),this.setAttribute("uv",new qn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.width,e.height,e.widthSegments,e.heightSegments)}}function qr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Xt(n){const e={};for(let t=0;t<n.length;t++){const i=qr(n[t]);for(const r in i)e[r]=i[r]}return e}function kp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function pd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Hp={clone:qr,merge:Xt};var Gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gp,this.fragmentShader=Vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qr(e.uniforms),this.uniformsGroups=kp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Wp extends In{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qt extends Gs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sd,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ft,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xp extends Gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ip,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $p extends Gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class md extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Fo=new ht,mu=new U,gu=new U;class Yp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mc,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;mu.setFromMatrixPosition(e.matrixWorld),t.position.copy(mu),gu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gu),t.updateMatrixWorld(),Fo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Rs||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ca=new U,ua=new _i,xn=new U;class gd extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ca,ua,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,ua,xn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ca,ua,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,ua,xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const di=new U,_u=new We,xu=new We;class Tt extends gd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zl*2*Math.atan(Math.tan(Ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,_u,xu),t.subVectors(xu,_u)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ea*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class gc extends gd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class qp extends Yp{constructor(){super(new gc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ft extends md{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new qp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ti extends md{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Lr=-90,Ir=1;class jp extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tt(Lr,Ir,e,t);r.layers=this.layers,this.add(r);const s=new Tt(Lr,Ir,e,t);s.layers=this.layers,this.add(s);const a=new Tt(Lr,Ir,e,t);a.layers=this.layers,this.add(a);const o=new Tt(Lr,Ir,e,t);o.layers=this.layers,this.add(o);const c=new Tt(Lr,Ir,e,t);c.layers=this.layers,this.add(c);const l=new Tt(Lr,Ir,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===An)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Rs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Zp extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const vu=new ht;class _c{constructor(e,t,i=0,r=1/0){this.ray=new pc(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new dc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ke("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return vu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vu),this}intersectObject(e,t=!0,i=[]){return kl(e,this,i,t),i.sort(Mu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)kl(e[r],this,i,t);return i.sort(Mu),i}}function Mu(n,e){return n.distance-e.distance}function kl(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)kl(s[a],e,t,!0)}}class Su{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Kp extends ur{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ve("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Eu(n,e,t,i){const r=Jp(i);switch(t){case nd:return n*e;case rd:return n*e/r.components*r.byteLength;case ac:return n*e/r.components*r.byteLength;case $r:return n*e*2/r.components*r.byteLength;case oc:return n*e*2/r.components*r.byteLength;case id:return n*e*3/r.components*r.byteLength;case mn:return n*e*4/r.components*r.byteLength;case lc:return n*e*4/r.components*r.byteLength;case xa:case va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ma:case Sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ll:case ul:return Math.max(n,16)*Math.max(e,8)/4;case ol:case cl:return Math.max(n,8)*Math.max(e,8)/2;case hl:case dl:case pl:case ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fl:case gl:case _l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case El:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case yl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case bl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case wl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Al:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Pl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ll:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Il:case Dl:case Ul:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Fl:case Nl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ol:case Bl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jp(n){switch(n){case rn:case Jh:return{byteLength:1,components:1};case ws:case Qh:case Zn:return{byteLength:2,components:1};case rc:case sc:return{byteLength:2,components:4};case Ln:case ic:case wn:return{byteLength:4,components:1};case ed:case td:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nc}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _d(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Qp(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const u=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,u);else{f.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<f.length;m++){const _=f[h],x=f[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,f[h]=x)}f.length=h+1;for(let m=0,_=f.length;m<_;m++){const x=f[m];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var em=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,im=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,am=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,om=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,cm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,um=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ym=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Am=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Im=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,km=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$m=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ym=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Km=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,e0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,t0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,n0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,a0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,c0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,f0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,g0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,x0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,v0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,E0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,w0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,C0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,P0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,I0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,N0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,O0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,B0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,H0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,V0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,q0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,J0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Q0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ng=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ag=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,og=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ig=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:em,alphahash_pars_fragment:tm,alphamap_fragment:nm,alphamap_pars_fragment:im,alphatest_fragment:rm,alphatest_pars_fragment:sm,aomap_fragment:am,aomap_pars_fragment:om,batching_pars_vertex:lm,batching_vertex:cm,begin_vertex:um,beginnormal_vertex:hm,bsdfs:dm,iridescence_fragment:fm,bumpmap_pars_fragment:pm,clipping_planes_fragment:mm,clipping_planes_pars_fragment:gm,clipping_planes_pars_vertex:_m,clipping_planes_vertex:xm,color_fragment:vm,color_pars_fragment:Mm,color_pars_vertex:Sm,color_vertex:Em,common:ym,cube_uv_reflection_fragment:bm,defaultnormal_vertex:Tm,displacementmap_pars_vertex:wm,displacementmap_vertex:Am,emissivemap_fragment:Rm,emissivemap_pars_fragment:Cm,colorspace_fragment:Pm,colorspace_pars_fragment:Lm,envmap_fragment:Im,envmap_common_pars_fragment:Dm,envmap_pars_fragment:Um,envmap_pars_vertex:Fm,envmap_physical_pars_fragment:$m,envmap_vertex:Nm,fog_vertex:Om,fog_pars_vertex:Bm,fog_fragment:zm,fog_pars_fragment:km,gradientmap_pars_fragment:Hm,lightmap_pars_fragment:Gm,lights_lambert_fragment:Vm,lights_lambert_pars_fragment:Wm,lights_pars_begin:Xm,lights_toon_fragment:Ym,lights_toon_pars_fragment:qm,lights_phong_fragment:jm,lights_phong_pars_fragment:Zm,lights_physical_fragment:Km,lights_physical_pars_fragment:Jm,lights_fragment_begin:Qm,lights_fragment_maps:e0,lights_fragment_end:t0,logdepthbuf_fragment:n0,logdepthbuf_pars_fragment:i0,logdepthbuf_pars_vertex:r0,logdepthbuf_vertex:s0,map_fragment:a0,map_pars_fragment:o0,map_particle_fragment:l0,map_particle_pars_fragment:c0,metalnessmap_fragment:u0,metalnessmap_pars_fragment:h0,morphinstance_vertex:d0,morphcolor_vertex:f0,morphnormal_vertex:p0,morphtarget_pars_vertex:m0,morphtarget_vertex:g0,normal_fragment_begin:_0,normal_fragment_maps:x0,normal_pars_fragment:v0,normal_pars_vertex:M0,normal_vertex:S0,normalmap_pars_fragment:E0,clearcoat_normal_fragment_begin:y0,clearcoat_normal_fragment_maps:b0,clearcoat_pars_fragment:T0,iridescence_pars_fragment:w0,opaque_fragment:A0,packing:R0,premultiplied_alpha_fragment:C0,project_vertex:P0,dithering_fragment:L0,dithering_pars_fragment:I0,roughnessmap_fragment:D0,roughnessmap_pars_fragment:U0,shadowmap_pars_fragment:F0,shadowmap_pars_vertex:N0,shadowmap_vertex:O0,shadowmask_pars_fragment:B0,skinbase_vertex:z0,skinning_pars_vertex:k0,skinning_vertex:H0,skinnormal_vertex:G0,specularmap_fragment:V0,specularmap_pars_fragment:W0,tonemapping_fragment:X0,tonemapping_pars_fragment:$0,transmission_fragment:Y0,transmission_pars_fragment:q0,uv_pars_fragment:j0,uv_pars_vertex:Z0,uv_vertex:K0,worldpos_vertex:J0,background_vert:Q0,background_frag:eg,backgroundCube_vert:tg,backgroundCube_frag:ng,cube_vert:ig,cube_frag:rg,depth_vert:sg,depth_frag:ag,distance_vert:og,distance_frag:lg,equirect_vert:cg,equirect_frag:ug,linedashed_vert:hg,linedashed_frag:dg,meshbasic_vert:fg,meshbasic_frag:pg,meshlambert_vert:mg,meshlambert_frag:gg,meshmatcap_vert:_g,meshmatcap_frag:xg,meshnormal_vert:vg,meshnormal_frag:Mg,meshphong_vert:Sg,meshphong_frag:Eg,meshphysical_vert:yg,meshphysical_frag:bg,meshtoon_vert:Tg,meshtoon_frag:wg,points_vert:Ag,points_frag:Rg,shadow_vert:Cg,shadow_frag:Pg,sprite_vert:Lg,sprite_frag:Ig},ye={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Mn={basic:{uniforms:Xt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Xt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Xt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Xt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Xt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new nt(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Xt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Xt([ye.points,ye.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Xt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Xt([ye.common,ye.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Xt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Xt([ye.sprite,ye.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:Xt([ye.common,ye.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:Xt([ye.lights,ye.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Mn.physical={uniforms:Xt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const ha={r:0,b:0,g:0},Hi=new Ft,Dg=new ht;function Ug(n,e,t,i,r,s){const a=new nt(0);let o=r===!0?0:1,c,l,u=null,f=0,h=null;function m(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const w=v.backgroundBlurriness>0;y=e.get(y,w)}return y}function _(v){let y=!1;const w=m(v);w===null?p(a,o):w&&w.isColor&&(p(w,1),y=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,s):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(v,y){const w=m(y);w&&(w.isCubeTexture||w.mapping===Xa)?(l===void 0&&(l=new dt(new Jr(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:qr(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(I,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Hi.copy(y.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),l.material.uniforms.envMap.value=w,l.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Dg.makeRotationFromEuler(Hi)),l.material.toneMapped=Je.getTransfer(w.colorSpace)!==rt,(u!==w||f!==w.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=w,f=w.version,h=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new dt(new $a(2,2),new In({name:"BackgroundMaterial",uniforms:qr(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Je.getTransfer(w.colorSpace)!==rt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=w,f=w.version,h=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,y){v.getRGB(ha,pd(n)),t.buffers.color.setClear(ha.r,ha.g,ha.b,y,s)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),o=y,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:_,addToRenderList:x,dispose:d}}function Fg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(L,$,X,Z,H){let z=!1;const B=f(L,Z,X,$);s!==B&&(s=B,l(s.object)),z=m(L,Z,X,H),z&&_(L,Z,X,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,w(L,$,X,Z),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return n.createVertexArray()}function l(L){return n.bindVertexArray(L)}function u(L){return n.deleteVertexArray(L)}function f(L,$,X,Z){const H=Z.wireframe===!0;let z=i[$.id];z===void 0&&(z={},i[$.id]=z);const B=L.isInstancedMesh===!0?L.id:0;let he=z[B];he===void 0&&(he={},z[B]=he);let ce=he[X.id];ce===void 0&&(ce={},he[X.id]=ce);let xe=ce[H];return xe===void 0&&(xe=h(c()),ce[H]=xe),xe}function h(L){const $=[],X=[],Z=[];for(let H=0;H<t;H++)$[H]=0,X[H]=0,Z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:X,attributeDivisors:Z,object:L,attributes:{},index:null}}function m(L,$,X,Z){const H=s.attributes,z=$.attributes;let B=0;const he=X.getAttributes();for(const ce in he)if(he[ce].location>=0){const fe=H[ce];let _e=z[ce];if(_e===void 0&&(ce==="instanceMatrix"&&L.instanceMatrix&&(_e=L.instanceMatrix),ce==="instanceColor"&&L.instanceColor&&(_e=L.instanceColor)),fe===void 0||fe.attribute!==_e||_e&&fe.data!==_e.data)return!0;B++}return s.attributesNum!==B||s.index!==Z}function _(L,$,X,Z){const H={},z=$.attributes;let B=0;const he=X.getAttributes();for(const ce in he)if(he[ce].location>=0){let fe=z[ce];fe===void 0&&(ce==="instanceMatrix"&&L.instanceMatrix&&(fe=L.instanceMatrix),ce==="instanceColor"&&L.instanceColor&&(fe=L.instanceColor));const _e={};_e.attribute=fe,fe&&fe.data&&(_e.data=fe.data),H[ce]=_e,B++}s.attributes=H,s.attributesNum=B,s.index=Z}function x(){const L=s.newAttributes;for(let $=0,X=L.length;$<X;$++)L[$]=0}function p(L){d(L,0)}function d(L,$){const X=s.newAttributes,Z=s.enabledAttributes,H=s.attributeDivisors;X[L]=1,Z[L]===0&&(n.enableVertexAttribArray(L),Z[L]=1),H[L]!==$&&(n.vertexAttribDivisor(L,$),H[L]=$)}function v(){const L=s.newAttributes,$=s.enabledAttributes;for(let X=0,Z=$.length;X<Z;X++)$[X]!==L[X]&&(n.disableVertexAttribArray(X),$[X]=0)}function y(L,$,X,Z,H,z,B){B===!0?n.vertexAttribIPointer(L,$,X,H,z):n.vertexAttribPointer(L,$,X,Z,H,z)}function w(L,$,X,Z){x();const H=Z.attributes,z=X.getAttributes(),B=$.defaultAttributeValues;for(const he in z){const ce=z[he];if(ce.location>=0){let xe=H[he];if(xe===void 0&&(he==="instanceMatrix"&&L.instanceMatrix&&(xe=L.instanceMatrix),he==="instanceColor"&&L.instanceColor&&(xe=L.instanceColor)),xe!==void 0){const fe=xe.normalized,_e=xe.itemSize,re=e.get(xe);if(re===void 0)continue;const ue=re.buffer,oe=re.type,F=re.bytesPerElement,K=oe===n.INT||oe===n.UNSIGNED_INT||xe.gpuType===ic;if(xe.isInterleavedBufferAttribute){const q=xe.data,Se=q.stride,Me=xe.offset;if(q.isInstancedInterleavedBuffer){for(let pe=0;pe<ce.locationSize;pe++)d(ce.location+pe,q.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let pe=0;pe<ce.locationSize;pe++)p(ce.location+pe);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let pe=0;pe<ce.locationSize;pe++)y(ce.location+pe,_e/ce.locationSize,oe,fe,Se*F,(Me+_e/ce.locationSize*pe)*F,K)}else{if(xe.isInstancedBufferAttribute){for(let q=0;q<ce.locationSize;q++)d(ce.location+q,xe.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let q=0;q<ce.locationSize;q++)p(ce.location+q);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let q=0;q<ce.locationSize;q++)y(ce.location+q,_e/ce.locationSize,oe,fe,_e*F,_e/ce.locationSize*q*F,K)}}else if(B!==void 0){const fe=B[he];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(ce.location,fe);break;case 3:n.vertexAttrib3fv(ce.location,fe);break;case 4:n.vertexAttrib4fv(ce.location,fe);break;default:n.vertexAttrib1fv(ce.location,fe)}}}}v()}function I(){T();for(const L in i){const $=i[L];for(const X in $){const Z=$[X];for(const H in Z){const z=Z[H];for(const B in z)u(z[B].object),delete z[B];delete Z[H]}}delete i[L]}}function A(L){if(i[L.id]===void 0)return;const $=i[L.id];for(const X in $){const Z=$[X];for(const H in Z){const z=Z[H];for(const B in z)u(z[B].object),delete z[B];delete Z[H]}}delete i[L.id]}function P(L){for(const $ in i){const X=i[$];for(const Z in X){const H=X[Z];if(H[L.id]===void 0)continue;const z=H[L.id];for(const B in z)u(z[B].object),delete z[B];delete H[L.id]}}}function M(L){for(const $ in i){const X=i[$],Z=L.isInstancedMesh===!0?L.id:0,H=X[Z];if(H!==void 0){for(const z in H){const B=H[z];for(const he in B)u(B[he].object),delete B[he];delete H[z]}delete X[Z],Object.keys(X).length===0&&delete i[$]}}}function T(){te(),a=!0,s!==r&&(s=r,l(s.object))}function te(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:te,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfObject:M,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function Ng(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,f){f!==0&&(n.drawArraysInstanced(i,l,u,f),t.update(u,i,f))}function o(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let m=0;for(let _=0;_<f;_++)m+=u[_];t.update(m,i,1)}function c(l,u,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)a(l[_],u[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=u[x]*h[x];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Og(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==mn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const M=P===Zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==rn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==wn&&!M)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ve("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:w,maxSamples:I,samples:A}}function Bg(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new fi,o=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!p)s?u(null):l();else{const v=s?0:i,y=v*4;let w=d.clippingState||null;c.value=w,w=u(_,h,y,m);for(let I=0;I!==y;++I)w[I]=t[I];d.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,_){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=c.value,_!==!0||p===null){const d=m+x*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<d)&&(p=new Float32Array(d));for(let y=0,w=m;y!==x;++y,w+=4)a.copy(f[y]).applyMatrix4(v,o),a.normal.toArray(p,w),p[w+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}const mi=4,yu=[.125,.215,.35,.446,.526,.582],Wi=20,zg=256,ds=new gc,bu=new nt;let No=null,Oo=0,Bo=0,zo=!1;const kg=new U;class Tu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=kg}=s;No=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(No,Oo,Bo),this._renderer.xr.enabled=zo,e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zi||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),No=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Zn,format:mn,colorSpace:Yr,depthBuffer:!1},r=wu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wu(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Hg(s)),this._blurMaterial=Vg(s,e,t),this._ggxMaterial=Gg(s,e,t)}return r}_compileMaterial(e){const t=new dt(new ei,e);this._renderer.compile(t,ds)}_sceneToCubeUV(e,t,i,r,s){const c=new Tt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,m=f.toneMapping;f.getClearColor(bu),f.toneMapping=Rn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new dt(new Jr,new hd({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,p=x.material;let d=!1;const v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,d=!0):(p.color.copy(bu),d=!0);for(let y=0;y<6;y++){const w=y%3;w===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[y],s.y,s.z)):w===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[y]));const I=this._cubeSize;Dr(r,w*I,y>2?I:0,I,I),f.setRenderTarget(r),d&&f.render(x,c),f.render(e,c)}f.toneMapping=m,f.autoClear=h,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Zi||e.mapping===Xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Au());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Dr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,ds)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=0+l*1.25,m=f*h,{_lodMax:_}=this,x=this._sizeLods[i],p=3*x*(i>_-mi?i-_+mi:0),d=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=_-t,Dr(s,p,d,3*x,2*x),r.setRenderTarget(s),r.render(o,ds),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=_-i,Dr(e,p,d,3*x,2*x),r.setRenderTarget(e),r.render(o,ds)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=l;const h=l.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Wi-1),x=s/_,p=isFinite(s)?1+Math.floor(u*x):Wi;p>Wi&&Ve(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Wi}`);const d=[];let v=0;for(let P=0;P<Wi;++P){const M=P/x,T=Math.exp(-M*M/2);d.push(T),P===0?v+=T:P<p&&(v+=2*T)}for(let P=0;P<d.length;P++)d[P]=d[P]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-i;const w=this._sizeLods[r],I=3*w*(r>y-mi?r-y+mi:0),A=4*(this._cubeSize-w);Dr(t,I,A,3*w,2*w),c.setRenderTarget(t),c.render(f,ds)}}function Hg(n){const e=[],t=[],i=[];let r=n;const s=n-mi+1+yu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-mi?c=yu[a-n+mi-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,x=3,p=2,d=1,v=new Float32Array(x*_*m),y=new Float32Array(p*_*m),w=new Float32Array(d*_*m);for(let A=0;A<m;A++){const P=A%3*2/3-1,M=A>2?0:-1,T=[P,M,0,P+2/3,M,0,P+2/3,M+1,0,P,M,0,P+2/3,M+1,0,P,M+1,0];v.set(T,x*_*A),y.set(h,p*_*A);const te=[A,A,A,A,A,A];w.set(te,d*_*A)}const I=new ei;I.setAttribute("position",new Pn(v,x)),I.setAttribute("uv",new Pn(y,p)),I.setAttribute("faceIndex",new Pn(w,d)),i.push(new dt(I,null)),r>mi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function wu(n,e,t){const i=new Cn(n,e,t);return i.texture.mapping=Xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Dr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Gg(n,e,t){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ya(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Vg(n,e,t){const i=new Float32Array(Wi),r=new U(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Au(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Ru(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Ya(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class xd extends Cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new dd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Jr(5,5,5),s=new In({name:"CubemapFromEquirect",uniforms:qr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:$n});s.uniforms.tEquirect.value=t;const a=new dt(r,s),o=t.minFilter;return t.minFilter===qi&&(t.minFilter=zt),new jp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function Wg(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,m=!1){return h==null?null:m?a(h):s(h)}function s(h){if(h&&h.isTexture){const m=h.mapping;if(m===lo||m===co)if(e.has(h)){const _=e.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const x=new xd(_.height);return x.fromEquirectangularTexture(n,h),e.set(h,x),h.addEventListener("dispose",l),o(x.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const m=h.mapping,_=m===lo||m===co,x=m===Zi||m===Xr;if(_||x){let p=t.get(h);const d=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new Tu(n)),p=_?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const v=h.image;return _&&v&&v.height>0||x&&v&&c(v)?(i===null&&(i=new Tu(n)),p=_?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,m){return m===lo?h.mapping=Zi:m===co&&(h.mapping=Xr),h}function c(h){let m=0;const _=6;for(let x=0;x<_;x++)h[x]!==void 0&&m++;return m===_}function l(h){const m=h.target;m.removeEventListener("dispose",l);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function u(h){const m=h.target;m.removeEventListener("dispose",u);const _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Xg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ca("WebGLRenderer: "+i+" extension not supported."),r}}}function $g(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const m in h)e.update(h[m],n.ARRAY_BUFFER)}function l(f){const h=[],m=f.index,_=f.attributes.position;let x=0;if(_===void 0)return;if(m!==null){const v=m.array;x=m.version;for(let y=0,w=v.length;y<w;y+=3){const I=v[y+0],A=v[y+1],P=v[y+2];h.push(I,A,A,P,P,I)}}else{const v=_.array;x=_.version;for(let y=0,w=v.length/3-1;y<w;y+=3){const I=y+0,A=y+1,P=y+2;h.push(I,A,A,P,P,I)}}const p=new(_.count>=65535?ud:cd)(h,1);p.version=x;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Yg(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,m){n.drawElements(i,m,s,h*a),t.update(m,i,1)}function l(h,m,_){_!==0&&(n.drawElementsInstanced(i,m,s,h*a,_),t.update(m,i,_))}function u(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,_);let p=0;for(let d=0;d<_;d++)p+=m[d];t.update(p,i,1)}function f(h,m,_,x){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)l(h[d]/a,m[d],x[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,x,0,_);let d=0;for(let v=0;v<_;v++)d+=m[v]*x[v];t.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function qg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Ke("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function jg(n,e,t){const i=new WeakMap,r=new Mt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let T=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;m===!0&&(y=1),_===!0&&(y=2),x===!0&&(y=3);let w=o.attributes.position.count*y,I=1;w>e.maxTextureSize&&(I=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const A=new Float32Array(w*I*4*f),P=new od(A,w,I,f);P.type=wn,P.needsUpdate=!0;const M=y*4;for(let te=0;te<f;te++){const L=p[te],$=d[te],X=v[te],Z=w*I*4*te;for(let H=0;H<L.count;H++){const z=H*M;m===!0&&(r.fromBufferAttribute(L,H),A[Z+z+0]=r.x,A[Z+z+1]=r.y,A[Z+z+2]=r.z,A[Z+z+3]=0),_===!0&&(r.fromBufferAttribute($,H),A[Z+z+4]=r.x,A[Z+z+5]=r.y,A[Z+z+6]=r.z,A[Z+z+7]=0),x===!0&&(r.fromBufferAttribute(X,H),A[Z+z+8]=r.x,A[Z+z+9]=r.y,A[Z+z+10]=r.z,A[Z+z+11]=X.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new We(w,I)},i.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let x=0;x<l.length;x++)m+=l[x];const _=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Zg(n,e,t,i,r){let s=new WeakMap;function a(l){const u=r.render.frame,f=l.geometry,h=e.get(l,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==u&&(m.update(),s.set(m,u))}return h}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Kg={[Wh]:"LINEAR_TONE_MAPPING",[Xh]:"REINHARD_TONE_MAPPING",[$h]:"CINEON_TONE_MAPPING",[Yh]:"ACES_FILMIC_TONE_MAPPING",[jh]:"AGX_TONE_MAPPING",[Zh]:"NEUTRAL_TONE_MAPPING",[qh]:"CUSTOM_TONE_MAPPING"};function Jg(n,e,t,i,r){const s=new Cn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new Cn(e,t,{type:Zn,depthBuffer:!1,stencilBuffer:!1}),o=new ei;o.setAttribute("position",new qn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new qn([0,2,0,0,2,0],2));const c=new Wp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new dt(o,c),u=new gc(-1,1,1,-1,0,1);let f=null,h=null,m=!1,_,x=null,p=[],d=!1;this.setSize=function(v,y){s.setSize(v,y),a.setSize(v,y);for(let w=0;w<p.length;w++){const I=p[w];I.setSize&&I.setSize(v,y)}},this.setEffects=function(v){p=v,d=p.length>0&&p[0].isRenderPass===!0;const y=s.width,w=s.height;for(let I=0;I<p.length;I++){const A=p[I];A.setSize&&A.setSize(y,w)}},this.begin=function(v,y){if(m||v.toneMapping===Rn&&p.length===0)return!1;if(x=y,y!==null){const w=y.width,I=y.height;(s.width!==w||s.height!==I)&&this.setSize(w,I)}return d===!1&&v.setRenderTarget(s),_=v.toneMapping,v.toneMapping=Rn,!0},this.hasRenderPass=function(){return d},this.end=function(v,y){v.toneMapping=_,m=!0;let w=s,I=a;for(let A=0;A<p.length;A++){const P=p[A];if(P.enabled!==!1&&(P.render(v,I,w,y),P.needsSwap!==!1)){const M=w;w=I,I=M}}if(f!==v.outputColorSpace||h!==v.toneMapping){f=v.outputColorSpace,h=v.toneMapping,c.defines={},Je.getTransfer(f)===rt&&(c.defines.SRGB_TRANSFER="");const A=Kg[h];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(x),v.render(l,u),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const vd=new kt,Hl=new Cs(1,1),Md=new od,Sd=new Ep,Ed=new dd,Cu=[],Pu=[],Lu=new Float32Array(16),Iu=new Float32Array(9),Du=new Float32Array(4);function Qr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Cu[r];if(s===void 0&&(s=new Float32Array(r),Cu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qa(n,e){let t=Pu[e];t===void 0&&(t=new Int32Array(e),Pu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Qg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function e_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function t_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function n_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function i_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,i))return;Du.set(i),n.uniformMatrix2fv(this.addr,!1,Du),Rt(t,i)}}function r_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,i))return;Iu.set(i),n.uniformMatrix3fv(this.addr,!1,Iu),Rt(t,i)}}function s_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,i))return;Lu.set(i),n.uniformMatrix4fv(this.addr,!1,Lu),Rt(t,i)}}function a_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function o_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function l_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function c_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function u_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function h_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function d_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function f_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function p_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Hl.compareFunction=t.isReversedDepthBuffer()?uc:cc,s=Hl):s=vd,t.setTexture2D(e||s,r)}function m_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Sd,r)}function g_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ed,r)}function __(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Md,r)}function x_(n){switch(n){case 5126:return Qg;case 35664:return e_;case 35665:return t_;case 35666:return n_;case 35674:return i_;case 35675:return r_;case 35676:return s_;case 5124:case 35670:return a_;case 35667:case 35671:return o_;case 35668:case 35672:return l_;case 35669:case 35673:return c_;case 5125:return u_;case 36294:return h_;case 36295:return d_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return m_;case 35680:case 36300:case 36308:case 36293:return g_;case 36289:case 36303:case 36311:case 36292:return __}}function v_(n,e){n.uniform1fv(this.addr,e)}function M_(n,e){const t=Qr(e,this.size,2);n.uniform2fv(this.addr,t)}function S_(n,e){const t=Qr(e,this.size,3);n.uniform3fv(this.addr,t)}function E_(n,e){const t=Qr(e,this.size,4);n.uniform4fv(this.addr,t)}function y_(n,e){const t=Qr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function b_(n,e){const t=Qr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function T_(n,e){const t=Qr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function w_(n,e){n.uniform1iv(this.addr,e)}function A_(n,e){n.uniform2iv(this.addr,e)}function R_(n,e){n.uniform3iv(this.addr,e)}function C_(n,e){n.uniform4iv(this.addr,e)}function P_(n,e){n.uniform1uiv(this.addr,e)}function L_(n,e){n.uniform2uiv(this.addr,e)}function I_(n,e){n.uniform3uiv(this.addr,e)}function D_(n,e){n.uniform4uiv(this.addr,e)}function U_(n,e,t){const i=this.cache,r=e.length,s=qa(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Hl:a=vd;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function F_(n,e,t){const i=this.cache,r=e.length,s=qa(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Sd,s[a])}function N_(n,e,t){const i=this.cache,r=e.length,s=qa(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Ed,s[a])}function O_(n,e,t){const i=this.cache,r=e.length,s=qa(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Md,s[a])}function B_(n){switch(n){case 5126:return v_;case 35664:return M_;case 35665:return S_;case 35666:return E_;case 35674:return y_;case 35675:return b_;case 35676:return T_;case 5124:case 35670:return w_;case 35667:case 35671:return A_;case 35668:case 35672:return R_;case 35669:case 35673:return C_;case 5125:return P_;case 36294:return L_;case 36295:return I_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return U_;case 35679:case 36299:case 36307:return F_;case 35680:case 36300:case 36308:case 36293:return N_;case 36289:case 36303:case 36311:case 36292:return O_}}class z_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=x_(t.type)}}class k_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=B_(t.type)}}class H_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const ko=/(\w+)(\])?(\[|\.)?/g;function Uu(n,e){n.seq.push(e),n.map[e.id]=e}function G_(n,e,t){const i=n.name,r=i.length;for(ko.lastIndex=0;;){const s=ko.exec(i),a=ko.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Uu(t,l===void 0?new z_(o,n,e):new k_(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new H_(o),Uu(t,f)),t=f}}}class ya{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);G_(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Fu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const V_=37297;let W_=0;function X_(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Nu=new Ye;function $_(n){Je._getMatrix(Nu,Je.workingColorSpace,n);const e=`mat3( ${Nu.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case Aa:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ou(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+X_(n.getShaderSource(e),o)}else return s}function Y_(n,e){const t=$_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const q_={[Wh]:"Linear",[Xh]:"Reinhard",[$h]:"Cineon",[Yh]:"ACESFilmic",[jh]:"AgX",[Zh]:"Neutral",[qh]:"Custom"};function j_(n,e){const t=q_[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const da=new U;function Z_(){Je.getLuminanceCoefficients(da);const n=da.x.toFixed(4),e=da.y.toFixed(4),t=da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xs).join(`
`)}function J_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Q_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function xs(n){return n!==""}function Bu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ex=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(n){return n.replace(ex,nx)}const tx=new Map;function nx(n,e){let t=qe[e];if(t===void 0){const i=tx.get(e);if(i!==void 0)t=qe[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Gl(t)}const ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ku(n){return n.replace(ix,rx)}function rx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const sx={[_a]:"SHADOWMAP_TYPE_PCF",[_s]:"SHADOWMAP_TYPE_VSM"};function ax(n){return sx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ox={[Zi]:"ENVMAP_TYPE_CUBE",[Xr]:"ENVMAP_TYPE_CUBE",[Xa]:"ENVMAP_TYPE_CUBE_UV"};function lx(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":ox[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const cx={[Xr]:"ENVMAP_MODE_REFRACTION"};function ux(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":cx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hx={[Vh]:"ENVMAP_BLENDING_MULTIPLY",[ep]:"ENVMAP_BLENDING_MIX",[tp]:"ENVMAP_BLENDING_ADD"};function dx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":hx[n.combine]||"ENVMAP_BLENDING_NONE"}function fx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function px(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=ax(t),l=lx(t),u=ux(t),f=dx(t),h=fx(t),m=K_(t),_=J_(s),x=r.createProgram();let p,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(xs).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(xs).join(`
`),d.length>0&&(d+=`
`)):(p=[Hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),d=[Hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?qe.tonemapping_pars_fragment:"",t.toneMapping!==Rn?j_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Y_("linearToOutputTexel",t.outputColorSpace),Z_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xs).join(`
`)),a=Gl(a),a=Bu(a,t),a=zu(a,t),o=Gl(o),o=Bu(o,t),o=zu(o,t),a=ku(a),o=ku(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=v+p+a,w=v+d+o,I=Fu(r,r.VERTEX_SHADER,y),A=Fu(r,r.FRAGMENT_SHADER,w);r.attachShader(x,I),r.attachShader(x,A),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function P(L){if(n.debug.checkShaderErrors){const $=r.getProgramInfoLog(x)||"",X=r.getShaderInfoLog(I)||"",Z=r.getShaderInfoLog(A)||"",H=$.trim(),z=X.trim(),B=Z.trim();let he=!0,ce=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(he=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,I,A);else{const xe=Ou(r,I,"vertex"),fe=Ou(r,A,"fragment");Ke("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+xe+`
`+fe)}else H!==""?Ve("WebGLProgram: Program Info Log:",H):(z===""||B==="")&&(ce=!1);ce&&(L.diagnostics={runnable:he,programLog:H,vertexShader:{log:z,prefix:p},fragmentShader:{log:B,prefix:d}})}r.deleteShader(I),r.deleteShader(A),M=new ya(r,x),T=Q_(r,x)}let M;this.getUniforms=function(){return M===void 0&&P(this),M};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let te=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return te===!1&&(te=r.getProgramParameter(x,V_)),te},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=W_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=A,this}let mx=0;class gx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _x(e),t.set(e,i)),i}}class _x{constructor(e){this.id=mx++,this.code=e,this.usedTimes=0}}function xx(n,e,t,i,r,s){const a=new dc,o=new gx,c=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function x(M,T,te,L,$){const X=L.fog,Z=$.geometry,H=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?L.environment:null,z=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,B=e.get(M.envMap||H,z),he=B&&B.mapping===Xa?B.image.height:null,ce=m[M.type];M.precision!==null&&(h=i.getMaxPrecision(M.precision),h!==M.precision&&Ve("WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const xe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,fe=xe!==void 0?xe.length:0;let _e=0;Z.morphAttributes.position!==void 0&&(_e=1),Z.morphAttributes.normal!==void 0&&(_e=2),Z.morphAttributes.color!==void 0&&(_e=3);let re,ue,oe,F;if(ce){const et=Mn[ce];re=et.vertexShader,ue=et.fragmentShader}else re=M.vertexShader,ue=M.fragmentShader,o.update(M),oe=o.getVertexShaderID(M),F=o.getFragmentShaderID(M);const K=n.getRenderTarget(),q=n.state.buffers.depth.getReversed(),Se=$.isInstancedMesh===!0,Me=$.isBatchedMesh===!0,pe=!!M.map,Ie=!!M.matcap,Ce=!!B,ze=!!M.aoMap,Xe=!!M.lightMap,Be=!!M.bumpMap,Q=!!M.normalMap,b=!!M.displacementMap,se=!!M.emissiveMap,ie=!!M.metalnessMap,J=!!M.roughnessMap,G=M.anisotropy>0,S=M.clearcoat>0,g=M.dispersion>0,R=M.iridescence>0,W=M.sheen>0,O=M.transmission>0,C=G&&!!M.anisotropyMap,Y=S&&!!M.clearcoatMap,ne=S&&!!M.clearcoatNormalMap,le=S&&!!M.clearcoatRoughnessMap,Te=R&&!!M.iridescenceMap,ae=R&&!!M.iridescenceThicknessMap,de=W&&!!M.sheenColorMap,Ee=W&&!!M.sheenRoughnessMap,Pe=!!M.specularMap,be=!!M.specularColorMap,Ge=!!M.specularIntensityMap,D=O&&!!M.transmissionMap,ve=O&&!!M.thicknessMap,ge=!!M.gradientMap,Re=!!M.alphaMap,me=M.alphaTest>0,ee=!!M.alphaHash,De=!!M.extensions;let He=Rn;M.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(He=n.toneMapping);const Qe={shaderID:ce,shaderType:M.type,shaderName:M.name,vertexShader:re,fragmentShader:ue,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:F,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:Me,batchingColor:Me&&$._colorsTexture!==null,instancing:Se,instancingColor:Se&&$.instanceColor!==null,instancingMorph:Se&&$.morphTexture!==null,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Yr,alphaToCoverage:!!M.alphaToCoverage,map:pe,matcap:Ie,envMap:Ce,envMapMode:Ce&&B.mapping,envMapCubeUVHeight:he,aoMap:ze,lightMap:Xe,bumpMap:Be,normalMap:Q,displacementMap:b,emissiveMap:se,normalMapObjectSpace:Q&&M.normalMapType===rp,normalMapTangentSpace:Q&&M.normalMapType===sd,metalnessMap:ie,roughnessMap:J,anisotropy:G,anisotropyMap:C,clearcoat:S,clearcoatMap:Y,clearcoatNormalMap:ne,clearcoatRoughnessMap:le,dispersion:g,iridescence:R,iridescenceMap:Te,iridescenceThicknessMap:ae,sheen:W,sheenColorMap:de,sheenRoughnessMap:Ee,specularMap:Pe,specularColorMap:be,specularIntensityMap:Ge,transmission:O,transmissionMap:D,thicknessMap:ve,gradientMap:ge,opaque:M.transparent===!1&&M.blending===zr&&M.alphaToCoverage===!1,alphaMap:Re,alphaTest:me,alphaHash:ee,combine:M.combine,mapUv:pe&&_(M.map.channel),aoMapUv:ze&&_(M.aoMap.channel),lightMapUv:Xe&&_(M.lightMap.channel),bumpMapUv:Be&&_(M.bumpMap.channel),normalMapUv:Q&&_(M.normalMap.channel),displacementMapUv:b&&_(M.displacementMap.channel),emissiveMapUv:se&&_(M.emissiveMap.channel),metalnessMapUv:ie&&_(M.metalnessMap.channel),roughnessMapUv:J&&_(M.roughnessMap.channel),anisotropyMapUv:C&&_(M.anisotropyMap.channel),clearcoatMapUv:Y&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:de&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&_(M.sheenRoughnessMap.channel),specularMapUv:Pe&&_(M.specularMap.channel),specularColorMapUv:be&&_(M.specularColorMap.channel),specularIntensityMapUv:Ge&&_(M.specularIntensityMap.channel),transmissionMapUv:D&&_(M.transmissionMap.channel),thicknessMapUv:ve&&_(M.thicknessMap.channel),alphaMapUv:Re&&_(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Q||G),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!Z.attributes.uv&&(pe||Re),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||Z.attributes.normal===void 0&&Q===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:q,skinning:$.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:_e,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&te.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,decodeVideoTexture:pe&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===rt,decodeVideoTextureEmissive:se&&M.emissiveMap.isVideoTexture===!0&&Je.getTransfer(M.emissiveMap.colorSpace)===rt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Hn,flipSided:M.side===Jt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:De&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&M.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function p(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const te in M.defines)T.push(te),T.push(M.defines[te]);return M.isRawShaderMaterial===!1&&(d(T,M),v(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function d(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function v(M,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const T=m[M.type];let te;if(T){const L=Mn[T];te=Hp.clone(L.uniforms)}else te=M.uniforms;return te}function w(M,T){let te=u.get(T);return te!==void 0?++te.usedTimes:(te=new px(n,T,M,r),l.push(te),u.set(T,te)),te}function I(M){if(--M.usedTimes===0){const T=l.indexOf(M);l[T]=l[l.length-1],l.pop(),u.delete(M.cacheKey),M.destroy()}}function A(M){o.remove(M)}function P(){o.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:y,acquireProgram:w,releaseProgram:I,releaseShaderCache:A,programs:l,dispose:P}}function vx(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Mx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Gu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,_,x,p,d){let v=n[e];return v===void 0?(v={id:h.id,object:h,geometry:m,material:_,materialVariant:a(h),groupOrder:x,renderOrder:h.renderOrder,z:p,group:d},n[e]=v):(v.id=h.id,v.object=h,v.geometry=m,v.material=_,v.materialVariant=a(h),v.groupOrder=x,v.renderOrder=h.renderOrder,v.z=p,v.group=d),e++,v}function c(h,m,_,x,p,d){const v=o(h,m,_,x,p,d);_.transmission>0?i.push(v):_.transparent===!0?r.push(v):t.push(v)}function l(h,m,_,x,p,d){const v=o(h,m,_,x,p,d);_.transmission>0?i.unshift(v):_.transparent===!0?r.unshift(v):t.unshift(v)}function u(h,m){t.length>1&&t.sort(h||Mx),i.length>1&&i.sort(m||Gu),r.length>1&&r.sort(m||Gu)}function f(){for(let h=e,m=n.length;h<m;h++){const _=n[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:f,sort:u}}function Sx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Vu,n.set(i,[a])):r>=s.length?(a=new Vu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ex(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new nt};break;case"SpotLight":t={position:new U,direction:new U,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function yx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let bx=0;function Tx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function wx(n){const e=new Ex,t=yx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);const r=new U,s=new ht,a=new ht;function o(l){let u=0,f=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,_=0,x=0,p=0,d=0,v=0,y=0,w=0,I=0,A=0,P=0;l.sort(Tx);for(let T=0,te=l.length;T<te;T++){const L=l[T],$=L.color,X=L.intensity,Z=L.distance;let H=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===$r?H=L.shadow.map.texture:H=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=$.r*X,f+=$.g*X,h+=$.b*X;else if(L.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(L.sh.coefficients[z],X);P++}else if(L.isDirectionalLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const B=L.shadow,he=t.get(L);he.shadowIntensity=B.intensity,he.shadowBias=B.bias,he.shadowNormalBias=B.normalBias,he.shadowRadius=B.radius,he.shadowMapSize=B.mapSize,i.directionalShadow[m]=he,i.directionalShadowMap[m]=H,i.directionalShadowMatrix[m]=L.shadow.matrix,v++}i.directional[m]=z,m++}else if(L.isSpotLight){const z=e.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy($).multiplyScalar(X),z.distance=Z,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,i.spot[x]=z;const B=L.shadow;if(L.map&&(i.spotLightMap[I]=L.map,I++,B.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[x]=B.matrix,L.castShadow){const he=t.get(L);he.shadowIntensity=B.intensity,he.shadowBias=B.bias,he.shadowNormalBias=B.normalBias,he.shadowRadius=B.radius,he.shadowMapSize=B.mapSize,i.spotShadow[x]=he,i.spotShadowMap[x]=H,w++}x++}else if(L.isRectAreaLight){const z=e.get(L);z.color.copy($).multiplyScalar(X),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),i.rectArea[p]=z,p++}else if(L.isPointLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),z.distance=L.distance,z.decay=L.decay,L.castShadow){const B=L.shadow,he=t.get(L);he.shadowIntensity=B.intensity,he.shadowBias=B.bias,he.shadowNormalBias=B.normalBias,he.shadowRadius=B.radius,he.shadowMapSize=B.mapSize,he.shadowCameraNear=B.camera.near,he.shadowCameraFar=B.camera.far,i.pointShadow[_]=he,i.pointShadowMap[_]=H,i.pointShadowMatrix[_]=L.shadow.matrix,y++}i.point[_]=z,_++}else if(L.isHemisphereLight){const z=e.get(L);z.skyColor.copy(L.color).multiplyScalar(X),z.groundColor.copy(L.groundColor).multiplyScalar(X),i.hemi[d]=z,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const M=i.hash;(M.directionalLength!==m||M.pointLength!==_||M.spotLength!==x||M.rectAreaLength!==p||M.hemiLength!==d||M.numDirectionalShadows!==v||M.numPointShadows!==y||M.numSpotShadows!==w||M.numSpotMaps!==I||M.numLightProbes!==P)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=w+I-A,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,M.directionalLength=m,M.pointLength=_,M.spotLength=x,M.rectAreaLength=p,M.hemiLength=d,M.numDirectionalShadows=v,M.numPointShadows=y,M.numSpotShadows=w,M.numSpotMaps=I,M.numLightProbes=P,i.version=bx++)}function c(l,u){let f=0,h=0,m=0,_=0,x=0;const p=u.matrixWorldInverse;for(let d=0,v=l.length;d<v;d++){const y=l[d];if(y.isDirectionalLight){const w=i.directional[f];w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),f++}else if(y.isSpotLight){const w=i.spot[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const w=i.point[h];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),h++}else if(y.isHemisphereLight){const w=i.hemi[x];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),x++}}}return{setup:o,setupView:c,state:i}}function Wu(n){const e=new wx(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Ax(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Wu(n),e.set(r,[o])):s>=a.length?(o=new Wu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Rx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Px=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Lx=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Xu=new ht,fs=new U,Ho=new U;function Ix(n,e,t){let i=new mc;const r=new We,s=new We,a=new Mt,o=new Xp,c=new $p,l={},u=t.maxTextureSize,f={[gi]:Jt,[Jt]:gi,[Hn]:Hn},h=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Rx,fragmentShader:Cx}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new ei;_.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new dt(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_a;let d=this.type;this.render=function(A,P,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===Ff&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=_a);const T=n.getRenderTarget(),te=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),$=n.state;$.setBlending($n),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const X=d!==this.type;X&&P.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(H=>H.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,H=A.length;Z<H;Z++){const z=A[Z],B=z.shadow;if(B===void 0){Ve("WebGLShadowMap:",z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const he=B.getFrameExtents();r.multiply(he),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/he.x),r.x=s.x*he.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/he.y),r.y=s.y*he.y,B.mapSize.y=s.y));const ce=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=ce,B.map===null||X===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===_s){if(z.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Cn(r.x,r.y,{format:$r,type:Zn,minFilter:zt,magFilter:zt,generateMipmaps:!1}),B.map.texture.name=z.name+".shadowMap",B.map.depthTexture=new Cs(r.x,r.y,wn),B.map.depthTexture.name=z.name+".shadowMapDepth",B.map.depthTexture.format=Kn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Dt,B.map.depthTexture.magFilter=Dt}else z.isPointLight?(B.map=new xd(r.x),B.map.depthTexture=new zp(r.x,Ln)):(B.map=new Cn(r.x,r.y),B.map.depthTexture=new Cs(r.x,r.y,Ln)),B.map.depthTexture.name=z.name+".shadowMap",B.map.depthTexture.format=Kn,this.type===_a?(B.map.depthTexture.compareFunction=ce?uc:cc,B.map.depthTexture.minFilter=zt,B.map.depthTexture.magFilter=zt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Dt,B.map.depthTexture.magFilter=Dt);B.camera.updateProjectionMatrix()}const xe=B.map.isWebGLCubeRenderTarget?6:1;for(let fe=0;fe<xe;fe++){if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,fe),n.clear();else{fe===0&&(n.setRenderTarget(B.map),n.clear());const _e=B.getViewport(fe);a.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),$.viewport(a)}if(z.isPointLight){const _e=B.camera,re=B.matrix,ue=z.distance||_e.far;ue!==_e.far&&(_e.far=ue,_e.updateProjectionMatrix()),fs.setFromMatrixPosition(z.matrixWorld),_e.position.copy(fs),Ho.copy(_e.position),Ho.add(Px[fe]),_e.up.copy(Lx[fe]),_e.lookAt(Ho),_e.updateMatrixWorld(),re.makeTranslation(-fs.x,-fs.y,-fs.z),Xu.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Xu,_e.coordinateSystem,_e.reversedDepth)}else B.updateMatrices(z);i=B.getFrustum(),w(P,M,B.camera,z,this.type)}B.isPointLightShadow!==!0&&this.type===_s&&v(B,M),B.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(T,te,L)};function v(A,P){const M=e.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Cn(r.x,r.y,{format:$r,type:Zn})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(P,null,M,h,x,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(P,null,M,m,x,null)}function y(A,P,M,T){let te=null;const L=M.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)te=L;else if(te=M.isPointLight===!0?c:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const $=te.uuid,X=P.uuid;let Z=l[$];Z===void 0&&(Z={},l[$]=Z);let H=Z[X];H===void 0&&(H=te.clone(),Z[X]=H,P.addEventListener("dispose",I)),te=H}if(te.visible=P.visible,te.wireframe=P.wireframe,T===_s?te.side=P.shadowSide!==null?P.shadowSide:P.side:te.side=P.shadowSide!==null?P.shadowSide:f[P.side],te.alphaMap=P.alphaMap,te.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,te.map=P.map,te.clipShadows=P.clipShadows,te.clippingPlanes=P.clippingPlanes,te.clipIntersection=P.clipIntersection,te.displacementMap=P.displacementMap,te.displacementScale=P.displacementScale,te.displacementBias=P.displacementBias,te.wireframeLinewidth=P.wireframeLinewidth,te.linewidth=P.linewidth,M.isPointLight===!0&&te.isMeshDistanceMaterial===!0){const $=n.properties.get(te);$.light=M}return te}function w(A,P,M,T,te){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&te===_s)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,A.matrixWorld);const X=e.update(A),Z=A.material;if(Array.isArray(Z)){const H=X.groups;for(let z=0,B=H.length;z<B;z++){const he=H[z],ce=Z[he.materialIndex];if(ce&&ce.visible){const xe=y(A,ce,T,te);A.onBeforeShadow(n,A,P,M,X,xe,he),n.renderBufferDirect(M,null,X,xe,A,he),A.onAfterShadow(n,A,P,M,X,xe,he)}}}else if(Z.visible){const H=y(A,Z,T,te);A.onBeforeShadow(n,A,P,M,X,H,null),n.renderBufferDirect(M,null,X,H,A,null),A.onAfterShadow(n,A,P,M,X,H,null)}}const $=A.children;for(let X=0,Z=$.length;X<Z;X++)w($[X],P,M,T,te)}function I(A){A.target.removeEventListener("dispose",I);for(const M in l){const T=l[M],te=A.target.uuid;te in T&&(T[te].dispose(),delete T[te])}}}function Dx(n,e){function t(){let D=!1;const ve=new Mt;let ge=null;const Re=new Mt(0,0,0,0);return{setMask:function(me){ge!==me&&!D&&(n.colorMask(me,me,me,me),ge=me)},setLocked:function(me){D=me},setClear:function(me,ee,De,He,Qe){Qe===!0&&(me*=He,ee*=He,De*=He),ve.set(me,ee,De,He),Re.equals(ve)===!1&&(n.clearColor(me,ee,De,He),Re.copy(ve))},reset:function(){D=!1,ge=null,Re.set(-1,0,0,0)}}}function i(){let D=!1,ve=!1,ge=null,Re=null,me=null;return{setReversed:function(ee){if(ve!==ee){const De=e.get("EXT_clip_control");ee?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),ve=ee;const He=me;me=null,this.setClear(He)}},getReversed:function(){return ve},setTest:function(ee){ee?K(n.DEPTH_TEST):q(n.DEPTH_TEST)},setMask:function(ee){ge!==ee&&!D&&(n.depthMask(ee),ge=ee)},setFunc:function(ee){if(ve&&(ee=pp[ee]),Re!==ee){switch(ee){case Qo:n.depthFunc(n.NEVER);break;case el:n.depthFunc(n.ALWAYS);break;case tl:n.depthFunc(n.LESS);break;case Wr:n.depthFunc(n.LEQUAL);break;case nl:n.depthFunc(n.EQUAL);break;case il:n.depthFunc(n.GEQUAL);break;case rl:n.depthFunc(n.GREATER);break;case sl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=ee}},setLocked:function(ee){D=ee},setClear:function(ee){me!==ee&&(me=ee,ve&&(ee=1-ee),n.clearDepth(ee))},reset:function(){D=!1,ge=null,Re=null,me=null,ve=!1}}}function r(){let D=!1,ve=null,ge=null,Re=null,me=null,ee=null,De=null,He=null,Qe=null;return{setTest:function(et){D||(et?K(n.STENCIL_TEST):q(n.STENCIL_TEST))},setMask:function(et){ve!==et&&!D&&(n.stencilMask(et),ve=et)},setFunc:function(et,Vt,Wt){(ge!==et||Re!==Vt||me!==Wt)&&(n.stencilFunc(et,Vt,Wt),ge=et,Re=Vt,me=Wt)},setOp:function(et,Vt,Wt){(ee!==et||De!==Vt||He!==Wt)&&(n.stencilOp(et,Vt,Wt),ee=et,De=Vt,He=Wt)},setLocked:function(et){D=et},setClear:function(et){Qe!==et&&(n.clearStencil(et),Qe=et)},reset:function(){D=!1,ve=null,ge=null,Re=null,me=null,ee=null,De=null,He=null,Qe=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},f={},h=new WeakMap,m=[],_=null,x=!1,p=null,d=null,v=null,y=null,w=null,I=null,A=null,P=new nt(0,0,0),M=0,T=!1,te=null,L=null,$=null,X=null,Z=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,B=0;const he=n.getParameter(n.VERSION);he.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(he)[1]),z=B>=1):he.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),z=B>=2);let ce=null,xe={};const fe=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),re=new Mt().fromArray(fe),ue=new Mt().fromArray(_e);function oe(D,ve,ge,Re){const me=new Uint8Array(4),ee=n.createTexture();n.bindTexture(D,ee),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<ge;De++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(ve,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(ve+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return ee}const F={};F[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),F[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),F[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(n.DEPTH_TEST),a.setFunc(Wr),Be(!1),Q($c),K(n.CULL_FACE),ze($n);function K(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function q(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Se(D,ve){return f[D]!==ve?(n.bindFramebuffer(D,ve),f[D]=ve,D===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ve),D===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ve),!0):!1}function Me(D,ve){let ge=m,Re=!1;if(D){ge=h.get(ve),ge===void 0&&(ge=[],h.set(ve,ge));const me=D.textures;if(ge.length!==me.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,De=me.length;ee<De;ee++)ge[ee]=n.COLOR_ATTACHMENT0+ee;ge.length=me.length,Re=!0}}else ge[0]!==n.BACK&&(ge[0]=n.BACK,Re=!0);Re&&n.drawBuffers(ge)}function pe(D){return _!==D?(n.useProgram(D),_=D,!0):!1}const Ie={[Vi]:n.FUNC_ADD,[Of]:n.FUNC_SUBTRACT,[Bf]:n.FUNC_REVERSE_SUBTRACT};Ie[zf]=n.MIN,Ie[kf]=n.MAX;const Ce={[Hf]:n.ZERO,[Gf]:n.ONE,[Vf]:n.SRC_COLOR,[Ko]:n.SRC_ALPHA,[jf]:n.SRC_ALPHA_SATURATE,[Yf]:n.DST_COLOR,[Xf]:n.DST_ALPHA,[Wf]:n.ONE_MINUS_SRC_COLOR,[Jo]:n.ONE_MINUS_SRC_ALPHA,[qf]:n.ONE_MINUS_DST_COLOR,[$f]:n.ONE_MINUS_DST_ALPHA,[Zf]:n.CONSTANT_COLOR,[Kf]:n.ONE_MINUS_CONSTANT_COLOR,[Jf]:n.CONSTANT_ALPHA,[Qf]:n.ONE_MINUS_CONSTANT_ALPHA};function ze(D,ve,ge,Re,me,ee,De,He,Qe,et){if(D===$n){x===!0&&(q(n.BLEND),x=!1);return}if(x===!1&&(K(n.BLEND),x=!0),D!==Nf){if(D!==p||et!==T){if((d!==Vi||w!==Vi)&&(n.blendEquation(n.FUNC_ADD),d=Vi,w=Vi),et)switch(D){case zr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yc:n.blendFunc(n.ONE,n.ONE);break;case qc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ke("WebGLState: Invalid blending: ",D);break}else switch(D){case zr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case qc:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jc:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",D);break}v=null,y=null,I=null,A=null,P.set(0,0,0),M=0,p=D,T=et}return}me=me||ve,ee=ee||ge,De=De||Re,(ve!==d||me!==w)&&(n.blendEquationSeparate(Ie[ve],Ie[me]),d=ve,w=me),(ge!==v||Re!==y||ee!==I||De!==A)&&(n.blendFuncSeparate(Ce[ge],Ce[Re],Ce[ee],Ce[De]),v=ge,y=Re,I=ee,A=De),(He.equals(P)===!1||Qe!==M)&&(n.blendColor(He.r,He.g,He.b,Qe),P.copy(He),M=Qe),p=D,T=!1}function Xe(D,ve){D.side===Hn?q(n.CULL_FACE):K(n.CULL_FACE);let ge=D.side===Jt;ve&&(ge=!ge),Be(ge),D.blending===zr&&D.transparent===!1?ze($n):ze(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const Re=D.stencilWrite;o.setTest(Re),Re&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),se(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):q(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){te!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),te=D)}function Q(D){D!==Df?(K(n.CULL_FACE),D!==L&&(D===$c?n.cullFace(n.BACK):D===Uf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):q(n.CULL_FACE),L=D}function b(D){D!==$&&(z&&n.lineWidth(D),$=D)}function se(D,ve,ge){D?(K(n.POLYGON_OFFSET_FILL),(X!==ve||Z!==ge)&&(X=ve,Z=ge,a.getReversed()&&(ve=-ve),n.polygonOffset(ve,ge))):q(n.POLYGON_OFFSET_FILL)}function ie(D){D?K(n.SCISSOR_TEST):q(n.SCISSOR_TEST)}function J(D){D===void 0&&(D=n.TEXTURE0+H-1),ce!==D&&(n.activeTexture(D),ce=D)}function G(D,ve,ge){ge===void 0&&(ce===null?ge=n.TEXTURE0+H-1:ge=ce);let Re=xe[ge];Re===void 0&&(Re={type:void 0,texture:void 0},xe[ge]=Re),(Re.type!==D||Re.texture!==ve)&&(ce!==ge&&(n.activeTexture(ge),ce=ge),n.bindTexture(D,ve||F[D]),Re.type=D,Re.texture=ve)}function S(){const D=xe[ce];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(D){Ke("WebGLState:",D)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(D){Ke("WebGLState:",D)}}function W(){try{n.texSubImage2D(...arguments)}catch(D){Ke("WebGLState:",D)}}function O(){try{n.texSubImage3D(...arguments)}catch(D){Ke("WebGLState:",D)}}function C(){try{n.compressedTexSubImage2D(...arguments)}catch(D){Ke("WebGLState:",D)}}function Y(){try{n.compressedTexSubImage3D(...arguments)}catch(D){Ke("WebGLState:",D)}}function ne(){try{n.texStorage2D(...arguments)}catch(D){Ke("WebGLState:",D)}}function le(){try{n.texStorage3D(...arguments)}catch(D){Ke("WebGLState:",D)}}function Te(){try{n.texImage2D(...arguments)}catch(D){Ke("WebGLState:",D)}}function ae(){try{n.texImage3D(...arguments)}catch(D){Ke("WebGLState:",D)}}function de(D){re.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),re.copy(D))}function Ee(D){ue.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ue.copy(D))}function Pe(D,ve){let ge=l.get(ve);ge===void 0&&(ge=new WeakMap,l.set(ve,ge));let Re=ge.get(D);Re===void 0&&(Re=n.getUniformBlockIndex(ve,D.name),ge.set(D,Re))}function be(D,ve){const Re=l.get(ve).get(D);c.get(ve)!==Re&&(n.uniformBlockBinding(ve,Re,D.__bindingPointIndex),c.set(ve,Re))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ce=null,xe={},f={},h=new WeakMap,m=[],_=null,x=!1,p=null,d=null,v=null,y=null,w=null,I=null,A=null,P=new nt(0,0,0),M=0,T=!1,te=null,L=null,$=null,X=null,Z=null,re.set(0,0,n.canvas.width,n.canvas.height),ue.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:K,disable:q,bindFramebuffer:Se,drawBuffers:Me,useProgram:pe,setBlending:ze,setMaterial:Xe,setFlipSided:Be,setCullFace:Q,setLineWidth:b,setPolygonOffset:se,setScissorTest:ie,activeTexture:J,bindTexture:G,unbindTexture:S,compressedTexImage2D:g,compressedTexImage3D:R,texImage2D:Te,texImage3D:ae,updateUBOMapping:Pe,uniformBlockBinding:be,texStorage2D:ne,texStorage3D:le,texSubImage2D:W,texSubImage3D:O,compressedTexSubImage2D:C,compressedTexSubImage3D:Y,scissor:de,viewport:Ee,reset:Ge}}function Ux(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new We,u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,g){return m?new OffscreenCanvas(S,g):Ra("canvas")}function x(S,g,R){let W=1;const O=G(S);if((O.width>R||O.height>R)&&(W=R/Math.max(O.width,O.height)),W<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const C=Math.floor(W*O.width),Y=Math.floor(W*O.height);f===void 0&&(f=_(C,Y));const ne=g?_(C,Y):f;return ne.width=C,ne.height=Y,ne.getContext("2d").drawImage(S,0,0,C,Y),Ve("WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+C+"x"+Y+")."),ne}else return"data"in S&&Ve("WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),S;return S}function p(S){return S.generateMipmaps}function d(S){n.generateMipmap(S)}function v(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(S,g,R,W,O=!1){if(S!==null){if(n[S]!==void 0)return n[S];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let C=g;if(g===n.RED&&(R===n.FLOAT&&(C=n.R32F),R===n.HALF_FLOAT&&(C=n.R16F),R===n.UNSIGNED_BYTE&&(C=n.R8)),g===n.RED_INTEGER&&(R===n.UNSIGNED_BYTE&&(C=n.R8UI),R===n.UNSIGNED_SHORT&&(C=n.R16UI),R===n.UNSIGNED_INT&&(C=n.R32UI),R===n.BYTE&&(C=n.R8I),R===n.SHORT&&(C=n.R16I),R===n.INT&&(C=n.R32I)),g===n.RG&&(R===n.FLOAT&&(C=n.RG32F),R===n.HALF_FLOAT&&(C=n.RG16F),R===n.UNSIGNED_BYTE&&(C=n.RG8)),g===n.RG_INTEGER&&(R===n.UNSIGNED_BYTE&&(C=n.RG8UI),R===n.UNSIGNED_SHORT&&(C=n.RG16UI),R===n.UNSIGNED_INT&&(C=n.RG32UI),R===n.BYTE&&(C=n.RG8I),R===n.SHORT&&(C=n.RG16I),R===n.INT&&(C=n.RG32I)),g===n.RGB_INTEGER&&(R===n.UNSIGNED_BYTE&&(C=n.RGB8UI),R===n.UNSIGNED_SHORT&&(C=n.RGB16UI),R===n.UNSIGNED_INT&&(C=n.RGB32UI),R===n.BYTE&&(C=n.RGB8I),R===n.SHORT&&(C=n.RGB16I),R===n.INT&&(C=n.RGB32I)),g===n.RGBA_INTEGER&&(R===n.UNSIGNED_BYTE&&(C=n.RGBA8UI),R===n.UNSIGNED_SHORT&&(C=n.RGBA16UI),R===n.UNSIGNED_INT&&(C=n.RGBA32UI),R===n.BYTE&&(C=n.RGBA8I),R===n.SHORT&&(C=n.RGBA16I),R===n.INT&&(C=n.RGBA32I)),g===n.RGB&&(R===n.UNSIGNED_INT_5_9_9_9_REV&&(C=n.RGB9_E5),R===n.UNSIGNED_INT_10F_11F_11F_REV&&(C=n.R11F_G11F_B10F)),g===n.RGBA){const Y=O?Aa:Je.getTransfer(W);R===n.FLOAT&&(C=n.RGBA32F),R===n.HALF_FLOAT&&(C=n.RGBA16F),R===n.UNSIGNED_BYTE&&(C=Y===rt?n.SRGB8_ALPHA8:n.RGBA8),R===n.UNSIGNED_SHORT_4_4_4_4&&(C=n.RGBA4),R===n.UNSIGNED_SHORT_5_5_5_1&&(C=n.RGB5_A1)}return(C===n.R16F||C===n.R32F||C===n.RG16F||C===n.RG32F||C===n.RGBA16F||C===n.RGBA32F)&&e.get("EXT_color_buffer_float"),C}function w(S,g){let R;return S?g===null||g===Ln||g===As?R=n.DEPTH24_STENCIL8:g===wn?R=n.DEPTH32F_STENCIL8:g===ws&&(R=n.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ln||g===As?R=n.DEPTH_COMPONENT24:g===wn?R=n.DEPTH_COMPONENT32F:g===ws&&(R=n.DEPTH_COMPONENT16),R}function I(S,g){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==Dt&&S.minFilter!==zt?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function A(S){const g=S.target;g.removeEventListener("dispose",A),M(g),g.isVideoTexture&&u.delete(g)}function P(S){const g=S.target;g.removeEventListener("dispose",P),te(g)}function M(S){const g=i.get(S);if(g.__webglInit===void 0)return;const R=S.source,W=h.get(R);if(W){const O=W[g.__cacheKey];O.usedTimes--,O.usedTimes===0&&T(S),Object.keys(W).length===0&&h.delete(R)}i.remove(S)}function T(S){const g=i.get(S);n.deleteTexture(g.__webglTexture);const R=S.source,W=h.get(R);delete W[g.__cacheKey],a.memory.textures--}function te(S){const g=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let O=0;O<g.__webglFramebuffer[W].length;O++)n.deleteFramebuffer(g.__webglFramebuffer[W][O]);else n.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)n.deleteFramebuffer(g.__webglFramebuffer[W]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const R=S.textures;for(let W=0,O=R.length;W<O;W++){const C=i.get(R[W]);C.__webglTexture&&(n.deleteTexture(C.__webglTexture),a.memory.textures--),i.remove(R[W])}i.remove(S)}let L=0;function $(){L=0}function X(){const S=L;return S>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),L+=1,S}function Z(S){const g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function H(S,g){const R=i.get(S);if(S.isVideoTexture&&ie(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&R.__version!==S.version){const W=S.image;if(W===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{F(R,S,g);return}}else S.isExternalTexture&&(R.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,R.__webglTexture,n.TEXTURE0+g)}function z(S,g){const R=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&R.__version!==S.version){F(R,S,g);return}else S.isExternalTexture&&(R.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,R.__webglTexture,n.TEXTURE0+g)}function B(S,g){const R=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&R.__version!==S.version){F(R,S,g);return}t.bindTexture(n.TEXTURE_3D,R.__webglTexture,n.TEXTURE0+g)}function he(S,g){const R=i.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&R.__version!==S.version){K(R,S,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+g)}const ce={[Ut]:n.REPEAT,[Xn]:n.CLAMP_TO_EDGE,[al]:n.MIRRORED_REPEAT},xe={[Dt]:n.NEAREST,[np]:n.NEAREST_MIPMAP_NEAREST,[Xs]:n.NEAREST_MIPMAP_LINEAR,[zt]:n.LINEAR,[uo]:n.LINEAR_MIPMAP_NEAREST,[qi]:n.LINEAR_MIPMAP_LINEAR},fe={[sp]:n.NEVER,[up]:n.ALWAYS,[ap]:n.LESS,[cc]:n.LEQUAL,[op]:n.EQUAL,[uc]:n.GEQUAL,[lp]:n.GREATER,[cp]:n.NOTEQUAL};function _e(S,g){if(g.type===wn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===zt||g.magFilter===uo||g.magFilter===Xs||g.magFilter===qi||g.minFilter===zt||g.minFilter===uo||g.minFilter===Xs||g.minFilter===qi)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,ce[g.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,ce[g.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,ce[g.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,xe[g.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,xe[g.minFilter]),g.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,fe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Dt||g.minFilter!==Xs&&g.minFilter!==qi||g.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const R=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function re(S,g){let R=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",A));const W=g.source;let O=h.get(W);O===void 0&&(O={},h.set(W,O));const C=Z(g);if(C!==S.__cacheKey){O[C]===void 0&&(O[C]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,R=!0),O[C].usedTimes++;const Y=O[S.__cacheKey];Y!==void 0&&(O[S.__cacheKey].usedTimes--,Y.usedTimes===0&&T(g)),S.__cacheKey=C,S.__webglTexture=O[C].texture}return R}function ue(S,g,R){return Math.floor(Math.floor(S/R)/g)}function oe(S,g,R,W){const C=S.updateRanges;if(C.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,R,W,g.data);else{C.sort((ae,de)=>ae.start-de.start);let Y=0;for(let ae=1;ae<C.length;ae++){const de=C[Y],Ee=C[ae],Pe=de.start+de.count,be=ue(Ee.start,g.width,4),Ge=ue(de.start,g.width,4);Ee.start<=Pe+1&&be===Ge&&ue(Ee.start+Ee.count-1,g.width,4)===be?de.count=Math.max(de.count,Ee.start+Ee.count-de.start):(++Y,C[Y]=Ee)}C.length=Y+1;const ne=n.getParameter(n.UNPACK_ROW_LENGTH),le=n.getParameter(n.UNPACK_SKIP_PIXELS),Te=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let ae=0,de=C.length;ae<de;ae++){const Ee=C[ae],Pe=Math.floor(Ee.start/4),be=Math.ceil(Ee.count/4),Ge=Pe%g.width,D=Math.floor(Pe/g.width),ve=be,ge=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,Ge,D,ve,ge,R,W,g.data)}S.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ne),n.pixelStorei(n.UNPACK_SKIP_PIXELS,le),n.pixelStorei(n.UNPACK_SKIP_ROWS,Te)}}function F(S,g,R){let W=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=n.TEXTURE_3D);const O=re(S,g),C=g.source;t.bindTexture(W,S.__webglTexture,n.TEXTURE0+R);const Y=i.get(C);if(C.version!==Y.__version||O===!0){t.activeTexture(n.TEXTURE0+R);const ne=Je.getPrimaries(Je.workingColorSpace),le=g.colorSpace===pi?null:Je.getPrimaries(g.colorSpace),Te=g.colorSpace===pi||ne===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let ae=x(g.image,!1,r.maxTextureSize);ae=J(g,ae);const de=s.convert(g.format,g.colorSpace),Ee=s.convert(g.type);let Pe=y(g.internalFormat,de,Ee,g.colorSpace,g.isVideoTexture);_e(W,g);let be;const Ge=g.mipmaps,D=g.isVideoTexture!==!0,ve=Y.__version===void 0||O===!0,ge=C.dataReady,Re=I(g,ae);if(g.isDepthTexture)Pe=w(g.format===ji,g.type),ve&&(D?t.texStorage2D(n.TEXTURE_2D,1,Pe,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Pe,ae.width,ae.height,0,de,Ee,null));else if(g.isDataTexture)if(Ge.length>0){D&&ve&&t.texStorage2D(n.TEXTURE_2D,Re,Pe,Ge[0].width,Ge[0].height);for(let me=0,ee=Ge.length;me<ee;me++)be=Ge[me],D?ge&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,be.width,be.height,de,Ee,be.data):t.texImage2D(n.TEXTURE_2D,me,Pe,be.width,be.height,0,de,Ee,be.data);g.generateMipmaps=!1}else D?(ve&&t.texStorage2D(n.TEXTURE_2D,Re,Pe,ae.width,ae.height),ge&&oe(g,ae,de,Ee)):t.texImage2D(n.TEXTURE_2D,0,Pe,ae.width,ae.height,0,de,Ee,ae.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){D&&ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Pe,Ge[0].width,Ge[0].height,ae.depth);for(let me=0,ee=Ge.length;me<ee;me++)if(be=Ge[me],g.format!==mn)if(de!==null)if(D){if(ge)if(g.layerUpdates.size>0){const De=Eu(be.width,be.height,g.format,g.type);for(const He of g.layerUpdates){const Qe=be.data.subarray(He*De/be.data.BYTES_PER_ELEMENT,(He+1)*De/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,He,be.width,be.height,1,de,Qe)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,be.width,be.height,ae.depth,de,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,Pe,be.width,be.height,ae.depth,0,be.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ge&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,be.width,be.height,ae.depth,de,Ee,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,Pe,be.width,be.height,ae.depth,0,de,Ee,be.data)}else{D&&ve&&t.texStorage2D(n.TEXTURE_2D,Re,Pe,Ge[0].width,Ge[0].height);for(let me=0,ee=Ge.length;me<ee;me++)be=Ge[me],g.format!==mn?de!==null?D?ge&&t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,be.width,be.height,de,be.data):t.compressedTexImage2D(n.TEXTURE_2D,me,Pe,be.width,be.height,0,be.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ge&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,be.width,be.height,de,Ee,be.data):t.texImage2D(n.TEXTURE_2D,me,Pe,be.width,be.height,0,de,Ee,be.data)}else if(g.isDataArrayTexture)if(D){if(ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Pe,ae.width,ae.height,ae.depth),ge)if(g.layerUpdates.size>0){const me=Eu(ae.width,ae.height,g.format,g.type);for(const ee of g.layerUpdates){const De=ae.data.subarray(ee*me/ae.data.BYTES_PER_ELEMENT,(ee+1)*me/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,ae.width,ae.height,1,de,Ee,De)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,de,Ee,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,ae.width,ae.height,ae.depth,0,de,Ee,ae.data);else if(g.isData3DTexture)D?(ve&&t.texStorage3D(n.TEXTURE_3D,Re,Pe,ae.width,ae.height,ae.depth),ge&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,de,Ee,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,ae.width,ae.height,ae.depth,0,de,Ee,ae.data);else if(g.isFramebufferTexture){if(ve)if(D)t.texStorage2D(n.TEXTURE_2D,Re,Pe,ae.width,ae.height);else{let me=ae.width,ee=ae.height;for(let De=0;De<Re;De++)t.texImage2D(n.TEXTURE_2D,De,Pe,me,ee,0,de,Ee,null),me>>=1,ee>>=1}}else if(Ge.length>0){if(D&&ve){const me=G(Ge[0]);t.texStorage2D(n.TEXTURE_2D,Re,Pe,me.width,me.height)}for(let me=0,ee=Ge.length;me<ee;me++)be=Ge[me],D?ge&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,de,Ee,be):t.texImage2D(n.TEXTURE_2D,me,Pe,de,Ee,be);g.generateMipmaps=!1}else if(D){if(ve){const me=G(ae);t.texStorage2D(n.TEXTURE_2D,Re,Pe,me.width,me.height)}ge&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,Ee,ae)}else t.texImage2D(n.TEXTURE_2D,0,Pe,de,Ee,ae);p(g)&&d(W),Y.__version=C.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function K(S,g,R){if(g.image.length!==6)return;const W=re(S,g),O=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+R);const C=i.get(O);if(O.version!==C.__version||W===!0){t.activeTexture(n.TEXTURE0+R);const Y=Je.getPrimaries(Je.workingColorSpace),ne=g.colorSpace===pi?null:Je.getPrimaries(g.colorSpace),le=g.colorSpace===pi||Y===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Te=g.isCompressedTexture||g.image[0].isCompressedTexture,ae=g.image[0]&&g.image[0].isDataTexture,de=[];for(let ee=0;ee<6;ee++)!Te&&!ae?de[ee]=x(g.image[ee],!0,r.maxCubemapSize):de[ee]=ae?g.image[ee].image:g.image[ee],de[ee]=J(g,de[ee]);const Ee=de[0],Pe=s.convert(g.format,g.colorSpace),be=s.convert(g.type),Ge=y(g.internalFormat,Pe,be,g.colorSpace),D=g.isVideoTexture!==!0,ve=C.__version===void 0||W===!0,ge=O.dataReady;let Re=I(g,Ee);_e(n.TEXTURE_CUBE_MAP,g);let me;if(Te){D&&ve&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,Ge,Ee.width,Ee.height);for(let ee=0;ee<6;ee++){me=de[ee].mipmaps;for(let De=0;De<me.length;De++){const He=me[De];g.format!==mn?Pe!==null?D?ge&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De,0,0,He.width,He.height,Pe,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De,Ge,He.width,He.height,0,He.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De,0,0,He.width,He.height,Pe,be,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De,Ge,He.width,He.height,0,Pe,be,He.data)}}}else{if(me=g.mipmaps,D&&ve){me.length>0&&Re++;const ee=G(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,Ge,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ae){D?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,de[ee].width,de[ee].height,Pe,be,de[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ge,de[ee].width,de[ee].height,0,Pe,be,de[ee].data);for(let De=0;De<me.length;De++){const Qe=me[De].image[ee].image;D?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De+1,0,0,Qe.width,Qe.height,Pe,be,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De+1,Ge,Qe.width,Qe.height,0,Pe,be,Qe.data)}}else{D?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Pe,be,de[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ge,Pe,be,de[ee]);for(let De=0;De<me.length;De++){const He=me[De];D?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De+1,0,0,Pe,be,He.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De+1,Ge,Pe,be,He.image[ee])}}}p(g)&&d(n.TEXTURE_CUBE_MAP),C.__version=O.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function q(S,g,R,W,O,C){const Y=s.convert(R.format,R.colorSpace),ne=s.convert(R.type),le=y(R.internalFormat,Y,ne,R.colorSpace),Te=i.get(g),ae=i.get(R);if(ae.__renderTarget=g,!Te.__hasExternalTextures){const de=Math.max(1,g.width>>C),Ee=Math.max(1,g.height>>C);O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?t.texImage3D(O,C,le,de,Ee,g.depth,0,Y,ne,null):t.texImage2D(O,C,le,de,Ee,0,Y,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),se(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,O,ae.__webglTexture,0,b(g)):(O===n.TEXTURE_2D||O>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,O,ae.__webglTexture,C),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(S,g,R){if(n.bindRenderbuffer(n.RENDERBUFFER,S),g.depthBuffer){const W=g.depthTexture,O=W&&W.isDepthTexture?W.type:null,C=w(g.stencilBuffer,O),Y=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;se(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,b(g),C,g.width,g.height):R?n.renderbufferStorageMultisample(n.RENDERBUFFER,b(g),C,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,C,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,S)}else{const W=g.textures;for(let O=0;O<W.length;O++){const C=W[O],Y=s.convert(C.format,C.colorSpace),ne=s.convert(C.type),le=y(C.internalFormat,Y,ne,C.colorSpace);se(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,b(g),le,g.width,g.height):R?n.renderbufferStorageMultisample(n.RENDERBUFFER,b(g),le,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,le,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Me(S,g,R){const W=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const O=i.get(g.depthTexture);if(O.__renderTarget=g,(!O.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W){if(O.__webglInit===void 0&&(O.__webglInit=!0,g.depthTexture.addEventListener("dispose",A)),O.__webglTexture===void 0){O.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),_e(n.TEXTURE_CUBE_MAP,g.depthTexture);const Te=s.convert(g.depthTexture.format),ae=s.convert(g.depthTexture.type);let de;g.depthTexture.format===Kn?de=n.DEPTH_COMPONENT24:g.depthTexture.format===ji&&(de=n.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,de,g.width,g.height,0,Te,ae,null)}}else H(g.depthTexture,0);const C=O.__webglTexture,Y=b(g),ne=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+R:n.TEXTURE_2D,le=g.depthTexture.format===ji?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===Kn)se(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,ne,C,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,le,ne,C,0);else if(g.depthTexture.format===ji)se(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,ne,C,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,le,ne,C,0);else throw new Error("Unknown depthTexture format")}function pe(S){const g=i.get(S),R=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){const W=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){const O=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",O)};W.addEventListener("dispose",O),g.__depthDisposeCallback=O}g.__boundDepthTexture=W}if(S.depthTexture&&!g.__autoAllocateDepthBuffer)if(R)for(let W=0;W<6;W++)Me(g.__webglFramebuffer[W],S,W);else{const W=S.texture.mipmaps;W&&W.length>0?Me(g.__webglFramebuffer[0],S,0):Me(g.__webglFramebuffer,S,0)}else if(R){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=n.createRenderbuffer(),Se(g.__webglDepthbuffer[W],S,!1);else{const O=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,C=g.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,C),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,C)}}else{const W=S.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Se(g.__webglDepthbuffer,S,!1);else{const O=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,C=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,C),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,C)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(S,g,R){const W=i.get(S);g!==void 0&&q(W.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),R!==void 0&&pe(S)}function Ce(S){const g=S.texture,R=i.get(S),W=i.get(g);S.addEventListener("dispose",P);const O=S.textures,C=S.isWebGLCubeRenderTarget===!0,Y=O.length>1;if(Y||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=g.version,a.memory.textures++),C){R.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0){R.__webglFramebuffer[ne]=[];for(let le=0;le<g.mipmaps.length;le++)R.__webglFramebuffer[ne][le]=n.createFramebuffer()}else R.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){R.__webglFramebuffer=[];for(let ne=0;ne<g.mipmaps.length;ne++)R.__webglFramebuffer[ne]=n.createFramebuffer()}else R.__webglFramebuffer=n.createFramebuffer();if(Y)for(let ne=0,le=O.length;ne<le;ne++){const Te=i.get(O[ne]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),a.memory.textures++)}if(S.samples>0&&se(S)===!1){R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let ne=0;ne<O.length;ne++){const le=O[ne];R.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,R.__webglColorRenderbuffer[ne]);const Te=s.convert(le.format,le.colorSpace),ae=s.convert(le.type),de=y(le.internalFormat,Te,ae,le.colorSpace,S.isXRRenderTarget===!0),Ee=b(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,de,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,R.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),Se(R.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(C){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),_e(n.TEXTURE_CUBE_MAP,g);for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0)for(let le=0;le<g.mipmaps.length;le++)q(R.__webglFramebuffer[ne][le],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,le);else q(R.__webglFramebuffer[ne],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);p(g)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Y){for(let ne=0,le=O.length;ne<le;ne++){const Te=O[ne],ae=i.get(Te);let de=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(de=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,ae.__webglTexture),_e(de,Te),q(R.__webglFramebuffer,S,Te,n.COLOR_ATTACHMENT0+ne,de,0),p(Te)&&d(de)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ne=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,W.__webglTexture),_e(ne,g),g.mipmaps&&g.mipmaps.length>0)for(let le=0;le<g.mipmaps.length;le++)q(R.__webglFramebuffer[le],S,g,n.COLOR_ATTACHMENT0,ne,le);else q(R.__webglFramebuffer,S,g,n.COLOR_ATTACHMENT0,ne,0);p(g)&&d(ne),t.unbindTexture()}S.depthBuffer&&pe(S)}function ze(S){const g=S.textures;for(let R=0,W=g.length;R<W;R++){const O=g[R];if(p(O)){const C=v(S),Y=i.get(O).__webglTexture;t.bindTexture(C,Y),d(C),t.unbindTexture()}}}const Xe=[],Be=[];function Q(S){if(S.samples>0){if(se(S)===!1){const g=S.textures,R=S.width,W=S.height;let O=n.COLOR_BUFFER_BIT;const C=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=i.get(S),ne=g.length>1;if(ne)for(let Te=0;Te<g.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Y.__webglMultisampledFramebuffer);const le=S.texture.mipmaps;le&&le.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Y.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Y.__webglFramebuffer);for(let Te=0;Te<g.length;Te++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(O|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(O|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Y.__webglColorRenderbuffer[Te]);const ae=i.get(g[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,R,W,0,0,R,W,O,n.NEAREST),c===!0&&(Xe.length=0,Be.length=0,Xe.push(n.COLOR_ATTACHMENT0+Te),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Xe.push(C),Be.push(C),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Be)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Xe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let Te=0;Te<g.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,Y.__webglColorRenderbuffer[Te]);const ae=i.get(g[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Y.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){const g=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function b(S){return Math.min(r.maxSamples,S.samples)}function se(S){const g=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ie(S){const g=a.render.frame;u.get(S)!==g&&(u.set(S,g),S.update())}function J(S,g){const R=S.colorSpace,W=S.format,O=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||R!==Yr&&R!==pi&&(Je.getTransfer(R)===rt?(W!==mn||O!==rn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",R)),g}function G(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=$,this.setTexture2D=H,this.setTexture2DArray=z,this.setTexture3D=B,this.setTextureCube=he,this.rebindTextures=Ie,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=q,this.useMultisampledRTT=se,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Fx(n,e){function t(i,r=pi){let s;const a=Je.getTransfer(r);if(i===rn)return n.UNSIGNED_BYTE;if(i===rc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===sc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ed)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===td)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Jh)return n.BYTE;if(i===Qh)return n.SHORT;if(i===ws)return n.UNSIGNED_SHORT;if(i===ic)return n.INT;if(i===Ln)return n.UNSIGNED_INT;if(i===wn)return n.FLOAT;if(i===Zn)return n.HALF_FLOAT;if(i===nd)return n.ALPHA;if(i===id)return n.RGB;if(i===mn)return n.RGBA;if(i===Kn)return n.DEPTH_COMPONENT;if(i===ji)return n.DEPTH_STENCIL;if(i===rd)return n.RED;if(i===ac)return n.RED_INTEGER;if(i===$r)return n.RG;if(i===oc)return n.RG_INTEGER;if(i===lc)return n.RGBA_INTEGER;if(i===xa||i===va||i===Ma||i===Sa)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===xa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===xa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===va)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ma)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ol||i===ll||i===cl||i===ul)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ol)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ll)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===cl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ul)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hl||i===dl||i===fl||i===pl||i===ml||i===gl||i===_l)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===hl||i===dl)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===fl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===pl)return s.COMPRESSED_R11_EAC;if(i===ml)return s.COMPRESSED_SIGNED_R11_EAC;if(i===gl)return s.COMPRESSED_RG11_EAC;if(i===_l)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===xl||i===vl||i===Ml||i===Sl||i===El||i===yl||i===bl||i===Tl||i===wl||i===Al||i===Rl||i===Cl||i===Pl||i===Ll)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===xl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ml)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===El)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Tl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Al)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ll)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Il||i===Dl||i===Ul)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Il)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ul)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fl||i===Nl||i===Ol||i===Bl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Fl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Nl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ol)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===As?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ox=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Bx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new fd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new In({vertexShader:Nx,fragmentShader:Ox,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new $a(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zx extends ur{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,m=null,_=null;const x=typeof XRWebGLBinding<"u",p=new Bx,d={},v=t.getContextAttributes();let y=null,w=null;const I=[],A=[],P=new We;let M=null;const T=new Tt;T.viewport=new Mt;const te=new Tt;te.viewport=new Mt;const L=[T,te],$=new Zp;let X=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let K=I[F];return K===void 0&&(K=new xo,I[F]=K),K.getTargetRaySpace()},this.getControllerGrip=function(F){let K=I[F];return K===void 0&&(K=new xo,I[F]=K),K.getGripSpace()},this.getHand=function(F){let K=I[F];return K===void 0&&(K=new xo,I[F]=K),K.getHandSpace()};function H(F){const K=A.indexOf(F.inputSource);if(K===-1)return;const q=I[K];q!==void 0&&(q.update(F.inputSource,F.frame,l||a),q.dispatchEvent({type:F.type,data:F.inputSource}))}function z(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",B);for(let F=0;F<I.length;F++){const K=A[F];K!==null&&(A[F]=null,I[F].disconnect(K))}X=null,Z=null,p.reset();for(const F in d)delete d[F];e.setRenderTarget(y),m=null,h=null,f=null,r=null,w=null,oe.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",z),r.addEventListener("inputsourceschange",B),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let q=null,Se=null,Me=null;v.depth&&(Me=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=v.stencil?ji:Kn,Se=v.stencil?As:Ln);const pe={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(pe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new Cn(h.textureWidth,h.textureHeight,{format:mn,type:rn,depthTexture:new Cs(h.textureWidth,h.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const q={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new Cn(m.framebufferWidth,m.framebufferHeight,{format:mn,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),oe.setContext(r),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function B(F){for(let K=0;K<F.removed.length;K++){const q=F.removed[K],Se=A.indexOf(q);Se>=0&&(A[Se]=null,I[Se].disconnect(q))}for(let K=0;K<F.added.length;K++){const q=F.added[K];let Se=A.indexOf(q);if(Se===-1){for(let pe=0;pe<I.length;pe++)if(pe>=A.length){A.push(q),Se=pe;break}else if(A[pe]===null){A[pe]=q,Se=pe;break}if(Se===-1)break}const Me=I[Se];Me&&Me.connect(q)}}const he=new U,ce=new U;function xe(F,K,q){he.setFromMatrixPosition(K.matrixWorld),ce.setFromMatrixPosition(q.matrixWorld);const Se=he.distanceTo(ce),Me=K.projectionMatrix.elements,pe=q.projectionMatrix.elements,Ie=Me[14]/(Me[10]-1),Ce=Me[14]/(Me[10]+1),ze=(Me[9]+1)/Me[5],Xe=(Me[9]-1)/Me[5],Be=(Me[8]-1)/Me[0],Q=(pe[8]+1)/pe[0],b=Ie*Be,se=Ie*Q,ie=Se/(-Be+Q),J=ie*-Be;if(K.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(J),F.translateZ(ie),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),Me[10]===-1)F.projectionMatrix.copy(K.projectionMatrix),F.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const G=Ie+ie,S=Ce+ie,g=b-J,R=se+(Se-J),W=ze*Ce/S*G,O=Xe*Ce/S*G;F.projectionMatrix.makePerspective(g,R,W,O,G,S),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function fe(F,K){K===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(K.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;let K=F.near,q=F.far;p.texture!==null&&(p.depthNear>0&&(K=p.depthNear),p.depthFar>0&&(q=p.depthFar)),$.near=te.near=T.near=K,$.far=te.far=T.far=q,(X!==$.near||Z!==$.far)&&(r.updateRenderState({depthNear:$.near,depthFar:$.far}),X=$.near,Z=$.far),$.layers.mask=F.layers.mask|6,T.layers.mask=$.layers.mask&-5,te.layers.mask=$.layers.mask&-3;const Se=F.parent,Me=$.cameras;fe($,Se);for(let pe=0;pe<Me.length;pe++)fe(Me[pe],Se);Me.length===2?xe($,T,te):$.projectionMatrix.copy(T.projectionMatrix),_e(F,$,Se)};function _e(F,K,q){q===null?F.matrix.copy(K.matrixWorld):(F.matrix.copy(q.matrixWorld),F.matrix.invert(),F.matrix.multiply(K.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(K.projectionMatrix),F.projectionMatrixInverse.copy(K.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=zl*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(F){c=F,h!==null&&(h.fixedFoveation=F),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=F)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh($)},this.getCameraTexture=function(F){return d[F]};let re=null;function ue(F,K){if(u=K.getViewerPose(l||a),_=K,u!==null){const q=u.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let Se=!1;q.length!==$.cameras.length&&($.cameras.length=0,Se=!0);for(let Ce=0;Ce<q.length;Ce++){const ze=q[Ce];let Xe=null;if(m!==null)Xe=m.getViewport(ze);else{const Q=f.getViewSubImage(h,ze);Xe=Q.viewport,Ce===0&&(e.setRenderTargetTextures(w,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(w))}let Be=L[Ce];Be===void 0&&(Be=new Tt,Be.layers.enable(Ce),Be.viewport=new Mt,L[Ce]=Be),Be.matrix.fromArray(ze.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(ze.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Ce===0&&($.matrix.copy(Be.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Se===!0&&$.cameras.push(Be)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const Ce=f.getDepthInformation(q[0]);Ce&&Ce.isValid&&Ce.texture&&p.init(Ce,r.renderState)}if(Me&&Me.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let Ce=0;Ce<q.length;Ce++){const ze=q[Ce].camera;if(ze){let Xe=d[ze];Xe||(Xe=new fd,d[ze]=Xe);const Be=f.getCameraImage(ze);Xe.sourceTexture=Be}}}}for(let q=0;q<I.length;q++){const Se=A[q],Me=I[q];Se!==null&&Me!==void 0&&Me.update(Se,K,l||a)}re&&re(F,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),_=null}const oe=new _d;oe.setAnimationLoop(ue),this.setAnimationLoop=function(F){re=F},this.dispose=function(){}}}const Gi=new Ft,kx=new ht;function Hx(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,pd(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,v,y,w){d.isMeshBasicMaterial?s(p,d):d.isMeshLambertMaterial?(s(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,w)):d.isMeshMatcapMaterial?(s(p,d),_(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),x(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,v,y):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Jt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Jt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const v=e.get(d),y=v.envMap,w=v.envMapRotation;y&&(p.envMap.value=y,Gi.copy(w),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),p.envMapRotation.value.setFromMatrix4(kx.makeRotationFromEuler(Gi)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,v,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*v,p.scale.value=y*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,v){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Jt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){const v=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Gx(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const w=y.program;i.uniformBlockBinding(v,w)}function l(v,y){let w=r[v.id];w===void 0&&(_(v),w=u(v),r[v.id]=w,v.addEventListener("dispose",p));const I=y.program;i.updateUBOMapping(v,I);const A=e.render.frame;s[v.id]!==A&&(h(v),s[v.id]=A)}function u(v){const y=f();v.__bindingPointIndex=y;const w=n.createBuffer(),I=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,I,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,w),w}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const y=r[v.id],w=v.uniforms,I=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,P=w.length;A<P;A++){const M=Array.isArray(w[A])?w[A]:[w[A]];for(let T=0,te=M.length;T<te;T++){const L=M[T];if(m(L,A,T,I)===!0){const $=L.__offset,X=Array.isArray(L.value)?L.value:[L.value];let Z=0;for(let H=0;H<X.length;H++){const z=X[H],B=x(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,$+Z,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,Z),Z+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(v,y,w,I){const A=v.value,P=y+"_"+w;if(I[P]===void 0)return typeof A=="number"||typeof A=="boolean"?I[P]=A:I[P]=A.clone(),!0;{const M=I[P];if(typeof A=="number"||typeof A=="boolean"){if(M!==A)return I[P]=A,!0}else if(M.equals(A)===!1)return M.copy(A),!0}return!1}function _(v){const y=v.uniforms;let w=0;const I=16;for(let P=0,M=y.length;P<M;P++){const T=Array.isArray(y[P])?y[P]:[y[P]];for(let te=0,L=T.length;te<L;te++){const $=T[te],X=Array.isArray($.value)?$.value:[$.value];for(let Z=0,H=X.length;Z<H;Z++){const z=X[Z],B=x(z),he=w%I,ce=he%B.boundary,xe=he+ce;w+=ce,xe!==0&&I-xe<B.storage&&(w+=I-xe),$.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=w,w+=B.storage}}}const A=w%I;return A>0&&(w+=I-A),v.__size=w,v.__cache={},this}function x(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ve("WebGLRenderer: Unsupported uniform value type.",v),y}function p(v){const y=v.target;y.removeEventListener("dispose",p);const w=a.indexOf(y.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:c,update:l,dispose:d}}const Vx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let vn=null;function Wx(){return vn===null&&(vn=new Fp(Vx,16,16,$r,Zn),vn.name="DFG_LUT",vn.minFilter=zt,vn.magFilter=zt,vn.wrapS=Xn,vn.wrapT=Xn,vn.generateMipmaps=!1,vn.needsUpdate=!0),vn}class wi{constructor(e={}){const{canvas:t=dp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:m=rn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const x=m,p=new Set([lc,oc,ac]),d=new Set([rn,Ln,ws,As,rc,sc]),v=new Uint32Array(4),y=new Int32Array(4);let w=null,I=null;const A=[],P=[];let M=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let te=!1;this._outputColorSpace=on;let L=0,$=0,X=null,Z=-1,H=null;const z=new Mt,B=new Mt;let he=null;const ce=new nt(0);let xe=0,fe=t.width,_e=t.height,re=1,ue=null,oe=null;const F=new Mt(0,0,fe,_e),K=new Mt(0,0,fe,_e);let q=!1;const Se=new mc;let Me=!1,pe=!1;const Ie=new ht,Ce=new U,ze=new Mt,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function Q(){return X===null?re:1}let b=i;function se(E,N){return t.getContext(E,N)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nc}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",Qe,!1),b===null){const N="webgl2";if(b=se(N,E),b===null)throw se(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Ke("WebGLRenderer: "+E.message),E}let ie,J,G,S,g,R,W,O,C,Y,ne,le,Te,ae,de,Ee,Pe,be,Ge,D,ve,ge,Re;function me(){ie=new Xg(b),ie.init(),ve=new Fx(b,ie),J=new Og(b,ie,e,ve),G=new Dx(b,ie),J.reversedDepthBuffer&&h&&G.buffers.depth.setReversed(!0),S=new qg(b),g=new vx,R=new Ux(b,ie,G,g,J,ve,S),W=new Wg(T),O=new Qp(b),ge=new Fg(b,O),C=new $g(b,O,S,ge),Y=new Zg(b,C,O,ge,S),be=new jg(b,J,R),de=new Bg(g),ne=new xx(T,W,ie,J,ge,de),le=new Hx(T,g),Te=new Sx,ae=new Ax(ie),Pe=new Ug(T,W,G,Y,_,c),Ee=new Ix(T,Y,J),Re=new Gx(b,S,J,G),Ge=new Ng(b,ie,S),D=new Yg(b,ie,S),S.programs=ne.programs,T.capabilities=J,T.extensions=ie,T.properties=g,T.renderLists=Te,T.shadowMap=Ee,T.state=G,T.info=S}me(),x!==rn&&(M=new Jg(x,t.width,t.height,r,s));const ee=new zx(T,b);this.xr=ee,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const E=ie.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ie.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(E){E!==void 0&&(re=E,this.setSize(fe,_e,!1))},this.getSize=function(E){return E.set(fe,_e)},this.setSize=function(E,N,j=!0){if(ee.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=E,_e=N,t.width=Math.floor(E*re),t.height=Math.floor(N*re),j===!0&&(t.style.width=E+"px",t.style.height=N+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(fe*re,_e*re).floor()},this.setDrawingBufferSize=function(E,N,j){fe=E,_e=N,re=j,t.width=Math.floor(E*j),t.height=Math.floor(N*j),this.setViewport(0,0,E,N)},this.setEffects=function(E){if(x===rn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let N=0;N<E.length;N++)if(E[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(z)},this.getViewport=function(E){return E.copy(F)},this.setViewport=function(E,N,j,V){E.isVector4?F.set(E.x,E.y,E.z,E.w):F.set(E,N,j,V),G.viewport(z.copy(F).multiplyScalar(re).round())},this.getScissor=function(E){return E.copy(K)},this.setScissor=function(E,N,j,V){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,N,j,V),G.scissor(B.copy(K).multiplyScalar(re).round())},this.getScissorTest=function(){return q},this.setScissorTest=function(E){G.setScissorTest(q=E)},this.setOpaqueSort=function(E){ue=E},this.setTransparentSort=function(E){oe=E},this.getClearColor=function(E){return E.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,j=!0){let V=0;if(E){let k=!1;if(X!==null){const we=X.texture.format;k=p.has(we)}if(k){const we=X.texture.type,Le=d.has(we),Ae=Pe.getClearColor(),Ue=Pe.getClearAlpha(),Ne=Ae.r,$e=Ae.g,je=Ae.b;Le?(v[0]=Ne,v[1]=$e,v[2]=je,v[3]=Ue,b.clearBufferuiv(b.COLOR,0,v)):(y[0]=Ne,y[1]=$e,y[2]=je,y[3]=Ue,b.clearBufferiv(b.COLOR,0,y))}else V|=b.COLOR_BUFFER_BIT}N&&(V|=b.DEPTH_BUFFER_BIT),j&&(V|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&b.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",Qe,!1),Pe.dispose(),Te.dispose(),ae.dispose(),g.dispose(),W.dispose(),Y.dispose(),ge.dispose(),Re.dispose(),ne.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",ri),ee.removeEventListener("sessionend",zc),Fi.stop()};function De(E){E.preventDefault(),eu("WebGLRenderer: Context Lost."),te=!0}function He(){eu("WebGLRenderer: Context Restored."),te=!1;const E=S.autoReset,N=Ee.enabled,j=Ee.autoUpdate,V=Ee.needsUpdate,k=Ee.type;me(),S.autoReset=E,Ee.enabled=N,Ee.autoUpdate=j,Ee.needsUpdate=V,Ee.type=k}function Qe(E){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function et(E){const N=E.target;N.removeEventListener("dispose",et),Vt(N)}function Vt(E){Wt(E),g.remove(E)}function Wt(E){const N=g.get(E).programs;N!==void 0&&(N.forEach(function(j){ne.releaseProgram(j)}),E.isShaderMaterial&&ne.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,j,V,k,we){N===null&&(N=Xe);const Le=k.isMesh&&k.matrixWorld.determinant()<0,Ae=Af(E,N,j,V,k);G.setMaterial(V,Le);let Ue=j.index,Ne=1;if(V.wireframe===!0){if(Ue=C.getWireframeAttribute(j),Ue===void 0)return;Ne=2}const $e=j.drawRange,je=j.attributes.position;let Oe=$e.start*Ne,ot=($e.start+$e.count)*Ne;we!==null&&(Oe=Math.max(Oe,we.start*Ne),ot=Math.min(ot,(we.start+we.count)*Ne)),Ue!==null?(Oe=Math.max(Oe,0),ot=Math.min(ot,Ue.count)):je!=null&&(Oe=Math.max(Oe,0),ot=Math.min(ot,je.count));const St=ot-Oe;if(St<0||St===1/0)return;ge.setup(k,V,Ae,j,Ue);let vt,lt=Ge;if(Ue!==null&&(vt=O.get(Ue),lt=D,lt.setIndex(vt)),k.isMesh)V.wireframe===!0?(G.setLineWidth(V.wireframeLinewidth*Q()),lt.setMode(b.LINES)):lt.setMode(b.TRIANGLES);else if(k.isLine){let Nt=V.linewidth;Nt===void 0&&(Nt=1),G.setLineWidth(Nt*Q()),k.isLineSegments?lt.setMode(b.LINES):k.isLineLoop?lt.setMode(b.LINE_LOOP):lt.setMode(b.LINE_STRIP)}else k.isPoints?lt.setMode(b.POINTS):k.isSprite&&lt.setMode(b.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Ca("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))lt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Nt=k._multiDrawStarts,Fe=k._multiDrawCounts,en=k._multiDrawCount,tt=Ue?O.get(Ue).bytesPerElement:1,cn=g.get(V).currentProgram.getUniforms();for(let _n=0;_n<en;_n++)cn.setValue(b,"_gl_DrawID",_n),lt.render(Nt[_n]/tt,Fe[_n])}else if(k.isInstancedMesh)lt.renderInstances(Oe,St,k.count);else if(j.isInstancedBufferGeometry){const Nt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Fe=Math.min(j.instanceCount,Nt);lt.renderInstances(Oe,St,Fe)}else lt.render(Oe,St)};function ii(E,N,j){E.transparent===!0&&E.side===Hn&&E.forceSinglePass===!1?(E.side=Jt,E.needsUpdate=!0,Ws(E,N,j),E.side=gi,E.needsUpdate=!0,Ws(E,N,j),E.side=Hn):Ws(E,N,j)}this.compile=function(E,N,j=null){j===null&&(j=E),I=ae.get(j),I.init(N),P.push(I),j.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(I.pushLight(k),k.castShadow&&I.pushShadow(k))}),E!==j&&E.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(I.pushLight(k),k.castShadow&&I.pushShadow(k))}),I.setupLights();const V=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const we=k.material;if(we)if(Array.isArray(we))for(let Le=0;Le<we.length;Le++){const Ae=we[Le];ii(Ae,j,k),V.add(Ae)}else ii(we,j,k),V.add(we)}),I=P.pop(),V},this.compileAsync=function(E,N,j=null){const V=this.compile(E,N,j);return new Promise(k=>{function we(){if(V.forEach(function(Le){g.get(Le).currentProgram.isReady()&&V.delete(Le)}),V.size===0){k(E);return}setTimeout(we,10)}ie.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Ct=null;function Ui(E){Ct&&Ct(E)}function ri(){Fi.stop()}function zc(){Fi.start()}const Fi=new _d;Fi.setAnimationLoop(Ui),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(E){Ct=E,ee.setAnimationLoop(E),E===null?Fi.stop():Fi.start()},ee.addEventListener("sessionstart",ri),ee.addEventListener("sessionend",zc),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(te===!0)return;const j=ee.enabled===!0&&ee.isPresenting===!0,V=M!==null&&(X===null||j)&&M.begin(T,X);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(N),N=ee.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,N,X),I=ae.get(E,P.length),I.init(N),P.push(I),Ie.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Se.setFromProjectionMatrix(Ie,An,N.reversedDepth),pe=this.localClippingEnabled,Me=de.init(this.clippingPlanes,pe),w=Te.get(E,A.length),w.init(),A.push(w),ee.enabled===!0&&ee.isPresenting===!0){const Le=T.xr.getDepthSensingMesh();Le!==null&&oo(Le,N,-1/0,T.sortObjects)}oo(E,N,0,T.sortObjects),w.finish(),T.sortObjects===!0&&w.sort(ue,oe),Be=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Be&&Pe.addToRenderList(w,E),this.info.render.frame++,Me===!0&&de.beginShadows();const k=I.state.shadowsArray;if(Ee.render(k,E,N),Me===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&M.hasRenderPass())===!1){const Le=w.opaque,Ae=w.transmissive;if(I.setupLights(),N.isArrayCamera){const Ue=N.cameras;if(Ae.length>0)for(let Ne=0,$e=Ue.length;Ne<$e;Ne++){const je=Ue[Ne];Hc(Le,Ae,E,je)}Be&&Pe.render(E);for(let Ne=0,$e=Ue.length;Ne<$e;Ne++){const je=Ue[Ne];kc(w,E,je,je.viewport)}}else Ae.length>0&&Hc(Le,Ae,E,N),Be&&Pe.render(E),kc(w,E,N)}X!==null&&$===0&&(R.updateMultisampleRenderTarget(X),R.updateRenderTargetMipmap(X)),V&&M.end(T),E.isScene===!0&&E.onAfterRender(T,E,N),ge.resetDefaultState(),Z=-1,H=null,P.pop(),P.length>0?(I=P[P.length-1],Me===!0&&de.setGlobalState(T.clippingPlanes,I.state.camera)):I=null,A.pop(),A.length>0?w=A[A.length-1]:w=null};function oo(E,N,j,V){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)I.pushLight(E),E.castShadow&&I.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Se.intersectsSprite(E)){V&&ze.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ie);const Le=Y.update(E),Ae=E.material;Ae.visible&&w.push(E,Le,Ae,j,ze.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Se.intersectsObject(E))){const Le=Y.update(E),Ae=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ze.copy(E.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),ze.copy(Le.boundingSphere.center)),ze.applyMatrix4(E.matrixWorld).applyMatrix4(Ie)),Array.isArray(Ae)){const Ue=Le.groups;for(let Ne=0,$e=Ue.length;Ne<$e;Ne++){const je=Ue[Ne],Oe=Ae[je.materialIndex];Oe&&Oe.visible&&w.push(E,Le,Oe,j,ze.z,je)}}else Ae.visible&&w.push(E,Le,Ae,j,ze.z,null)}}const we=E.children;for(let Le=0,Ae=we.length;Le<Ae;Le++)oo(we[Le],N,j,V)}function kc(E,N,j,V){const{opaque:k,transmissive:we,transparent:Le}=E;I.setupLightsView(j),Me===!0&&de.setGlobalState(T.clippingPlanes,j),V&&G.viewport(z.copy(V)),k.length>0&&Vs(k,N,j),we.length>0&&Vs(we,N,j),Le.length>0&&Vs(Le,N,j),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function Hc(E,N,j,V){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[V.id]===void 0){const Oe=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[V.id]=new Cn(1,1,{generateMipmaps:!0,type:Oe?Zn:rn,minFilter:qi,samples:Math.max(4,J.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const we=I.state.transmissionRenderTarget[V.id],Le=V.viewport||z;we.setSize(Le.z*T.transmissionResolutionScale,Le.w*T.transmissionResolutionScale);const Ae=T.getRenderTarget(),Ue=T.getActiveCubeFace(),Ne=T.getActiveMipmapLevel();T.setRenderTarget(we),T.getClearColor(ce),xe=T.getClearAlpha(),xe<1&&T.setClearColor(16777215,.5),T.clear(),Be&&Pe.render(j);const $e=T.toneMapping;T.toneMapping=Rn;const je=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),I.setupLightsView(V),Me===!0&&de.setGlobalState(T.clippingPlanes,V),Vs(E,j,V),R.updateMultisampleRenderTarget(we),R.updateRenderTargetMipmap(we),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let ot=0,St=N.length;ot<St;ot++){const vt=N[ot],{object:lt,geometry:Nt,material:Fe,group:en}=vt;if(Fe.side===Hn&&lt.layers.test(V.layers)){const tt=Fe.side;Fe.side=Jt,Fe.needsUpdate=!0,Gc(lt,j,V,Nt,Fe,en),Fe.side=tt,Fe.needsUpdate=!0,Oe=!0}}Oe===!0&&(R.updateMultisampleRenderTarget(we),R.updateRenderTargetMipmap(we))}T.setRenderTarget(Ae,Ue,Ne),T.setClearColor(ce,xe),je!==void 0&&(V.viewport=je),T.toneMapping=$e}function Vs(E,N,j){const V=N.isScene===!0?N.overrideMaterial:null;for(let k=0,we=E.length;k<we;k++){const Le=E[k],{object:Ae,geometry:Ue,group:Ne}=Le;let $e=Le.material;$e.allowOverride===!0&&V!==null&&($e=V),Ae.layers.test(j.layers)&&Gc(Ae,N,j,Ue,$e,Ne)}}function Gc(E,N,j,V,k,we){E.onBeforeRender(T,N,j,V,k,we),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(T,N,j,V,E,we),k.transparent===!0&&k.side===Hn&&k.forceSinglePass===!1?(k.side=Jt,k.needsUpdate=!0,T.renderBufferDirect(j,N,V,k,E,we),k.side=gi,k.needsUpdate=!0,T.renderBufferDirect(j,N,V,k,E,we),k.side=Hn):T.renderBufferDirect(j,N,V,k,E,we),E.onAfterRender(T,N,j,V,k,we)}function Ws(E,N,j){N.isScene!==!0&&(N=Xe);const V=g.get(E),k=I.state.lights,we=I.state.shadowsArray,Le=k.state.version,Ae=ne.getParameters(E,k.state,we,N,j),Ue=ne.getProgramCacheKey(Ae);let Ne=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?N.environment:null,V.fog=N.fog;const $e=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=W.get(E.envMap||V.environment,$e),V.envMapRotation=V.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Ne===void 0&&(E.addEventListener("dispose",et),Ne=new Map,V.programs=Ne);let je=Ne.get(Ue);if(je!==void 0){if(V.currentProgram===je&&V.lightsStateVersion===Le)return Wc(E,Ae),je}else Ae.uniforms=ne.getUniforms(E),E.onBeforeCompile(Ae,T),je=ne.acquireProgram(Ae,Ue),Ne.set(Ue,je),V.uniforms=Ae.uniforms;const Oe=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Oe.clippingPlanes=de.uniform),Wc(E,Ae),V.needsLights=Cf(E),V.lightsStateVersion=Le,V.needsLights&&(Oe.ambientLightColor.value=k.state.ambient,Oe.lightProbe.value=k.state.probe,Oe.directionalLights.value=k.state.directional,Oe.directionalLightShadows.value=k.state.directionalShadow,Oe.spotLights.value=k.state.spot,Oe.spotLightShadows.value=k.state.spotShadow,Oe.rectAreaLights.value=k.state.rectArea,Oe.ltc_1.value=k.state.rectAreaLTC1,Oe.ltc_2.value=k.state.rectAreaLTC2,Oe.pointLights.value=k.state.point,Oe.pointLightShadows.value=k.state.pointShadow,Oe.hemisphereLights.value=k.state.hemi,Oe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Oe.spotLightMatrix.value=k.state.spotLightMatrix,Oe.spotLightMap.value=k.state.spotLightMap,Oe.pointShadowMatrix.value=k.state.pointShadowMatrix),V.currentProgram=je,V.uniformsList=null,je}function Vc(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=ya.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Wc(E,N){const j=g.get(E);j.outputColorSpace=N.outputColorSpace,j.batching=N.batching,j.batchingColor=N.batchingColor,j.instancing=N.instancing,j.instancingColor=N.instancingColor,j.instancingMorph=N.instancingMorph,j.skinning=N.skinning,j.morphTargets=N.morphTargets,j.morphNormals=N.morphNormals,j.morphColors=N.morphColors,j.morphTargetsCount=N.morphTargetsCount,j.numClippingPlanes=N.numClippingPlanes,j.numIntersection=N.numClipIntersection,j.vertexAlphas=N.vertexAlphas,j.vertexTangents=N.vertexTangents,j.toneMapping=N.toneMapping}function Af(E,N,j,V,k){N.isScene!==!0&&(N=Xe),R.resetTextureUnits();const we=N.fog,Le=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?N.environment:null,Ae=X===null?T.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Yr,Ue=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ne=W.get(V.envMap||Le,Ue),$e=V.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,je=!!j.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Oe=!!j.morphAttributes.position,ot=!!j.morphAttributes.normal,St=!!j.morphAttributes.color;let vt=Rn;V.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(vt=T.toneMapping);const lt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Nt=lt!==void 0?lt.length:0,Fe=g.get(V),en=I.state.lights;if(Me===!0&&(pe===!0||E!==H)){const Pt=E===H&&V.id===Z;de.setState(V,E,Pt)}let tt=!1;V.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==en.state.version||Fe.outputColorSpace!==Ae||k.isBatchedMesh&&Fe.batching===!1||!k.isBatchedMesh&&Fe.batching===!0||k.isBatchedMesh&&Fe.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Fe.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Fe.instancing===!1||!k.isInstancedMesh&&Fe.instancing===!0||k.isSkinnedMesh&&Fe.skinning===!1||!k.isSkinnedMesh&&Fe.skinning===!0||k.isInstancedMesh&&Fe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Fe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Fe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Fe.instancingMorph===!1&&k.morphTexture!==null||Fe.envMap!==Ne||V.fog===!0&&Fe.fog!==we||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==de.numPlanes||Fe.numIntersection!==de.numIntersection)||Fe.vertexAlphas!==$e||Fe.vertexTangents!==je||Fe.morphTargets!==Oe||Fe.morphNormals!==ot||Fe.morphColors!==St||Fe.toneMapping!==vt||Fe.morphTargetsCount!==Nt)&&(tt=!0):(tt=!0,Fe.__version=V.version);let cn=Fe.currentProgram;tt===!0&&(cn=Ws(V,N,k));let _n=!1,Ni=!1,xr=!1;const ut=cn.getUniforms(),It=Fe.uniforms;if(G.useProgram(cn.program)&&(_n=!0,Ni=!0,xr=!0),V.id!==Z&&(Z=V.id,Ni=!0),_n||H!==E){G.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ut.setValue(b,"projectionMatrix",E.projectionMatrix),ut.setValue(b,"viewMatrix",E.matrixWorldInverse);const ai=ut.map.cameraPosition;ai!==void 0&&ai.setValue(b,Ce.setFromMatrixPosition(E.matrixWorld)),J.logarithmicDepthBuffer&&ut.setValue(b,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ut.setValue(b,"isOrthographic",E.isOrthographicCamera===!0),H!==E&&(H=E,Ni=!0,xr=!0)}if(Fe.needsLights&&(en.state.directionalShadowMap.length>0&&ut.setValue(b,"directionalShadowMap",en.state.directionalShadowMap,R),en.state.spotShadowMap.length>0&&ut.setValue(b,"spotShadowMap",en.state.spotShadowMap,R),en.state.pointShadowMap.length>0&&ut.setValue(b,"pointShadowMap",en.state.pointShadowMap,R)),k.isSkinnedMesh){ut.setOptional(b,k,"bindMatrix"),ut.setOptional(b,k,"bindMatrixInverse");const Pt=k.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ut.setValue(b,"boneTexture",Pt.boneTexture,R))}k.isBatchedMesh&&(ut.setOptional(b,k,"batchingTexture"),ut.setValue(b,"batchingTexture",k._matricesTexture,R),ut.setOptional(b,k,"batchingIdTexture"),ut.setValue(b,"batchingIdTexture",k._indirectTexture,R),ut.setOptional(b,k,"batchingColorTexture"),k._colorsTexture!==null&&ut.setValue(b,"batchingColorTexture",k._colorsTexture,R));const si=j.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&be.update(k,j,cn),(Ni||Fe.receiveShadow!==k.receiveShadow)&&(Fe.receiveShadow=k.receiveShadow,ut.setValue(b,"receiveShadow",k.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&N.environment!==null&&(It.envMapIntensity.value=N.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=Wx()),Ni&&(ut.setValue(b,"toneMappingExposure",T.toneMappingExposure),Fe.needsLights&&Rf(It,xr),we&&V.fog===!0&&le.refreshFogUniforms(It,we),le.refreshMaterialUniforms(It,V,re,_e,I.state.transmissionRenderTarget[E.id]),ya.upload(b,Vc(Fe),It,R)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ya.upload(b,Vc(Fe),It,R),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ut.setValue(b,"center",k.center),ut.setValue(b,"modelViewMatrix",k.modelViewMatrix),ut.setValue(b,"normalMatrix",k.normalMatrix),ut.setValue(b,"modelMatrix",k.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Pt=V.uniformsGroups;for(let ai=0,vr=Pt.length;ai<vr;ai++){const Xc=Pt[ai];Re.update(Xc,cn),Re.bind(Xc,cn)}}return cn}function Rf(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Cf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(E,N,j){const V=g.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),g.get(E.texture).__webglTexture=N,g.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:j,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){const j=g.get(E);j.__webglFramebuffer=N,j.__useDefaultFramebuffer=N===void 0};const Pf=b.createFramebuffer();this.setRenderTarget=function(E,N=0,j=0){X=E,L=N,$=j;let V=null,k=!1,we=!1;if(E){const Ae=g.get(E);if(Ae.__useDefaultFramebuffer!==void 0){G.bindFramebuffer(b.FRAMEBUFFER,Ae.__webglFramebuffer),z.copy(E.viewport),B.copy(E.scissor),he=E.scissorTest,G.viewport(z),G.scissor(B),G.setScissorTest(he),Z=-1;return}else if(Ae.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(Ae.__hasExternalTextures)R.rebindTextures(E,g.get(E.texture).__webglTexture,g.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const $e=E.depthTexture;if(Ae.__boundDepthTexture!==$e){if($e!==null&&g.has($e)&&(E.width!==$e.image.width||E.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Ue=E.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(we=!0);const Ne=g.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ne[N])?V=Ne[N][j]:V=Ne[N],k=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?V=g.get(E).__webglMultisampledFramebuffer:Array.isArray(Ne)?V=Ne[j]:V=Ne,z.copy(E.viewport),B.copy(E.scissor),he=E.scissorTest}else z.copy(F).multiplyScalar(re).floor(),B.copy(K).multiplyScalar(re).floor(),he=q;if(j!==0&&(V=Pf),G.bindFramebuffer(b.FRAMEBUFFER,V)&&G.drawBuffers(E,V),G.viewport(z),G.scissor(B),G.setScissorTest(he),k){const Ae=g.get(E.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ae.__webglTexture,j)}else if(we){const Ae=N;for(let Ue=0;Ue<E.textures.length;Ue++){const Ne=g.get(E.textures[Ue]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+Ue,Ne.__webglTexture,j,Ae)}}else if(E!==null&&j!==0){const Ae=g.get(E.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Ae.__webglTexture,j)}Z=-1},this.readRenderTargetPixels=function(E,N,j,V,k,we,Le,Ae=0){if(!(E&&E.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=g.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue){G.bindFramebuffer(b.FRAMEBUFFER,Ue);try{const Ne=E.textures[Ae],$e=Ne.format,je=Ne.type;if(E.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Ae),!J.textureFormatReadable($e)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(je)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-V&&j>=0&&j<=E.height-k&&b.readPixels(N,j,V,k,ve.convert($e),ve.convert(je),we)}finally{const Ne=X!==null?g.get(X).__webglFramebuffer:null;G.bindFramebuffer(b.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(E,N,j,V,k,we,Le,Ae=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=g.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue)if(N>=0&&N<=E.width-V&&j>=0&&j<=E.height-k){G.bindFramebuffer(b.FRAMEBUFFER,Ue);const Ne=E.textures[Ae],$e=Ne.format,je=Ne.type;if(E.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Ae),!J.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Oe),b.bufferData(b.PIXEL_PACK_BUFFER,we.byteLength,b.STREAM_READ),b.readPixels(N,j,V,k,ve.convert($e),ve.convert(je),0);const ot=X!==null?g.get(X).__webglFramebuffer:null;G.bindFramebuffer(b.FRAMEBUFFER,ot);const St=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await fp(b,St,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Oe),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,we),b.deleteBuffer(Oe),b.deleteSync(St),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,j=0){const V=Math.pow(2,-j),k=Math.floor(E.image.width*V),we=Math.floor(E.image.height*V),Le=N!==null?N.x:0,Ae=N!==null?N.y:0;R.setTexture2D(E,0),b.copyTexSubImage2D(b.TEXTURE_2D,j,0,0,Le,Ae,k,we),G.unbindTexture()};const Lf=b.createFramebuffer(),If=b.createFramebuffer();this.copyTextureToTexture=function(E,N,j=null,V=null,k=0,we=0){let Le,Ae,Ue,Ne,$e,je,Oe,ot,St;const vt=E.isCompressedTexture?E.mipmaps[we]:E.image;if(j!==null)Le=j.max.x-j.min.x,Ae=j.max.y-j.min.y,Ue=j.isBox3?j.max.z-j.min.z:1,Ne=j.min.x,$e=j.min.y,je=j.isBox3?j.min.z:0;else{const It=Math.pow(2,-k);Le=Math.floor(vt.width*It),Ae=Math.floor(vt.height*It),E.isDataArrayTexture?Ue=vt.depth:E.isData3DTexture?Ue=Math.floor(vt.depth*It):Ue=1,Ne=0,$e=0,je=0}V!==null?(Oe=V.x,ot=V.y,St=V.z):(Oe=0,ot=0,St=0);const lt=ve.convert(N.format),Nt=ve.convert(N.type);let Fe;N.isData3DTexture?(R.setTexture3D(N,0),Fe=b.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(R.setTexture2DArray(N,0),Fe=b.TEXTURE_2D_ARRAY):(R.setTexture2D(N,0),Fe=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,N.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,N.unpackAlignment);const en=b.getParameter(b.UNPACK_ROW_LENGTH),tt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),cn=b.getParameter(b.UNPACK_SKIP_PIXELS),_n=b.getParameter(b.UNPACK_SKIP_ROWS),Ni=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,vt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,vt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ne),b.pixelStorei(b.UNPACK_SKIP_ROWS,$e),b.pixelStorei(b.UNPACK_SKIP_IMAGES,je);const xr=E.isDataArrayTexture||E.isData3DTexture,ut=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){const It=g.get(E),si=g.get(N),Pt=g.get(It.__renderTarget),ai=g.get(si.__renderTarget);G.bindFramebuffer(b.READ_FRAMEBUFFER,Pt.__webglFramebuffer),G.bindFramebuffer(b.DRAW_FRAMEBUFFER,ai.__webglFramebuffer);for(let vr=0;vr<Ue;vr++)xr&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,g.get(E).__webglTexture,k,je+vr),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,g.get(N).__webglTexture,we,St+vr)),b.blitFramebuffer(Ne,$e,Le,Ae,Oe,ot,Le,Ae,b.DEPTH_BUFFER_BIT,b.NEAREST);G.bindFramebuffer(b.READ_FRAMEBUFFER,null),G.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(k!==0||E.isRenderTargetTexture||g.has(E)){const It=g.get(E),si=g.get(N);G.bindFramebuffer(b.READ_FRAMEBUFFER,Lf),G.bindFramebuffer(b.DRAW_FRAMEBUFFER,If);for(let Pt=0;Pt<Ue;Pt++)xr?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,It.__webglTexture,k,je+Pt):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,It.__webglTexture,k),ut?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,si.__webglTexture,we,St+Pt):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,si.__webglTexture,we),k!==0?b.blitFramebuffer(Ne,$e,Le,Ae,Oe,ot,Le,Ae,b.COLOR_BUFFER_BIT,b.NEAREST):ut?b.copyTexSubImage3D(Fe,we,Oe,ot,St+Pt,Ne,$e,Le,Ae):b.copyTexSubImage2D(Fe,we,Oe,ot,Ne,$e,Le,Ae);G.bindFramebuffer(b.READ_FRAMEBUFFER,null),G.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else ut?E.isDataTexture||E.isData3DTexture?b.texSubImage3D(Fe,we,Oe,ot,St,Le,Ae,Ue,lt,Nt,vt.data):N.isCompressedArrayTexture?b.compressedTexSubImage3D(Fe,we,Oe,ot,St,Le,Ae,Ue,lt,vt.data):b.texSubImage3D(Fe,we,Oe,ot,St,Le,Ae,Ue,lt,Nt,vt):E.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,we,Oe,ot,Le,Ae,lt,Nt,vt.data):E.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,we,Oe,ot,vt.width,vt.height,lt,vt.data):b.texSubImage2D(b.TEXTURE_2D,we,Oe,ot,Le,Ae,lt,Nt,vt);b.pixelStorei(b.UNPACK_ROW_LENGTH,en),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,tt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,cn),b.pixelStorei(b.UNPACK_SKIP_ROWS,_n),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ni),we===0&&N.generateMipmaps&&b.generateMipmap(Fe),G.unbindTexture()},this.initRenderTarget=function(E){g.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),G.unbindTexture()},this.resetState=function(){L=0,$=0,X=null,G.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const pt=2777801,mt=40544,at=16777215,gt=16766208,_t=12852794,xt=16734208,ke={right:pt,left:mt,top:at,bottom:gt,front:_t,back:xt},$u={type:"change"},xc={type:"start"},yd={type:"end"},fa=new pc,Yu=new fi,Xx=Math.cos(70*gp.DEG2RAD),bt=new U,qt=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Go=1e-6;class Ai extends Kp{constructor(e,t=null){super(e,t),this.state=ct.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Br.ROTATE,MIDDLE:Br.DOLLY,RIGHT:Br.PAN},this.touches={ONE:Or.ROTATE,TWO:Or.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new _i,this._lastTargetPosition=new U,this._quat=new _i().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Su,this._sphericalDelta=new Su,this._scale=1,this._panOffset=new U,this._rotateStart=new We,this._rotateEnd=new We,this._rotateDelta=new We,this._panStart=new We,this._panEnd=new We,this._panDelta=new We,this._dollyStart=new We,this._dollyEnd=new We,this._dollyDelta=new We,this._dollyDirection=new U,this._mouse=new We,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Yx.bind(this),this._onPointerDown=$x.bind(this),this._onPointerUp=qx.bind(this),this._onContextMenu=tv.bind(this),this._onMouseWheel=Kx.bind(this),this._onKeyDown=Jx.bind(this),this._onTouchStart=Qx.bind(this),this._onTouchMove=ev.bind(this),this._onMouseDown=jx.bind(this),this._onMouseMove=Zx.bind(this),this._interceptControlDown=nv.bind(this),this._interceptControlUp=iv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($u),this.update(),this.state=ct.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;bt.copy(t).sub(this.target),bt.applyQuaternion(this._quat),this._spherical.setFromVector3(bt),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=qt:i>Math.PI&&(i-=qt),r<-Math.PI?r+=qt:r>Math.PI&&(r-=qt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(bt.setFromSpherical(this._spherical),bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=bt.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new U(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(fa.origin.copy(this.object.position),fa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fa.direction))<Xx?this.object.lookAt(this.target):(Yu.setFromNormalAndCoplanarPoint(this.object.up,this.target),fa.intersectPlane(Yu,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Go||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Go||this._lastTargetPosition.distanceToSquared(this.target)>Go?(this.dispatchEvent($u),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?qt/60*this.autoRotateSpeed*e:qt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){bt.setFromMatrixColumn(t,0),bt.multiplyScalar(-e),this._panOffset.add(bt)}_panUp(e,t){this.screenSpacePanning===!0?bt.setFromMatrixColumn(t,1):(bt.setFromMatrixColumn(t,0),bt.crossVectors(this.object.up,bt)),bt.multiplyScalar(e),this._panOffset.add(bt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;bt.copy(r).sub(this.target);let s=bt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new We,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function $x(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Yx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function qx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(yd),this.state=ct.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function jx(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Br.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ct.DOLLY;break;case Br.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ct.ROTATE}break;case Br.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(xc)}function Zx(n){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Kx(n){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(n.preventDefault(),this.dispatchEvent(xc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(yd))}function Jx(n){this.enabled!==!1&&this._handleKeyDown(n)}function Qx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Or.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ct.TOUCH_ROTATE;break;case Or.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case Or.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ct.TOUCH_DOLLY_PAN;break;case Or.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(xc)}function ev(n){switch(this._trackPointer(n),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ct.NONE}}function tv(n){this.enabled!==!1&&n.preventDefault()}function nv(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function iv(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Et=Object.freeze({Linear:Object.freeze({None:function(n){return n},In:function(n){return n},Out:function(n){return n},InOut:function(n){return n}}),Quadratic:Object.freeze({In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}}),Cubic:Object.freeze({In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}}),Quartic:Object.freeze({In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}}),Quintic:Object.freeze({In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}}),Sinusoidal:Object.freeze({In:function(n){return 1-Math.sin((1-n)*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.sin(Math.PI*(.5-n)))}}),Exponential:Object.freeze({In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}}),Circular:Object.freeze({In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}}),Elastic:Object.freeze({In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(n){var e=1.70158;return n===1?1:n*n*((e+1)*n-e)},Out:function(n){var e=1.70158;return n===0?0:--n*n*((e+1)*n+e)+1},InOut:function(n){var e=2.5949095;return(n*=2)<1?.5*(n*n*((e+1)*n-e)):.5*((n-=2)*n*((e+1)*n+e)+2)}}),Bounce:Object.freeze({In:function(n){return 1-Et.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?Et.Bounce.In(n*2)*.5:Et.Bounce.Out(n*2-1)*.5+.5}}),generatePow:function(n){return n===void 0&&(n=4),n=n<Number.EPSILON?Number.EPSILON:n,n=n>1e4?1e4:n,{In:function(e){return Math.pow(e,n)},Out:function(e){return 1-Math.pow(1-e,n)},InOut:function(e){return e<.5?Math.pow(e*2,n)/2:(1-Math.pow(2-e*2,n))/2+.5}}}}),vs=function(){return performance.now()},rv=function(){function n(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._tweens={},this._tweensAddedDuringUpdate={},this.add.apply(this,e)}return n.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];for(var r=0,s=t;r<s.length;r++){var a=s[r];(e=a._group)===null||e===void 0||e.remove(a),a._group=this,this._tweens[a.getId()]=a,this._tweensAddedDuringUpdate[a.getId()]=a}},n.prototype.remove=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var i=0,r=e;i<r.length;i++){var s=r[i];s._group=void 0,delete this._tweens[s.getId()],delete this._tweensAddedDuringUpdate[s.getId()]}},n.prototype.allStopped=function(){return this.getAll().every(function(e){return!e.isPlaying()})},n.prototype.update=function(e,t){e===void 0&&(e=vs()),t===void 0&&(t=!0);var i=Object.keys(this._tweens);if(i.length!==0)for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var s=this._tweens[i[r]],a=!t;s&&s.update(e,a)===!1&&!t&&this.remove(s)}i=Object.keys(this._tweensAddedDuringUpdate)}},n}(),Vl={Linear:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),s=Vl.Utils.Linear;return e<0?s(n[0],n[1],i):e>1?s(n[t],n[t-1],t-i):s(n[r],n[r+1>t?t:r+1],i-r)},Utils:{Linear:function(n,e,t){return(e-n)*t+n}}},bd=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),Wl=new rv,Gt=function(){function n(e,t){this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Et.Linear.None,this._interpolationFunction=Vl.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=bd.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1,this._object=e,typeof t=="object"?(this._group=t,t.add(this)):t===!0&&(this._group=Wl,Wl.add(this))}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.getDuration=function(){return this._duration},n.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},n.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},n.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},n.prototype.start=function(e,t){if(e===void 0&&(e=vs()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var r={};for(var s in this._valuesEnd)r[s]=this._valuesEnd[s];this._valuesEnd=r}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},n.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},n.prototype._setupProperties=function(e,t,i,r,s){for(var a in i){var o=e[a],c=Array.isArray(o),l=c?"array":typeof o,u=!c&&Array.isArray(i[a]);if(!(l==="undefined"||l==="function")){if(u){var f=i[a];if(f.length===0)continue;for(var h=[o],m=0,_=f.length;m<_;m+=1){var x=this._handleRelativeValue(o,f[m]);if(isNaN(x)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}h.push(x)}u&&(i[a]=h)}if((l==="object"||c)&&o&&!u){t[a]=c?[]:{};var p=o;for(var d in p)t[a][d]=p[d];r[a]=c?[]:{};var f=i[a];if(!this._isDynamic){var v={};for(var d in f)v[d]=f[d];i[a]=f=v}this._setupProperties(p,t[a],f,r[a],s)}else(typeof t[a]>"u"||s)&&(t[a]=o),c||(t[a]*=1),u?r[a]=i[a].slice().reverse():r[a]=t[a]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(this._startTime+this._duration),this},n.prototype.pause=function(e){return e===void 0&&(e=vs()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this)},n.prototype.resume=function(e){return e===void 0&&(e=vs()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this)},n.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},n.prototype.group=function(e){return e?(e.add(this),this):(console.warn("tween.group() without args has been removed, use group.add(tween) instead."),this)},n.prototype.remove=function(){var e;return(e=this._group)===null||e===void 0||e.remove(this),this},n.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},n.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},n.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},n.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},n.prototype.easing=function(e){return e===void 0&&(e=Et.Linear.None),this._easingFunction=e,this},n.prototype.interpolation=function(e){return e===void 0&&(e=Vl.Linear),this._interpolationFunction=e,this},n.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},n.prototype.onStart=function(e){return this._onStartCallback=e,this},n.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},n.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},n.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},n.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},n.prototype.onStop=function(e){return this._onStopCallback=e,this},n.prototype.update=function(e,t){var i=this,r;if(e===void 0&&(e=vs()),t===void 0&&(t=n.autoStartOnUpdate),this._isPaused)return!0;var s;if(!this._goToEnd&&!this._isPlaying)if(t)this.start(e,!0);else return!1;if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var a=e-this._startTime,o=this._duration+((r=this._repeatDelayTime)!==null&&r!==void 0?r:this._delayTime),c=this._duration+this._repeat*o,l=function(){if(i._duration===0||a>c)return 1;var x=Math.trunc(a/o),p=a-x*o,d=Math.min(p/i._duration,1);return d===0&&a===i._duration?1:d},u=l(),f=this._easingFunction(u);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,f),this._onUpdateCallback&&this._onUpdateCallback(this._object,u),this._duration===0||a>=this._duration)if(this._repeat>0){var h=Math.min(Math.trunc((a-this._duration)/o)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=h);for(s in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[s]=="string"&&(this._valuesStartRepeat[s]=this._valuesStartRepeat[s]+parseFloat(this._valuesEnd[s])),this._yoyo&&this._swapEndStartRepeatValues(s),this._valuesStart[s]=this._valuesStartRepeat[s];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=o*h,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var m=0,_=this._chainedTweens.length;m<_;m++)this._chainedTweens[m].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(e,t,i,r){for(var s in i)if(t[s]!==void 0){var a=t[s]||0,o=i[s],c=Array.isArray(e[s]),l=Array.isArray(o),u=!c&&l;u?e[s]=this._interpolationFunction(o,r):typeof o=="object"&&o?this._updateProperties(e[s],a,o,r):(o=this._handleRelativeValue(a,o),typeof o=="number"&&(e[s]=a+(o-a)*r))}},n.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},n.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},n.autoStartOnUpdate=!1,n}();bd.nextId;var Dn=Wl;Dn.getAll.bind(Dn);Dn.removeAll.bind(Dn);Dn.add.bind(Dn);Dn.remove.bind(Dn);var dr=Dn.update.bind(Dn);const ps=new U;function an(n,e,t,i,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),c=Math.PI/4;ps.copy(e),ps[i]=0,ps.normalize();const l=.5*a/(a+o),u=1-ps.angleTo(n)/c;return Math.sign(ps[t])===1?u*l:o/(a+o)+l+l*(1-u)}class it extends Jr{constructor(e=1,t=1,i=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(e/2,t/2,i/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new U,l=new U,u=new U(e,t,i).divideScalar(2).subScalar(s),f=this.attributes.position.array,h=this.attributes.normal.array,m=this.attributes.uv.array,_=f.length/6,x=new U,p=.5/a;for(let d=0,v=0;d<f.length;d+=3,v+=2)switch(c.fromArray(f,d),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),f[d+0]=u.x*Math.sign(c.x)+l.x*s,f[d+1]=u.y*Math.sign(c.y)+l.y*s,f[d+2]=u.z*Math.sign(c.z)+l.z*s,h[d+0]=l.x,h[d+1]=l.y,h[d+2]=l.z,Math.floor(d/_)){case 0:x.set(1,0,0),m[v+0]=an(x,l,"z","y",s,i),m[v+1]=1-an(x,l,"y","z",s,t);break;case 1:x.set(-1,0,0),m[v+0]=1-an(x,l,"z","y",s,i),m[v+1]=1-an(x,l,"y","z",s,t);break;case 2:x.set(0,1,0),m[v+0]=1-an(x,l,"x","z",s,e),m[v+1]=an(x,l,"z","x",s,i);break;case 3:x.set(0,-1,0),m[v+0]=1-an(x,l,"x","z",s,e),m[v+1]=1-an(x,l,"z","x",s,i);break;case 4:x.set(0,0,1),m[v+0]=1-an(x,l,"x","y",s,e),m[v+1]=1-an(x,l,"y","x",s,t);break;case 5:x.set(0,0,-1),m[v+0]=an(x,l,"x","y",s,e),m[v+1]=1-an(x,l,"y","x",s,t);break}}static fromJSON(e){return new it(e.width,e.height,e.depth,e.segments,e.radius)}}const sv=document.getElementById("app"),fr=new bi,Ki=new Tt(45,window.innerWidth/window.innerHeight,.1,100);Ki.position.set(5,5,8);const Ri=new wi({antialias:!0,alpha:!0});Ri.setSize(window.innerWidth,window.innerHeight);Ri.setPixelRatio(Math.min(window.devicePixelRatio,2));Ri.shadowMap.enabled=!1;sv.appendChild(Ri.domElement);Ri.setClearColor(0,0);const Un=new Ai(Ki,Ri.domElement);Un.enableDamping=!0;Un.dampingFactor=.05;Un.enablePan=!1;Un.enableZoom=!1;const av=new Ti(16777215,2.5);fr.add(av);const Td=new ft(16777215,1.5);Td.position.set(10,20,10);fr.add(Td);const wd=new ft(16777215,1);wd.position.set(-10,10,-10);fr.add(wd);const Ad=new ft(16777215,1);Ad.position.set(10,-10,-10);fr.add(Ad);const vc=[],Ps=new st;fr.add(Ps);const ov=new it(.99,.99,.99,5,.1),lv=new Qt({color:2236962,roughness:.7,metalness:.1}),qu=new it(.06,.83,.83,6,.12),ju=new it(.83,.06,.83,6,.12),Zu=new it(.83,.83,.06,6,.12),ja=document.createElement("canvas");ja.width=256;ja.height=256;const Pa=ja.getContext("2d");Pa.fillStyle="#ffffff";Pa.fillRect(0,0,256,256);for(let n=0;n<2e4;n++)Pa.fillStyle=Math.random()>.5?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.08)",Pa.fillRect(Math.random()*256,Math.random()*256,2,2);const Mc=new hr(ja);Mc.wrapS=Ut;Mc.wrapT=Ut;const cv=n=>new Qt({color:n,roughness:.9,metalness:.1,bumpMap:Mc,bumpScale:.003});for(let n=-1;n<=1;n++)for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++){const i=new st;i.position.set(n,e,t),i.userData.originalPos={x:n,y:e,z:t};const r=new dt(ov,lv);i.add(r);const s=(a,o,c)=>{const l=cv(o),u=new dt(a,l);u.position.set(...c),u.userData={isSticker:!0,originalColor:o},i.add(u)};n===1&&s(qu,ke.right,[.49,0,0]),n===-1&&s(qu,ke.left,[-.49,0,0]),e===1&&s(ju,ke.top,[0,.49,0]),e===-1&&s(ju,ke.bottom,[0,-.49,0]),t===1&&s(Zu,ke.front,[0,0,.49]),t===-1&&s(Zu,ke.back,[0,0,-.49]),Ps.add(i),vc.push(i)}let Ji=!1,Qi=!1,Ms=[];function Sc(n,e,t,i=300,r=!0){return r&&Ms.push({axis:n,layer:e,angle:t}),new Promise(s=>{if(Ji&&i>0)return;Ji=!0;const a=vc.filter(l=>Math.abs(Math.round(l.position[n])-e)<.1),o=new st;Ps.add(o),a.forEach(l=>o.attach(l));const c={val:t};i>0?new Gt({val:0}).to(c,i).easing(Et.Quadratic.InOut).onUpdate(l=>o.rotation[n]=l.val).onComplete(()=>Ku(o,a,s)).start():(o.rotation[n]=t,Ku(o,a,s))})}function Ku(n,e,t){n.updateMatrixWorld(),e.forEach(i=>{Ps.attach(i),i.position.x=Math.round(i.position.x),i.position.y=Math.round(i.position.y),i.position.z=Math.round(i.position.z);const r=new Ft().setFromQuaternion(i.quaternion);r.x=Math.round(r.x/(Math.PI/2))*(Math.PI/2),r.y=Math.round(r.y/(Math.PI/2))*(Math.PI/2),r.z=Math.round(r.z/(Math.PI/2))*(Math.PI/2),i.quaternion.setFromEuler(r)}),Ps.remove(n),Ji=!1,t&&t()}const Xl={L:["x",-1,Math.PI/2],M:["x",0,Math.PI/2],R:["x",1,-Math.PI/2],U:["y",1,-Math.PI/2],E:["y",0,Math.PI/2],D:["y",-1,Math.PI/2],F:["z",1,-Math.PI/2],S:["z",0,-Math.PI/2],B:["z",-1,Math.PI/2],L_prime:["x",-1,-Math.PI/2],M_prime:["x",0,-Math.PI/2],R_prime:["x",1,Math.PI/2],U_prime:["y",1,Math.PI/2],E_prime:["y",0,-Math.PI/2],D_prime:["y",-1,-Math.PI/2],F_prime:["z",1,Math.PI/2],S_prime:["z",0,Math.PI/2],B_prime:["z",-1,-Math.PI/2]};Object.keys(Xl).forEach(n=>{const e=document.getElementById("btn"+n);e&&e.addEventListener("click",()=>{!Ji&&Qi&&Sc(...Xl[n],300)})});const Ju=document.getElementById("shuffleBtn");Ju&&Ju.addEventListener("click",async()=>{if(Ji||!Qi)return;const n=["L","M","R","U","E","D","F","S","B"];let e={axis:"",layer:0,dir:0};for(let t=0;t<25;t++){let i,r,s;do i=n[Math.floor(Math.random()*n.length)],r=Xl[i],s=Math.random()>.5?1:-1;while(r[0]===e.axis&&r[1]===e.layer&&s===-e.dir);e={axis:r[0],layer:r[1],dir:s},await Sc(r[0],r[1],r[2]*s,300)}});const Qu=document.getElementById("resetBtn");Qu&&Qu.addEventListener("click",async()=>{if(Ji||!Qi||Ms.length===0)return;const n=[...Ms];Ms=[];for(let e=n.length-1;e>=0;e--){const t=n[e];await Sc(t.axis,t.layer,-t.angle,150,!1)}});const eh=document.getElementById("resetOrientationBtn");eh&&eh.addEventListener("click",()=>{Qi&&(new Gt(Ki.position).to({x:5,y:5,z:8},500).easing(Et.Quadratic.Out).start(),new Gt(Un.target).to({x:0,y:0,z:0},500).easing(Et.Quadratic.Out).start())});function uv(){Ji=!1,Ms=[],Ki.position.set(5,5,8),Un.target.set(0,0,0),Un.update(),vc.forEach(n=>{const e=n.userData.originalPos;n.position.set(e.x,e.y,e.z),n.quaternion.set(0,0,0,1)})}window.addEventListener("route-changed",n=>{n.detail==="/cubes/3x3x3-cube"?(Qi=!0,uv(),Un.enableRotate=!0,Un.enableZoom=!1,fr.traverse(t=>{t.userData.isSticker&&t.userData.originalColor&&t.material.color.setHex(t.userData.originalColor)})):Qi=!1});function Rd(n){requestAnimationFrame(Rd),Qi&&(dr(n),Un.update(),Ri.render(fr,Ki))}Rd();window.addEventListener("resize",()=>{Ki.aspect=window.innerWidth/window.innerHeight,Ki.updateProjectionMatrix(),Ri.setSize(window.innerWidth,window.innerHeight)});const hv=document.getElementById("app-2x2-main"),es=new bi,er=new Tt(45,window.innerWidth/window.innerHeight,.1,100);er.position.set(5,5,8);const Ci=new wi({antialias:!0,alpha:!0});Ci.setSize(window.innerWidth,window.innerHeight);Ci.setPixelRatio(Math.min(window.devicePixelRatio,2));Ci.shadowMap.enabled=!1;hv.appendChild(Ci.domElement);Ci.setClearColor(0,0);const Fn=new Ai(er,Ci.domElement);Fn.enableDamping=!0;Fn.dampingFactor=.05;Fn.enablePan=!1;Fn.enableZoom=!1;const dv=new Ti(16777215,2.5);es.add(dv);const Cd=new ft(16777215,1.5);Cd.position.set(10,20,10);es.add(Cd);const Pd=new ft(16777215,1);Pd.position.set(-10,10,-10);es.add(Pd);const Ld=new ft(16777215,1);Ld.position.set(10,-10,-10);es.add(Ld);const Ec=[],jr=new st;es.add(jr);const fv=new it(.99,.99,.99,5,.1),pv=new Qt({color:2236962,roughness:.7,metalness:.1}),th=new it(.06,.83,.83,6,.12),nh=new it(.83,.06,.83,6,.12),ih=new it(.83,.83,.06,6,.12),Za=document.createElement("canvas");Za.width=256;Za.height=256;const La=Za.getContext("2d");La.fillStyle="#ffffff";La.fillRect(0,0,256,256);for(let n=0;n<2e4;n++)La.fillStyle=Math.random()>.5?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.08)",La.fillRect(Math.random()*256,Math.random()*256,2,2);const yc=new hr(Za);yc.wrapS=Ut;yc.wrapT=Ut;const mv=n=>new Qt({color:n,roughness:.9,metalness:.1,bumpMap:yc,bumpScale:.003});for(let n of[-.5,.5])for(let e of[-.5,.5])for(let t of[-.5,.5]){const i=new st;i.position.set(n,e,t),i.userData.originalPos={x:n,y:e,z:t};const r=new dt(fv,pv);i.add(r);const s=(a,o,c)=>{const l=mv(o),u=new dt(a,l);u.position.set(...c),u.userData={isSticker:!0,originalColor:o},i.add(u)};n===.5&&s(th,ke.right,[.49,0,0]),n===-.5&&s(th,ke.left,[-.49,0,0]),e===.5&&s(nh,ke.top,[0,.49,0]),e===-.5&&s(nh,ke.bottom,[0,-.49,0]),t===.5&&s(ih,ke.front,[0,0,.49]),t===-.5&&s(ih,ke.back,[0,0,-.49]),jr.add(i),Ec.push(i)}jr.scale.set(1.5,1.5,1.5);let tr=!1,nr=!1,Ss=[];function bc(n,e,t,i=300,r=!0){return r&&Ss.push({axis:n,layer:e,angle:t}),new Promise(s=>{if(tr&&i>0)return;tr=!0;const a=Ec.filter(l=>Math.abs(l.position[n]-e)<.1),o=new st;jr.add(o),a.forEach(l=>o.attach(l));const c={val:t};i>0?new Gt({val:0}).to(c,i).easing(Et.Quadratic.InOut).onUpdate(l=>o.rotation[n]=l.val).onComplete(()=>rh(o,a,s)).start():(o.rotation[n]=t,rh(o,a,s))})}function rh(n,e,t){n.updateMatrixWorld(),e.forEach(i=>{jr.attach(i),i.position.x=Math.round(i.position.x*2)/2,i.position.y=Math.round(i.position.y*2)/2,i.position.z=Math.round(i.position.z*2)/2;const r=new Ft().setFromQuaternion(i.quaternion);r.x=Math.round(r.x/(Math.PI/2))*(Math.PI/2),r.y=Math.round(r.y/(Math.PI/2))*(Math.PI/2),r.z=Math.round(r.z/(Math.PI/2))*(Math.PI/2),i.quaternion.setFromEuler(r)}),jr.remove(n),tr=!1,t&&t()}const $l={L:["x",-.5,Math.PI/2],R:["x",.5,-Math.PI/2],U:["y",.5,-Math.PI/2],D:["y",-.5,Math.PI/2],F:["z",.5,-Math.PI/2],B:["z",-.5,Math.PI/2],L_prime:["x",-.5,-Math.PI/2],R_prime:["x",.5,Math.PI/2],U_prime:["y",.5,Math.PI/2],D_prime:["y",-.5,-Math.PI/2],F_prime:["z",.5,Math.PI/2],B_prime:["z",-.5,-Math.PI/2]};Object.keys($l).forEach(n=>{const e=document.getElementById("btn"+n+"-2x2");e&&e.addEventListener("click",()=>{!tr&&nr&&bc(...$l[n],300)})});const sh=document.getElementById("shuffleBtn-2x2");sh&&sh.addEventListener("click",async()=>{if(tr||!nr)return;const n=["L","R","U","D","F","B"];let e={axis:"",layer:0,dir:0};for(let t=0;t<20;t++){let i,r,s;do i=n[Math.floor(Math.random()*n.length)],r=$l[i],s=Math.random()>.5?1:-1;while(r[0]===e.axis&&r[1]===e.layer&&s===-e.dir);e={axis:r[0],layer:r[1],dir:s},await bc(r[0],r[1],r[2]*s,250)}});const ah=document.getElementById("resetBtn-2x2");ah&&ah.addEventListener("click",async()=>{if(tr||!nr||Ss.length===0)return;const n=[...Ss];Ss=[];for(let e=n.length-1;e>=0;e--){const t=n[e];await bc(t.axis,t.layer,-t.angle,150,!1)}});const oh=document.getElementById("resetOrientationBtn-2x2");oh&&oh.addEventListener("click",()=>{nr&&(new Gt(er.position).to({x:5,y:5,z:8},500).easing(Et.Quadratic.Out).start(),new Gt(Fn.target).to({x:0,y:0,z:0},500).easing(Et.Quadratic.Out).start())});function gv(){tr=!1,Ss=[],er.position.set(5,5,8),Fn.target.set(0,0,0),Fn.update(),Ec.forEach(n=>{const e=n.userData.originalPos;n.position.set(e.x,e.y,e.z),n.quaternion.set(0,0,0,1)})}window.addEventListener("route-changed",n=>{n.detail==="/cubes/2x2x2-cube"?(nr=!0,gv(),Fn.enableRotate=!0,Fn.enableZoom=!1):nr=!1});function Id(n){requestAnimationFrame(Id),nr&&(dr(n),Fn.update(),Ci.render(es,er))}Id();window.addEventListener("resize",()=>{er.aspect=window.innerWidth/window.innerHeight,er.updateProjectionMatrix(),Ci.setSize(window.innerWidth,window.innerHeight)});const _v=document.getElementById("app-4x4-main"),ts=new bi,ir=new Tt(45,window.innerWidth/window.innerHeight,.1,100);ir.position.set(7,7,10);const pr=new wi({antialias:!0,alpha:!0});pr.setSize(window.innerWidth,window.innerHeight);pr.setPixelRatio(Math.min(window.devicePixelRatio,2));pr.shadowMap.enabled=!1;_v.appendChild(pr.domElement);const Jn=new Ai(ir,pr.domElement);Jn.enableDamping=!0;Jn.dampingFactor=.05;Jn.enablePan=!1;Jn.enableZoom=!1;const xv=new Ti(16777215,2.5);ts.add(xv);const Dd=new ft(16777215,1.5);Dd.position.set(10,20,10);ts.add(Dd);const Ud=new ft(16777215,1);Ud.position.set(-10,10,-10);ts.add(Ud);const Fd=new ft(16777215,1);Fd.position.set(10,-10,-10);ts.add(Fd);const Tc=[],Ls=new st;ts.add(Ls);const vv=new it(.99,.99,.99,5,.1),Mv=new Qt({color:2236962,roughness:.7,metalness:.1}),lh=new it(.06,.83,.83,6,.12),ch=new it(.83,.06,.83,6,.12),uh=new it(.83,.83,.06,6,.12),Ka=document.createElement("canvas");Ka.width=256;Ka.height=256;const Ia=Ka.getContext("2d");Ia.fillStyle="#ffffff";Ia.fillRect(0,0,256,256);for(let n=0;n<2e4;n++)Ia.fillStyle=Math.random()>.5?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.08)",Ia.fillRect(Math.random()*256,Math.random()*256,2,2);const wc=new hr(Ka);wc.wrapS=Ut;wc.wrapT=Ut;const Sv=n=>new Qt({color:n,roughness:.9,metalness:.1,bumpMap:wc,bumpScale:.003});for(let n of[-1.5,-.5,.5,1.5])for(let e of[-1.5,-.5,.5,1.5])for(let t of[-1.5,-.5,.5,1.5]){const i=new st;i.position.set(n,e,t),i.userData.originalPos={x:n,y:e,z:t};const r=new dt(vv,Mv);i.add(r);const s=(a,o,c)=>{const l=Sv(o),u=new dt(a,l);u.position.set(...c),u.userData={isSticker:!0,originalColor:o},i.add(u)};n===1.5&&s(lh,ke.right,[.49,0,0]),n===-1.5&&s(lh,ke.left,[-.49,0,0]),e===1.5&&s(ch,ke.top,[0,.49,0]),e===-1.5&&s(ch,ke.bottom,[0,-.49,0]),t===1.5&&s(uh,ke.front,[0,0,.49]),t===-1.5&&s(uh,ke.back,[0,0,-.49]),Ls.add(i),Tc.push(i)}let rr=!1,sr=!1,Es=[];function Ac(n,e,t,i=300,r=!0){return r&&Es.push({axis:n,layers:e,angle:t}),new Promise(s=>{if(rr&&i>0)return;rr=!0;const a=Tc.filter(l=>{const u=Math.round(l.position[n]*2)/2;return e.some(f=>Math.abs(u-f)<.1)}),o=new st;Ls.add(o),a.forEach(l=>o.attach(l));const c={val:t};i>0?new Gt({val:0}).to(c,i).easing(Et.Quadratic.InOut).onUpdate(l=>o.rotation[n]=l.val).onComplete(()=>hh(o,a,s)).start():(o.rotation[n]=t,hh(o,a,s))})}function hh(n,e,t){n.updateMatrixWorld(),e.forEach(i=>{Ls.attach(i),i.position.x=Math.round(i.position.x*2)/2,i.position.y=Math.round(i.position.y*2)/2,i.position.z=Math.round(i.position.z*2)/2;const r=new Ft().setFromQuaternion(i.quaternion);r.x=Math.round(r.x/(Math.PI/2))*(Math.PI/2),r.y=Math.round(r.y/(Math.PI/2))*(Math.PI/2),r.z=Math.round(r.z/(Math.PI/2))*(Math.PI/2),i.quaternion.setFromEuler(r)}),Ls.remove(n),rr=!1,t&&t()}const Yl={L:["x",[-1.5],Math.PI/2],R:["x",[1.5],-Math.PI/2],U:["y",[1.5],-Math.PI/2],D:["y",[-1.5],Math.PI/2],F:["z",[1.5],-Math.PI/2],B:["z",[-1.5],Math.PI/2],Lw:["x",[-1.5,-.5],Math.PI/2],Rw:["x",[1.5,.5],-Math.PI/2],Uw:["y",[1.5,.5],-Math.PI/2],Dw:["y",[-1.5,-.5],Math.PI/2],Fw:["z",[1.5,.5],-Math.PI/2],Bw:["z",[-1.5,-.5],Math.PI/2],L_prime:["x",[-1.5],-Math.PI/2],R_prime:["x",[1.5],Math.PI/2],U_prime:["y",[1.5],Math.PI/2],D_prime:["y",[-1.5],-Math.PI/2],F_prime:["z",[1.5],Math.PI/2],B_prime:["z",[-1.5],-Math.PI/2],Lw_prime:["x",[-1.5,-.5],-Math.PI/2],Rw_prime:["x",[1.5,.5],Math.PI/2],Uw_prime:["y",[1.5,.5],Math.PI/2],Dw_prime:["y",[-1.5,-.5],-Math.PI/2],Fw_prime:["z",[1.5,.5],Math.PI/2],Bw_prime:["z",[-1.5,-.5],-Math.PI/2],l:["x",[-.5],Math.PI/2],r:["x",[.5],-Math.PI/2],u:["y",[.5],-Math.PI/2],d:["y",[-.5],Math.PI/2],f:["z",[.5],-Math.PI/2],b:["z",[-.5],Math.PI/2],l_prime:["x",[-.5],-Math.PI/2],r_prime:["x",[.5],Math.PI/2],u_prime:["y",[.5],Math.PI/2],d_prime:["y",[-.5],-Math.PI/2],f_prime:["z",[.5],Math.PI/2],b_prime:["z",[-.5],-Math.PI/2],M:["x",[-.5,.5],Math.PI/2],E:["y",[-.5,.5],Math.PI/2],S:["z",[-.5,.5],-Math.PI/2],M_prime:["x",[-.5,.5],-Math.PI/2],E_prime:["y",[-.5,.5],-Math.PI/2],S_prime:["z",[-.5,.5],Math.PI/2]};Object.keys(Yl).forEach(n=>{const e=document.getElementById("btn"+n+"-4x4");e&&e.addEventListener("click",()=>{!rr&&sr&&Ac(...Yl[n])})});const dh=document.getElementById("shuffleBtn-4x4");dh&&dh.addEventListener("click",async()=>{if(rr||!sr)return;const n=["L","R","U","D","F","B","Lw","Rw","Uw","Dw","Fw","Bw","l","r","u","d","f","b","M","E","S"];let e={axis:"",layers:[],dir:0};for(let t=0;t<30;t++){let i,r,s;do i=n[Math.floor(Math.random()*n.length)],r=Yl[i],s=Math.random()>.5?1:-1;while(r[0]===e.axis&&JSON.stringify(r[1])===JSON.stringify(e.layers)&&s===-e.dir);e={axis:r[0],layers:r[1],dir:s},await Ac(r[0],r[1],r[2]*s,200)}});const fh=document.getElementById("resetBtn-4x4");fh&&fh.addEventListener("click",async()=>{if(rr||!sr||Es.length===0)return;const n=[...Es];Es=[];for(let e=n.length-1;e>=0;e--){const t=n[e];await Ac(t.axis,t.layers,-t.angle,100,!1)}});const ph=document.getElementById("resetOrientationBtn-4x4");ph&&ph.addEventListener("click",()=>{sr&&(new Gt(ir.position).to({x:7,y:7,z:10},500).easing(Et.Quadratic.Out).start(),new Gt(Jn.target).to({x:0,y:0,z:0},500).easing(Et.Quadratic.Out).start())});function Ev(){rr=!1,Es=[],ir.position.set(7,7,10),Jn.target.set(0,0,0),Jn.update(),Tc.forEach(n=>{const e=n.userData.originalPos;n.position.set(e.x,e.y,e.z),n.quaternion.set(0,0,0,1)})}window.addEventListener("route-changed",n=>{n.detail==="/cubes/4x4x4-cube"?(sr=!0,Ev(),Jn.enableRotate=!0):sr=!1});function Nd(n){requestAnimationFrame(Nd),sr&&(dr(n),Jn.update(),pr.render(ts,ir))}Nd();window.addEventListener("resize",()=>{ir.aspect=window.innerWidth/window.innerHeight,ir.updateProjectionMatrix(),pr.setSize(window.innerWidth,window.innerHeight)});var Od=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Bd={exports:{}};(function(n){(function(){var e,t,i,r,s,a,o,c,l,u,f,h,m,_,x,p,d,v,y,w,I,A,P,M,T,te,L,$,X,Z,H,z,B;[y,v,_,s,d,e]=[0,1,2,3,4,5],[L,P,T,I,l,f,o,m]=[0,1,2,3,4,5,6,7],[te,A,M,w,h,c,u,a,p,x,t,i]=[0,1,2,3,4,5,6,7,8,9,10,11],[X,H,B]=function(){var he,ce,xe,fe,_e,re;return re=function(ue){return ue-1},_e=function(ue){return re(9)+ue},xe=function(ue){return _e(9)+ue},ce=function(ue){return xe(9)+ue},fe=function(ue){return ce(9)+ue},he=function(ue){return fe(9)+ue},[[4,13,22,31,40,49],[[re(9),_e(1),xe(3)],[re(7),xe(1),fe(3)],[re(1),fe(1),he(3)],[re(3),he(1),_e(3)],[ce(3),xe(9),_e(7)],[ce(1),fe(9),xe(7)],[ce(7),he(9),fe(7)],[ce(9),_e(9),he(7)]],[[re(6),_e(2)],[re(8),xe(2)],[re(4),fe(2)],[re(2),he(2)],[ce(6),_e(8)],[ce(2),xe(8)],[ce(4),fe(8)],[ce(8),he(8)],[xe(6),_e(4)],[xe(4),fe(6)],[he(6),fe(4)],[he(4),_e(6)]]]}(),$=["U","R","F","D","L","B"],Z=[["U","R","F"],["U","F","L"],["U","L","B"],["U","B","R"],["D","F","R"],["D","L","F"],["D","B","L"],["D","R","B"]],z=[["U","R"],["U","F"],["U","L"],["U","B"],["D","R"],["D","F"],["D","L"],["D","B"],["F","R"],["F","L"],["B","L"],["B","R"]],r=(function(){var he,ce,xe;class fe{constructor(re){re!=null?this.init(re):this.identity(),this.newCenter=function(){var ue,oe;for(oe=[],ue=0;ue<=5;++ue)oe.push(0);return oe}(),this.newCp=function(){var ue,oe;for(oe=[],ue=0;ue<=7;++ue)oe.push(0);return oe}(),this.newEp=function(){var ue,oe;for(oe=[],ue=0;ue<=11;++ue)oe.push(0);return oe}(),this.newCo=function(){var ue,oe;for(oe=[],ue=0;ue<=7;++ue)oe.push(0);return oe}(),this.newEo=function(){var ue,oe;for(oe=[],ue=0;ue<=11;++ue)oe.push(0);return oe}()}init(re){return this.center=re.center.slice(0),this.co=re.co.slice(0),this.ep=re.ep.slice(0),this.cp=re.cp.slice(0),this.eo=re.eo.slice(0)}identity(){return this.center=[0,1,2,3,4,5],this.cp=[0,1,2,3,4,5,6,7],this.co=function(){var re,ue;for(ue=[],re=0;re<=7;++re)ue.push(0);return ue}(),this.ep=[0,1,2,3,4,5,6,7,8,9,10,11],this.eo=function(){var re,ue;for(ue=[],re=0;re<=11;++re)ue.push(0);return ue}()}toJSON(){return{center:this.center,cp:this.cp,co:this.co,ep:this.ep,eo:this.eo}}asString(){var re,ue,oe,F,K,q,Se,Me,pe,Ie,Ce;for(Ce=[],oe=F=0;F<=5;oe=++F)Ce[9*oe+4]=$[this.center[oe]];for(oe=K=0;K<=7;oe=++K)for(re=this.cp[oe],pe=this.co[oe],Se=q=0;q<=2;Se=++q)Ce[H[oe][(Se+pe)%3]]=Z[re][Se];for(oe=Me=0;Me<=11;oe=++Me)for(ue=this.ep[oe],pe=this.eo[oe],Se=Ie=0;Ie<=1;Se=++Ie)Ce[B[oe][(Se+pe)%2]]=z[ue][Se];return Ce.join("")}static fromString(re){var ue,oe,F,K,q,Se,Me,pe,Ie,Ce,ze,Xe,Be,Q;for(F=new fe,K=Se=0;Se<=5;K=++Se)for(q=Me=0;Me<=5;q=++Me)re[9*K+4]===$[q]&&(F.center[K]=q);for(K=pe=0;pe<=7;K=++pe){for(Ce=Ie=0;Ie<=2&&!((Q=re[H[K][Ce]])==="U"||Q==="D");Ce=++Ie);for(ue=re[H[K][(Ce+1)%3]],oe=re[H[K][(Ce+2)%3]],q=ze=0;ze<=7;q=++ze)ue===Z[q][1]&&oe===Z[q][2]&&(F.cp[K]=q,F.co[K]=Ce%3)}for(K=Xe=0;Xe<=11;K=++Xe)for(q=Be=0;Be<=11;q=++Be){if(re[B[K][0]]===z[q][0]&&re[B[K][1]]===z[q][1]){F.ep[K]=q,F.eo[K]=0;break}if(re[B[K][0]]===z[q][1]&&re[B[K][1]]===z[q][0]){F.ep[K]=q,F.eo[K]=1;break}}return F}clone(){return new fe(this.toJSON())}static random(){return new fe().randomize()}isSolved(){var re,ue,oe,F,K,q,Se;for(oe=this.clone(),oe.move(oe.upright()),ue=K=0;K<=5;ue=++K)if(oe.center[ue]!==ue)return!1;for(re=q=0;q<=7;re=++q)if(oe.cp[re]!==re||oe.co[re]!==0)return!1;for(F=Se=0;Se<=11;F=++Se)if(oe.ep[F]!==F||oe.eo[F]!==0)return!1;return!0}centerMultiply(re){var ue,oe,F;for(F=oe=0;oe<=5;F=++oe)ue=re.center[F],this.newCenter[F]=this.center[ue];return[this.center,this.newCenter]=[this.newCenter,this.center],this}cornerMultiply(re){var ue,oe,F;for(F=oe=0;oe<=7;F=++oe)ue=re.cp[F],this.newCp[F]=this.cp[ue],this.newCo[F]=(this.co[ue]+re.co[F])%3;return[this.cp,this.newCp]=[this.newCp,this.cp],[this.co,this.newCo]=[this.newCo,this.co],this}edgeMultiply(re){var ue,oe,F;for(F=oe=0;oe<=11;F=++oe)ue=re.ep[F],this.newEp[F]=this.ep[ue],this.newEo[F]=(this.eo[ue]+re.eo[F])%2;return[this.ep,this.newEp]=[this.newEp,this.ep],[this.eo,this.newEo]=[this.newEo,this.eo],this}multiply(re){return this.centerMultiply(re),this.cornerMultiply(re),this.edgeMultiply(re),this}move(re){var ue,oe,F,K,q,Se,Me,pe;for(Me=xe(re),oe=0,K=Me.length;oe<K;oe++)for(q=Me[oe],ue=q/3|0,Se=q%3,F=0,pe=Se;0<=pe?F<=pe:F>=pe;0<=pe?++F:--F)this.multiply(fe.moves[ue]);return this}upright(){var re,ue,oe,F,K,q;for(re=this.clone(),q=[],ue=F=0;F<=5&&re.center[ue]!==_;ue=++F);switch(ue){case s:q.push("x");break;case y:q.push("x'");break;case e:q.push("x2");break;case v:q.push("y");break;case d:q.push("y'")}for(q.length&&re.move(q[0]),oe=K=0;K<=5&&re.center[oe]!==y;oe=++K);switch(oe){case d:q.push("z");break;case v:q.push("z'");break;case s:q.push("z2")}return q.join(" ")}static inverse(re){var ue,oe,F,K,q,Se,Me;if(Se=function(){var pe,Ie,Ce,ze;for(Ce=xe(re),ze=[],pe=0,Ie=Ce.length;pe<Ie;pe++)K=Ce[pe],ue=K/3|0,q=K%3,ze.push(ue*3+-(q-1)+1);return ze}(),Se.reverse(),typeof re=="string"){for(Me="",oe=0,F=Se.length;oe<F;oe++)K=Se[oe],ue=K/3|0,q=K%3,Me+=he[ue],q===1?Me+="2":q===2&&(Me+="'"),Me+=" ";return Me.substring(0,Me.length-1)}else return re.length!=null?Se:Se[0]}}return fe.prototype.randomize=function(){var _e,re,ue,oe,F,K,q,Se,Me;return K=function(pe,Ie){return pe+Math.floor(Math.random()*(Ie-pe+1))},Me=function(pe){var Ie,Ce;for(Ie=pe.length;Ie!==0;)Ce=K(0,Ie-1),Ie-=1,pe[Ie],[pe[Ie],pe[Ce]]=[pe[Ce],pe[Ie]]},oe=function(pe){var Ie,Ce,ze,Xe,Be,Q,b;for(Be=0,b=function(){var se,ie,J;for(J=[],se=0,ie=pe.length-1;0<=ie?se<=ie:se>=ie;0<=ie?++se:--se)J.push(!1);return J}();;){for(Ie=-1,ze=Xe=0,Q=pe.length-1;0<=Q?Xe<=Q:Xe>=Q;ze=0<=Q?++Xe:--Xe)if(!b[ze]){Ie=ze;break}if(Ie===-1)break;for(Ce=0;!b[Ie];)b[Ie]=!0,Ce++,Ie=pe[Ie];Be+=Ce+1}return Be},_e=function(pe,Ie){var Ce;return Ce=oe(Ie)+oe(pe),Ce%2===0},ue=function(pe,Ie){for(Me(Ie),Me(pe);!_e(pe,Ie);)Me(Ie),Me(pe)},q=function(pe,Ie){var Ce,ze,Xe,Be;for(Xe=0,Ce=ze=0,Be=pe.length-1;0<=Be?ze<=Be:ze>=Be;Ce=0<=Be?++ze:--ze)Xe+=pe[Ce]=K(0,Ie-1)},F=function(pe,Ie){return pe.reduce(function(Ce,ze){return Ce+ze})%Ie===0},re=function(pe,Ie){for(q(pe,3);!F(pe,3);)q(pe,3);for(q(Ie,2);!F(Ie,2);)q(Ie,2)},Se=function(){return ue(this.cp,this.ep),re(this.co,this.eo),this},Se}(),fe.moves=[{center:[0,1,2,3,4,5],cp:[I,L,P,T,l,f,o,m],co:[0,0,0,0,0,0,0,0],ep:[w,te,A,M,h,c,u,a,p,x,t,i],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[l,P,T,L,m,f,o,I],co:[2,0,0,1,1,0,0,2],ep:[p,A,M,w,i,c,u,a,h,x,t,te],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[P,f,T,I,L,l,o,m],co:[1,2,0,0,2,1,0,0],ep:[te,x,M,w,h,p,u,a,A,c,t,i],eo:[0,1,0,0,0,1,0,0,1,1,0,0]},{center:[0,1,2,3,4,5],cp:[L,P,T,I,f,o,m,l],co:[0,0,0,0,0,0,0,0],ep:[te,A,M,w,c,u,a,h,p,x,t,i],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[L,T,o,I,l,P,f,m],co:[0,1,2,0,0,2,1,0],ep:[te,A,t,w,h,c,x,a,p,M,u,i],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[L,P,I,m,l,f,T,o],co:[0,0,1,2,0,0,2,1],ep:[te,A,M,i,h,c,u,t,p,x,w,a],eo:[0,0,0,1,0,0,0,1,0,0,1,1]},{center:[y,_,d,s,e,v],cp:[L,P,T,I,l,f,o,m],co:[0,0,0,0,0,0,0,0],ep:[te,A,M,w,h,c,u,a,x,t,i,p],eo:[0,0,0,0,0,0,0,0,1,1,1,1]},{center:[e,v,y,_,d,s],cp:[L,P,T,I,l,f,o,m],co:[0,0,0,0,0,0,0,0],ep:[te,w,M,a,h,A,u,c,p,x,t,i],eo:[0,1,0,1,0,1,0,1,0,0,0,0]},{center:[d,y,_,v,s,e],cp:[L,P,T,I,l,f,o,m],co:[0,0,0,0,0,0,0,0],ep:[M,A,u,w,te,c,h,a,p,x,t,i],eo:[1,0,1,0,1,0,1,0,0,0,0,0]}],ce={U:0,R:1,F:2,D:3,L:4,B:5,E:6,M:7,S:8,x:9,y:10,z:11,u:12,r:13,f:14,d:15,l:16,b:17},he={0:"U",1:"R",2:"F",3:"D",4:"L",5:"B",6:"E",7:"M",8:"S",9:"x",10:"y",11:"z",12:"u",13:"r",14:"f",15:"d",16:"l",17:"b"},xe=function(_e){var re,ue,oe,F,K,q,Se;if(typeof _e=="string"){for(q=_e.split(/\s+/),Se=[],re=0,ue=q.length;re<ue;re++)if(F=q[re],F.length!==0){if(F.length>2)throw new Error(`Invalid move: ${F}`);if(oe=ce[F[0]],oe===void 0)throw new Error(`Invalid move: ${F}`);if(F.length===1)K=0;else if(F[1]==="2")K=1;else if(F[1]==="'")K=2;else throw new Error(`Invalid move: ${F}`);Se.push(oe*3+K)}return Se}else return _e.length!=null?_e:[_e]},fe.moves.push(new fe().move("R M' L'").toJSON()),fe.moves.push(new fe().move("U E' D'").toJSON()),fe.moves.push(new fe().move("F S B'").toJSON()),fe.moves.push(new fe().move("U E'").toJSON()),fe.moves.push(new fe().move("R M'").toJSON()),fe.moves.push(new fe().move("F S").toJSON()),fe.moves.push(new fe().move("D E").toJSON()),fe.moves.push(new fe().move("L M").toJSON()),fe.moves.push(new fe().move("B S'").toJSON()),fe}).call(this),n!==null?n.exports=r:this.Cube=r}).call(Od)})(Bd);var zd=Bd.exports;(function(){var n,e,t,i,r,s,a,o,c,l,u,f,h,m,_,x,p,d,v,y,w,I,A,P,M,T,te,L,$,X,Z,H,z,B,he,ce,xe,fe,_e,re,ue,oe,F,K,q,Se,Me,pe,Ie,Ce,ze,Xe,Be=[].indexOf;i=this.Cube||zd,[z,$,Z,te,o,l,s,f]=[0,1,2,3,4,5,6,7],[H,L,X,T,u,a,c,r,m,h,n,e]=[0,1,2,3,4,5,6,7,8,9,10,11],t=function(Q,b){var se,ie,J;if(Q<b)return 0;for(b>Q/2&&(b=Q-b),J=1,se=Q,ie=1;se!==Q-b;)J*=se,J/=ie,se--,ie++;return J},re=function(Q){var b,se,ie,J;for(b=1,se=ie=2,J=Q;2<=J?ie<=J:ie>=J;se=2<=J?++ie:--ie)b*=se;return b},oe=function(Q,b){return Q>b?Q:b},Ce=function(Q,b,se){var ie,J,G,S,g;for(g=Q[b],ie=J=G=b,S=se-1;G<=S?J<=S:J>=S;ie=G<=S?++J:--J)Q[ie]=Q[ie+1];return Q[se]=g},ze=function(Q,b,se){var ie,J,G,S,g;for(g=Q[se],ie=J=G=se,S=b+1;G<=S?J<=S:J>=S;ie=G<=S?++J:--J)Q[ie]=Q[ie-1];return Q[b]=g},Me=function(Q,b,se,ie=!1){var J,G,S,g,R,W;return g=se-b,S=re(g+1),Q==="corners"?(G=7,W="cp"):(G=11,W="ep"),R=function(){var O,C,Y;for(Y=[],J=O=0,C=g;0<=C?O<=C:O>=C;J=0<=C?++O:--O)Y.push(0);return Y}(),function(O){var C,Y,ne,le,Te,ae,de,Ee,Pe,be,Ge,D,ve,ge,Re,me,ee,De,He,Qe,et,Vt,Wt,ii,Ct,Ui,ri;if(O!=null){for(J=ae=0,Ge=g;0<=Ge?ae<=Ge:ae>=Ge;J=0<=Ge?++ae:--ae)R[J]=J+b;for(Y=O%S,C=O/S|0,Pe=this[W],J=de=0,D=G;0<=D?de<=D:de>=D;J=0<=D?++de:--de)Pe[J]=-1;for(le=Ee=1,ge=g;1<=ge?Ee<=ge:Ee>=ge;le=1<=ge?++Ee:--Ee)for(Te=Y%(le+1),Y=Y/(le+1)|0;Te>0;)ze(R,0,le),Te--;if(Ct=g,ie)for(le=be=0,Re=G;0<=Re?be<=Re:be>=Re;le=0<=Re?++be:--be)ne=t(G-le,Ct+1),C-ne>=0&&(Pe[le]=R[g-Ct],C-=ne,Ct--);else for(le=Vt=me=G;me<=0?Vt<=0:Vt>=0;le=me<=0?++Vt:--Vt)ne=t(le,Ct+1),C-ne>=0&&(Pe[le]=R[Ct],C-=ne,Ct--);return this}else{for(Pe=this[W],J=Wt=0,ee=g;0<=ee?Wt<=ee:Wt>=ee;J=0<=ee?++Wt:--Wt)R[J]=-1;if(C=Y=Ct=0,ie)for(le=ii=De=G;De<=0?ii<=0:ii>=0;le=De<=0?++ii:--ii)b<=(He=Pe[le])&&He<=se&&(C+=t(G-le,Ct+1),R[g-Ct]=Pe[le],Ct++);else for(le=Ui=0,Qe=G;0<=Qe?Ui<=Qe:Ui>=Qe;le=0<=Qe?++Ui:--Ui)b<=(et=Pe[le])&&et<=se&&(C+=t(le,Ct+1),R[Ct]=Pe[le],Ct++);for(le=ri=ve=g;ve<=0?ri<=0:ri>=0;le=ve<=0?++ri:--ri){for(Te=0;R[le]!==b+le;)Ce(R,0,le),Te++;Y=(le+1)*Y+Te}return C*S+Y}}},_={twist:function(Q){var b,se,ie,J,G,S;if(Q!=null){for(G=0,b=se=6;se>=0;b=--se)J=Q%3,Q=Q/3|0,this.co[b]=J,G+=J;return this.co[7]=(3-G%3)%3,this}else{for(S=0,b=ie=0;ie<=6;b=++ie)S=3*S+this.co[b];return S}},flip:function(Q){var b,se,ie,J,G,S;if(Q!=null){for(G=0,b=se=10;se>=0;b=--se)J=Q%2,Q=Q/2|0,this.eo[b]=J,G+=J;return this.eo[11]=(2-G%2)%2,this}else{for(S=0,b=ie=0;ie<=10;b=++ie)S=2*S+this.eo[b];return S}},cornerParity:function(){var Q,b,se,ie,J,G,S,g,R;for(R=0,Q=se=J=f,G=z+1;J<=G?se<=G:se>=G;Q=J<=G?++se:--se)for(b=ie=S=Q-1,g=z;S<=g?ie<=g:ie>=g;b=S<=g?++ie:--ie)this.cp[b]>this.cp[Q]&&R++;return R%2},edgeParity:function(){var Q,b,se,ie,J,G,S,g,R;for(R=0,Q=se=J=e,G=H+1;J<=G?se<=G:se>=G;Q=J<=G?++se:--se)for(b=ie=S=Q-1,g=H;S<=g?ie<=g:ie>=g;b=S<=g?++ie:--ie)this.ep[b]>this.ep[Q]&&R++;return R%2},URFtoDLF:Me("corners",z,l),URtoUL:Me("edges",H,X),UBtoDF:Me("edges",T,a),URtoDF:Me("edges",H,a),FRtoBR:Me("edges",m,e,!0)};for(ue in _)Xe=_[ue],i.prototype[ue]=Xe;ce=function(Q,b,se){var ie,J,G,S,g,R,W,O,C,Y,ne;for(ie=Q==="corners"?"cornerMultiply":"edgeMultiply",J=new i,ne=[],G=R=0,Y=se-1;0<=Y?R<=Y:R>=Y;G=0<=Y?++R:--R){for(J[b](G),S=[],g=O=0;O<=5;g=++O){for(W=i.moves[g],C=0;C<=2;++C)J[ie](W),S.push(J[b]());J[ie](W)}ne.push(S)}return ne},F=function(){var Q,b;return Q=new i,b=new i,function(se,ie){var J,G;for(Q.URtoUL(se),b.UBtoDF(ie),J=G=0;G<=7;J=++G)if(Q.ep[J]!==-1){if(b.ep[J]!==-1)return-1;b.ep[J]=Q.ep[J]}return b.URtoDF()}}(),w=2187,x=2048,d=2,p=11880,v=495,y=24,A=20160,P=20160,M=1320,I=1320,i.moveTables={parity:[[1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1],[0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]],twist:null,flip:null,FRtoBR:null,URFtoDLF:null,URtoDF:null,URtoUL:null,UBtoDF:null,mergeURtoDF:null},K={twist:["corners",w],flip:["edges",x],FRtoBR:["edges",p],URFtoDLF:["corners",A],URtoDF:["edges",P],URtoUL:["edges",M],UBtoDF:["edges",I],mergeURtoDF:[]},i.computeMoveTables=function(...Q){var b,se,ie,J,G,S;for(Q.length===0&&(Q=function(){var g;g=[];for(ie in K)g.push(ie);return g}()),se=0,b=Q.length;se<b;se++)S=Q[se],this.moveTables[S]===null&&(S==="mergeURtoDF"?this.moveTables.mergeURtoDF=function(){var g,R,W,O;for(O=[],R=W=0;W<=335;R=++W)O.push(function(){var C,Y;for(Y=[],g=C=0;C<=335;g=++C)Y.push(F(R,g));return Y}());return O}():([J,G]=K[S],this.moveTables[S]=ce(J,S,G)));return this},B=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],q=function(){var Q,b,se,ie,J,G,S,g;for(g=[],b=se=0;se<=5;b=++se){for(ie=[],Q=J=0;J<=5;Q=++J)if(Q!==b&&Q!==b-3)for(S=G=0;G<=2;S=++G)ie.push(Q*3+S);g.push(ie)}return g}(),he=[0,1,2,4,7,9,10,11,13,16],Se=function(){var Q,b,se,ie,J,G,S,g,R,W;for(W=[],b=ie=0;ie<=5;b=++ie){for(J=[],Q=G=0;G<=5;Q=++G)if(Q!==b&&Q!==b-3)for(R=Q===0||Q===3?[0,1,2]:[1],S=0,se=R.length;S<se;S++)g=R[S],J.push(Q*3+g);W.push(J)}return W}(),pe=function(Q,b,se){var ie,J,G;return ie=b%8,G=b>>3,J=ie<<2,se!=null?(Q[G]&=~(15<<J),Q[G]|=se<<J,se):(Q[G]&15<<J)>>>J},xe=function(Q,b,se,ie){var J,G,S,g,R,W,O,C,Y,ne,le,Te;for(Te=function(){var ae,de,Ee;for(Ee=[],ae=0,de=Math.ceil(b/8)-1;0<=de?ae<=de:ae>=de;0<=de?++ae:--ae)Ee.push(4294967295);return Ee}(),Q===1?C=B:C=he,G=0,pe(Te,0,G),S=1;S!==b;){for(g=W=0,le=b-1;0<=le?W<=le:W>=le;g=0<=le?++W:--W)if(pe(Te,g)===G)for(J=se(g),ne=0,R=C.length;ne<R;ne++)O=C[ne],Y=ie(J,O),pe(Te,Y)===15&&(pe(Te,Y,G+1),S++);G++}return Te},i.pruningTables={sliceTwist:null,sliceFlip:null,sliceURFtoDLFParity:null,sliceURtoDFParity:null},Ie={sliceTwist:[1,v*w,function(Q){return[Q%v,Q/v|0]},function(Q,b){var se,ie,J,G;return[J,G]=Q,se=i.moveTables.FRtoBR[J*24][b]/24|0,ie=i.moveTables.twist[G][b],ie*v+se}],sliceFlip:[1,v*x,function(Q){return[Q%v,Q/v|0]},function(Q,b){var se,ie,J,G;return[G,se]=Q,J=i.moveTables.FRtoBR[G*24][b]/24|0,ie=i.moveTables.flip[se][b],ie*v+J}],sliceURFtoDLFParity:[2,y*A*d,function(Q){return[Q%2,(Q/2|0)%y,(Q/2|0)/y|0]},function(Q,b){var se,ie,J,G,S,g;return[S,g,se]=Q,ie=i.moveTables.parity[S][b],J=i.moveTables.FRtoBR[g][b],G=i.moveTables.URFtoDLF[se][b],(G*y+J)*2+ie}],sliceURtoDFParity:[2,y*P*d,function(Q){return[Q%2,(Q/2|0)%y,(Q/2|0)/y|0]},function(Q,b){var se,ie,J,G,S,g;return[S,g,se]=Q,ie=i.moveTables.parity[S][b],J=i.moveTables.FRtoBR[g][b],G=i.moveTables.URtoDF[se][b],(G*y+J)*2+ie}]},i.computePruningTables=function(...Q){var b,se,ie,J,G;for(Q.length===0&&(Q=function(){var S;S=[];for(ie in Ie)S.push(ie);return S}()),se=0,b=Q.length;se<b;se++)G=Q[se],this.pruningTables[G]===null&&(J=Ie[G],this.pruningTables[G]=xe(...J));return this},i.initSolver=function(){return i.computeMoveTables(),i.computePruningTables()},i.prototype.solveUpright=function(Q=22){var b,se,ie,J,G,S,g,R,W;return ie=function(){var O,C,Y,ne,le,Te,ae;for(C=["U","R","F","D","L","B"],Te=["","2","'"],ae=[],O=Y=0;Y<=5;O=++Y)for(le=ne=0;ne<=2;le=++ne)ae.push(C[O]+Te[le]);return ae}(),b=class{constructor(C){this.parent=null,this.lastMove=null,this.depth=0,C&&this.init(C)}init(C){return this.flip=C.flip(),this.twist=C.twist(),this.slice=C.FRtoBR()/y|0,this.parity=C.cornerParity(),this.URFtoDLF=C.URFtoDLF(),this.FRtoBR=C.FRtoBR(),this.URtoUL=C.URtoUL(),this.UBtoDF=C.UBtoDF(),this}solution(){return this.parent?this.parent.solution()+ie[this.lastMove]+" ":""}move(C,Y,ne){return i.moveTables[C][Y][ne]}pruning(C,Y){return pe(i.pruningTables[C],Y)}moves1(){return this.lastMove!==null?q[this.lastMove/3|0]:B}minDist1(){var C,Y;return C=this.pruning("sliceFlip",v*this.flip+this.slice),Y=this.pruning("sliceTwist",v*this.twist+this.slice),oe(C,Y)}next1(C){var Y;return Y=se.pop(),Y.parent=this,Y.lastMove=C,Y.depth=this.depth+1,Y.flip=this.move("flip",this.flip,C),Y.twist=this.move("twist",this.twist,C),Y.slice=this.move("FRtoBR",this.slice*24,C)/24|0,Y}moves2(){return this.lastMove!==null?Se[this.lastMove/3|0]:he}minDist2(){var C,Y,ne,le;return ne=(y*this.URtoDF+this.FRtoBR)*d+this.parity,C=this.pruning("sliceURtoDFParity",ne),le=(y*this.URFtoDLF+this.FRtoBR)*d+this.parity,Y=this.pruning("sliceURFtoDLFParity",le),oe(C,Y)}init2(C=!0){if(this.parent!==null&&(this.parent.init2(!1),this.URFtoDLF=this.move("URFtoDLF",this.parent.URFtoDLF,this.lastMove),this.FRtoBR=this.move("FRtoBR",this.parent.FRtoBR,this.lastMove),this.parity=this.move("parity",this.parent.parity,this.lastMove),this.URtoUL=this.move("URtoUL",this.parent.URtoUL,this.lastMove),this.UBtoDF=this.move("UBtoDF",this.parent.UBtoDF,this.lastMove),C))return this.URtoDF=this.move("mergeURtoDF",this.URtoUL,this.UBtoDF)}next2(C){var Y;return Y=se.pop(),Y.parent=this,Y.lastMove=C,Y.depth=this.depth+1,Y.URFtoDLF=this.move("URFtoDLF",this.URFtoDLF,C),Y.FRtoBR=this.move("FRtoBR",this.FRtoBR,C),Y.parity=this.move("parity",this.parity,C),Y.URtoDF=this.move("URtoDF",this.URtoDF,C),Y}},R=null,G=function(O){var C,Y,ne,le;for(C=0,le=[],C=Y=1,ne=Q;(1<=ne?Y<=ne:Y>=ne)&&(J(O,C),R===null);C=1<=ne?++Y:--Y)le.push(C++);return le},J=function(O,C){var Y,ne,le,Te,ae,de,Ee;if(C===0){if(O.minDist1()===0&&(O.lastMove===null||(ae=O.lastMove,Be.call(he,ae)<0)))return g(O)}else if(C>0&&O.minDist1()<=C){for(de=O.moves1(),Ee=[],ne=0,Y=de.length;ne<Y&&(le=de[ne],Te=O.next1(le),J(Te,C-1),se.push(Te),R===null);ne++)Ee.push(void 0);return Ee}},g=function(O){var C,Y,ne,le;for(O.init2(),le=[],C=Y=1,ne=Q-O.depth;(1<=ne?Y<=ne:Y>=ne)&&(S(O,C),R===null);C=1<=ne?++Y:--Y)le.push(C++);return le},S=function(O,C){var Y,ne,le,Te,ae,de;if(C===0){if(O.minDist2()===0)return R=O.solution()}else if(C>0&&O.minDist2()<=C){for(ae=O.moves2(),de=[],ne=0,Y=ae.length;ne<Y&&(le=ae[ne],Te=O.next2(le),S(Te,C-1),se.push(Te),R===null);ne++)de.push(void 0);return de}},se=function(){var O,C,Y;for(Y=[],O=0,C=Q+1;0<=C?O<=C:O>=C;0<=C?++O:--O)Y.push(new b);return Y}(),W=se.pop().init(this),G(W),se.push(W),R.length>0&&(R=R.substring(0,R.length-1)),R},_e={U:0,R:1,F:2,D:3,L:4,B:5},fe={0:"U",1:"R",2:"F",3:"D",4:"L",5:"B"},i.prototype.solve=function(Q=22){var b,se,ie,J,G,S,g,R,W;for(b=this.clone(),R=b.upright(),b.move(R),S=new i().move(R).center,W=b.solveUpright(Q),g=[],G=W.split(" "),ie=0,se=G.length;ie<se;ie++)J=G[ie],g.push(fe[S[_e[J[0]]]]),J.length>1&&(g[g.length-1]+=J[1]);return g.join(" ")},i.scramble=function(){return i.inverse(i.random().solve())}}).call(Od);var bv=zd;const Rc=yv(bv);setTimeout(()=>Rc.initSolver(),100);const ql=document.getElementById("app-3x3"),Pi=new bi,Zr=new Tt(45,window.innerWidth/window.innerHeight,.1,100);Zr.position.set(5,5,8);const ti=new wi({antialias:!0,alpha:!0});ti.setSize(window.innerWidth,window.innerHeight);ti.setPixelRatio(Math.min(window.devicePixelRatio,2));ti.shadowMap.enabled=!1;ql.appendChild(ti.domElement);const ns=new Ai(Zr,ti.domElement);ns.enableDamping=!0;ns.dampingFactor=.05;ns.enablePan=!1;ns.enableRotate=!1;ns.enableZoom=!1;const Tv=new Ti(16777215,2.5);Pi.add(Tv);const kd=new ft(16777215,1.5);kd.position.set(10,20,10);Pi.add(kd);const Hd=new ft(16777215,1);Hd.position.set(-10,10,-10);Pi.add(Hd);const Gd=new ft(16777215,1);Gd.position.set(10,-10,-10);Pi.add(Gd);const Qn=[],ar=new st;Pi.add(ar);const wv=new it(.99,.99,.99,5,.1),Av=new Qt({color:2236962,roughness:.7,metalness:.1}),mh=new it(.06,.83,.83,6,.12),gh=new it(.83,.06,.83,6,.12),_h=new it(.83,.83,.06,6,.12),Ja=document.createElement("canvas");Ja.width=256;Ja.height=256;const Da=Ja.getContext("2d");Da.fillStyle="#ffffff";Da.fillRect(0,0,256,256);for(let n=0;n<2e4;n++)Da.fillStyle=Math.random()>.5?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.08)",Da.fillRect(Math.random()*256,Math.random()*256,2,2);const Cc=new hr(Ja);Cc.wrapS=Ut;Cc.wrapT=Ut;const Rv=n=>new Qt({color:n,roughness:.9,metalness:.1,bumpMap:Cc,bumpScale:.003});for(let n=-1;n<=1;n++)for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++){const i=new st;i.position.set(n,e,t);const r=new dt(wv,Av);i.add(r);const s=(a,o,c)=>{const l=Rv(o),u=new dt(a,l);u.position.set(...c),u.userData={isSticker:!0,originalColor:o},i.add(u)};n===1&&s(mh,ke.right,[.49,0,0]),n===-1&&s(mh,ke.left,[-.49,0,0]),e===1&&s(gh,ke.top,[0,.49,0]),e===-1&&s(gh,ke.bottom,[0,-.49,0]),t===1&&s(_h,ke.front,[0,0,.49]),t===-1&&s(_h,ke.back,[0,0,-.49]),ar.add(i),Qn.push(i)}let xi=!1;function Vd(n,e,t,i=300){return new Promise(r=>{if(xi&&i>0)return;xi=!0;const s=Qn.filter(o=>Math.abs(Math.round(o.position[n])-e)<.1),a=new st;ar.add(a),s.forEach(o=>a.attach(o)),i>0?new Gt({val:0}).to({val:t},i).easing(Et.Quadratic.InOut).onUpdate(o=>a.rotation[n]=o.val).onComplete(()=>jl(a,s,r)).start():(a.rotation[n]=t,jl(a,s,r))})}function jl(n,e,t){n.updateMatrixWorld(),e.forEach(i=>{ar.attach(i),i.position.x=Math.round(i.position.x),i.position.y=Math.round(i.position.y),i.position.z=Math.round(i.position.z);const r=new Ft().setFromQuaternion(i.quaternion);r.x=Math.round(r.x/(Math.PI/2))*(Math.PI/2),r.y=Math.round(r.y/(Math.PI/2))*(Math.PI/2),r.z=Math.round(r.z/(Math.PI/2))*(Math.PI/2),i.quaternion.setFromEuler(r)}),ar.remove(n),xi=!1,t&&t()}const Cv={L:["x",-1,Math.PI/2],M:["x",0,Math.PI/2],R:["x",1,-Math.PI/2],U:["y",1,-Math.PI/2],E:["y",0,Math.PI/2],D:["y",-1,Math.PI/2],F:["z",1,-Math.PI/2],S:["z",0,-Math.PI/2],B:["z",-1,Math.PI/2]};let Is=!1;window.addEventListener("route-changed",n=>{if(n.detail==="/solver/3x3x3-cube")Is=!0,ql.style.display="block",Pi.traverse(t=>{t.userData.isSticker&&t.material.color.setHex(5592405)}),document.getElementById("paint-phase-3x3").classList.remove("d-none"),document.getElementById("playback-phase-3x3").classList.add("d-none"),document.getElementById("solver-status-3x3").innerText="",document.getElementById("cubeSolvedMsg-3x3").classList.add("d-none");else{Is=!1,ql.style.display="none";const t=document.getElementById("cubeSolvedMsg-3x3");t&&t.classList.add("d-none")}});let ba=at;const Pv=[at,gt,pt,mt,_t,xt],xh=[],vh=document.querySelector(".color-palette-3x3");vh&&Pv.forEach(n=>{const e=document.createElement("div");e.className="swatch-3x3 swatch",n===at&&e.classList.add("selected"),e.dataset.color=n,e.style.background="#"+n.toString(16).padStart(6,"0"),e.addEventListener("click",()=>{xh.forEach(t=>t.classList.remove("selected")),e.classList.add("selected"),ba=n}),xh.push(e),vh.appendChild(e)});const Mh=new _c,Vo=new We;let Ua={x:0,y:0};const ln={};ln[at]=gt;ln[gt]=at;ln[pt]=mt;ln[mt]=pt;ln[_t]=xt;ln[xt]=_t;window.addEventListener("pointerdown",n=>{Is&&n.target===ti.domElement&&(Ua.x=n.clientX,Ua.y=n.clientY)});window.addEventListener("pointerup",n=>{if(!Is||n.target!==ti.domElement||!document.getElementById("playback-phase-3x3").classList.contains("d-none")||xi||Math.hypot(n.clientX-Ua.x,n.clientY-Ua.y)>5)return;Vo.x=n.clientX/window.innerWidth*2-1,Vo.y=-(n.clientY/window.innerHeight)*2+1,Mh.setFromCamera(Vo,Zr);const i=Mh.intersectObjects(ar.children,!0).find(r=>{if(!r.object.userData.isSticker)return!1;const s=new U;return r.object.getWorldPosition(s),s.x>1.4||s.y>1.4||s.z>1.4});if(i){i.object.material=i.object.material.clone(),i.object.material.color.setHex(ba);const r=i.object.parent;if(Math.abs(Math.round(r.position.x))+Math.abs(Math.round(r.position.y))+Math.abs(Math.round(r.position.z))===1&&ln[ba]!==void 0){const a=-Math.round(r.position.x),o=-Math.round(r.position.y),c=-Math.round(r.position.z),l=Qn.find(u=>Math.round(u.position.x)===a&&Math.round(u.position.y)===o&&Math.round(u.position.z)===c);if(l){const u=l.children.find(f=>f.userData&&f.userData.isSticker);u&&(u.material=u.material.clone(),u.material.color.setHex(ln[ba]))}}else setTimeout(()=>$d(),0);Iv()}});const Sn=[at,gt,pt,mt,_t,xt],Wd=[];for(let n=0;n<Sn.length;n++)for(let e=n+1;e<Sn.length;e++){const t=Sn[n],i=Sn[e];ln[t]!==i&&Wd.push([t,i])}const Xd=[];for(let n=0;n<Sn.length;n++)for(let e=n+1;e<Sn.length;e++)for(let t=e+1;t<Sn.length;t++){const i=Sn[n],r=Sn[e],s=Sn[t];ln[i]!==r&&ln[i]!==s&&ln[r]!==s&&Xd.push([i,r,s])}function $d(){let n=!1;const e=[];Qn.forEach(r=>{const s=r.children.filter(a=>a.userData&&a.userData.isSticker);s.length>1&&e.push({cubie:r,stickers:s,colors:s.map(a=>a.material.color.getHex()),isEdge:s.length===2,isCorner:s.length===3})});const t=e.filter(r=>r.isEdge&&!r.colors.includes(5592405)).map(r=>r.colors),i=e.filter(r=>r.isCorner&&!r.colors.includes(5592405)).map(r=>r.colors);e.forEach(r=>{if(r.colors.includes(5592405)){const s=r.colors.filter(a=>a!==5592405);if(r.isEdge&&s.length===1){const a=s[0],c=Wd.filter(l=>l.includes(a)).filter(l=>!t.some(u=>u.includes(l[0])&&u.includes(l[1])));if(c.length===1){const l=c[0].find(f=>f!==a),u=r.stickers.find(f=>f.material.color.getHex()===5592405);u&&(u.material=u.material.clone(),u.material.color.setHex(l),n=!0)}}else if(r.isCorner&&s.length===2){const a=s[0],o=s[1],l=Xd.filter(u=>u.includes(a)&&u.includes(o)).filter(u=>!i.some(f=>f.includes(u[0])&&f.includes(u[1])&&f.includes(u[2])));if(l.length===1){const u=l[0].find(h=>h!==a&&h!==o),f=r.stickers.find(h=>h.material.color.getHex()===5592405);f&&(f.material=f.material.clone(),f.material.color.setHex(u),n=!0)}}}}),n&&$d()}const vi={};vi[at]=new U(0,1,0);vi[gt]=new U(0,-1,0);vi[_t]=new U(0,0,1);vi[xt]=new U(0,0,-1);vi[pt]=new U(1,0,0);vi[mt]=new U(-1,0,0);const Lv={"0,1,0":at,"0,-1,0":gt,"0,0,1":_t,"0,0,-1":xt,"1,0,0":pt,"-1,0,0":mt};function Iv(){const n=[];Qn.forEach(r=>{if(Math.abs(Math.round(r.position.x))+Math.abs(Math.round(r.position.y))+Math.abs(Math.round(r.position.z))===1){const s=r.children.find(a=>a.userData&&a.userData.isSticker);s&&n.push({sticker:s,normal:new U(Math.round(r.position.x),Math.round(r.position.y),Math.round(r.position.z)),color:s.material.color.getHex()})}});const e=n.filter(r=>r.color!==5592405);let t=null,i=null;for(let r=0;r<e.length;r++){for(let s=r+1;s<e.length;s++)if(e[r].normal.dot(e[s].normal)===0){t=e[r],i=e[s];break}if(t)break}if(t&&i){const r=vi[t.color],s=vi[i.color];if(!r||!s)return;const a=new U().crossVectors(t.normal,i.normal),o=new U().crossVectors(r,s),c=[{n:t.normal,v:r},{n:new U(-t.normal.x,-t.normal.y,-t.normal.z),v:new U(-r.x,-r.y,-r.z)},{n:i.normal,v:s},{n:new U(-i.normal.x,-i.normal.y,-i.normal.z),v:new U(-s.x,-s.y,-s.z)},{n:a,v:o},{n:new U(-a.x,-a.y,-a.z),v:new U(-o.x,-o.y,-o.z)}];n.forEach(l=>{const u=c.find(f=>f.n.equals(l.normal));if(u){const f=`${Math.round(u.v.x)},${Math.round(u.v.y)},${Math.round(u.v.z)}`,h=Lv[f];h!==void 0&&l.color!==h&&(l.sticker.material=l.sticker.material.clone(),l.sticker.material.color.setHex(h))}})}}function Qa(n,e){if(xi)return;xi=!0;const t=new st;ar.add(t),Qn.forEach(i=>t.attach(i)),new Gt({val:0}).to({val:e},300).easing(Et.Quadratic.Out).onUpdate(i=>t.rotation[n]=i.val).onComplete(()=>jl(t,Qn)).start()}document.getElementById("rotLeft-3x3").addEventListener("click",()=>Qa("y",-Math.PI/2));document.getElementById("rotRight-3x3").addEventListener("click",()=>Qa("y",Math.PI/2));document.getElementById("rotUp-3x3").addEventListener("click",()=>Qa("x",-Math.PI/2));document.getElementById("rotDown-3x3").addEventListener("click",()=>Qa("x",Math.PI/2));const Hr=document.getElementById("confirmResetOverlay-3x3");document.getElementById("btnPaintReset-3x3").addEventListener("click",()=>{Hr.classList.remove("d-none")});document.getElementById("confirmResetCancel-3x3").addEventListener("click",()=>{Hr.classList.add("d-none")});document.getElementById("confirmResetOk-3x3").addEventListener("click",()=>{Hr.classList.add("d-none"),Pi.traverse(n=>{n.userData.isSticker&&n.material.color.setHex(5592405)})});Hr.addEventListener("click",n=>{n.target===Hr&&Hr.classList.add("d-none")});let yn=[],jt=0,Ds=1;function Dv(){let n=(i,r,s,a)=>{const o=Qn.find(l=>Math.round(l.position.x)===i&&Math.round(l.position.y)===r&&Math.round(l.position.z)===s);if(!o)throw new Error(`Missing cubie at ${i},${r},${s}`);const c=o.children.find(l=>{if(!l.userData||!l.userData.isSticker)return!1;const u=new U;l.getWorldPosition(u);const f=new U;o.getWorldPosition(f);const h=u.clone().sub(f);return Math.abs(h[a])>.1});if(!c)throw new Error(`Missing sticker on face ${a} at ${i},${r},${s}`);if(c.material.color.getHex()===5592405)throw new Error("Cube is not fully painted!");return c.material.color.getHex()};const e={};if(e[n(0,1,0,"y")]="U",e[n(1,0,0,"x")]="R",e[n(0,0,1,"z")]="F",e[n(0,-1,0,"y")]="D",e[n(-1,0,0,"x")]="L",e[n(0,0,-1,"z")]="B",Object.keys(e).length!==6)throw new Error("Center tiles must have 6 distinct colors! Ensure the middle of each face is uniquely colored.");let t="";for(let i of[-1,0,1])for(let r of[-1,0,1])t+=e[n(r,1,i,"y")];for(let i of[1,0,-1])for(let r of[1,0,-1])t+=e[n(1,i,r,"x")];for(let i of[1,0,-1])for(let r of[-1,0,1])t+=e[n(r,i,1,"z")];for(let i of[1,0,-1])for(let r of[-1,0,1])t+=e[n(r,-1,i,"y")];for(let i of[1,0,-1])for(let r of[-1,0,1])t+=e[n(-1,i,r,"x")];for(let i of[1,0,-1])for(let r of[1,0,-1])t+=e[n(r,i,-1,"z")];return t}const ys=document.getElementById("errorPopupOverlay-3x3"),Sh=document.getElementById("errorList-3x3");document.getElementById("errorPopupClose-3x3").addEventListener("click",()=>{ys.classList.add("d-none")});ys.addEventListener("click",n=>{n.target===ys&&ys.classList.add("d-none")});const Mi={};Mi[at]="white";Mi[gt]="yellow";Mi[pt]="blue";Mi[mt]="green";Mi[_t]="red";Mi[xt]="orange";const Wo=[at,gt,pt,mt,_t,xt];function ms(n){Sh.innerHTML="",n.forEach(e=>{const t=document.createElement("li");t.textContent=e,Sh.appendChild(t)}),ys.classList.remove("d-none"),document.getElementById("solver-status-3x3").innerText=""}document.getElementById("btnStartSolve-3x3").addEventListener("click",()=>{try{document.getElementById("solver-status-3x3").innerText="Validating...";const n={};let e=!1;const t=[];if(Qn.forEach(x=>{const p=x.children.filter(v=>v.userData&&v.userData.isSticker),d=[];p.forEach(v=>{const y=v.material.color.getHex();y===5592405?e=!0:(n[y]=(n[y]||0)+1,d.push(y))}),d.length>0&&t.push({cubie:x,colors:d})}),e){const x=["You have unpainted tiles on the cube."];Wo.forEach(p=>{const d=Mi[p],v=n[p]||0;v<9?x.push(`You do not have enough ${d} tiles.`):v>9&&x.push(`You have too many ${d} tiles.`)}),ms(x);return}const i=[];if(Wo.forEach(x=>{const p=Mi[x],d=n[x]||0;d<9?i.push(`You do not have enough ${p} tiles.`):d>9&&i.push(`You have too many ${p} tiles.`)}),Object.keys(n).map(Number).filter(x=>!Wo.includes(x)).length>0&&i.push("Some tiles use unexpected colors."),i.length>0){ms(i);return}const a=t.filter(x=>x.colors.length===1);if(a.length!==6){ms(["Invalid center pieces detected."]);return}const o=new Map;a.forEach(x=>{const p=Math.round(x.cubie.position.x),d=Math.round(x.cubie.position.y),v=Math.round(x.cubie.position.z),y=a.find(w=>Math.round(w.cubie.position.x)===-p&&Math.round(w.cubie.position.y)===-d&&Math.round(w.cubie.position.z)===-v);y&&o.set(x.colors[0],y.colors[0])});let c=0,l=0;if(t.forEach(x=>{if(x.colors.length>1){let p=!1;for(let d=0;d<x.colors.length;d++)for(let v=d+1;v<x.colors.length;v++){const y=x.colors[d],w=x.colors[v];o.get(y)===w&&(p=!0)}p&&(x.colors.length===2?c++:x.colors.length===3&&l++)}}),c+l>0){const x=[];c>0&&x.push(`${c} edge piece(s) have opposite face colors.`),l>0&&x.push(`${l} corner piece(s) have opposite face colors.`),ms(x);return}document.getElementById("solver-status-3x3").innerText="Calculating...";const f=Dv(),m=Rc.fromString(f).solve();yn=[];const _=m.split(" ").filter(x=>x);for(let x of _){let p=x[0],d=x.length>1?x[1]:"",v=Cv[p],y=v[2];d==="'"&&(y=-y),d==="2"&&(y=y*2),yn.push({raw:x,axis:v[0],layer:v[1],angle:y})}jt=0,Ds=1,document.getElementById("paint-phase-3x3").classList.add("d-none"),document.getElementById("playback-phase-3x3").classList.remove("d-none"),Pc()}catch(n){ms(["Your puzzle cannot be solved."]),console.error(n)}});const Yd={U:"TOP",D:"BOTTOM",F:"FRONT",B:"BACK",L:"LEFT",R:"RIGHT"};function Uv(n){const e=n[0],t=n.length>1?n[1]:"",i=Yd[e];return t==="'"?`Turn the ${i} layer 90° counterclockwise.`:t==="2"?`Turn the ${i} layer 180°.`:`Turn the ${i} layer 90° clockwise.`}function Fv(n){const e=n[0],t=n.length>1?n[1]:"",i=Yd[e];return t==="'"?`Turn the ${i} layer 90° clockwise.`:t==="2"?`Turn the ${i} layer 180°.`:`Turn the ${i} layer 90° counterclockwise.`}function Nv(n){const e=n[0],t=n.length>1?n[1]:"";return t==="'"?e:t==="2"?e+"2'":e+"'"}function Pc(){const n=document.getElementById("humanInstruction-3x3"),e=document.getElementById("solutionText-3x3"),t=document.getElementById("btnSideBack-3x3"),i=document.getElementById("btnSideNext-3x3"),r=document.getElementById("cubeSolvedMsg-3x3");if(jt===0&&Ds===1){n.innerText="READY TO SOLVE!",e.innerHTML='Hold your puzzle as shown below, hit "next" to start.',t.disabled=!0,i.disabled=!1,i.innerHTML="Next &gt;",r&&r.classList.add("d-none");return}if(Ds===-1){const o=yn[jt];n.innerText=Fv(o.raw);let c=`Undo Step ${jt+1} / ${yn.length}: `;c+=`<strong style="color:#eab308">${Nv(o.raw)}</strong>`,e.innerHTML=c,t.disabled=jt<=0,i.disabled=!1,i.innerHTML="Next &gt;",r&&r.classList.add("d-none");return}const s=yn[jt-1];n.innerText=Uv(s.raw);let a=`Step ${jt} / ${yn.length}: `;a+=`<strong style="color:#2563eb">${s.raw}</strong>`,e.innerHTML=a,t.disabled=!1,jt>=yn.length?(i.disabled=!0,i.innerHTML="Done!",r&&r.classList.remove("d-none")):(i.disabled=!1,i.innerHTML="Next &gt;",r&&r.classList.add("d-none"))}async function Ov(){if(xi||jt>=yn.length)return;let n=yn[jt];Ds=1,jt++,Pc(),await Vd(n.axis,n.layer,n.angle,600)}async function Bv(){if(xi||jt<=0)return;jt--,Ds=-1;let n=yn[jt];Pc(),await Vd(n.axis,n.layer,-n.angle,600)}document.getElementById("btnSideNext-3x3").addEventListener("click",Ov);document.getElementById("btnSideBack-3x3").addEventListener("click",Bv);function qd(n){requestAnimationFrame(qd),Is&&(dr(n),ns.update(),ti.render(Pi,Zr))}qd();window.addEventListener("resize",()=>{Zr.aspect=window.innerWidth/window.innerHeight,Zr.updateProjectionMatrix(),ti.setSize(window.innerWidth,window.innerHeight)});setTimeout(()=>Rc.initSolver(),100);const Zl=document.getElementById("app-2x2"),Li=new bi,Kr=new Tt(45,window.innerWidth/window.innerHeight,.1,100);Kr.position.set(5,5,8);const ni=new wi({antialias:!0,alpha:!0});ni.setSize(window.innerWidth,window.innerHeight);ni.setPixelRatio(Math.min(window.devicePixelRatio,2));ni.shadowMap.enabled=!1;Zl.appendChild(ni.domElement);const is=new Ai(Kr,ni.domElement);is.enableDamping=!0;is.dampingFactor=.05;is.enablePan=!1;is.enableRotate=!1;is.enableZoom=!1;const zv=new Ti(16777215,2.5);Li.add(zv);const jd=new ft(16777215,1.5);jd.position.set(10,20,10);Li.add(jd);const Zd=new ft(16777215,1);Zd.position.set(-10,10,-10);Li.add(Zd);const Kd=new ft(16777215,1);Kd.position.set(10,-10,-10);Li.add(Kd);const or=[],Si=new st;Li.add(Si);const kv=new it(.99,.99,.99,5,.1),Hv=new Qt({color:2236962,roughness:.7,metalness:.1}),Eh=new it(.06,.83,.83,6,.12),yh=new it(.83,.06,.83,6,.12),bh=new it(.83,.83,.06,6,.12),eo=document.createElement("canvas");eo.width=256;eo.height=256;const Fa=eo.getContext("2d");Fa.fillStyle="#ffffff";Fa.fillRect(0,0,256,256);for(let n=0;n<2e4;n++)Fa.fillStyle=Math.random()>.5?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.08)",Fa.fillRect(Math.random()*256,Math.random()*256,2,2);const Lc=new hr(eo);Lc.wrapS=Ut;Lc.wrapT=Ut;const Gv=n=>new Qt({color:n,roughness:.9,metalness:.1,bumpMap:Lc,bumpScale:.003});for(let n of[-.5,.5])for(let e of[-.5,.5])for(let t of[-.5,.5]){const i=new st;i.position.set(n,e,t);const r=new dt(kv,Hv);i.add(r);const s=(a,o,c)=>{const l=Gv(o),u=new dt(a,l);u.position.set(...c),u.userData={isSticker:!0,originalColor:o},i.add(u)};n===.5&&s(Eh,ke.right,[.49,0,0]),n===-.5&&s(Eh,ke.left,[-.49,0,0]),e===.5&&s(yh,ke.top,[0,.49,0]),e===-.5&&s(yh,ke.bottom,[0,-.49,0]),t===.5&&s(bh,ke.front,[0,0,.49]),t===-.5&&s(bh,ke.back,[0,0,-.49]),Si.add(i),or.push(i)}Si.scale.set(1.5,1.5,1.5);let Ei=!1;function Jd(n,e,t,i=300){return new Promise(r=>{if(Ei&&i>0)return;Ei=!0;const s=or.filter(o=>Math.abs(o.position[n]-e)<.1),a=new st;Si.add(a),s.forEach(o=>a.attach(o)),i>0?new Gt({val:0}).to({val:t},i).easing(Et.Quadratic.InOut).onUpdate(o=>a.rotation[n]=o.val).onComplete(()=>Kl(a,s,r)).start():(a.rotation[n]=t,Kl(a,s,r))})}function Kl(n,e,t){n.updateMatrixWorld(),e.forEach(i=>{Si.attach(i),i.position.x=Math.round(i.position.x*2)/2,i.position.y=Math.round(i.position.y*2)/2,i.position.z=Math.round(i.position.z*2)/2;const r=new Ft().setFromQuaternion(i.quaternion);r.x=Math.round(r.x/(Math.PI/2))*(Math.PI/2),r.y=Math.round(r.y/(Math.PI/2))*(Math.PI/2),r.z=Math.round(r.z/(Math.PI/2))*(Math.PI/2),i.quaternion.setFromEuler(r)}),Si.remove(n),Ei=!1,t&&t()}const Vv={L:["x",-.5,Math.PI/2],R:["x",.5,-Math.PI/2],U:["y",.5,-Math.PI/2],D:["y",-.5,Math.PI/2],F:["z",.5,-Math.PI/2],B:["z",-.5,Math.PI/2]};let Us=!1;window.addEventListener("route-changed",n=>{if(n.detail==="/solver/2x2x2-cube")Us=!0,Zl.style.display="block",Li.traverse(t=>{t.userData.isSticker&&t.material.color.setHex(5592405)}),document.getElementById("paint-phase-2x2").classList.remove("d-none"),document.getElementById("playback-phase-2x2").classList.add("d-none"),document.getElementById("solver-status-2x2").innerText="",document.getElementById("cubeSolvedMsg-2x2").classList.add("d-none");else{Us=!1,Zl.style.display="none";const t=document.getElementById("cubeSolvedMsg-2x2");t&&t.classList.add("d-none")}});let Qd=at;const Wv=[at,gt,pt,mt,_t,xt],Th=[],wh=document.querySelector(".color-palette-2x2");wh&&Wv.forEach(n=>{const e=document.createElement("div");e.className="swatch-2x2 swatch",n===at&&e.classList.add("selected"),e.dataset.color=n,e.style.background="#"+n.toString(16).padStart(6,"0"),e.addEventListener("click",()=>{Th.forEach(t=>t.classList.remove("selected")),e.classList.add("selected"),Qd=n}),Th.push(e),wh.appendChild(e)});const Ah=new _c,Xo=new We;let Na={x:0,y:0};const jn={};jn[at]=gt;jn[gt]=at;jn[pt]=mt;jn[mt]=pt;jn[_t]=xt;jn[xt]=_t;window.addEventListener("pointerdown",n=>{Us&&n.target===ni.domElement&&(Na.x=n.clientX,Na.y=n.clientY)});window.addEventListener("pointerup",n=>{if(!Us||n.target!==ni.domElement||!document.getElementById("playback-phase-2x2").classList.contains("d-none")||Ei||Math.hypot(n.clientX-Na.x,n.clientY-Na.y)>5)return;Xo.x=n.clientX/window.innerWidth*2-1,Xo.y=-(n.clientY/window.innerHeight)*2+1,Ah.setFromCamera(Xo,Kr);const i=Ah.intersectObjects(Si.children,!0).find(r=>{if(!r.object.userData.isSticker)return!1;const s=new U;return r.object.getWorldPosition(s),s.x>.8||s.y>.8||s.z>.8});i&&(i.object.material=i.object.material.clone(),i.object.material.color.setHex(Qd),setTimeout(()=>tf(),0))});const Ur=[at,gt,pt,mt,_t,xt],ef=[];for(let n=0;n<Ur.length;n++)for(let e=n+1;e<Ur.length;e++)for(let t=e+1;t<Ur.length;t++){const i=Ur[n],r=Ur[e],s=Ur[t];jn[i]!==r&&jn[i]!==s&&jn[r]!==s&&ef.push([i,r,s])}function tf(){let n=!1;const e=[];or.forEach(i=>{const r=i.children.filter(s=>s.userData&&s.userData.isSticker);r.length===3&&e.push({cubie:i,stickers:r,colors:r.map(s=>s.material.color.getHex())})});const t=e.filter(i=>!i.colors.includes(5592405)).map(i=>i.colors);e.forEach(i=>{if(i.colors.includes(5592405)){const r=i.colors.filter(s=>s!==5592405);if(r.length===2){const s=r[0],a=r[1],c=ef.filter(l=>l.includes(s)&&l.includes(a)).filter(l=>!t.some(u=>u.includes(l[0])&&u.includes(l[1])&&u.includes(l[2])));if(c.length===1){const l=c[0].find(f=>f!==s&&f!==a),u=i.stickers.find(f=>f.material.color.getHex()===5592405);u&&(u.material=u.material.clone(),u.material.color.setHex(l),n=!0)}}}}),n&&tf()}function to(n,e){if(Ei)return;Ei=!0;const t=new st;Si.add(t),or.forEach(i=>t.attach(i)),new Gt({val:0}).to({val:e},300).easing(Et.Quadratic.Out).onUpdate(i=>t.rotation[n]=i.val).onComplete(()=>Kl(t,or)).start()}document.getElementById("rotLeft-2x2").addEventListener("click",()=>to("y",-Math.PI/2));document.getElementById("rotRight-2x2").addEventListener("click",()=>to("y",Math.PI/2));document.getElementById("rotUp-2x2").addEventListener("click",()=>to("x",-Math.PI/2));document.getElementById("rotDown-2x2").addEventListener("click",()=>to("x",Math.PI/2));const Gr=document.getElementById("confirmResetOverlay-2x2");document.getElementById("btnPaintReset-2x2").addEventListener("click",()=>{Gr.classList.remove("d-none")});document.getElementById("confirmResetCancel-2x2").addEventListener("click",()=>{Gr.classList.add("d-none")});document.getElementById("confirmResetOk-2x2").addEventListener("click",()=>{Gr.classList.add("d-none"),Li.traverse(n=>{n.userData.isSticker&&n.material.color.setHex(5592405)})});Gr.addEventListener("click",n=>{n.target===Gr&&Gr.classList.add("d-none")});const bs=document.getElementById("errorPopupOverlay-2x2"),Rh=document.getElementById("errorList-2x2");document.getElementById("errorPopupClose-2x2").addEventListener("click",()=>{bs.classList.add("d-none")});bs.addEventListener("click",n=>{n.target===bs&&bs.classList.add("d-none")});const mr={};mr[at]="white";mr[gt]="yellow";mr[pt]="blue";mr[mt]="green";mr[_t]="red";mr[xt]="orange";const Ch=[at,gt,pt,mt,_t,xt];function Ph(n){Rh.innerHTML="",n.forEach(e=>{const t=document.createElement("li");t.textContent=e,Rh.appendChild(t)}),bs.classList.remove("d-none"),document.getElementById("solver-status-2x2").innerText=""}function Xv(){const n={};n[gt]=0,n[mt]=1,n[xt]=2,n[at]=3,n[pt]=4,n[_t]=5;let e=(i,r,s,a)=>{const o=or.find(u=>Math.abs(u.position.x-i)<.1&&Math.abs(u.position.y-r)<.1&&Math.abs(u.position.z-s)<.1);if(!o)throw new Error(`Missing cubie at ${i},${r},${s}`);const c=o.children.find(u=>{if(!u.userData||!u.userData.isSticker)return!1;const f=new U;u.getWorldPosition(f);const h=new U;o.getWorldPosition(h);const m=f.clone().sub(h);return Math.abs(m[a])>.1});if(!c)return-1;const l=c.material.color.getHex();if(n[l]===void 0&&l!==5592405)throw new Error("Unknown color");return l===5592405?-1:n[l]};const t=new Array(24);if(t[15]=e(.5,.5,.5,"y"),t[14]=e(-.5,.5,.5,"y"),t[13]=e(.5,.5,-.5,"y"),t[12]=e(-.5,.5,-.5,"y"),t[3]=e(.5,-.5,.5,"y"),t[2]=e(-.5,-.5,.5,"y"),t[1]=e(.5,-.5,-.5,"y"),t[0]=e(-.5,-.5,-.5,"y"),t[21]=e(.5,.5,.5,"z"),t[20]=e(-.5,.5,.5,"z"),t[23]=e(.5,-.5,.5,"z"),t[22]=e(-.5,-.5,.5,"z"),t[9]=e(.5,.5,-.5,"z"),t[8]=e(-.5,.5,-.5,"z"),t[11]=e(.5,-.5,-.5,"z"),t[10]=e(-.5,-.5,-.5,"z"),t[16]=e(.5,.5,.5,"x"),t[17]=e(.5,.5,-.5,"x"),t[18]=e(.5,-.5,.5,"x"),t[19]=e(.5,-.5,-.5,"x"),t[4]=e(-.5,.5,.5,"x"),t[5]=e(-.5,.5,-.5,"x"),t[6]=e(-.5,-.5,.5,"x"),t[7]=e(-.5,-.5,-.5,"x"),t.includes(-1))throw new Error("Cube is not fully painted!");return t}const $v=function(){let n=[],e=[],t=[],i=[],r=!1,s=[];const a=[15,16,16,21,21,15,13,9,9,17,17,13,14,20,20,4,4,14,12,5,5,8,8,12,3,23,23,18,18,3,1,19,19,11,11,1,2,6,6,22,22,2,0,10,10,7,7,0];function o(h,m){let _,x,p,d,v=new Array(8);for(d=h,_=1;_<=7;_++){for(x=d%_,d=(d-x)/_,p=_-1;p>=x;p--)v[p+1]=v[p];v[x]=7-_}for(m===0?(p=v[0],v[0]=v[1],v[1]=v[3],v[3]=v[2],v[2]=p):m===1?(p=v[0],v[0]=v[4],v[4]=v[5],v[5]=v[1],v[1]=p):m===2&&(p=v[0],v[0]=v[2],v[2]=v[6],v[6]=v[4],v[4]=p),d=0,_=0;_<7;_++){for(x=0,p=0;p<7&&v[p]!==_;p++)v[p]>_&&x++;d=d*(7-_)+x}return d}function c(h,m){let _,x,p,d,v,y=new Array(7);for(v=h,d=0,_=0;_<=5;_++)p=Math.floor(v/3),x=v-3*p,v=p,y[_]=x,d-=x,d<0&&(d+=3);for(y[6]=d,m===0?(p=y[0],y[0]=y[1],y[1]=y[3],y[3]=y[2],y[2]=p):m===1?(p=y[0],y[0]=y[4],y[4]=y[5],y[5]=y[1],y[1]=p,y[0]+=2,y[1]++,y[5]+=2,y[4]++):m===2&&(p=y[0],y[0]=y[2],y[2]=y[6],y[6]=y[4],y[4]=p,y[2]+=2,y[0]++,y[4]+=2,y[6]++),v=0,_=5;_>=0;_--)v=v*3+y[_]%3;return v}function l(){if(!r){for(let h=0;h<5040;h++){n[h]=-1,t[h]=[];for(let m=0;m<3;m++)t[h][m]=o(h,m)}n[0]=0;for(let h=0;h<=6;h++)for(let m=0;m<5040;m++)if(n[m]===h)for(let _=0;_<3;_++){let x=m;for(let p=0;p<3;p++)x=t[x][_],n[x]===-1&&(n[x]=h+1)}for(let h=0;h<729;h++){e[h]=-1,i[h]=[];for(let m=0;m<3;m++)i[h][m]=c(h,m)}e[0]=0;for(let h=0;h<=5;h++)for(let m=0;m<729;m++)if(e[m]===h)for(let _=0;_<3;_++){let x=m;for(let p=0;p<3;p++)x=i[x][_],e[x]===-1&&(e[x]=h+1)}r=!0}}function u(h,m,_,x,p){if(x===0){if(m===0&&_===0)return!0}else{if(n[m]>x||e[_]>x)return!1;for(let d=0;d<3;d++)if(d!==p){let v=m,y=_;for(let w=0;w<3;w++)if(v=t[v][d],y=i[y][d],s[h]=10*d+w,u(h+1,v,y,x-1,d))return!0}}return!1}function f(h){if(h.length!==24)return"Error: Cube state must contain exactly 24 facelets.";l();let m=Array.from({length:6},()=>Array(6).fill(0));for(let A=0;A<48;A+=2)h[a[A]]<=5&&h[a[A+1]]<=5&&m[h[a[A]]][h[a[A+1]]]++;let _=[];for(let A=0;A<6;A++)for(let P=0;P<6;P++)A!==P&&m[A][P]+m[P][A]===0&&(_[A]=P,_[P]=A);let x=[],p=[],d=0;for(let A=0;A<7;A++){let P=0;for(let M=d;M<d+6;M+=2)h[a[M]]===h[a[42]]&&(P+=4),h[a[M]]===h[a[44]]&&(P+=1),h[a[M]]===h[a[46]]&&(P+=2);x[A]=P,h[a[d]]===h[a[42]]||h[a[d]]===_[h[a[42]]]?p[A]=0:h[a[d+2]]===h[a[42]]||h[a[d+2]]===_[h[a[42]]]?p[A]=1:p[A]=2,d+=6}let v=0;for(let A=0;A<7;A++){let P=0;for(let M=0;M<7&&x[M]!==A;M++)x[M]>A&&P++;v=v*(7-A)+P}let y=0;for(let A=5;A>=0;A--)y=y*3+p[A]-3*Math.floor(p[A]/3);if(v===0&&y===0)return[];s=[];let w=!1;for(let A=0;A<=11;A++)if(u(0,v,y,A,-1)){w=!0;break}if(!w)return"Error: Unsolvable cube state.";let I=[];for(let A=0;A<s.length;A++){let P="URF".charAt(Math.floor(s[A]/10)),M=" 2'".charAt(s[A]%10).trim();I.push(P+M)}return I}return{solve:f,init:l}}();let bn=[],Zt=0,Fs=1;document.getElementById("btnStartSolve-2x2").addEventListener("click",()=>{try{document.getElementById("solver-status-2x2").innerText="Validating...";const n={};let e=!1;or.forEach(o=>{o.children.filter(l=>l.userData&&l.userData.isSticker).forEach(l=>{const u=l.material.color.getHex();u===5592405?e=!0:n[u]=(n[u]||0)+1})});const t=[];if(e&&t.push("You have unpainted tiles on the cube."),Ch.forEach(o=>{const c=mr[o],l=n[o]||0;l<4?t.push(`You do not have enough ${c} tiles.`):l>4&&t.push(`You have too many ${c} tiles.`)}),Object.keys(n).map(Number).filter(o=>!Ch.includes(o)).length>0&&t.push("Some tiles use unexpected colors."),t.length>0){Ph(t);return}document.getElementById("solver-status-2x2").innerText="Calculating Solution...";const s=Xv(),a=$v.solve(s);if(typeof a=="string")throw new Error(a);bn=[];for(let o of a){let c=o[0],l=o.length>1?o[1]:"",u=Vv[c],f=u[2];l==="'"&&(f=-f),l==="2"&&(f=f*2),bn.push({raw:o,axis:u[0],layer:u[1],angle:f})}Zt=0,Fs=1,document.getElementById("paint-phase-2x2").classList.add("d-none"),document.getElementById("playback-phase-2x2").classList.remove("d-none"),Ic()}catch(n){Ph(["Your puzzle cannot be solved."]),console.error(n)}});const nf={U:"TOP",D:"BOTTOM",F:"FRONT",B:"BACK",L:"LEFT",R:"RIGHT"};function Yv(n){const e=n[0],t=n.length>1?n[1]:"",i=nf[e];return t==="'"?`Turn the ${i} layer 90° counterclockwise.`:t==="2"?`Turn the ${i} layer 180°.`:`Turn the ${i} layer 90° clockwise.`}function qv(n){const e=n[0],t=n.length>1?n[1]:"",i=nf[e];return t==="'"?`Turn the ${i} layer 90° clockwise.`:t==="2"?`Turn the ${i} layer 180°.`:`Turn the ${i} layer 90° counterclockwise.`}function jv(n){const e=n[0],t=n.length>1?n[1]:"";return t==="'"?e:t==="2"?e+"2'":e+"'"}function Ic(){const n=document.getElementById("humanInstruction-2x2"),e=document.getElementById("solutionText-2x2"),t=document.getElementById("btnSideBack-2x2"),i=document.getElementById("btnSideNext-2x2"),r=document.getElementById("cubeSolvedMsg-2x2");if(Zt===0&&Fs===1){n.innerText="READY TO SOLVE!",e.innerHTML='Hold your puzzle as shown below, hit "next" to start.',t.disabled=!0,i.disabled=!1,i.innerHTML="Next &gt;",r&&r.classList.add("d-none");return}if(Fs===-1){const o=bn[Zt];n.innerText=qv(o.raw);let c=`Undo Step ${Zt+1} / ${bn.length}: `;c+=`<strong style="color:#eab308">${jv(o.raw)}</strong>`,e.innerHTML=c,t.disabled=Zt<=0,i.disabled=!1,i.innerHTML="Next &gt;",r&&r.classList.add("d-none");return}const s=bn[Zt-1];n.innerText=Yv(s.raw);let a=`Step ${Zt} / ${bn.length}: `;a+=`<strong style="color:#2563eb">${s.raw}</strong>`,e.innerHTML=a,t.disabled=!1,Zt>=bn.length?(i.disabled=!0,i.innerHTML="Done!",r&&r.classList.remove("d-none")):(i.disabled=!1,i.innerHTML="Next &gt;",r&&r.classList.add("d-none"))}async function Zv(){if(Ei||Zt>=bn.length)return;let n=bn[Zt];Fs=1,Zt++,Ic(),await Jd(n.axis,n.layer,n.angle,600)}async function Kv(){if(Ei||Zt<=0)return;Zt--,Fs=-1;let n=bn[Zt];Ic(),await Jd(n.axis,n.layer,-n.angle,600)}document.getElementById("btnSideNext-2x2").addEventListener("click",Zv);document.getElementById("btnSideBack-2x2").addEventListener("click",Kv);function rf(n){requestAnimationFrame(rf),Us&&(dr(n),is.update(),ni.render(Li,Kr))}rf();window.addEventListener("resize",()=>{Kr.aspect=window.innerWidth/window.innerHeight,Kr.updateProjectionMatrix(),ni.setSize(window.innerWidth,window.innerHeight)});const Jl=document.getElementById("app-4x4"),Ii=new bi,no=new Tt(45,window.innerWidth/window.innerHeight,.1,100);no.position.set(7,7,10);const Di=new wi({antialias:!0,alpha:!0});Di.setSize(window.innerWidth,window.innerHeight);Di.setPixelRatio(Math.min(window.devicePixelRatio,2));Di.shadowMap.enabled=!1;Jl.appendChild(Di.domElement);const rs=new Ai(no,Di.domElement);rs.enableDamping=!0;rs.dampingFactor=.05;rs.enablePan=!1;rs.enableRotate=!1;rs.enableZoom=!1;const Jv=new Ti(16777215,2.5);Ii.add(Jv);const sf=new ft(16777215,1.5);sf.position.set(10,20,10);Ii.add(sf);const af=new ft(16777215,1);af.position.set(-10,10,-10);Ii.add(af);const of=new ft(16777215,1);of.position.set(10,-10,-10);Ii.add(of);const lr=[],cr=new st;Ii.add(cr);const Qv=new it(.99,.99,.99,5,.1),eM=new Qt({color:2236962,roughness:.7,metalness:.1}),Lh=new it(.06,.83,.83,6,.12),Ih=new it(.83,.06,.83,6,.12),Dh=new it(.83,.83,.06,6,.12),io=document.createElement("canvas");io.width=256;io.height=256;const Oa=io.getContext("2d");Oa.fillStyle="#ffffff";Oa.fillRect(0,0,256,256);for(let n=0;n<2e4;n++)Oa.fillStyle=Math.random()>.5?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.08)",Oa.fillRect(Math.random()*256,Math.random()*256,2,2);const Dc=new hr(io);Dc.wrapS=Ut;Dc.wrapT=Ut;const tM=n=>new Qt({color:n,roughness:.9,metalness:.1,bumpMap:Dc,bumpScale:.003});for(let n of[-1.5,-.5,.5,1.5])for(let e of[-1.5,-.5,.5,1.5])for(let t of[-1.5,-.5,.5,1.5]){const i=new st;i.position.set(n,e,t);const r=new dt(Qv,eM);i.add(r);const s=(a,o,c)=>{const l=tM(o),u=new dt(a,l);u.position.set(...c),u.userData={isSticker:!0,originalColor:o},i.add(u)};n===1.5&&s(Lh,ke.right,[.49,0,0]),n===-1.5&&s(Lh,ke.left,[-.49,0,0]),e===1.5&&s(Ih,ke.top,[0,.49,0]),e===-1.5&&s(Ih,ke.bottom,[0,-.49,0]),t===1.5&&s(Dh,ke.front,[0,0,.49]),t===-1.5&&s(Dh,ke.back,[0,0,-.49]),cr.add(i),lr.push(i)}let yi=!1;function lf(n,e,t,i=300){return new Promise(r=>{if(yi&&i>0)return;yi=!0;const s=lr.filter(o=>{const c=Math.round(o.position[n]*2)/2;return e.some(l=>Math.abs(c-l)<.1)}),a=new st;cr.add(a),s.forEach(o=>a.attach(o)),i>0?new Gt({val:0}).to({val:t},i).easing(Et.Quadratic.InOut).onUpdate(o=>a.rotation[n]=o.val).onComplete(()=>Ql(a,s,r)).start():(a.rotation[n]=t,Ql(a,s,r))})}function Ql(n,e,t){n.updateMatrixWorld(),e.forEach(i=>{cr.attach(i),i.position.x=Math.round(i.position.x*2)/2,i.position.y=Math.round(i.position.y*2)/2,i.position.z=Math.round(i.position.z*2)/2;const r=new Ft().setFromQuaternion(i.quaternion);r.x=Math.round(r.x/(Math.PI/2))*(Math.PI/2),r.y=Math.round(r.y/(Math.PI/2))*(Math.PI/2),r.z=Math.round(r.z/(Math.PI/2))*(Math.PI/2),i.quaternion.setFromEuler(r)}),cr.remove(n),yi=!1,t&&t()}function ro(n,e){if(yi)return;yi=!0;const t=new st;cr.add(t),lr.forEach(i=>t.attach(i)),new Gt({val:0}).to({val:e},300).easing(Et.Quadratic.Out).onUpdate(i=>t.rotation[n]=i.val).onComplete(()=>Ql(t,lr)).start()}let so=!1;window.addEventListener("route-changed",n=>{if(n.detail==="/solver/4x4x4-cube")so=!0,Jl.style.display="block",Ii.traverse(t=>{t.userData.isSticker&&t.material.color.setHex(5592405)}),document.getElementById("paint-phase-4x4").classList.remove("d-none"),document.getElementById("playback-phase-4x4").classList.add("d-none"),document.getElementById("solver-status-4x4").innerText="",document.getElementById("cubeSolvedMsg-4x4").classList.add("d-none");else{document.getElementById("solve-4x4-view").classList.add("d-none"),Jl.style.display="none";const t=document.getElementById("cubeSolvedMsg-4x4");t&&t.classList.add("d-none")}});const gn={};gn[at]=gt;gn[gt]=at;gn[pt]=mt;gn[mt]=pt;gn[_t]=xt;gn[xt]=_t;const En=[at,gt,pt,mt,_t,xt],cf=[];for(let n=0;n<En.length;n++)for(let e=n+1;e<En.length;e++){const t=En[n],i=En[e];gn[t]!==i&&cf.push([t,i])}const uf=[];for(let n=0;n<En.length;n++)for(let e=n+1;e<En.length;e++)for(let t=e+1;t<En.length;t++){const i=En[n],r=En[e],s=En[t];gn[i]!==r&&gn[i]!==s&&gn[r]!==s&&uf.push([i,r,s])}function hf(){let n=!1;const e=[];lr.forEach(r=>{const s=r.children.filter(a=>a.userData&&a.userData.isSticker);s.length>1&&e.push({cubie:r,stickers:s,colors:s.map(a=>a.material.color.getHex()),isEdge:s.length===2,isCorner:s.length===3})});const t=e.filter(r=>r.isEdge&&!r.colors.includes(5592405)).map(r=>r.colors),i=e.filter(r=>r.isCorner&&!r.colors.includes(5592405)).map(r=>r.colors);e.forEach(r=>{if(r.colors.includes(5592405)){const s=r.colors.filter(a=>a!==5592405);if(r.isEdge&&s.length===1){const a=s[0],c=cf.filter(l=>l.includes(a)).filter(l=>t.filter(f=>f.includes(l[0])&&f.includes(l[1])).length<2);if(c.length===1){const l=c[0].find(f=>f!==a),u=r.stickers.find(f=>f.material.color.getHex()===5592405);u&&(u.material=u.material.clone(),u.material.color.setHex(l),n=!0)}}else if(r.isCorner&&s.length===2){const a=s[0],o=s[1],l=uf.filter(u=>u.includes(a)&&u.includes(o)).filter(u=>!i.some(f=>f.includes(u[0])&&f.includes(u[1])&&f.includes(u[2])));if(l.length===1){const u=l[0].find(h=>h!==a&&h!==o),f=r.stickers.find(h=>h.material.color.getHex()===5592405);f&&(f.material=f.material.clone(),f.material.color.setHex(u),n=!0)}}}}),n&&hf()}let df=at;const nM=[at,gt,pt,mt,_t,xt],Uh=[],Fh=document.querySelector(".color-palette-4x4");Fh&&nM.forEach(n=>{const e=document.createElement("div");e.className="swatch-4x4 swatch",n===at&&e.classList.add("selected"),e.dataset.color=n,e.style.background="#"+n.toString(16).padStart(6,"0"),e.addEventListener("click",()=>{Uh.forEach(t=>t.classList.remove("selected")),e.classList.add("selected"),df=n}),Uh.push(e),Fh.appendChild(e)});const Nh=new _c,$o=new We;let Ba={x:0,y:0};window.addEventListener("pointerdown",n=>{so&&n.target===Di.domElement&&(Ba.x=n.clientX,Ba.y=n.clientY)});window.addEventListener("pointerup",n=>{if(!so||n.target!==Di.domElement||document.getElementById("paint-phase-4x4").classList.contains("d-none")||yi||Math.hypot(n.clientX-Ba.x,n.clientY-Ba.y)>5)return;$o.x=n.clientX/window.innerWidth*2-1,$o.y=-(n.clientY/window.innerHeight)*2+1,Nh.setFromCamera($o,no);const i=Nh.intersectObjects(cr.children,!0).find(r=>{if(!r.object.userData.isSticker)return!1;const s=new U;return r.object.getWorldPosition(s),s.x>1.9||s.y>1.9||s.z>1.9});i&&(i.object.material=i.object.material.clone(),i.object.material.color.setHex(df),setTimeout(()=>{hf()},0))});document.getElementById("rotLeft-4x4").addEventListener("click",()=>ro("y",-Math.PI/2));document.getElementById("rotRight-4x4").addEventListener("click",()=>ro("y",Math.PI/2));document.getElementById("rotUp-4x4").addEventListener("click",()=>ro("x",-Math.PI/2));document.getElementById("rotDown-4x4").addEventListener("click",()=>ro("x",Math.PI/2));const Uc=document.getElementById("confirmResetOverlay-4x4");document.getElementById("btnPaintReset-4x4").addEventListener("click",()=>{Uc.classList.remove("d-none")});document.getElementById("confirmResetCancel-4x4").addEventListener("click",()=>{Uc.classList.add("d-none")});document.getElementById("confirmResetOk-4x4").addEventListener("click",()=>{Uc.classList.add("d-none"),Ii.traverse(n=>{n.userData.isSticker&&n.material.color.setHex(5592405)})});const ff=document.getElementById("errorPopupOverlay-4x4"),Oh=document.getElementById("errorList-4x4");document.getElementById("errorPopupClose-4x4").addEventListener("click",()=>{ff.classList.add("d-none")});const gr={};gr[at]="white";gr[gt]="yellow";gr[pt]="blue";gr[mt]="green";gr[_t]="red";gr[xt]="orange";function gs(n){Oh.innerHTML="",n.forEach(e=>{const t=document.createElement("li");t.textContent=e,Oh.appendChild(t)}),ff.classList.remove("d-none"),document.getElementById("solver-status-4x4").innerText=""}document.getElementById("btnStartSolve-4x4").addEventListener("click",()=>{try{document.getElementById("solver-status-4x4").innerText="Validating...";const n={};let e=!1;const t=[];lr.forEach(u=>{const f=u.children.filter(m=>m.userData&&m.userData.isSticker),h=[];f.forEach(m=>{const _=m.material.color.getHex();_===5592405?e=!0:(n[_]=(n[_]||0)+1,h.push(_))}),h.length>0&&t.push({cubie:u,colors:h})});const i=[at,gt,pt,mt,_t,xt],r=[];if(e&&r.push("You have unpainted tiles on the cube."),i.forEach(u=>{const f=n[u]||0,h=gr[u];f<16?r.push(`You do not have enough ${h} tiles.`):f>16&&r.push(`You have too many ${h} tiles.`)}),r.length>0){gs(r);return}let s=0,a=0;if(t.forEach(u=>{if(u.colors.length>1){let f=!1;for(let h=0;h<u.colors.length;h++)for(let m=h+1;m<u.colors.length;m++)gn[u.colors[h]]===u.colors[m]&&(f=!0),u.colors[h]===u.colors[m]&&(f=!0);f&&(u.colors.length===2?s++:a++)}}),s||a){const u=[];s&&u.push(`${s} edge piece(s) have invalid color combinations.`),a&&u.push(`${a} corner piece(s) have invalid color combinations.`),gs(u);return}const o=document.getElementById("solver-status-4x4"),c=document.getElementById("solverLoadingOverlay-4x4");c.classList.remove("d-none"),o.innerText="";const l=iM();za=new AbortController,fetch("http://localhost:5000/solve",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({state:l}),signal:za.signal}).then(u=>u.json()).then(u=>{if(c.classList.add("d-none"),u.error){gs([u.error,...u.details?[u.details]:[]]);return}let f=u.solution||u.raw,m=(f.split(`
`).find(x=>x.includes("Solution:"))||f).replace("Solution:","").trim();Tn=[];const _=m.split(" ").filter(x=>x);for(let x of _){let p=rM(x);p&&Tn.push({raw:x,axis:p.axis,layer:p.layers,angle:p.angle})}Kt=0,Ns=1,document.getElementById("paint-phase-4x4").classList.add("d-none"),document.getElementById("playback-phase-4x4").classList.remove("d-none"),Fc()}).catch(u=>{if(c.classList.add("d-none"),u.name==="AbortError"){console.log("Solve request cancelled by user.");return}gs(["Could not connect to Python API.","Run python-solver-api locally using Docker or Flask."]),console.error(u)})}catch(n){document.getElementById("solverLoadingOverlay-4x4").classList.add("d-none"),gs(["An error occurred during validation."]),console.error(n)}});let za=null;document.getElementById("btnCancelSolve-4x4").addEventListener("click",()=>{za&&(za.abort(),document.getElementById("solverLoadingOverlay-4x4").classList.add("d-none"))});let Tn=[],Kt=0,Ns=1;function iM(){let n=(i,r,s,a)=>{const o=lr.find(l=>Math.abs(l.position.x-i)<.1&&Math.abs(l.position.y-r)<.1&&Math.abs(l.position.z-s)<.1);if(!o)throw new Error(`Missing cubie at ${i},${r},${s}`);const c=o.children.find(l=>{if(!l.userData||!l.userData.isSticker)return!1;const u=new U;l.getWorldPosition(u);const f=new U;return o.getWorldPosition(f),Math.abs(u[a]-f[a])>.1});if(!c)throw new Error(`Missing sticker on face ${a} at ${i},${r},${s}`);return c.material.color.getHex()};const e={};e[at]="U",e[gt]="D",e[_t]="R",e[xt]="L",e[pt]="B",e[mt]="F";let t="";for(let i of[-1.5,-.5,.5,1.5])for(let r of[-1.5,-.5,.5,1.5])t+=e[n(r,1.5,i,"y")];for(let i of[1.5,.5,-.5,-1.5])for(let r of[1.5,.5,-.5,-1.5])t+=e[n(1.5,i,r,"x")];for(let i of[1.5,.5,-.5,-1.5])for(let r of[-1.5,-.5,.5,1.5])t+=e[n(r,i,1.5,"z")];for(let i of[1.5,.5,-.5,-1.5])for(let r of[-1.5,-.5,.5,1.5])t+=e[n(r,-1.5,i,"y")];for(let i of[1.5,.5,-.5,-1.5])for(let r of[-1.5,-.5,.5,1.5])t+=e[n(-1.5,i,r,"x")];for(let i of[1.5,.5,-.5,-1.5])for(let r of[1.5,.5,-.5,-1.5])t+=e[n(r,i,-1.5,"z")];return t}function rM(n){let e=n[0],t=n.substring(1);if(["2","3"].includes(e)&&n.length>1){let o=n[1];t=n.substring(2),e=o.toLowerCase()}t.startsWith("w")&&(e=e+"w",t=t.substring(1));let i=0,r="y",s=[];switch(e){case"U":r="y",s=[1.5],i=-Math.PI/2;break;case"D":r="y",s=[-1.5],i=Math.PI/2;break;case"L":r="x",s=[-1.5],i=Math.PI/2;break;case"R":r="x",s=[1.5],i=-Math.PI/2;break;case"F":r="z",s=[1.5],i=-Math.PI/2;break;case"B":r="z",s=[-1.5],i=Math.PI/2;break;case"Uw":r="y",s=[1.5,.5],i=-Math.PI/2;break;case"Dw":r="y",s=[-1.5,-.5],i=Math.PI/2;break;case"Lw":r="x",s=[-1.5,-.5],i=Math.PI/2;break;case"Rw":r="x",s=[1.5,.5],i=-Math.PI/2;break;case"Fw":r="z",s=[1.5,.5],i=-Math.PI/2;break;case"Bw":r="z",s=[-1.5,-.5],i=Math.PI/2;break;case"u":r="y",s=[.5],i=-Math.PI/2;break;case"d":r="y",s=[-.5],i=Math.PI/2;break;case"l":r="x",s=[-.5],i=Math.PI/2;break;case"r":r="x",s=[.5],i=-Math.PI/2;break;case"f":r="z",s=[.5],i=-Math.PI/2;break;case"b":r="z",s=[-.5],i=Math.PI/2;break;case"M":r="x",s=[-.5,.5],i=Math.PI/2;break;case"E":r="y",s=[-.5,.5],i=Math.PI/2;break;case"S":r="z",s=[-.5,.5],i=-Math.PI/2;break;case"x":r="x",s=[-1.5,-.5,.5,1.5],i=-Math.PI/2;break;case"y":r="y",s=[-1.5,-.5,.5,1.5],i=-Math.PI/2;break;case"z":r="z",s=[-1.5,-.5,.5,1.5],i=-Math.PI/2;break;default:return null}let a=i;return t.includes("'")&&(a=-i),t.includes("2")&&(a=i*2),{axis:r,layers:s,angle:a}}const sM={R:"Turn the RIGHT LAYER 90&deg; clockwise.","R'":"Turn the RIGHT LAYER 90&deg; counterclockwise.",R2:"Turn the RIGHT LAYER 180&deg;.",L:"Turn the LEFT LAYER 90&deg; clockwise.","L'":"Turn the LEFT LAYER 90&deg; counterclockwise.",L2:"Turn the LEFT LAYER 180&deg;.",U:"Turn the TOP LAYER 90&deg; clockwise.","U'":"Turn the TOP LAYER 90&deg; counterclockwise.",U2:"Turn the TOP LAYER 180&deg;.",D:"Turn the BOTTOM LAYER 90&deg; clockwise.","D'":"Turn the BOTTOM LAYER 90&deg; counterclockwise.",D2:"Turn the BOTTOM LAYER 180&deg;.",F:"Turn the FRONT LAYER 90&deg; clockwise.","F'":"Turn the FRONT LAYER 90&deg; counterclockwise.",F2:"Turn the FRONT LAYER 180&deg;.",B:"Turn the BACK LAYER 90&deg; clockwise.","B'":"Turn the BACK LAYER 90&deg; counterclockwise.",B2:"Turn the BACK LAYER 180&deg;.",M:"Turn the MIDDLE X-SLICE 90&deg; (matches L direction).","M'":"Turn the MIDDLE X-SLICE 90&deg; counterclockwise.",M2:"Turn the MIDDLE X-SLICE 180&deg;.",E:"Turn the EQUATORIAL Y-SLICE 90&deg; (matches D direction).","E'":"Turn the EQUATORIAL Y-SLICE 90&deg; counterclockwise.",E2:"Turn the EQUATORIAL Y-SLICE 180&deg;.",S:"Turn the STANDING Z-SLICE 90&deg; (matches F direction).","S'":"Turn the STANDING Z-SLICE 90&deg; counterclockwise.",S2:"Turn the STANDING Z-SLICE 180&deg;.",r:"Turn the RIGHT HALF 90&deg; clockwise.","r'":"Turn the RIGHT HALF 90&deg; counterclockwise.",r2:"Turn the RIGHT HALF 180&deg;.",l:"Turn the LEFT HALF 90&deg; clockwise.","l'":"Turn the LEFT HALF 90&deg; counterclockwise.",l2:"Turn the LEFT HALF 180&deg;.",u:"Turn the TOP HALF 90&deg; clockwise.","u'":"Turn the TOP HALF 90&deg; counterclockwise.",u2:"Turn the TOP HALF 180&deg;.",d:"Turn the BOTTOM HALF 90&deg; clockwise.","d'":"Turn the BOTTOM HALF 90&deg; counterclockwise.",d2:"Turn the BOTTOM HALF 180&deg;.",f:"Turn the FRONT HALF 90&deg; clockwise.","f'":"Turn the FRONT HALF 90&deg; counterclockwise.",f2:"Turn the FRONT HALF 180&deg;.",b:"Turn the BACK HALF 90&deg; clockwise.","b'":"Turn the BACK HALF 90&deg; counterclockwise.",b2:"Turn the BACK HALF 180&deg;.",Rw:"Turn the RIGHT TWO LAYERS 90&deg; clockwise.","Rw'":"Turn the RIGHT TWO LAYERS 90&deg; counterclockwise.",Rw2:"Turn the RIGHT TWO LAYERS 180&deg;.",Lw:"Turn the LEFT TWO LAYERS 90&deg; clockwise.","Lw'":"Turn the LEFT TWO LAYERS 90&deg; counterclockwise.",Lw2:"Turn the LEFT TWO LAYERS 180&deg;.",Uw:"Turn the TOP TWO LAYERS 90&deg; clockwise.","Uw'":"Turn the TOP TWO LAYERS 90&deg; counterclockwise.",Uw2:"Turn the TOP TWO LAYERS 180&deg;.",Dw:"Turn the BOTTOM TWO LAYERS 90&deg; clockwise.","Dw'":"Turn the BOTTOM TWO LAYERS 90&deg; counterclockwise.",Dw2:"Turn the BOTTOM TWO LAYERS 180&deg;.",Fw:"Turn the FRONT TWO LAYERS 90&deg; clockwise.","Fw'":"Turn the FRONT TWO LAYERS 90&deg; counterclockwise.",Fw2:"Turn the FRONT TWO LAYERS 180&deg;.",Bw:"Turn the BACK TWO LAYERS 90&deg; clockwise.","Bw'":"Turn the BACK TWO LAYERS 90&deg; counterclockwise.",Bw2:"Turn the BACK TWO LAYERS 180&deg;.",x:"Rotate the ENTIRE CUBE 90&deg; clockwise on X-axis.","x'":"Rotate the ENTIRE CUBE 90&deg; counterclockwise on X-axis.",x2:"Rotate the ENTIRE CUBE 180&deg; on X-axis.",y:"Rotate the ENTIRE CUBE 90&deg; clockwise on Y-axis.","y'":"Rotate the ENTIRE CUBE 90&deg; counterclockwise on Y-axis.",y2:"Rotate the ENTIRE CUBE 180&deg; on Y-axis.",z:"Rotate the ENTIRE CUBE 90&deg; clockwise on Z-axis.","z'":"Rotate the ENTIRE CUBE 90&deg; counterclockwise on Z-axis.",z2:"Rotate the ENTIRE CUBE 180&deg; on Z-axis."};function pf(n){let e=n;if(["2","3"].includes(n[0])&&n.length>1){let t=n[1],i=n.substring(2);e=t.toLowerCase()+i}return sM[e]||`Execute move: ${n}`}function mf(n){return n.includes("'")?n.replace("'",""):n.includes("2")?n:n+"'"}function aM(n){const e=mf(n);return pf(e)}function Fc(){const n=document.getElementById("humanInstruction-4x4"),e=document.getElementById("solutionText-4x4"),t=document.getElementById("btnSideBack-4x4"),i=document.getElementById("btnSideNext-4x4"),r=document.getElementById("cubeSolvedMsg-4x4");if(Kt===0&&Ns===1){n.innerText="READY TO SOLVE!",e.innerHTML='Hold your puzzle as shown below, hit "next" to start.',t.disabled=!0,i.disabled=!1,i.innerHTML="Next &gt;",r&&r.classList.add("d-none");return}if(Ns===-1){const o=Tn[Kt];n.innerHTML=aM(o.raw);let c=`Undo Step ${Kt+1} / ${Tn.length}: `;c+=`<strong style="color:#eab308">${mf(o.raw)}</strong>`,e.innerHTML=c,t.disabled=Kt<=0,i.disabled=!1,i.innerHTML="Next &gt;",r&&r.classList.add("d-none");return}const s=Tn[Kt-1];n.innerHTML=pf(s.raw);let a=`Step ${Kt} / ${Tn.length}: `;a+=`<strong style="color:#2563eb">${s.raw}</strong>`,e.innerHTML=a,t.disabled=!1,Kt>=Tn.length?(i.disabled=!0,i.innerHTML="Done!",r&&r.classList.remove("d-none")):(i.disabled=!1,i.innerHTML="Next &gt;",r&&r.classList.add("d-none"))}async function oM(){if(yi||Kt>=Tn.length)return;let n=Tn[Kt];Ns=1,Kt++,Fc(),await lf(n.axis,n.layer,n.angle,600)}async function lM(){if(yi||Kt<=0)return;Kt--,Ns=-1;let n=Tn[Kt];Fc(),await lf(n.axis,n.layer,-n.angle,600)}document.getElementById("btnSideNext-4x4").addEventListener("click",oM);document.getElementById("btnSideBack-4x4").addEventListener("click",lM);function gf(n){requestAnimationFrame(gf),so&&(dr(n),rs.update(),Di.render(Ii,no))}gf();const cM={};let ka=[];const Ta=typeof import.meta<"u"&&cM?"/magic_cube/".replace(/\/$/,""):"",Bh=document.getElementById("cubeArtsGrid"),ec=document.getElementById("btnViewPattern"),Ha=document.getElementById("patternViewOverlay"),Xi=document.getElementById("modal-cube-container"),uM=document.getElementById("closePatternModal"),hM=document.getElementById("modalPatternName");let $i="All",Yi="All";async function _f(){try{const e=await(await fetch("/magic_cube/data/cube-arts.json")).json();ka=[];for(const t in e)e[t].forEach(i=>{i.type=t,ka.push(i)});dM(),xf()}catch(n){console.warn("Could not load cube arts json",n)}}function dM(){const n=document.querySelectorAll(".sidebar-item");n.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.filterType,i=e.dataset.filterValue;t==="All"?($i="All",Yi="All",n.forEach(r=>r.classList.remove("active")),e.classList.add("active")):(document.querySelector('.sidebar-item[data-filter-type="All"]').classList.remove("active"),t==="type"?$i===i?($i="All",e.classList.remove("active")):($i=i,document.querySelectorAll('.sidebar-item[data-filter-type="type"]').forEach(r=>r.classList.remove("active")),e.classList.add("active")):t==="difficulty"&&(Yi===i?(Yi="All",e.classList.remove("active")):(Yi=i,document.querySelectorAll('.sidebar-item[data-filter-type="difficulty"]').forEach(r=>r.classList.remove("active")),e.classList.add("active"))),$i==="All"&&Yi==="All"&&document.querySelector('.sidebar-item[data-filter-type="All"]').classList.add("active")),xf()})})}function xf(){Bh.innerHTML="",ka.filter(e=>!($i!=="All"&&e.type!==$i||Yi!=="All"&&e.difficulty!==Yi)).forEach(e=>{const t=document.createElement("div");t.className="cube-art-card",t.innerHTML=`
      <img src="${e.imageUrl}" alt="${e.name}" class="cube-art-img" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMzMzMiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSIyMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjdW50cmFsIj5QYXR0ZXJuPC90ZXh0Pjwvc3ZnPg=='"/>
      <div class="cube-art-body">
        <div class="cube-art-title">${e.id} - ${e.name}</div>
        <div class="cube-art-meta">
          <span class="meta-badge">${e.type}</span>
          <span class="meta-badge">${e.difficulty}</span>
          <span class="meta-badge">${e.moves.trim().split(" ").length} Moves</span>
        </div>
      </div>
    `,t.addEventListener("click",()=>{if(e.type!=="3x3x3"&&e.type!=="2x2x2"&&e.type!=="4x4x4"){alert("3D guide is only available for 2x2, 3x3 and 4x4 puzzles at the moment!");return}SM(e)}),Bh.appendChild(t)})}const Os=document.getElementById("app-cube-arts"),ss=new bi,Bs=new Tt(45,window.innerWidth/window.innerHeight,.1,100);Bs.position.set(5,5,8);const _r=new wi({antialias:!0,alpha:!0});_r.setSize(window.innerWidth,window.innerHeight);_r.setPixelRatio(Math.min(window.devicePixelRatio,2));_r.shadowMap.enabled=!1;Os.appendChild(_r.domElement);const as=new Ai(Bs,_r.domElement);as.enableDamping=!0;as.dampingFactor=.05;as.enablePan=!1;as.enableRotate=!1;as.enableZoom=!1;const fM=new Ti(16777215,2.5);ss.add(fM);const vf=new ft(16777215,1.5);vf.position.set(10,20,10);ss.add(vf);const Mf=new ft(16777215,1);Mf.position.set(-10,10,-10);ss.add(Mf);const Sf=new ft(16777215,1);Sf.position.set(10,-10,-10);ss.add(Sf);let Fr,Gn,Vn,Nr,Ga,Yo=[],Va=!1;function pM(){Fr=new bi,Gn=new Tt(45,Xi.clientWidth/Xi.clientHeight,.1,100),Gn.position.set(3.3,3.3,4.9),Vn=new wi({antialias:!0,alpha:!0}),Vn.setSize(Xi.clientWidth,Xi.clientHeight),Vn.setPixelRatio(Math.min(window.devicePixelRatio,2)),Xi.appendChild(Vn.domElement),Nr=new Ai(Gn,Vn.domElement),Nr.enableDamping=!0,Nr.dampingFactor=.05,Nr.enablePan=!1,Nr.enableZoom=!1;const n=new Ti(16777215,2.5);Fr.add(n);const e=new ft(16777215,1.5);e.position.set(10,20,10),Fr.add(e);const t=new ft(16777215,1);t.position.set(-10,10,-10),Fr.add(t),Ga=new st,Fr.add(Ga)}const Ts=[],Wn=new st;ss.add(Wn);const mM=new it(.99,.99,.99,5,.1),gM=new Qt({color:2236962,roughness:.7,metalness:.1}),pa=new it(.06,.83,.83,6,.12),ma=new it(.83,.06,.83,6,.12),ga=new it(.83,.83,.06,6,.12),ao=document.createElement("canvas");ao.width=256;ao.height=256;const Wa=ao.getContext("2d");Wa.fillStyle="#ffffff";Wa.fillRect(0,0,256,256);for(let n=0;n<2e4;n++)Wa.fillStyle=Math.random()>.5?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.08)",Wa.fillRect(Math.random()*256,Math.random()*256,2,2);const Nc=new hr(ao);Nc.wrapS=Ut;Nc.wrapT=Ut;const _M=n=>new Qt({color:n,roughness:.9,metalness:.1,bumpMap:Nc,bumpScale:.003});function Ef(n="3x3x3"){Ts.forEach(t=>Wn.remove(t)),Ts.length=0;let e=[];n==="2x2x2"?(e=[-.5,.5],Wn.scale.set(1.5,1.5,1.5)):n==="4x4x4"?(e=[-1.5,-.5,.5,1.5],Wn.scale.set(.8,.8,.8)):(e=[-1,0,1],Wn.scale.set(1,1,1));for(let t of e)for(let i of e)for(let r of e){const s=new st;s.position.set(t,i,r);const a=new dt(mM,gM);s.add(a);const o=(c,l,u)=>{const f=_M(l),h=new dt(c,f);h.position.set(...u),h.userData={isSticker:!0,originalColor:l},s.add(h)};n==="4x4x4"?(t===1.5&&o(pa,ke.right,[.49,0,0]),t===-1.5&&o(pa,ke.left,[-.49,0,0]),i===1.5&&o(ma,ke.top,[0,.49,0]),i===-1.5&&o(ma,ke.bottom,[0,-.49,0]),r===1.5&&o(ga,ke.front,[0,0,.49]),r===-1.5&&o(ga,ke.back,[0,0,-.49])):(t>0&&o(pa,ke.right,[.49,0,0]),t<0&&o(pa,ke.left,[-.49,0,0]),i>0&&o(ma,ke.top,[0,.49,0]),i<0&&o(ma,ke.bottom,[0,-.49,0]),r>0&&o(ga,ke.front,[0,0,.49]),r<0&&o(ga,ke.back,[0,0,-.49])),Wn.add(s),Ts.push(s)}}Ef();let zs=!1;function yf(n,e,t,i=300){return new Promise(r=>{if(zs&&i>0)return;zs=!0;const s=wt&&wt.type==="2x2x2",a=wt&&wt.type==="4x4x4",o=Ts.filter(l=>{const u=s||a?Math.round(l.position[n]*2)/2:Math.round(l.position[n]);return Array.isArray(e)?e.some(f=>Math.abs(u-f)<.1):Math.abs(u-e)<.1}),c=new st;Wn.add(c),o.forEach(l=>c.attach(l)),i>0?new Gt({val:0}).to({val:t},i).easing(Et.Quadratic.InOut).onUpdate(l=>c.rotation[n]=l.val).onComplete(()=>{zh(c,o,r)}).start():(c.rotation[n]=t,zh(c,o,r))})}function zh(n,e,t){const i=wt&&wt.type==="2x2x2",r=wt&&wt.type==="4x4x4";n.updateMatrixWorld(),e.forEach(s=>{Wn.attach(s),i||r?(s.position.x=Math.round(s.position.x*2)/2,s.position.y=Math.round(s.position.y*2)/2,s.position.z=Math.round(s.position.z*2)/2):(s.position.x=Math.round(s.position.x),s.position.y=Math.round(s.position.y),s.position.z=Math.round(s.position.z));const a=new Ft().setFromQuaternion(s.quaternion);a.x=Math.round(a.x/(Math.PI/2))*(Math.PI/2),a.y=Math.round(a.y/(Math.PI/2))*(Math.PI/2),a.z=Math.round(a.z/(Math.PI/2))*(Math.PI/2),s.quaternion.setFromEuler(a)}),Wn.remove(n),zs=!1,t&&t()}const xM={L:["x",-1,Math.PI/2],M:["x",0,Math.PI/2],R:["x",1,-Math.PI/2],U:["y",1,-Math.PI/2],E:["y",0,Math.PI/2],D:["y",-1,Math.PI/2],F:["z",1,-Math.PI/2],S:["z",0,-Math.PI/2],B:["z",-1,Math.PI/2],x:["x",[-1,0,1],-Math.PI/2],y:["y",[-1,0,1],-Math.PI/2],z:["z",[-1,0,1],-Math.PI/2]},vM={L:["x",-.5,Math.PI/2],R:["x",.5,-Math.PI/2],U:["y",.5,-Math.PI/2],D:["y",-.5,Math.PI/2],F:["z",.5,-Math.PI/2],B:["z",-.5,Math.PI/2],x:["x",[-.5,.5],-Math.PI/2],y:["y",[-.5,.5],-Math.PI/2],z:["z",[-.5,.5],-Math.PI/2]},MM={L:["x",[-1.5],Math.PI/2],R:["x",[1.5],-Math.PI/2],U:["y",[1.5],-Math.PI/2],D:["y",[-1.5],Math.PI/2],F:["z",[1.5],-Math.PI/2],B:["z",[-1.5],Math.PI/2],Lw:["x",[-1.5,-.5],Math.PI/2],Rw:["x",[1.5,.5],-Math.PI/2],Uw:["y",[1.5,.5],-Math.PI/2],Dw:["y",[-1.5,-.5],Math.PI/2],Fw:["z",[1.5,.5],-Math.PI/2],Bw:["z",[-1.5,-.5],Math.PI/2],l:["x",[-.5],Math.PI/2],r:["x",[.5],-Math.PI/2],u:["y",[.5],-Math.PI/2],d:["y",[-.5],Math.PI/2],f:["z",[.5],-Math.PI/2],b:["z",[-.5],Math.PI/2],M:["x",[-.5,.5],Math.PI/2],E:["y",[-.5,.5],Math.PI/2],S:["z",[-.5,.5],-Math.PI/2],x:["x",[-1.5,-.5,.5,1.5],-Math.PI/2],y:["y",[-1.5,-.5,.5,1.5],-Math.PI/2],z:["z",[-1.5,-.5,.5,1.5],-Math.PI/2]};let tc=!1,wt=null,$t=0,fn=[],Vr=1;window.addEventListener("route-changed",n=>{const e=n.detail;e==="/cube-arts"||e.startsWith("/cube-arts/play")?(tc=!0,e==="/cube-arts"&&(wt=null,Os.style.display="none",ka.length===0&&_f())):(tc=!1,Os.style.display="none")});function SM(n){wt=n,Ef(n.type);const e=n.type==="2x2x2"?vM:n.type==="4x4x4"?MM:xM,t=n.moves.trim().split(/\s+/).filter(i=>i);fn=[];for(let i of t){let r=i.replace(/[2']+/g,""),s=i.replace(/^[a-zA-Z]+/g,""),a=e[r];if(!a){console.warn("Unknown move notation:",r,"in",i);continue}let o=a[2];s.includes("'")&&(o=-o),s.includes("2")&&(o=o*2),fn.push({raw:i,axis:a[0],layer:a[1],angle:o})}$t=0,Vr=1,window.history.pushState({},"",Ta+"/cube-arts/play/"+encodeURIComponent(n.id)),window.dispatchEvent(new Event("popstate")),Os.style.display="block",Oc()}const bf={U:"TOP",D:"BOTTOM",F:"FRONT",B:"BACK",L:"LEFT",R:"RIGHT",M:"MIDDLE",E:"EQUATOR",S:"STANDING",l:"LEFT INNER",r:"RIGHT INNER",u:"TOP INNER",d:"BOTTOM INNER",f:"FRONT INNER",b:"BACK INNER",Lw:"LEFT WIDE",Rw:"RIGHT WIDE",Uw:"TOP WIDE",Dw:"BOTTOM WIDE",Fw:"FRONT WIDE",Bw:"BACK WIDE",x:"ENTIRE CUBE (X-axis)",y:"ENTIRE CUBE (Y-axis)",z:"ENTIRE CUBE (Z-axis)"};function EM(n){const e=n.replace(/[2']+/g,""),t=n.replace(/^[a-zA-Z]+/g,""),i=bf[e]||e;return t.includes("'")?`Turn the ${i} layer 90° counterclockwise.`:t.includes("2")?`Turn the ${i} layer 180°.`:`Turn the ${i} layer 90° clockwise.`}function yM(n){const e=n.replace(/[2']+/g,""),t=n.replace(/^[a-zA-Z]+/g,""),i=bf[e]||e;return t.includes("'")?`Turn the ${i} layer 90° clockwise.`:t.includes("2")?`Turn the ${i} layer 180°.`:`Turn the ${i} layer 90° counterclockwise.`}function bM(n){const e=n.replace(/[2']+/g,""),t=n.replace(/^[a-zA-Z]+/g,"");return t.includes("'")?e:t.includes("2")?e+"2'":e+"'"}function Oc(){const n=document.getElementById("artInstruction"),e=document.getElementById("artSolutionText"),t=document.getElementById("btnArtSideBack"),i=document.getElementById("btnArtSideNext"),r=document.getElementById("artBadge");if(wt&&(r.innerText=`${wt.id} - ${wt.name}`),$t>=fn.length&&Vr===1?ec.classList.remove("d-none"):ec.classList.add("d-none"),$t===0&&Vr===1){n.innerText="READY TO MAKE",e.innerHTML='Hold your SOLVED Cube as shown below, press "Next" to start.',t.disabled=!0,i.disabled=!1,i.innerHTML="Next &gt;";return}if(Vr===-1){const o=fn[$t];n.innerText=yM(o.raw);let c=`Undo Step ${$t+1} / ${fn.length}: `;c+=`<strong style="color:#eab308">${bM(o.raw)}</strong>`,e.innerHTML=c,t.disabled=$t<=0,i.disabled=!1,i.innerHTML="Next &gt;";return}const s=fn[$t-1];n.innerText=EM(s.raw);let a=`Step ${$t} / ${fn.length}: `;a+=`<strong style="color:#2563eb">${s.raw}</strong>`,e.innerHTML=a,t.disabled=!1,$t>=fn.length?(i.disabled=!0,i.innerHTML="Done"):(i.disabled=!1,i.innerHTML="Next &gt;")}function TM(){Vn||pM(),Va=!0,Ha.classList.remove("d-none"),hM.innerText=wt.id+" - "+wt.name,Yo.forEach(t=>Ga.remove(t)),Yo=[],Ts.forEach(t=>{const i=t.clone();Ga.add(i),Yo.push(i)}),wt&&wt.type==="2x2x2"?Gn.position.set(2.5,2.5,3.75):wt&&wt.type==="4x4x4"?Gn.position.set(4,4,6):Gn.position.set(3.3,3.3,4.9);const n=Xi.clientWidth,e=Xi.clientHeight;Gn.aspect=n/e,Gn.updateProjectionMatrix(),Vn.setSize(n,e)}function Tf(){Va=!1,Ha.classList.add("d-none")}async function wM(){if(zs||$t>=fn.length)return;let n=fn[$t];Vr=1,$t++,Oc(),await yf(n.axis,n.layer,n.angle,600)}async function AM(){if(zs||$t<=0)return;$t--,Vr=-1;let n=fn[$t];Oc(),await yf(n.axis,n.layer,-n.angle,600)}document.getElementById("btnArtSideNext").addEventListener("click",wM);document.getElementById("btnArtSideBack").addEventListener("click",AM);ec.addEventListener("click",TM);uM.addEventListener("click",Tf);Ha.addEventListener("click",n=>{n.target===Ha&&Tf()});function wf(n){requestAnimationFrame(wf),tc&&Os.style.display!=="none"&&(dr(n),Va||(as.update(),_r.render(ss,Bs))),Va&&Vn&&(Nr.update(),Vn.render(Fr,Gn))}wf();window.addEventListener("resize",()=>{Bs.aspect=window.innerWidth/window.innerHeight,Bs.updateProjectionMatrix(),_r.setSize(window.innerWidth,window.innerHeight)});(function(){const n=decodeURIComponent(window.location.pathname).replace(/\/$/,"");let e=n;Ta&&n.startsWith(Ta)&&(e=n.slice(Ta.length)||"/"),e==="/cube-arts"&&_f()})();const RM={},wa=typeof import.meta<"u"&&RM?"/magic_cube/".replace(/\/$/,""):"";function CM(){const n=decodeURIComponent(window.location.pathname).replace(/\/$/,"");return wa&&n.startsWith(wa)?n.slice(wa.length)||"/":n||"/"}const kh=document.getElementById("app"),Hh=document.getElementById("home-view"),qo=document.getElementById("cube-3x3-view"),jo=document.getElementById("cube-2x2-view"),Zo=document.getElementById("cube-4x4-view"),Gh=document.getElementById("coming-soon-view"),PM=document.querySelectorAll(".navbar [data-route]");function LM(n,e=!0){e&&window.history.pushState({},"",wa+n),Bc()}PM.forEach(n=>{n.addEventListener("click",e=>{e.preventDefault(),LM(e.currentTarget.getAttribute("data-route"))})});window.addEventListener("popstate",()=>{Bc()});function IM(n){const e=n.split("/").filter(Boolean);return e.length===0?"":e[e.length-1].replace(/-/g," ").toUpperCase()}function Bc(){var o;const n=CM();document.querySelectorAll(".navbar .nav-btn, .navbar [data-route]").forEach(c=>c.classList.remove("active"));const e=document.querySelector(`.navbar [data-route="${n==="/"?"/":n}"]`);if(e&&e.classList.contains("nav-btn"))e.classList.add("active");else if(e){e.classList.add("active");const c=(o=e.closest(".dropdown"))==null?void 0:o.querySelector(".nav-btn");c&&c.classList.add("active")}[Hh,qo,jo,Zo,Gh].forEach(c=>{c&&c.classList.add("d-none")}),["app","app-2x2-main","app-3x3","app-2x2","app-4x4","app-4x4-main","app-cube-arts"].forEach(c=>{const l=document.getElementById(c);l&&(l.style.display="none")});const t=document.getElementById("solve-3x3-view");t&&t.classList.add("d-none");const i=document.getElementById("solve-2x2-view");i&&i.classList.add("d-none");const r=document.getElementById("solve-4x4-view");r&&r.classList.add("d-none");const s=document.getElementById("cube-arts-view");s&&s.classList.add("d-none");const a=document.getElementById("cube-arts-player-view");if(a&&a.classList.add("d-none"),n===""||n==="/")Hh.classList.remove("d-none");else if(n==="/cubes/3x3x3-cube")kh&&(kh.style.display="block"),qo&&qo.classList.remove("d-none");else if(n==="/cubes/2x2x2-cube"){const c=document.getElementById("app-2x2-main");c&&(c.style.display="block"),jo&&jo.classList.remove("d-none")}else if(n==="/cubes/4x4x4-cube"){const c=document.getElementById("app-4x4-main");c&&(c.style.display="block"),Zo&&Zo.classList.remove("d-none")}else if(n==="/solver/3x3x3-cube")t&&t.classList.remove("d-none");else if(n==="/solver/2x2x2-cube")i&&i.classList.remove("d-none");else if(n==="/solver/4x4x4-cube")r&&r.classList.remove("d-none");else if(n==="/cube-arts")s&&s.classList.remove("d-none");else if(n.startsWith("/cube-arts/play"))a&&a.classList.remove("d-none");else{const c=document.getElementById("coming-soon-title");c&&(c.innerText=IM(n)||"FEATURE"),Gh.classList.remove("d-none")}window.dispatchEvent(new CustomEvent("route-changed",{detail:n}))}window.addEventListener("load",()=>{Bc()});
