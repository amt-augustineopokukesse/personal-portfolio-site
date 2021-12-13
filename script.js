const toggleHiddenElement = (siteSummary, siteHeader) => {
    if (siteSummary.style.display === 'none') {
        siteHeader.style.display = 'none';
        siteSummary.style.display = 'block';
    } else {
        siteHeader.style.display = 'block';
        siteSummary.style.display = 'none';
    }
}

// Coffee site
let coffeeCol = document.getElementById("tCoffee-site");
let tcSummary = document.getElementById('tcsite-info');
let tcHeader = document.getElementById('tcproject-name');

coffeeCol.addEventListener('click', () => {
    //burgerCol.style.display = block;
    toggleHiddenElement(tcSummary, tcHeader);
})

// Fotomatic site
let fotoCol = document.getElementById("foto-site");
let fSummary = document.getElementById('fsite-info');
let fHeader = document.getElementById('fproject-name');

fotoCol.addEventListener('click', () => {
    //burgerCol.style.display = block;
    toggleHiddenElement(fSummary, fHeader);
})

// Burger site
let burgerCol = document.getElementById("burger-site");
let bSummary = document.getElementById('dbsite-info');
let bHeader = document.getElementById('dbproject-name');

burgerCol.addEventListener('click', () => {
    //burgerCol.style.display = block;
    toggleHiddenElement(bSummary, bHeader);
})
