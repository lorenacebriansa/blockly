/**
 * @license

 * @fileoverview Generating JavaScript for logic blocks.
 */
'use strict';

goog.provide('Blockly.JavaScript.custom');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['What_colour_picker'] = function(block) {
  // Colour picker.

  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    });
  var code = "'Colour: " + block.getFieldValue('COLOUR') + "'";

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['text_google'] = function(block) {
  // Text value.
  var code = Blockly.JavaScript.quote_(block.getFieldValue('TEXT'));
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['function_url'] = function(block) {
  // Call a procedure with no return value.
  var funcName = Blockly.JavaScript.variableDB_.getName(
    block.getFieldValue('NAME'),
    Blockly.Procedures.NAME_TYPE,
  );

  console.log(funcName);
  let x = fetch(funcName)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    });

  var args = [];
  for (var i = 0; i < block.arguments_.length; i++) {
    args[i] =
      Blockly.JavaScript.valueToCode(
        block,
        'ARG' + i,
        Blockly.JavaScript.ORDER_COMMA,
      ) || 'null';
  }

  var code = 'The url is: ' + funcName + '(' + args.join(', ') + ');\n';
  var variable = 'The variable is x: ' + x;
  return code + variable;
};
