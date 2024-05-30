const submenuLabels = document.querySelectorAll('input[name="sidemenu__submenu__radio-item"]')

submenuLabels.forEach(chb => {
    chb.addEventListener('change', ()=>{
        submenuLabels.forEach(ch => {
            if(ch !== chb) {
                ch.checked = false
            }
        });
    })
});