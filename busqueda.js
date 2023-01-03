document.addEventListener("keyup", e =>{
    if(e.target.matches("#buscador")){

        if(e.key =="Enter")e.target.value = ""
        document.querySelectorAll(".articulo").forEach(buscar =>{

            buscar.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?buscar.classList.remove("filtro")
            :buscar.classList.add("filtro")
        })
    }

})
// metodo de temas
const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
            function cambiaTema(ev){
                if(ev.target.checked){
                    document.documentElement.setAttribute('tema', 'light');
                } else {
                    document.documentElement.setAttribute('tema', 'dark');
                }
            }
            colorSwitch.addEventListener('change', cambiaTema);