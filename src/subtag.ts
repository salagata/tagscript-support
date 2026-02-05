// Devuelve un objeto (o {}) con el nombre de la sub-tag según la posición del cursor.
// Reglas:
// - Busca la llave '{' correspondiente antes del cursor respetando anidamiento.
// - Si el contenido inmediatamente después de '{' empieza con comillas, se considera
//   una propiedad JSON y devuelve {}.
// - Busca ':' fuera de comillas; si no existe, devuelve {}.
// - Si todo encaja, devuelve { name: "subtag" }.
export function getSubTagName(text: string, cursor: number): string {
    if (cursor < 0 || cursor > text.length) return "";

    function findOpeningBeforeCursor(t: string, pos: number) {
        let depth: number = 0;
        for (let i = pos - 1; i >= 0; i--) {
            const ch = t[i];
            if (ch === '}') depth++;
            else if (ch === '{') {
                if (depth === 0) return i;
                depth--;
            }
        }
        return -1;
    }

    function findMatchingClose(t: string, openIdx: number) {
        if (openIdx < 0) return -1;
        let depth: number = 0;
        for (let j = openIdx + 1; j < t.length; j++) {
            const ch = t[j];
            if (ch === '{') depth++;
            else if (ch === '}') {
                if (depth === 0) return j;
                depth--;
            }
        }
        return -1;
    }

    const openIdx: number = findOpeningBeforeCursor(text, cursor);
    if (openIdx === -1) return "";

    const closeIdx: number = findMatchingClose(text, openIdx);
    if (closeIdx === -1) return "";

    if (!(openIdx < cursor && cursor <= closeIdx)) return "";

    // Saltar espacios y verificar comillas inmediatamente después de '{'
    let p = openIdx + 1;
    while (p < text.length && /\s/.test(text[p])) p++;
    if (text[p] === '"' || text[p] === "'") return "";

    // Buscar ':' fuera de comillas
    function findColonOutsideQuotes(t: string, start: number, end: number) {
        let inQuote = false;
        let quoteChar = null;
        for (let k = start; k < end; k++) {
            const ch = t[k];
            if (!inQuote && (ch === '"' || ch === "'")) { inQuote = true; quoteChar = ch; }
            else if (inQuote && ch === quoteChar) { inQuote = false; quoteChar = null; }
            else if (!inQuote && ch === ':') return k;
        }
        return -1;
    }

    const colonIdx = findColonOutsideQuotes(text, openIdx + 1, closeIdx);
    if (colonIdx === -1) return "";

    const nameRaw: string = text.slice(openIdx + 1, colonIdx).trim();
    if (!nameRaw) return "";
    if (nameRaw[0] === '"' || nameRaw[0] === "'") return "";

    return nameRaw;
}
