var isIsomorphic = function(s, t) {
 
  if(s.length !== t.length) {
      return false;
  }
  
  const myMap = new Map();
  for (let i = 0; i < s.length; i++ ){
      if(myMap.has(s.charAt(i) && 
      myMap.get(s.charAt(i)) !== t.charAt(i))) {
          return false;
          console.log("First if statement \n");
          console.log(s.charAt(i), t.charAt(i));
      } else {
          myMap.set(s.charAt(i), t.charAt(i));
          console.log("Second if statement \n");
          console.log(s.charAt(i), t.charAt(i));
      }
  }
  return true;
};

isIsomorphic("badc", "bada");