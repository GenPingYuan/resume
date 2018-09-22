// const colorArr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
export default ()=>{
    let color = "#";
    for(let i = 0; i < 6; i ++){
        color += (Math.random()*16 | 0).toString(16); 
    }
    return color;
}