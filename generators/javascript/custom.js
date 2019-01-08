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
  // Text value.
  var code = Blockly.JavaScript.quote_(block.getFieldValue('TEXT'));
  if ('TEXT' === 'A') {
    var code = Blockly.JavaScript.quote_(block.getFieldValue('TEXT'));
  } else
    var code =
      "'This is: " + Blockly.JavaScript.quote_(block.getFieldValue('TEXT'));

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
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
*/

/*
Blockly.JavaScript['text_google'] = function(block) {
  var code = Blockly.JavaScript.quote_(block.getFieldValue('TEXT'));
  switch (code) {
    case A:
      var code =
        "'ThisSSSS is: " +
        Blockly.JavaScript.quote_(block.getFieldValue('TEXT'));
      return [code, Blockly.JavaScript.ORDER_ATOMIC];
  }
  /*
  if ('code' === 'A') {
    var code =
      "'This is: " + Blockly.JavaScript.quote_(block.getFieldValue('TEXT'));
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  }

  //return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

*/
