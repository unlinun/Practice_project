const input = document.querySelectorAll(".range-bar input")

function setValue(){
    const getValue = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`,`${this.value}${getValue}`)
}
input.forEach(i => i.addEventListener('change',setValue));
input.forEach(i => i.addEventListener('mousemove',setValue));

