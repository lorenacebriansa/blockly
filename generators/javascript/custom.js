/**
 * @license

 * @fileoverview Generating JavaScript for logic blocks.
 */
'use strict';

goog.provide('Blockly.JavaScript.custom');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['What_colour_picker'] = function(block) {
  // Colour picker.
  var code = "'This is: " + block.getFieldValue('COLOUR') + "'";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['text_google'] = function(block) {
  var code = Blockly.JavaScript.quote_(block.getFieldValue('TEXT'));
  if ('TEXT' === 'GOOGLE') {
    fetch('https://www.google.es/', { method: 'get' })
      .then(function(respuesta) {
        return respuesta.json();
        // console.log(respuesta);
      })
      .then(function(j) {
        console.log(j);
      })
      .catch(function(err) {
        // Error :(
      });
  }
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
