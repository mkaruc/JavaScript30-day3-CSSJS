const inputs= document.querySelectorAll('input')

function handle(){
const suffix= this.dataset.sizing|| '';
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}
inputs.forEach(scale => scale.addEventListener('change', handle))
inputs.forEach(scale => scale.addEventListener('mousemove', handle))

