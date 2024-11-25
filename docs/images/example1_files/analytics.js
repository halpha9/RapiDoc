(function () { /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  const m = this || self; const n = function (a, b) { a = a.split('.'); let c = m; a[0] in c || typeof c.execScript === 'undefined' || c.execScript(`var ${a[0]}`); for (var d; a.length && (d = a.shift());)a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b; }; const p = function (a, b) { for (const c in b)b.hasOwnProperty(c) && (a[c] = b[c]); }; const q = function (a) { for (const b in a) if (a.hasOwnProperty(b)) return !0; return !1; }; const r = window; const t = document; const u = function (a, b) { t.addEventListener ? t.addEventListener(a, b, !1) : t.attachEvent && t.attachEvent(`on${a}`, b); }; const v = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i; const w = {}; const x = function () { w.TAGGING = w.TAGGING || []; w.TAGGING[1] = !0; }; const y = /:[0-9]+$/; const A = function (a, b) {
    b && (b = String(b).toLowerCase()); if (b === 'protocol' || b === 'port')a.protocol = z(a.protocol) || z(r.location.protocol); b === 'port' ? a.port = String(Number(a.hostname ? a.port : r.location.port) || (a.protocol == 'http' ? 80 : a.protocol == 'https' ? 443 : '')) : b === 'host' && (a.hostname = (a.hostname || r.location.hostname).replace(y, '').toLowerCase()); let c = z(a.protocol); b && (b = String(b).toLowerCase()); switch (b) {
      case 'url_no_fragment': b = ''; a && a.href && (b = a.href.indexOf('#'), b = b < 0 ? a.href : a.href.substr(
        0,
        b,
      )); a = b; break; case 'protocol': a = c; break; case 'host': a = a.hostname.replace(y, '').toLowerCase(); break; case 'port': a = String(Number(a.port) || (c == 'http' ? 80 : c == 'https' ? 443 : '')); break; case 'path': a.pathname || a.hostname || x(); a = a.pathname.substr(0, 1) == '/' ? a.pathname : `/${a.pathname}`; a = a.split('/'); a:if (b = a[a.length - 1], c = [], Array.prototype.indexOf)b = c.indexOf(b), b = typeof b === 'number' ? b : -1; else { for (let d = 0; d < c.length; d++) if (c[d] === b) { b = d; break a; }b = -1; }b >= 0 && (a[a.length - 1] = ''); a = a.join('/'); break; case 'query': a = a.search.replace(
        '?',
        '',
      ); break; case 'extension': a = a.pathname.split('.'); a = a.length > 1 ? a[a.length - 1] : ''; a = a.split('/')[0]; break; case 'fragment': a = a.hash.replace('#', ''); break; default: a = a && a.href;
    } return a;
  }; var z = function (a) { return a ? a.replace(':', '').toLowerCase() : ''; }; const B = function (a) { const b = t.createElement('a'); a && (b.href = a); let c = b.pathname; c[0] !== '/' && (a || x(), c = `/${c}`); a = b.hostname.replace(y, ''); return { href: b.href, protocol: b.protocol, host: b.host, hostname: a, pathname: c, search: b.search, hash: b.hash, port: b.port }; }; function C() { for (var a = D, b = {}, c = 0; c < a.length; ++c)b[a[c]] = c; return b; } function E() { let a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; a += `${a.toLowerCase()}0123456789-_`; return `${a}.`; } let D; let F; function G(a) { D = D || E(); F = F || C(); for (var b = [], c = 0; c < a.length; c += 3) { const d = c + 1 < a.length; const f = c + 2 < a.length; let e = a.charCodeAt(c); let g = d ? a.charCodeAt(c + 1) : 0; let h = f ? a.charCodeAt(c + 2) : 0; const k = e >> 2; e = (e & 3) << 4 | g >> 4; g = (g & 15) << 2 | h >> 6; h &= 63; f || (h = 64, d || (g = 64)); b.push(D[k], D[e], D[g], D[h]); } return b.join(''); }
  function H(a) { function b(k) { for (;d < a.length;) { const l = a.charAt(d++); const M = F[l]; if (M != null) return M; if (!/^[\s\xa0]*$/.test(l)) throw Error(`Unknown base64 encoding at char: ${l}`); } return k; }D = D || E(); F = F || C(); for (var c = '', d = 0; ;) { const f = b(-1); const e = b(0); const g = b(64); const h = b(64); if (h === 64 && f === -1) return c; c += String.fromCharCode(f << 2 | e >> 4); g != 64 && (c += String.fromCharCode(e << 4 & 240 | g >> 2), h != 64 && (c += String.fromCharCode(g << 6 & 192 | h))); } }let I; const N = function () { const a = J; const b = K; const c = L(); const d = function (g) { a(g.target || g.srcElement || {}); }; const f = function (g) { b(g.target || g.srcElement || {}); }; if (!c.init) { u('mousedown', d); u('keyup', d); u('submit', f); const e = HTMLFormElement.prototype.submit; HTMLFormElement.prototype.submit = function () { b(this); e.call(this); }; c.init = !0; } }; const O = function (a, b, c) {
    for (var d = L().decorators, f = {}, e = 0; e < d.length; ++e) {
      const g = d[e]; var h; if (h = !c || g.forms) {
        a: {
          h = g.domains; const k = a; if (h && (g.sameHost || k !== t.location.hostname)) {
            for (let l = 0; l < h.length; l++) {
              if (h[l]
instanceof RegExp) { if (h[l].test(k)) { h = !0; break a; } } else if (k.indexOf(h[l]) >= 0) { h = !0; break a; }
            }
          }h = !1;
        }
      }h && (h = g.placement, void 0 == h && (h = g.fragment ? 2 : 1), h === b && p(f, g.callback()));
    } return f;
  }; var L = function () { let a = {}; let b = r.google_tag_data; r.google_tag_data = void 0 === b ? a : b; a = r.google_tag_data; b = a.gl; b && b.decorators || (b = { decorators: [] }, a.gl = b); return b; }; const P = /(.*?)\*(.*?)\*(.*)/; const aa = /([^?#]+)(\?[^#]*)?(#.*)?/; function Q(a) { return new RegExp(`(.*?)(^|&)${a}=([^&]*)&?(.*)`); }
  const S = function (a) { const b = []; let c; for (c in a) if (a.hasOwnProperty(c)) { const d = a[c]; void 0 !== d && d === d && d !== null && d.toString() !== '[object Object]' && (b.push(c), b.push(G(String(d)))); }a = b.join('*'); return ['1', R(a), a].join('*'); }; var R = function (a, b) {
    a = [window.navigator.userAgent, (new Date()).getTimezoneOffset(), window.navigator.userLanguage || window.navigator.language, Math.floor((new Date()).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join('*'); if (!(b = I)) {
      b = Array(256); for (var c = 0; c < 256; c++) {
        for (var d = c, f = 0; f < 8; f++) {
          d = d & 1 ? d >>> 1
^ 3988292384 : d >>> 1;
        }b[c] = d;
      }
    }I = b; b = 4294967295; for (c = 0; c < a.length; c++)b = b >>> 8 ^ I[(b ^ a.charCodeAt(c)) & 255]; return ((b ^ -1) >>> 0).toString(36);
  }; const ca = function (a) { return function (b) { const c = B(r.location.href); const d = c.search.replace('?', ''); a: { var f = d.split('&'); for (var e = 0; e < f.length; e++) { const g = f[e].split('='); if (decodeURIComponent(g[0]).replace(/\+/g, ' ') === '_gl') { f = g.slice(1).join('='); break a; } }f = void 0; }b.query = T(f || '') || {}; f = A(c, 'fragment'); e = f.match(Q('_gl')); b.fragment = T(e && e[3] || '') || {}; a && ba(c, d, f); }; };
  function U(a, b) { if (a = Q(a).exec(b)) { const c = a[2]; const d = a[4]; b = a[1]; d && (b = b + c + d); } return b; }
  var ba = function (a, b, c) { function d(e, g) { e = U('_gl', e); e.length && (e = g + e); return e; } if (r.history && r.history.replaceState) { const f = Q('_gl'); if (f.test(b) || f.test(c))a = A(a, 'path'), b = d(b, '?'), c = d(c, '#'), r.history.replaceState({}, void 0, `${a}${b}${c}`); } }; var T = function (a) {
    var b = void 0 === b ? 3 : b; try {
      if (a) {
        a: { for (let c = 0; c < 3; ++c) { const d = P.exec(a); if (d) { var f = d; break a; }a = decodeURIComponent(a); }f = void 0; } if (f && f[1] === '1') {
          const e = f[2]; let g = f[3]; a: { for (f = 0; f < b; ++f) if (e === R(g, f)) { var h = !0; break a; }h = !1; } if (h) {
            b = {}; const k = g ? g.split('*')
              : []; for (g = 0; g < k.length; g += 2)b[k[g]] = H(k[g + 1]); return b;
          }
        }
      }
    } catch (l) {}
  }; function V(a, b, c, d) { function f(k) { k = U(a, k); const l = k.charAt(k.length - 1); k && l !== '&' && (k += '&'); return k + h; }d = void 0 === d ? !1 : d; let e = aa.exec(c); if (!e) return ''; c = e[1]; let g = e[2] || ''; e = e[3] || ''; var h = `${a}=${b}`; d ? e = `#${f(e.substring(1))}` : g = `?${f(g.substring(1))}`; return `${c}${g}${e}`; }
  function W(a, b) { let c = (a.tagName || '').toUpperCase() === 'FORM'; let d = O(b, 1, c); const f = O(b, 2, c); b = O(b, 3, c); q(d) && (d = S(d), c ? X('_gl', d, a) : Y('_gl', d, a, !1)); !c && q(f) && (c = S(f), Y('_gl', c, a, !0)); for (const e in b)b.hasOwnProperty(e) && Z(e, b[e], a); } function Z(a, b, c, d) { if (c.tagName) { if (c.tagName.toLowerCase() === 'a') return Y(a, b, c, d); if (c.tagName.toLowerCase() === 'form') return X(a, b, c); } if (typeof c === 'string') return V(a, b, c, d); } function Y(a, b, c, d) { c.href && (a = V(a, b, c.href, void 0 === d ? !1 : d), v.test(a) && (c.href = a)); }
  function X(a, b, c) { if (c && c.action) { let d = (c.method || '').toLowerCase(); if (d === 'get') { d = c.childNodes || []; for (var f = !1, e = 0; e < d.length; e++) { const g = d[e]; if (g.name === a) { g.setAttribute('value', b); f = !0; break; } }f || (d = t.createElement('input'), d.setAttribute('type', 'hidden'), d.setAttribute('name', a), d.setAttribute('value', b), c.appendChild(d)); } else d === 'post' && (a = V(a, b, c.action), v.test(a) && (c.action = a)); } }
  var J = function (a) { try { a: { for (let b = 100; a && b > 0;) { if (a.href && a.nodeName.match(/^a(?:rea)?$/i)) { var c = a; break a; }a = a.parentNode; b--; }c = null; } if (c) { const d = c.protocol; d !== 'http:' && d !== 'https:' || W(c, c.hostname); } } catch (f) {} }; var K = function (a) { try { if (a.action) { const b = A(B(a.action), 'host'); W(a, b); } } catch (c) {} }; n('google_tag_data.glBridge.auto', (a, b, c, d) => { N(); c = c === 'fragment' ? 2 : 1; a = { callback: a, domains: b, fragment: c === 2, placement: c, forms: !!d, sameHost: !1 }; L().decorators.push(a); }); n('google_tag_data.glBridge.decorate', (a, b, c) => { a = S(a); return Z('_gl', a, b, !!c); }); n('google_tag_data.glBridge.generate', S); n('google_tag_data.glBridge.get', (a, b) => { let c = ca(!!b); b = L(); b.data || (b.data = { query: {}, fragment: {} }, c(b.data)); c = {}; if (b = b.data)p(c, b.query), a && p(c, b.fragment); return c; });
}(window));
(function () {
  function La(a) { let b = 1; let c; if (a) for (b = 0, c = a.length - 1; c >= 0; c--) { let d = a.charCodeAt(c); b = (b << 6 & 268435455) + d + (d << 14); d = b & 266338304; b = d != 0 ? b ^ d >> 21 : b; } return b; }/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  const $c = function (a) { this.w = a || []; }; $c.prototype.set = function (a) { this.w[a] = !0; }; $c.prototype.encode = function () { for (var a = [], b = 0; b < this.w.length; b++) this.w[b] && (a[Math.floor(b / 6)] ^= 1 << b % 6); for (b = 0; b < a.length; b++)a[b] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.charAt(a[b] || 0); return `${a.join('')}~`; }; const ha = window.GoogleAnalyticsObject; let wa; if (wa = void 0 != ha)wa = (`${ha.constructor}`).indexOf('String') > -1; let Qa; if (Qa = wa) { const Za = window.GoogleAnalyticsObject; Qa = Za ? Za.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '') : ''; } const gb = Qa || 'ga'; const jd = /^(?:utma\.)?\d+\.\d+$/; const kd = /^amp-[\w.-]{22,64}$/; let Ba = !1; const vd = new $c(); function J(a) { vd.set(a); } const Td = function (a) { a = Dd(a); a = new $c(a); for (var b = vd.w.slice(), c = 0; c < a.w.length; c++)b[c] = b[c] || a.w[c]; return (new $c(b)).encode(); }; var Dd = function (a) { a = a.get(Gd); ka(a) || (a = []); return a; }; const ea = function (a) { return typeof a === 'function'; }; var ka = function (a) { return Object.prototype.toString.call(Object(a)) == '[object Array]'; }; const qa = function (a) { return void 0 != a && (`${a.constructor}`).indexOf('String') > -1; }; const D = function (a, b) { return a.indexOf(b) == 0; }; const sa = function (a) { return a ? a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '') : ''; }; const ra = function () {
    for (var a = O.navigator.userAgent + (M.cookie ? M.cookie : '') + (M.referrer ? M.referrer : ''), b = a.length, c = O.history.length; c > 0;)a += c-- ^ b++; return [hd() ^ La(a) & 2147483647, Math.round((new Date()).getTime()
/ 1E3)].join('.');
  }; const ta = function (a) { const b = M.createElement('img'); b.width = 1; b.height = 1; b.src = a; return b; }; const ua = function () {}; const K = function (a) { if (encodeURIComponent instanceof Function) return encodeURIComponent(a); J(28); return a; }; const L = function (a, b, c, d) { try { a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent(`on${b}`, c); } catch (e) { J(27); } }; const f = /^[\w\-:/.?=&%!\[\]]+$/; const Nd = /^[\w+/_-]+[=]{0,2}$/; const be = function (a, b) { return E(M.location[b ? 'href' : 'search'], a); }; var E = function (a, b) {
    return (a = a.match(`(?:&|#|\\?)${
      K(b).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1')}=([^&#]*)`)) && a.length == 2 ? a[1] : '';
  }; const xa = function () { const a = `${M.location.hostname}`; return a.indexOf('www.') == 0 ? a.substring(4) : a; }; const de = function (a, b) { const c = a.indexOf(b); if (c == 5 || c == 6) if (a = a.charAt(c + b.length), a == '/' || a == '?' || a == '' || a == ':') return !0; return !1; }; const ya = function (a, b) {
    const c = M.referrer; if (/^(https?|android-app):\/\//i.test(c)) {
      if (a) return c; a = `//${M.location.hostname}`; if (!de(c, a)) {
        return b && (b = `${a.replace(/\./g, '-')}.cdn.ampproject.org`, de(c, b)) ? void 0
          : c;
      }
    }
  }; const za = function (a, b) { if (b.length == 1 && b[0] != null && typeof b[0] === 'object') return b[0]; for (var c = {}, d = Math.min(a.length + 1, b.length), e = 0; e < d; e++) if (typeof b[e] === 'object') { for (const g in b[e])b[e].hasOwnProperty(g) && (c[g] = b[e][g]); break; } else e < a.length && (c[a[e]] = b[e]); return c; }; const ee = function () { this.keys = []; this.values = {}; this.m = {}; }; ee.prototype.set = function (a, b, c) { this.keys.push(a); c ? this.m[`:${a}`] = b : this.values[`:${a}`] = b; }; ee.prototype.get = function (a) { return this.m.hasOwnProperty(`:${a}`) ? this.m[`:${a}`] : this.values[`:${a}`]; }; ee.prototype.map = function (a) { for (let b = 0; b < this.keys.length; b++) { const c = this.keys[b]; const d = this.get(c); d && a(c, d); } }; var O = window; var M = document; const va = function (a, b) { return setTimeout(a, b); }; const F = window; const Ea = document; const G = function (a) {
    let b = F._gaUserPrefs; if (b && b.ioo && b.ioo() || a && !0 === F[`ga-disable-${a}`]) return !0; try { var c = F.external; if (c && c._gaUserPrefs && c._gaUserPrefs == 'oo') return !0; } catch (g) {}a = []; b = String(Ea.cookie || document.cookie).split(';'); for (c = 0; c < b.length; c++) { let d = b[c].split('='); const e = d[0].replace(/^\s*|\s*$/g, ''); e && e == 'AMP_TOKEN' && ((d = d.slice(1).join('=').replace(/^\s*|\s*$/g, '')) && (d = decodeURIComponent(d)), a.push(d)); } for (b = 0; b < a.length; b++) if (a[b] == '$OPT_OUT') return !0; return Ea.getElementById('__gaOptOutExtension')
      ? !0 : !1;
  }; const Ca = function (a) { const b = []; const c = M.cookie.split(';'); a = new RegExp(`^\\s*${a}=\\s*(.*?)\\s*$`); for (let d = 0; d < c.length; d++) { const e = c[d].match(a); e && b.push(e[1]); } return b; }; const zc = function (a, b, c, d, e, g, ca) {
    e = G(e) ? !1 : eb.test(M.location.hostname) || c == '/' && vc.test(d) ? !1 : !0; if (!e) return !1; b && b.length > 1200 && (b = b.substring(0, 1200)); c = `${a}=${b}; path=${c}; `; g && (c += `expires=${(new Date((new Date()).getTime() + g)).toGMTString()}; `); d && d !== 'none' && (c += `domain=${d};`); ca && (c += `${ca};`); d = M.cookie; M.cookie = c; if (!(d = d != M.cookie)) {
      a: {
        a = Ca(a); for (d = 0; d < a.length; d++) if (b == a[d]) { d = !0; break a; }d = !1;
      }
    } return d;
  }; const Cc = function (a) { return encodeURIComponent ? encodeURIComponent(a).replace(/\(/g, '%28').replace(/\)/g, '%29') : a; }; var vc = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/; var eb = /(^|\.)doubleclick\.net$/i; let oc; const Id = /^.*Version\/?(\d+)[^\d].*$/i; const ne = function () { if (void 0 !== O.__ga4__) return O.__ga4__; if (void 0 === oc) { let a = O.navigator.userAgent; if (a) { let b = a; try { b = decodeURIComponent(a); } catch (c) {} if (a = !(b.indexOf('Chrome') >= 0) && !(b.indexOf('CriOS') >= 0) && (b.indexOf('Safari/') >= 0 || b.indexOf('Safari,') >= 0))b = Id.exec(b), a = (b ? Number(b[1]) : -1) >= 11; oc = a; } else oc = !1; } return oc; }; let Fa; let Ga; let fb; let Ab; const ja = /^https?:\/\/[^/]*cdn\.ampproject\.org\//; const Ue = /^(?:www\.|m\.|amp\.)+/; let Ub = []; const da = function (a) {
    if (ye(a[Kd])) { if (void 0 === Ab) { var b; if (b = (b = De.get()) && b._ga || void 0)Ab = b, J(81); } if (void 0 !== Ab) return a[Q] || (a[Q] = Ab), !1; } if (a[Kd]) {
      J(67); if (a[ac] && a[ac] != 'cookie') return !1; if (void 0 !== Ab)a[Q] || (a[Q] = Ab); else {
        a: {
          b = String(a[W] || xa()); const c = String(a[Yb] || '/'); const d = Ca(String(a[U] || '_ga')); b = na(d, b, c); if (!b || jd.test(b))b = !0; else if (b = Ca('AMP_TOKEN'), b.length == 0)b = !0; else {
            if (b.length == 1 && (b = decodeURIComponent(b[0]),
            b == '$RETRIEVING' || b == '$OPT_OUT' || b == '$ERROR' || b == '$NOT_FOUND')) { b = !0; break a; }b = !1;
          }
        } if (b && tc(ic, String(a[Na]))) return !0;
      }
    } return !1;
  }; var ic = function () { Z.D([ua]); }; var tc = function (a, b) {
    let c = Ca('AMP_TOKEN'); if (c.length > 1) return J(55), !1; c = decodeURIComponent(c[0] || ''); if (c == '$OPT_OUT' || c == '$ERROR' || G(b)) return J(62), !1; if (!ja.test(M.referrer) && c == '$NOT_FOUND') return J(68), !1; if (void 0 !== Ab) return J(56), va(() => { a(Ab); }, 0), !0; if (Fa) return Ub.push(a), !0; if (c == '$RETRIEVING') {
      return J(57), va(
        () => { tc(a, b); },
        1E4,
      ), !0;
    } Fa = !0; c && c[0] != '$' || (xc('$RETRIEVING', 3E4), setTimeout(Mc, 3E4), c = ''); return Pc(c, b) ? (Ub.push(a), !0) : !1;
  }; var Pc = function (a, b, c) {
    if (!window.JSON) return J(58), !1; let d = O.XMLHttpRequest; if (!d) return J(59), !1; let e = new d(); if (!('withCredentials' in e)) return J(60), !1; e.open('POST', `${c || 'https://ampcid.google.com/v1/publisher:getClientId'}?key=AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM`, !0); e.withCredentials = !0; e.setRequestHeader('Content-Type', 'text/plain'); e.onload = function () {
      Fa = !1; if (e.readyState == 4) {
        try {
          e.status
!= 200 && (J(61), Qc('', '$ERROR', 3E4)); const g = JSON.parse(e.responseText); g.optOut ? (J(63), Qc('', '$OPT_OUT', 31536E6)) : g.clientId ? Qc(g.clientId, g.securityToken, 31536E6) : !c && g.alternateUrl ? (Ga && clearTimeout(Ga), Fa = !0, Pc(a, b, g.alternateUrl)) : (J(64), Qc('', '$NOT_FOUND', 36E5));
        } catch (ca) { J(65), Qc('', '$ERROR', 3E4); }e = null;
      }
    }; d = { originScope: 'AMP_ECID_GOOGLE' }; a && (d.securityToken = a); e.send(JSON.stringify(d)); Ga = va(() => { J(66); Qc('', '$ERROR', 3E4); }, 1E4); return !0;
  }; var Mc = function () { Fa = !1; }; var xc = function (a, b) {
    if (void 0
=== fb) { fb = ''; for (let c = id(), d = 0; d < c.length; d++) { const e = c[d]; if (zc('AMP_TOKEN', encodeURIComponent(a), '/', e, '', b)) { fb = e; return; } } }zc('AMP_TOKEN', encodeURIComponent(a), '/', fb, '', b);
  }; var Qc = function (a, b, c) { Ga && clearTimeout(Ga); b && xc(b, c); Ab = a; b = Ub; Ub = []; for (c = 0; c < b.length; c++)b[c](a); }; var ye = function (a) {
    a: {
      if (ja.test(M.referrer)) {
        var b = M.location.hostname.replace(Ue, ''); b: {
          var c = M.referrer; c = c.replace(/^https?:\/\//, ''); var d = c.replace(/^[^/]+/, '').split('/'); const e = d[2]; d = (d = e == 's' ? d[3] : e) ? decodeURIComponent(d) : d; if (!d) {
            if (c.indexOf('xn--')
== 0) { c = ''; break b; }(c = c.match(/(.*)\.cdn\.ampproject\.org\/?$/)) && c.length == 2 && (d = c[1].replace(/-/g, '.').replace(/\.\./g, '-'));
          }c = d ? d.replace(Ue, '') : '';
        }(d = b === c) || (c = `.${c}`, d = b.substring(b.length - c.length, b.length) === c); if (d) { b = !0; break a; } else J(78);
      }b = !1;
    } return b && !1 !== a;
  }; const bd = function (a) { return `${a ? 'https:' : Ba || M.location.protocol == 'https:' ? 'https:' : 'http:'}//www.google-analytics.com`; }; const Da = function (a) { this.name = 'len'; this.message = `${a}-8192`; }; const ba = function (a, b, c) { c = c || ua; if (b.length <= 2036)wc(a, b, c); else if (b.length <= 8192)x(a, b, c) || wd(a, b, c) || wc(a, b, c); else throw ge('len', b.length), new Da(b.length); }; const pe = function (a, b, c, d) { d = d || ua; wd(`${a}?${b}`, '', d, c); }; var wc = function (a, b, c) { const d = ta(`${a}?${b}`); d.onload = d.onerror = function () { d.onload = null; d.onerror = null; c(); }; }; var wd = function (
    a,
    b,
    c,
    d,
  ) {
    const e = O.XMLHttpRequest; if (!e) return !1; let g = new e(); if (!('withCredentials' in g)) return !1; a = a.replace(/^http:/, 'https:'); g.open('POST', a, !0); g.withCredentials = !0; g.setRequestHeader('Content-Type', 'text/plain'); g.onreadystatechange = function () {
      if (g.readyState == 4) {
        if (d) {
          try {
            const ca = g.responseText; if (ca.length < 1)ge('xhr', 'ver', '0'), c(); else if (ca.charAt(0) != '1')ge('xhr', 'ver', String(ca.length)), c(); else if (d.count++ > 3)ge('xhr', 'tmr', `${d.count}`), c(); else if (ca.length == 1)c(); else {
              const l = ca.charAt(1); if (l
== 'd')pe('https://stats.g.doubleclick.net/j/collect', d.U, d, c); else if (l == 'g') { wc('https://www.google.%/ads/ga-audiences'.replace('%', 'com'), d.google, c); const k = ca.substring(2); k && (/^[a-z.]{1,6}$/.test(k) ? wc('https://www.google.%/ads/ga-audiences'.replace('%', k), d.google, ua) : ge('tld', 'bcc', k)); } else ge('xhr', 'brc', l), c();
            }
          } catch (w) { ge('xhr', 'rsp'), c(); }
        } else c(); g = null;
      }
    }; g.send(b); return !0;
  }; var x = function (a, b, c) { return O.navigator.sendBeacon ? O.navigator.sendBeacon(a, b) ? (c(), !0) : !1 : !1; }; var ge = function (a, b, c) {
    100
* Math.random() >= 1 || G('?') || (a = ['t=error', `_e=${a}`, '_v=j81', 'sr=1'], b && a.push(`_f=${b}`), c && a.push(`_m=${K(c.substring(0, 100))}`), a.push('aip=1'), a.push(`z=${hd()}`), wc(`${bd(!0)}/u/d`, a.join('&'), ua));
  }; const qc = function () { return O.gaData = O.gaData || {}; }; const h = function (a) { const b = qc(); return b[a] = b[a] || {}; }; const Ha = function () { this.M = []; }; Ha.prototype.add = function (a) { this.M.push(a); }; Ha.prototype.D = function (a) { try { for (var b = 0; b < this.M.length; b++) { const c = a.get(this.M[b]); c && ea(c) && c.call(O, a); } } catch (d) {}b = a.get(Ia); b != ua && ea(b) && (a.set(Ia, ua, !0), setTimeout(b, 10)); }; function Ja(a) { if (a.get(Ka) != 100 && La(P(a, Q)) % 1E4 >= 100 * R(a, Ka)) throw 'abort'; } function Ma(a) { if (G(P(a, Na))) throw 'abort'; } function Oa() { const a = M.location.protocol; if (a != 'http:' && a != 'https:') throw 'abort'; }
  function Pa(a) { try { O.navigator.sendBeacon ? J(42) : O.XMLHttpRequest && 'withCredentials' in new O.XMLHttpRequest() && J(40); } catch (c) {}a.set(ld, Td(a), !0); a.set(Ac, R(a, Ac) + 1); const b = []; ue.map((c, d) => { d.F && (c = a.get(c), void 0 != c && c != d.defaultValue && (typeof c === 'boolean' && (c *= 1), b.push(`${d.F}=${K(`${c}`)}`))); }); !1 === a.get(xe) && b.push('npa=1'); b.push(`z=${Bd()}`); a.set(Ra, b.join('&'), !0); }
  function Sa(a) {
    let b = P(a, fa); !b && a.get(Vd) && (b = 'beacon'); let c = P(a, gd); let d = P(a, oe); let e = c || (d ? `${d}/3` : `${bd(!1)}/collect`); switch (P(a, ad)) { case 'd': e = c || (d ? `${d}/32` : `${bd(!1)}/j/collect`); b = a.get(qe) || void 0; pe(e, P(a, Ra), b, a.Z(Ia)); break; case 'b': e = c || (d ? `${d}/31` : `${bd(!1)}/r/collect`); default: b ? (c = P(a, Ra), d = (d = a.Z(Ia)) || ua, b == 'image' ? wc(e, c, d) : b == 'xhr' && wd(e, c, d) || b == 'beacon' && x(e, c, d) || ba(e, c, d)) : ba(e, P(a, Ra), a.Z(Ia)); }e = P(a, Na); e = h(e); b = e.hitcount; e.hitcount = b ? b + 1 : 1; e = P(a, Na); delete h(e).pending_experiments;
    a.set(Ia, ua, !0);
  } function Hc(a) { qc().expId && a.set(Nc, qc().expId); qc().expVar && a.set(Oc, qc().expVar); let b = P(a, Na); if (b = h(b).pending_experiments) { const c = []; for (d in b)b.hasOwnProperty(d) && b[d] && c.push(`${encodeURIComponent(d)}.${encodeURIComponent(b[d])}`); var d = c.join('!'); } else d = void 0; d && a.set(m, d, !0); } function cd() { if (O.navigator && O.navigator.loadPurpose == 'preview') throw 'abort'; } function yd(a) { const b = O.gaDevIds; ka(b) && b.length != 0 && a.set('&did', b.join(','), !0); }
  function vb(a) { if (!a.get(Na)) throw 'abort'; } var hd = function () { return Math.round(2147483647 * Math.random()); }; var Bd = function () { try { const a = new Uint32Array(1); O.crypto.getRandomValues(a); return a[0] & 2147483647; } catch (b) { return hd(); } }; function Ta(a) { let b = R(a, Ua); b >= 500 && J(15); let c = P(a, Va); if (c != 'transaction' && c != 'item') { c = R(a, Wa); const d = (new Date()).getTime(); let e = R(a, Xa); e == 0 && a.set(Xa, d); e = Math.round(2 * (d - e) / 1E3); e > 0 && (c = Math.min(c + e, 20), a.set(Xa, d)); if (c <= 0) throw 'abort'; a.set(Wa, --c); }a.set(Ua, ++b); } const Ya = function () { this.data = new ee(); }; Ya.prototype.get = function (a) { const b = $a(a); let c = this.data.get(a); b && void 0 == c && (c = ea(b.defaultValue) ? b.defaultValue() : b.defaultValue); return b && b.Z ? b.Z(this, a, c) : c; }; var P = function (a, b) { a = a.get(b); return void 0 == a ? '' : `${a}`; }; var R = function (a, b) { a = a.get(b); return void 0 == a || a === '' ? 0 : Number(a); }; Ya.prototype.Z = function (a) { return (a = this.get(a)) && ea(a) ? a : ua; };
  Ya.prototype.set = function (a, b, c) { if (a) if (typeof a === 'object') for (const d in a)a.hasOwnProperty(d) && ab(this, d, a[d], c); else ab(this, a, b, c); }; var ab = function (a, b, c, d) { if (void 0 != c) switch (b) { case Na: wb.test(c); } const e = $a(b); e && e.o ? e.o(a, b, c, d) : a.data.set(b, c, d); }; var ue = new ee(); const ve = []; const bb = function (a, b, c, d, e) { this.name = a; this.F = b; this.Z = d; this.o = e; this.defaultValue = c; }; var $a = function (a) { let b = ue.get(a); if (!b) for (let c = 0; c < ve.length; c++) { const d = ve[c]; const e = d[0].exec(a); if (e) { b = d[1](e); ue.set(b.name, b); break; } } return b; }; const yc = function (a) { let b; ue.map((c, d) => { d.F == a && (b = d); }); return b && b.name; }; const S = function (a, b, c, d, e) { a = new bb(a, b, c, d, e); ue.set(a.name, a); return a.name; }; const cb = function (a, b) { ve.push([new RegExp(`^${a}$`), b]); }; const T = function (a, b, c) { return S(a, b, c, void 0, db); }; var
    db = function () {}; const hb = T('apiVersion', 'v'); const ib = T('clientVersion', '_v'); S('anonymizeIp', 'aip'); const jb = S('adSenseId', 'a'); var Va = S('hitType', 't'); var Ia = S('hitCallback'); var Ra = S('hitPayload'); S('nonInteraction', 'ni'); S('currencyCode', 'cu'); S('dataSource', 'ds'); var Vd = S('useBeacon', void 0, !1); var fa = S('transport'); S('sessionControl', 'sc', ''); S('sessionGroup', 'sg'); S('queueTime', 'qt'); var Ac = S('_s', '_s'); S('screenName', 'cd'); const kb = S('location', 'dl', ''); const lb = S('referrer', 'dr'); const mb = S('page', 'dp', ''); S('hostname', 'dh');
  const nb = S('language', 'ul'); const ob = S('encoding', 'de'); S('title', 'dt', () => M.title || void 0); cb('contentGroup([0-9]+)', (a) => new bb(a[0], `cg${a[1]}`)); const pb = S('screenColors', 'sd'); const qb = S('screenResolution', 'sr'); const rb = S('viewportSize', 'vp'); const sb = S('javaEnabled', 'je'); const tb = S('flashVersion', 'fl'); S('campaignId', 'ci'); S('campaignName', 'cn'); S('campaignSource', 'cs'); S('campaignMedium', 'cm'); S('campaignKeyword', 'ck'); S('campaignContent', 'cc');
  const ub = S('eventCategory', 'ec'); const xb = S('eventAction', 'ea'); const yb = S('eventLabel', 'el'); const zb = S('eventValue', 'ev'); const Bb = S('socialNetwork', 'sn'); const Cb = S('socialAction', 'sa'); const Db = S('socialTarget', 'st'); const Eb = S('l1', 'plt'); const Fb = S('l2', 'pdt'); const Gb = S('l3', 'dns'); const Hb = S('l4', 'rrt'); const Ib = S('l5', 'srt'); const Jb = S('l6', 'tcp'); const Kb = S('l7', 'dit'); const Lb = S('l8', 'clt'); const Ve = S('l9', '_gst'); const We = S('l10', '_gbt'); const Xe = S('l11', '_cst'); const Ye = S('l12', '_cbt'); const Mb = S('timingCategory', 'utc'); const Nb = S('timingVar', 'utv'); const Ob = S('timingLabel', 'utl'); const Pb = S('timingValue', 'utt');
  S('appName', 'an'); S('appVersion', 'av', ''); S('appId', 'aid', ''); S('appInstallerId', 'aiid', ''); S('exDescription', 'exd'); S('exFatal', 'exf'); var Nc = S('expId', 'xid'); var Oc = S('expVar', 'xvar'); var m = S('exp', 'exp'); const Rc = S('_utma', '_utma'); const Sc = S('_utmz', '_utmz'); const Tc = S('_utmht', '_utmht'); var Ua = S('_hc', void 0, 0); var Xa = S('_ti', void 0, 0); var Wa = S('_to', void 0, 20); cb('dimension([0-9]+)', (a) => new bb(a[0], `cd${a[1]}`)); cb('metric([0-9]+)', (a) => new bb(a[0], `cm${a[1]}`)); S('linkerParam', void 0, void 0, Bc, db);
  const Ze = T('_cd2l', void 0, !1); var ld = S('usage', '_u'); var Gd = S('_um'); S('forceSSL', void 0, void 0, () => Ba, (a, b, c) => { J(34); Ba = !!c; }); const ed = S('_j1', 'jid'); const ia = S('_j2', 'gjid'); cb('\\&(.*)', (a) => { const b = new bb(a[0], a[1]); const c = yc(a[0].substring(1)); c && (b.Z = function (d) { return d.get(c); }, b.o = function (d, e, g, ca) { d.set(c, g, ca); }, b.F = void 0); return b; });
  const Qb = T('_oot'); const dd = S('previewTask'); const Rb = S('checkProtocolTask'); const md = S('validationTask'); const Sb = S('checkStorageTask'); const Uc = S('historyImportTask'); const Tb = S('samplerTask'); const Vb = S('_rlt'); const Wb = S('buildHitTask'); const Xb = S('sendHitTask'); const Vc = S('ceTask'); const zd = S('devIdTask'); const Cd = S('timingTask'); const Ld = S('displayFeaturesTask'); const oa = S('customTask'); const V = T('name'); var Q = T('clientId', 'cid'); const n = T('clientIdTime'); const xd = T('storedClientId'); const Ad = S('userId', 'uid'); var Na = T('trackingId', 'tid'); var U = T('cookieName', void 0, '_ga'); var W = T('cookieDomain'); var Yb = T(
    'cookiePath',
    void 0,
    '/',
  ); const Zb = T('cookieExpires', void 0, 63072E3); const Hd = T('cookieUpdate', void 0, !0); const Be = T('cookieFlags', void 0, ''); const $b = T('legacyCookieDomain'); const Wc = T('legacyHistoryImport', void 0, !0); var ac = T('storage', void 0, 'cookie'); const bc = T('allowLinker', void 0, !1); const cc = T('allowAnchor', void 0, !0); var Ka = T('sampleRate', 'sf', 100); const dc = T('siteSpeedSampleRate', void 0, 1); const ec = T('alwaysSendReferrer', void 0, !1); const I = T('_gid', '_gid'); const la = T('_gcn'); var Kd = T('useAmpClientId'); const ce = T('_gclid'); const fe = T('_gt'); const he = T('_ge', void 0, 7776E6); const ie = T('_gclsrc'); const je = T(
    'storeGac',
    void 0,
    !0,
  ); var oe = S('_x_19'); var gd = S('transportUrl'); const Md = S('_r', '_r'); var qe = S('_dp'); var ad = S('_jt', void 0, 'n'); const Ud = S('allowAdFeatures', void 0, !0); var xe = S('allowAdPersonalizationSignals', void 0, !0); function X(a, b, c, d) { b[a] = function () { try { return d && J(d), c.apply(this, arguments); } catch (e) { throw ge('exc', a, e && e.name), e; } }; } const Od = function () { this.V = 100; this.$ = this.fa = !1; this.oa = 'detourexp'; this.groups = 1; }; const Ed = function (a) {
    const b = new Od(); let
      c; if (b.fa && b.$) return 0; b.$ = !0; if (a) { if (b.oa && void 0 !== a.get(b.oa)) return R(a, b.oa); if (a.get(dc) == 0) return 0; } if (b.V == 0) return 0; void 0 === c && (c = Bd()); return c % b.V == 0 ? Math.floor(c / b.V) % b.groups + 1 : 0;
  }; function fc() {
    let a; let b; if ((b = (b = O.navigator) ? b.plugins : null) && b.length) for (let c = 0; c < b.length && !a; c++) { const d = b[c]; d.name.indexOf('Shockwave Flash') > -1 && (a = d.description); } if (!a) try { var e = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.7'); a = e.GetVariable('$version'); } catch (g) {} if (!a) try { e = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6'), a = 'WIN 6,0,21,0', e.AllowScriptAccess = 'always', a = e.GetVariable('$version'); } catch (g) {} if (!a) try { e = new ActiveXObject('ShockwaveFlash.ShockwaveFlash'), a = e.GetVariable('$version'); } catch (g) {}a
&& (e = a.match(/[\d]+/g)) && e.length >= 3 && (a = `${e[0]}.${e[1]} r${e[2]}`); return a || void 0;
  } const aa = function (a) { const b = Math.min(R(a, dc), 100); return La(P(a, Q)) % 100 >= b ? !1 : !0; }; const gc = function (a) { const b = {}; if (Ec(b) || Fc(b)) { const c = b[Eb]; void 0 == c || Infinity == c || isNaN(c) || (c > 0 ? (Y(b, Gb), Y(b, Jb), Y(b, Ib), Y(b, Fb), Y(b, Hb), Y(b, Kb), Y(b, Lb), Y(b, Ve), Y(b, We), Y(b, Xe), Y(b, Ye), va(() => { a(b); }, 10)) : L(O, 'load', () => { gc(a); }, !1)); } }; var Ec = function (a) {
    let b = O.performance || O.webkitPerformance; b = b && b.timing; if (!b) return !1; const c = b.navigationStart; if (c == 0) return !1; a[Eb] = b.loadEventStart - c; a[Gb] = b.domainLookupEnd - b.domainLookupStart;
    a[Jb] = b.connectEnd - b.connectStart; a[Ib] = b.responseStart - b.requestStart; a[Fb] = b.responseEnd - b.responseStart; a[Hb] = b.fetchStart - c; a[Kb] = b.domInteractive - c; a[Lb] = b.domContentLoadedEventStart - c; a[Ve] = N.L - c; a[We] = N.ya - c; O.google_tag_manager && O.google_tag_manager._li && (b = O.google_tag_manager._li, a[Xe] = b.cst, a[Ye] = b.cbt); return !0;
  }; var Fc = function (a) {
    if (O.top != O) return !1; const b = O.external; let c = b && b.onloadT; b && !b.isValidLoadTime && (c = void 0); c > 2147483648 && (c = void 0); c > 0 && b.setPageReadyTime(); if (void 0 == c) return !1;
    a[Eb] = c; return !0;
  }; var Y = function (a, b) { const c = a[b]; if (isNaN(c) || Infinity == c || c < 0)a[b] = void 0; }; const Fd = function (a) { return function (b) { if (b.get(Va) == 'pageview' && !a.I) { a.I = !0; const c = aa(b); const d = E(P(b, kb), 'gclid').length > 0; (c || d) && gc((e) => { c && a.send('timing', e); d && a.send('adtiming', e); }); } }; }; let hc = !1; const mc = function (a) { if (P(a, ac) == 'cookie') { if (a.get(Hd) || P(a, xd) != P(a, Q)) { var b = 1E3 * R(a, Zb); ma(a, Q, U, b); }(a.get(Hd) || uc(a) != P(a, I)) && ma(a, I, la, 864E5); if (a.get(je)) { let c = P(a, ce); if (c) { let d = Math.min(R(a, he), 1E3 * R(a, Zb)); d = Math.min(d, 1E3 * R(a, fe) + d - (new Date()).getTime()); a.data.set(he, d); b = {}; const e = P(a, fe); const g = P(a, ie); const ca = kc(P(a, Yb)); const l = lc(P(a, W)); const k = P(a, Na); a = P(a, Be); g && g != 'aw.ds' ? b && (b.ua = !0) : (c = ['1', e, Cc(c)].join('.'), d > 0 && (b && (b.ta = !0), zc(`_gac_${Cc(k)}`, c, ca, l, k, d, a))); le(b); } } else J(75); } }; var ma = function (
    a,
    b,
    c,
    d,
  ) { let e = nd(a, b); if (e) { c = P(a, c); const g = kc(P(a, Yb)); let ca = lc(P(a, W)); const l = P(a, Be); const k = P(a, Na); if (ca != 'auto')zc(c, e, g, ca, k, d, l) && (hc = !0); else { J(32); for (let w = id(), Ce = 0; Ce < w.length; Ce++) if (ca = w[Ce], a.data.set(W, ca), e = nd(a, b), zc(c, e, g, ca, k, d, l)) { hc = !0; return; }a.data.set(W, 'auto'); } } }; var uc = function (a) { const b = Ca(P(a, la)); return Xd(a, b); }; const nc = function (a) { if (P(a, ac) == 'cookie' && !hc && (mc(a), !hc)) throw 'abort'; }; const Yc = function (a) {
    if (a.get(Wc)) {
      let b = P(a, W); const c = P(a, $b) || xa(); const d = Xc('__utma', c, b); d && (J(19), a.set(
        Tc,
        (new Date()).getTime(),
        !0,
      ), a.set(Rc, d.R), (b = Xc('__utmz', c, b)) && d.hash == b.hash && a.set(Sc, b.R));
    }
  }; var nd = function (a, b) { b = Cc(P(a, b)); let c = lc(P(a, W)).split('.').length; a = jc(P(a, Yb)); a > 1 && (c += `-${a}`); return b ? ['GA1', c, b].join('.') : ''; }; var Xd = function (a, b) { return na(b, P(a, W), P(a, Yb)); }; var na = function (a, b, c) {
    if (!a || a.length < 1)J(12); else {
      for (var d = [], e = 0; e < a.length; e++) {
        let g = a[e]; let ca = g.split('.'); const l = ca.shift(); (l == 'GA1' || l == '1') && ca.length > 1 ? (g = ca.shift().split('-'), g.length == 1 && (g[1] = '1'), g[0] *= 1, g[1] *= 1, ca = { H: g, s: ca.join('.') }) : ca = kd.test(g) ? { H: [0, 0], s: g } : void 0; ca && d.push(ca);
      } if (d.length == 1) return J(13), d[0].s; if (d.length == 0)J(12); else { J(14); d = Gc(d, lc(b).split('.').length, 0); if (d.length == 1) return d[0].s; d = Gc(d, jc(c), 1); d.length > 1 && J(41); return d[0] && d[0].s; }
    }
  }; var Gc = function (a, b, c) { for (var d = [], e = [], g, ca = 0; ca < a.length; ca++) { const l = a[ca]; l.H[c] == b ? d.push(l) : void 0 == g || l.H[c] < g ? (e = [l], g = l.H[c]) : l.H[c] == g && e.push(l); } return d.length > 0 ? d : e; }; var lc = function (a) { return a.indexOf('.') == 0 ? a.substr(1) : a; }; var id = function () {
    const a = []; let b = xa().split('.');
    if (b.length == 4) { var c = b[b.length - 1]; if (parseInt(c, 10) == c) return ['none']; } for (c = b.length - 2; c >= 0; c--)a.push(b.slice(c).join('.')); b = M.location.hostname; eb.test(b) || vc.test(b) || a.push('none'); return a;
  }; var kc = function (a) { if (!a) return '/'; a.length > 1 && a.lastIndexOf('/') == a.length - 1 && (a = a.substr(0, a.length - 1)); a.indexOf('/') != 0 && (a = `/${a}`); return a; }; var jc = function (a) { a = kc(a); return a == '/' ? 1 : a.split('/').length; }; var le = function (a) { a.ta && J(77); a.na && J(74); a.pa && J(73); a.ua && J(69); }; function Xc(a, b, c) { b == 'none' && (b = ''); const d = []; const e = Ca(a); a = a == '__utma' ? 6 : 2; for (let g = 0; g < e.length; g++) { const ca = (`${e[g]}`).split('.'); ca.length >= a && d.push({ hash: ca[0], R: e[g], O: ca }); } if (d.length != 0) return d.length == 1 ? d[0] : Zc(b, d) || Zc(c, d) || Zc(null, d) || d[0]; } function Zc(a, b) { if (a == null) var c = a = 1; else c = La(a), a = La(D(a, '.') ? a.substring(1) : `.${a}`); for (let d = 0; d < b.length; d++) if (b[d].hash == c || b[d].hash == a) return b[d]; } const Jc = new RegExp(/^https?:\/\/([^\/:]+)/); var De = O.google_tag_data.glBridge; const Kc = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/; const od = /(.*)([?&#])(?:_gac=[^&#]*)(?:&?)(.*)/; function Bc(a) { if (a.get(Ze)) return J(35), De.generate($e(a)); let b = P(a, Q); const c = P(a, I) || ''; b = `_ga=2.${K(`${pa(c + b, 0)}.${c}-${b}`)}`; (a = af(a)) ? (J(44), a = `&_gac=1.${K([pa(a.qa, 0), a.timestamp, a.qa].join('.'))}`) : a = ''; return b + a; }
  function Ic(a, b) {
    const c = new Date(); const d = O.navigator; const
      e = d.plugins || []; a = [a, d.userAgent, c.getTimezoneOffset(), c.getYear(), c.getDate(), c.getHours(), c.getMinutes() + b]; for (b = 0; b < e.length; ++b)a.push(e[b].description); return La(a.join('.'));
  } function pa(a, b) {
    const c = new Date(); const d = O.navigator; const
      e = c.getHours() + Math.floor((c.getMinutes() + b) / 60); return La([a, d.userAgent, d.language || '', c.getTimezoneOffset(), c.getYear(), c.getDate() + Math.floor(e / 24), (24 + e) % 24, (60 + c.getMinutes() + b) % 60].join('.'));
  }
  const Dc = function (a) { J(48); this.target = a; this.T = !1; }; Dc.prototype.ca = function (a, b) { if (a) { if (this.target.get(Ze)) return De.decorate($e(this.target), a, b); if (a.tagName) { if (a.tagName.toLowerCase() == 'a') { a.href && (a.href = qd(this, a.href, b)); return; } if (a.tagName.toLowerCase() == 'form') return rd(this, a); } if (typeof a === 'string') return qd(this, a, b); } };
  var qd = function (a, b, c) { let d = Kc.exec(b); d && d.length >= 3 && (b = d[1] + (d[3] ? d[2] + d[3] : '')); (d = od.exec(b)) && d.length >= 3 && (b = d[1] + (d[3] ? d[2] + d[3] : '')); a = a.target.get('linkerParam'); const e = b.indexOf('?'); d = b.indexOf('#'); c ? b += (d == -1 ? '#' : '&') + a : (c = e == -1 ? '?' : '&', b = d == -1 ? b + (c + a) : b.substring(0, d) + c + a + b.substring(d)); b = b.replace(/&+_ga=/, '&_ga='); return b = b.replace(/&+_gac=/, '&_gac='); }; var rd = function (a, b) {
    if (b && b.action) {
      if (b.method.toLowerCase() == 'get') {
        a = a.target.get('linkerParam').split('&'); for (let c = 0; c < a.length; c++) {
          let d = a[c].split('='); const e = d[1]; d = d[0]; for (var g = b.childNodes || [], ca = !1, l = 0; l < g.length; l++) if (g[l].name == d) { g[l].setAttribute('value', e); ca = !0; break; }ca || (g = M.createElement('input'), g.setAttribute('type', 'hidden'), g.setAttribute('name', d), g.setAttribute('value', e), b.appendChild(g));
        }
      } else b.method.toLowerCase() == 'post' && (b.action = qd(a, b.action));
    }
  };
  Dc.prototype.S = function (a, b, c) {
    function d(g) { try { g = g || O.event; a: { let ca = g.target || g.srcElement; for (g = 100; ca && g > 0;) { if (ca.href && ca.nodeName.match(/^a(?:rea)?$/i)) { var l = ca; break a; }ca = ca.parentNode; g--; }l = {}; }(l.protocol == 'http:' || l.protocol == 'https:') && sd(a, l.hostname || '') && l.href && (l.href = qd(e, l.href, b)); } catch (k) { J(26); } } var e = this; this.target.get(Ze) ? De.auto(() => $e(e.target), a, b ? 'fragment' : '', c) : (this.T || (this.T = !0, L(M, 'mousedown', d, !1), L(M, 'keyup', d, !1)), c && L(M, 'submit', (g) => {
      g = g || O.event; if ((g = g.target || g.srcElement) && g.action) { const ca = g.action.match(Jc); ca && sd(a, ca[1]) && rd(e, g); }
    }));
  }; function sd(a, b) { if (b == M.location.hostname) return !1; for (let c = 0; c < a.length; c++) if (a[c] instanceof RegExp) { if (a[c].test(b)) return !0; } else if (b.indexOf(a[c]) >= 0) return !0; return !1; } function ke(a, b) { return b != Ic(a, 0) && b != Ic(a, -1) && b != Ic(a, -2) && b != pa(a, 0) && b != pa(a, -1) && b != pa(a, -2); } function $e(a) { const b = af(a); return { _ga: a.get(Q), _gid: a.get(I) || void 0, _gac: b ? [b.qa, b.timestamp].join('.') : void 0 }; }
  function af(a) { function b(e) { return void 0 == e || e === '' ? 0 : Number(e); } const c = a.get(ce); if (c && a.get(je)) { const d = b(a.get(fe)); if (1E3 * d + b(a.get(he)) <= (new Date()).getTime())J(76); else return { timestamp: d, qa: c }; } } const p = /^(GTM|OPT)-[A-Z0-9]+$/; const q = /;_gaexp=[^;]*/g; const r = /;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g; const Aa = /^https?:\/\/[\w\-.]+\.google.com(:\d+)?\/optimize\/opt-launch\.html\?.*$/; const t = function (a) { function b(d, e) { e && (c += `&${d}=${K(e)}`); } var c = `https://www.google-analytics.com/gtm/js?id=${K(a.id)}`; a.B != 'dataLayer' && b('l', a.B); b('t', a.target); b('cid', a.clientId); b('cidt', a.ka); b('gac', a.la); b('aip', a.ia); a.sync && b('m', 'sync'); b('cycle', a.G); a.qa && b('gclid', a.qa); Aa.test(M.referrer) && b('cb', String(hd())); return c; }; const Jd = function (a, b, c) { this.aa = b; (b = c) || (b = (b = P(a, V)) && b != 't0' ? Wd.test(b) ? `_gat_${Cc(P(a, Na))}` : `_gat_${Cc(b)}` : '_gat'); this.Y = b; this.ra = null; }; const Rd = function (a, b) { const c = b.get(Wb); b.set(Wb, (e) => { Pd(a, e, ed); Pd(a, e, ia); const g = c(e); Qd(a, e); return g; }); const d = b.get(Xb); b.set(Xb, (e) => { const g = d(e); if (se(e)) { if (ne() !== H(a, e)) { J(80); const ca = { U: re(a, e, 1), google: re(a, e, 2), count: 0 }; pe('https://stats.g.doubleclick.net/j/collect', ca.U, ca); } else ta(re(a, e, 0)); e.set(ed, '', !0); } return g; }); }; var Pd = function (a, b, c) {
    !1 === b.get(Ud)
|| b.get(c) || (Ca(a.Y)[0] == '1' ? b.set(c, '', !0) : b.set(c, `${hd()}`, !0));
  }; var Qd = function (a, b) { se(b) && zc(a.Y, '1', P(b, Yb), P(b, W), P(b, Na), 6E4, P(b, Be)); }; var se = function (a) { return !!a.get(ed) && !1 !== a.get(Ud); }; var re = function (a, b, c) {
    const d = new ee(); const
      e = function (ca) { $a(ca).F && d.set($a(ca).F, b.get(ca)); }; e(hb); e(ib); e(Na); e(Q); e(ed); if (c == 0 || c == 1)e(Ad), e(ia), e(I); d.set($a(ld).F, Td(b)); let g = ''; d.map((ca, l) => { g += `${K(ca)}=`; g += `${K(`${l}`)}&`; }); g += `z=${hd()}`; c == 0 ? g = a.aa + g : c == 1 ? g = `t=dc&aip=1&_r=3&${g}` : c == 2 && (g = `t=sr&aip=1&_r=4&slf_rd=1&${
      g}`); return g;
  }; var H = function (a, b) { a.ra === null && (a.ra = Ed(b) === 1, a.ra && J(33)); return a.ra; }; var Wd = /^gtm\d+$/; const fd = function (a, b) { a = a.b; if (!a.get('dcLoaded')) { const c = new $c(Dd(a)); c.set(29); a.set(Gd, c.w); b = b || {}; let d; b[U] && (d = Cc(b[U])); b = new Jd(a, 'https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&', d); Rd(b, a); a.set('dcLoaded', !0); } }; const Sd = function (a) { if (!a.get('dcLoaded') && a.get(ac) == 'cookie') { const b = new Jd(a); Pd(b, a, ed); Pd(b, a, ia); Qd(b, a); if (se(a)) { const c = ne() !== H(b, a); a.set(Md, 1, !0); c ? (J(79), a.set(ad, 'd', !0), a.set(qe, { U: re(b, a, 1), google: re(b, a, 2), count: 0 }, !0)) : a.set(ad, 'b', !0); } } }; const Lc = function () { const a = O.gaGlobal = O.gaGlobal || {}; return a.hid = a.hid || hd(); }; var wb = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/; const pc = function (a) {
    function b(e, g) { d.b.data.set(e, g); } function c(e, g) { b(e, g); d.filters.add(e); } var d = this; this.b = new Ya(); this.filters = new Ha(); b(V, a[V]); b(Na, sa(a[Na])); b(U, a[U]); b(W, a[W] || xa()); b(Yb, a[Yb]); b(Zb, a[Zb]); b(Hd, a[Hd]); b(Be, a[Be]); b($b, a[$b]); b(Wc, a[Wc]); b(bc, a[bc]); b(cc, a[cc]); b(Ka, a[Ka]); b(dc, a[dc]); b(ec, a[ec]); b(ac, a[ac]); b(Ad, a[Ad]); b(n, a[n]); b(Kd, a[Kd]); b(je, a[je]); b(Ze, a[Ze]); b(oe, a[oe]); b(hb, 1); b(ib, 'j81'); c(Qb, Ma); c(oa, ua); c(dd, cd); c(Rb, Oa); c(md, vb);
    c(Sb, nc); c(Uc, Yc); c(Tb, Ja); c(Vb, Ta); c(Vc, Hc); c(zd, yd); c(Ld, Sd); c(Wb, Pa); c(Xb, Sa); c(Cd, Fd(this)); pd(this.b); td(this.b, a[Q]); this.b.set(jb, Lc());
  }; var td = function (a, b) {
    let c = P(a, U); a.data.set(la, c == '_ga' ? '_gid' : `${c}_gid`); if (P(a, ac) == 'cookie') {
      hc = !1; c = Ca(P(a, U)); c = Xd(a, c); if (!c) { c = P(a, W); var d = P(a, $b) || xa(); c = Xc('__utma', d, c); void 0 != c ? (J(10), c = `${c.O[1]}.${c.O[2]}`) : c = void 0; }c && (hc = !0); if (d = c && !a.get(Hd)) {
        if (d = c.split('.'), d.length != 2)d = !1; else if (d = Number(d[1])) { var e = R(a, Zb); d = d + e < (new Date()).getTime() / 1E3; } else {
          d = !1;
        }
      }d && (c = void 0); c && (a.data.set(xd, c), a.data.set(Q, c), (c = uc(a)) && a.data.set(I, c)); if (a.get(je) && (c = a.get(ce), d = a.get(ie), !c || d && d != 'aw.ds')) {
        c = {}; if (M) {
          d = []; e = M.cookie.split(';'); for (var g = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, ca = 0; ca < e.length; ca++) { const l = e[ca].match(g); l && d.push({ ja: l[1], value: l[2] }); }e = {}; if (d && d.length) for (g = 0; g < d.length; g++)(ca = d[g].value.split('.'), ca[0] != '1' || ca.length != 3) ? c && (c.na = !0) : ca[1] && (e[d[g].ja] ? c && (c.pa = !0) : e[d[g].ja] = [], e[d[g].ja].push({ timestamp: ca[1], qa: ca[2] }));
          d = e;
        } else d = {}; d = d[P(a, Na)]; le(c); d && d.length != 0 && (c = d[0], a.data.set(fe, c.timestamp), a.data.set(ce, c.qa));
      }
    } if (a.get(Hd) && (c = be('_ga', !!a.get(cc)), g = be('_gl', !!a.get(cc)), d = De.get(a.get(cc)), e = d._ga, g && g.indexOf('_ga*') > 0 && !e && J(30), g = d.gclid, ca = d._gac, c || e || g || ca)) {
      if (c && e && J(36), a.get(bc) || ye(a.get(Kd))) {
        if (e && (J(38), a.data.set(Q, e), d._gid && (J(51), a.data.set(I, d._gid))), g ? (J(82), a.data.set(ce, g), d.gclsrc && a.data.set(ie, d.gclsrc)) : ca && (d = ca.split('.')) && d.length === 2 && (J(37), a.data.set(ce, d[0]), a.data.set(
          fe,
          d[1],
        )), c) {
          b:if (d = c.indexOf('.'), d == -1)J(22); else {
            e = c.substring(0, d); g = c.substring(d + 1); d = g.indexOf('.'); c = g.substring(0, d); g = g.substring(d + 1); if (e == '1') { if (d = g, ke(d, c)) { J(23); break b; } } else if (e == '2') { d = g.indexOf('-'); e = ''; d > 0 ? (e = g.substring(0, d), d = g.substring(d + 1)) : d = g.substring(1); if (ke(e + d, c)) { J(53); break b; }e && (J(2), a.data.set(I, e)); } else { J(22); break b; }J(11); a.data.set(Q, d); if (c = be('_gac', !!a.get(cc))) {
              c = c.split('.'), c[0] != '1' || c.length != 4 ? J(72) : ke(c[3], c[1]) ? J(71) : (a.data.set(ce, c[3]), a.data.set(
                fe,
                c[2],
              ), J(70));
            }
          }
        }
      } else J(21);
    } b && (J(9), a.data.set(Q, K(b))); a.get(Q) || ((b = (b = O.gaGlobal && O.gaGlobal.vid) && b.search(jd) != -1 ? b : void 0) ? (J(17), a.data.set(Q, b)) : (J(8), a.data.set(Q, ra()))); a.get(I) || (J(3), a.data.set(I, ra())); mc(a);
  }; var pd = function (a) {
    let b = O.navigator; let c = O.screen; let d = M.location; a.set(lb, ya(!!a.get(ec), !!a.get(Kd))); if (d) { var e = d.pathname || ''; e.charAt(0) != '/' && (J(31), e = `/${e}`); a.set(kb, `${d.protocol}//${d.hostname}${e}${d.search}`); }c && a.set(qb, `${c.width}x${c.height}`); c && a.set(pb, `${c.colorDepth}-bit`); c = M.documentElement;
    const g = (e = M.body) && e.clientWidth && e.clientHeight; let ca = []; c && c.clientWidth && c.clientHeight && (M.compatMode === 'CSS1Compat' || !g) ? ca = [c.clientWidth, c.clientHeight] : g && (ca = [e.clientWidth, e.clientHeight]); c = ca[0] <= 0 || ca[1] <= 0 ? '' : ca.join('x'); a.set(rb, c); a.set(tb, fc()); a.set(ob, M.characterSet || M.charset); a.set(sb, b && typeof b.javaEnabled === 'function' && b.javaEnabled() || !1); a.set(nb, (b && (b.language || b.browserLanguage) || '').toLowerCase()); a.data.set(ce, be('gclid', !0)); a.data.set(ie, be('gclsrc', !0)); a.data.set(
      fe,
      Math.round((new Date()).getTime() / 1E3),
    ); if (d && a.get(cc) && (b = M.location.hash)) { b = b.split(/[?&#]+/); d = []; for (c = 0; c < b.length; ++c)(D(b[c], 'utm_id') || D(b[c], 'utm_campaign') || D(b[c], 'utm_source') || D(b[c], 'utm_medium') || D(b[c], 'utm_term') || D(b[c], 'utm_content') || D(b[c], 'gclid') || D(b[c], 'dclid') || D(b[c], 'gclsrc')) && d.push(b[c]); d.length > 0 && (b = `#${d.join('&')}`, a.set(kb, a.get(kb) + b)); }
  }; pc.prototype.get = function (a) { return this.b.get(a); }; pc.prototype.set = function (a, b) { this.b.set(a, b); };
  const me = { pageview: [mb], event: [ub, xb, yb, zb], social: [Bb, Cb, Db], timing: [Mb, Nb, Pb, Ob] }; pc.prototype.send = function (a) { if (!(arguments.length < 1)) { if (typeof arguments[0] === 'string') { var b = arguments[0]; var c = [].slice.call(arguments, 1); } else b = arguments[0] && arguments[0][Va], c = arguments; b && (c = za(me[b] || [], c), c[Va] = b, this.b.set(c, void 0, !0), this.filters.D(this.b), this.b.data.m = {}); } }; pc.prototype.ma = function (a, b) { const c = this; u(a, c, b) || (v(a, () => { u(a, c, b); }), y(String(c.get(V)), a, void 0, b, !0)); }; const rc = function (a) { if (M.visibilityState == 'prerender') return !1; a(); return !0; }; const z = function (a) { if (!rc(a)) { J(16); let b = !1; const c = function () { if (!b && rc(a)) { b = !0; const d = c; const e = M; e.removeEventListener ? e.removeEventListener('visibilitychange', d, !1) : e.detachEvent && e.detachEvent('onvisibilitychange', d); } }; L(M, 'visibilitychange', c); } }; const te = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/; const sc = function (a) {
    if (ea(a[0])) this.u = a[0]; else {
      let b = te.exec(a[0]); b != null && b.length == 4 && (this.c = b[1] || 't0', this.K = b[2] || '', this.methodName = b[3], this.a = [].slice.call(a, 1), this.K || (this.A = this.methodName == 'create', this.i = this.methodName == 'require', this.g = this.methodName == 'provide', this.ba = this.methodName == 'remove'), this.i && (this.a.length >= 3 ? (this.X = this.a[1], this.W = this.a[2]) : this.a[1] && (qa(this.a[1]) ? this.X = this.a[1] : this.W = this.a[1]))); b = a[1]; a = a[2]; if (!this.methodName) throw 'abort';
      if (this.i && (!qa(b) || b == '')) throw 'abort'; if (this.g && (!qa(b) || b == '' || !ea(a))) throw 'abort'; if (ud(this.c) || ud(this.K)) throw 'abort'; if (this.g && this.c != 't0') throw 'abort';
    }
  }; function ud(a) { return a.indexOf('.') >= 0 || a.indexOf(':') >= 0; }let Yd; let Zd; let $d; let A; Yd = new ee(); $d = new ee(); A = new ee(); Zd = { ec: 45, ecommerce: 46, linkid: 47 };
  var u = function (a, b, c) { b == N || b.get(V); const d = Yd.get(a); if (!ea(d)) return !1; b.plugins_ = b.plugins_ || new ee(); if (b.plugins_.get(a)) return !0; b.plugins_.set(a, new d(b, c || {})); return !0; }; var y = function (a, b, c, d, e) {
    if (!ea(Yd.get(b)) && !$d.get(b)) {
      Zd.hasOwnProperty(b) && J(Zd[b]); a = N.j(a); if (p.test(b)) {
        J(52); if (!a) return !0; c = d || {}; d = { id: b, B: c.dataLayer || 'dataLayer', ia: !!a.get('anonymizeIp'), sync: e, G: !1 }; a.get('&gtm') == b && (d.G = !0); let g = String(a.get('name')); g != 't0' && (d.target = g); G(String(a.get('trackingId'))) || (d.clientId = String(a.get(Q)), d.ka = Number(a.get(n)), c = c.palindrome ? r : q, c = (c = M.cookie.replace(/^|(; +)/g, ';').match(c)) ? c.sort().join('').substring(1) : void 0, d.la = c, d.qa = E(a.b.get(kb) || '', 'gclid')); c = d.B; g = (new Date()).getTime(); O[c] = O[c] || []; g = { 'gtm.start': g }; e || (g.event = 'gtm.js'); O[c].push(g); c = t(d);
      }!c && Zd.hasOwnProperty(b) ? (J(39), c = `${b}.js`) : J(43); if (c) {
        if (a) { var ca = a.get(oe); qa(ca) || (ca = void 0); }c && c.indexOf('/') >= 0 || (c = (ca ? `${ca}/34` : `${bd(!1)}/plugins/ua/`) + c); ca = ae(c); a = ca.protocol; d = M.location.protocol; if ((a
== 'https:' || a == d || (a != 'http:' ? 0 : d == 'http:')) && B(ca)) { if (ca = ca.url)a = (a = M.querySelector && M.querySelector('script[nonce]') || null) ? a.nonce || a.getAttribute && a.getAttribute('nonce') || '' : '', e ? (e = '', a && Nd.test(a) && (e = ` nonce="${a}"`), f.test(ca) && M.write(`<script${e} src="${ca}">\x3c/script>`)) : (e = M.createElement('script'), e.type = 'text/javascript', e.async = !0, e.src = ca, a && e.setAttribute('nonce', a), ca = M.getElementsByTagName('script')[0], ca.parentNode.insertBefore(e, ca)); $d.set(b, !0); }
      }
    }
  }; var v = function (a, b) {
    const c = A.get(a)
|| []; c.push(b); A.set(a, c);
  }; const C = function (a, b) { Yd.set(a, b); b = A.get(a) || []; for (let c = 0; c < b.length; c++)b[c](); A.set(a, []); }; var B = function (a) { let b = ae(M.location.href); if (D(a.url, 'https://www.google-analytics.com/gtm/js?id=')) return !0; if (a.query || a.url.indexOf('?') >= 0 || a.path.indexOf('://') >= 0) return !1; if (a.host == b.host && a.port == b.port) return !0; b = a.protocol == 'http:' ? 80 : 443; return a.host == 'www.google-analytics.com' && (a.port || b) == b && D(a.path, '/plugins/') ? !0 : !1; }; var ae = function (a) {
    function b(l) {
      let k = l.hostname || ''; let w = k.indexOf(']') >= 0; k = k.split(w ? ']' : ':')[0].toLowerCase(); w && (k += ']'); w = (l.protocol || '').toLowerCase(); w = 1 * l.port || (w == 'http:' ? 80 : w == 'https:' ? 443 : ''); l = l.pathname || ''; D(l, '/') || (l = `/${l}`); return [k, `${w}`, l];
    } const c = M.createElement('a'); c.href = M.location.href; let d = (c.protocol || '').toLowerCase(); const e = b(c); const g = c.search || ''; const ca = `${d}//${e[0]}${e[1] ? `:${e[1]}` : ''}`; D(a, '//') ? a = d + a : D(a, '/') ? a = ca + a : !a || D(a, '?') ? a = ca + e[2] + (a || g) : a.split('/')[0].indexOf(':') < 0 && (a = `${ca + e[2].substring(0, e[2].lastIndexOf('/'))}/${a}`); c.href = a;
    d = b(c); return { protocol: (c.protocol || '').toLowerCase(), host: d[0], port: d[1], path: d[2], query: c.search || '', url: a || '' };
  }; var Z = { ga() { Z.f = []; } }; Z.ga(); Z.D = function (a) { let b = Z.J.apply(Z, arguments); b = Z.f.concat(b); for (Z.f = []; b.length > 0 && !Z.v(b[0]) && !(b.shift(), Z.f.length > 0););Z.f = Z.f.concat(b); }; Z.J = function (a) { for (var b = [], c = 0; c < arguments.length; c++) try { const d = new sc(arguments[c]); d.g ? C(d.a[0], d.a[1]) : (d.i && (d.ha = y(d.c, d.a[0], d.X, d.W)), b.push(d)); } catch (e) {} return b; };
  Z.v = function (a) { try { if (a.u)a.u.call(O, N.j('t0')); else { let b = a.c == gb ? N : N.j(a.c); if (a.A) { if (a.c == 't0' && (b = N.create.apply(N, a.a), b === null)) return !0; } else if (a.ba)N.remove(a.c); else if (b) if (a.i) { if (a.ha && (a.ha = y(a.c, a.a[0], a.X, a.W)), !u(a.a[0], b, a.W)) return !0; } else if (a.K) { const c = a.methodName; const d = a.a; const e = b.plugins_.get(a.K); e[c].apply(e, d); } else b[a.methodName].apply(b, a.a); } } catch (g) {} }; var N = function (a) { J(1); Z.D.apply(Z, [arguments]); }; N.h = {}; N.P = []; N.L = 0; N.ya = 0; N.answer = 42; const we = [Na, W, V]; N.create = function (a) { let b = za(we, [].slice.call(arguments)); b[V] || (b[V] = 't0'); let c = `${b[V]}`; if (N.h[c]) return N.h[c]; if (da(b)) return null; b = new pc(b); N.h[c] = b; N.P.push(b); c = qc().tracker_created; if (ea(c)) try { c(b); } catch (d) {} return b; }; N.remove = function (a) { for (let b = 0; b < N.P.length; b++) if (N.P[b].get(V) == a) { N.P.splice(b, 1); N.h[a] = null; break; } }; N.j = function (a) { return N.h[a]; }; N.getAll = function () { return N.P.slice(0); };
  N.N = function () {
    gb != 'ga' && J(49); let a = O[gb]; if (!a || a.answer != 42) {
      N.L = a && a.l; N.ya = 1 * new Date(); N.loaded = !0; let b = O[gb] = N; X('create', b, b.create); X('remove', b, b.remove); X('getByName', b, b.j, 5); X('getAll', b, b.getAll, 6); b = pc.prototype; X('get', b, b.get, 7); X('set', b, b.set, 4); X('send', b, b.send); X('requireSync', b, b.ma); b = Ya.prototype; X('get', b, b.get); X('set', b, b.set); if (M.location.protocol != 'https:' && !Ba) {
        a: {
          b = M.getElementsByTagName('script'); for (let c = 0; c < b.length && c < 100; c++) {
            const d = b[c].src; if (d && d.indexOf(`${bd(!0)
            }/analytics`) == 0) { b = !0; break a; }
          }b = !1;
        }b && (Ba = !0);
      }(O.gaplugins = O.gaplugins || {}).Linker = Dc; b = Dc.prototype; C('linker', Dc); X('decorate', b, b.ca, 20); X('autoLink', b, b.S, 25); C('displayfeatures', fd); C('adfeatures', fd); a = a && a.q; ka(a) ? Z.D.apply(N, a) : J(50);
    }
  }; N.da = function () { for (let a = N.getAll(), b = 0; b < a.length; b++)a[b].get(V); }; const ze = N.N; const Ae = O[gb]; Ae && Ae.r ? ze() : z(ze); z(() => { Z.D(['provide', 'render', ua]); });
}(window));
