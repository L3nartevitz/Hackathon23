function abrir() {
    showSidebar = !showSidebar;
    console.log(showSidebar);
    if (showSidebar) {
        navigationHeader.style.marginLeft = '-10vw';
    }
    else
        (
            navigationHeader.style.marginLeft = '-100vw'
        );
}
