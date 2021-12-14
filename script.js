const showSummary = (siteSummary, siteHeader) => {
    if (siteSummary.style.display === 'none') {
        siteHeader.style.display = 'none';
        siteSummary.style.display = 'block';
    }
}

const reverseEvent = (siteSummary, siteHeader) => {
    if (siteSummary.style.display != 'none'){
        siteHeader.style.display = 'block';
        siteSummary.style.display = 'none';
    }
}

// Coffee site
let coffeeCol = document.getElementById("tCoffee-site");
let tcSummary = document.getElementById('tcsite-info');
let tcHeader = document.getElementById('tcproject-name');

coffeeCol.addEventListener('mouseenter', () => {
    //burgerCol.style.display = block;
    showSummary(tcSummary, tcHeader);
})

coffeeCol.addEventListener('mouseleave', () => {
    //burgerCol.style.display = block;
    reverseEvent(tcSummary, tcHeader);
})

// Fotomatic site
let fotoCol = document.getElementById("foto-site");
let fSummary = document.getElementById('fsite-info');
let fHeader = document.getElementById('fproject-name');

fotoCol.addEventListener('mouseenter', () => {
    //burgerCol.style.display = block;
    showSummary(fSummary, fHeader);
})

fotoCol.addEventListener('mouseleave', () => {
    //burgerCol.style.display = block;
    reverseEvent(fSummary, fHeader);
})

// Burger site
let burgerCol = document.getElementById("burger-site");
let bSummary = document.getElementById('dbsite-info');
let bHeader = document.getElementById('dbproject-name');

burgerCol.addEventListener('mouseenter', () => {
    //burgerCol.style.display = block;
    showSummary(bSummary, bHeader);
})

burgerCol.addEventListener('mouseleave', () => {
    //burgerCol.style.display = block;
    reverseEvent(bSummary, bHeader);
})
