const name="Rahul"
console.log(name)//Rahul
console.log(name[0])
const repoCount=50
console.log(name+repoCount + " value")
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
const gameName= new String('htieshhc')
console.log(gameName)//[String: 'htieshhc']
console.log(gameName[0])
console.log(gameName.length)//8
console.log(gameName.toUpperCase())//HTIESHHC
console.log(gameName.charAt(4))//s
const newString = gameName.substring(0,4)
console.log(newString)//htie
const anotherString=gameName.slice(-8,4)
console.log(anotherString)// htie
// slice when gives -ve value the it is started from the last
const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
//https://hitesh.com/hitesh-choudhary
console.log(url.includes('hitesh'))//true
