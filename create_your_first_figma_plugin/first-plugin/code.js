function runPlugin() {
    // Get the number of selected elements
    let selectedElements = figma.currentPage.selection.length;

    // Display error messages on invalid selection
    if (selectedElements === 0) {
        figma.closePlugin('No element selected');
        return
    }

    if (selectedElements > 1) {
        figma.closePlugin('Please select a single element');
        return
    }

    // Find the name of the selected element
    let selectedName = figma.currentPage.selection[0].name;
    console.log(selectedName);

    // Callback function for findAll()
    function hasSameName(node) {
        return node.name === selectedName;
    }

    // Get all the elements with the same name as the selected one
    let withSameName = figma.currentPage.findAll(hasSameName);
    // let elements = figma.currentPage.findAll(node => node.name === selectedName);

    // Select all elements with the same name as the selected one
    figma.currentPage.selection = withSameName;

    figma.closePlugin(withSameName.length + ' elements selected');
    return
}

runPlugin();
