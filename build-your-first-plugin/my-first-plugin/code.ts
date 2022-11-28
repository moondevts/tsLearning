figma.showUI(__html__);

figma.ui.resize(500, 500);

figma.ui.onmessage = pluginMessage => {
  const postComponentSet = figma.root.findOne(node => node.type == "COMPONENT_SET" && node.name == "post") as ComponentSetNode;

  let selectedVariant;

  console.log('Image Variant: ' + pluginMessage.imageVariant);

  if (pluginMessage.darkModeState === true) {
    switch(pluginMessage.imageVariant) {
      case "2":
        // crate instance of dark mode, single image
        selectedVariant = postComponentSet.findOne(node => node.type == "COMPONENT" && node.name == "Image=single, Dark mode=true") as ComponentNode;
        break;
      case "3":
        // crate instance of dark mode, carousel
        selectedVariant = postComponentSet.findOne(node => node.type == "COMPONENT" && node.name == "Image=carousel, Dark mode=true") as ComponentNode;
        break;
      default:
        // crate instance of dark mode, no image
        selectedVariant = postComponentSet.findOne(node => node.type == "COMPONENT" && node.name == "Image=none, Dark mode=true") as ComponentNode;
        break;
    }
  } else {
    switch(pluginMessage.imageVariant) {
      case "2":
        // crate instance of light mode, single image
        selectedVariant = postComponentSet.findOne(node => node.type == "COMPONENT" && node.name == "Image=single, Dark mode=false") as ComponentNode;
        break;
      case "3":
        // crate instance of light mode, carousel
        selectedVariant = postComponentSet.findOne(node => node.type == "COMPONENT" && node.name == "Image=carousel, Dark mode=false") as ComponentNode;
        break;
      default:
        // crate instance of light mode, no image
        selectedVariant = postComponentSet.defaultVariant as ComponentNode;
        break;
    }
  }

  const newPost = selectedVariant.createInstance();

  const templateName = newPost.findOne(node => node.name == "displayName" && node.type == "TEXT") as TextNode;
  const templateUsername = newPost.findOne(node => node.name == "@username" && node.type == "TEXT") as TextNode;
  const templateDescription = newPost.findOne(node => node.name == "description" && node.type == "TEXT") as TextNode;

  templateName.characters = pluginMessage.name;
  templateUsername.characters = pluginMessage.username;
  templateDescription.characters = pluginMessage.sescription;

  console.log(templateName.characters);
  console.log(templateUsername.characters);
  console.log(templateDescription.characters);

  figma.closePlugin();
}