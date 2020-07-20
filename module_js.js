window.onload = () => {
    const _mjs = (_p, _c) => {
        let _s = document.createElement('script');
        _s.src = _p;
        document.head.append(_s);
        _s.onload = () => _c();
    }
}
