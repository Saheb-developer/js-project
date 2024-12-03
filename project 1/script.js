let rectangle = document.querySelector('#rectangle');
rectangle.addEventListener('mousemove', (dets) =>{
    let rectangleLocation = rectangle.getBoundingClientRect()
    let underRectanlevalu = dets.clientX - rectangleLocation.left
    console.log(underRectanlevalu)
    if (underRectanlevalu < rectangleLocation.width / 2) {
        let redColor = gsap.utils.mapRange(0, rectangleLocation.width / 2, 255, 0, underRectanlevalu)
        gsap.to(rectangle,{
            backgroundColor: `rgb(${redColor}, 0, 0)`
        })
    } else {
        let blueColor = gsap.utils.mapRange(255, 0, rectangleLocation.width / 2, 0, underRectanlevalu)
        gsap.to(rectangle,{
            backgroundColor: `rgb(0, 0, ${blueColor})`
        })
    }
})
rectangle.addEventListener('mouseleave', () => {
    gsap.to(rectangle, {
        backgroundColor: 'white'
    })
})