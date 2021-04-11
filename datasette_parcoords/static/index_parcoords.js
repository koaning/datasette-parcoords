document.addEventListener('DOMContentLoaded', function(){
    const csvElem = document.querySelector('.export-links a[href*=csv]');
    if (jsonEl) {
        jsonUrl = jsonEl.getAttribute('href');
        // Create elements for adding graph tool to page
        visTool = document.createElement('div');
        visTool.className = "parcoords"
        visTool.id = "example-progressive"
    
        let table = document.querySelector('table.rows-and-columns');
        table.parentNode.insertBefore(visTool, table);
    }
    
});
