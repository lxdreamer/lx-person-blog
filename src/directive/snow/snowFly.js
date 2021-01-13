import Snow from './snow'
const snowList = []
function moveSnow(){
  window.requestAnimationFrame(() => {
      snowList.forEach((item) => {
          item.move()
      })
      moveSnow()
  })
}

export default{
  bind:function(el){
  for (let i = 0; i < 200; i++) {
      const snow = new Snow(el)
      snow.render()
      snowList.push(snow)
  }
  moveSnow()
  }
}
