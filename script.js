




var crsr = document.querySelector("#cruser")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})




gsap.to("#nav h4 " , {
    y:-20,
    duration:2
}) 
gsap.to("#page1 h1 " , {
    y:-20,
    duration:2
}) 


gsap.to("#nav",{
    backgroundColor : "#000",
    height:"90px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroll:"body",
        // markers:true,
        start:"top-10%",
        end:"top -11%",
        scrub:1
    }
    
}) 
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroll:"body",
        // markers:true,
        start:"top -30%",
        end:"top -80%",
        scrub:2

    }
})
gsap.from("#aboutus img , #aboutuin" ,{
        y:50,
        opacity:0,
        duration:1,
       scrollTrigger:{
        trigger:"#aboutus",
        scroll:"body",
        
        start:"top 70%",
        end: "top 65%",
        scrub:1
       }
    
})


gsap.from(".card" ,{
    scale:0.8,
    opacity:0,
    duration:1,
   scrollTrigger:{
    trigger:".card",
    scroll:"body",
    // markers:true,
    start:"top 70%",
    end: "top 65%",
    scrub:2
   }

})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        scroll:"body",
         trigger:"#colon1",
        //  markers:true,
         start:"top 55%",
         end:"top 45%",
         scrub:3,

    }
    

        

    
})




gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        scroll:"body",
         trigger:"#colon1",
        //  markers:true,
         start:"top 55%",
         end:"top 45%",
         scrub:3,

    }
    

        

    
})

gsap.from("#page4 h1 ",{
    y:50,
    scrollTrigger:{
        scroll:"body",
         trigger:"#page4 h1",
        //  markers:true,
         start:"top 75%",
         end:"top 83%",
         scrub:3,

    }

})