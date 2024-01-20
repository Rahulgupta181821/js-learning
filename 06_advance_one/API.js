const URL= 'https://cat-fact.herokuapp.com/facts';
const factPara=document.querySelector('#fact');
const btn = document.querySelector('#btn');











// let promise = fetch(URL);
// console.log(promise);
// var i=0;
// const getFacts = async() => {
//     console.log("getting data .....");
//     let response = await fetch(URL);
//     console.log(response);//JSON format response
//     let data = await response.json();
//     // console.log(data[0].text);
//     console.log("size:",data.length);
//     // const dataSize = data.length
//     // let str=''
//     // for(let i = 0; i < dataSize; i++) {
//     //   str +=data[i].text + '<br />';
//     // }
//     factPara.innerHTML = data[i].text;
//     i++;
//     if (i == data.length){
//         i=0;
//     }
// }


// using promise chainings

// function getFacts(){
//     fetch(URL)
//  .then(response => response.json()).then(response => console.log(response));
// }

// OR
function getFacts(){
    fetch(URL)
 .then((respose) => {
    return respose.json();
 
 }).then((data) => {
    console.log(data);
    factPara.innerHTML = data[0].text;
 })
}
btn.addEventListener('click',getFacts);