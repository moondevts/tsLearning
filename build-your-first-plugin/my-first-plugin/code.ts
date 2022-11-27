figma.showUI(__html__);

figma.ui.resize(500, 500);

figma.ui.onmessage = pluginMessage => {
  console.log('Name: ' + pluginMessage.name);
  console.log('Username: ' + pluginMessage.username);
  console.log('Description: ' + pluginMessage.description);
  console.log('Image Variant: ' + pluginMessage.imageVariant);

  if (pluginMessage.darkModeState === true) {
    console.log('Dark Mode is on');
  } else {
    console.log('Dark Mode is off');
  }

  figma.closePlugin();
}