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

function listenToDataCheck() {
    var elements = getAllElementsWithAttribute("data-check");
    for (var e of elements) {
        e.addEventListener("click", function(){
            var v = e.getAttribute("data-check"),
            etc = document.getElementById(v);
            etc.checked = !etc.checked;
        });
    }
}

function listenToDataToggle() {
    var elements = getAllElementsWithAttribute("data-toggle");
    for (var e of elements) {
        e.addEventListener("click", function(){
            var v = this.getAttribute("data-toggle"),
                etc = document.getElementById(v);

            if (etc.className.indexOf("active") == -1) {
                etc.className += " active";
            } else {
                etc.className = etc.className.replace(" active","");
            }
        });
    }
}

listenToDataCheck();

listenToDataToggle();
