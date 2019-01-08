goog.provide('Blockly.Blocks.url'); // Deprecated
goog.provide('Blockly.Constants.url');

goog.require('Blockly.Blocks');
goog.require('Blockly');

/**
 * Unused constant for the common HSV hue for all blocks in this category.
 * @deprecated Use Blockly.Msg['URL_HUE']. (2018 April 5)
 */
//Creation of a new color
Blockly.Msg.URL_HUE = 40;

Blockly.defineBlocksWithJsonArray([
  // BEGIN JSON EXTRACT
  // Block for text value
  {
    type: 'text_google',
    message0: '%1',
    args0: [
      {
        type: 'field_input',
        name: 'TEXT',
        text: '',
      },
    ],
    output: 'String',
    colour: '%{BKY_URL_HUE}',
    helpUrl: '%{BKY_TEXT_TEXT_HELPURL}',
    tooltip: '%{BKY_TEXT_TEXT_TOOLTIP}',
    extensions: ['text_quotes', 'parent_tooltip_when_inline'],
  },

  {
    type: 'What_colour_picker',
    message0: '%1',
    args0: [
      {
        type: 'field_colour',
        name: 'COLOUR',
        colour: '#FFFAAA',
      },
    ],
    output: 'Colour',
    colour: '%{BKY_URL_HUE}',
    helpUrl: '%{BKY_COLOUR_PICKER_HELPURL}',
    tooltip: '%{BKY_COLOUR_PICKER_TOOLTIP}',
    extensions: ['parent_tooltip_when_inline'],
  },
]);
