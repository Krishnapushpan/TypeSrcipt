//tuple

let value: [string, number, boolean] = ['don', 45, true]
console.log(value);

//example

let variable:[number, string, string, number]
variable = [200, '100%', '100%', 1]

let xy: [number, number] = [94.2,20.2]
function useCoords() : [number, number]{
    //get coorde
    const lat =100
    const long = 50

    return [lat, long]
}
const [lat, long] = useCoords()

let temp = ["world",22, "moon"]
    console.log(temp);
    console.log("length of the tuple temp: ",temp.length);
temp.push(500)
    console.log("temp after push: ",temp);
    temp.pop();
    console.log("temp after pop: ",temp);
    
//function

let trail = ["flower", 555, "dress"];     
function display(trail1:any[]) {    
   for(let i = 0;i<trail.length;i++) {     
      console.log(trail[i]);    
   }      
}    
display(trail);  

