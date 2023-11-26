for(t=0; t<100; t++) {

  console.log(t);
  if(t > 20 && t < 30) {
      console.log("warm");
  } 

  if(t >= 30) { // || t == 30
      console.log("hot");
  }

  if(t === 20) { // || t == 20
      console.log("normal");
  }

  else if(t < 20) { // || t == 20
    console.log("cold");
  }

  if(t < 20 < t < 0) {
      console.log("cold")
  }

}