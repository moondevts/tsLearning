// This plugin will create tints of a chosen color
// The elements will be placed in a frame with auto layout
// The UI will allow the user to pick the original color, give the color a name, and how many tints to generate, the distance between copies, the dimensions of a copy and the frame orientation

// Show th plugin UI
figma.showUI(__html__, {width: 320, height: 640, title: "Color Tint Generator"});

// Message received from the UI
figma.ui.onmessage = msg => {
  if (msg.type === 'actionGenerate') {
    console.log(msg.formDataObj);
    // Destructure the form data object
    const {circleSize, circleSpacing, colorCode, colorName, frameDirection, tintNumber} = msg.formDataObj;

    // Create a frame and name it
    const parentFrame = figma.createFrame();

    parentFrame.name = 'Tints of ' + colorName + ' color';

    // Add auto layout to the frame and set the direction, padding, spacing and sizing mode
    parentFrame.layoutMode = frameDirection.toUpperCase();
    parentFrame.paddingLeft = 64;
    parentFrame.paddingRight = 64;
    parentFrame.paddingTop = 64;
    parentFrame.paddingBottom = 64;

    parentFrame.itemSpacing = parseInt(circleSpacing);

    parentFrame.primaryAxisSizingMode = 'AUTO';
    parentFrame.counterAxisSizingMode = 'AUTO';

    // Generate the tints as ellipses
    for (let i = 0; i < tintNumber; i++) {
      const tintNode = figma.createEllipse();

      // Name the layer
      tintNode.name = colorName + ' ' + (100-i*10);

      // Size the layer
      tintNode.resize(parseInt(circleSize), parseInt(circleSize));

      // Convert the HEX value to RGB
      // Function based on this thread: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
      const hexToRgb = (hex: string) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
      }
      const colorR = hexToRgb(colorCode)!.r / 255,
        colorG = hexToRgb(colorCode)!.g / 255,
        colorB = hexToRgb(colorCode)!.b / 255;

      // Color the layer
      tintNode.fills = [{type: 'SOLID', color: {r: colorR, g: colorG, b: colorB}}];

      // Set layer opacity
      tintNode.opacity = (100-i*10) / 100;

      // Add the generated nodes to the parent frame
      parentFrame.appendChild(tintNode);

      // Select and zoom to the generated frame
      const selectFrame : FrameNode[] = []
      selectFrame.push(parentFrame);

      figma.currentPage.selection = selectFrame;
      figma.viewport.scrollAndZoomIntoView(selectFrame);
    }

    // @@ 1:06:40

    figma.closePlugin('Tints generated successfully!');
  } else if (msg.type === 'actionExit') {
    figma.closePlugin();
  }

}
// figma.closePlugin();