let lastMod = new Date(document.lastModified);
document.querySelector('#lastModified').textContent = lastMod;

const option = {
    year: 'numeric'
};
document.querySelector('#yearDate').innerHTML = new Date().toLocaleDateString("en-US", option);