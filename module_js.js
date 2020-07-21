const _mjs = (_p, _c) => {
    _p.map(p => {
        let _s = document.createElement('script');
        _s.src = p;
        document.head.append(_s);
        _s.onload = () => _c();
    });
}