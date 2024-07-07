for(var e,t={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},n=new Uint8Array(16),r=[],i=0;i<256;++i)r.push((i+256).toString(16).slice(1));var s=function(i,s,o){if(t.randomUUID&&!s&&!i)return t.randomUUID();var a=(i=i||{}).random||(i.rng||function(){if(!e&&!(e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(n)})();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,s){o=o||0;for(var u=0;u<16;++u)s[o+u]=a[u];return s}return function(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}(a)},o={},a=Object.prototype.hasOwnProperty,u="~";function h(){}function c(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function l(e,t,n,r,i){if("function"!=typeof n)throw TypeError("The listener must be a function");var s=new c(n,r||e,i),o=u?u+t:t;return e._events[o]?e._events[o].fn?e._events[o]=[e._events[o],s]:e._events[o].push(s):(e._events[o]=s,e._eventsCount++),e}function d(e,t){0==--e._eventsCount?e._events=new h:delete e._events[t]}function p(){this._events=new h,this._eventsCount=0}Object.create&&(h.prototype=Object.create(null),new h().__proto__||(u=!1)),p.prototype.eventNames=function(){var e,t,n=[];if(0===this._eventsCount)return n;for(t in e=this._events)a.call(e,t)&&n.push(u?t.slice(1):t);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},p.prototype.listeners=function(e){var t=u?u+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var r=0,i=n.length,s=Array(i);r<i;r++)s[r]=n[r].fn;return s},p.prototype.listenerCount=function(e){var t=u?u+e:e,n=this._events[t];return n?n.fn?1:n.length:0},p.prototype.emit=function(e,t,n,r,i,s){var o=u?u+e:e;if(!this._events[o])return!1;var a,h,c=this._events[o],l=arguments.length;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,r),!0;case 5:return c.fn.call(c.context,t,n,r,i),!0;case 6:return c.fn.call(c.context,t,n,r,i,s),!0}for(h=1,a=Array(l-1);h<l;h++)a[h-1]=arguments[h];c.fn.apply(c.context,a)}else{var d,p=c.length;for(h=0;h<p;h++)switch(c[h].once&&this.removeListener(e,c[h].fn,void 0,!0),l){case 1:c[h].fn.call(c[h].context);break;case 2:c[h].fn.call(c[h].context,t);break;case 3:c[h].fn.call(c[h].context,t,n);break;case 4:c[h].fn.call(c[h].context,t,n,r);break;default:if(!a)for(d=1,a=Array(l-1);d<l;d++)a[d-1]=arguments[d];c[h].fn.apply(c[h].context,a)}}return!0},p.prototype.on=function(e,t,n){return l(this,e,t,n,!1)},p.prototype.once=function(e,t,n){return l(this,e,t,n,!0)},p.prototype.removeListener=function(e,t,n,r){var i=u?u+e:e;if(!this._events[i])return this;if(!t)return d(this,i),this;var s=this._events[i];if(s.fn)s.fn!==t||r&&!s.once||n&&s.context!==n||d(this,i);else{for(var o=0,a=[],h=s.length;o<h;o++)(s[o].fn!==t||r&&!s[o].once||n&&s[o].context!==n)&&a.push(s[o]);a.length?this._events[i]=1===a.length?a[0]:a:d(this,i)}return this},p.prototype.removeAllListeners=function(e){var t;return e?(t=u?u+e:e,this._events[t]&&d(this,t)):(this._events=new h,this._eventsCount=0),this},p.prototype.off=p.prototype.removeListener,p.prototype.addListener=p.prototype.on,p.prefixed=u,p.EventEmitter=p,o=p;const f={RTCPeerConnection:"undefined"==typeof RTCPeerConnection?null:RTCPeerConnection,RTCSessionDescription:"undefined"==typeof RTCSessionDescription?null:RTCSessionDescription,RTCIceCandidate:"undefined"==typeof RTCIceCandidate?null:RTCIceCandidate};class v extends o.EventEmitter{constructor(e){super(),this.initiator=!1,this.maxChannelMessageSize=16384,this.trickle=!0,this.sdpTransform=w,this.config={iceServers:[]},this.pendingCandidates=[],this.webrtc=f,this.runningNegotiation=!1,this.id=e.id||s(),this.channelName=e.channelName||s(),e.channelConfig&&(this.channelConfig=e.channelConfig),!1===e.trickle&&(this.trickle=!1),e.sdpTransform&&(this.sdpTransform=e.sdpTransform),e.config&&(this.config=e.config),e.offerConfig&&(this.offerConfig=e.offerConfig),e.answerConfig&&(this.answerConfig=e.answerConfig),e.maxChannelMessageSize&&e.maxChannelMessageSize>0&&(this.maxChannelMessageSize=e.maxChannelMessageSize),e.webrtc&&(this.webrtc=e.webrtc)}getId(){return this.id}getConnection(){return this.connection}getChannel(){return this.channel}isReady(){return this.channel&&"open"===this.channel.readyState}isClosed(){return!this.connection||"connected"!==this.connection.connectionState}ready(){return this.isReady()?Promise.resolve():this.waitOnce("connect")}isInitiator(){return this.initiator}init(){return this.initiator=!0,this.createPeer(),this.needsNegotiation()}close(){return this.internalClose(!0)}send(e){if(!this.channel)throw Error("Channel not initialized");return this.channel.send(e),this}write(e){if(!this.channel)throw Error("Channel not initialized");return y(this.channel,e,this.maxChannelMessageSize)}writableStream(){var e,t;if(!this.channel)throw Error("Channel not initialized");return e=this.channel,t=this.maxChannelMessageSize,new WritableStream({write(n){y(e,n,t)}})}readableStream(){if(!this.channel)throw Error("Channel not initialized");return function(e){let t=!1,n=!1,r=[],i=[];function s(e){if(i.length){let[t,n]=i.shift();t(e.data)}else r.push(e.data)}e.addEventListener("message",s);let o=()=>{if(!t){for(let[n,r]of(e.removeEventListener("message",s),e.removeEventListener("close",o),t=!0,i))r(Error("Stream closed"));i.length=0,r.length=0}};return e.addEventListener("close",o),new ReadableStream({async pull(e){if(t){n||(n=!0,e.close());return}r.length?e.enqueue(r.shift()):e.enqueue(await new Promise((e,t)=>i.push([e,t])))},cancel:o})}(this.channel)}async signal(e){var t,n;switch(this.connection||await this.createPeer(),console.debug(`${this.id}: received signal message=${e.type}`),e.type){case"renegotiate":return this.needsNegotiation();case"transceiverRequest":{if(!this.initiator)throw Error("Invalid signal state");let t=e.transceiverRequest;if(!t)throw Error("Invalid signal message");return await this.addTransceiverFromKind(t.kind,t.init),this}case"candidate":{if(!this.connection)throw Error("Connection not initialized");let t=e.candidate;if(!t)throw Error("Invalid signal message");let n=new this.webrtc.RTCIceCandidate(t);return null==this.connection.remoteDescription?this.pendingCandidates.push(n):await this.connection.addIceCandidate(n),this}case"answer":case"offer":case"pranswer":case"rollback":{if(!this.connection)throw Error("Connection not initialized");let r=e.sdp;if(!r)throw Error("Invalid signal message");let i=new this.webrtc.RTCSessionDescription({type:e.type,sdp:r});for(let e of(console.debug(`${this.id}: setting remote sdp`),await this.connection.setRemoteDescription(i),this.pendingCandidates))await this.connection.addIceCandidate(e);return this.pendingCandidates.length=0,(null===(n=null===(t=this.connection)||void 0===t?void 0:t.remoteDescription)||void 0===n?void 0:n.type)==="offer"&&await this.createAnswer(),this}default:throw console.debug(`${this.id}: invalid signal type: ${e}`),Error("Invalid signal message type")}}waitOnce(e){return new Promise(t=>{this.once(e,(...e)=>{switch(e.length){case 0:t(void 0);break;case 1:t(e[0]);break;default:t(e)}})})}addTransceiverFromKind(e,t){if(!this.connection)throw Error("Connection not initialized");if(this.initiator){let n=this.connection.addTransceiver(e,t);return this.emit("transceiver",n),this.needsNegotiation(),n}return this.internalSignal({type:"transceiverRequest",transceiverRequest:{kind:e,init:t}}),null}addTrack(e){if(!this.connection)throw Error("Connection not initialized");let t=this.connection.addTrack(e);return this.needsNegotiation(),t}removeTrack(e){if(!this.connection)throw Error("Connection not initialized");return this.connection.removeTrack(e),this.needsNegotiation(),this}internalSignal(e){return this.emit("signal",e),this}async needsNegotiation(){if(!this.connection)throw Error("Connection not initialized");if(this.initiator&&!this.runningNegotiation)try{this.runningNegotiation=!0,await new Promise(e=>e()),await this.negotiate()}finally{this.runningNegotiation=!1}return this}async negotiate(){if(!this.connection)throw Error("Connection not initialized");return this.initiator?(await new Promise(e=>setTimeout(e,0)),await this.createOffer()):this.internalSignal({type:"renegotiate",renegotiate:!0}),this}async createOffer(){if(!this.connection)throw Error("Connection not initialized");let e=await this.connection.createOffer(this.offerConfig);return this.trickle||(e.sdp=x(e.sdp)),e.sdp=this.sdpTransform(e.sdp),await this.connection.setLocalDescription(e),this.internalSignal({type:e.type,sdp:e.sdp}),this}async createAnswer(){if(!this.connection)throw Error("Connection not initialized");let e=await this.connection.createAnswer(this.answerConfig);return this.trickle||(e.sdp=x(e.sdp)),e.sdp=this.sdpTransform(e.sdp),await this.connection.setLocalDescription(e),this.internalSignal({type:e.type,sdp:e.sdp}),this}createPeer(){if(this.internalClose(!1),this.connection=new this.webrtc.RTCPeerConnection(this.config),this.connection.addEventListener("connectionstatechange",this.onConnectionStateChange.bind(this)),this.connection.addEventListener("icecandidate",this.onICECandidate.bind(this)),this.connection.addEventListener("track",this.onTrackRemote.bind(this)),this.initiator){let e=this.connection.createDataChannel(this.channelName,this.channelConfig);e.addEventListener("open",this.onDataChannelOpen.bind(this)),e.addEventListener("message",this.onDataChannelMessage.bind(this)),e.addEventListener("error",this.onDataChannelError.bind(this)),this.channel=e}else this.connection.addEventListener("datachannel",this.onDataChannel.bind(this));return this}internalClose(e=!0){return this.channel&&(this.channel.close(),this.channel=void 0),this.connection&&(this.connection.close(),this.connection=void 0),e&&this.emit("close"),this}onConnectionStateChange(){if(this.connection)switch(this.connection.connectionState){case"connected":break;case"failed":case"disconnected":case"closed":this.internalClose(!0)}}onICECandidate(e){e.candidate&&this.internalSignal({type:"candidate",candidate:e.candidate})}onTrackRemote(e){this.emit("track",e)}onDataChannel(e){let t=e.channel;this.channel=t,this.channel.onopen=this.onDataChannelOpen.bind(this),this.channel.onmessage=this.onDataChannelMessage.bind(this),this.channel.onerror=this.onDataChannelError.bind(this)}onDataChannelOpen(){console.debug(`${this.id}: data channel open`),this.emit("connect")}onDataChannelMessage(e){this.emit("data",e.data)}onDataChannelError(e){this.emit("error",Error("DataChannel error",{cause:e}))}}function x(e){return null==e?void 0:e.replace(/a=ice-options:trickle\s\n/g,"")}function w(e){return e}function y(e,t,n){if("string"==typeof t){if(t.length<n)e.send(t);else{let r=0;for(;r<t.length;){let i=Math.min(n,t.length-r);e.send(t.substring(r,r+i)),r+=i}}}else if(t instanceof Blob){if(t.size<n)e.send(t);else{let r=0;for(;r<t.size;){let i=Math.min(n,t.size-r);e.send(t.slice(r,r+i)),r+=i}}}else{let r;if((r=t instanceof ArrayBuffer?t:t.buffer).byteLength<n)e.send(r);else{let t=0;for(;t<r.byteLength;){let i=Math.min(n,r.byteLength-t);e.send(r.slice(t,t+i)),t+=i}}}}function m(e,t){return e[0]=(4278190080&t)>>24,e[1]=(16711680&t)>>16,e[2]=(65280&t)>>8,e[3]=255&t,e}function g(e){return e[3]|e[2]<<8|e[1]<<16|e[0]<<24}function _(e,t,n,r){return new(n||(n=Promise))(function(i,s){function o(e){try{u(r.next(e))}catch(e){s(e)}}function a(e){try{u(r.throw(e))}catch(e){s(e)}}function u(e){var t;e.done?i(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,a)}u((r=r.apply(e,t||[])).next())})}new Uint8Array(1),new Uint8Array(4),new Float32Array(1),"function"==typeof SuppressedError&&SuppressedError;const b={},I={};class C{constructor(e,t){if(e!==b)throw TypeError("Options can only be created with the some or none functions");this._value=t}static some(e){return k(e)}static none(){return S()}static from(e){return null!=e?k(e):S()}static fromJSON(e){return C.from(e)}isNone(){return this._value===I}isSome(){return!this.isNone()}expect(e){if(this.isSome())return this._value;throw Error("function"==typeof e?e():e)}unwrap(){return this.expect("Tried to unwrap value of none Option")}unwrapOr(e){return this.isSome()?this._value:e}unwrapOrElse(e){return this.isSome()?this._value:e()}map(e){return this.isSome()?k(e(this._value)):S()}mapOr(e,t){return this.isSome()?k(e(this._value)):k(t)}mapOrElse(e,t){return this.isSome()?k(e(this._value)):k(t())}flatMap(e){return this.isSome()?e(this._value):S()}flatMapOr(e,t){return this.isSome()?e(this._value):t}flatMapOrElse(e,t){return this.isSome()?e(this._value):t()}and(e){return this.isSome()?e:S()}andThen(e){return this.isSome()?e(this._value):S()}or(e){return this.isNone()?e:this}orElse(e){return this.isNone()?e():this}xor(e){let t=this.isSome(),n=e.isSome();return t&&!n?this:!t&&n?e:S()}filter(e){return this.isSome()&&e(this._value)?this:S()}getOrInsert(e){return this.isNone()&&(this._value=e),this}getOrInsertWith(e){return this.isNone()&&(this._value=e()),this}clear(){return this._value=I,this}take(){if(!this.isSome())return S();{let e=this._value;return this._value=I,k(e)}}from(e){return null!=e?this._value=e:this.clear(),this}replace(e){return this._value=e,this}ifSome(e,t){return this.isSome()?e(this._value):t&&t(),this}ifNone(e,t){return this.isNone()?e():t&&t(this._value),this}toJSON(){return this.unwrapOr(null)}toJS(){return this.unwrapOr(null)}[Symbol.iterator](){return new E(this._value)}}class E{constructor(e){this.value=e}next(){if(this.value===I)return{done:!0,value:void 0};{let e=this.value;return this.value=I,{done:!1,value:e}}}}const k=e=>new C(b,e),S=()=>new C(b,I);class R{constructor(e){this._index=0,this._iter=e}[Symbol.asyncIterator](){return this}iter(){return this}next(){return this._iter.next()}nextWithIndex(){return _(this,void 0,void 0,function*(){let e=yield this._iter.next();return e.done?e:{value:[e.value,this._index++]}})}enumerate(){throw Error("async/AsyncEnumerate was not imported!")}peekable(){throw Error("async/AsyncPeekable was not imported!")}forEach(e){throw Error("async/AsyncForEach was not imported!")}map(e){throw Error("async/AsyncMap was not imported!")}merge(e){throw Error("async/AsyncMerge was not imported!")}concat(e){return this.merge(e)}filter(e){throw Error("async/AsyncFilter was not imported!")}step(e){throw Error("async/AsyncStep was not imported!")}skip(e){throw Error("async/AsyncSkip was not imported!")}take(e){throw Error("async/AsyncTake was not imported!")}toMap(e,t){throw Error("async/AsyncToMap was not imported!")}flatten(e){throw Error("async/AsyncFlatten was not imported!")}unflatten(e){throw Error("async/AsyncUnflatten was not imported!")}reverse(){throw Error("async/AsyncReverse was not imported!")}count(){return this.reduce(0,e=>e+1)}consume(){return _(this,void 0,void 0,function*(){let e=yield this.next();for(;!e.done;)e=yield this.next();return this})}toArray(){return this.reduce([],(e,t)=>(e.push(t),e))}join(e){return _(this,void 0,void 0,function*(){return(yield this.toArray()).join(e)})}indexOf(e){return _(this,void 0,void 0,function*(){let t=yield this.next(),n=0;for(;!t.done;){if(t.value===e)return n;n++,t=yield this.next()}return -1})}findIndex(e){return _(this,void 0,void 0,function*(){let t=yield this.nextWithIndex();for(;!t.done;){let[n,r]=t.value;if(e(n,r))return r;t=yield this.nextWithIndex()}return -1})}find(e){return _(this,void 0,void 0,function*(){let t=yield this.nextWithIndex();for(;!t.done;){let[n,r]=t.value;if(e(n,r))return k(n);t=yield this.nextWithIndex()}return S()})}findAll(e){return this.filter(e)}nth(e=0){return _(this,void 0,void 0,function*(){let t=yield this.next();for(e<0&&(e=0);!t.done;){if(e--<=0)return k(t.value);t=yield this.next()}return S()})}first(){return this.nth(0)}last(){return _(this,void 0,void 0,function*(){let e=yield this.next();for(;!e.done;){let t=yield this.next();if(t.done)return k(e.value);e=t}return S()})}any(e){return _(this,void 0,void 0,function*(){return(yield this.findIndex(e))!==-1})}some(e){return _(this,void 0,void 0,function*(){return this.any(e)})}none(e){return _(this,void 0,void 0,function*(){return(yield this.findIndex(e))===-1})}all(e){return _(this,void 0,void 0,function*(){let t=yield this.nextWithIndex();for(;!t.done;){let[n,r]=t.value;if(!e(n,r))return!1;t=yield this.nextWithIndex()}return!0})}reduce(e,t){return _(this,void 0,void 0,function*(){let n=yield this.next();for(;!n.done;){let r=n.value;e=t(e,r,this._index-1),n=yield this.next()}return e})}}class T{constructor(e){this._index=0,this._iter=e}[Symbol.iterator](){return this}iter(){return this}next(){return this._iter.next()}nextWithIndex(){let e=this._iter.next();return e.done?e:{value:[e.value,this._index++]}}enumerate(){throw Error("Enumerate was not imported!")}peekable(){throw Error("Peekable was not imported!")}forEach(e){throw Error("ForEach was not imported!")}map(e){throw Error("Map was not imported!")}merge(e){throw Error("Merge was not imported!")}concat(e){return this.merge(e)}filter(e){throw Error("Filter was not imported!")}step(e){throw Error("Step was not imported!")}skip(e){throw Error("Skip was not imported!")}take(e){throw Error("Take was not imported!")}toMap(e,t){throw Error("ToMap was not imported!")}flatten(e){throw Error("Flatten was not imported!")}unflatten(e){throw Error("Unflatten was not imported!")}reverse(){throw Error("Reverse was not imported!")}count(){return this.reduce(0,e=>e+1)}consume(){let e=this.next();for(;!e.done;)e=this.next();return this}toArray(){return this.reduce([],(e,t)=>(e.push(t),e))}join(e){return this.toArray().join(e)}indexOf(e){let t=this.next(),n=0;for(;!t.done;){if(t.value===e)return n;n++,t=this.next()}return -1}findIndex(e){let t=this.nextWithIndex();for(;!t.done;){let[n,r]=t.value;if(e(n,r))return r;t=this.nextWithIndex()}return -1}find(e){let t=this.nextWithIndex();for(;!t.done;){let[n,r]=t.value;if(e(n,r))return k(n);t=this.nextWithIndex()}return S()}findAll(e){return this.filter(e)}nth(e=0){let t=this.next();for(e<0&&(e=0);!t.done;){if(e--<=0)return k(t.value);t=this.next()}return S()}first(){return this.nth(0)}last(){let e=this.next();for(;!e.done;){let t=this.next();if(t.done)return k(e.value);e=t}return S()}any(e){return -1!==this.findIndex(e)}some(e){return this.any(e)}none(e){return -1===this.findIndex(e)}all(e){let t=this.nextWithIndex();for(;!t.done;){let[n,r]=t.value;if(!e(n,r))return!1;t=this.nextWithIndex()}return!0}reduce(e,t){let n=this.next();for(;!n.done;){let r=n.value;e=t(e,r,this._index-1),n=this.next()}return e}}class O extends T{constructor(e){super(e)}next(){let e=super.nextWithIndex();return e.done?e:{value:A(e.value)}}}function A(e){let t=e[0];return e[0]=e[1],e[1]=t,e}T.prototype.enumerate=function(){return new O(this)};class M extends R{constructor(e){super(e)}next(){let e=Object.create(null,{nextWithIndex:{get:()=>super.nextWithIndex}});return _(this,void 0,void 0,function*(){let t=yield e.nextWithIndex.call(this);return t.done?t:{value:A(t.value)}})}}R.prototype.enumerate=function(){return new M(this)};class N extends R{constructor(e,t){super(e),this._fn=t}next(){let e=Object.create(null,{nextWithIndex:{get:()=>super.nextWithIndex}});return _(this,void 0,void 0,function*(){let t=yield e.nextWithIndex.call(this);for(;!t.done;){let[n,r]=t.value;if(this._fn(n,r))return{done:!1,value:n};t=yield e.nextWithIndex.call(this)}return{done:!0,value:void 0}})}}R.prototype.filter=function(e){return new N(this,e)};class W extends R{constructor(e,t){super(e),this._fn=([e,n])=>(t(e,n),e)}next(){let e=Object.create(null,{nextWithIndex:{get:()=>super.nextWithIndex}});return _(this,void 0,void 0,function*(){let t=yield e.nextWithIndex.call(this);return t.done?t:{done:!1,value:this._fn(t.value)}})}}R.prototype.forEach=function(e){return new W(this,e)};class L extends R{constructor(e,t){super(e),this._fn=t}next(){let e=Object.create(null,{nextWithIndex:{get:()=>super.nextWithIndex}});return _(this,void 0,void 0,function*(){let t=yield e.nextWithIndex.call(this);return t.done?t:{done:!1,value:this._fn(t.value[0],t.value[1])}})}}R.prototype.map=function(e){return new L(this,e)};class U extends R{constructor(e,t){super(e),this._other=t}next(){let e=Object.create(null,{next:{get:()=>super.next}});return _(this,void 0,void 0,function*(){let t=yield e.next.call(this);return t.done?this._other.next():t})}}R.prototype.merge=function(e){return new U(this,e)};class j extends R{constructor(){super(...arguments),this.peeked=[]}unpeekAll(){return this.peeked.length=0,this}unpeek(){return this.peeked.length>0?k(this.peeked.shift()):S()}peek(e=0){let t=Object.create(null,{next:{get:()=>super.next}});return _(this,void 0,void 0,function*(){if(e<this.peeked.length)return k(this.peeked[e]);{let n=this.peeked.length-e-1,r=yield t.next.call(this);for(;!r.done&&(this.peeked.push(r.value),!(--n<=0));)r=yield t.next.call(this);return r.done?S():k(r.value)}})}next(){let e=Object.create(null,{next:{get:()=>super.next}});return _(this,void 0,void 0,function*(){let t=this.unpeek();if(t.isSome())return{done:!1,value:t.unwrap()};let n=yield e.next.call(this);return n.done?n:{done:!1,value:n.value}})}}R.prototype.peekable=function(){return new j(this)};class P extends R{constructor(e){super(e),this.index=0,this.reversed=!1,this.values=[]}next(){let e=Object.create(null,{next:{get:()=>super.next}});return _(this,void 0,void 0,function*(){if(!this.reversed){let t=yield e.next.call(this);for(;!t.done;)this.values.push(t),t=yield e.next.call(this);this.reversed=!0,this.index=this.values.length}return 0===this.index?{done:!0,value:void 0}:(this.index-=1,this.values[this.index])})}}R.prototype.reverse=function(){return new P(this)};class D extends R{constructor(e,t){super(e),this._skipped=0,this._skip=(t<=0?0:t)|0}next(){let e=Object.create(null,{next:{get:()=>super.next}});return _(this,void 0,void 0,function*(){let t=yield e.next.call(this);for(;!t.done;){if(!(this._skipped<=this._skip))return t;this._skipped+=1,t=yield e.next.call(this)}return{done:!0,value:void 0}})}}R.prototype.skip=function(e){return new D(this,e)};class z extends R{constructor(e,t){super(e),this._stepped=0,this._step=t<=0?1:0|t}next(){let e=Object.create(null,{next:{get:()=>super.next}});return _(this,void 0,void 0,function*(){let t=yield e.next.call(this);for(;!t.done;)if(!(this._stepped<this._step))return this._stepped=0,t;else this._stepped+=1,t=yield e.next.call(this);return{done:!0,value:void 0}})}}R.prototype.step=function(e){return new z(this,e)};class F extends R{constructor(e,t){super(e),this._taken=0,this._count=(t<=0?0:t)|0}next(){let e=Object.create(null,{next:{get:()=>super.next}});return _(this,void 0,void 0,function*(){return this._taken<this._count?(this._taken+=1,e.next.call(this)):{done:!0,value:void 0}})}}R.prototype.take=function(e){return new F(this,e)};const $=e=>e,q=e=>e;class J extends T{constructor(e,t=$,n=q){super(e),this._map=([e,r])=>[t(e,r),n(e,r)]}toObject(){return this.reduce({},(e,t)=>(e[t[0]]=t[1],e))}next(){let e=super.nextWithIndex();return e.done?e:{done:!1,value:this._map(e.value)}}}T.prototype.toMap=function(e,t){return new J(this,e,t)};class V extends R{constructor(e,t=$,n=q){super(e),this._map=([e,r])=>[t(e,r),n(e,r)]}toObject(){return this.reduce({},(e,t)=>(e[t[0]]=t[1],e))}next(){let e=Object.create(null,{nextWithIndex:{get:()=>super.nextWithIndex}});return _(this,void 0,void 0,function*(){let t=yield e.nextWithIndex.call(this);return t.done?t:{done:!1,value:this._map(t.value)}})}}R.prototype.toMap=function(e,t){return new V(this,e,t)};class H extends R{constructor(e,t){super(e),this._fn=t}next(){return _(this,void 0,void 0,function*(){return this._fn(this._iter)})}}R.prototype.unflatten=function(e){return new H(this,e)};class B extends R{constructor(e,t=1){super(e),this._current=void 0,this._depth=t}next(){return _(this,void 0,void 0,function*(){if(void 0!==this._current){let e=yield this._current.next();if(!e.done)return e;this._current=void 0}return this._nextRecur()})}_nextRecur(){let e=Object.create(null,{next:{get:()=>super.next}});return _(this,void 0,void 0,function*(){let t=yield e.next.call(this);if(t.done||!(this._depth>0))return t;{let e=(function e(t){return null==t?e([]):"function"==typeof t[Symbol.asyncIterator]?new R(t[Symbol.asyncIterator]()):"function"==typeof t[Symbol.iterator]?new R(t[Symbol.iterator]()):"function"==typeof t.next?t instanceof R?t:new R(t):"object"==typeof t?e(Object.entries(t)):e([t])})(t.value).flatten(this._depth-1),n=yield e.next();return n.done?this._nextRecur():(this._current=e,n)}})}}R.prototype.flatten=function(e=1){return new B(this,e)};class G extends T{constructor(e,t){super(e),this._fn=t}next(){let e=super.nextWithIndex();for(;!e.done;){let[t,n]=e.value;if(this._fn(t,n))return{done:!1,value:t};e=super.nextWithIndex()}return{done:!0,value:void 0}}}T.prototype.filter=function(e){return new G(this,e)};class Q extends T{constructor(e,t){super(e),this._fn=([e,n])=>(t(e,n),e)}next(){let e=super.nextWithIndex();return e.done?e:{done:!1,value:this._fn(e.value)}}}T.prototype.forEach=function(e){return new Q(this,e)};class K extends T{constructor(e,t){super(e),this._fn=t}next(){let e=super.nextWithIndex();if(e.done)return e;{let[t,n]=e.value;return{done:!1,value:this._fn(t,n)}}}}T.prototype.map=function(e){return new K(this,e)};class X extends T{constructor(e,t){super(e),this._other=t}next(){let e=super.next();return e.done?this._other.next():e}}T.prototype.merge=function(e){return new X(this,e)};class Y extends T{constructor(){super(...arguments),this.peeked=[]}unpeekAll(){return this.peeked.length=0,this}unpeek(){return this.peeked.length>0?k(this.peeked.shift()):S()}peek(e=0){if(e<this.peeked.length)return k(this.peeked[e]);{let t=this.peeked.length-e-1,n=super.next();for(;!n.done&&(this.peeked.push(n.value),!(--t<=0));)n=super.next();return n.done?S():k(n.value)}}next(){let e=this.unpeek();if(e.isSome())return{done:!1,value:e.unwrap()};let t=super.next();return t.done?t:{done:!1,value:t.value}}}T.prototype.peekable=function(){return new Y(this)};class Z extends T{constructor(e){super(e),this.index=0,this.reversed=!1,this.values=[]}next(){if(!this.reversed){let e=super.next();for(;!e.done;)this.values.push(e),e=super.next();this.reversed=!0,this.index=this.values.length}return 0===this.index?{done:!0,value:void 0}:(this.index-=1,this.values[this.index])}}T.prototype.reverse=function(){return new Z(this)};class ee extends T{constructor(e,t){super(e),this._skipped=0,this._skip=(t<=0?0:t)|0}next(){let e=super.next();for(;!e.done;){if(!(this._skipped<=this._skip))return e;this._skipped+=1,e=super.next()}return{done:!0,value:void 0}}}T.prototype.skip=function(e){return new ee(this,e)};class et extends T{constructor(e,t){super(e),this._stepped=0,this._step=t<=0?1:0|t}next(){let e=super.next();for(;!e.done;)if(!(this._stepped<this._step))return this._stepped=0,e;else this._stepped+=1,e=super.next();return{done:!0,value:void 0}}}T.prototype.step=function(e){return new et(this,e)};class en extends T{constructor(e,t){super(e),this._taken=0,this._count=(t<=0?0:t)|0}next(){return this._taken<this._count?(this._taken+=1,super.next()):{done:!0,value:void 0}}}T.prototype.take=function(e){return new en(this,e)};class er extends T{constructor(e,t){super(e),this._fn=t}next(){return this._fn(this._iter)}}T.prototype.unflatten=function(e){return new er(this,e)};class ei extends T{constructor(e,t=1){super(e),this._current=void 0,this._depth=t}next(){if(void 0!==this._current){let e=this._current.next();if(!e.done)return e;this._current=void 0}return this._nextRecur()}_nextRecur(){let e=super.next();if(e.done||!(this._depth>0))return e;{let t=(function e(t){return null==t?e([]):"function"==typeof t[Symbol.iterator]?new T(t[Symbol.iterator]()):"function"==typeof t.next?t instanceof T?t:new T(t):"object"==typeof t?e(Object.entries(t)):e([t])})(e.value).flatten(this._depth-1),n=t.next();return n.done?this._nextRecur():(this._current=t,n)}}}T.prototype.flatten=function(e=1){return new ei(this,e)};class es extends T{constructor(e){super(e),this.rng=e}iter(){return new T(this)}next(){return{done:!1,value:this.rng.nextFloat()}}}class eo extends T{constructor(e,t=0,n=1){super(e),this.rng=e,this.min=t,this.max=n}iter(){return new T(this)}nextFloat(){return this.rng.nextFloatInRange(this.min,this.max)}next(){return{done:!1,value:this.nextFloat()}}}class ea extends T{constructor(e,t=0,n=2147483647){super(e),this.rng=e,this.min=0|t,this.max=0|n}iter(){return new T(this)}nextInt(){return this.rng.nextIntInRange(this.min,this.max)}next(){return{done:!1,value:this.nextInt()}}}const eu=new Uint8Array(4);class eh{nextFloat(){return this.nextInt()/2147483647}nextFloatInRange(e=0,t=1){return e+this.nextFloat()*(t-e)}nextIntInRange(e=0,t=2147483647){return Math.round(this.nextFloatInRange(e,t))}shuffle(e){let t=e.length;for(let n=0;n<t;n++){let r=n+this.nextIntInRange(0,t-n-1),i=e[n];e[n]=e[r],e[r]=i}return e}fromArray(e){return e.length?k(e[this.nextIntInRange(0,e.length-1)]):S()}keyFromObject(e){return this.fromArray(Object.keys(e))}valueFromObject(e){return this.fromArray(Object.values(e))}fillBytes(e){for(let t=0,n=e.length;t<n;t++){let n=t%4;0===n&&m(eu,this.nextInt()),e[t]=eu[n]}return e}[Symbol.iterator](){return this}iter(){return new T(this)}next(){return{done:!1,value:this.nextInt()}}float(){return new es(this)}uniformFloat(e=0,t=1){return new eo(this,e,t)}uniformInt(e=0,t=2147483647){return new ea(this,e,t)}}const ec="undefined"!=typeof crypto&&"function"==typeof crypto.getRandomValues,el=new Uint32Array(1),ed=new Uint8Array(4),ep=ec?()=>crypto.getRandomValues(el)[0]%2147483647:()=>2147483647*Math.random()|0,ef=ec?e=>crypto.getRandomValues(Array.isArray(e)?new Uint8Array(e):e):e=>{for(let t=0,n=e.length;t<n;t++){let n=t%4;0===n&&m(ed,ep()),e[t]=ed[n]}return e};class ev extends eh{constructor(e=423257940){super(),this.seed=e}setSeed(e=423257940){return this.seed=e,this}nextInt(){return this.seed=0|Math.imul(48271,this.seed),2147483647&this.seed}}const ex=new ev;class ew extends eh{constructor(e,t,n,r){super(),this.x=423257940,this.y=2829571177,this.z=2541948421,this.w=289122235,this.set(e,t,n,r)}static fromSeed(e){return new ew().setSeed(e)}setSeed(e){let t=ex.setSeed(e);return this.set(t.nextInt(),t.nextInt(),t.nextInt(),t.nextInt())}set(e=423257940,t=2829571177,n=2541948421,r=289122235){return this.x=0|e,this.y=0|t,this.z=0|n,this.w=0|r,this}nextInt(){let e=this.x,t=e^e<<11;this.x=this.y,this.y=this.z,this.z=this.w;let n=this.w;return this.w=n^n>>19^(t^t>>8),this.w}}new ev,new ew,new class extends eh{nextInt(){return ep()}fillBytes(e){return ef(e)}};const ey="HTTP-WEBRTC/1.0";function em(e,t,n){return eg(t,e.encode(n))}function eg(e,t){let n=new Uint8Array(e.length+t.length);return n.set(e),n.set(t,e.length),n}function e_(){return 2147483647*Math.random()|0}async function eb(e){let t={"Content-Type":"application/json"};"server"===e&&(t.Authorization="Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJQMlAiLCJpYXQiOjE3MTM3Nzk2MjksImV4cCI6bnVsbCwiYXVkIjoiUDJQIiwic3ViIjoid2VicnRjLWV4YW1wbGUifQ.HNF2HiiU2MzW_2uVFAh8IvRcbw6QU3Eerv91dvp164A");let n=await fetch(`https://p2p.aicacia.com/${e}`,{method:"POST",headers:t,credentials:"same-origin",mode:"cors",body:JSON.stringify({id:"some-globally-unique-id",password:"password"})});if(n.status>=400)throw Error("failed to authenticate");return await n.text()}async function eI(){let e={},t=await eb("server"),n=new WebSocket(`wss://p2p.aicacia.com/server/websocket?token=${t}`);n.addEventListener("open",()=>{n.addEventListener("message",async t=>{let r=JSON.parse(t.data);switch(r.type){case"join":{let t=r.from,i=new v({trickle:!0,channelConfig:{ordered:!0}});i.on("error",e=>console.log("error",e)),i.on("signal",e=>{n.send(JSON.stringify({to:t,payload:e}))}),i.on("connect",()=>{!function(e,t){let n=new Map,r=new TextEncoder,i=new TextDecoder;async function s(t,n){let i=m(new Uint8Array(4),t);if(e.send(em(r,i,`${ey} ${n.status} ${function(e){switch(e){case 100:return"Continue";case 101:return"Switching Protocols";case 102:return"Processing";case 103:return"Early Hints";case 200:return"OK";case 201:return"Created";case 202:return"Accepted";case 203:return"Non-Authoritative Information";case 204:return"No Content";case 205:return"Reset Content";case 206:return"Partial Content";case 207:return"Multi-Status";case 208:return"Already Reported";case 226:return"IM Used";case 300:return"Multiple Choices";case 301:return"Moved Permanently";case 302:return"Found";case 303:return"See Other";case 304:return"Not Modified";case 305:return"Use Proxy";case 306:return"Switch Proxy";case 307:return"Temporary Redirect";case 308:return"Permanent Redirect";case 400:return"Bad Request";case 401:return"Unauthorized";case 402:return"Payment Required";case 403:return"Forbidden";case 404:return"Not Found";case 405:return"Method Not Allowed";case 406:return"Not Acceptable";case 407:return"Proxy Authentication Required";case 408:return"Request Timeout";case 409:return"Conflict";case 410:return"Gone";case 411:return"Length Required";case 412:return"Precondition Failed";case 413:return"Payload Too Large";case 414:return"URI Too Long";case 415:return"Unsupported Media Type";case 416:return"Range Not Satisfiable";case 417:return"Expectation Failed";case 418:return"I'm a teapot";case 421:return"Misdirected Request";case 422:return"Unprocessable Entity";case 423:return"Locked";case 424:return"Failed Dependency";case 425:return"Too Early";case 426:return"Upgrade Required";case 428:return"Precondition Required";case 429:return"Too Many Requests";case 431:return"Request Header Fields Too Large";case 451:return"Unavailable For Legal Reasons";case 500:return"Internal Server Error";case 501:return"Not Implemented";case 502:return"Bad Gateway";case 503:return"Service Unavailable";case 504:return"Gateway Timeout";case 505:return"HTTP Version Not Supported";case 506:return"Variant Also Negotiates";case 507:return"Insufficient Storage";case 508:return"Loop Detected";case 510:return"Not Extended";case 511:return"Network Authentication Required";default:return"Unknown Status Code"}}(n.status)}`)),n.headers.forEach((t,n)=>{e.send(em(r,i,`${n}: ${t}`))}),e.send(em(r,i,"\r\n")),n.body){let t=n.body.getReader();for(;;){let{done:n,value:r}=await t.read();if(r&&e.send(eg(i,r)),n)break}}e.send(em(r,i,"\r\n"))}async function o(e,n){let r=await t(n);await s(e,r)}async function a(e,t){let r=n.get(e);if(r){if(r.readHeaders)await r.writer.ready,13===t[0]&&10===t[1]?(n.delete(e),clearTimeout(r.timeoutId),r.timeoutId=void 0,await r.writer.close()):await r.writer.write(t);else if(13===t[0]&&10===t[1])r.readHeaders=!0,await o(e,new Request(`webrtc-http:${r.path}`,{method:r.method,headers:r.headers,body:"GET"===r.method||"HEAD"===r.method?null:r.stream.readable,duplex:"half"}));else{let[e,n]=i.decode(t).split(/\:\s+/,2);r.headers.append(e,n)}}else{let[r,s,o]=i.decode(t).split(/\s+/);if(r&&s&&o){let t=function(e,t){let n=new TransformStream;return{readHeaders:!1,method:e,path:t,headers:new Headers,stream:n,writer:n.writable.getWriter()}}(r,s);n.set(e,t),t.timeoutId=setTimeout(()=>n.delete(e),6e4)}}}async function u(e){let t=new Uint8Array(e.data),n=g(t);await a(n,t.slice(4))}e.addEventListener("message",u),()=>{e.removeEventListener("message",u)}}(i.getChannel(),e=>(console.log(e),new Response(e.body,{status:200,headers:e.headers})))}),i.on("close",()=>{delete e[t]}),e[t]=i;break}case"leave":console.log(`leave ${r.from}`);break;case"message":e[r.from].signal(r.payload)}})})}async function eC(){let e=await eb("client"),t=new WebSocket(`wss://p2p.aicacia.com/client/websocket?token=${e}&payload=${encodeURIComponent(JSON.stringify({name:"test"}))}`);t.addEventListener("open",async()=>{let e=new v({trickle:!0,channelConfig:{ordered:!0}});t.addEventListener("message",t=>{e.signal(JSON.parse(t.data))}),e.on("error",e=>console.log("error",e)),e.on("signal",e=>{t.send(JSON.stringify(e))}),e.on("connect",()=>{window.clientFetch=function(e){let t=new Map,n=new TextEncoder,r=new TextDecoder;async function i(t,r){let i=new URL(r.url),s=m(new Uint8Array(4),t);if(e.send(em(n,s,`${r.method} ${i.pathname+i.search} ${ey}`)),r.headers.forEach((t,r)=>{e.send(em(n,s,`${r}: ${t}`))}),e.send(em(n,s,"\r\n")),r.body){let t=r.body.getReader();for(;;){let{done:n,value:r}=await t.read();if(r&&e.send(eg(s,r)),n)break}}e.send(em(n,s,"\r\n"))}async function s(e,n){let i=t.get(e);if(i){if(i.readStatus){if(i.readHeaders)await i.writer.ready,13===n[0]&&10===n[1]?(t.delete(e),clearTimeout(i.timeoutId),i.timeoutId=void 0,await i.writer.close()):await i.writer.write(n);else if(13===n[0]&&10===n[1])i.readHeaders=!0,i.handle(void 0,function(e){let t=new Response(e.stream.readable,{status:e.status,statusText:e.statusText,headers:e.headers,duplex:"half"});return Object.defineProperty(t,"url",{value:`webrtc-http:${e.url.pathname}${e.url.search}`}),t}(i));else{let[e,t]=r.decode(n).split(/\:\s+/);i.headers.append(e,t)}}else{i.readStatus=!0;let[e,t,s]=r.decode(n).split(/\s+/,3);i.status=Number.parseInt(t),i.statusText=s}}}async function o(e){let t=new Uint8Array(e.data),n=g(t);await s(n,t.slice(4))}function a(e,n){return new Promise((r,s)=>{let o=new Request(e,n);i(function(e,n,r){let i=e_();for(;t.has(i);)i=e_();let s=function(e,t,n,r){let i=new TransformStream,s={connectionId:e,url:new URL(t.url),handled:!1,readStatus:!1,readHeaders:!1,headers:new Headers,status:200,statusText:"",stream:i,writer:i.writable.getWriter(),handle(e,t){if(s.handled){r(TypeError("Response already handled"));return}s.handled=!0,e?r(e):t?n(t):r(TypeError("No response"))}};return s.timeoutId=setTimeout(()=>s.handle(TypeError("Request timed out")),6e4),s}(i,e,n,r);return t.set(i,s),s}(o,r,s).connectionId,o)})}return e.addEventListener("message",o),a.destroy=()=>e.removeEventListener("message",o),a}(e.getChannel())}),await e.init()})}async function eE(){new URL(window.location.href).searchParams.has("server")?await eI():await eC()}"complete"===document.readyState?eE():window.addEventListener("load",eE);
//# sourceMappingURL=index.6d6513d8.js.map
