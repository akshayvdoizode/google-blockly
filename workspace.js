/* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
var toolbox = document.getElementById("toolbox");

var options = {
  toolbox: toolbox,
  collapse: true,
  comments: true,
  disable: true,
  maxBlocks: Infinity,
  trashcan: true,
  horizontalLayout: false,
  toolboxPosition: "start",
  css: true,
  media: "https://blockly-demo.appspot.com/static/media/",
  rtl: false,
  scrollbars: true,
  sounds: true,
  oneBasedIndex: true,
};

/* Inject your workspace */
var workspace = Blockly.inject("blockly-div", options);

/* Load Workspace Blocks from XML to workspace. Remove all code below if no blocks to load */

/* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
var workspaceBlocks = document.getElementById("workspaceBlocks");

/* Load blocks to workspace. */
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);
function runCode() {
  console.log("called");

  window.LoopTrap = 1000;
  Blockly.JavaScript.INFINITE_LOOP_TRAP =
    'if(--window.LoopTrap == 0) throw "Infinity loop";\n';
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  try {
    eval(code);
  } catch (e) {
    alert(e);
    b;
  }
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
}