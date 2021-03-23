const details = document.querySelectorAll("details");

details.forEach(targetDetail => {
    targetDetail.addEventListener('click', () => {
        details.forEach(detail => {
            if (detail !== targetDetail) { // Keeps the detail element that was clicked open, while closing all others
                detail.removeAttribute('open');
            }
        })
    })
});