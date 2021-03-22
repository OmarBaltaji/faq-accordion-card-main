const details = document.querySelectorAll("details");

details.forEach(detail => {
    detail.addEventListener('click', () => {
        
        details.forEach(detail => {
            detail.removeAttribute('open');
            if (detail.hasAttributes('open')) {
                this.setAttribute('open', true);
            }
        })
        
    })
});