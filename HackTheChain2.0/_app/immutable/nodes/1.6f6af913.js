import {
    s as x,
    n as u,
    e as S
} from "../chunks/scheduler.63274e7e.js";
import {
    S as j,
    i as q,
    g as h,
    m as d,
    s as y,
    h as v,
    j as g,
    n as E,
    f as m,
    c as z,
    a as _,
    z as $,
    o as b
} from "../chunks/index.53ba859c.js";
import {
    p as C
} from "../chunks/stores.c1e377f6.js";

function H(p) {
    var f;
    let a, t = p[0].status + "",
        r, o, n, i = ((f = p[0].error) == null ? void 0 : f.message) + "",
        c;
    return {
        c() {
            a = h("h1"), r = d(t), o = y(), n = h("p"), c = d(i)
        },
        l(e) {
            a = v(e, "H1", {});
            var s = g(a);
            r = E(s, t), s.forEach(m), o = z(e), n = v(e, "P", {});
            var l = g(n);
            c = E(l, i), l.forEach(m)
        },
        m(e, s) {
            _(e, a, s), $(a, r), _(e, o, s), _(e, n, s), $(n, c)
        },
        p(e, [s]) {
            var l;
            s & 1 && t !== (t = e[0].status + "") && b(r, t), s & 1 && i !== (i = ((l = e[0].error) == null ? void 0 : l.message) + "") && b(c, i)
        },
        i: u,
        o: u,
        d(e) {
            e && (m(a), m(o), m(n))
        }
    }
}

function P(p, a, t) {
    let r;
    return S(p, C, o => t(0, r = o)), [r]
}
class B extends j {
    constructor(a) {
        super(), q(this, a, P, H, x, {})
    }
}
export {
    B as component
};