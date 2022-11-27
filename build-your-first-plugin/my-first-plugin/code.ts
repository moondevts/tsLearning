figma.showUI(__html__);

figma.ui.resize(500, 500);

figma.ui.onmessage = pluginMessage => {
  const postComponentSet = figma.root.findOne(node => node.type == "COMPONENT_SET" && node.name == "post") as ComponentSetNode;
  const defaultVariant = postComponentSet.defaultVariant as ComponentNode;
  const defaultDark = postComponentSet.findOne(node => node.type == "COMPONENT" && node.name == "Image=none, Dark mode=true") as ComponentNode;

  console.log('Name: ' + pluginMessage.name);
  console.log('Username: ' + pluginMessage.username);
  console.log('Description: ' + pluginMessage.description);
  console.log('Image Variant: ' + pluginMessage.imageVariant);

  if (pluginMessage.darkModeState === true) {
    defaultDark.createInstance();
  } else {
    defaultVariant.createInstance();
  }

  figma.closePlugin();
}