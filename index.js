function produceDrivingRange(blocks){
  return (start, end) => {
    const dist = parseInt(end) - parseInt(start)
    if (dist < blocks){
      return `within range by ${blocks-dist}`
    }else{
      return `${dist - blocks} blocks out of range`
    }
  }
}


function produceTipCalculator(cents){
  return (fare)=>{
    return cents * fare;
  }
}

function createDriver(){
  driverId = 0
  return class Driver{
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  }
}
