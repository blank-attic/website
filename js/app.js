function getAllElementsWithAttribute(attribute) {
    // http://stackoverflow.com/questions/9496427/get-elements-by-attribute-when-queryselectorall-is-not-available-without-using-l
    var matchingElements = [];
    var allElements = document.getElementsByTagName('*');
    for (var i = 0, n = allElements.length; i < n; i++)
    {
        if (allElements[i].getAttribute(attribute) !== null)
        {
            // Element exists with attribute. Add to array.
            matchingElements.push(allElements[i]);
        }
    }
    return matchingElements;
}

function listenToDataClose() {
    var elements = getAllElementsWithAttribute("data-check");
    for (var e of elements) {
        var v = e.getAttribute("data-check");
        var etc = document.getElementById(v);
        e.addEventListener("click", function(event){
            etc.checked = !etc.checked;
        });
    }
}

listenToDataClose();
