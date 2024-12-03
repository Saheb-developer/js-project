const center = document.querySelector("#center");
 
const throttleFunction = (func, delay) => {

            let prev = 0;
            return (...args) => {
                let now = new Date().getTime();
                if (now - prev > delay) {
                    prev = now;
                    return func(...args);
                }
            }
}

center.addEventListener("mousemove",
        throttleFunction((dets) => {
            let div = document.createElement('div');
            div.classList.add("imgdiv");
            let main = document.querySelector("main");
            main.appendChild(div);
            div.style.left = dets.clientX+'px';
            div.style.top = dets.clientY+'px';
            let img = document.createElement('img')
            div.appendChild(img)
            img.setAttribute('src','https://plus.unsplash.com/premium_photo-1719430569503-338fc89eb21f?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
            gsap.to(img,{
                y:0,
                duration:.5,
                ease:'power1'
            })
            gsap.to(img,{
                y:'100%',
                duration:.5,
                ease:'power1',
                delay:.6
            })
            setTimeout(()=>{
                div.remove()
            }, 6000)
            console.log(ans)
        }, 500));
        
