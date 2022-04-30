fetch('https://raw.githubusercontent.com/Amanjot726/cml.gndec/main/a/Header.html')
.then(res => res.text())
.then(text => {
    let ele = document.querySelector(".load");
    ele.innerHTML = text;
    // oldelem.parentNode.replaceChild(newelem,oldelem);
})

fetch('https://raw.githubusercontent.com/Amanjot726/cml.gndec/main/a/footer.html')
.then(res => res.text())
.then(text => {
    let ele = document.querySelector(".fetch-footer");
    ele.innerHTML = text;
    // oldelem.parentNode.replaceChild(newelem,oldelem);
})