const clone = (val) => {
  return JSON.parse(JSON.stringify(val));
};

figma.showUI(__html__, { width: 650, height: 650 });
figma.ui.postMessage({ type: "networkRequest", style: "first-call" });
figma.ui.postMessage({ type: "multiples", value: figma.currentPage.selection.length > 1, size: figma.currentPage.selection.length });

figma.ui.onmessage = async (msg) => {
  if (msg.do === "load") {
    if(msg.searchString != "")
      figma.ui.postMessage({ type: "networkRequest", style: msg.style, searchString: msg.searchString });
    else
      figma.ui.postMessage({ type: "networkRequest", style: "first-call" });
  }

  if(msg.do === 'random'){
    figma.ui.postMessage({ type: "multiples", value: true, size: figma.currentPage.selection.length, style: "random" });
  }

  //RESIZER
  switch (msg.type) {
    case "resize":
      figma.ui.resize(msg.size.w, msg.size.h);
      figma.clientStorage.setAsync("size", msg.size).catch((err) => {}); // save size
      break;
  }

  //Read message type. Should add corresponding stuff to the UI depending on type
  if (msg.type === "attachment") {
    const selection = figma.currentPage.selection;
    const { imageBytes } = msg;
    const fillImg = figma.createImage(imageBytes);

    // If no node is selected, create a new rect with the image
    if (selection.length <= 0) {
      const nodes: SceneNode[] = [];
      let newRect = figma.createRectangle();
      newRect.resize(msg.width, msg.height);
      newRect.fills = [
        {
          type: "IMAGE",
          scaleMode: "FILL",
          imageHash: fillImg.hash,
          visible: true,
        },
      ];
      figma.currentPage.appendChild(newRect);
      nodes.push(newRect);
      figma.currentPage.selection = nodes;
      figma.viewport.scrollAndZoomIntoView(nodes);
      figma.closePlugin("Added image");
    }

    figma.currentPage.selection.map((item) => {
      if( item.type === "FRAME" ||
      item.type === "RECTANGLE" ||
      item.type === "ELLIPSE" ||
      item.type === "POLYGON" ||
      item.type === "STAR")
      {
        console.log(fillImg)
        let fills = clone(item.fills);
        fills[0] = {
          type: "IMAGE",
          scaleMode: "FILL",
          imageHash: fillImg.hash,
          visible: true,
        };
        item.fills = fills;
      }
    })
    figma.closePlugin(`Added image to UI`);
  } else if (msg.type === "text") {
    figma.closePlugin(`Added text to UI`);
  }
};

figma.on('selectionchange', () => {
  figma.ui.postMessage({ type: "multiples", size: figma.currentPage.selection.length });
})
