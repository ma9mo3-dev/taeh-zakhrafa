// lib/fonts.js

const fontMaps = {
  bold: c => mapChar(c, 0x1D400, 0x1D41A),
  italic: c => mapChar(c, 0x1D434, 0x1D44E),
  boldItalic: c => mapChar(c, 0x1D468, 0x1D482),
  script: c => mapChar(c, 0x1D49C, 0x1D4B6),
  fraktur: c => mapChar(c, 0x1D504, 0x1D51E),
  doubleStruck: c => mapChar(c, 0x1D538, 0x1D552),
  sans: c => mapChar(c, 0x1D5A0, 0x1D5BA),
  sansBold: c => mapChar(c, 0x1D5D4, 0x1D5EE),
  sansItalic: c => mapChar(c, 0x1D608, 0x1D622),
  monospace: c => mapChar(c, 0x1D670, 0x1D68A),
  circled: c => circledChar(c),
  squared: c => squaredChar(c),
  flipped: c => flipChar[c.toLowerCase()] || c,
  fullwidth: c => fullWidthChar(c),
  smallCaps: c => smallCapsMap[c.toLowerCase()] || c
}

const smallCapsMap = {
  a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ғ', g: 'ɢ',
  h: 'ʜ', i: 'ɪ', j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ',
  n: 'ɴ', o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ', s: 's',
  t: 'ᴛ', u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ'
}

const flipChar = {
  a: 'ɐ', b: 'q', c: 'ɔ', d: 'p', e: 'ǝ', f: 'ɟ', g: 'ƃ',
  h: 'ɥ', i: 'ᴉ', j: 'ɾ', k: 'ʞ', l: 'ʃ', m: 'ɯ',
  n: 'u', o: 'o', p: 'd', q: 'b', r: 'ɹ', s: 's',
  t: 'ʇ', u: 'n', v: 'ʌ', w: 'ʍ', x: 'x', y: 'ʎ', z: 'z'
}

function mapChar(char, upperStart, lowerStart) {
  const code = char.charCodeAt(0)
  if (code >= 65 && code <= 90) return String.fromCodePoint(upperStart + (code - 65))
  if (code >= 97 && code <= 122) return String.fromCodePoint(lowerStart + (code - 97))
  return char
}

function circledChar(char) {
  const code = char.charCodeAt(0)
  if (code >= 65 && code <= 90) return String.fromCodePoint(0x24B6 + (code - 65))
  if (code >= 97 && code <= 122) return String.fromCodePoint(0x24D0 + (code - 97))
  return char
}

function squaredChar(char) {
  const squares = {
    A: '🄰', B: '🄱', C: '🄲', D: '🄳', E: '🄴', F: '🄵',
    G: '🄶', H: '🄷', I: '🄸', J: '🄹', K: '🄺', L: '🄻',
    M: '🄼', N: '🄽', O: '🄾', P: '🄿', Q: '🅀', R: '🅁',
    S: '🅂', T: '🅃', U: '🅄', V: '🅅', W: '🅆', X: '🅇',
    Y: '🅈', Z: '🅉'
  }
  return squares[char.toUpperCase()] || char
}

function fullWidthChar(char) {
  const code = char.charCodeAt(0)
  if (code >= 33 && code <= 126) return String.fromCharCode(0xFF00 + code - 0x20)
  return char
}

export function applyAllFonts(input) {
  const results = {}
  for (let name in fontMaps) {
    results[name] = [...input].map(fontMaps[name]).join('')
  }
  return results
  }
