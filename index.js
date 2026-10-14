'use strict';

/**
 * Turn any string into a URL-safe slug.
 * slugify('Hello, World!') -> 'hello-world'
 */
function slugify(input, { separator = '-', lowercase = true } = {}) {
  if (typeof input !== 'string') throw new TypeError('slugify expects a string');
  let s = input.normalize('NFKD').replace(/[̀-ͯ]/g, '');
  if (lowercase) s = s.toLowerCase();
  return s
    .replace(/[^A-Za-z0-9]+/g, separator)
    .replace(new RegExp(`^\\${separator}+|\\${separator}+$`, 'g'), '');
}

module.exports = { slugify };
