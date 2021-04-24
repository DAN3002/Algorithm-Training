function questionCorrection(s) {
    s = s.toLowerCase();
    s = s.replace(/[^A-Za-z0-9,]/g, ' ');
    s = s.replace(/^[^A-Za-z0-9]+/, '');
    s = s.replace(/[^A-Za-z0-9]+$/, '');
    s = s.replace(/(?<=[A-Za-z0-9])([^A-Za-z0-9]+)(?=[A-Za-z0-9])/g, m => {
        if (/^[\s]+$/.test(m)) return ' ';
        return ', ';
    });
    s = s[0].toUpperCase() + s.slice(1) + '?';
    return s;
}