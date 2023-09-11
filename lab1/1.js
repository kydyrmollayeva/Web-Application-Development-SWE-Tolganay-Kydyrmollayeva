const createHelloWorld = () => () => "Hello World";
const f1 = createHelloWorld();
console.log(f1()); 
