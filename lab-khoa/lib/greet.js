'use strict';

function greet(name) {
  if (typeof name !== 'string') return null;
  
  return `hello ${name}`;
}

module.exports = greet; 