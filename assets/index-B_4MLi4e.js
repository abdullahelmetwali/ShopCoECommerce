function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o)
  new MutationObserver((o) => {
    for (const n of o)
      if (n.type === 'childList')
        for (const i of n.addedNodes) i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i)
  }).observe(document, { childList: !0, subtree: !0 })
  function s(o) {
    const n = {}
    return (
      o.integrity && (n.integrity = o.integrity),
      o.referrerPolicy && (n.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (n.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (n.credentials = 'omit')
          : (n.credentials = 'same-origin'),
      n
    )
  }
  function r(o) {
    if (o.ep) return
    o.ep = !0
    const n = s(o)
    fetch(o.href, n)
  }
})()
/**
 * @vue/shared v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function br(e, t) {
  const s = new Set(e.split(','))
  return t ? (r) => s.has(r.toLowerCase()) : (r) => s.has(r)
}
const ie = {},
  At = [],
  ke = () => {},
  mi = () => !1,
  As = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  vr = (e) => e.startsWith('onUpdate:'),
  ge = Object.assign,
  xr = (e, t) => {
    const s = e.indexOf(t)
    s > -1 && e.splice(s, 1)
  },
  gi = Object.prototype.hasOwnProperty,
  J = (e, t) => gi.call(e, t),
  N = Array.isArray,
  Rt = (e) => Rs(e) === '[object Map]',
  Vo = (e) => Rs(e) === '[object Set]',
  U = (e) => typeof e == 'function',
  de = (e) => typeof e == 'string',
  Bt = (e) => typeof e == 'symbol',
  ce = (e) => e !== null && typeof e == 'object',
  qo = (e) => (ce(e) || U(e)) && U(e.then) && U(e.catch),
  Jo = Object.prototype.toString,
  Rs = (e) => Jo.call(e),
  Si = (e) => Rs(e).slice(8, -1),
  Yo = (e) => Rs(e) === '[object Object]',
  Pr = (e) => de(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Jt = br(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  $s = (e) => {
    const t = Object.create(null)
    return (s) => t[s] || (t[s] = e(s))
  },
  yi = /-(\w)/g,
  Ge = $s((e) => e.replace(yi, (t, s) => (s ? s.toUpperCase() : ''))),
  _i = /\B([A-Z])/g,
  vt = $s((e) => e.replace(_i, '-$1').toLowerCase()),
  Os = $s((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Vs = $s((e) => (e ? `on${Os(e)}` : '')),
  ht = (e, t) => !Object.is(e, t),
  ys = (e, t) => {
    for (let s = 0; s < e.length; s++) e[s](t)
  },
  Ls = (e, t, s) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: s })
  },
  ir = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let Jr
const Qo = () =>
  Jr ||
  (Jr =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function Lr(e) {
  if (N(e)) {
    const t = {}
    for (let s = 0; s < e.length; s++) {
      const r = e[s],
        o = de(r) ? vi(r) : Lr(r)
      if (o) for (const n in o) t[n] = o[n]
    }
    return t
  } else if (de(e) || ce(e)) return e
}
const Ci = /;(?![^(]*\))/g,
  wi = /:([^]+)/,
  bi = /\/\*[^]*?\*\//g
function vi(e) {
  const t = {}
  return (
    e
      .replace(bi, '')
      .split(Ci)
      .forEach((s) => {
        if (s) {
          const r = s.split(wi)
          r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
      }),
    t
  )
}
function V(e) {
  let t = ''
  if (de(e)) t = e
  else if (N(e))
    for (let s = 0; s < e.length; s++) {
      const r = V(e[s])
      r && (t += r + ' ')
    }
  else if (ce(e)) for (const s in e) e[s] && (t += s + ' ')
  return t.trim()
}
const xi = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Pi = br(xi)
function Zo(e) {
  return !!e || e === ''
}
const F = (e) =>
    de(e)
      ? e
      : e == null
        ? ''
        : N(e) || (ce(e) && (e.toString === Jo || !U(e.toString)))
          ? JSON.stringify(e, en, 2)
          : String(e),
  en = (e, t) =>
    t && t.__v_isRef
      ? en(e, t.value)
      : Rt(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (s, [r, o], n) => ((s[qs(r, n) + ' =>'] = o), s),
              {}
            )
          }
        : Vo(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((s) => qs(s)) }
          : Bt(t)
            ? qs(t)
            : ce(t) && !N(t) && !Yo(t)
              ? String(t)
              : t,
  qs = (e, t = '') => {
    var s
    return Bt(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  }
/**
 * @vue/reactivity v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ae
class tn {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Ae),
      !t && Ae && (this.index = (Ae.scopes || (Ae.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const s = Ae
      try {
        return (Ae = this), t()
      } finally {
        Ae = s
      }
    }
  }
  on() {
    Ae = this
  }
  off() {
    Ae = this.parent
  }
  stop(t) {
    if (this._active) {
      let s, r
      for (s = 0, r = this.effects.length; s < r; s++) this.effects[s].stop()
      for (s = 0, r = this.cleanups.length; s < r; s++) this.cleanups[s]()
      if (this.scopes) for (s = 0, r = this.scopes.length; s < r; s++) this.scopes[s].stop(!0)
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop()
        o && o !== this && ((this.parent.scopes[this.index] = o), (o.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function Li(e) {
  return new tn(e)
}
function Ti(e, t = Ae) {
  t && t.active && t.effects.push(e)
}
function Mi() {
  return Ae
}
let _t
class Tr {
  constructor(t, s, r, o) {
    ;(this.fn = t),
      (this.trigger = s),
      (this.scheduler = r),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      Ti(this, o)
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      ;(this._dirtyLevel = 1), xt()
      for (let t = 0; t < this._depsLength; t++) {
        const s = this.deps[t]
        if (s.computed && (Ii(s.computed), this._dirtyLevel >= 4)) break
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Pt()
    }
    return this._dirtyLevel >= 4
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn()
    let t = lt,
      s = _t
    try {
      return (lt = !0), (_t = this), this._runnings++, Yr(this), this.fn()
    } finally {
      Qr(this), this._runnings--, (_t = s), (lt = t)
    }
  }
  stop() {
    var t
    this.active &&
      (Yr(this), Qr(this), (t = this.onStop) == null || t.call(this), (this.active = !1))
  }
}
function Ii(e) {
  return e.value
}
function Yr(e) {
  e._trackId++, (e._depsLength = 0)
}
function Qr(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) sn(e.deps[t], e)
    e.deps.length = e._depsLength
  }
}
function sn(e, t) {
  const s = e.get(t)
  s !== void 0 && t._trackId !== s && (e.delete(t), e.size === 0 && e.cleanup())
}
let lt = !0,
  lr = 0
const rn = []
function xt() {
  rn.push(lt), (lt = !1)
}
function Pt() {
  const e = rn.pop()
  lt = e === void 0 ? !0 : e
}
function Mr() {
  lr++
}
function Ir() {
  for (lr--; !lr && ar.length; ) ar.shift()()
}
function on(e, t, s) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId)
    const r = e.deps[e._depsLength]
    r !== t ? (r && sn(r, e), (e.deps[e._depsLength++] = t)) : e._depsLength++
  }
}
const ar = []
function nn(e, t, s) {
  Mr()
  for (const r of e.keys()) {
    let o
    r._dirtyLevel < t &&
      (o ?? (o = e.get(r) === r._trackId)) &&
      (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0), (r._dirtyLevel = t)),
      r._shouldSchedule &&
        (o ?? (o = e.get(r) === r._trackId)) &&
        (r.trigger(),
        (!r._runnings || r.allowRecurse) &&
          r._dirtyLevel !== 2 &&
          ((r._shouldSchedule = !1), r.scheduler && ar.push(r.scheduler)))
  }
  Ir()
}
const ln = (e, t) => {
    const s = new Map()
    return (s.cleanup = e), (s.computed = t), s
  },
  cr = new WeakMap(),
  Ct = Symbol(''),
  hr = Symbol('')
function Pe(e, t, s) {
  if (lt && _t) {
    let r = cr.get(e)
    r || cr.set(e, (r = new Map()))
    let o = r.get(s)
    o || r.set(s, (o = ln(() => r.delete(s)))), on(_t, o)
  }
}
function qe(e, t, s, r, o, n) {
  const i = cr.get(e)
  if (!i) return
  let c = []
  if (t === 'clear') c = [...i.values()]
  else if (s === 'length' && N(e)) {
    const l = Number(r)
    i.forEach((u, f) => {
      ;(f === 'length' || (!Bt(f) && f >= l)) && c.push(u)
    })
  } else
    switch ((s !== void 0 && c.push(i.get(s)), t)) {
      case 'add':
        N(e) ? Pr(s) && c.push(i.get('length')) : (c.push(i.get(Ct)), Rt(e) && c.push(i.get(hr)))
        break
      case 'delete':
        N(e) || (c.push(i.get(Ct)), Rt(e) && c.push(i.get(hr)))
        break
      case 'set':
        Rt(e) && c.push(i.get(Ct))
        break
    }
  Mr()
  for (const l of c) l && nn(l, 4)
  Ir()
}
const ki = br('__proto__,__v_isRef,__isVue'),
  an = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(Bt)
  ),
  Zr = Ei()
function Ei() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...s) {
        const r = Q(this)
        for (let n = 0, i = this.length; n < i; n++) Pe(r, 'get', n + '')
        const o = r[t](...s)
        return o === -1 || o === !1 ? r[t](...s.map(Q)) : o
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...s) {
        xt(), Mr()
        const r = Q(this)[t].apply(this, s)
        return Ir(), Pt(), r
      }
    }),
    e
  )
}
function Ai(e) {
  const t = Q(this)
  return Pe(t, 'has', e), t.hasOwnProperty(e)
}
class cn {
  constructor(t = !1, s = !1) {
    ;(this._isReadonly = t), (this._isShallow = s)
  }
  get(t, s, r) {
    const o = this._isReadonly,
      n = this._isShallow
    if (s === '__v_isReactive') return !o
    if (s === '__v_isReadonly') return o
    if (s === '__v_isShallow') return n
    if (s === '__v_raw')
      return r === (o ? (n ? Ui : dn) : n ? fn : un).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(r)
        ? t
        : void 0
    const i = N(t)
    if (!o) {
      if (i && J(Zr, s)) return Reflect.get(Zr, s, r)
      if (s === 'hasOwnProperty') return Ai
    }
    const c = Reflect.get(t, s, r)
    return (Bt(s) ? an.has(s) : ki(s)) || (o || Pe(t, 'get', s), n)
      ? c
      : Le(c)
        ? i && Pr(s)
          ? c
          : c.value
        : ce(c)
          ? o
            ? mn(c)
            : Xs(c)
          : c
  }
}
class hn extends cn {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, s, r, o) {
    let n = t[s]
    if (!this._isShallow) {
      const l = Ft(n)
      if ((!Ts(r) && !Ft(r) && ((n = Q(n)), (r = Q(r))), !N(t) && Le(n) && !Le(r)))
        return l ? !1 : ((n.value = r), !0)
    }
    const i = N(t) && Pr(s) ? Number(s) < t.length : J(t, s),
      c = Reflect.set(t, s, r, o)
    return t === Q(o) && (i ? ht(r, n) && qe(t, 'set', s, r) : qe(t, 'add', s, r)), c
  }
  deleteProperty(t, s) {
    const r = J(t, s)
    t[s]
    const o = Reflect.deleteProperty(t, s)
    return o && r && qe(t, 'delete', s, void 0), o
  }
  has(t, s) {
    const r = Reflect.has(t, s)
    return (!Bt(s) || !an.has(s)) && Pe(t, 'has', s), r
  }
  ownKeys(t) {
    return Pe(t, 'iterate', N(t) ? 'length' : Ct), Reflect.ownKeys(t)
  }
}
class Ri extends cn {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, s) {
    return !0
  }
  deleteProperty(t, s) {
    return !0
  }
}
const $i = new hn(),
  Oi = new Ri(),
  Fi = new hn(!0),
  kr = (e) => e,
  Fs = (e) => Reflect.getPrototypeOf(e)
function us(e, t, s = !1, r = !1) {
  e = e.__v_raw
  const o = Q(e),
    n = Q(t)
  s || (ht(t, n) && Pe(o, 'get', t), Pe(o, 'get', n))
  const { has: i } = Fs(o),
    c = r ? kr : s ? $r : rs
  if (i.call(o, t)) return c(e.get(t))
  if (i.call(o, n)) return c(e.get(n))
  e !== o && e.get(t)
}
function fs(e, t = !1) {
  const s = this.__v_raw,
    r = Q(s),
    o = Q(e)
  return (
    t || (ht(e, o) && Pe(r, 'has', e), Pe(r, 'has', o)), e === o ? s.has(e) : s.has(e) || s.has(o)
  )
}
function ds(e, t = !1) {
  return (e = e.__v_raw), !t && Pe(Q(e), 'iterate', Ct), Reflect.get(e, 'size', e)
}
function eo(e) {
  e = Q(e)
  const t = Q(this)
  return Fs(t).has.call(t, e) || (t.add(e), qe(t, 'add', e, e)), this
}
function to(e, t) {
  t = Q(t)
  const s = Q(this),
    { has: r, get: o } = Fs(s)
  let n = r.call(s, e)
  n || ((e = Q(e)), (n = r.call(s, e)))
  const i = o.call(s, e)
  return s.set(e, t), n ? ht(t, i) && qe(s, 'set', e, t) : qe(s, 'add', e, t), this
}
function so(e) {
  const t = Q(this),
    { has: s, get: r } = Fs(t)
  let o = s.call(t, e)
  o || ((e = Q(e)), (o = s.call(t, e))), r && r.call(t, e)
  const n = t.delete(e)
  return o && qe(t, 'delete', e, void 0), n
}
function ro() {
  const e = Q(this),
    t = e.size !== 0,
    s = e.clear()
  return t && qe(e, 'clear', void 0, void 0), s
}
function ps(e, t) {
  return function (r, o) {
    const n = this,
      i = n.__v_raw,
      c = Q(i),
      l = t ? kr : e ? $r : rs
    return !e && Pe(c, 'iterate', Ct), i.forEach((u, f) => r.call(o, l(u), l(f), n))
  }
}
function ms(e, t, s) {
  return function (...r) {
    const o = this.__v_raw,
      n = Q(o),
      i = Rt(n),
      c = e === 'entries' || (e === Symbol.iterator && i),
      l = e === 'keys' && i,
      u = o[e](...r),
      f = s ? kr : t ? $r : rs
    return (
      !t && Pe(n, 'iterate', l ? hr : Ct),
      {
        next() {
          const { value: m, done: p } = u.next()
          return p ? { value: m, done: p } : { value: c ? [f(m[0]), f(m[1])] : f(m), done: p }
        },
        [Symbol.iterator]() {
          return this
        }
      }
    )
  }
}
function et(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function Xi() {
  const e = {
      get(n) {
        return us(this, n)
      },
      get size() {
        return ds(this)
      },
      has: fs,
      add: eo,
      set: to,
      delete: so,
      clear: ro,
      forEach: ps(!1, !1)
    },
    t = {
      get(n) {
        return us(this, n, !1, !0)
      },
      get size() {
        return ds(this)
      },
      has: fs,
      add: eo,
      set: to,
      delete: so,
      clear: ro,
      forEach: ps(!1, !0)
    },
    s = {
      get(n) {
        return us(this, n, !0)
      },
      get size() {
        return ds(this, !0)
      },
      has(n) {
        return fs.call(this, n, !0)
      },
      add: et('add'),
      set: et('set'),
      delete: et('delete'),
      clear: et('clear'),
      forEach: ps(!0, !1)
    },
    r = {
      get(n) {
        return us(this, n, !0, !0)
      },
      get size() {
        return ds(this, !0)
      },
      has(n) {
        return fs.call(this, n, !0)
      },
      add: et('add'),
      set: et('set'),
      delete: et('delete'),
      clear: et('clear'),
      forEach: ps(!0, !0)
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((n) => {
      ;(e[n] = ms(n, !1, !1)),
        (s[n] = ms(n, !0, !1)),
        (t[n] = ms(n, !1, !0)),
        (r[n] = ms(n, !0, !0))
    }),
    [e, s, t, r]
  )
}
const [zi, Di, Bi, ji] = Xi()
function Er(e, t) {
  const s = t ? (e ? ji : Bi) : e ? Di : zi
  return (r, o, n) =>
    o === '__v_isReactive'
      ? !e
      : o === '__v_isReadonly'
        ? e
        : o === '__v_raw'
          ? r
          : Reflect.get(J(s, o) && o in r ? s : r, o, n)
}
const Wi = { get: Er(!1, !1) },
  Ni = { get: Er(!1, !0) },
  Hi = { get: Er(!0, !1) },
  un = new WeakMap(),
  fn = new WeakMap(),
  dn = new WeakMap(),
  Ui = new WeakMap()
function Gi(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function Ki(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Gi(Si(e))
}
function Xs(e) {
  return Ft(e) ? e : Ar(e, !1, $i, Wi, un)
}
function pn(e) {
  return Ar(e, !1, Fi, Ni, fn)
}
function mn(e) {
  return Ar(e, !0, Oi, Hi, dn)
}
function Ar(e, t, s, r, o) {
  if (!ce(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const n = o.get(e)
  if (n) return n
  const i = Ki(e)
  if (i === 0) return e
  const c = new Proxy(e, i === 2 ? r : s)
  return o.set(e, c), c
}
function $t(e) {
  return Ft(e) ? $t(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Ft(e) {
  return !!(e && e.__v_isReadonly)
}
function Ts(e) {
  return !!(e && e.__v_isShallow)
}
function gn(e) {
  return $t(e) || Ft(e)
}
function Q(e) {
  const t = e && e.__v_raw
  return t ? Q(t) : e
}
function Rr(e) {
  return Object.isExtensible(e) && Ls(e, '__v_skip', !0), e
}
const rs = (e) => (ce(e) ? Xs(e) : e),
  $r = (e) => (ce(e) ? mn(e) : e)
class Sn {
  constructor(t, s, r, o) {
    ;(this.getter = t),
      (this._setter = s),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new Tr(
        () => t(this._value),
        () => _s(this, this.effect._dirtyLevel === 2 ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !o),
      (this.__v_isReadonly = r)
  }
  get value() {
    const t = Q(this)
    return (
      (!t._cacheable || t.effect.dirty) && ht(t._value, (t._value = t.effect.run())) && _s(t, 4),
      yn(t),
      t.effect._dirtyLevel >= 2 && _s(t, 2),
      t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
  get _dirty() {
    return this.effect.dirty
  }
  set _dirty(t) {
    this.effect.dirty = t
  }
}
function Vi(e, t, s = !1) {
  let r, o
  const n = U(e)
  return n ? ((r = e), (o = ke)) : ((r = e.get), (o = e.set)), new Sn(r, o, n || !o, s)
}
function yn(e) {
  var t
  lt &&
    _t &&
    ((e = Q(e)),
    on(
      _t,
      (t = e.dep) != null ? t : (e.dep = ln(() => (e.dep = void 0), e instanceof Sn ? e : void 0))
    ))
}
function _s(e, t = 4, s) {
  e = Q(e)
  const r = e.dep
  r && nn(r, t)
}
function Le(e) {
  return !!(e && e.__v_isRef === !0)
}
function _n(e) {
  return Cn(e, !1)
}
function qi(e) {
  return Cn(e, !0)
}
function Cn(e, t) {
  return Le(e) ? e : new Ji(e, t)
}
class Ji {
  constructor(t, s) {
    ;(this.__v_isShallow = s),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = s ? t : Q(t)),
      (this._value = s ? t : rs(t))
  }
  get value() {
    return yn(this), this._value
  }
  set value(t) {
    const s = this.__v_isShallow || Ts(t) || Ft(t)
    ;(t = s ? t : Q(t)),
      ht(t, this._rawValue) && ((this._rawValue = t), (this._value = s ? t : rs(t)), _s(this, 4))
  }
}
function Re(e) {
  return Le(e) ? e.value : e
}
const Yi = {
  get: (e, t, s) => Re(Reflect.get(e, t, s)),
  set: (e, t, s, r) => {
    const o = e[t]
    return Le(o) && !Le(s) ? ((o.value = s), !0) : Reflect.set(e, t, s, r)
  }
}
function wn(e) {
  return $t(e) ? e : new Proxy(e, Yi)
}
/**
 * @vue/runtime-core v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function at(e, t, s, r) {
  try {
    return r ? e(...r) : e()
  } catch (o) {
    zs(o, t, s)
  }
}
function Xe(e, t, s, r) {
  if (U(e)) {
    const n = at(e, t, s, r)
    return (
      n &&
        qo(n) &&
        n.catch((i) => {
          zs(i, t, s)
        }),
      n
    )
  }
  const o = []
  for (let n = 0; n < e.length; n++) o.push(Xe(e[n], t, s, r))
  return o
}
function zs(e, t, s, r = !0) {
  const o = t ? t.vnode : null
  if (t) {
    let n = t.parent
    const i = t.proxy,
      c = `https://vuejs.org/error-reference/#runtime-${s}`
    for (; n; ) {
      const u = n.ec
      if (u) {
        for (let f = 0; f < u.length; f++) if (u[f](e, i, c) === !1) return
      }
      n = n.parent
    }
    const l = t.appContext.config.errorHandler
    if (l) {
      at(l, null, 10, [e, i, c])
      return
    }
  }
  Qi(e, s, o, r)
}
function Qi(e, t, s, r = !0) {
  console.error(e)
}
let os = !1,
  ur = !1
const ye = []
let Ue = 0
const Ot = []
let st = null,
  gt = 0
const bn = Promise.resolve()
let Or = null
function vn(e) {
  const t = Or || bn
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Zi(e) {
  let t = Ue + 1,
    s = ye.length
  for (; t < s; ) {
    const r = (t + s) >>> 1,
      o = ye[r],
      n = ns(o)
    n < e || (n === e && o.pre) ? (t = r + 1) : (s = r)
  }
  return t
}
function Fr(e) {
  ;(!ye.length || !ye.includes(e, os && e.allowRecurse ? Ue + 1 : Ue)) &&
    (e.id == null ? ye.push(e) : ye.splice(Zi(e.id), 0, e), xn())
}
function xn() {
  !os && !ur && ((ur = !0), (Or = bn.then(Ln)))
}
function el(e) {
  const t = ye.indexOf(e)
  t > Ue && ye.splice(t, 1)
}
function tl(e) {
  N(e) ? Ot.push(...e) : (!st || !st.includes(e, e.allowRecurse ? gt + 1 : gt)) && Ot.push(e), xn()
}
function oo(e, t, s = os ? Ue + 1 : 0) {
  for (; s < ye.length; s++) {
    const r = ye[s]
    if (r && r.pre) {
      if (e && r.id !== e.uid) continue
      ye.splice(s, 1), s--, r()
    }
  }
}
function Pn(e) {
  if (Ot.length) {
    const t = [...new Set(Ot)].sort((s, r) => ns(s) - ns(r))
    if (((Ot.length = 0), st)) {
      st.push(...t)
      return
    }
    for (st = t, gt = 0; gt < st.length; gt++) st[gt]()
    ;(st = null), (gt = 0)
  }
}
const ns = (e) => (e.id == null ? 1 / 0 : e.id),
  sl = (e, t) => {
    const s = ns(e) - ns(t)
    if (s === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return s
  }
function Ln(e) {
  ;(ur = !1), (os = !0), ye.sort(sl)
  try {
    for (Ue = 0; Ue < ye.length; Ue++) {
      const t = ye[Ue]
      t && t.active !== !1 && at(t, null, 14)
    }
  } finally {
    ;(Ue = 0), (ye.length = 0), Pn(), (os = !1), (Or = null), (ye.length || Ot.length) && Ln()
  }
}
function rl(e, t, ...s) {
  if (e.isUnmounted) return
  const r = e.vnode.props || ie
  let o = s
  const n = t.startsWith('update:'),
    i = n && t.slice(7)
  if (i && i in r) {
    const f = `${i === 'modelValue' ? 'model' : i}Modifiers`,
      { number: m, trim: p } = r[f] || ie
    p && (o = s.map((S) => (de(S) ? S.trim() : S))), m && (o = s.map(ir))
  }
  let c,
    l = r[(c = Vs(t))] || r[(c = Vs(Ge(t)))]
  !l && n && (l = r[(c = Vs(vt(t)))]), l && Xe(l, e, 6, o)
  const u = r[c + 'Once']
  if (u) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[c]) return
    ;(e.emitted[c] = !0), Xe(u, e, 6, o)
  }
}
function Tn(e, t, s = !1) {
  const r = t.emitsCache,
    o = r.get(e)
  if (o !== void 0) return o
  const n = e.emits
  let i = {},
    c = !1
  if (!U(e)) {
    const l = (u) => {
      const f = Tn(u, t, !0)
      f && ((c = !0), ge(i, f))
    }
    !s && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l)
  }
  return !n && !c
    ? (ce(e) && r.set(e, null), null)
    : (N(n) ? n.forEach((l) => (i[l] = null)) : ge(i, n), ce(e) && r.set(e, i), i)
}
function Ds(e, t) {
  return !e || !As(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      J(e, t[0].toLowerCase() + t.slice(1)) || J(e, vt(t)) || J(e, t))
}
let xe = null,
  Bs = null
function Ms(e) {
  const t = xe
  return (xe = e), (Bs = (e && e.type.__scopeId) || null), t
}
function Mn(e) {
  Bs = e
}
function In() {
  Bs = null
}
function ue(e, t = xe, s) {
  if (!t || e._n) return e
  const r = (...o) => {
    r._d && go(-1)
    const n = Ms(t)
    let i
    try {
      i = e(...o)
    } finally {
      Ms(n), r._d && go(1)
    }
    return i
  }
  return (r._n = !0), (r._c = !0), (r._d = !0), r
}
function Js(e) {
  const {
    type: t,
    vnode: s,
    proxy: r,
    withProxy: o,
    props: n,
    propsOptions: [i],
    slots: c,
    attrs: l,
    emit: u,
    render: f,
    renderCache: m,
    data: p,
    setupState: S,
    ctx: E,
    inheritAttrs: M
  } = e
  let W, P
  const C = Ms(e)
  try {
    if (s.shapeFlag & 4) {
      const Y = o || r,
        he = Y
      ;(W = He(f.call(he, Y, m, n, S, p, E))), (P = l)
    } else {
      const Y = t
      ;(W = He(Y.length > 1 ? Y(n, { attrs: l, slots: c, emit: u }) : Y(n, null))),
        (P = t.props ? l : ol(l))
    }
  } catch (Y) {
    ;(Zt.length = 0), zs(Y, e, 1), (W = k(wt))
  }
  let z = W
  if (P && M !== !1) {
    const Y = Object.keys(P),
      { shapeFlag: he } = z
    Y.length && he & 7 && (i && Y.some(vr) && (P = nl(P, i)), (z = Xt(z, P)))
  }
  return (
    s.dirs && ((z = Xt(z)), (z.dirs = z.dirs ? z.dirs.concat(s.dirs) : s.dirs)),
    s.transition && (z.transition = s.transition),
    (W = z),
    Ms(C),
    W
  )
}
const ol = (e) => {
    let t
    for (const s in e) (s === 'class' || s === 'style' || As(s)) && ((t || (t = {}))[s] = e[s])
    return t
  },
  nl = (e, t) => {
    const s = {}
    for (const r in e) (!vr(r) || !(r.slice(9) in t)) && (s[r] = e[r])
    return s
  }
function il(e, t, s) {
  const { props: r, children: o, component: n } = e,
    { props: i, children: c, patchFlag: l } = t,
    u = n.emitsOptions
  if (t.dirs || t.transition) return !0
  if (s && l >= 0) {
    if (l & 1024) return !0
    if (l & 16) return r ? no(r, i, u) : !!i
    if (l & 8) {
      const f = t.dynamicProps
      for (let m = 0; m < f.length; m++) {
        const p = f[m]
        if (i[p] !== r[p] && !Ds(u, p)) return !0
      }
    }
  } else
    return (o || c) && (!c || !c.$stable) ? !0 : r === i ? !1 : r ? (i ? no(r, i, u) : !0) : !!i
  return !1
}
function no(e, t, s) {
  const r = Object.keys(t)
  if (r.length !== Object.keys(e).length) return !0
  for (let o = 0; o < r.length; o++) {
    const n = r[o]
    if (t[n] !== e[n] && !Ds(s, n)) return !0
  }
  return !1
}
function ll({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const r = t.subTree
    if ((r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e))
      ((e = t.vnode).el = s), (t = t.parent)
    else break
  }
}
const kn = 'components'
function j(e, t) {
  return cl(kn, e, !0, t) || e
}
const al = Symbol.for('v-ndc')
function cl(e, t, s = !0, r = !1) {
  const o = xe || _e
  if (o) {
    const n = o.type
    if (e === kn) {
      const c = sa(n, !1)
      if (c && (c === t || c === Ge(t) || c === Os(Ge(t)))) return n
    }
    const i = io(o[e] || n[e], t) || io(o.appContext[e], t)
    return !i && r ? n : i
  }
}
function io(e, t) {
  return e && (e[t] || e[Ge(t)] || e[Os(Ge(t))])
}
const hl = (e) => e.__isSuspense
function ul(e, t) {
  t && t.pendingBranch ? (N(e) ? t.effects.push(...e) : t.effects.push(e)) : tl(e)
}
const fl = Symbol.for('v-scx'),
  dl = () => Je(fl),
  gs = {}
function Cs(e, t, s) {
  return En(e, t, s)
}
function En(e, t, { immediate: s, deep: r, flush: o, once: n, onTrack: i, onTrigger: c } = ie) {
  if (t && n) {
    const G = t
    t = (...Ce) => {
      G(...Ce), he()
    }
  }
  const l = _e,
    u = (G) => (r === !0 ? G : St(G, r === !1 ? 1 : void 0))
  let f,
    m = !1,
    p = !1
  if (
    (Le(e)
      ? ((f = () => e.value), (m = Ts(e)))
      : $t(e)
        ? ((f = () => u(e)), (m = !0))
        : N(e)
          ? ((p = !0),
            (m = e.some((G) => $t(G) || Ts(G))),
            (f = () =>
              e.map((G) => {
                if (Le(G)) return G.value
                if ($t(G)) return u(G)
                if (U(G)) return at(G, l, 2)
              })))
          : U(e)
            ? t
              ? (f = () => at(e, l, 2))
              : (f = () => (S && S(), Xe(e, l, 3, [E])))
            : (f = ke),
    t && r)
  ) {
    const G = f
    f = () => St(G())
  }
  let S,
    E = (G) => {
      S = z.onStop = () => {
        at(G, l, 4), (S = z.onStop = void 0)
      }
    },
    M
  if (Hs)
    if (((E = ke), t ? s && Xe(t, l, 3, [f(), p ? [] : void 0, E]) : f(), o === 'sync')) {
      const G = dl()
      M = G.__watcherHandles || (G.__watcherHandles = [])
    } else return ke
  let W = p ? new Array(e.length).fill(gs) : gs
  const P = () => {
    if (!(!z.active || !z.dirty))
      if (t) {
        const G = z.run()
        ;(r || m || (p ? G.some((Ce, Ie) => ht(Ce, W[Ie])) : ht(G, W))) &&
          (S && S(), Xe(t, l, 3, [G, W === gs ? void 0 : p && W[0] === gs ? [] : W, E]), (W = G))
      } else z.run()
  }
  P.allowRecurse = !!t
  let C
  o === 'sync'
    ? (C = P)
    : o === 'post'
      ? (C = () => ve(P, l && l.suspense))
      : ((P.pre = !0), l && (P.id = l.uid), (C = () => Fr(P)))
  const z = new Tr(f, ke, C),
    Y = Mi(),
    he = () => {
      z.stop(), Y && xr(Y.effects, z)
    }
  return (
    t ? (s ? P() : (W = z.run())) : o === 'post' ? ve(z.run.bind(z), l && l.suspense) : z.run(),
    M && M.push(he),
    he
  )
}
function pl(e, t, s) {
  const r = this.proxy,
    o = de(e) ? (e.includes('.') ? An(r, e) : () => r[e]) : e.bind(r, r)
  let n
  U(t) ? (n = t) : ((n = t.handler), (s = t))
  const i = cs(this),
    c = En(o, n.bind(r), s)
  return i(), c
}
function An(e, t) {
  const s = t.split('.')
  return () => {
    let r = e
    for (let o = 0; o < s.length && r; o++) r = r[s[o]]
    return r
  }
}
function St(e, t, s = 0, r) {
  if (!ce(e) || e.__v_skip) return e
  if (t && t > 0) {
    if (s >= t) return e
    s++
  }
  if (((r = r || new Set()), r.has(e))) return e
  if ((r.add(e), Le(e))) St(e.value, t, s, r)
  else if (N(e)) for (let o = 0; o < e.length; o++) St(e[o], t, s, r)
  else if (Vo(e) || Rt(e))
    e.forEach((o) => {
      St(o, t, s, r)
    })
  else if (Yo(e)) for (const o in e) St(e[o], t, s, r)
  return e
}
function Me(e, t) {
  if (xe === null) return e
  const s = Us(xe) || xe.proxy,
    r = e.dirs || (e.dirs = [])
  for (let o = 0; o < t.length; o++) {
    let [n, i, c, l = ie] = t[o]
    n &&
      (U(n) && (n = { mounted: n, updated: n }),
      n.deep && St(i),
      r.push({ dir: n, instance: s, value: i, oldValue: void 0, arg: c, modifiers: l }))
  }
  return e
}
function pt(e, t, s, r) {
  const o = e.dirs,
    n = t && t.dirs
  for (let i = 0; i < o.length; i++) {
    const c = o[i]
    n && (c.oldValue = n[i].value)
    let l = c.dir[r]
    l && (xt(), Xe(l, s, 8, [e.el, c, e, t]), Pt())
  }
}
/*! #__NO_SIDE_EFFECTS__ */ function Rn(e, t) {
  return U(e) ? ge({ name: e.name }, t, { setup: e }) : e
}
const ws = (e) => !!e.type.__asyncLoader,
  $n = (e) => e.type.__isKeepAlive
function ml(e, t) {
  On(e, 'a', t)
}
function gl(e, t) {
  On(e, 'da', t)
}
function On(e, t, s = _e) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let o = s
      for (; o; ) {
        if (o.isDeactivated) return
        o = o.parent
      }
      return e()
    })
  if ((js(t, r, s), s)) {
    let o = s.parent
    for (; o && o.parent; ) $n(o.parent.vnode) && Sl(r, t, s, o), (o = o.parent)
  }
}
function Sl(e, t, s, r) {
  const o = js(t, e, r, !0)
  Fn(() => {
    xr(r[t], o)
  }, s)
}
function js(e, t, s = _e, r = !1) {
  if (s) {
    const o = s[e] || (s[e] = []),
      n =
        t.__weh ||
        (t.__weh = (...i) => {
          if (s.isUnmounted) return
          xt()
          const c = cs(s),
            l = Xe(t, s, e, i)
          return c(), Pt(), l
        })
    return r ? o.unshift(n) : o.push(n), n
  }
}
const Ye =
    (e) =>
    (t, s = _e) =>
      (!Hs || e === 'sp') && js(e, (...r) => t(...r), s),
  yl = Ye('bm'),
  _l = Ye('m'),
  Cl = Ye('bu'),
  wl = Ye('u'),
  bl = Ye('bum'),
  Fn = Ye('um'),
  vl = Ye('sp'),
  xl = Ye('rtg'),
  Pl = Ye('rtc')
function Ll(e, t = _e) {
  js('ec', e, t)
}
function fe(e, t, s, r) {
  let o
  const n = s && s[r]
  if (N(e) || de(e)) {
    o = new Array(e.length)
    for (let i = 0, c = e.length; i < c; i++) o[i] = t(e[i], i, void 0, n && n[i])
  } else if (typeof e == 'number') {
    o = new Array(e)
    for (let i = 0; i < e; i++) o[i] = t(i + 1, i, void 0, n && n[i])
  } else if (ce(e))
    if (e[Symbol.iterator]) o = Array.from(e, (i, c) => t(i, c, void 0, n && n[c]))
    else {
      const i = Object.keys(e)
      o = new Array(i.length)
      for (let c = 0, l = i.length; c < l; c++) {
        const u = i[c]
        o[c] = t(e[u], u, c, n && n[c])
      }
    }
  else o = []
  return s && (s[r] = o), o
}
const fr = (e) => (e ? (qn(e) ? Us(e) || e.proxy : fr(e.parent)) : null),
  Yt = ge(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => fr(e.parent),
    $root: (e) => fr(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Xr(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ;(e.effect.dirty = !0), Fr(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = vn.bind(e.proxy)),
    $watch: (e) => pl.bind(e)
  }),
  Ys = (e, t) => e !== ie && !e.__isScriptSetup && J(e, t),
  Tl = {
    get({ _: e }, t) {
      const { ctx: s, setupState: r, data: o, props: n, accessCache: i, type: c, appContext: l } = e
      let u
      if (t[0] !== '$') {
        const S = i[t]
        if (S !== void 0)
          switch (S) {
            case 1:
              return r[t]
            case 2:
              return o[t]
            case 4:
              return s[t]
            case 3:
              return n[t]
          }
        else {
          if (Ys(r, t)) return (i[t] = 1), r[t]
          if (o !== ie && J(o, t)) return (i[t] = 2), o[t]
          if ((u = e.propsOptions[0]) && J(u, t)) return (i[t] = 3), n[t]
          if (s !== ie && J(s, t)) return (i[t] = 4), s[t]
          dr && (i[t] = 0)
        }
      }
      const f = Yt[t]
      let m, p
      if (f) return t === '$attrs' && Pe(e, 'get', t), f(e)
      if ((m = c.__cssModules) && (m = m[t])) return m
      if (s !== ie && J(s, t)) return (i[t] = 4), s[t]
      if (((p = l.config.globalProperties), J(p, t))) return p[t]
    },
    set({ _: e }, t, s) {
      const { data: r, setupState: o, ctx: n } = e
      return Ys(o, t)
        ? ((o[t] = s), !0)
        : r !== ie && J(r, t)
          ? ((r[t] = s), !0)
          : J(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((n[t] = s), !0)
    },
    has(
      { _: { data: e, setupState: t, accessCache: s, ctx: r, appContext: o, propsOptions: n } },
      i
    ) {
      let c
      return (
        !!s[i] ||
        (e !== ie && J(e, i)) ||
        Ys(t, i) ||
        ((c = n[0]) && J(c, i)) ||
        J(r, i) ||
        J(Yt, i) ||
        J(o.config.globalProperties, i)
      )
    },
    defineProperty(e, t, s) {
      return (
        s.get != null ? (e._.accessCache[t] = 0) : J(s, 'value') && this.set(e, t, s.value, null),
        Reflect.defineProperty(e, t, s)
      )
    }
  }
function lo(e) {
  return N(e) ? e.reduce((t, s) => ((t[s] = null), t), {}) : e
}
let dr = !0
function Ml(e) {
  const t = Xr(e),
    s = e.proxy,
    r = e.ctx
  ;(dr = !1), t.beforeCreate && ao(t.beforeCreate, e, 'bc')
  const {
    data: o,
    computed: n,
    methods: i,
    watch: c,
    provide: l,
    inject: u,
    created: f,
    beforeMount: m,
    mounted: p,
    beforeUpdate: S,
    updated: E,
    activated: M,
    deactivated: W,
    beforeDestroy: P,
    beforeUnmount: C,
    destroyed: z,
    unmounted: Y,
    render: he,
    renderTracked: G,
    renderTriggered: Ce,
    errorCaptured: Ie,
    serverPrefetch: ft,
    expose: De,
    inheritAttrs: Qe,
    components: dt,
    directives: Be,
    filters: Ht
  } = t
  if ((u && Il(u, r, null), i))
    for (const oe in i) {
      const Z = i[oe]
      U(Z) && (r[oe] = Z.bind(s))
    }
  if (o) {
    const oe = o.call(s, s)
    ce(oe) && (e.data = Xs(oe))
  }
  if (((dr = !0), n))
    for (const oe in n) {
      const Z = n[oe],
        Ke = U(Z) ? Z.bind(s, s) : U(Z.get) ? Z.get.bind(s, s) : ke,
        Ze = !U(Z) && U(Z.set) ? Z.set.bind(s) : ke,
        je = $e({ get: Ke, set: Ze })
      Object.defineProperty(r, oe, {
        enumerable: !0,
        configurable: !0,
        get: () => je.value,
        set: (be) => (je.value = be)
      })
    }
  if (c) for (const oe in c) Xn(c[oe], r, s, oe)
  if (l) {
    const oe = U(l) ? l.call(s) : l
    Reflect.ownKeys(oe).forEach((Z) => {
      bs(Z, oe[Z])
    })
  }
  f && ao(f, e, 'c')
  function pe(oe, Z) {
    N(Z) ? Z.forEach((Ke) => oe(Ke.bind(s))) : Z && oe(Z.bind(s))
  }
  if (
    (pe(yl, m),
    pe(_l, p),
    pe(Cl, S),
    pe(wl, E),
    pe(ml, M),
    pe(gl, W),
    pe(Ll, Ie),
    pe(Pl, G),
    pe(xl, Ce),
    pe(bl, C),
    pe(Fn, Y),
    pe(vl, ft),
    N(De))
  )
    if (De.length) {
      const oe = e.exposed || (e.exposed = {})
      De.forEach((Z) => {
        Object.defineProperty(oe, Z, { get: () => s[Z], set: (Ke) => (s[Z] = Ke) })
      })
    } else e.exposed || (e.exposed = {})
  he && e.render === ke && (e.render = he),
    Qe != null && (e.inheritAttrs = Qe),
    dt && (e.components = dt),
    Be && (e.directives = Be)
}
function Il(e, t, s = ke) {
  N(e) && (e = pr(e))
  for (const r in e) {
    const o = e[r]
    let n
    ce(o)
      ? 'default' in o
        ? (n = Je(o.from || r, o.default, !0))
        : (n = Je(o.from || r))
      : (n = Je(o)),
      Le(n)
        ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => n.value,
            set: (i) => (n.value = i)
          })
        : (t[r] = n)
  }
}
function ao(e, t, s) {
  Xe(N(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, s)
}
function Xn(e, t, s, r) {
  const o = r.includes('.') ? An(s, r) : () => s[r]
  if (de(e)) {
    const n = t[e]
    U(n) && Cs(o, n)
  } else if (U(e)) Cs(o, e.bind(s))
  else if (ce(e))
    if (N(e)) e.forEach((n) => Xn(n, t, s, r))
    else {
      const n = U(e.handler) ? e.handler.bind(s) : t[e.handler]
      U(n) && Cs(o, n, e)
    }
}
function Xr(e) {
  const t = e.type,
    { mixins: s, extends: r } = t,
    {
      mixins: o,
      optionsCache: n,
      config: { optionMergeStrategies: i }
    } = e.appContext,
    c = n.get(t)
  let l
  return (
    c
      ? (l = c)
      : !o.length && !s && !r
        ? (l = t)
        : ((l = {}), o.length && o.forEach((u) => Is(l, u, i, !0)), Is(l, t, i)),
    ce(t) && n.set(t, l),
    l
  )
}
function Is(e, t, s, r = !1) {
  const { mixins: o, extends: n } = t
  n && Is(e, n, s, !0), o && o.forEach((i) => Is(e, i, s, !0))
  for (const i in t)
    if (!(r && i === 'expose')) {
      const c = kl[i] || (s && s[i])
      e[i] = c ? c(e[i], t[i]) : t[i]
    }
  return e
}
const kl = {
  data: co,
  props: ho,
  emits: ho,
  methods: qt,
  computed: qt,
  beforeCreate: we,
  created: we,
  beforeMount: we,
  mounted: we,
  beforeUpdate: we,
  updated: we,
  beforeDestroy: we,
  beforeUnmount: we,
  destroyed: we,
  unmounted: we,
  activated: we,
  deactivated: we,
  errorCaptured: we,
  serverPrefetch: we,
  components: qt,
  directives: qt,
  watch: Al,
  provide: co,
  inject: El
}
function co(e, t) {
  return t
    ? e
      ? function () {
          return ge(U(e) ? e.call(this, this) : e, U(t) ? t.call(this, this) : t)
        }
      : t
    : e
}
function El(e, t) {
  return qt(pr(e), pr(t))
}
function pr(e) {
  if (N(e)) {
    const t = {}
    for (let s = 0; s < e.length; s++) t[e[s]] = e[s]
    return t
  }
  return e
}
function we(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function qt(e, t) {
  return e ? ge(Object.create(null), e, t) : t
}
function ho(e, t) {
  return e
    ? N(e) && N(t)
      ? [...new Set([...e, ...t])]
      : ge(Object.create(null), lo(e), lo(t ?? {}))
    : t
}
function Al(e, t) {
  if (!e) return t
  if (!t) return e
  const s = ge(Object.create(null), e)
  for (const r in t) s[r] = we(e[r], t[r])
  return s
}
function zn() {
  return {
    app: null,
    config: {
      isNativeTag: mi,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  }
}
let Rl = 0
function $l(e, t) {
  return function (r, o = null) {
    U(r) || (r = ge({}, r)), o != null && !ce(o) && (o = null)
    const n = zn(),
      i = new WeakSet()
    let c = !1
    const l = (n.app = {
      _uid: Rl++,
      _component: r,
      _props: o,
      _container: null,
      _context: n,
      _instance: null,
      version: oa,
      get config() {
        return n.config
      },
      set config(u) {},
      use(u, ...f) {
        return (
          i.has(u) ||
            (u && U(u.install) ? (i.add(u), u.install(l, ...f)) : U(u) && (i.add(u), u(l, ...f))),
          l
        )
      },
      mixin(u) {
        return n.mixins.includes(u) || n.mixins.push(u), l
      },
      component(u, f) {
        return f ? ((n.components[u] = f), l) : n.components[u]
      },
      directive(u, f) {
        return f ? ((n.directives[u] = f), l) : n.directives[u]
      },
      mount(u, f, m) {
        if (!c) {
          const p = k(r, o)
          return (
            (p.appContext = n),
            m === !0 ? (m = 'svg') : m === !1 && (m = void 0),
            f && t ? t(p, u) : e(p, u, m),
            (c = !0),
            (l._container = u),
            (u.__vue_app__ = l),
            Us(p.component) || p.component.proxy
          )
        }
      },
      unmount() {
        c && (e(null, l._container), delete l._container.__vue_app__)
      },
      provide(u, f) {
        return (n.provides[u] = f), l
      },
      runWithContext(u) {
        const f = Qt
        Qt = l
        try {
          return u()
        } finally {
          Qt = f
        }
      }
    })
    return l
  }
}
let Qt = null
function bs(e, t) {
  if (_e) {
    let s = _e.provides
    const r = _e.parent && _e.parent.provides
    r === s && (s = _e.provides = Object.create(r)), (s[e] = t)
  }
}
function Je(e, t, s = !1) {
  const r = _e || xe
  if (r || Qt) {
    const o = r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : Qt._context.provides
    if (o && e in o) return o[e]
    if (arguments.length > 1) return s && U(t) ? t.call(r && r.proxy) : t
  }
}
function Ol(e, t, s, r = !1) {
  const o = {},
    n = {}
  Ls(n, Ns, 1), (e.propsDefaults = Object.create(null)), Dn(e, t, o, n)
  for (const i in e.propsOptions[0]) i in o || (o[i] = void 0)
  s ? (e.props = r ? o : pn(o)) : e.type.props ? (e.props = o) : (e.props = n), (e.attrs = n)
}
function Fl(e, t, s, r) {
  const {
      props: o,
      attrs: n,
      vnode: { patchFlag: i }
    } = e,
    c = Q(o),
    [l] = e.propsOptions
  let u = !1
  if ((r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const f = e.vnode.dynamicProps
      for (let m = 0; m < f.length; m++) {
        let p = f[m]
        if (Ds(e.emitsOptions, p)) continue
        const S = t[p]
        if (l)
          if (J(n, p)) S !== n[p] && ((n[p] = S), (u = !0))
          else {
            const E = Ge(p)
            o[E] = mr(l, c, E, S, e, !1)
          }
        else S !== n[p] && ((n[p] = S), (u = !0))
      }
    }
  } else {
    Dn(e, t, o, n) && (u = !0)
    let f
    for (const m in c)
      (!t || (!J(t, m) && ((f = vt(m)) === m || !J(t, f)))) &&
        (l
          ? s && (s[m] !== void 0 || s[f] !== void 0) && (o[m] = mr(l, c, m, void 0, e, !0))
          : delete o[m])
    if (n !== c) for (const m in n) (!t || !J(t, m)) && (delete n[m], (u = !0))
  }
  u && qe(e, 'set', '$attrs')
}
function Dn(e, t, s, r) {
  const [o, n] = e.propsOptions
  let i = !1,
    c
  if (t)
    for (let l in t) {
      if (Jt(l)) continue
      const u = t[l]
      let f
      o && J(o, (f = Ge(l)))
        ? !n || !n.includes(f)
          ? (s[f] = u)
          : ((c || (c = {}))[f] = u)
        : Ds(e.emitsOptions, l) || ((!(l in r) || u !== r[l]) && ((r[l] = u), (i = !0)))
    }
  if (n) {
    const l = Q(s),
      u = c || ie
    for (let f = 0; f < n.length; f++) {
      const m = n[f]
      s[m] = mr(o, l, m, u[m], e, !J(u, m))
    }
  }
  return i
}
function mr(e, t, s, r, o, n) {
  const i = e[s]
  if (i != null) {
    const c = J(i, 'default')
    if (c && r === void 0) {
      const l = i.default
      if (i.type !== Function && !i.skipFactory && U(l)) {
        const { propsDefaults: u } = o
        if (s in u) r = u[s]
        else {
          const f = cs(o)
          ;(r = u[s] = l.call(null, t)), f()
        }
      } else r = l
    }
    i[0] && (n && !c ? (r = !1) : i[1] && (r === '' || r === vt(s)) && (r = !0))
  }
  return r
}
function Bn(e, t, s = !1) {
  const r = t.propsCache,
    o = r.get(e)
  if (o) return o
  const n = e.props,
    i = {},
    c = []
  let l = !1
  if (!U(e)) {
    const f = (m) => {
      l = !0
      const [p, S] = Bn(m, t, !0)
      ge(i, p), S && c.push(...S)
    }
    !s && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f)
  }
  if (!n && !l) return ce(e) && r.set(e, At), At
  if (N(n))
    for (let f = 0; f < n.length; f++) {
      const m = Ge(n[f])
      uo(m) && (i[m] = ie)
    }
  else if (n)
    for (const f in n) {
      const m = Ge(f)
      if (uo(m)) {
        const p = n[f],
          S = (i[m] = N(p) || U(p) ? { type: p } : ge({}, p))
        if (S) {
          const E = mo(Boolean, S.type),
            M = mo(String, S.type)
          ;(S[0] = E > -1), (S[1] = M < 0 || E < M), (E > -1 || J(S, 'default')) && c.push(m)
        }
      }
    }
  const u = [i, c]
  return ce(e) && r.set(e, u), u
}
function uo(e) {
  return e[0] !== '$' && !Jt(e)
}
function fo(e) {
  return e === null
    ? 'null'
    : typeof e == 'function'
      ? e.name || ''
      : (typeof e == 'object' && e.constructor && e.constructor.name) || ''
}
function po(e, t) {
  return fo(e) === fo(t)
}
function mo(e, t) {
  return N(t) ? t.findIndex((s) => po(s, e)) : U(t) && po(t, e) ? 0 : -1
}
const jn = (e) => e[0] === '_' || e === '$stable',
  zr = (e) => (N(e) ? e.map(He) : [He(e)]),
  Xl = (e, t, s) => {
    if (t._n) return t
    const r = ue((...o) => zr(t(...o)), s)
    return (r._c = !1), r
  },
  Wn = (e, t, s) => {
    const r = e._ctx
    for (const o in e) {
      if (jn(o)) continue
      const n = e[o]
      if (U(n)) t[o] = Xl(o, n, r)
      else if (n != null) {
        const i = zr(n)
        t[o] = () => i
      }
    }
  },
  Nn = (e, t) => {
    const s = zr(t)
    e.slots.default = () => s
  },
  zl = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const s = t._
      s ? ((e.slots = Q(t)), Ls(t, '_', s)) : Wn(t, (e.slots = {}))
    } else (e.slots = {}), t && Nn(e, t)
    Ls(e.slots, Ns, 1)
  },
  Dl = (e, t, s) => {
    const { vnode: r, slots: o } = e
    let n = !0,
      i = ie
    if (r.shapeFlag & 32) {
      const c = t._
      c
        ? s && c === 1
          ? (n = !1)
          : (ge(o, t), !s && c === 1 && delete o._)
        : ((n = !t.$stable), Wn(t, o)),
        (i = t)
    } else t && (Nn(e, t), (i = { default: 1 }))
    if (n) for (const c in o) !jn(c) && i[c] == null && delete o[c]
  }
function gr(e, t, s, r, o = !1) {
  if (N(e)) {
    e.forEach((p, S) => gr(p, t && (N(t) ? t[S] : t), s, r, o))
    return
  }
  if (ws(r) && !o) return
  const n = r.shapeFlag & 4 ? Us(r.component) || r.component.proxy : r.el,
    i = o ? null : n,
    { i: c, r: l } = e,
    u = t && t.r,
    f = c.refs === ie ? (c.refs = {}) : c.refs,
    m = c.setupState
  if (
    (u != null &&
      u !== l &&
      (de(u) ? ((f[u] = null), J(m, u) && (m[u] = null)) : Le(u) && (u.value = null)),
    U(l))
  )
    at(l, c, 12, [i, f])
  else {
    const p = de(l),
      S = Le(l)
    if (p || S) {
      const E = () => {
        if (e.f) {
          const M = p ? (J(m, l) ? m[l] : f[l]) : l.value
          o
            ? N(M) && xr(M, n)
            : N(M)
              ? M.includes(n) || M.push(n)
              : p
                ? ((f[l] = [n]), J(m, l) && (m[l] = f[l]))
                : ((l.value = [n]), e.k && (f[e.k] = l.value))
        } else p ? ((f[l] = i), J(m, l) && (m[l] = i)) : S && ((l.value = i), e.k && (f[e.k] = i))
      }
      i ? ((E.id = -1), ve(E, s)) : E()
    }
  }
}
const ve = ul
function Bl(e) {
  return jl(e)
}
function jl(e, t) {
  const s = Qo()
  s.__VUE__ = !0
  const {
      insert: r,
      remove: o,
      patchProp: n,
      createElement: i,
      createText: c,
      createComment: l,
      setText: u,
      setElementText: f,
      parentNode: m,
      nextSibling: p,
      setScopeId: S = ke,
      insertStaticContent: E
    } = e,
    M = (h, d, g, w = null, y = null, T = null, R = void 0, L = null, I = !!d.dynamicChildren) => {
      if (h === d) return
      h && !Gt(h, d) && ((w = _(h)), be(h, y, T, !0), (h = null)),
        d.patchFlag === -2 && ((I = !1), (d.dynamicChildren = null))
      const { type: v, ref: O, shapeFlag: B } = d
      switch (v) {
        case Ws:
          W(h, d, g, w)
          break
        case wt:
          P(h, d, g, w)
          break
        case vs:
          h == null && C(d, g, w, R)
          break
        case q:
          dt(h, d, g, w, y, T, R, L, I)
          break
        default:
          B & 1
            ? he(h, d, g, w, y, T, R, L, I)
            : B & 6
              ? Be(h, d, g, w, y, T, R, L, I)
              : (B & 64 || B & 128) && v.process(h, d, g, w, y, T, R, L, I, X)
      }
      O != null && y && gr(O, h && h.ref, T, d || h, !d)
    },
    W = (h, d, g, w) => {
      if (h == null) r((d.el = c(d.children)), g, w)
      else {
        const y = (d.el = h.el)
        d.children !== h.children && u(y, d.children)
      }
    },
    P = (h, d, g, w) => {
      h == null ? r((d.el = l(d.children || '')), g, w) : (d.el = h.el)
    },
    C = (h, d, g, w) => {
      ;[h.el, h.anchor] = E(h.children, d, g, w, h.el, h.anchor)
    },
    z = ({ el: h, anchor: d }, g, w) => {
      let y
      for (; h && h !== d; ) (y = p(h)), r(h, g, w), (h = y)
      r(d, g, w)
    },
    Y = ({ el: h, anchor: d }) => {
      let g
      for (; h && h !== d; ) (g = p(h)), o(h), (h = g)
      o(d)
    },
    he = (h, d, g, w, y, T, R, L, I) => {
      d.type === 'svg' ? (R = 'svg') : d.type === 'math' && (R = 'mathml'),
        h == null ? G(d, g, w, y, T, R, L, I) : ft(h, d, y, T, R, L, I)
    },
    G = (h, d, g, w, y, T, R, L) => {
      let I, v
      const { props: O, shapeFlag: B, transition: D, dirs: H } = h
      if (
        ((I = h.el = i(h.type, T, O && O.is, O)),
        B & 8 ? f(I, h.children) : B & 16 && Ie(h.children, I, null, w, y, Qs(h, T), R, L),
        H && pt(h, null, w, 'created'),
        Ce(I, h, h.scopeId, R, w),
        O)
      ) {
        for (const ne in O)
          ne !== 'value' && !Jt(ne) && n(I, ne, null, O[ne], T, h.children, w, y, Se)
        'value' in O && n(I, 'value', null, O.value, T), (v = O.onVnodeBeforeMount) && Ne(v, w, h)
      }
      H && pt(h, null, w, 'beforeMount')
      const K = Wl(y, D)
      K && D.beforeEnter(I),
        r(I, d, g),
        ((v = O && O.onVnodeMounted) || K || H) &&
          ve(() => {
            v && Ne(v, w, h), K && D.enter(I), H && pt(h, null, w, 'mounted')
          }, y)
    },
    Ce = (h, d, g, w, y) => {
      if ((g && S(h, g), w)) for (let T = 0; T < w.length; T++) S(h, w[T])
      if (y) {
        let T = y.subTree
        if (d === T) {
          const R = y.vnode
          Ce(h, R, R.scopeId, R.slotScopeIds, y.parent)
        }
      }
    },
    Ie = (h, d, g, w, y, T, R, L, I = 0) => {
      for (let v = I; v < h.length; v++) {
        const O = (h[v] = L ? rt(h[v]) : He(h[v]))
        M(null, O, d, g, w, y, T, R, L)
      }
    },
    ft = (h, d, g, w, y, T, R) => {
      const L = (d.el = h.el)
      let { patchFlag: I, dynamicChildren: v, dirs: O } = d
      I |= h.patchFlag & 16
      const B = h.props || ie,
        D = d.props || ie
      let H
      if (
        (g && mt(g, !1),
        (H = D.onVnodeBeforeUpdate) && Ne(H, g, d, h),
        O && pt(d, h, g, 'beforeUpdate'),
        g && mt(g, !0),
        v
          ? De(h.dynamicChildren, v, L, g, w, Qs(d, y), T)
          : R || Z(h, d, L, null, g, w, Qs(d, y), T, !1),
        I > 0)
      ) {
        if (I & 16) Qe(L, d, B, D, g, w, y)
        else if (
          (I & 2 && B.class !== D.class && n(L, 'class', null, D.class, y),
          I & 4 && n(L, 'style', B.style, D.style, y),
          I & 8)
        ) {
          const K = d.dynamicProps
          for (let ne = 0; ne < K.length; ne++) {
            const ae = K[ne],
              me = B[ae],
              Ee = D[ae]
            ;(Ee !== me || ae === 'value') && n(L, ae, me, Ee, y, h.children, g, w, Se)
          }
        }
        I & 1 && h.children !== d.children && f(L, d.children)
      } else !R && v == null && Qe(L, d, B, D, g, w, y)
      ;((H = D.onVnodeUpdated) || O) &&
        ve(() => {
          H && Ne(H, g, d, h), O && pt(d, h, g, 'updated')
        }, w)
    },
    De = (h, d, g, w, y, T, R) => {
      for (let L = 0; L < d.length; L++) {
        const I = h[L],
          v = d[L],
          O = I.el && (I.type === q || !Gt(I, v) || I.shapeFlag & 70) ? m(I.el) : g
        M(I, v, O, null, w, y, T, R, !0)
      }
    },
    Qe = (h, d, g, w, y, T, R) => {
      if (g !== w) {
        if (g !== ie)
          for (const L in g) !Jt(L) && !(L in w) && n(h, L, g[L], null, R, d.children, y, T, Se)
        for (const L in w) {
          if (Jt(L)) continue
          const I = w[L],
            v = g[L]
          I !== v && L !== 'value' && n(h, L, v, I, R, d.children, y, T, Se)
        }
        'value' in w && n(h, 'value', g.value, w.value, R)
      }
    },
    dt = (h, d, g, w, y, T, R, L, I) => {
      const v = (d.el = h ? h.el : c('')),
        O = (d.anchor = h ? h.anchor : c(''))
      let { patchFlag: B, dynamicChildren: D, slotScopeIds: H } = d
      H && (L = L ? L.concat(H) : H),
        h == null
          ? (r(v, g, w), r(O, g, w), Ie(d.children || [], g, O, y, T, R, L, I))
          : B > 0 && B & 64 && D && h.dynamicChildren
            ? (De(h.dynamicChildren, D, g, y, T, R, L),
              (d.key != null || (y && d === y.subTree)) && Hn(h, d, !0))
            : Z(h, d, g, O, y, T, R, L, I)
    },
    Be = (h, d, g, w, y, T, R, L, I) => {
      ;(d.slotScopeIds = L),
        h == null
          ? d.shapeFlag & 512
            ? y.ctx.activate(d, g, w, R, I)
            : Ht(d, g, w, y, T, R, I)
          : Lt(h, d, I)
    },
    Ht = (h, d, g, w, y, T, R) => {
      const L = (h.component = Yl(h, w, y))
      if (($n(h) && (L.ctx.renderer = X), Ql(L), L.asyncDep)) {
        if ((y && y.registerDep(L, pe), !h.el)) {
          const I = (L.subTree = k(wt))
          P(null, I, d, g)
        }
      } else pe(L, h, d, g, y, T, R)
    },
    Lt = (h, d, g) => {
      const w = (d.component = h.component)
      if (il(h, d, g))
        if (w.asyncDep && !w.asyncResolved) {
          oe(w, d, g)
          return
        } else (w.next = d), el(w.update), (w.effect.dirty = !0), w.update()
      else (d.el = h.el), (w.vnode = d)
    },
    pe = (h, d, g, w, y, T, R) => {
      const L = () => {
          if (h.isMounted) {
            let { next: O, bu: B, u: D, parent: H, vnode: K } = h
            {
              const It = Un(h)
              if (It) {
                O && ((O.el = K.el), oe(h, O, R)),
                  It.asyncDep.then(() => {
                    h.isUnmounted || L()
                  })
                return
              }
            }
            let ne = O,
              ae
            mt(h, !1),
              O ? ((O.el = K.el), oe(h, O, R)) : (O = K),
              B && ys(B),
              (ae = O.props && O.props.onVnodeBeforeUpdate) && Ne(ae, H, O, K),
              mt(h, !0)
            const me = Js(h),
              Ee = h.subTree
            ;(h.subTree = me),
              M(Ee, me, m(Ee.el), _(Ee), h, y, T),
              (O.el = me.el),
              ne === null && ll(h, me.el),
              D && ve(D, y),
              (ae = O.props && O.props.onVnodeUpdated) && ve(() => Ne(ae, H, O, K), y)
          } else {
            let O
            const { el: B, props: D } = d,
              { bm: H, m: K, parent: ne } = h,
              ae = ws(d)
            if (
              (mt(h, !1),
              H && ys(H),
              !ae && (O = D && D.onVnodeBeforeMount) && Ne(O, ne, d),
              mt(h, !0),
              B && le)
            ) {
              const me = () => {
                ;(h.subTree = Js(h)), le(B, h.subTree, h, y, null)
              }
              ae ? d.type.__asyncLoader().then(() => !h.isUnmounted && me()) : me()
            } else {
              const me = (h.subTree = Js(h))
              M(null, me, g, w, h, y, T), (d.el = me.el)
            }
            if ((K && ve(K, y), !ae && (O = D && D.onVnodeMounted))) {
              const me = d
              ve(() => Ne(O, ne, me), y)
            }
            ;(d.shapeFlag & 256 || (ne && ws(ne.vnode) && ne.vnode.shapeFlag & 256)) &&
              h.a &&
              ve(h.a, y),
              (h.isMounted = !0),
              (d = g = w = null)
          }
        },
        I = (h.effect = new Tr(L, ke, () => Fr(v), h.scope)),
        v = (h.update = () => {
          I.dirty && I.run()
        })
      ;(v.id = h.uid), mt(h, !0), v()
    },
    oe = (h, d, g) => {
      d.component = h
      const w = h.vnode.props
      ;(h.vnode = d), (h.next = null), Fl(h, d.props, w, g), Dl(h, d.children, g), xt(), oo(h), Pt()
    },
    Z = (h, d, g, w, y, T, R, L, I = !1) => {
      const v = h && h.children,
        O = h ? h.shapeFlag : 0,
        B = d.children,
        { patchFlag: D, shapeFlag: H } = d
      if (D > 0) {
        if (D & 128) {
          Ze(v, B, g, w, y, T, R, L, I)
          return
        } else if (D & 256) {
          Ke(v, B, g, w, y, T, R, L, I)
          return
        }
      }
      H & 8
        ? (O & 16 && Se(v, y, T), B !== v && f(g, B))
        : O & 16
          ? H & 16
            ? Ze(v, B, g, w, y, T, R, L, I)
            : Se(v, y, T, !0)
          : (O & 8 && f(g, ''), H & 16 && Ie(B, g, w, y, T, R, L, I))
    },
    Ke = (h, d, g, w, y, T, R, L, I) => {
      ;(h = h || At), (d = d || At)
      const v = h.length,
        O = d.length,
        B = Math.min(v, O)
      let D
      for (D = 0; D < B; D++) {
        const H = (d[D] = I ? rt(d[D]) : He(d[D]))
        M(h[D], H, g, null, y, T, R, L, I)
      }
      v > O ? Se(h, y, T, !0, !1, B) : Ie(d, g, w, y, T, R, L, I, B)
    },
    Ze = (h, d, g, w, y, T, R, L, I) => {
      let v = 0
      const O = d.length
      let B = h.length - 1,
        D = O - 1
      for (; v <= B && v <= D; ) {
        const H = h[v],
          K = (d[v] = I ? rt(d[v]) : He(d[v]))
        if (Gt(H, K)) M(H, K, g, null, y, T, R, L, I)
        else break
        v++
      }
      for (; v <= B && v <= D; ) {
        const H = h[B],
          K = (d[D] = I ? rt(d[D]) : He(d[D]))
        if (Gt(H, K)) M(H, K, g, null, y, T, R, L, I)
        else break
        B--, D--
      }
      if (v > B) {
        if (v <= D) {
          const H = D + 1,
            K = H < O ? d[H].el : w
          for (; v <= D; ) M(null, (d[v] = I ? rt(d[v]) : He(d[v])), g, K, y, T, R, L, I), v++
        }
      } else if (v > D) for (; v <= B; ) be(h[v], y, T, !0), v++
      else {
        const H = v,
          K = v,
          ne = new Map()
        for (v = K; v <= D; v++) {
          const Te = (d[v] = I ? rt(d[v]) : He(d[v]))
          Te.key != null && ne.set(Te.key, v)
        }
        let ae,
          me = 0
        const Ee = D - K + 1
        let It = !1,
          Kr = 0
        const Ut = new Array(Ee)
        for (v = 0; v < Ee; v++) Ut[v] = 0
        for (v = H; v <= B; v++) {
          const Te = h[v]
          if (me >= Ee) {
            be(Te, y, T, !0)
            continue
          }
          let We
          if (Te.key != null) We = ne.get(Te.key)
          else
            for (ae = K; ae <= D; ae++)
              if (Ut[ae - K] === 0 && Gt(Te, d[ae])) {
                We = ae
                break
              }
          We === void 0
            ? be(Te, y, T, !0)
            : ((Ut[We - K] = v + 1),
              We >= Kr ? (Kr = We) : (It = !0),
              M(Te, d[We], g, null, y, T, R, L, I),
              me++)
        }
        const Vr = It ? Nl(Ut) : At
        for (ae = Vr.length - 1, v = Ee - 1; v >= 0; v--) {
          const Te = K + v,
            We = d[Te],
            qr = Te + 1 < O ? d[Te + 1].el : w
          Ut[v] === 0
            ? M(null, We, g, qr, y, T, R, L, I)
            : It && (ae < 0 || v !== Vr[ae] ? je(We, g, qr, 2) : ae--)
        }
      }
    },
    je = (h, d, g, w, y = null) => {
      const { el: T, type: R, transition: L, children: I, shapeFlag: v } = h
      if (v & 6) {
        je(h.component.subTree, d, g, w)
        return
      }
      if (v & 128) {
        h.suspense.move(d, g, w)
        return
      }
      if (v & 64) {
        R.move(h, d, g, X)
        return
      }
      if (R === q) {
        r(T, d, g)
        for (let B = 0; B < I.length; B++) je(I[B], d, g, w)
        r(h.anchor, d, g)
        return
      }
      if (R === vs) {
        z(h, d, g)
        return
      }
      if (w !== 2 && v & 1 && L)
        if (w === 0) L.beforeEnter(T), r(T, d, g), ve(() => L.enter(T), y)
        else {
          const { leave: B, delayLeave: D, afterLeave: H } = L,
            K = () => r(T, d, g),
            ne = () => {
              B(T, () => {
                K(), H && H()
              })
            }
          D ? D(T, K, ne) : ne()
        }
      else r(T, d, g)
    },
    be = (h, d, g, w = !1, y = !1) => {
      const {
        type: T,
        props: R,
        ref: L,
        children: I,
        dynamicChildren: v,
        shapeFlag: O,
        patchFlag: B,
        dirs: D
      } = h
      if ((L != null && gr(L, null, g, h, !0), O & 256)) {
        d.ctx.deactivate(h)
        return
      }
      const H = O & 1 && D,
        K = !ws(h)
      let ne
      if ((K && (ne = R && R.onVnodeBeforeUnmount) && Ne(ne, d, h), O & 6)) hs(h.component, g, w)
      else {
        if (O & 128) {
          h.suspense.unmount(g, w)
          return
        }
        H && pt(h, null, d, 'beforeUnmount'),
          O & 64
            ? h.type.remove(h, d, g, y, X, w)
            : v && (T !== q || (B > 0 && B & 64))
              ? Se(v, d, g, !1, !0)
              : ((T === q && B & 384) || (!y && O & 16)) && Se(I, d, g),
          w && Tt(h)
      }
      ;((K && (ne = R && R.onVnodeUnmounted)) || H) &&
        ve(() => {
          ne && Ne(ne, d, h), H && pt(h, null, d, 'unmounted')
        }, g)
    },
    Tt = (h) => {
      const { type: d, el: g, anchor: w, transition: y } = h
      if (d === q) {
        Mt(g, w)
        return
      }
      if (d === vs) {
        Y(h)
        return
      }
      const T = () => {
        o(g), y && !y.persisted && y.afterLeave && y.afterLeave()
      }
      if (h.shapeFlag & 1 && y && !y.persisted) {
        const { leave: R, delayLeave: L } = y,
          I = () => R(g, T)
        L ? L(h.el, T, I) : I()
      } else T()
    },
    Mt = (h, d) => {
      let g
      for (; h !== d; ) (g = p(h)), o(h), (h = g)
      o(d)
    },
    hs = (h, d, g) => {
      const { bum: w, scope: y, update: T, subTree: R, um: L } = h
      w && ys(w),
        y.stop(),
        T && ((T.active = !1), be(R, h, d, g)),
        L && ve(L, d),
        ve(() => {
          h.isUnmounted = !0
        }, d),
        d &&
          d.pendingBranch &&
          !d.isUnmounted &&
          h.asyncDep &&
          !h.asyncResolved &&
          h.suspenseId === d.pendingId &&
          (d.deps--, d.deps === 0 && d.resolve())
    },
    Se = (h, d, g, w = !1, y = !1, T = 0) => {
      for (let R = T; R < h.length; R++) be(h[R], d, g, w, y)
    },
    _ = (h) =>
      h.shapeFlag & 6
        ? _(h.component.subTree)
        : h.shapeFlag & 128
          ? h.suspense.next()
          : p(h.anchor || h.el)
  let $ = !1
  const A = (h, d, g) => {
      h == null
        ? d._vnode && be(d._vnode, null, null, !0)
        : M(d._vnode || null, h, d, null, null, null, g),
        $ || (($ = !0), oo(), Pn(), ($ = !1)),
        (d._vnode = h)
    },
    X = { p: M, um: be, m: je, r: Tt, mt: Ht, mc: Ie, pc: Z, pbc: De, n: _, o: e }
  let ee, le
  return t && ([ee, le] = t(X)), { render: A, hydrate: ee, createApp: $l(A, ee) }
}
function Qs({ type: e, props: t }, s) {
  return (s === 'svg' && e === 'foreignObject') ||
    (s === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : s
}
function mt({ effect: e, update: t }, s) {
  e.allowRecurse = t.allowRecurse = s
}
function Wl(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function Hn(e, t, s = !1) {
  const r = e.children,
    o = t.children
  if (N(r) && N(o))
    for (let n = 0; n < r.length; n++) {
      const i = r[n]
      let c = o[n]
      c.shapeFlag & 1 &&
        !c.dynamicChildren &&
        ((c.patchFlag <= 0 || c.patchFlag === 32) && ((c = o[n] = rt(o[n])), (c.el = i.el)),
        s || Hn(i, c)),
        c.type === Ws && (c.el = i.el)
    }
}
function Nl(e) {
  const t = e.slice(),
    s = [0]
  let r, o, n, i, c
  const l = e.length
  for (r = 0; r < l; r++) {
    const u = e[r]
    if (u !== 0) {
      if (((o = s[s.length - 1]), e[o] < u)) {
        ;(t[r] = o), s.push(r)
        continue
      }
      for (n = 0, i = s.length - 1; n < i; ) (c = (n + i) >> 1), e[s[c]] < u ? (n = c + 1) : (i = c)
      u < e[s[n]] && (n > 0 && (t[r] = s[n - 1]), (s[n] = r))
    }
  }
  for (n = s.length, i = s[n - 1]; n-- > 0; ) (s[n] = i), (i = t[i])
  return s
}
function Un(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : Un(t)
}
const Hl = (e) => e.__isTeleport,
  q = Symbol.for('v-fgt'),
  Ws = Symbol.for('v-txt'),
  wt = Symbol.for('v-cmt'),
  vs = Symbol.for('v-stc'),
  Zt = []
let Fe = null
function b(e = !1) {
  Zt.push((Fe = e ? null : []))
}
function Ul() {
  Zt.pop(), (Fe = Zt[Zt.length - 1] || null)
}
let is = 1
function go(e) {
  is += e
}
function Gn(e) {
  return (e.dynamicChildren = is > 0 ? Fe || At : null), Ul(), is > 0 && Fe && Fe.push(e), e
}
function x(e, t, s, r, o, n) {
  return Gn(a(e, t, s, r, o, n, !0))
}
function yt(e, t, s, r, o) {
  return Gn(k(e, t, s, r, o, !0))
}
function Sr(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function Gt(e, t) {
  return e.type === t.type && e.key === t.key
}
const Ns = '__vInternal',
  Kn = ({ key: e }) => e ?? null,
  xs = ({ ref: e, ref_key: t, ref_for: s }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (de(e) || Le(e) || U(e) ? { i: xe, r: e, k: t, f: !!s } : e) : null
  )
function a(e, t = null, s = null, r = 0, o = null, n = e === q ? 0 : 1, i = !1, c = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Kn(t),
    ref: t && xs(t),
    scopeId: Bs,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: n,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: xe
  }
  return (
    c ? (Dr(l, s), n & 128 && e.normalize(l)) : s && (l.shapeFlag |= de(s) ? 8 : 16),
    is > 0 && !i && Fe && (l.patchFlag > 0 || n & 6) && l.patchFlag !== 32 && Fe.push(l),
    l
  )
}
const k = Gl
function Gl(e, t = null, s = null, r = 0, o = null, n = !1) {
  if (((!e || e === al) && (e = wt), Sr(e))) {
    const c = Xt(e, t, !0)
    return (
      s && Dr(c, s),
      is > 0 && !n && Fe && (c.shapeFlag & 6 ? (Fe[Fe.indexOf(e)] = c) : Fe.push(c)),
      (c.patchFlag |= -2),
      c
    )
  }
  if ((ra(e) && (e = e.__vccOpts), t)) {
    t = Kl(t)
    let { class: c, style: l } = t
    c && !de(c) && (t.class = V(c)), ce(l) && (gn(l) && !N(l) && (l = ge({}, l)), (t.style = Lr(l)))
  }
  const i = de(e) ? 1 : hl(e) ? 128 : Hl(e) ? 64 : ce(e) ? 4 : U(e) ? 2 : 0
  return a(e, t, s, r, o, i, n, !0)
}
function Kl(e) {
  return e ? (gn(e) || Ns in e ? ge({}, e) : e) : null
}
function Xt(e, t, s = !1) {
  const { props: r, ref: o, patchFlag: n, children: i } = e,
    c = t ? Vl(r || {}, t) : r
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Kn(c),
    ref: t && t.ref ? (s && o ? (N(o) ? o.concat(xs(t)) : [o, xs(t)]) : xs(t)) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== q ? (n === -1 ? 16 : n | 16) : n,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Xt(e.ssContent),
    ssFallback: e.ssFallback && Xt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  }
}
function se(e = ' ', t = 0) {
  return k(Ws, null, e, t)
}
function Vn(e, t) {
  const s = k(vs, null, e)
  return (s.staticCount = t), s
}
function es(e = '', t = !1) {
  return t ? (b(), yt(wt, null, e)) : k(wt, null, e)
}
function He(e) {
  return e == null || typeof e == 'boolean'
    ? k(wt)
    : N(e)
      ? k(q, null, e.slice())
      : typeof e == 'object'
        ? rt(e)
        : k(Ws, null, String(e))
}
function rt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Xt(e)
}
function Dr(e, t) {
  let s = 0
  const { shapeFlag: r } = e
  if (t == null) t = null
  else if (N(t)) s = 16
  else if (typeof t == 'object')
    if (r & 65) {
      const o = t.default
      o && (o._c && (o._d = !1), Dr(e, o()), o._c && (o._d = !0))
      return
    } else {
      s = 32
      const o = t._
      !o && !(Ns in t)
        ? (t._ctx = xe)
        : o === 3 && xe && (xe.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    U(t)
      ? ((t = { default: t, _ctx: xe }), (s = 32))
      : ((t = String(t)), r & 64 ? ((s = 16), (t = [se(t)])) : (s = 8))
  ;(e.children = t), (e.shapeFlag |= s)
}
function Vl(...e) {
  const t = {}
  for (let s = 0; s < e.length; s++) {
    const r = e[s]
    for (const o in r)
      if (o === 'class') t.class !== r.class && (t.class = V([t.class, r.class]))
      else if (o === 'style') t.style = Lr([t.style, r.style])
      else if (As(o)) {
        const n = t[o],
          i = r[o]
        i && n !== i && !(N(n) && n.includes(i)) && (t[o] = n ? [].concat(n, i) : i)
      } else o !== '' && (t[o] = r[o])
  }
  return t
}
function Ne(e, t, s, r = null) {
  Xe(e, t, 7, [s, r])
}
const ql = zn()
let Jl = 0
function Yl(e, t, s) {
  const r = e.type,
    o = (t ? t.appContext : e.appContext) || ql,
    n = {
      uid: Jl++,
      vnode: e,
      type: r,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new tn(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Bn(r, o),
      emitsOptions: Tn(r, o),
      emit: null,
      emitted: null,
      propsDefaults: ie,
      inheritAttrs: r.inheritAttrs,
      ctx: ie,
      data: ie,
      props: ie,
      attrs: ie,
      slots: ie,
      refs: ie,
      setupState: ie,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: s,
      suspenseId: s ? s.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    }
  return (
    (n.ctx = { _: n }), (n.root = t ? t.root : n), (n.emit = rl.bind(null, n)), e.ce && e.ce(n), n
  )
}
let _e = null,
  ks,
  yr
{
  const e = Qo(),
    t = (s, r) => {
      let o
      return (
        (o = e[s]) || (o = e[s] = []),
        o.push(r),
        (n) => {
          o.length > 1 ? o.forEach((i) => i(n)) : o[0](n)
        }
      )
    }
  ;(ks = t('__VUE_INSTANCE_SETTERS__', (s) => (_e = s))),
    (yr = t('__VUE_SSR_SETTERS__', (s) => (Hs = s)))
}
const cs = (e) => {
    const t = _e
    return (
      ks(e),
      e.scope.on(),
      () => {
        e.scope.off(), ks(t)
      }
    )
  },
  So = () => {
    _e && _e.scope.off(), ks(null)
  }
function qn(e) {
  return e.vnode.shapeFlag & 4
}
let Hs = !1
function Ql(e, t = !1) {
  t && yr(t)
  const { props: s, children: r } = e.vnode,
    o = qn(e)
  Ol(e, s, o, t), zl(e, r)
  const n = o ? Zl(e, t) : void 0
  return t && yr(!1), n
}
function Zl(e, t) {
  const s = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = Rr(new Proxy(e.ctx, Tl)))
  const { setup: r } = s
  if (r) {
    const o = (e.setupContext = r.length > 1 ? ta(e) : null),
      n = cs(e)
    xt()
    const i = at(r, e, 0, [e.props, o])
    if ((Pt(), n(), qo(i))) {
      if ((i.then(So, So), t))
        return i
          .then((c) => {
            yo(e, c, t)
          })
          .catch((c) => {
            zs(c, e, 0)
          })
      e.asyncDep = i
    } else yo(e, i, t)
  } else Jn(e, t)
}
function yo(e, t, s) {
  U(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ce(t) && (e.setupState = wn(t)),
    Jn(e, s)
}
let _o
function Jn(e, t, s) {
  const r = e.type
  if (!e.render) {
    if (!t && _o && !r.render) {
      const o = r.template || Xr(e).template
      if (o) {
        const { isCustomElement: n, compilerOptions: i } = e.appContext.config,
          { delimiters: c, compilerOptions: l } = r,
          u = ge(ge({ isCustomElement: n, delimiters: c }, i), l)
        r.render = _o(o, u)
      }
    }
    e.render = r.render || ke
  }
  {
    const o = cs(e)
    xt()
    try {
      Ml(e)
    } finally {
      Pt(), o()
    }
  }
}
function ea(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, s) {
        return Pe(e, 'get', '$attrs'), t[s]
      }
    }))
  )
}
function ta(e) {
  const t = (s) => {
    e.exposed = s || {}
  }
  return {
    get attrs() {
      return ea(e)
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  }
}
function Us(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(wn(Rr(e.exposed)), {
        get(t, s) {
          if (s in t) return t[s]
          if (s in Yt) return Yt[s](e)
        },
        has(t, s) {
          return s in t || s in Yt
        }
      }))
    )
}
function sa(e, t = !0) {
  return U(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function ra(e) {
  return U(e) && '__vccOpts' in e
}
const $e = (e, t) => Vi(e, t, Hs)
function Yn(e, t, s) {
  const r = arguments.length
  return r === 2
    ? ce(t) && !N(t)
      ? Sr(t)
        ? k(e, null, [t])
        : k(e, t)
      : k(e, null, t)
    : (r > 3 ? (s = Array.prototype.slice.call(arguments, 2)) : r === 3 && Sr(s) && (s = [s]),
      k(e, t, s))
}
const oa = '3.4.21'
/**
 * @vue/runtime-dom v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const na = 'http://www.w3.org/2000/svg',
  ia = 'http://www.w3.org/1998/Math/MathML',
  ot = typeof document < 'u' ? document : null,
  Co = ot && ot.createElement('template'),
  la = {
    insert: (e, t, s) => {
      t.insertBefore(e, s || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, s, r) => {
      const o =
        t === 'svg'
          ? ot.createElementNS(na, e)
          : t === 'mathml'
            ? ot.createElementNS(ia, e)
            : ot.createElement(e, s ? { is: s } : void 0)
      return e === 'select' && r && r.multiple != null && o.setAttribute('multiple', r.multiple), o
    },
    createText: (e) => ot.createTextNode(e),
    createComment: (e) => ot.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => ot.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, s, r, o, n) {
      const i = s ? s.previousSibling : t.lastChild
      if (o && (o === n || o.nextSibling))
        for (; t.insertBefore(o.cloneNode(!0), s), !(o === n || !(o = o.nextSibling)); );
      else {
        Co.innerHTML = r === 'svg' ? `<svg>${e}</svg>` : r === 'mathml' ? `<math>${e}</math>` : e
        const c = Co.content
        if (r === 'svg' || r === 'mathml') {
          const l = c.firstChild
          for (; l.firstChild; ) c.appendChild(l.firstChild)
          c.removeChild(l)
        }
        t.insertBefore(c, s)
      }
      return [i ? i.nextSibling : t.firstChild, s ? s.previousSibling : t.lastChild]
    }
  },
  aa = Symbol('_vtc')
function ca(e, t, s) {
  const r = e[aa]
  r && (t = (t ? [t, ...r] : [...r]).join(' ')),
    t == null ? e.removeAttribute('class') : s ? e.setAttribute('class', t) : (e.className = t)
}
const Es = Symbol('_vod'),
  Qn = Symbol('_vsh'),
  Oe = {
    beforeMount(e, { value: t }, { transition: s }) {
      ;(e[Es] = e.style.display === 'none' ? '' : e.style.display),
        s && t ? s.beforeEnter(e) : Kt(e, t)
    },
    mounted(e, { value: t }, { transition: s }) {
      s && t && s.enter(e)
    },
    updated(e, { value: t, oldValue: s }, { transition: r }) {
      !t != !s &&
        (r
          ? t
            ? (r.beforeEnter(e), Kt(e, !0), r.enter(e))
            : r.leave(e, () => {
                Kt(e, !1)
              })
          : Kt(e, t))
    },
    beforeUnmount(e, { value: t }) {
      Kt(e, t)
    }
  }
function Kt(e, t) {
  ;(e.style.display = t ? e[Es] : 'none'), (e[Qn] = !t)
}
const ha = Symbol(''),
  ua = /(^|;)\s*display\s*:/
function fa(e, t, s) {
  const r = e.style,
    o = de(s)
  let n = !1
  if (s && !o) {
    if (t)
      if (de(t))
        for (const i of t.split(';')) {
          const c = i.slice(0, i.indexOf(':')).trim()
          s[c] == null && Ps(r, c, '')
        }
      else for (const i in t) s[i] == null && Ps(r, i, '')
    for (const i in s) i === 'display' && (n = !0), Ps(r, i, s[i])
  } else if (o) {
    if (t !== s) {
      const i = r[ha]
      i && (s += ';' + i), (r.cssText = s), (n = ua.test(s))
    }
  } else t && e.removeAttribute('style')
  Es in e && ((e[Es] = n ? r.display : ''), e[Qn] && (r.display = 'none'))
}
const wo = /\s*!important$/
function Ps(e, t, s) {
  if (N(s)) s.forEach((r) => Ps(e, t, r))
  else if ((s == null && (s = ''), t.startsWith('--'))) e.setProperty(t, s)
  else {
    const r = da(e, t)
    wo.test(s) ? e.setProperty(vt(r), s.replace(wo, ''), 'important') : (e[r] = s)
  }
}
const bo = ['Webkit', 'Moz', 'ms'],
  Zs = {}
function da(e, t) {
  const s = Zs[t]
  if (s) return s
  let r = Ge(t)
  if (r !== 'filter' && r in e) return (Zs[t] = r)
  r = Os(r)
  for (let o = 0; o < bo.length; o++) {
    const n = bo[o] + r
    if (n in e) return (Zs[t] = n)
  }
  return t
}
const vo = 'http://www.w3.org/1999/xlink'
function pa(e, t, s, r, o) {
  if (r && t.startsWith('xlink:'))
    s == null ? e.removeAttributeNS(vo, t.slice(6, t.length)) : e.setAttributeNS(vo, t, s)
  else {
    const n = Pi(t)
    s == null || (n && !Zo(s)) ? e.removeAttribute(t) : e.setAttribute(t, n ? '' : s)
  }
}
function ma(e, t, s, r, o, n, i) {
  if (t === 'innerHTML' || t === 'textContent') {
    r && i(r, o, n), (e[t] = s ?? '')
    return
  }
  const c = e.tagName
  if (t === 'value' && c !== 'PROGRESS' && !c.includes('-')) {
    const u = c === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      f = s ?? ''
    ;(u !== f || !('_value' in e)) && (e.value = f),
      s == null && e.removeAttribute(t),
      (e._value = s)
    return
  }
  let l = !1
  if (s === '' || s == null) {
    const u = typeof e[t]
    u === 'boolean'
      ? (s = Zo(s))
      : s == null && u === 'string'
        ? ((s = ''), (l = !0))
        : u === 'number' && ((s = 0), (l = !0))
  }
  try {
    e[t] = s
  } catch {}
  l && e.removeAttribute(t)
}
function kt(e, t, s, r) {
  e.addEventListener(t, s, r)
}
function ga(e, t, s, r) {
  e.removeEventListener(t, s, r)
}
const xo = Symbol('_vei')
function Sa(e, t, s, r, o = null) {
  const n = e[xo] || (e[xo] = {}),
    i = n[t]
  if (r && i) i.value = r
  else {
    const [c, l] = ya(t)
    if (r) {
      const u = (n[t] = wa(r, o))
      kt(e, c, u, l)
    } else i && (ga(e, c, i, l), (n[t] = void 0))
  }
}
const Po = /(?:Once|Passive|Capture)$/
function ya(e) {
  let t
  if (Po.test(e)) {
    t = {}
    let r
    for (; (r = e.match(Po)); )
      (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : vt(e.slice(2)), t]
}
let er = 0
const _a = Promise.resolve(),
  Ca = () => er || (_a.then(() => (er = 0)), (er = Date.now()))
function wa(e, t) {
  const s = (r) => {
    if (!r._vts) r._vts = Date.now()
    else if (r._vts <= s.attached) return
    Xe(ba(r, s.value), t, 5, [r])
  }
  return (s.value = e), (s.attached = Ca()), s
}
function ba(e, t) {
  if (N(t)) {
    const s = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        s.call(e), (e._stopped = !0)
      }),
      t.map((r) => (o) => !o._stopped && r && r(o))
    )
  } else return t
}
const Lo = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  va = (e, t, s, r, o, n, i, c, l) => {
    const u = o === 'svg'
    t === 'class'
      ? ca(e, r, u)
      : t === 'style'
        ? fa(e, s, r)
        : As(t)
          ? vr(t) || Sa(e, t, s, r, i)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : xa(e, t, r, u)
              )
            ? ma(e, t, r, n, i, c, l)
            : (t === 'true-value' ? (e._trueValue = r) : t === 'false-value' && (e._falseValue = r),
              pa(e, t, r, u))
  }
function xa(e, t, s, r) {
  if (r) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && Lo(t) && U(s)))
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const o = e.tagName
    if (o === 'IMG' || o === 'VIDEO' || o === 'CANVAS' || o === 'SOURCE') return !1
  }
  return Lo(t) && de(s) ? !1 : t in e
}
const To = (e) => {
  const t = e.props['onUpdate:modelValue'] || !1
  return N(t) ? (s) => ys(t, s) : t
}
function Pa(e) {
  e.target.composing = !0
}
function Mo(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')))
}
const tr = Symbol('_assign'),
  Zn = {
    created(e, { modifiers: { lazy: t, trim: s, number: r } }, o) {
      e[tr] = To(o)
      const n = r || (o.props && o.props.type === 'number')
      kt(e, t ? 'change' : 'input', (i) => {
        if (i.target.composing) return
        let c = e.value
        s && (c = c.trim()), n && (c = ir(c)), e[tr](c)
      }),
        s &&
          kt(e, 'change', () => {
            e.value = e.value.trim()
          }),
        t || (kt(e, 'compositionstart', Pa), kt(e, 'compositionend', Mo), kt(e, 'change', Mo))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ''
    },
    beforeUpdate(e, { value: t, modifiers: { lazy: s, trim: r, number: o } }, n) {
      if (((e[tr] = To(n)), e.composing)) return
      const i = o || e.type === 'number' ? ir(e.value) : e.value,
        c = t ?? ''
      i !== c &&
        ((document.activeElement === e &&
          e.type !== 'range' &&
          (s || (r && e.value.trim() === c))) ||
          (e.value = c))
    }
  },
  La = ['ctrl', 'shift', 'alt', 'meta'],
  Ta = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && e.button !== 0,
    middle: (e) => 'button' in e && e.button !== 1,
    right: (e) => 'button' in e && e.button !== 2,
    exact: (e, t) => La.some((s) => e[`${s}Key`] && !t.includes(s))
  },
  Xm = (e, t) => {
    const s = e._withMods || (e._withMods = {}),
      r = t.join('.')
    return (
      s[r] ||
      (s[r] = (o, ...n) => {
        for (let i = 0; i < t.length; i++) {
          const c = Ta[t[i]]
          if (c && c(o, t)) return
        }
        return e(o, ...n)
      })
    )
  },
  Ma = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace'
  },
  Ia = (e, t) => {
    const s = e._withKeys || (e._withKeys = {}),
      r = t.join('.')
    return (
      s[r] ||
      (s[r] = (o) => {
        if (!('key' in o)) return
        const n = vt(o.key)
        if (t.some((i) => i === n || Ma[i] === n)) return e(o)
      })
    )
  },
  ka = ge({ patchProp: va }, la)
let Io
function Ea() {
  return Io || (Io = Bl(ka))
}
const Aa = (...e) => {
  const t = Ea().createApp(...e),
    { mount: s } = t
  return (
    (t.mount = (r) => {
      const o = $a(r)
      if (!o) return
      const n = t._component
      !U(n) && !n.render && !n.template && (n.template = o.innerHTML), (o.innerHTML = '')
      const i = s(o, !1, Ra(o))
      return (
        o instanceof Element && (o.removeAttribute('v-cloak'), o.setAttribute('data-v-app', '')), i
      )
    }),
    t
  )
}
function Ra(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml'
}
function $a(e) {
  return de(e) ? document.querySelector(e) : e
}
var Oa = !1
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const Fa = Symbol()
var ko
;(function (e) {
  ;(e.direct = 'direct'), (e.patchObject = 'patch object'), (e.patchFunction = 'patch function')
})(ko || (ko = {}))
function Xa() {
  const e = Li(!0),
    t = e.run(() => _n({}))
  let s = [],
    r = []
  const o = Rr({
    install(n) {
      ;(o._a = n),
        n.provide(Fa, o),
        (n.config.globalProperties.$pinia = o),
        r.forEach((i) => s.push(i)),
        (r = [])
    },
    use(n) {
      return !this._a && !Oa ? r.push(n) : s.push(n), this
    },
    _p: s,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t
  })
  return o
}
/*!
 * vue-router v4.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const Et = typeof document < 'u'
function za(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module'
}
const te = Object.assign
function sr(e, t) {
  const s = {}
  for (const r in t) {
    const o = t[r]
    s[r] = ze(o) ? o.map(e) : e(o)
  }
  return s
}
const ts = () => {},
  ze = Array.isArray,
  ei = /#/g,
  Da = /&/g,
  Ba = /\//g,
  ja = /=/g,
  Wa = /\?/g,
  ti = /\+/g,
  Na = /%5B/g,
  Ha = /%5D/g,
  si = /%5E/g,
  Ua = /%60/g,
  ri = /%7B/g,
  Ga = /%7C/g,
  oi = /%7D/g,
  Ka = /%20/g
function Br(e) {
  return encodeURI('' + e)
    .replace(Ga, '|')
    .replace(Na, '[')
    .replace(Ha, ']')
}
function Va(e) {
  return Br(e).replace(ri, '{').replace(oi, '}').replace(si, '^')
}
function _r(e) {
  return Br(e)
    .replace(ti, '%2B')
    .replace(Ka, '+')
    .replace(ei, '%23')
    .replace(Da, '%26')
    .replace(Ua, '`')
    .replace(ri, '{')
    .replace(oi, '}')
    .replace(si, '^')
}
function qa(e) {
  return _r(e).replace(ja, '%3D')
}
function Ja(e) {
  return Br(e).replace(ei, '%23').replace(Wa, '%3F')
}
function Ya(e) {
  return e == null ? '' : Ja(e).replace(Ba, '%2F')
}
function ls(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
const Qa = /\/$/,
  Za = (e) => e.replace(Qa, '')
function rr(e, t, s = '/') {
  let r,
    o = {},
    n = '',
    i = ''
  const c = t.indexOf('#')
  let l = t.indexOf('?')
  return (
    c < l && c >= 0 && (l = -1),
    l > -1 && ((r = t.slice(0, l)), (n = t.slice(l + 1, c > -1 ? c : t.length)), (o = e(n))),
    c > -1 && ((r = r || t.slice(0, c)), (i = t.slice(c, t.length))),
    (r = rc(r ?? t, s)),
    { fullPath: r + (n && '?') + n + i, path: r, query: o, hash: ls(i) }
  )
}
function ec(e, t) {
  const s = t.query ? e(t.query) : ''
  return t.path + (s && '?') + s + (t.hash || '')
}
function Eo(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/'
}
function tc(e, t, s) {
  const r = t.matched.length - 1,
    o = s.matched.length - 1
  return (
    r > -1 &&
    r === o &&
    zt(t.matched[r], s.matched[o]) &&
    ni(t.params, s.params) &&
    e(t.query) === e(s.query) &&
    t.hash === s.hash
  )
}
function zt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function ni(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const s in e) if (!sc(e[s], t[s])) return !1
  return !0
}
function sc(e, t) {
  return ze(e) ? Ao(e, t) : ze(t) ? Ao(t, e) : e === t
}
function Ao(e, t) {
  return ze(t)
    ? e.length === t.length && e.every((s, r) => s === t[r])
    : e.length === 1 && e[0] === t
}
function rc(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const s = t.split('/'),
    r = e.split('/'),
    o = r[r.length - 1]
  ;(o === '..' || o === '.') && r.push('')
  let n = s.length - 1,
    i,
    c
  for (i = 0; i < r.length; i++)
    if (((c = r[i]), c !== '.'))
      if (c === '..') n > 1 && n--
      else break
  return s.slice(0, n).join('/') + '/' + r.slice(i).join('/')
}
var as
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(as || (as = {}))
var ss
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(ss || (ss = {}))
function oc(e) {
  if (!e)
    if (Et) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), Za(e)
}
const nc = /^[^#]+#/
function ic(e, t) {
  return e.replace(nc, '#') + t
}
function lc(e, t) {
  const s = document.documentElement.getBoundingClientRect(),
    r = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: r.left - s.left - (t.left || 0),
    top: r.top - s.top - (t.top || 0)
  }
}
const Gs = () => ({ left: window.scrollX, top: window.scrollY })
function ac(e) {
  let t
  if ('el' in e) {
    const s = e.el,
      r = typeof s == 'string' && s.startsWith('#'),
      o =
        typeof s == 'string'
          ? r
            ? document.getElementById(s.slice(1))
            : document.querySelector(s)
          : s
    if (!o) return
    t = lc(o, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      )
}
function Ro(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Cr = new Map()
function cc(e, t) {
  Cr.set(e, t)
}
function hc(e) {
  const t = Cr.get(e)
  return Cr.delete(e), t
}
let uc = () => location.protocol + '//' + location.host
function ii(e, t) {
  const { pathname: s, search: r, hash: o } = t,
    n = e.indexOf('#')
  if (n > -1) {
    let c = o.includes(e.slice(n)) ? e.slice(n).length : 1,
      l = o.slice(c)
    return l[0] !== '/' && (l = '/' + l), Eo(l, '')
  }
  return Eo(s, e) + r + o
}
function fc(e, t, s, r) {
  let o = [],
    n = [],
    i = null
  const c = ({ state: p }) => {
    const S = ii(e, location),
      E = s.value,
      M = t.value
    let W = 0
    if (p) {
      if (((s.value = S), (t.value = p), i && i === E)) {
        i = null
        return
      }
      W = M ? p.position - M.position : 0
    } else r(S)
    o.forEach((P) => {
      P(s.value, E, {
        delta: W,
        type: as.pop,
        direction: W ? (W > 0 ? ss.forward : ss.back) : ss.unknown
      })
    })
  }
  function l() {
    i = s.value
  }
  function u(p) {
    o.push(p)
    const S = () => {
      const E = o.indexOf(p)
      E > -1 && o.splice(E, 1)
    }
    return n.push(S), S
  }
  function f() {
    const { history: p } = window
    p.state && p.replaceState(te({}, p.state, { scroll: Gs() }), '')
  }
  function m() {
    for (const p of n) p()
    ;(n = []),
      window.removeEventListener('popstate', c),
      window.removeEventListener('beforeunload', f)
  }
  return (
    window.addEventListener('popstate', c),
    window.addEventListener('beforeunload', f, { passive: !0 }),
    { pauseListeners: l, listen: u, destroy: m }
  )
}
function $o(e, t, s, r = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: s,
    replaced: r,
    position: window.history.length,
    scroll: o ? Gs() : null
  }
}
function dc(e) {
  const { history: t, location: s } = window,
    r = { value: ii(e, s) },
    o = { value: t.state }
  o.value ||
    n(
      r.value,
      {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
      },
      !0
    )
  function n(l, u, f) {
    const m = e.indexOf('#'),
      p = m > -1 ? (s.host && document.querySelector('base') ? e : e.slice(m)) + l : uc() + e + l
    try {
      t[f ? 'replaceState' : 'pushState'](u, '', p), (o.value = u)
    } catch (S) {
      console.error(S), s[f ? 'replace' : 'assign'](p)
    }
  }
  function i(l, u) {
    const f = te({}, t.state, $o(o.value.back, l, o.value.forward, !0), u, {
      position: o.value.position
    })
    n(l, f, !0), (r.value = l)
  }
  function c(l, u) {
    const f = te({}, o.value, t.state, { forward: l, scroll: Gs() })
    n(f.current, f, !0)
    const m = te({}, $o(r.value, l, null), { position: f.position + 1 }, u)
    n(l, m, !1), (r.value = l)
  }
  return { location: r, state: o, push: c, replace: i }
}
function pc(e) {
  e = oc(e)
  const t = dc(e),
    s = fc(e, t.state, t.location, t.replace)
  function r(n, i = !0) {
    i || s.pauseListeners(), history.go(n)
  }
  const o = te({ location: '', base: e, go: r, createHref: ic.bind(null, e) }, t, s)
  return (
    Object.defineProperty(o, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(o, 'state', { enumerable: !0, get: () => t.state.value }),
    o
  )
}
function mc(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function li(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const tt = {
    path: '/',
    name: void 0,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: void 0
  },
  ai = Symbol('')
var Oo
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated')
})(Oo || (Oo = {}))
function Dt(e, t) {
  return te(new Error(), { type: e, [ai]: !0 }, t)
}
function Ve(e, t) {
  return e instanceof Error && ai in e && (t == null || !!(e.type & t))
}
const Fo = '[^/]+?',
  gc = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Sc = /[.+*?^${}()[\]/\\]/g
function yc(e, t) {
  const s = te({}, gc, t),
    r = []
  let o = s.start ? '^' : ''
  const n = []
  for (const u of e) {
    const f = u.length ? [] : [90]
    s.strict && !u.length && (o += '/')
    for (let m = 0; m < u.length; m++) {
      const p = u[m]
      let S = 40 + (s.sensitive ? 0.25 : 0)
      if (p.type === 0) m || (o += '/'), (o += p.value.replace(Sc, '\\$&')), (S += 40)
      else if (p.type === 1) {
        const { value: E, repeatable: M, optional: W, regexp: P } = p
        n.push({ name: E, repeatable: M, optional: W })
        const C = P || Fo
        if (C !== Fo) {
          S += 10
          try {
            new RegExp(`(${C})`)
          } catch (Y) {
            throw new Error(`Invalid custom RegExp for param "${E}" (${C}): ` + Y.message)
          }
        }
        let z = M ? `((?:${C})(?:/(?:${C}))*)` : `(${C})`
        m || (z = W && u.length < 2 ? `(?:/${z})` : '/' + z),
          W && (z += '?'),
          (o += z),
          (S += 20),
          W && (S += -8),
          M && (S += -20),
          C === '.*' && (S += -50)
      }
      f.push(S)
    }
    r.push(f)
  }
  if (s.strict && s.end) {
    const u = r.length - 1
    r[u][r[u].length - 1] += 0.7000000000000001
  }
  s.strict || (o += '/?'), s.end ? (o += '$') : s.strict && (o += '(?:/|$)')
  const i = new RegExp(o, s.sensitive ? '' : 'i')
  function c(u) {
    const f = u.match(i),
      m = {}
    if (!f) return null
    for (let p = 1; p < f.length; p++) {
      const S = f[p] || '',
        E = n[p - 1]
      m[E.name] = S && E.repeatable ? S.split('/') : S
    }
    return m
  }
  function l(u) {
    let f = '',
      m = !1
    for (const p of e) {
      ;(!m || !f.endsWith('/')) && (f += '/'), (m = !1)
      for (const S of p)
        if (S.type === 0) f += S.value
        else if (S.type === 1) {
          const { value: E, repeatable: M, optional: W } = S,
            P = E in u ? u[E] : ''
          if (ze(P) && !M)
            throw new Error(
              `Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`
            )
          const C = ze(P) ? P.join('/') : P
          if (!C)
            if (W) p.length < 2 && (f.endsWith('/') ? (f = f.slice(0, -1)) : (m = !0))
            else throw new Error(`Missing required param "${E}"`)
          f += C
        }
    }
    return f || '/'
  }
  return { re: i, score: r, keys: n, parse: c, stringify: l }
}
function _c(e, t) {
  let s = 0
  for (; s < e.length && s < t.length; ) {
    const r = t[s] - e[s]
    if (r) return r
    s++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0
}
function Cc(e, t) {
  let s = 0
  const r = e.score,
    o = t.score
  for (; s < r.length && s < o.length; ) {
    const n = _c(r[s], o[s])
    if (n) return n
    s++
  }
  if (Math.abs(o.length - r.length) === 1) {
    if (Xo(r)) return 1
    if (Xo(o)) return -1
  }
  return o.length - r.length
}
function Xo(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const wc = { type: 0, value: '' },
  bc = /[a-zA-Z0-9_]/
function vc(e) {
  if (!e) return [[]]
  if (e === '/') return [[wc]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(S) {
    throw new Error(`ERR (${s})/"${u}": ${S}`)
  }
  let s = 0,
    r = s
  const o = []
  let n
  function i() {
    n && o.push(n), (n = [])
  }
  let c = 0,
    l,
    u = '',
    f = ''
  function m() {
    u &&
      (s === 0
        ? n.push({ type: 0, value: u })
        : s === 1 || s === 2 || s === 3
          ? (n.length > 1 &&
              (l === '*' || l === '+') &&
              t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),
            n.push({
              type: 1,
              value: u,
              regexp: f,
              repeatable: l === '*' || l === '+',
              optional: l === '*' || l === '?'
            }))
          : t('Invalid state to consume buffer'),
      (u = ''))
  }
  function p() {
    u += l
  }
  for (; c < e.length; ) {
    if (((l = e[c++]), l === '\\' && s !== 2)) {
      ;(r = s), (s = 4)
      continue
    }
    switch (s) {
      case 0:
        l === '/' ? (u && m(), i()) : l === ':' ? (m(), (s = 1)) : p()
        break
      case 4:
        p(), (s = r)
        break
      case 1:
        l === '('
          ? (s = 2)
          : bc.test(l)
            ? p()
            : (m(), (s = 0), l !== '*' && l !== '?' && l !== '+' && c--)
        break
      case 2:
        l === ')' ? (f[f.length - 1] == '\\' ? (f = f.slice(0, -1) + l) : (s = 3)) : (f += l)
        break
      case 3:
        m(), (s = 0), l !== '*' && l !== '?' && l !== '+' && c--, (f = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return s === 2 && t(`Unfinished custom RegExp for param "${u}"`), m(), i(), o
}
function xc(e, t, s) {
  const r = yc(vc(e.path), s),
    o = te(r, { record: e, parent: t, children: [], alias: [] })
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o
}
function Pc(e, t) {
  const s = [],
    r = new Map()
  t = Bo({ strict: !1, end: !0, sensitive: !1 }, t)
  function o(f) {
    return r.get(f)
  }
  function n(f, m, p) {
    const S = !p,
      E = Lc(f)
    E.aliasOf = p && p.record
    const M = Bo(t, f),
      W = [E]
    if ('alias' in f) {
      const z = typeof f.alias == 'string' ? [f.alias] : f.alias
      for (const Y of z)
        W.push(
          te({}, E, {
            components: p ? p.record.components : E.components,
            path: Y,
            aliasOf: p ? p.record : E
          })
        )
    }
    let P, C
    for (const z of W) {
      const { path: Y } = z
      if (m && Y[0] !== '/') {
        const he = m.record.path,
          G = he[he.length - 1] === '/' ? '' : '/'
        z.path = m.record.path + (Y && G + Y)
      }
      if (
        ((P = xc(z, m, M)),
        p
          ? p.alias.push(P)
          : ((C = C || P), C !== P && C.alias.push(P), S && f.name && !Do(P) && i(f.name)),
        E.children)
      ) {
        const he = E.children
        for (let G = 0; G < he.length; G++) n(he[G], P, p && p.children[G])
      }
      ;(p = p || P),
        ((P.record.components && Object.keys(P.record.components).length) ||
          P.record.name ||
          P.record.redirect) &&
          l(P)
    }
    return C
      ? () => {
          i(C)
        }
      : ts
  }
  function i(f) {
    if (li(f)) {
      const m = r.get(f)
      m && (r.delete(f), s.splice(s.indexOf(m), 1), m.children.forEach(i), m.alias.forEach(i))
    } else {
      const m = s.indexOf(f)
      m > -1 &&
        (s.splice(m, 1),
        f.record.name && r.delete(f.record.name),
        f.children.forEach(i),
        f.alias.forEach(i))
    }
  }
  function c() {
    return s
  }
  function l(f) {
    let m = 0
    for (
      ;
      m < s.length && Cc(f, s[m]) >= 0 && (f.record.path !== s[m].record.path || !ci(f, s[m]));

    )
      m++
    s.splice(m, 0, f), f.record.name && !Do(f) && r.set(f.record.name, f)
  }
  function u(f, m) {
    let p,
      S = {},
      E,
      M
    if ('name' in f && f.name) {
      if (((p = r.get(f.name)), !p)) throw Dt(1, { location: f })
      ;(M = p.record.name),
        (S = te(
          zo(
            m.params,
            p.keys
              .filter((C) => !C.optional)
              .concat(p.parent ? p.parent.keys.filter((C) => C.optional) : [])
              .map((C) => C.name)
          ),
          f.params &&
            zo(
              f.params,
              p.keys.map((C) => C.name)
            )
        )),
        (E = p.stringify(S))
    } else if (f.path != null)
      (E = f.path), (p = s.find((C) => C.re.test(E))), p && ((S = p.parse(E)), (M = p.record.name))
    else {
      if (((p = m.name ? r.get(m.name) : s.find((C) => C.re.test(m.path))), !p))
        throw Dt(1, { location: f, currentLocation: m })
      ;(M = p.record.name), (S = te({}, m.params, f.params)), (E = p.stringify(S))
    }
    const W = []
    let P = p
    for (; P; ) W.unshift(P.record), (P = P.parent)
    return { name: M, path: E, params: S, matched: W, meta: Mc(W) }
  }
  return (
    e.forEach((f) => n(f)),
    { addRoute: n, resolve: u, removeRoute: i, getRoutes: c, getRecordMatcher: o }
  )
}
function zo(e, t) {
  const s = {}
  for (const r of t) r in e && (s[r] = e[r])
  return s
}
function Lc(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Tc(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component }
  }
}
function Tc(e) {
  const t = {},
    s = e.props || !1
  if ('component' in e) t.default = s
  else for (const r in e.components) t[r] = typeof s == 'object' ? s[r] : s
  return t
}
function Do(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function Mc(e) {
  return e.reduce((t, s) => te(t, s.meta), {})
}
function Bo(e, t) {
  const s = {}
  for (const r in e) s[r] = r in t ? t[r] : e[r]
  return s
}
function ci(e, t) {
  return t.children.some((s) => s === e || ci(e, s))
}
function Ic(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const r = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let o = 0; o < r.length; ++o) {
    const n = r[o].replace(ti, ' '),
      i = n.indexOf('='),
      c = ls(i < 0 ? n : n.slice(0, i)),
      l = i < 0 ? null : ls(n.slice(i + 1))
    if (c in t) {
      let u = t[c]
      ze(u) || (u = t[c] = [u]), u.push(l)
    } else t[c] = l
  }
  return t
}
function jo(e) {
  let t = ''
  for (let s in e) {
    const r = e[s]
    if (((s = qa(s)), r == null)) {
      r !== void 0 && (t += (t.length ? '&' : '') + s)
      continue
    }
    ;(ze(r) ? r.map((n) => n && _r(n)) : [r && _r(r)]).forEach((n) => {
      n !== void 0 && ((t += (t.length ? '&' : '') + s), n != null && (t += '=' + n))
    })
  }
  return t
}
function kc(e) {
  const t = {}
  for (const s in e) {
    const r = e[s]
    r !== void 0 &&
      (t[s] = ze(r) ? r.map((o) => (o == null ? null : '' + o)) : r == null ? r : '' + r)
  }
  return t
}
const Ec = Symbol(''),
  Wo = Symbol(''),
  jr = Symbol(''),
  hi = Symbol(''),
  wr = Symbol('')
function Vt() {
  let e = []
  function t(r) {
    return (
      e.push(r),
      () => {
        const o = e.indexOf(r)
        o > -1 && e.splice(o, 1)
      }
    )
  }
  function s() {
    e = []
  }
  return { add: t, list: () => e.slice(), reset: s }
}
function nt(e, t, s, r, o, n = (i) => i()) {
  const i = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || [])
  return () =>
    new Promise((c, l) => {
      const u = (p) => {
          p === !1
            ? l(Dt(4, { from: s, to: t }))
            : p instanceof Error
              ? l(p)
              : mc(p)
                ? l(Dt(2, { from: t, to: p }))
                : (i && r.enterCallbacks[o] === i && typeof p == 'function' && i.push(p), c())
        },
        f = n(() => e.call(r && r.instances[o], t, s, u))
      let m = Promise.resolve(f)
      e.length < 3 && (m = m.then(u)), m.catch((p) => l(p))
    })
}
function or(e, t, s, r, o = (n) => n()) {
  const n = []
  for (const i of e)
    for (const c in i.components) {
      let l = i.components[c]
      if (!(t !== 'beforeRouteEnter' && !i.instances[c]))
        if (Ac(l)) {
          const f = (l.__vccOpts || l)[t]
          f && n.push(nt(f, s, r, i, c, o))
        } else {
          let u = l()
          n.push(() =>
            u.then((f) => {
              if (!f)
                return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${i.path}"`))
              const m = za(f) ? f.default : f
              i.components[c] = m
              const S = (m.__vccOpts || m)[t]
              return S && nt(S, s, r, i, c, o)()
            })
          )
        }
    }
  return n
}
function Ac(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e
}
function No(e) {
  const t = Je(jr),
    s = Je(hi),
    r = $e(() => t.resolve(Re(e.to))),
    o = $e(() => {
      const { matched: l } = r.value,
        { length: u } = l,
        f = l[u - 1],
        m = s.matched
      if (!f || !m.length) return -1
      const p = m.findIndex(zt.bind(null, f))
      if (p > -1) return p
      const S = Ho(l[u - 2])
      return u > 1 && Ho(f) === S && m[m.length - 1].path !== S
        ? m.findIndex(zt.bind(null, l[u - 2]))
        : p
    }),
    n = $e(() => o.value > -1 && Oc(s.params, r.value.params)),
    i = $e(() => o.value > -1 && o.value === s.matched.length - 1 && ni(s.params, r.value.params))
  function c(l = {}) {
    return $c(l) ? t[Re(e.replace) ? 'replace' : 'push'](Re(e.to)).catch(ts) : Promise.resolve()
  }
  return { route: r, href: $e(() => r.value.href), isActive: n, isExactActive: i, navigate: c }
}
const Rc = Rn({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' }
    },
    useLink: No,
    setup(e, { slots: t }) {
      const s = Xs(No(e)),
        { options: r } = Je(jr),
        o = $e(() => ({
          [Uo(e.activeClass, r.linkActiveClass, 'router-link-active')]: s.isActive,
          [Uo(e.exactActiveClass, r.linkExactActiveClass, 'router-link-exact-active')]:
            s.isExactActive
        }))
      return () => {
        const n = t.default && t.default(s)
        return e.custom
          ? n
          : Yn(
              'a',
              {
                'aria-current': s.isExactActive ? e.ariaCurrentValue : null,
                href: s.href,
                onClick: s.navigate,
                class: o.value
              },
              n
            )
      }
    }
  }),
  it = Rc
function $c(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function Oc(e, t) {
  for (const s in t) {
    const r = t[s],
      o = e[s]
    if (typeof r == 'string') {
      if (r !== o) return !1
    } else if (!ze(o) || o.length !== r.length || r.some((n, i) => n !== o[i])) return !1
  }
  return !0
}
function Ho(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const Uo = (e, t, s) => e ?? t ?? s,
  Fc = Rn({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: s }) {
      const r = Je(wr),
        o = $e(() => e.route || r.value),
        n = Je(Wo, 0),
        i = $e(() => {
          let u = Re(n)
          const { matched: f } = o.value
          let m
          for (; (m = f[u]) && !m.components; ) u++
          return u
        }),
        c = $e(() => o.value.matched[i.value])
      bs(
        Wo,
        $e(() => i.value + 1)
      ),
        bs(Ec, c),
        bs(wr, o)
      const l = _n()
      return (
        Cs(
          () => [l.value, c.value, e.name],
          ([u, f, m], [p, S, E]) => {
            f &&
              ((f.instances[m] = u),
              S &&
                S !== f &&
                u &&
                u === p &&
                (f.leaveGuards.size || (f.leaveGuards = S.leaveGuards),
                f.updateGuards.size || (f.updateGuards = S.updateGuards))),
              u && f && (!S || !zt(f, S) || !p) && (f.enterCallbacks[m] || []).forEach((M) => M(u))
          },
          { flush: 'post' }
        ),
        () => {
          const u = o.value,
            f = e.name,
            m = c.value,
            p = m && m.components[f]
          if (!p) return Go(s.default, { Component: p, route: u })
          const S = m.props[f],
            E = S ? (S === !0 ? u.params : typeof S == 'function' ? S(u) : S) : null,
            W = Yn(
              p,
              te({}, E, t, {
                onVnodeUnmounted: (P) => {
                  P.component.isUnmounted && (m.instances[f] = null)
                },
                ref: l
              })
            )
          return Go(s.default, { Component: W, route: u }) || W
        }
      )
    }
  })
function Go(e, t) {
  if (!e) return null
  const s = e(t)
  return s.length === 1 ? s[0] : s
}
const jt = Fc
function Xc(e) {
  const t = Pc(e.routes, e),
    s = e.parseQuery || Ic,
    r = e.stringifyQuery || jo,
    o = e.history,
    n = Vt(),
    i = Vt(),
    c = Vt(),
    l = qi(tt)
  let u = tt
  Et && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual')
  const f = sr.bind(null, (_) => '' + _),
    m = sr.bind(null, Ya),
    p = sr.bind(null, ls)
  function S(_, $) {
    let A, X
    return li(_) ? ((A = t.getRecordMatcher(_)), (X = $)) : (X = _), t.addRoute(X, A)
  }
  function E(_) {
    const $ = t.getRecordMatcher(_)
    $ && t.removeRoute($)
  }
  function M() {
    return t.getRoutes().map((_) => _.record)
  }
  function W(_) {
    return !!t.getRecordMatcher(_)
  }
  function P(_, $) {
    if ((($ = te({}, $ || l.value)), typeof _ == 'string')) {
      const d = rr(s, _, $.path),
        g = t.resolve({ path: d.path }, $),
        w = o.createHref(d.fullPath)
      return te(d, g, { params: p(g.params), hash: ls(d.hash), redirectedFrom: void 0, href: w })
    }
    let A
    if (_.path != null) A = te({}, _, { path: rr(s, _.path, $.path).path })
    else {
      const d = te({}, _.params)
      for (const g in d) d[g] == null && delete d[g]
      ;(A = te({}, _, { params: m(d) })), ($.params = m($.params))
    }
    const X = t.resolve(A, $),
      ee = _.hash || ''
    X.params = f(p(X.params))
    const le = ec(r, te({}, _, { hash: Va(ee), path: X.path })),
      h = o.createHref(le)
    return te({ fullPath: le, hash: ee, query: r === jo ? kc(_.query) : _.query || {} }, X, {
      redirectedFrom: void 0,
      href: h
    })
  }
  function C(_) {
    return typeof _ == 'string' ? rr(s, _, l.value.path) : te({}, _)
  }
  function z(_, $) {
    if (u !== _) return Dt(8, { from: $, to: _ })
  }
  function Y(_) {
    return Ce(_)
  }
  function he(_) {
    return Y(te(C(_), { replace: !0 }))
  }
  function G(_) {
    const $ = _.matched[_.matched.length - 1]
    if ($ && $.redirect) {
      const { redirect: A } = $
      let X = typeof A == 'function' ? A(_) : A
      return (
        typeof X == 'string' &&
          ((X = X.includes('?') || X.includes('#') ? (X = C(X)) : { path: X }), (X.params = {})),
        te({ query: _.query, hash: _.hash, params: X.path != null ? {} : _.params }, X)
      )
    }
  }
  function Ce(_, $) {
    const A = (u = P(_)),
      X = l.value,
      ee = _.state,
      le = _.force,
      h = _.replace === !0,
      d = G(A)
    if (d)
      return Ce(
        te(C(d), { state: typeof d == 'object' ? te({}, ee, d.state) : ee, force: le, replace: h }),
        $ || A
      )
    const g = A
    g.redirectedFrom = $
    let w
    return (
      !le && tc(r, X, A) && ((w = Dt(16, { to: g, from: X })), je(X, X, !0, !1)),
      (w ? Promise.resolve(w) : De(g, X))
        .catch((y) => (Ve(y) ? (Ve(y, 2) ? y : Ze(y)) : Z(y, g, X)))
        .then((y) => {
          if (y) {
            if (Ve(y, 2))
              return Ce(
                te({ replace: h }, C(y.to), {
                  state: typeof y.to == 'object' ? te({}, ee, y.to.state) : ee,
                  force: le
                }),
                $ || g
              )
          } else y = dt(g, X, !0, h, ee)
          return Qe(g, X, y), y
        })
    )
  }
  function Ie(_, $) {
    const A = z(_, $)
    return A ? Promise.reject(A) : Promise.resolve()
  }
  function ft(_) {
    const $ = Mt.values().next().value
    return $ && typeof $.runWithContext == 'function' ? $.runWithContext(_) : _()
  }
  function De(_, $) {
    let A
    const [X, ee, le] = zc(_, $)
    A = or(X.reverse(), 'beforeRouteLeave', _, $)
    for (const d of X)
      d.leaveGuards.forEach((g) => {
        A.push(nt(g, _, $))
      })
    const h = Ie.bind(null, _, $)
    return (
      A.push(h),
      Se(A)
        .then(() => {
          A = []
          for (const d of n.list()) A.push(nt(d, _, $))
          return A.push(h), Se(A)
        })
        .then(() => {
          A = or(ee, 'beforeRouteUpdate', _, $)
          for (const d of ee)
            d.updateGuards.forEach((g) => {
              A.push(nt(g, _, $))
            })
          return A.push(h), Se(A)
        })
        .then(() => {
          A = []
          for (const d of le)
            if (d.beforeEnter)
              if (ze(d.beforeEnter)) for (const g of d.beforeEnter) A.push(nt(g, _, $))
              else A.push(nt(d.beforeEnter, _, $))
          return A.push(h), Se(A)
        })
        .then(
          () => (
            _.matched.forEach((d) => (d.enterCallbacks = {})),
            (A = or(le, 'beforeRouteEnter', _, $, ft)),
            A.push(h),
            Se(A)
          )
        )
        .then(() => {
          A = []
          for (const d of i.list()) A.push(nt(d, _, $))
          return A.push(h), Se(A)
        })
        .catch((d) => (Ve(d, 8) ? d : Promise.reject(d)))
    )
  }
  function Qe(_, $, A) {
    c.list().forEach((X) => ft(() => X(_, $, A)))
  }
  function dt(_, $, A, X, ee) {
    const le = z(_, $)
    if (le) return le
    const h = $ === tt,
      d = Et ? history.state : {}
    A &&
      (X || h
        ? o.replace(_.fullPath, te({ scroll: h && d && d.scroll }, ee))
        : o.push(_.fullPath, ee)),
      (l.value = _),
      je(_, $, A, h),
      Ze()
  }
  let Be
  function Ht() {
    Be ||
      (Be = o.listen((_, $, A) => {
        if (!hs.listening) return
        const X = P(_),
          ee = G(X)
        if (ee) {
          Ce(te(ee, { replace: !0 }), X).catch(ts)
          return
        }
        u = X
        const le = l.value
        Et && cc(Ro(le.fullPath, A.delta), Gs()),
          De(X, le)
            .catch((h) =>
              Ve(h, 12)
                ? h
                : Ve(h, 2)
                  ? (Ce(h.to, X)
                      .then((d) => {
                        Ve(d, 20) && !A.delta && A.type === as.pop && o.go(-1, !1)
                      })
                      .catch(ts),
                    Promise.reject())
                  : (A.delta && o.go(-A.delta, !1), Z(h, X, le))
            )
            .then((h) => {
              ;(h = h || dt(X, le, !1)),
                h &&
                  (A.delta && !Ve(h, 8)
                    ? o.go(-A.delta, !1)
                    : A.type === as.pop && Ve(h, 20) && o.go(-1, !1)),
                Qe(X, le, h)
            })
            .catch(ts)
      }))
  }
  let Lt = Vt(),
    pe = Vt(),
    oe
  function Z(_, $, A) {
    Ze(_)
    const X = pe.list()
    return X.length ? X.forEach((ee) => ee(_, $, A)) : console.error(_), Promise.reject(_)
  }
  function Ke() {
    return oe && l.value !== tt
      ? Promise.resolve()
      : new Promise((_, $) => {
          Lt.add([_, $])
        })
  }
  function Ze(_) {
    return oe || ((oe = !_), Ht(), Lt.list().forEach(([$, A]) => (_ ? A(_) : $())), Lt.reset()), _
  }
  function je(_, $, A, X) {
    const { scrollBehavior: ee } = e
    if (!Et || !ee) return Promise.resolve()
    const le =
      (!A && hc(Ro(_.fullPath, 0))) || ((X || !A) && history.state && history.state.scroll) || null
    return vn()
      .then(() => ee(_, $, le))
      .then((h) => h && ac(h))
      .catch((h) => Z(h, _, $))
  }
  const be = (_) => o.go(_)
  let Tt
  const Mt = new Set(),
    hs = {
      currentRoute: l,
      listening: !0,
      addRoute: S,
      removeRoute: E,
      hasRoute: W,
      getRoutes: M,
      resolve: P,
      options: e,
      push: Y,
      replace: he,
      go: be,
      back: () => be(-1),
      forward: () => be(1),
      beforeEach: n.add,
      beforeResolve: i.add,
      afterEach: c.add,
      onError: pe.add,
      isReady: Ke,
      install(_) {
        const $ = this
        _.component('RouterLink', it),
          _.component('RouterView', jt),
          (_.config.globalProperties.$router = $),
          Object.defineProperty(_.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => Re(l)
          }),
          Et && !Tt && l.value === tt && ((Tt = !0), Y(o.location).catch((ee) => {}))
        const A = {}
        for (const ee in tt)
          Object.defineProperty(A, ee, { get: () => l.value[ee], enumerable: !0 })
        _.provide(jr, $), _.provide(hi, pn(A)), _.provide(wr, l)
        const X = _.unmount
        Mt.add(_),
          (_.unmount = function () {
            Mt.delete(_),
              Mt.size < 1 &&
                ((u = tt), Be && Be(), (Be = null), (l.value = tt), (Tt = !1), (oe = !1)),
              X()
          })
      }
    }
  function Se(_) {
    return _.reduce(($, A) => $.then(() => ft(A)), Promise.resolve())
  }
  return hs
}
function zc(e, t) {
  const s = [],
    r = [],
    o = [],
    n = Math.max(t.matched.length, e.matched.length)
  for (let i = 0; i < n; i++) {
    const c = t.matched[i]
    c && (e.matched.find((u) => zt(u, c)) ? r.push(c) : s.push(c))
    const l = e.matched[i]
    l && (t.matched.find((u) => zt(u, l)) || o.push(l))
  }
  return [s, r, o]
}
const re = (e, t) => {
    const s = e.__vccOpts || e
    for (const [r, o] of t) s[r] = o
    return s
  },
  Dc = {},
  Bc = { class: 'my-4 cursor-pointer' },
  jc = a(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', height: '25', width: '20', viewBox: '0 0 384 512' },
    [
      a('path', {
        fill: 'white',
        d: 'M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z'
      })
    ],
    -1
  ),
  Wc = [jc]
function Nc(e, t) {
  return b(), x('div', Bc, Wc)
}
const Ks = re(Dc, [['render', Nc]]),
  Hc = [
    {
      customerName: 'Sarah M.',
      customerComment:
        "I'm blown away by the quality and style of the clothes I received from Shop.co, From casual wear to elegant dresses, every piece I've bought has exceeded my expectations"
    },
    {
      customerName: 'Mark M.',
      customerComment:
        "I'm blown away by the quality and style of the clothes I received from Shop.co, From casual wear to elegant dresses, every piece I've bought has exceeded my expectations"
    },
    {
      customerName: 'Alex K.',
      customerComment:
        "I'm blown away by the quality and style of the clothes I received from Shop.co, From casual wear to elegant dresses, every piece I've bought has exceeded my expectations"
    },
    {
      customerName: 'Marcos R.',
      customerComment:
        "I'm blown away by the quality and style of the clothes I received from Shop.co, From casual wear to elegant dresses, every piece I've bought has exceeded my expectations"
    },
    {
      customerName: 'James L.',
      customerComment:
        "I'm blown away by the quality and style of the clothes I received from Shop.co, From casual wear to elegant dresses, every piece I've bought has exceeded my expectations"
    },
    {
      customerName: 'John R.',
      customerComment:
        "I'm blown away by the quality and style of the clothes I received from Shop.co, From casual wear to elegant dresses, every piece I've bought has exceeded my expectations"
    },
    {
      customerName: 'Abdullah A.',
      customerComment:
        "I'm blown away by the quality and style of the clothes I received from Shop.co, From casual wear to elegant dresses, every piece I've bought has exceeded my expectations"
    },
    {
      customerName: 'Ahmed S.',
      customerComment:
        "I'm blown away by the quality and style of the clothes I received from Shop.co, From casual wear to elegant dresses, every piece I've bought has exceeded my expectations"
    }
  ],
  Uc = [
    {
      question: ' Lorem ipsum dolor sit amet consectetur adipisicing elit',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet doloribus harum ipsum quae sequi eum cum, modi ipsam voluptatum, quasi repellendus eos blanditiis. Similique totam minima maxime fuga ullam nulla',
      'isSeen ': !1
    },
    {
      question: ' Lorem ipsum dolor sit amet consectetur adipisicing elit',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet doloribus harum ipsum quae sequi eum cum, modi ipsam voluptatum, quasi repellendus eos blanditiis. Similique totam minima maxime fuga ullam nulla',
      'isSeen ': !1
    },
    {
      question: ' Lorem ipsum dolor sit amet consectetur adipisicing elit',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet doloribus harum ipsum quae sequi eum cum, modi ipsam voluptatum, quasi repellendus eos blanditiis. Similique totam minima maxime fuga ullam nulla',
      'isSeen ': !1
    },
    {
      question: ' Lorem ipsum dolor sit amet consectetur adipisicing elit',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet doloribus harum ipsum quae sequi eum cum, modi ipsam voluptatum, quasi repellendus eos blanditiis. Similique totam minima maxime fuga ullam nulla',
      'isSeen ': !1
    },
    {
      question: ' Lorem ipsum dolor sit amet consectetur adipisicing elit',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet doloribus harum ipsum quae sequi eum cum, modi ipsam voluptatum, quasi repellendus eos blanditiis. Similique totam minima maxime fuga ullam nulla',
      'isSeen ': !1
    },
    {
      question: ' Lorem ipsum dolor sit amet consectetur adipisicing elit',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet doloribus harum ipsum quae sequi eum cum, modi ipsam voluptatum, quasi repellendus eos blanditiis. Similique totam minima maxime fuga ullam nulla',
      'isSeen ': !1
    },
    {
      question: ' Lorem ipsum dolor sit amet consectetur adipisicing elit',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet doloribus harum ipsum quae sequi eum cum, modi ipsam voluptatum, quasi repellendus eos blanditiis. Similique totam minima maxime fuga ullam nulla',
      'isSeen ': !1
    },
    {
      question: ' Lorem ipsum dolor sit amet consectetur adipisicing elit',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet doloribus harum ipsum quae sequi eum cum, modi ipsam voluptatum, quasi repellendus eos blanditiis. Similique totam minima maxime fuga ullam nulla',
      'isSeen ': !1
    }
  ],
  Gc = {
    Colors: [
      { colorName: 'Green' },
      { colorName: 'Red' },
      { colorName: 'Yellow' },
      { colorName: 'Orange' },
      { colorName: 'Syan' },
      { colorName: 'Blue' },
      { colorName: 'Violet' },
      { colorName: 'Pink' },
      { colorName: 'White' },
      { colorName: 'Black' }
    ],
    Sizes: [
      { Size: 'XXS' },
      { Size: 'XS' },
      { Size: 'S' },
      { Size: 'M' },
      { Size: 'L' },
      { Size: 'XL' },
      { Size: '3XL' },
      { Size: '4XL' }
    ]
  },
  Kc = [
    {
      theSection: 'UltimateDesigns',
      theMainImg: './Imgs/DwayneDevilShirt.jpg',
      theTitle: 'Demon Devil Edition',
      thePrice: 145,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theCaption:
          "Featuring a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theType: 'Fall',
        theStyle: 'Casual',
        theColors: ['Black', 'Syan', 'Blue'],
        theSizes: ['S', 'M', 'L', 'XL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'UltimateDesigns',
      theMainImg: './Imgs/FadedCultureT-shirt.jfif',
      theTitle: 'Faded Culture Edition',
      thePrice: 180,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Summer',
        theCaption:
          "Featuring a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theStyle: 'Streetwear',
        theColors: ['Black', 'Green', 'Pink'],
        theSizes: ['XS', 'M', 'L', 'XL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'UltimateDesigns',
      theMainImg: './Imgs/FrankieSummerT-Shirt.jpg',
      theTitle: 'Frankie Faded Edition',
      thePrice: 180,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 30,
      theDetails: {
        theType: 'Summer',
        theStyle: 'Streetwear',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Yellow'],
        theSizes: ['XS', 'M', 'L', 'XL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'UltimateDesigns',
      theMainImg: './Imgs/SupremeJacket.jfif',
      theTitle: 'Supreme Faded Jacket',
      thePrice: 270,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 20,
      theDetails: {
        theType: 'Winter',
        theStyle: 'Streetwear',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'Yellow', 'Orange'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'UltimateDesigns',
      theMainImg: './Imgs/FrankieSummerT-Shirt2.jpg',
      theTitle: 'Frankie Colored Edition',
      thePrice: 135,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Summer',
        theStyle: 'Casual',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'Green', 'White'],
        theSizes: ['S', 'M', 'XL', 'XXXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'UltimateDesigns',
      theMainImg: './Imgs/TrueBasic.jpg',
      theTitle: 'True Basic Limited Edition',
      thePrice: 80,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Summer',
        theStyle: 'Casual',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Yellow'],
        theSizes: ['S', 'M', 'L', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'newarrivals',
      theMainImg: './Imgs/1995Classic.jpg',
      theTitle: '1995 Classic W Edition',
      thePrice: 155,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Fall',
        theStyle: 'Casual',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Grey'],
        theSizes: ['S', 'M', 'L', 'XL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'newarrivals',
      theMainImg: './Imgs/5Stars.jpg',
      theTitle: '5 Stars KingReel',
      thePrice: 240,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 20,
      theDetails: {
        theType: 'streetwear',
        theStyle: 'Streetwear',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Yellow'],
        theSizes: ['XS', 'M', 'XXL', 'XXXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'newarrivals',
      theMainImg: './Imgs/HundHoodie.jpg',
      theTitle: '4 Hund Limited Edition',
      thePrice: 200,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Winter',
        theStyle: 'Hoodie',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Green'],
        theSizes: ['S', 'M', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'newarrivals',
      theMainImg: './Imgs/MidNightT-Shirt.jpg',
      theTitle: 'MidNight Summer Edition',
      thePrice: 232,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 30,
      theDetails: {
        theType: 'Summer',
        theStyle: 'Casual',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Syan'],
        theSizes: ['S', 'M', 'L', 'XL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'newarrivals',
      theMainImg: './Imgs/CStar.jpg',
      theTitle: 'C Star Faded Edition',
      thePrice: 219,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 18,
      theDetails: {
        theType: 'Fall',
        theStyle: 'Party',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'Yellow', 'Orange'],
        theSizes: ['XS', 'M', 'L', 'XL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'topselling',
      theMainImg: './Imgs/SSENSE.jpg',
      theTitle: 'Dripped Winter Edition ',
      thePrice: 232,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 30,
      theDetails: {
        theType: 'Winter',
        theStyle: 'Streetwear',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Pink'],
        theSizes: ['XS', 'M', 'L', 'XL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'topselling',
      theMainImg: './Imgs/4444.jpg',
      theTitle: '4Forty 4Four',
      thePrice: 270,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 30,
      theDetails: {
        theType: 'Summer',
        theStyle: 'Party',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'Syan', 'Blue'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'limitedEdition',
      theMainImg: './Imgs/BlackIsBeauty.jpg',
      theTitle: 'Black Is Beauty',
      thePrice: 280,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 8,
      theDetails: {
        theType: 'streetwear',
        theStyle: 'Streetwear',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Syan'],
        theSizes: ['S', 'L', 'XXL', 'XXXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'limitedEdition',
      theMainImg: './Imgs/BoyCrazy.jpg',
      theTitle: 'Boy Crazy Limited Edition',
      thePrice: 382,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Summer',
        theStyle: 'Casual',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Syan', 'Pink'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'topselling',
      theMainImg: './Imgs/Hunter.jpg',
      theTitle: 'Cityscape Hunter',
      thePrice: 282,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 21,
      theDetails: {
        theType: 'streetwear',
        theStyle: 'Party',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'Orange', 'Yellow'],
        theSizes: ['M', 'L', 'L', 'XL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'limitedEdition',
      theMainImg: './Imgs/StrongFerrari.jpg',
      theTitle: 'Strong Ferrari Man',
      thePrice: 332,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Summer',
        theStyle: 'Party',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Syan', 'Pink'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'limitedEdition',
      theMainImg: './Imgs/Pleasures.jpg',
      theTitle: 'Street Speaks Pleasures',
      thePrice: 300,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Summer',
        theStyle: 'Casual',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Grey'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'topselling',
      theMainImg: './Imgs/WheaterSupreme.jpg',
      theTitle: 'Wheaties Supreme',
      thePrice: 292,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 6,
      theDetails: {
        theType: 'streetwear',
        theStyle: 'Casual',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Grey', 'Pink'],
        theSizes: ['M', 'XL', 'XXL', 'XXXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'topselling',
      theMainImg: './Imgs/ChangeTheWorld.jpg',
      theTitle: 'Change The World',
      thePrice: 285,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Summer',
        theStyle: 'Casual',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'Orange', 'Pink'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'limitedEdition',
      theMainImg: './Imgs/MargLeaves.jpg',
      theTitle: 'Leaves Black Edition',
      thePrice: 352,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'streetwear',
        theStyle: 'Streetwear',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Grey', 'Pink'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'mostpopular',
      theMainImg: './Imgs/PalaceLondon.jpg',
      theTitle: 'Palace London Edition',
      thePrice: 228,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Winter',
        theStyle: 'Casual',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'Orange', 'Green'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'mostpopular',
      theMainImg: './Imgs/PalaceOld.jpg',
      theTitle: 'Palace Old School',
      thePrice: 422,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Winter',
        theStyle: 'Party',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Grey'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'mostpopular',
      theMainImg: './Imgs/USA.jpg',
      theTitle: 'USA Edition',
      thePrice: 292,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 13,
      theDetails: {
        theType: 'streetwear',
        theStyle: 'Casual',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'Grey', 'Pink'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'mostpopular',
      theMainImg: './Imgs/SupremeNike2.jpg',
      theTitle: 'Supreme & Nike Second Edition',
      thePrice: 511,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Winter',
        theStyle: 'Casual',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White'],
        theSizes: ['L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'mostpopular',
      theMainImg: './Imgs/SupremeNike.jpg',
      theTitle: 'Supreme & Nike Edition',
      thePrice: 287,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 5,
      theDetails: {
        theType: 'Fall',
        theStyle: 'Party',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Grey', 'Pink'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'mostpopular',
      theMainImg: './Imgs/SmileGang.jpg',
      theTitle: 'Smiled Gang Edition',
      thePrice: 100,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 8,
      theDetails: {
        theType: 'streetwear',
        theStyle: 'Streetwear',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Grey', 'Pink'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'limitedEdition',
      theMainImg: './Imgs/WHYAT.jpg',
      theTitle: 'Basic WHYAT Edition',
      thePrice: 400,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Summer',
        theStyle: 'Party',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Grey'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'mostpopular',
      theMainImg: './Imgs/WhiteJacket.jfif',
      theTitle: 'AVI-REX Jacket',
      thePrice: 387,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 4,
      theDetails: {
        theType: 'Winter',
        theStyle: 'Party',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Grey'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'limitedEdition',
      theMainImg: './Imgs/WHYAT.jpg',
      theTitle: 'Basic WHYAT Edition',
      thePrice: 400,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Summer',
        theStyle: 'Party',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Grey'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: 'limitedEdition',
      theMainImg: './Imgs/Summer2.jpg',
      theTitle: 'Rates Summer Edition',
      thePrice: 190,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 4,
      theDetails: {
        theType: 'Summer',
        theStyle: 'Party',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Pink'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/Summer.jpg',
      theTitle: 'Stop Lose Smile',
      thePrice: 210,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Summer',
        theStyle: 'Party',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Grey'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/Summer3.jpg',
      theTitle: 'Human Made Edition',
      thePrice: 176,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 10,
      theDetails: {
        theType: 'Summer',
        theStyle: 'Party',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Grey'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/Summer4.jpg',
      theTitle: 'Super UNION Edition',
      thePrice: 274,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Summer',
        theStyle: 'Party',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Grey'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/Summer5.jpg',
      theTitle: 'Beach Shirt Colored',
      thePrice: 290,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Summer',
        theStyle: 'Party',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Yellow', 'White', 'Orange'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/Summer6.jpg',
      theTitle: 'Beach Shirt Syan',
      thePrice: 210,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Summer',
        theStyle: 'Party',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'Syan', 'Grey'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/Summer7.jpg',
      theTitle: 'Beach Shirt Pink',
      thePrice: 240,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Summer',
        theStyle: 'Party',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'Syan', 'Pink'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/Summer8.jpg',
      theTitle: 'C STAR Summer Edition',
      thePrice: 187,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 7,
      theDetails: {
        theType: 'Summer',
        theStyle: 'Party',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'Syan', 'Grey'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/Summer9.jpg',
      theTitle: 'Basic HANDED Edition',
      thePrice: 200,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Summer',
        theStyle: 'Party',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'Syan', 'Grey'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/ShirtClassic.jpg',
      theTitle: 'Classic Gang ',
      thePrice: 400,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'streetwear',
        theStyle: 'Classic',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/ShirtClassic2.jpg',
      theTitle: 'Dropped Classic Edition',
      thePrice: 392,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 3,
      theDetails: {
        theType: 'streetwear',
        theStyle: 'Classic',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Grey'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/StreetWear.jpg',
      theTitle: '31 Streetwear Edition',
      thePrice: 222,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 15,
      theDetails: {
        theType: 'streetwear',
        theStyle: 'Casual',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Red'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/StreetWear2.jpg',
      theTitle: 'Black - White Stagger',
      thePrice: 492,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'streetwear',
        theStyle: 'Streetwear',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White'],
        theSizes: ['M', 'L', 'XL', 'XXXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/StreetWear3.jpg',
      theTitle: 'Rules The World Edition',
      thePrice: 192,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'streetwear',
        theStyle: 'Streetwear',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Grey'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/StreetWear4.jpg',
      theTitle: 'Mercedes Blured Edition',
      thePrice: 220,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 3,
      theDetails: {
        theType: 'streetwear',
        theStyle: 'Streetwear',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Grey'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/StreetWear5.jpg',
      theTitle: 'Basic Drama',
      thePrice: 92,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 11,
      theDetails: {
        theType: 'streetwear',
        theStyle: 'Casual',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Grey'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/StreetWear6.jpg',
      theTitle: 'Supreme Reded Stagger',
      thePrice: 492,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'streetwear',
        theStyle: 'Party',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Grey'],
        theSizes: ['M', 'L', 'XL', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/StreetWear7.jpg',
      theTitle: 'Grow Gavie OverSized',
      thePrice: 112,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 1,
      theDetails: {
        theType: 'streetwear',
        theStyle: 'Party',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Grey'],
        theSizes: ['L', 'XL', 'XXL', 'XXXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/Fall.jpg',
      theTitle: 'Clean Dripped Stagger',
      thePrice: 354,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Fall',
        theStyle: 'Casual',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Green'],
        theSizes: ['L', 'XL', 'XXL', 'XXXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/Fall2.jpg',
      theTitle: 'White Line Stagger',
      thePrice: 398,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Fall',
        theStyle: 'Casual',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Green'],
        theSizes: ['L', 'XL', 'XXL', 'XXXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/Fall3.jpg',
      theTitle: 'Metro Grave Hoodie',
      thePrice: 217,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Fall',
        theStyle: 'Hoodie',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Green'],
        theSizes: ['L', 'XL', 'XXL', 'XXXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/Fall4.jpg',
      theTitle: 'Clean RED Line Stagger',
      thePrice: 400,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Fall',
        theStyle: 'Casual',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Green'],
        theSizes: ['L', 'XL', 'XXL', 'XXXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/Fall5.jpg',
      theTitle: 'MotorBike Stagger',
      thePrice: 500,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Fall',
        theStyle: 'Party',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Green'],
        theSizes: ['M', 'L', 'XL', 'XXXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/Fall6.jpg',
      theTitle: 'SemiClassic T-Shirt',
      thePrice: 320,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Fall',
        theStyle: 'Classic',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Green'],
        theSizes: ['M', 'L', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/Fall7.jpg',
      theTitle: 'Black Faded Edition ',
      thePrice: 400,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Fall',
        theStyle: 'Casual',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Green'],
        theSizes: ['L', 'XL', 'XXL', 'XXXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/Fall8.jpg',
      theTitle: 'Black Faded Stagger',
      thePrice: 400,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Fall',
        theStyle: 'Casual',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Green'],
        theSizes: ['L', 'XL', 'XXL', 'XXXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/Interpol.jpg',
      theTitle: 'Interpol Gang Edition',
      thePrice: 200,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Summer',
        theStyle: 'Streetwear',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Green'],
        theSizes: ['L', 'XL', 'XXL', 'XXXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/Kappa.jpg',
      theTitle: 'Kappa Black Line Edition',
      thePrice: 389,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Winter',
        theStyle: 'Streetwear',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Grey'],
        theSizes: ['L', 'XL', 'XXL', 'XXXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/Puffer Jacket - Winter.jpg',
      theTitle: 'Puffer Jacked Faded Edition',
      thePrice: 400,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Winter',
        theStyle: 'Streetwear',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Green'],
        theSizes: ['L', 'XL', 'XXL', 'XXXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/ProEra.jpg',
      theTitle: 'Pro-Era',
      thePrice: 410,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Winter',
        theStyle: 'Streetwear',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Green'],
        theSizes: ['L', 'XL', 'XXL', 'XXXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/RaceJacket.jpg',
      theTitle: 'SemiClassic Red Line',
      thePrice: 230,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 11,
      theDetails: {
        theType: 'Winter',
        theStyle: 'Classic',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Green'],
        theSizes: ['L', 'XL', 'XXL', 'XXXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/RulesTheWorld-Summer.jpg',
      theTitle: 'Rule The World ',
      thePrice: 180,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Summer',
        theStyle: 'Streetwear',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Green'],
        theSizes: ['L', 'XL', 'XXL', 'XXXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/T-shirt - Fall.jpg',
      theTitle: 'Mountains Faded Edition',
      thePrice: 130,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 3,
      theDetails: {
        theType: 'Fall',
        theStyle: 'Casual',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Green'],
        theSizes: ['L', 'XL', 'XXL', 'XXXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/T-shirt -Summer.jpg',
      theTitle: 'Astronaut Edition',
      thePrice: 230,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Summer',
        theStyle: 'Casual',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Green'],
        theSizes: ['SM', 'M', 'L', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/Winter.jpg',
      theTitle: 'Red Caped Jacket',
      thePrice: 330,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Winter',
        theStyle: 'Party',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Green'],
        theSizes: ['SM', 'M', 'L', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/Winter2.jpg',
      theTitle: 'City Strike Edition',
      thePrice: 330,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 19,
      theDetails: {
        theType: 'Winter',
        theStyle: 'Casual',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Green'],
        theSizes: ['SM', 'M', 'L', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/Winter3.jpg',
      theTitle: 'SemiCasual C Star',
      thePrice: 330,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Winter',
        theStyle: 'Casual',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Green'],
        theSizes: ['SM', 'M', 'L', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/Winter4.jpg',
      theTitle: 'Red Handed Edition',
      thePrice: 400,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Winter',
        theStyle: 'Party',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Green'],
        theSizes: ['SM', 'M', 'L', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/Winter5.jpg',
      theTitle: 'White - Black Faded',
      thePrice: 290,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 2,
      theDetails: {
        theType: 'Winter',
        theStyle: 'Casual',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Green'],
        theSizes: ['SM', 'M', 'L', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/Winter6.jpg',
      theTitle: 'Classic Forest Jacket',
      thePrice: 330,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Winter',
        theStyle: 'Classic',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Green'],
        theSizes: ['SM', 'M', 'L', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    },
    {
      theSection: '',
      theMainImg: './Imgs/WinterCoatGrey.jpg',
      theTitle: 'British Classic Coat',
      thePrice: 500,
      selectedColor: '',
      selectedSize: '',
      saledPrice: '',
      theCounter: '',
      salePercentage: 0,
      theDetails: {
        theType: 'Winter',
        theStyle: 'Classic',
        theCaption:
          "CaFeaturing a dynamic graphic print inspired by black wolf landscapes and street art, each detail tells a story of modern expression. Made from premium cotton, this tee offers a soft, breathable feel that's perfect for all-day wear.",
        theColors: ['Black', 'White', 'Grey'],
        theSizes: ['SM', 'M', 'L', 'XXL']
      },
      isSeen: !0,
      showColor: !1
    }
  ],
  Vc = [
    { code: 'AAA07', discount: 8 },
    { code: 'XRZ99', discount: 22 },
    { code: 'JHRS900', discount: 19 },
    { code: 'YAS008', discount: 33.4 },
    { code: 'ABDULLAH07', discount: 57 },
    { code: 'WATCH005', discount: 9 },
    { code: 'ITZC43', discount: 15 }
  ],
  ct = { CustomerTestimonials: Hc, FAQs: Uc, SideBarItems: Gc, AllProducts: Kc, PromoCodes: Vc },
  Wt = function (e) {
    return sessionStorage.setItem('TheProduct', JSON.stringify(e))
  },
  nr = function () {
    const e = sessionStorage.getItem('TheProduct')
    if (e !== null) return JSON.parse(e)
  },
  qc = function () {
    const e = localStorage.getItem('cart')
    return e !== null ? JSON.parse(e) : []
  },
  bt = function (e, t) {
    const s = e - (e * t) / 100
    return Math.ceil(s)
  },
  Jc = {},
  Yc = a(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', height: '20', width: '18.25', viewBox: '0 0 448 512' },
    [
      a('path', {
        class: 'icon',
        d: 'M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z'
      })
    ],
    -1
  ),
  Qc = [Yc]
function Zc(e, t) {
  return b(), x('div', null, Qc)
}
const eh = re(Jc, [['render', Zc]]),
  th = {},
  sh = a(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', height: '16', width: '14.25', viewBox: '0 0 448 512' },
    [
      a('path', {
        class: 'icon',
        d: 'M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z'
      })
    ],
    -1
  ),
  rh = [sh]
function oh(e, t) {
  return b(), x('div', null, rh)
}
const ui = re(th, [['render', oh]]),
  nh = {},
  ih = a(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', height: '16', width: '14.25', viewBox: '0 0 448 512' },
    [
      a('path', {
        class: 'icon',
        d: 'M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z'
      })
    ],
    -1
  ),
  lh = [ih]
function ah(e, t) {
  return b(), x('div', null, lh)
}
const fi = re(nh, [['render', ah]]),
  ch = {},
  hh = a(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', height: '14', width: '14', viewBox: '0 0 512 512' },
    [
      a('path', {
        fill: '#fff',
        d: 'M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'
      })
    ],
    -1
  ),
  uh = [hh]
function fh(e, t) {
  return b(), x('div', null, uh)
}
const Wr = re(ch, [['render', fh]]),
  dh = {},
  ph = a(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', height: '14', width: '14', viewBox: '0 0 512 512' },
    [
      a('path', {
        fill: '#fff',
        d: 'M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z'
      })
    ],
    -1
  ),
  mh = [ph]
function gh(e, t) {
  return b(), x('div', null, mh)
}
const Nr = re(dh, [['render', gh]]),
  Sh = {
    components: { XmarkIcon: Ks, Delete: eh, Plus: ui, Minus: fi, ChevronDown: Wr, ChevronUp: Nr },
    data() {
      return {
        CartProducts: [],
        PromoCodes: ct.PromoCodes,
        PromoCode: '',
        EmptyCart: !0,
        ShowComment: !1,
        ShowPromo: !1,
        ShowErrorCode: !1
      }
    },
    mounted() {
      this.CartProduct(), (this.updateTimer = setInterval(this.CartProduct, 1e3))
    },
    beforeUnmount() {
      clearInterval(this.updateTimer)
    },
    watch: { GetFromCart: { handler: 'CartProduct', deep: !0 } },
    methods: {
      GetFromCart() {
        return qc()
      },
      CartProduct() {
        const e = this.GetFromCart()
        this.CartProducts = e
      },
      GetSalePrice(e, t) {
        return bt(e, t)
      },
      DeleteItem(e) {
        if (localStorage.getItem('cart')) {
          let t = JSON.parse(localStorage.getItem('cart'))
          return (
            t.splice(e, 1),
            (this.CartProduct = t),
            localStorage.setItem('cart', JSON.stringify(this.CartProduct))
          )
        }
      },
      SubctractCounter(e) {
        if (localStorage.getItem('cart')) {
          let t = JSON.parse(localStorage.getItem('cart')),
            s = t[e].theCounter,
            r = t[e].saledPrice
          return (
            (s -= 1),
            s <= 1 && ((s = 1), (r = this.GetSalePrice(t[e].thePrice, t[e].salePercentage) * s)),
            t[e].saledPrice === null || t[e].saledPrice === ''
              ? (r = '')
              : (r = this.GetSalePrice(t[e].thePrice, t[e].salePercentage) * s),
            (t[e].saledPrice = parseInt(r)),
            (t[e].theCounter = parseInt(s)),
            (this.CartProduct = t),
            localStorage.setItem('cart', JSON.stringify(this.CartProduct))
          )
        }
      },
      AddCounter(e) {
        if (localStorage.getItem('cart')) {
          let t = JSON.parse(localStorage.getItem('cart')),
            s = t[e].theCounter
          s += 1
          let r = t[e].saledPrice
          return (
            t[e].saledPrice === null || t[e].saledPrice === ''
              ? (r = '')
              : (r = this.GetSalePrice(t[e].thePrice, t[e].salePercentage) * s),
            (t[e].saledPrice = parseInt(r)),
            (t[e].theCounter = parseInt(s)),
            (this.CartProduct = t),
            localStorage.setItem('cart', JSON.stringify(this.CartProduct))
          )
        }
      },
      goToUp() {
        return window.scrollTo(0, 0)
      },
      SeenProduct(e) {
        return Wt(e)
      },
      SubTotalPrice() {
        let e = localStorage.getItem('cart'),
          t = []
        if (
          e &&
          ((t = JSON.parse(e).map((s) =>
            s.saledPrice ? s.saledPrice : s.thePrice * s.theCounter
          )),
          t != '')
        )
          return t.reduce((r, o) => r + o)
      },
      DiscountPercentage() {
        if (this.CartProduct) {
          const e = this.PromoCodes.find((t) => t.code === this.PromoCode)
          return e ? e.discount : 0
        } else return ''
      },
      TotalPrice() {
        let e = ''
        return (
          this.DiscountPercentage()
            ? (e = this.SubTotalPrice() - (this.SubTotalPrice() * this.DiscountPercentage()) / 100)
            : (e = this.SubTotalPrice()),
          Math.round(e)
        )
      },
      SeeImgPath(e) {
        return this.$route.name === 'TheProduct' ||
          this.$route.name === 'Register' ||
          this.$route.name === 'User'
          ? e.theMainImg.replace('./', '../')
          : e.theMainImg
      }
    },
    emits: ['ShowCart'],
    computed: {}
  },
  yh = {
    class: 'hidden py-10 fixed top-0 z-20 overflow-x-hidden overflow-y-auto h-full w-full blured'
  },
  _h = { class: 'absolute top-0 right-0 w-[50%] h-auto px-5 bg-black mob:w-[70%]' },
  Ch = { class: 'flex justify-between items-center w-full' },
  wh = a('h1', { class: 'tracking-wider' }, [a('strong', null, ' CART ')], -1),
  bh = a('hr', null, null, -1),
  vh = { class: 'mt-8' },
  xh = { key: 0, class: 'h-[100vh]' },
  Ph = { class: 'text-center text-lg tracking-wide pt-4' },
  Lh = a('h3', { class: 'mb-12' }, 'Your cart is empty.', -1),
  Th = { key: 1 },
  Mh = ['src'],
  Ih = { key: 0, class: 'flex gap-2' },
  kh = { class: 'text-[#0a244f] font-bold' },
  Eh = { key: 1 },
  Ah = { class: 'absolute top-3 right-5 bg-[#3d3d3dd2] p-2 cursor-pointer' },
  Rh = ['onClick'],
  $h = { class: 'my-4' },
  Oh = { class: 'flex items-center gap-8 border cursor-pointer w-fit' },
  Fh = ['onClick'],
  Xh = { class: 'font-bold text-2xl counter' },
  zh = ['onClick'],
  Dh = { class: 'w-full mt-8' },
  Bh = { class: 'w-full' },
  jh = { class: 'flex justify-between items-center w-full' },
  Wh = a('h3', { class: 'text-sm' }, ' SPECIAL MESSAGE FOR SELLER ', -1),
  Nh = { class: 'flex cursor-pointer' },
  Hh = { action: '#', class: 'w-fit mt-2' },
  Uh = a(
    'textarea',
    { cols: '50', rows: '3', class: 'bg-transparent border p-2 w-full' },
    null,
    -1
  ),
  Gh = a('br', null, null, -1),
  Kh = a(
    'button',
    { type: 'button', class: 'bg-[#0a244f] px-2 py-1 w-full' },
    ' SEND INSTRUCTIONS ',
    -1
  ),
  Vh = a('hr', { class: 'my-8' }, null, -1),
  qh = { class: 'w-full' },
  Jh = { class: 'flex justify-between items-center w-full' },
  Yh = a('h3', { class: 'text-sm' }, ' GET A DISCOUNT ', -1),
  Qh = { class: 'flex cursor-pointer' },
  Zh = { action: '#', class: 'w-fit mt-2' },
  eu = { key: 0, class: 'text-xs text-nowrap mt-2' },
  tu = { key: 0 },
  su = { class: 'text-red-600' },
  ru = { key: 1 },
  ou = { class: 'text-red-600' },
  nu = { class: 'text-center bg-[#0a244f] p-2 mt-8' },
  iu = a('strong', null, ' CHECK OUT ', -1)
function lu(e, t, s, r, o, n) {
  const i = j('xmark-icon'),
    c = j('RouterLink'),
    l = j('Delete'),
    u = j('Minus'),
    f = j('Plus'),
    m = j('ChevronDown'),
    p = j('ChevronUp')
  return (
    b(),
    x('main', yh, [
      a('section', _h, [
        a('div', Ch, [
          wh,
          k(i, { onClick: t[0] || (t[0] = (S) => this.$emit('ShowCart')), class: 'rotate' })
        ]),
        bh,
        a('section', vh, [
          o.CartProducts.length === 0
            ? (b(),
              x('section', xh, [
                a('div', Ph, [
                  Lh,
                  k(
                    c,
                    {
                      to: '/category',
                      class: 'tracking-widest opacity',
                      onClick: t[1] || (t[1] = (S) => this.$emit('ShowCart'))
                    },
                    { default: ue(() => [se(' CONTINUE BROWSING ')]), _: 1 }
                  )
                ])
              ]))
            : (b(),
              x('section', Th, [
                (b(!0),
                x(
                  q,
                  null,
                  fe(
                    o.CartProducts,
                    (S, E) => (
                      b(),
                      x(
                        'section',
                        { key: S, class: 'relative overflow-x-hidden overflow-y-auto' },
                        [
                          a('div', null, [
                            a(
                              'img',
                              { src: n.SeeImgPath(S), class: 'img w-full h-[10rem]' },
                              null,
                              8,
                              Mh
                            )
                          ]),
                          k(
                            c,
                            {
                              class: 'font-bold text-lg',
                              to: `/${S.theDetails.theStyle}/${S.theTitle.replaceAll(' ', '')}`
                            },
                            { default: ue(() => [se(F(S.theTitle), 1)]), _: 2 },
                            1032,
                            ['to']
                          ),
                          a('h2', null, [
                            a('strong', null, F(S.selectedSize), 1),
                            se(' - '),
                            a('strong', null, F(S.selectedColor), 1)
                          ]),
                          S.saledPrice
                            ? (b(),
                              x('div', Ih, [
                                a('h2', kh, ' $' + F(S.saledPrice), 1),
                                a('del', null, ' $' + F(S.thePrice * S.theCounter), 1)
                              ]))
                            : (b(), x('h2', Eh, ' $' + F(S.thePrice * S.theCounter), 1)),
                          a('div', Ah, [
                            a('div', { onClick: (M) => n.DeleteItem(E) }, [k(l)], 8, Rh)
                          ]),
                          a('div', $h, [
                            a('div', Oh, [
                              a(
                                'div',
                                { onClick: (M) => n.SubctractCounter(E), class: 'p-4' },
                                [k(u)],
                                8,
                                Fh
                              ),
                              a('p', Xh, F(S.theCounter), 1),
                              a(
                                'div',
                                { onClick: (M) => n.AddCounter(E), class: 'p-4' },
                                [k(f)],
                                8,
                                zh
                              )
                            ])
                          ])
                        ]
                      )
                    )
                  ),
                  128
                )),
                a('main', Dh, [
                  a('div', Bh, [
                    a('div', jh, [
                      Wh,
                      a('div', Nh, [
                        o.ShowComment
                          ? (b(),
                            yt(m, {
                              key: 0,
                              onClick: t[2] || (t[2] = (S) => (o.ShowComment = !o.ShowComment))
                            }))
                          : (b(),
                            yt(p, {
                              key: 1,
                              onClick: t[3] || (t[3] = (S) => (o.ShowComment = !o.ShowComment))
                            }))
                      ])
                    ]),
                    Me(a('form', Hh, [Uh, se(), Gh, Kh], 512), [[Oe, !o.ShowComment]])
                  ]),
                  Vh,
                  a('div', qh, [
                    a('div', Jh, [
                      Yh,
                      a('div', Qh, [
                        o.ShowPromo
                          ? (b(),
                            yt(m, {
                              key: 0,
                              onClick: t[4] || (t[4] = (S) => (o.ShowPromo = !o.ShowPromo))
                            }))
                          : (b(),
                            yt(p, {
                              key: 1,
                              onClick: t[5] || (t[5] = (S) => (o.ShowPromo = !o.ShowPromo))
                            }))
                      ])
                    ]),
                    Me(
                      a(
                        'form',
                        Zh,
                        [
                          Me(
                            a(
                              'input',
                              {
                                type: 'text',
                                'onUpdate:modelValue': t[6] || (t[6] = (S) => (o.PromoCode = S)),
                                class: 'bg-transparent border p-2 outline-none',
                                placeholder: "What's Your Promocode ?"
                              },
                              null,
                              512
                            ),
                            [[Zn, o.PromoCode]]
                          ),
                          o.PromoCode !== ''
                            ? (b(),
                              x('div', eu, [
                                n.DiscountPercentage() !== 0
                                  ? (b(),
                                    x('div', tu, [
                                      se(' CONGRATULATIONS YOU GET '),
                                      a('strong', su, F(n.DiscountPercentage()) + '% ', 1),
                                      se(' Discount ')
                                    ]))
                                  : (b(),
                                    x('div', ru, [
                                      se(' SORRY '),
                                      a('strong', ou, F(o.PromoCode), 1),
                                      se(' IS NOT A PROMOCODE ')
                                    ]))
                              ]))
                            : es('', !0)
                        ],
                        512
                      ),
                      [[Oe, !o.ShowPromo]]
                    )
                  ]),
                  a('div', nu, [a('p', null, [iu, se(' - $ ' + F(n.TotalPrice()), 1)])])
                ])
              ]))
        ])
      ])
    ])
  )
}
const au = re(Sh, [['render', lu]]),
  cu = {},
  hu = a(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', height: '20', width: '18.25', viewBox: '0 0 448 512' },
    [
      a('path', {
        fill: '#fff',
        d: 'M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z'
      })
    ],
    -1
  ),
  uu = [hu]
function fu(e, t) {
  return b(), x('div', null, uu)
}
const du = re(cu, [['render', fu]]),
  pu = {},
  mu = {
    xmlns: 'http://www.w3.org/2000/svg',
    height: '24',
    width: '25.75',
    viewBox: '0 0 576 512'
  },
  gu = a(
    'path',
    {
      fill: '#ffffff',
      d: 'M243.1 2.7c11.8 6.1 16.3 20.6 10.2 32.4L171.7 192H404.3L322.7 35.1c-6.1-11.8-1.5-26.3 10.2-32.4s26.2-1.5 32.4 10.2L458.4 192h36.1H544h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H532L476.1 463.5C469 492 443.4 512 414 512H162c-29.4 0-55-20-62.1-48.5L44 240H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8H81.5h36.1L210.7 12.9c6.1-11.8 20.6-16.3 32.4-10.2zM93.5 240l53 211.9c1.8 7.1 8.2 12.1 15.5 12.1H414c7.3 0 13.7-5 15.5-12.1l53-211.9H93.5zM224 312v80c0 13.3-10.7 24-24 24s-24-10.7-24-24V312c0-13.3 10.7-24 24-24s24 10.7 24 24zm64-24c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24s-24-10.7-24-24V312c0-13.3 10.7-24 24-24zm112 24v80c0 13.3-10.7 24-24 24s-24-10.7-24-24V312c0-13.3 10.7-24 24-24s24 10.7 24 24z'
    },
    null,
    -1
  ),
  Su = [gu]
function yu(e, t) {
  return b(), x('svg', mu, Su)
}
const _u = re(pu, [['render', yu]]),
  Cu = {},
  wu = { xmlns: 'http://www.w3.org/2000/svg', height: '23', width: '23', viewBox: '0 0 512 512' },
  bu = a(
    'path',
    {
      fill: '#ffffff',
      d: 'M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z'
    },
    null,
    -1
  ),
  vu = [bu]
function xu(e, t) {
  return b(), x('svg', wu, vu)
}
const Pu = re(Cu, [['render', xu]]),
  Lu = {},
  Tu = a(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', height: '17', width: '15.25', viewBox: '0 0 448 512' },
    [
      a('path', {
        fill: '#ffffff',
        d: 'M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z'
      })
    ],
    -1
  ),
  Mu = [Tu]
function Iu(e, t) {
  return b(), x('div', null, Mu)
}
const ku = re(Lu, [['render', Iu]]),
  Eu = {
    components: {
      User: ku,
      Search: Pu,
      Bag: _u,
      BarsIcon: du,
      XIcon: Ks,
      RouterLink: it,
      RouterView: jt,
      CartBox: au
    },
    data() {
      return {
        Products: ct.AllProducts,
        ShowMenu: !1,
        forSearch: !0,
        CartShown: !1,
        ShowMessage: !0,
        SearchContent: '',
        CartLength: 0
      }
    },
    mounted() {
      this.GetCartLength(), (this.updateTimer = setInterval(this.GetCartLength, 1e3))
    },
    beforeUnmount() {
      clearInterval(this.updateTimer)
    },
    watch: { GetFromCart: { handler: 'GetCartLength', deep: !0 } },
    methods: {
      GetSalePrice(e, t) {
        return bt(e, t)
      },
      SeenProduct(e) {
        return Wt(e)
      },
      ShowCart() {
        this.CartShown = !this.CartShown
      },
      GetFromCart() {
        const e = localStorage.getItem('cart')
        return e !== null ? JSON.parse(e) : []
      },
      GetCartLength() {
        const e = this.GetFromCart()
        this.CartLength = e.length
      },
      SeeIfUser() {
        let e = localStorage.getItem('user')
        if (e) {
          let t = JSON.parse(e)
          return this.$router.push(`/user/${t.firstName}${t.lastName}`)
        } else return this.$router.push('/account')
      }
    },
    computed: {
      SearchFor: function () {
        const e = this.Products.filter((t) =>
          t.theTitle.toUpperCase().includes(this.SearchContent.toUpperCase())
        )
        return this.SearchContent !== '' ? (e.length > 0 ? e : []) : []
      },
      UserName: function () {
        let e = localStorage.getItem('user')
        return e ? JSON.parse(e) : ''
      }
    }
  },
  Au = { class: 'relative moveIn' },
  Ru = {
    class:
      'flex justify-between items-center py-4 px-8 bg-transparent absolute z-10 w-full mob:hidden'
  },
  $u = { class: 'flex gap-16 text-sm' },
  Ou = { class: 'flex gap-16 text-sm' },
  Fu = { class: 'flex gap-1' },
  Xu = { class: 'flex py-4 px-8 absolute top-0 bg-black w-[80dvw] z-30 h-[100dvh]' },
  zu = { class: 'flex flex-col my-5 gap-2 sticky w-full cursor-pointer' },
  Du = { class: 'hidden w-full p-4 mob:flex justify-between bg-transparent' },
  Bu = a(
    'div',
    { class: 'text-xl tracking-wider ml-4' },
    [a('h1', null, [a('strong', null, ' BLACK WOLF ')])],
    -1
  ),
  ju = { class: 'flex gap-4' },
  Wu = { class: 'flex my-4' },
  Nu = { class: 'flex items-center gap-4' },
  Hu = { key: 0, class: 'flex flex-col overflow-y-auto snap-y scroll-smooth' },
  Uu = ['src'],
  Gu = { key: 0 },
  Ku = { key: 1 },
  Vu = a('hr', null, null, -1),
  qu = { class: 'border p-7 w-fit' },
  Ju = { key: 0 },
  Yu = { key: 1 },
  Qu = { class: 'text-red-600 mx-2' }
function Zu(e, t, s, r, o, n) {
  const i = j('RouterLink'),
    c = j('User'),
    l = j('x-icon'),
    u = j('BarsIcon'),
    f = j('Search'),
    m = j('Bag'),
    p = j('XIcon'),
    S = j('CartBox'),
    E = j('RouterView')
  return (
    b(),
    x(
      q,
      null,
      [
        a('header', Au, [
          a('nav', Ru, [
            a('div', $u, [
              k(i, { to: '/' }, { default: ue(() => [se(' HOME')]), _: 1 }),
              k(i, { to: '/category' }, { default: ue(() => [se('CATEGORY')]), _: 1 }),
              k(i, { to: '/about' }, { default: ue(() => [se('ABOUT')]), _: 1 })
            ]),
            a('div', Ou, [
              k(i, { to: '/account' }, { default: ue(() => [se('ACCOUNT')]), _: 1 }),
              a(
                'p',
                {
                  class: 'cursor-pointer',
                  onClick:
                    t[0] || (t[0] = (M) => ((o.forSearch = !o.forSearch), (o.SearchContent = '')))
                },
                'SEARCH'
              ),
              a('div', Fu, [
                a(
                  'p',
                  { class: 'cursor-pointer', onClick: t[1] || (t[1] = (M) => n.ShowCart()) },
                  'CART'
                ),
                a('span', null, ' (' + F(o.CartLength) + ') ', 1)
              ])
            ])
          ]),
          a(
            'div',
            {
              class: V([
                'hidden py-10 fixed top-0 z-20 overflow-x-hidden overflow-y-auto h-full w-full blured',
                { goLeft: o.ShowMenu }
              ])
            },
            [
              a('div', Xu, [
                a('div', zu, [
                  a(
                    'div',
                    { class: 'flex gap-2 w-fit', onClick: t[2] || (t[2] = (M) => n.SeeIfUser()) },
                    [k(c), a('a', null, F(n.UserName.firstName) + ' ' + F(n.UserName.lastName), 1)]
                  ),
                  k(i, { to: '/' }, { default: ue(() => [se(' HOME')]), _: 1 }),
                  k(i, { to: '/category' }, { default: ue(() => [se('CATEGORY')]), _: 1 }),
                  k(i, { to: '/about' }, { default: ue(() => [se('ABOUT')]), _: 1 })
                ]),
                k(l, { onClick: t[3] || (t[3] = (M) => (o.ShowMenu = !o.ShowMenu)) })
              ])
            ],
            2
          ),
          a('nav', Du, [
            a('div', null, [
              k(u, {
                class: 'cursor-pointer',
                onClick: t[4] || (t[4] = (M) => (o.ShowMenu = !o.ShowMenu))
              })
            ]),
            Bu,
            a('div', ju, [
              k(f, {
                onClick:
                  t[5] || (t[5] = (M) => ((o.forSearch = !o.forSearch), (o.SearchContent = ''))),
                class: 'cursor-pointer'
              }),
              k(m, { onClick: t[6] || (t[6] = (M) => n.ShowCart()), class: 'cursor-pointer' })
            ])
          ]),
          a(
            'main',
            {
              class: V([
                'hidden py-10 px-8 absolute top-0 z-10 h-auto w-full bg-black',
                { getBlock: !o.forSearch }
              ])
            },
            [
              a('div', Wu, [
                Me(
                  a(
                    'input',
                    {
                      type: 'text',
                      placeholder: 'Search...',
                      class: 'bg-transparent w-full outline-none',
                      'onUpdate:modelValue': t[7] || (t[7] = (M) => (o.SearchContent = M))
                    },
                    null,
                    512
                  ),
                  [[Zn, o.SearchContent]]
                ),
                a('div', Nu, [
                  a(
                    'p',
                    {
                      onClick: t[8] || (t[8] = (M) => (o.SearchContent = '')),
                      class: 'cursor-pointer'
                    },
                    'CLEAR'
                  ),
                  k(p, { onClick: t[9] || (t[9] = (M) => (o.forSearch = !o.forSearch)) })
                ])
              ]),
              o.SearchContent !== ''
                ? (b(),
                  x('section', Hu, [
                    (b(!0),
                    x(
                      q,
                      null,
                      fe(
                        n.SearchFor,
                        (M) => (
                          b(),
                          x('div', { key: M, class: 'flex gap-8 my-6' }, [
                            a('div', null, [
                              a(
                                'img',
                                { src: M.theMainImg, class: 'img w-[25vw] h-[10rem]' },
                                null,
                                8,
                                Uu
                              )
                            ]),
                            a('div', null, [
                              k(
                                i,
                                {
                                  to: `/${M.theDetails.theStyle}/${M.theTitle.replaceAll(' ', '')}`,
                                  onClick: (W) => n.SeenProduct(M)
                                },
                                { default: ue(() => [a('strong', null, F(M.theTitle), 1)]), _: 2 },
                                1032,
                                ['to', 'onClick']
                              ),
                              a('div', null, [
                                M.salePercentage === 0
                                  ? (b(), x('h3', Gu, ' $' + F(M.thePrice), 1))
                                  : (b(),
                                    x('div', Ku, [
                                      a(
                                        'h3',
                                        null,
                                        ' $' + F(n.GetSalePrice(M.thePrice, M.salePercentage)),
                                        1
                                      ),
                                      a('del', null, F(M.thePrice), 1)
                                    ]))
                              ])
                            ]),
                            Vu
                          ])
                        )
                      ),
                      128
                    )),
                    Me(
                      a(
                        'div',
                        qu,
                        [
                          n.SearchFor.length > 0
                            ? (b(),
                              x('p', Ju, [
                                a('strong', null, [
                                  se(' SEARCHED FOR '),
                                  a('i', null, F(o.SearchContent), 1)
                                ])
                              ]))
                            : (b(),
                              x('p', Yu, [
                                a('strong', null, [
                                  se(' NO RESULTS FOR'),
                                  a('i', Qu, F(o.SearchContent), 1)
                                ])
                              ]))
                        ],
                        512
                      ),
                      [[Oe, o.SearchContent !== '']]
                    )
                  ]))
                : es('', !0)
            ],
            2
          ),
          a('main', null, [
            k(
              S,
              {
                class: V({ goRight: o.CartShown }),
                onShowCart: t[10] || (t[10] = (M) => n.ShowCart())
              },
              null,
              8,
              ['class']
            )
          ])
        ]),
        k(E)
      ],
      64
    )
  )
}
const ef = re(Eu, [['render', Zu]]),
  tf = 'modulepreload',
  sf = function (e) {
    return '/BlackWolfECommerce/' + e
  },
  Ko = {},
  Ss = function (t, s, r) {
    let o = Promise.resolve()
    if (s && s.length > 0) {
      const n = document.getElementsByTagName('link'),
        i = document.querySelector('meta[property=csp-nonce]'),
        c = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute('nonce'))
      o = Promise.all(
        s.map((l) => {
          if (((l = sf(l)), l in Ko)) return
          Ko[l] = !0
          const u = l.endsWith('.css'),
            f = u ? '[rel="stylesheet"]' : ''
          if (!!r)
            for (let S = n.length - 1; S >= 0; S--) {
              const E = n[S]
              if (E.href === l && (!u || E.rel === 'stylesheet')) return
            }
          else if (document.querySelector(`link[href="${l}"]${f}`)) return
          const p = document.createElement('link')
          if (
            ((p.rel = u ? 'stylesheet' : tf),
            u || ((p.as = 'script'), (p.crossOrigin = '')),
            (p.href = l),
            c && p.setAttribute('nonce', c),
            document.head.appendChild(p),
            u)
          )
            return new Promise((S, E) => {
              p.addEventListener('load', S),
                p.addEventListener('error', () => E(new Error(`Unable to preload CSS for ${l}`)))
            })
        })
      )
    }
    return o
      .then(() => t())
      .catch((n) => {
        const i = new Event('vite:preloadError', { cancelable: !0 })
        if (((i.payload = n), window.dispatchEvent(i), !i.defaultPrevented)) throw n
      })
  },
  rf = {},
  of = { class: 'w-fit' },
  nf = a(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', height: '16', width: '14.25', viewBox: '0 0 448 512' },
    [
      a('path', {
        fill: '#ffffff',
        d: 'M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z'
      })
    ],
    -1
  ),
  lf = [nf]
function af(e, t) {
  return b(), x('div', of, lf)
}
const Hr = re(rf, [['render', af]]),
  cf = {
    components: { Bag: Hr, RouterLink: it, RouterView: jt },
    data() {
      return {
        Products: ct.AllProducts,
        LatestHeader: ['NEW ARRIVALS', 'TOP SELLING', 'LIMITED EDITION', 'MOST POPULAR'],
        selectedColor: '',
        selectedSize: '',
        count: 1,
        SeenSection: 'NEW ARRIVALS'
      }
    },
    methods: {
      SeenProduct(e) {
        return Wt(e)
      },
      GetSalePrice(e, t) {
        return bt(e, t)
      },
      goToUp() {
        return window.scrollTo(0, 0)
      },
      AdderProduct(e) {
        const t = localStorage.getItem('cart')
        let s = []
        t && (s = JSON.parse(t)),
          s.some((o) => o.theTitle === e.theTitle)
            ? (setTimeout(() => {
                this.$emit('ShowErrMessage')
              }, 5e3),
              this.$emit('ShowErrMessage'))
            : (s.push(e),
              (e.selectedColor = this.selectedColor),
              (e.selectedSize = this.selectedSize),
              e.salePercentage !== 0 &&
                (e.saledPrice = this.GetSalePrice(e.thePrice, e.salePercentage)),
              setTimeout(() => {
                this.$emit('ShowMess')
              }, 5e3),
              this.$emit('ShowMess'),
              (e.theCounter = this.count),
              localStorage.setItem('cart', JSON.stringify(s)))
      },
      toggleColor(e) {
        ;(e.showColor = !e.showColor), (e.isSeen = !e.isSeen), this.AdderProduct(e)
      },
      SetSizeColor(e, t) {
        ;(this.selectedSize = e), (this.selectedColor = t)
      }
    },
    computed: {
      SeeWhatSection: function () {
        return this.Products.filter(
          (e) => e.theSection.toLowerCase() === this.SeenSection.replaceAll(' ', '').toLowerCase()
        )
      }
    },
    emits: ['ShowCart', 'ShowErrMessage', 'ShowMess']
  },
  hf = { class: 'moveIn px-8 mob:px-2' },
  uf = a('h1', { class: 'text-2xl tracking-widest text-center my-6' }, 'THE LATEST', -1),
  ff = {
    class:
      'flex text-nowrap text-center px-4 overflow-x-auto snap-x scroll-smooth justify-center gap-4 mob:justify-start'
  },
  df = ['onClick'],
  pf = { class: 'flex my-8 mr-4 gap-6 overflow-x-auto snap-x scroll-smooth justify-start' },
  mf = ['src'],
  gf = ['onClick'],
  Sf = ['onClick'],
  yf = { class: 'w-[17rem] text-center text-nowrap' },
  _f = { class: 'text-center' },
  Cf = { key: 0 },
  wf = { key: 1, class: 'flex gap-2 justify-center' }
function bf(e, t, s, r, o, n) {
  const i = j('Bag'),
    c = j('RouterLink'),
    l = j('RouterView')
  return (
    b(),
    x(
      q,
      null,
      [
        a('main', hf, [
          uf,
          a('div', ff, [
            (b(!0),
            x(
              q,
              null,
              fe(
                o.LatestHeader,
                (u) => (
                  b(),
                  x(
                    'h2',
                    {
                      key: u,
                      class: V([
                        'tracking-wider w-full cursor-pointer rounded-3xl px-4 py-2 hover:bg-[#3636366b]',
                        { SeenList: o.SeenSection === u }
                      ]),
                      onClick: (f) => (o.SeenSection = u)
                    },
                    F(u),
                    11,
                    df
                  )
                )
              ),
              128
            ))
          ]),
          a('section', pf, [
            (b(!0),
            x(
              q,
              null,
              fe(
                n.SeeWhatSection,
                (u) => (
                  b(),
                  x('div', { key: u, class: 'relative' }, [
                    a('div', null, [
                      a('div', null, [
                        a('img', { src: u.theMainImg, class: 'w-full h-[80vh] img' }, null, 8, mf),
                        a(
                          'div',
                          {
                            class: V([
                              'onLoad cursor-pointer absolute right-4 bottom-20 bg-[#080808e8] w-fit py-3 px-4 mob:bottom-[7rem]',
                              { getOut: !u.isSeen }
                            ])
                          },
                          [k(i, { onClick: (f) => (u.isSeen = !u.isSeen) }, null, 8, ['onClick'])],
                          2
                        )
                      ]),
                      a('div', null, [
                        a(
                          'div',
                          {
                            class: V([
                              'flex w-full justify-center gap-4 px-14 bg-[#080808e8] absolute bottom-16 mob:bottom-[7rem]',
                              { getIn: !u.isSeen }
                            ])
                          },
                          [
                            (b(!0),
                            x(
                              q,
                              null,
                              fe(u.theDetails.theSizes, (f) =>
                                Me(
                                  (b(),
                                  x(
                                    'div',
                                    {
                                      key: f,
                                      class: V([
                                        'size cursor-pointer py-1 px-2 hover:bg-[#302f2fe8]',
                                        { hidden: u.showColor }
                                      ]),
                                      onClick: (m) => (
                                        (o.selectedSize = f), (u.showColor = !u.showColor)
                                      )
                                    },
                                    [a('p', null, F(f), 1)],
                                    10,
                                    gf
                                  )),
                                  [[Oe, !u.isSeen]]
                                )
                              ),
                              128
                            )),
                            (b(!0),
                            x(
                              q,
                              null,
                              fe(
                                u.theDetails.theColors,
                                (f) => (
                                  b(),
                                  x(
                                    'div',
                                    {
                                      key: f,
                                      class: V([
                                        'hidden cursor-pointer py-1 px-2 hover:bg-[#302f2fe8]',
                                        { getIn: u.showColor }
                                      ])
                                    },
                                    [
                                      a(
                                        'div',
                                        {
                                          onClick: (m) => ((o.selectedColor = f), n.toggleColor(u))
                                        },
                                        F(f),
                                        9,
                                        Sf
                                      )
                                    ],
                                    2
                                  )
                                )
                              ),
                              128
                            ))
                          ],
                          2
                        )
                      ])
                    ]),
                    a('div', yf, [
                      k(
                        c,
                        {
                          class: 'text-nowrap',
                          to: `/${u.theDetails.theStyle}/${u.theTitle.replaceAll(' ', '')}`,
                          onClick: (f) => (e.SeenProduct(u), n.goToUp())
                        },
                        { default: ue(() => [se(F(u.theTitle), 1)]), _: 2 },
                        1032,
                        ['to', 'onClick']
                      ),
                      a('div', _f, [
                        u.salePercentage === 0
                          ? (b(), x('h3', Cf, ' $' + F(u.thePrice), 1))
                          : (b(),
                            x('div', wf, [
                              a(
                                'h3',
                                null,
                                ' $' + F(n.GetSalePrice(u.thePrice, u.salePercentage)),
                                1
                              ),
                              a('del', null, F(u.thePrice), 1)
                            ]))
                      ])
                    ])
                  ])
                )
              ),
              128
            ))
          ])
        ]),
        k(l)
      ],
      64
    )
  )
}
const vf = re(cf, [['render', bf]]),
  xf = '/BlackWolfECommerce/Imgs/ourshowroom4.jpg',
  Pf = {},
  Lf = {
    class:
      'bg-black grid grid-cols-2 items-center my-10 px-12 py-8 tab:grid-cols-1 tab:justify-items-center tab:px-4'
  },
  Tf = Vn(
    '<div><h1 class="text-nowrap text-3xl text-center tracking-widest mb-10">OUR SHOWROOM</h1><div class="text-center text-nowrap tracking-wide mob:text-wrap"><h2> 413 James Street, Bulerigh Heads, Gold Coast, BossesLand Australia </h2><h3> Mon - Fri, 10am - 9pm </h3><h3> Weekends, 11am - 4pm </h3><button class="bg-white font-semibold text-black py-1 px-6 mt-4"><a href="yourlocation"> DIRECTIONS </a></button></div></div><div><img src="' +
      xf +
      '" class="img tab:mt-8"></div>',
    2
  ),
  Mf = [Tf]
function If(e, t) {
  return b(), x('section', Lf, Mf)
}
const kf = re(Pf, [['render', If]]),
  Ef = '/BlackWolfECommerce/Imgs/FooterPoster2.jpg',
  Af = {
    class:
      'moveIn bg-black flex justify-between items-start mt-16 px-8 py-12 tab:grid tab:grid-cols-2 mob:flex mob:flex-col'
  },
  Rf = { class: 'pb-28' },
  $f = a(
    'h1',
    { class: 'text-3xl tracking-widest text-nowrap' },
    [a('strong', null, ' BLACK WOLF ')],
    -1
  ),
  Of = a('h2', { class: 'tracking-wider my-4 text-xl' }, 'QUICK LINKS', -1),
  Ff = { class: 'flex flex-col text-lg gap-3 px-1' },
  Xf = Vn(
    '<section><h1 class="tracking-widest mb-4"><strong> DRESS LIKE A BOSS </strong></h1><article> We create luxurious, comfortable and multifunctional <br> streetwear, with an ecological conscience. So you <br> can feel sophisticated without sacrifing style, ethics, or <br> the enviroment. </article><div class="grid"><a href="#"> 45 Marine Parade </a><a href="#"> Coolangatta QLD 42 </a><a href="tel:+00000000"> +61 7 5599 6777 1 </a></div></section>',
    1
  ),
  zf = { class: 'mob:mt-14 mob:w-auto tab:w-[200%]' },
  Df = a('div', null, [a('img', { src: Ef, class: 'img' })], -1),
  Bf = { class: 'mt-8' },
  jf = a('h3', null, 'NEWSLETTER', -1),
  Wf = a('p', null, 'Sign up to be upto new news', -1),
  Nf = a(
    'input',
    {
      type: 'email',
      placeholder: 'youremail@example.com',
      class: 'accountinput tab:w-[70vw] mob:w-full'
    },
    null,
    -1
  ),
  Hf = [Nf],
  Uf = a(
    'h2',
    { class: 'text-center tracking-widest pb-10' },
    [se(' Created By '), a('strong', null, ' ABDULLAH ELMETWALI ')],
    -1
  ),
  Ur = {
    __name: 'FooterComp',
    setup(e) {
      return (t, s) => (
        b(),
        x(
          q,
          null,
          [
            a('footer', Af, [
              a('section', Rf, [
                $f,
                a('div', null, [
                  Of,
                  a('div', Ff, [
                    k(Re(it), { to: '/' }, { default: ue(() => [se('Home')]), _: 1 }),
                    k(Re(it), { to: '/category' }, { default: ue(() => [se('Shop')]), _: 1 }),
                    k(Re(it), { to: '/account' }, { default: ue(() => [se('Account')]), _: 1 }),
                    k(Re(it), { to: '/about' }, { default: ue(() => [se('About')]), _: 1 })
                  ])
                ])
              ]),
              Xf,
              a('section', zf, [
                Df,
                a('div', Bf, [
                  jf,
                  Wf,
                  a(
                    'form',
                    {
                      action: '#',
                      class: 'my-3',
                      onKeyup: s[0] || (s[0] = Ia((...r) => t.submit && t.submit(...r), ['enter']))
                    },
                    Hf,
                    32
                  )
                ])
              ])
            ]),
            Uf,
            k(Re(jt))
          ],
          64
        )
      )
    }
  },
  Gf = {
    data() {
      return {
        logos: [
          'BLACK',
          'WOLF',
          'BLACK',
          'WOLF',
          'BLACK',
          'WOLF',
          'BLACK',
          'WOLF',
          'BLACK',
          'WOLF',
          'BLACK',
          'WOLF',
          'BLACK',
          'WOLF',
          'BLACK',
          'WOLF',
          'BLACK',
          'WOLF',
          'BLACK',
          'WOLF',
          'BLACK',
          'WOLF',
          'BLACK',
          'WOLF',
          'BLACK',
          'WOLF',
          'BLACK',
          'WOLF',
          'BLACK',
          'WOLF',
          'BLACK',
          'WOLF',
          'BLACK',
          'WOLF',
          'BLACK',
          'WOLF',
          'BLACK',
          'WOLF',
          'BLACK',
          'WOLF'
        ]
      }
    }
  },
  Kf = { class: 'overflow-hidden py-2' },
  Vf = { class: 'flex gap-8 w-full animate-slide' },
  qf = { class: 'text-2xl tracking-wide -scale-x-100' }
function Jf(e, t, s, r, o, n) {
  return (
    b(),
    x('div', Kf, [
      a('div', Vf, [
        (b(!0),
        x(
          q,
          null,
          fe(
            o.logos,
            (i) => (
              b(),
              x('div', { class: 'flex gap-2 whitespace-nowrap', key: i }, [a('h1', qf, F(i), 1)])
            )
          ),
          128
        ))
      ])
    ])
  )
}
const Yf = re(Gf, [['render', Jf]]),
  Qf = {},
  Zf = { class: 'flex justify-center' },
  ed = a(
    'svg',
    {
      'aria-hidden': 'true',
      focusable: 'false',
      role: 'presentation',
      class: 'icon icon-art-phone',
      viewBox: '0 0 24 24',
      width: '40',
      height: '40'
    },
    [
      a(
        'g',
        {
          stroke: 'currentColor',
          fill: 'none',
          'stroke-width': '1.5',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round'
        },
        [
          a('path', {
            d: 'M4.285 2.24h-.011A4.5 4.5 0 0 0 .75 6.635v.89a1.5 1.5 0 0 0 1.5 1.5H6a1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 0 1.5 1.5h3.75a1.5 1.5 0 0 0 1.5-1.5v-.89a4.5 4.5 0 0 0-3.524-4.393h-.011a40.594 40.594 0 0 0-15.43-.002zM3.75 12.025v6a4.5 4.5 0 0 0 4.5 4.5h7.5a4.5 4.5 0 0 0 4.5-4.5v-6M7.875 13.525'
          }),
          a('path', {
            d: 'M7.875 13.525a.375.375 0 1 0 .375.375.375.375 0 0 0-.375-.375M12 13.525a.375.375 0 1 0 .375.375.375.375 0 0 0-.375-.375M16.125 13.525a.375.375 0 1 0 .375.375.375.375 0 0 0-.375-.375M7.875 17.275a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75M12 17.275a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75M16.125 17.275a.375.375 0 1 0 0 .75.375.375 0 0 0 0-.75'
          })
        ]
      )
    ],
    -1
  ),
  td = [ed]
function sd(e, t) {
  return b(), x('div', Zf, td)
}
const rd = re(Qf, [['render', sd]]),
  od = {},
  nd = { class: 'flex justify-center' },
  id = a(
    'svg',
    {
      'aria-hidden': 'true',
      focusable: 'false',
      role: 'presentation',
      class: 'icon icon-art-shipment-world',
      viewBox: '0 0 24 24',
      width: '40',
      height: '40'
    },
    [
      a(
        'g',
        {
          stroke: 'currentColor',
          fill: 'none',
          'stroke-width': '1.5',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round'
        },
        [
          a('path', {
            d: 'M7.538 21.75H6.75a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5v5.288M17.25 14.25h3a3 3 0 0 1 3 3v3a1.5 1.5 0 0 1-1.5 1.5h-2.288'
          }),
          a('path', {
            d: 'M17.625 19.5a1.874 1.874 0 1 1 .001 3.749 1.874 1.874 0 0 1-.001-3.749zM9.375 19.5a1.874 1.874 0 1 1 .001 3.749 1.874 1.874 0 0 1-.001-3.749zM15.788 21.75h-4.576M23.25 17.25h-3M1.757 13.891A9 9 0 1 1 18.75 9.749M9.75.75a11.853 11.853 0 0 0-3.75 9M9.75.75a11.853 11.853 0 0 1 3.75 9M1.263 6.75h16.971'
          })
        ]
      )
    ],
    -1
  ),
  ld = [id]
function ad(e, t) {
  return b(), x('div', nd, ld)
}
const cd = re(od, [['render', ad]]),
  hd = {},
  ud = { class: 'flex justify-center' },
  fd = a(
    'svg',
    {
      'aria-hidden': 'true',
      focusable: 'false',
      role: 'presentation',
      class: 'icon icon-art-water',
      viewBox: '0 0 24 24',
      width: '45',
      height: '45'
    },
    [
      a('path', {
        class: 'cls-1',
        d: 'M17.251 12a5.25 5.25 0 01-10.5 0c0-4.5 4.5-9.75 5.25-9.75s5.25 5.25 5.25 9.75z'
      }),
      a('path', {
        class: 'cls-1',
        d: 'M21.547 15.574a2.494 2.494 0 01.954 1.817c0 2.408-4.7 4.359-10.5 4.359S1.5 19.8 1.5 17.391a2.49 2.49 0 01.954-1.817M12 14.25A2.25 2.25 0 019.751 12'
      })
    ],
    -1
  ),
  dd = [fd]
function pd(e, t) {
  return b(), x('div', ud, dd)
}
const md = re(hd, [['render', pd]]),
  Nt = (e) => (Mn('data-v-12ff66f1'), (e = e()), In(), e),
  gd = {
    class:
      'moveIn bg-[#151515] mt-20 w-full py-8 px-12 flex items-center justify-evenly mob:px-2 mob:items-start'
  },
  Sd = Nt(() => a('h1', { class: 'mob:text-base' }, [a('strong', null, ' FREE RETURNES ')], -1)),
  yd = Nt(() => a('article', null, ' Retruns within 30 days recieve a full refund. ', -1)),
  _d = Nt(() =>
    a('h1', { class: 'mob:text-base' }, [a('strong', null, ' WORLDWIDE SHIPPING ')], -1)
  ),
  Cd = Nt(() => a('article', null, ' Ship anywhere, rates available at checkout. ', -1)),
  wd = Nt(() => a('h1', { class: 'mob:text-base' }, [a('strong', null, ' 24/7 SUPPORT ')], -1)),
  bd = Nt(() => a('article', null, ' Call us at 1(800) 555- 1234 ', -1)),
  vd = {
    __name: 'ServicesItems',
    setup(e) {
      return (t, s) => (
        b(),
        x('section', gd, [
          a('div', null, [k(md, { class: 'fill-[#939393]' }), Sd, yd]),
          a('div', null, [k(cd, { class: 'fill-[#939393]' }), _d, Cd]),
          a('div', null, [k(rd, { class: 'fill-[#939393]' }), wd, bd])
        ])
      )
    }
  },
  xd = re(vd, [['__scopeId', 'data-v-12ff66f1']]),
  Pd = {
    data() {
      return {
        Stories: [
          {
            img: './Imgs/AfricaShirt.jpg',
            title: 'CITY BEAT THREADS',
            caption:
              'Sync your style with the pulsating heartbeat of the city, where fashion becomes a symphony of self-expression'
          },
          {
            img: './Imgs/AfricaSpeakerT-Shirt.jpg',
            title: 'BRICK & MORTAR COUTURE',
            caption:
              'In the architecture of fashion, every garment is a masterpiece, meticulously crafted from the building blocks of style.'
          },
          {
            img: './Imgs/AfricaTwoT-Shirt.jpg',
            title: 'ASPHALT AESTHETICS',
            caption:
              'Merge the sleek sophistication of high fashion with the gritty allure of the streets, as asphalt aesthetics.'
          },
          {
            img: './Imgs/FUBU.jpg',
            title: 'UPTOWN REAL FUNK',
            caption:
              "Arm yourself with the savvy sophistication of urban style as you navigate the labyrinthine maze of fashion's concrete jungle."
          }
        ]
      }
    }
  },
  Ld = { class: 'flex my-8 px-8 gap-6 overflow-x-auto snap-x scroll-smooth justify-start' },
  Td = ['src'],
  Md = { class: 'w-full tab:w-[70vw]' },
  Id = { class: 'text-lg text-center text-nowrap my-3' },
  kd = { class: 'text-center text-wrap text-sm' }
function Ed(e, t, s, r, o, n) {
  return (
    b(),
    x('main', Ld, [
      (b(!0),
      x(
        q,
        null,
        fe(
          o.Stories,
          (i) => (
            b(),
            x('div', { key: i }, [
              a('div', null, [a('img', { src: i.img, class: 'w-full h-[80vh] img' }, null, 8, Td)]),
              a('div', Md, [
                a('h1', Id, [a('strong', null, F(i.title), 1)]),
                a('article', kd, F(i.caption), 1)
              ])
            ])
          )
        ),
        128
      ))
    ])
  )
}
const Ad = re(Pd, [['render', Ed]]),
  Rd = {
    data() {
      return { ProductTitle: '', ProductColor: '', ProductSize: '', ProductPrice: 0, Show: !0 }
    },
    components: { XIcon: Ks },
    mounted() {
      this.GetAddedProduct(), (this.updateTimer = setInterval(this.GetAddedProduct, 1e3))
    },
    beforeUnmount() {
      clearInterval(this.updateTimer)
    },
    watch: { GetFromCart: { handler: 'GetAddedProduct', deep: !0 } },
    methods: {
      GetFromCart() {
        const e = localStorage.getItem('cart')
        return e !== null ? JSON.parse(e) : []
      },
      GetAddedProduct() {
        const e = this.GetFromCart()
        if (e.length > 0) {
          const t = e[e.length - 1]
          return (
            (this.ProductTitle = t.theTitle),
            (this.ProductColor = t.selectedColor),
            (this.ProductSize = t.selectedSize),
            t.saledPrice !== ''
              ? (this.ProductPrice = t.saledPrice)
              : (this.ProductPrice = t.thePrice * t.theCounter)
          )
        } else
          (this.ProductTitle = ''),
            (this.ProductColor = ''),
            (this.ProductSize = ''),
            (this.ProductPrice = 0)
      },
      ShowCart() {
        this.$emit('ShowCart')
      },
      DisplayMessage() {
        this.$emit('DisplayMessage')
      },
      Hide() {
        setTimeout(() => {
          this.Show = !this.Show
        }, 5e3),
          (this.Show = !this.Show)
      }
    },
    emits: ['ShowCart', 'DisplayMessage']
  },
  $d = { class: 'text-center my-2 mob:text-sm' },
  Od = a('div', { class: 'text-[#0a244f]' }, ' ADDED TO CART ', -1)
function Fd(e, t, s, r, o, n) {
  const i = j('x-icon')
  return (
    b(),
    x(
      'section',
      {
        class: V([
          'flex justify-between items-center px-8 fixed top-0 w-full bg-black z-40 mob:px-3',
          { hiddenEx: !o.Show }
        ])
      },
      [
        k(i, { onClick: t[0] || (t[0] = (c) => n.Hide()), class: 'rotate' }),
        a('div', $d, [
          a('div', null, F(o.ProductTitle) + ' - $' + F(o.ProductPrice), 1),
          a('div', null, F(o.ProductColor) + ' - ' + F(o.ProductSize), 1),
          Od
        ]),
        a(
          'div',
          {
            onClick: t[1] || (t[1] = (c) => (this.$emit('ShowCart'), n.Hide())),
            class: 'cursor-pointer mob:text-sm'
          },
          ' VIEW CART '
        )
      ],
      2
    )
  )
}
const di = re(Rd, [['render', Fd]]),
  Xd = {
    components: { XIcon: Ks },
    data() {
      return { Show: !0 }
    },
    methods: {
      Hide() {
        setTimeout(() => {
          this.Show = !this.Show
        }, 5e3),
          (this.Show = !this.Show)
      }
    },
    emits: ['ShowCart']
  },
  zd = a(
    'div',
    { class: 'text-center my-2 mob:text-sm' },
    [a('div', { class: 'text-red-600' }, ' ALREADY ADDED TO CART ')],
    -1
  )
function Dd(e, t, s, r, o, n) {
  const i = j('x-icon')
  return (
    b(),
    x(
      'section',
      {
        class: V([
          'flex justify-between items-center px-8 fixed top-0 w-full bg-black z-40',
          { hiddenEx: !o.Show }
        ])
      },
      [
        k(i, { onClick: t[0] || (t[0] = (c) => n.Hide()), class: 'rotate' }),
        zd,
        a(
          'div',
          {
            onClick: t[1] || (t[1] = (c) => (this.$emit('ShowCart'), n.Hide())),
            class: 'cursor-pointer mob:text-sm'
          },
          ' VIEW CART '
        )
      ],
      2
    )
  )
}
const pi = re(Xd, [['render', Dd]]),
  Bd = '/BlackWolfECommerce/Imgs/PosterOne.jpg',
  jd = '/BlackWolfECommerce/Imgs/rectangleTwo.jpg',
  Wd = '/BlackWolfECommerce/Videos/PosterVideo.mp4',
  Nd = {
    components: {
      Bag: Hr,
      TheMessage: di,
      ErrorMessage: pi,
      RouterLink: it,
      RouterView: jt,
      TheLatest: vf,
      ShowRoom: kf,
      TheFooter: Ur,
      SliderRow: Yf,
      ServicesItems: xd,
      OurPhilosophy: Ad
    },
    data() {
      return {
        Products: ct.AllProducts,
        selectedColor: '',
        selectedSize: '',
        ItemAdded: '',
        CartShown: !1,
        ShowMessage: !1,
        ShowErrorMessage: !1,
        Counter: 1
      }
    },
    methods: {
      GetSalePrice(e, t) {
        return bt(e, t)
      },
      goToUp() {
        return window.scrollTo(0, 0)
      },
      SeenProduct(e) {
        return Wt(e)
      },
      AdderProduct(e) {
        const t = localStorage.getItem('cart')
        let s = []
        t && (s = JSON.parse(t)),
          s.some((o) => o.theTitle === e.theTitle)
            ? (setTimeout(() => {
                this.ShowErrorMessage = !this.ShowErrorMessage
              }, 5e3),
              (this.ShowErrorMessage = !this.ShowErrorMessage))
            : (s.push(e),
              (e.selectedColor = this.selectedColor),
              (e.selectedSize = this.selectedSize),
              e.salePercentage !== 0 &&
                (e.saledPrice = this.GetSalePrice(e.thePrice, e.salePercentage)),
              setTimeout(() => {
                this.ShowMessage = !this.ShowMessage
              }, 5e3),
              (this.ShowMessage = !this.ShowMessage),
              (e.theCounter = this.Counter),
              localStorage.setItem('cart', JSON.stringify(s)))
      },
      toggleColor(e) {
        ;(e.showColor = !e.showColor), (e.isSeen = !e.isSeen), this.AdderProduct(e)
      },
      SetSizeColor(e, t) {
        ;(this.selectedSize = e), (this.selectedColor = t)
      },
      ShowCart() {
        this.CartShown = !this.CartShown
      },
      ShowErrMessage() {
        this.ShowErrorMessage = !this.ShowErrorMessage
      },
      ShowMess() {
        this.ShowMessage = !this.ShowMessage
      }
    },
    computed: {
      UltimateDesigns: function () {
        return this.Products.filter((e) => e.theSection === 'UltimateDesigns')
      }
    }
  },
  Hd = { class: 'moveIn' },
  Ud = { class: 'grid grid-cols-2 tab:flex tab:flex-col' },
  Gd = { class: 'relative' },
  Kd = a('div', null, [a('img', { src: Bd, class: 'w-full brightness-[0.3]' })], -1),
  Vd = { class: 'shop moveIn' },
  qd = a('h1', { class: 'text-xs tracking-wider' }, ' ABOVE THE CLOUDS ', -1),
  Jd = a('h1', { class: 'text-2xl tracking-wider mb-4 mt-2' }, 'WEAR LIKE A BOSS', -1),
  Yd = { class: 'bg-white py-1 tracking-widest text-black w-full' },
  Qd = a('div', null, [a('img', { src: jd, class: 'w-full h-auto brightness-[0.3]' })], -1),
  Zd = { class: 'grid grid-cols-2 tab:flex tab:flex-col-reverse' },
  ep = { class: 'px-6' },
  tp = a('h1', { class: 'text-center tracking-widest text-xl mt-8' }, 'Ultimate Designs', -1),
  sp = { class: 'flex my-8 mr-4 gap-6 overflow-x-auto snap-x scroll-smooth justify-start' },
  rp = ['src'],
  op = ['onClick'],
  np = ['onClick'],
  ip = { class: 'w-[17rem] text-center text-nowrap' },
  lp = { class: 'text-center' },
  ap = { key: 0 },
  cp = { key: 1, class: 'flex gap-2 justify-center' },
  hp = a(
    'div',
    null,
    [
      a('video', { autoplay: 'true', muted: '', class: 'brightness-[0.4] tab:ml-6 mob:ml-0' }, [
        a('source', { src: Wd, type: 'video/mp4' })
      ])
    ],
    -1
  )
function up(e, t, s, r, o, n) {
  const i = j('ErrorMessage'),
    c = j('TheMessage'),
    l = j('RouterLink'),
    u = j('SliderRow'),
    f = j('Bag'),
    m = j('TheLatest'),
    p = j('ShowRoom'),
    S = j('OurPhilosophy'),
    E = j('ServicesItems'),
    M = j('TheFooter'),
    W = j('RouterView')
  return (
    b(),
    x(
      q,
      null,
      [
        k(
          i,
          {
            class: V(['hidden', { getTop: o.ShowErrorMessage }]),
            onShowCart: t[0] || (t[0] = (P) => n.ShowCart())
          },
          null,
          8,
          ['class']
        ),
        k(
          c,
          {
            class: V(['hidden', { getTop: o.ShowMessage }]),
            onShowCart: t[1] || (t[1] = (P) => n.ShowCart())
          },
          null,
          8,
          ['class']
        ),
        a('main', Hd, [
          a('section', Ud, [
            a('div', Gd, [
              Kd,
              a('div', Vd, [
                qd,
                Jd,
                a('button', Yd, [
                  k(l, { to: '/category' }, { default: ue(() => [se(' SHOP NOW ')]), _: 1 })
                ])
              ])
            ]),
            Qd
          ]),
          a('div', null, [k(u)]),
          a('section', Zd, [
            a('div', ep, [
              tp,
              a('section', sp, [
                (b(!0),
                x(
                  q,
                  null,
                  fe(
                    n.UltimateDesigns,
                    (P) => (
                      b(),
                      x('div', { key: P, class: 'relative' }, [
                        a('div', null, [
                          a('div', null, [
                            a(
                              'img',
                              { src: P.theMainImg, class: 'w-full h-[80vh] img' },
                              null,
                              8,
                              rp
                            ),
                            a(
                              'div',
                              {
                                class: V([
                                  'onLoad cursor-pointer absolute right-4 bottom-20 bg-[#080808e8] w-fit py-3 px-4 mob:bottom-[7rem]',
                                  { getOut: !P.isSeen }
                                ])
                              },
                              [
                                k(f, { onClick: (C) => (P.isSeen = !P.isSeen) }, null, 8, [
                                  'onClick'
                                ])
                              ],
                              2
                            )
                          ]),
                          a('div', null, [
                            a(
                              'div',
                              {
                                class: V([
                                  'flex w-full justify-center gap-4 px-14 bg-[#080808e8] absolute bottom-16 mob:bottom-[7rem]',
                                  { getIn: !P.isSeen }
                                ])
                              },
                              [
                                (b(!0),
                                x(
                                  q,
                                  null,
                                  fe(P.theDetails.theSizes, (C) =>
                                    Me(
                                      (b(),
                                      x(
                                        'div',
                                        {
                                          key: C,
                                          class: V([
                                            'size cursor-pointer py-1 px-2 hover:bg-[#302f2fe8]',
                                            { hidden: P.showColor }
                                          ]),
                                          onClick: (z) => (
                                            (o.selectedSize = C), (P.showColor = !P.showColor)
                                          )
                                        },
                                        [a('p', null, F(C), 1)],
                                        10,
                                        op
                                      )),
                                      [[Oe, !P.isSeen]]
                                    )
                                  ),
                                  128
                                )),
                                (b(!0),
                                x(
                                  q,
                                  null,
                                  fe(
                                    P.theDetails.theColors,
                                    (C) => (
                                      b(),
                                      x(
                                        'div',
                                        {
                                          key: C,
                                          class: V([
                                            'hidden cursor-pointer py-1 px-2 hover:bg-[#302f2fe8]',
                                            { getIn: P.showColor }
                                          ])
                                        },
                                        [
                                          a(
                                            'div',
                                            {
                                              onClick: (z) => (
                                                (o.selectedColor = C), n.toggleColor(P)
                                              )
                                            },
                                            F(C),
                                            9,
                                            np
                                          )
                                        ],
                                        2
                                      )
                                    )
                                  ),
                                  128
                                ))
                              ],
                              2
                            )
                          ])
                        ]),
                        a('div', ip, [
                          k(
                            l,
                            {
                              class: 'text-nowrap',
                              to: `/${P.theDetails.theStyle}/${P.theTitle.replaceAll(' ', '')}`,
                              onClick: (C) => (n.SeenProduct(P), n.goToUp())
                            },
                            { default: ue(() => [se(F(P.theTitle), 1)]), _: 2 },
                            1032,
                            ['to', 'onClick']
                          ),
                          a('div', lp, [
                            P.salePercentage === 0
                              ? (b(), x('h3', ap, ' $' + F(P.thePrice), 1))
                              : (b(),
                                x('div', cp, [
                                  a(
                                    'h3',
                                    null,
                                    ' $' + F(n.GetSalePrice(P.thePrice, P.salePercentage)),
                                    1
                                  ),
                                  a('del', null, F(P.thePrice), 1)
                                ]))
                          ])
                        ])
                      ])
                    )
                  ),
                  128
                ))
              ])
            ]),
            hp
          ])
        ]),
        k(m, {
          onShowCart: t[2] || (t[2] = (P) => n.ShowCart()),
          onShowErrMessage: t[3] || (t[3] = (P) => n.ShowErrMessage()),
          onShowMess: t[4] || (t[4] = (P) => n.ShowMess())
        }),
        k(p, { class: 'moveIn' }),
        k(S, { class: 'moveIn' }),
        k(E, { class: 'moveIn' }),
        k(M),
        k(W)
      ],
      64
    )
  )
}
const fp = re(Nd, [['render', up]]),
  dp = {
    components: { FooterComp: Ur },
    data() {
      return {
        Products: ct.AllProducts,
        CategoryHeaders: [
          'ALL PRODUCTS',
          'WINTER EDITION',
          'SUMMER EDITION',
          'FALL EDITION',
          'STREETWEAR EDITION'
        ],
        SeenSection: 'ALL PRODUCTS'
      }
    },
    methods: {
      GetSalePrice(e, t) {
        return bt(e, t)
      },
      SeenProduct(e) {
        return Wt(e)
      },
      goToUp() {
        return window.scrollTo(0, 0)
      }
    },
    computed: {
      WhatProducts: function () {
        return this.SeenSection === 'ALL PRODUCTS'
          ? this.Products
          : this.Products.filter(
              (e) =>
                e.theDetails.theType.toLowerCase() ===
                this.SeenSection.replaceAll(' EDITION', '').toLowerCase()
            )
      }
    }
  },
  pp = { class: 'moveIn pt-14 px-8 mob:px-4' },
  mp = {
    class:
      'flex px-4 overflow-x-auto text-nowrap snap-x scroll-smooth justify-center gap-4 tab:justify-start my-8 w-full mob:px-0'
  },
  gp = ['onClick'],
  Sp = { class: 'grid grid-cols-3 gap-5 mob:grid-cols-2' },
  yp = ['src'],
  _p = { class: 'text-center mt-3' },
  Cp = { key: 0 },
  wp = { key: 1, class: 'flex gap-2 justify-center' }
function bp(e, t, s, r, o, n) {
  const i = j('RouterLink'),
    c = j('FooterComp')
  return (
    b(),
    x(
      q,
      null,
      [
        a('section', pp, [
          a('div', mp, [
            (b(!0),
            x(
              q,
              null,
              fe(
                o.CategoryHeaders,
                (l) => (
                  b(),
                  x('div', { key: l }, [
                    a(
                      'h1',
                      {
                        class: V([
                          'text-center tracking-wider cursor-pointer w-full rounded-3xl px-4 py-2 hover:bg-[#3636366b]',
                          { SeenList: o.SeenSection === l }
                        ]),
                        onClick: (u) => (o.SeenSection = l)
                      },
                      F(l),
                      11,
                      gp
                    )
                  ])
                )
              ),
              128
            ))
          ]),
          a('main', Sp, [
            (b(!0),
            x(
              q,
              null,
              fe(
                n.WhatProducts,
                (l) => (
                  b(),
                  x('div', { key: l }, [
                    a('div', null, [
                      a('img', { src: l.theMainImg, class: 'img h-[50vh] w-full' }, null, 8, yp)
                    ]),
                    a('div', _p, [
                      k(
                        i,
                        {
                          to: `/${l.theDetails.theStyle}/${l.theTitle.replaceAll(' ', '')}`,
                          onClick: (u) => n.SeenProduct(l)
                        },
                        { default: ue(() => [se(F(l.theTitle), 1)]), _: 2 },
                        1032,
                        ['to', 'onClick']
                      ),
                      a('div', null, [
                        l.salePercentage === 0
                          ? (b(), x('h3', Cp, ' $' + F(l.thePrice), 1))
                          : (b(),
                            x('div', wp, [
                              a(
                                'h3',
                                null,
                                ' $' + F(n.GetSalePrice(l.thePrice, l.salePercentage)),
                                1
                              ),
                              a('del', null, F(l.thePrice), 1)
                            ]))
                      ])
                    ])
                  ])
                )
              ),
              128
            ))
          ])
        ]),
        k(c)
      ],
      64
    )
  )
}
const vp = re(dp, [['render', bp]]),
  xp = { components: { Up: Nr, Down: Wr }, props: ['theQues', 'theAns', 'isSeen'] },
  Pp = { class: 'p-3' },
  Lp = { class: 'flex justify-between' },
  Tp = { class: 'font-semibold text-lg tracking-wide' }
function Mp(e, t, s, r, o, n) {
  const i = j('Up'),
    c = j('Down')
  return (
    b(),
    x('section', Pp, [
      a('div', Lp, [
        a('h1', Tp, F(s.theQues) + '? ', 1),
        a('div', null, [
          k(
            i,
            {
              onClick: t[0] || (t[0] = (l) => (s.isSeen = !s.isSeen)),
              class: V([{ hidden: !s.isSeen }, 'cursor-pointer'])
            },
            null,
            8,
            ['class']
          ),
          k(
            c,
            {
              onClick: t[1] || (t[1] = (l) => (s.isSeen = !s.isSeen)),
              class: V([{ hidden: s.isSeen }, 'cursor-pointer'])
            },
            null,
            8,
            ['class']
          )
        ])
      ]),
      a('div', null, [Me(a('article', null, F(s.theAns) + '. ', 513), [[Oe, s.isSeen]])])
    ])
  )
}
const Ip = re(xp, [['render', Mp]]),
  kp = {},
  Ep = {
    width: '24',
    height: '25',
    viewBox: '0 0 24 25',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  },
  Ap = a(
    'path',
    {
      d: 'M12 2.82898C10.0716 2.82898 8.18657 3.40081 6.58319 4.47215C4.97982 5.54349 3.73013 7.06624 2.99218 8.84782C2.25422 10.6294 2.06114 12.5898 2.43735 14.4811C2.81355 16.3724 3.74215 18.1097 5.10571 19.4733C6.46928 20.8368 8.20656 21.7654 10.0979 22.1416C11.9892 22.5178 13.9496 22.3248 15.7312 21.5868C17.5127 20.8489 19.0355 19.5992 20.1068 17.9958C21.1782 16.3924 21.75 14.5073 21.75 12.579C21.7473 9.99396 20.7192 7.51559 18.8913 5.6877C17.0634 3.85982 14.585 2.83171 12 2.82898ZM16.2806 10.8596L11.0306 16.1096C10.961 16.1793 10.8783 16.2347 10.7872 16.2724C10.6962 16.3101 10.5986 16.3296 10.5 16.3296C10.4014 16.3296 10.3038 16.3101 10.2128 16.2724C10.1218 16.2347 10.039 16.1793 9.96938 16.1096L7.71938 13.8596C7.57865 13.7189 7.49959 13.528 7.49959 13.329C7.49959 13.13 7.57865 12.9391 7.71938 12.7984C7.86011 12.6576 8.05098 12.5786 8.25 12.5786C8.44903 12.5786 8.6399 12.6576 8.78063 12.7984L10.5 14.5187L15.2194 9.79835C15.2891 9.72867 15.3718 9.6734 15.4628 9.63568C15.5539 9.59797 15.6515 9.57856 15.75 9.57856C15.8486 9.57856 15.9461 9.59797 16.0372 9.63568C16.1282 9.6734 16.2109 9.72867 16.2806 9.79835C16.3503 9.86804 16.4056 9.95076 16.4433 10.0418C16.481 10.1329 16.5004 10.2304 16.5004 10.329C16.5004 10.4275 16.481 10.5251 16.4433 10.6162C16.4056 10.7072 16.3503 10.7899 16.2806 10.8596Z',
      fill: '#01AB31'
    },
    null,
    -1
  ),
  Rp = [Ap]
function $p(e, t) {
  return b(), x('svg', Ep, Rp)
}
const Op = re(kp, [['render', $p]]),
  Fp = { components: { Verification: Op }, props: ['CustomerName', 'CustomerComment'] },
  Xp = { class: 'border rounded py-4 px-8 w-auto' },
  zp = { class: 'flex gap-2 my-3 font-black tracking-wide' },
  Dp = { class: 'w-[25vw] opacity-70 mob:w-[60vw]' }
function Bp(e, t, s, r, o, n) {
  const i = j('Verification')
  return (
    b(),
    x('div', Xp, [
      a('div', zp, [a('h2', null, F(s.CustomerName), 1), k(i)]),
      a('article', Dp, ' "' + F(s.CustomerComment) + '" ', 1)
    ])
  )
}
const jp = re(Fp, [['render', Bp]]),
  Wp = {
    components: {
      Bag: Hr,
      TheMessage: di,
      ErrorMessage: pi,
      FAQsComp: Ip,
      CustomerTestimonial: jp,
      FooterComp: Ur,
      Plus: ui,
      Minus: fi,
      ChevronUp: Nr,
      ChevronDown: Wr,
      RouterView: jt
    },
    data() {
      return {
        Products: ct.AllProducts,
        FAQs: ct.FAQs,
        Testimonials: ct.CustomerTestimonials,
        count: 1,
        currentSection: 'isReviews',
        CartShown: !1,
        ShowMessage: !1,
        ShowErrorMessage: !1,
        HiddenDesc: !1,
        selectedColor: '',
        selectedSize: '',
        NoItemsSelected: !1,
        style: nr().theDetails.theStyle,
        titile: nr().theTitle
      }
    },
    methods: {
      GetSalePrice(e, t) {
        return bt(e, t)
      },
      forCounter() {
        if (this.count <= 1) this.count = 1
        else return (this.count -= 1)
      },
      SeenProduct(e) {
        return Wt(e)
      },
      TheDisplayedProduct() {
        return nr()
      },
      goToUp() {
        return (
          (this.count = 1),
          (this.selectedColor = ''),
          (this.selectedSize = ''),
          (this.selectedColorLike = ''),
          (this.selectedColorLike = ''),
          window.scrollTo(0, 0)
        )
      },
      SeeCart(e) {
        let t = JSON.parse(localStorage.getItem('cart')) || []
        t.some((r) => r.theTitle === e.theTitle)
          ? (setTimeout(() => {
              this.ShowErrorMessage = !this.ShowErrorMessage
            }, 4e3),
            (this.ShowErrorMessage = !this.ShowErrorMessage))
          : (e.salePercentage !== 0 &&
              (e.saledPrice = bt(e.thePrice, e.salePercentage) * productCounter),
            (e.theCounter = this.count),
            t.push(e),
            setTimeout(() => {
              this.ShowMessage = !this.ShowMessage
            }, 4e3),
            (this.ShowMessage = !this.ShowMessage),
            localStorage.setItem('cart', JSON.stringify(t)))
      },
      AddToCart(e) {
        return this.selectedColor === '' || this.selectedSize === ''
          ? this.NoItemsSelected == this.NoItemsSelected
          : ((e.selectedColor = this.selectedColor),
            (e.selectedSize = this.selectedSize),
            this.SeeCart(e),
            this.NoItemsSelected == !this.NoItemsSelected)
      },
      toggleColor(e) {
        ;(e.showColor = !e.showColor),
          (e.isSeen = !e.isSeen),
          (e.selectedSize = this.selectedSize),
          (e.selectedColor = this.selectedColor),
          (this.count = 1),
          addToCartWithCount(e, this.count, this.ShowMessage, this.ShowErrorMessage)
      },
      ShowCart() {
        this.CartShown = !this.CartShown
      }
    },
    computed: {
      AnotherLikedProducts: function () {
        return this.Products.filter(
          (e) => e.theDetails.theStyle === this.style && e.theTitle !== this.titile
        )
      }
    }
  },
  ut = (e) => (Mn('data-v-b7428015'), (e = e()), In(), e),
  Np = { class: 'moveIn px-12 pt-20 tab:py-24 mob:px-6' },
  Hp = { class: 'grid grid-cols-2 gap-8 mob:grid-cols-1' },
  Up = ['src'],
  Gp = { class: 'text-3xl tracking-wide uppercase' },
  Kp = { class: 'flex items-center gap-2 my-2 text-xl' },
  Vp = { key: 0, class: 'flex gap-2' },
  qp = { class: 'text-[#0a244f] font-bold' },
  Jp = { key: 1 },
  Yp = { class: 'my-3' },
  Qp = ut(() => a('strong', { class: 'text-white mr-1' }, ' SIZE ', -1)),
  Zp = { class: 'flex gap-2' },
  em = ['onClick', 'textContent'],
  tm = { class: 'my-3' },
  sm = ut(() => a('strong', { class: 'text-white mr-1' }, ' COLOR ', -1)),
  rm = { class: 'inline-flex mb-4 gap-1' },
  om = ['onClick'],
  nm = ut(() => a('hr', null, null, -1)),
  im = { class: 'my-3 w-full' },
  lm = { class: 'flex items-center justify-between' },
  am = ut(() => a('h1', null, [a('strong', null, ' DESCRIPTION ')], -1)),
  cm = { class: 'cursor-pointer' },
  hm = ['innerHTML'],
  um = ut(() => a('hr', null, null, -1)),
  fm = { class: 'flex items-center gap-4 my-4' },
  dm = { class: 'my-4' },
  pm = { class: 'flex items-center gap-8 border cursor-pointer w-fit' },
  mm = { class: 'font-bold text-2xl counter' },
  gm = { class: 'p-12 my-6' },
  Sm = { class: 'flex justify-between' },
  ym = { key: 0 },
  _m = ut(() => a('h1', { class: 'mb-2' }, "HERE'S SOME DETAIL ABOUT PRODUCT", -1)),
  Cm = ut(() =>
    a(
      'article',
      null,
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repudiandae modi facilis fugiat voluptates, assumenda quidem iusto consequatur, at nemo ipsum possimus sapiente officiis aliquam in veniam laudantium. Non, deserunt!',
      -1
    )
  ),
  wm = [_m, Cm],
  bm = { key: 1, class: 'flex gap-4 overflow-x-auto snap-x scroll-smooth' },
  vm = { key: 2, class: 'grid grid-cols-2 mob:grid-cols-1 mob:gap-3' },
  xm = { class: 'px-8 mob:px-2' },
  Pm = ut(() =>
    a('h1', { class: 'text-2xl tracking-widest text-center my-6' }, ' YOU MIGHT LIKE ', -1)
  ),
  Lm = { class: 'flex my-8 mr-4 gap-6 overflow-x-auto snap-x scroll-smooth justify-start' },
  Tm = ['src'],
  Mm = ['onClick'],
  Im = ['onClick'],
  km = { class: 'w-[17rem] text-center text-nowrap' },
  Em = { class: 'text-center' },
  Am = { key: 0 },
  Rm = { key: 1, class: 'flex gap-2 justify-center' }
function $m(e, t, s, r, o, n) {
  const i = j('ErrorMessage'),
    c = j('TheMessage'),
    l = j('ChevronDown'),
    u = j('ChevronUp'),
    f = j('Minus'),
    m = j('Plus'),
    p = j('CustomerTestimonial'),
    S = j('FAQsComp'),
    E = j('Bag'),
    M = j('RouterLink'),
    W = j('FooterComp'),
    P = j('RouterView')
  return (
    b(),
    x(
      q,
      null,
      [
        k(
          i,
          {
            class: V(['hidden', { getTop: o.ShowErrorMessage }]),
            onShowCart: t[0] || (t[0] = (C) => n.ShowCart())
          },
          null,
          8,
          ['class']
        ),
        k(
          c,
          {
            class: V(['hidden', { getTop: o.ShowMessage }]),
            onShowCart: t[1] || (t[1] = (C) => n.ShowCart())
          },
          null,
          8,
          ['class']
        ),
        a('main', Np, [
          a('div', Hp, [
            a('div', null, [
              a(
                'img',
                {
                  src: n.TheDisplayedProduct().theMainImg.replace('./', '../'),
                  class: 'w-full h-[80%] img mob:h-full'
                },
                null,
                8,
                Up
              )
            ]),
            a('div', null, [
              a('div', null, [
                a('h1', Gp, [a('strong', null, F(n.TheDisplayedProduct().theTitle), 1)]),
                a('div', Kp, [
                  n.TheDisplayedProduct().salePercentage !== 0
                    ? (b(),
                      x('div', Vp, [
                        a(
                          'h2',
                          qp,
                          ' $' +
                            F(
                              n.GetSalePrice(
                                n.TheDisplayedProduct().thePrice,
                                n.TheDisplayedProduct().salePercentage
                              ) * o.count
                            ),
                          1
                        ),
                        a('del', null, ' $' + F(n.TheDisplayedProduct().thePrice * o.count), 1)
                      ]))
                    : (b(), x('h2', Jp, ' $' + F(n.TheDisplayedProduct().thePrice * o.count), 1))
                ]),
                a('div', null, [
                  a('div', Yp, [Qp, a('strong', null, F(o.selectedSize), 1)]),
                  a('div', Zp, [
                    (b(!0),
                    x(
                      q,
                      null,
                      fe(
                        n.TheDisplayedProduct().theDetails.theSizes,
                        (C) => (
                          b(),
                          x(
                            'div',
                            {
                              class: V([
                                'flex justify-center p-1 mb-4 w-[5rem] border cursor-pointer size',
                                { choosed: o.selectedSize === C }
                              ]),
                              key: C,
                              onClick: (z) => (o.selectedSize = C),
                              textContent: F(C)
                            },
                            null,
                            10,
                            em
                          )
                        )
                      ),
                      128
                    ))
                  ])
                ]),
                a('div', null, [
                  a('div', tm, [sm, a('strong', null, F(o.selectedColor), 1)]),
                  a('div', rm, [
                    (b(!0),
                    x(
                      q,
                      null,
                      fe(
                        n.TheDisplayedProduct().theDetails.theColors,
                        (C) => (
                          b(),
                          x(
                            'span',
                            {
                              class: V([
                                'flex items-center justify-center w-[4rem] h-[2.1rem] border cursor-pointer',
                                C
                              ]),
                              key: C,
                              onClick: (z) => (o.selectedColor = C)
                            },
                            [
                              a(
                                'span',
                                { class: V([{ sized: o.selectedColor === C }, 'hidden']) },
                                F(C),
                                3
                              ),
                              Me(
                                a(
                                  'p',
                                  {
                                    class: V(['text-white', { black: o.selectedColor === 'White' }])
                                  },
                                  '#',
                                  2
                                ),
                                [[Oe, o.selectedColor === C]]
                              )
                            ],
                            10,
                            om
                          )
                        )
                      ),
                      128
                    ))
                  ]),
                  nm
                ])
              ]),
              a('div', im, [
                a('div', lm, [
                  am,
                  a('div', cm, [
                    Me(
                      k(
                        l,
                        { onClick: t[2] || (t[2] = (C) => (o.HiddenDesc = !o.HiddenDesc)) },
                        null,
                        512
                      ),
                      [[Oe, !o.HiddenDesc]]
                    ),
                    Me(
                      k(
                        u,
                        { onClick: t[3] || (t[3] = (C) => (o.HiddenDesc = !o.HiddenDesc)) },
                        null,
                        512
                      ),
                      [[Oe, o.HiddenDesc]]
                    )
                  ])
                ]),
                Me(
                  a(
                    'article',
                    {
                      class: 'tracking-wide my-2',
                      innerHTML: n.TheDisplayedProduct().theDetails.theCaption
                    },
                    null,
                    8,
                    hm
                  ),
                  [[Oe, o.HiddenDesc]]
                )
              ]),
              um,
              a('div', fm, [
                a('div', dm, [
                  a('div', pm, [
                    a('div', { onClick: t[4] || (t[4] = (C) => n.forCounter()), class: 'p-4' }, [
                      k(f)
                    ]),
                    a('p', mm, F(o.count), 1),
                    a('div', { onClick: t[5] || (t[5] = (C) => (o.count += 1)), class: 'p-4' }, [
                      k(m)
                    ])
                  ])
                ]),
                a(
                  'button',
                  {
                    class: V([
                      'border py-3 bg-[#0a244f] w-full font-medium opacity-30 cursor-not-allowed',
                      { opacityNone: o.selectedColor !== '' && o.selectedSize !== '' }
                    ]),
                    onClick: t[6] || (t[6] = (C) => n.AddToCart(n.TheDisplayedProduct()))
                  },
                  ' Add to Cart ',
                  2
                )
              ])
            ])
          ])
        ]),
        a('section', gm, [
          a('nav', Sm, [
            a(
              'h2',
              {
                class: V([
                  'text-xl tracking-wide my-4 cursor-pointer nav',
                  { line: o.currentSection === 'isProduct' }
                ]),
                onClick: t[7] || (t[7] = (C) => (o.currentSection = 'isProduct'))
              },
              ' Details ',
              2
            ),
            a(
              'h2',
              {
                class: V([
                  'text-xl tracking-wide my-4 cursor-pointer nav',
                  { line: o.currentSection === 'isReviews' }
                ]),
                onClick: t[8] || (t[8] = (C) => (o.currentSection = 'isReviews'))
              },
              ' Reviews ',
              2
            ),
            a(
              'h2',
              {
                class: V([
                  'text-xl tracking-wide my-4 cursor-pointer nav',
                  { line: o.currentSection === 'isFAQs' }
                ]),
                onClick: t[9] || (t[9] = (C) => (o.currentSection = 'isFAQs'))
              },
              ' FAQs ',
              2
            )
          ]),
          o.currentSection == 'isProduct' ? (b(), x('main', ym, wm)) : es('', !0),
          o.currentSection == 'isReviews'
            ? (b(),
              x('main', bm, [
                (b(!0),
                x(
                  q,
                  null,
                  fe(
                    o.Testimonials,
                    (C) => (
                      b(),
                      yt(
                        p,
                        {
                          key: C,
                          CustomerName: C.customerName,
                          CustomerComment: C.customerComment
                        },
                        null,
                        8,
                        ['CustomerName', 'CustomerComment']
                      )
                    )
                  ),
                  128
                ))
              ]))
            : es('', !0),
          o.currentSection == 'isFAQs'
            ? (b(),
              x('main', vm, [
                (b(!0),
                x(
                  q,
                  null,
                  fe(
                    o.FAQs,
                    (C) => (
                      b(),
                      yt(
                        S,
                        { key: C, theQues: C.question, theAns: C.answer, isSeen: C.isSeen },
                        null,
                        8,
                        ['theQues', 'theAns', 'isSeen']
                      )
                    )
                  ),
                  128
                ))
              ]))
            : es('', !0)
        ]),
        a('main', xm, [
          Pm,
          a('section', Lm, [
            (b(!0),
            x(
              q,
              null,
              fe(
                n.AnotherLikedProducts,
                (C) => (
                  b(),
                  x('div', { key: C, class: 'relative' }, [
                    a('div', null, [
                      a('div', null, [
                        a(
                          'img',
                          { src: C.theMainImg.replace('./', '../'), class: 'w-full h-[80vh] img' },
                          null,
                          8,
                          Tm
                        ),
                        a(
                          'div',
                          {
                            class: V([
                              'onLoad cursor-pointer absolute right-4 bottom-20 bg-[#080808e8] w-fit py-3 px-4 mob:bottom-[7rem]',
                              { getOut: !C.isSeen }
                            ])
                          },
                          [k(E, { onClick: (z) => (C.isSeen = !C.isSeen) }, null, 8, ['onClick'])],
                          2
                        )
                      ]),
                      a('div', null, [
                        a(
                          'div',
                          {
                            class: V([
                              'flex w-full justify-center gap-4 px-14 bg-[#080808e8] absolute bottom-16 mob:bottom-[7rem]',
                              { getIn: !C.isSeen }
                            ])
                          },
                          [
                            (b(!0),
                            x(
                              q,
                              null,
                              fe(C.theDetails.theSizes, (z) =>
                                Me(
                                  (b(),
                                  x(
                                    'div',
                                    {
                                      key: z,
                                      class: V([
                                        'size cursor-pointer py-1 px-2 hover:bg-[#302f2fe8]',
                                        { hidden: C.showColor }
                                      ]),
                                      onClick: (Y) => (
                                        (o.selectedSize = z), (C.showColor = !C.showColor)
                                      )
                                    },
                                    [a('p', null, F(z), 1)],
                                    10,
                                    Mm
                                  )),
                                  [[Oe, !C.isSeen]]
                                )
                              ),
                              128
                            )),
                            (b(!0),
                            x(
                              q,
                              null,
                              fe(
                                C.theDetails.theColors,
                                (z) => (
                                  b(),
                                  x(
                                    'div',
                                    {
                                      key: z,
                                      class: V([
                                        'hidden cursor-pointer py-1 px-2 hover:bg-[#302f2fe8]',
                                        { getIn: C.showColor }
                                      ])
                                    },
                                    [
                                      a(
                                        'div',
                                        {
                                          onClick: (Y) => ((o.selectedColor = z), n.toggleColor(C))
                                        },
                                        F(z),
                                        9,
                                        Im
                                      )
                                    ],
                                    2
                                  )
                                )
                              ),
                              128
                            ))
                          ],
                          2
                        )
                      ])
                    ]),
                    a('div', km, [
                      k(
                        M,
                        {
                          class: 'text-nowrap',
                          to: `/${C.theDetails.theStyle}/${C.theTitle.replaceAll(' ', '')}`,
                          onClick: (z) => (n.SeenProduct(C), n.goToUp())
                        },
                        { default: ue(() => [se(F(C.theTitle), 1)]), _: 2 },
                        1032,
                        ['to', 'onClick']
                      ),
                      a('div', Em, [
                        C.salePercentage === 0
                          ? (b(), x('h3', Am, ' $' + F(C.thePrice), 1))
                          : (b(),
                            x('div', Rm, [
                              a(
                                'h3',
                                null,
                                ' $' + F(n.GetSalePrice(C.thePrice, C.salePercentage)),
                                1
                              ),
                              a('del', null, F(C.thePrice), 1)
                            ]))
                      ])
                    ])
                  ])
                )
              ),
              128
            ))
          ])
        ]),
        k(W),
        k(P)
      ],
      64
    )
  )
}
const Om = re(Wp, [
    ['render', $m],
    ['__scopeId', 'data-v-b7428015']
  ]),
  Fm = Xc({
    history: pc('/BlackWolfECommerce/'),
    routes: [
      { path: '/', name: 'Home', component: fp },
      {
        path: '/about',
        name: 'About',
        component: () => Ss(() => import('./AboutView-KJPeO8ba.js'), __vite__mapDeps([]))
      },
      { path: '/category', name: 'Category', component: vp },
      { path: '/:Style/:Title', name: 'TheProduct', component: Om },
      {
        path: '/account',
        name: 'Account',
        component: () => Ss(() => import('./AccountView-BJ_G8jMI.js'), __vite__mapDeps([]))
      },
      {
        path: '/user/:FirstAndLastName',
        name: 'User',
        component: () => Ss(() => import('./UserView-BcnE1WuH.js'), __vite__mapDeps([]))
      },
      {
        path: '/account/register',
        name: 'Register',
        component: () => Ss(() => import('./RegisterPage-B3qoUlLV.js'), __vite__mapDeps([]))
      }
    ]
  }),
  Gr = Aa(ef)
Gr.use(Xa())
Gr.use(Fm)
Gr.mount('#app')
export {
  q as F,
  it as R,
  Ur as _,
  k as a,
  Vn as b,
  x as c,
  re as d,
  jt as e,
  a as f,
  se as g,
  Xm as h,
  Me as i,
  fe as j,
  V as n,
  b as o,
  j as r,
  Wt as s,
  F as t,
  Zn as v,
  ue as w
}
