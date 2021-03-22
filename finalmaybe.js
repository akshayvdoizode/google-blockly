Blockly.Blocks["points"] = {
  init: function () {
    this.appendDummyInput().appendField("points");
    this.appendValueInput("x")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField(new Blockly.FieldTextInput("x"), "x");
    this.appendValueInput("NAME")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField(new Blockly.FieldTextInput("y"), "y");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["points"] = function (block) {
  var text_x = block.getFieldValue("x");
  var value_x = Blockly.JavaScript.valueToCode(
    block,
    "x",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var text_y = block.getFieldValue("y");
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  x = Number(value_x);
  y = Number(value_name);
  console.log(x, typeof y, x + y, text_x);
  // TODO: Assemble JavaScript into code variable.
  var code = "...;\n";
  var c = document.getElementById("canvaspad");
  var ctx = c.getContext("2d");
  function point(x, y, canvas) {
    canvas.beginPath();
    canvas.moveTo(x, y);
    canvas.lineTo(x + 1, y + 1);
    canvas.stroke();
  }
  for (let i = 4; i <= 20; i = i + 2) {
    console.log(i);
    point(x, y + i, ctx);
  }
  return [code, Blockly.JavaScript.ORDER_NONE];
};
