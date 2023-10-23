Shery.mouseFollower();
Shery.makeMagnet(".navleft h2, i");

// Shery.textAnimate(".navleft h2",{
//   style:2,
//   delay:0.3,
//   duration:0.5,
//   y:10,
//   multiplier:0.1,
// })

Shery.imageEffect("#container img",{
  style:4,
  config: {"uColor":{"value":true},"uSpeed":{"value":1.52,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]},"geoVertex":{"range":[1,64],"value":45.78},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.6173011225400087},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  
})

Shery.imageEffect(".imgleft img",{
  style:3,
config: {"uFrequencyX":{"value":23.14,"range":[0,100]},"uFrequencyY":{"value":6.61,"range":[0,100]},"uFrequencyZ":{"value":14.05,"range":[0,100]},"geoVertex":{"range":[1,64],"value":53.59},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.9841318720755861},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.17,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  
})
Shery.imageEffect(".imgright img",{
  style:3,
config: {"uFrequencyX":{"value":23.14,"range":[0,100]},"uFrequencyY":{"value":6.61,"range":[0,100]},"uFrequencyZ":{"value":14.05,"range":[0,100]},"geoVertex":{"range":[1,64],"value":53.59},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.9841318720755861},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.17,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  
})
Shery.imageEffect("#imgleft img",{
  style:3,

  
})
Shery.imageEffect("#imgright img",{
  style:3,

})
  

gsap.to(".heading h1",{
  y:40,
  duration:0.9,
  repeat:-1,
  yoyo:true
})

gsap.to(".heading p",{
  y:40,
  duration:0.9,
  repeat:-1,
  yoyo:true
})
