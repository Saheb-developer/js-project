const container = document.querySelector('#container');
const rectangle = document.querySelector('#rectangle');
container.addEventListener('mousemove', (dets)=>{
    let mainval = rectangle.getBoundingClientRect()
    console.log(mainval)
    let xval = gsap.utils.mapRange(0, container.clientWidth, mainval.width, container.clientWidth - mainval.width, dets.clientX)
    console.log(xval)
    gsap.to(rectangle,{
        left: xval + 'px',
    })
})
