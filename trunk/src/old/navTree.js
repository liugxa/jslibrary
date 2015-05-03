// ------------------------------------------------------------------------//
// These functions control the consumer tree in the UI Prototype. They
// may or may appear in final production code!
// ------------------------------------------------------------------------//




// ------------------------------------------------------------------------//
// Initiate variables used in showCurrentTree() funtion

var currentTreeNodeName = "tree-0-name";


// ------------------------------------------------------------------------//
// Expand and collapse entire tree structure
// Doesn't work at the moment!!

function controlTreeAll(treeState) {
 
  // alert(treeState);

  if (treeState == "open") {
    var setVisibility = "block";
    var setImage = "contract";
  } else {
    var setVisibility = "none";
    var setImage = "expand";
  }

  var currentLevel = "1";

  var nodeCount = "1";

  var currentNode = "tree-"+nodeCount;

  // alert(setVisibility+", "+setImage);
  
   alert("Look: "+TreeWalker.lastChild("tree-1"));
  
  
    while (document.getElementById(currentNode)) {
    

      var currentNodeChild = currentNode+"-c";
      var currentNodeImage = currentNode+"-i";
    
      // alert(currentNodeChild+": "+setVisibility+", "+currentNodeImage+": "+setImage);
  
      document.getElementById(currentNodeChild).style.display = setVisibility;
      document.getElementById(currentNodeImage).src = "../images/tree-"+setImage+".gif";
        
    nodeCount++
  }
}


// ------------------------------------------------------------------------//
// Expand and collapse individual tree nodes

function controlTree(whichTree) {

  var treeNodeChild = whichTree.parentNode.parentNode.id+"-c";
  var treeNodeImage = whichTree.parentNode.parentNode.id+"-i";


  // alert("Image: "+treeNodeImage+", Child: "+treeNodeChild);
  // alert(document.getElementById(treeNodeImage));
  
  if (document.getElementById(treeNodeChild).style.display == "none") {
    document.getElementById(treeNodeChild).style.display = "block";
    document.getElementById(treeNodeImage).src = "../images/tree-expand.gif";
  } else {
    document.getElementById(treeNodeChild).style.display = "none";
    document.getElementById(treeNodeImage).src = "../images/tree-contract.gif";
  }
  
}


// ------------------------------------------------------------------------//
// Highlight current tree node in the tree

function showCurrentTree(newTreeNode) {

    var newTreeNodeName = newTreeNode.parentNode.id;
    
   // alert(currentTreeNode);
   // alert(newTreeNodeName);
  
    if (document.getElementById(currentTreeNodeName)) document.getElementById(currentTreeNodeName).className = "";
    if (document.getElementById(newTreeNodeName)) document.getElementById(newTreeNodeName).className = "current";

  currentTreeNodeName = newTreeNodeName;

}


// ------------------------------------------------------------------------//
// Hide/Show the tree to free up screen space

function toggleTreeVisibility() {
  
  if (document.getElementById("navTreeId").style.display == "none") {

    if (document.getElementById("pageNavModuleId")) document.getElementById("pageNavModuleId").style.paddingLeft = "13em";
    if (document.getElementById("filterModuleId")) document.getElementById("filterModuleId").style.marginLeft = "13em";
    if (document.getElementById("contentObjectsId")) document.getElementById("contentObjectsId").style.paddingLeft = "13em";
    if (document.getElementById("globalActionMenuId")) document.getElementById("globalActionMenuId").style.paddingLeft = "13em";

    if (document.getElementById("navTreeId")) document.getElementById("navTreeId").style.display = "block";
    if (document.getElementById("navTreeMinimizedId")) document.getElementById("navTreeMinimizedId").style.display = "none";

  } else {
  
    if (document.getElementById("pageNavModuleId")) document.getElementById("pageNavModuleId").style.paddingLeft = "25px";
    if (document.getElementById("filterModuleId")) document.getElementById("filterModuleId").style.marginLeft = "25px";
    if (document.getElementById("contentObjectsId")) document.getElementById("contentObjectsId").style.paddingLeft = "25px";
    if (document.getElementById("globalActionMenuId")) document.getElementById("globalActionMenuId").style.paddingLeft = "25px";

    if (document.getElementById("navTreeId")) document.getElementById("navTreeId").style.display = "none";
    if (document.getElementById("navTreeMinimizedId")) document.getElementById("navTreeMinimizedId").style.display = "block";

  }
  
}



