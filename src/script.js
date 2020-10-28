function block() {
  try {
    blockCollection(document.getElementsByTagName("dd-holder"));
    blockCollection(document.getElementsByClassName("shrink-none mbox--main"));
    blockCollection(document.getElementsByClassName("NativeLinkGroup"));
  } catch {}
}

function blockCollection(collection) {
  for (var i = 0; i < collection.length; i++)
    blockElement(collection[i]);
}

function blockElement(element) {
  element.style.display = "none";
}

block()
setTimeout(block, 1000);
setTimeout(block, 2000);
setTimeout(block, 4000);
setInterval(block, 10000);
