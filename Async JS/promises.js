const fetch = require("node-fetch");
const { resolve } = require("path");
const IplTeams = [
    { id:1, name:"CSK",Tropies:4},
    { id:2, name:"MI",Tropies:5},
    { id:3, name:"RCB",Tropies:0}
 ];
 
 function getTeams(){
     setTimeout(()=>{
         IplTeams.forEach((team) =>{
             console.log(team)
         })
     },1000)
 }
 
 function addTeam(team){
     return new Promise((resolve,reject) => {
        setTimeout(() =>{
            IplTeams.push(team);
            const error = false
            if(error){
                reject("error");
            }else {
                resolve()
            }
            },4000);
     });
     }

//  addTeam({id:3,name:"KKR",tropies:2})
//  .then(getTeams)
//  .catch((error)=>console.log(error));
 
//                             /--- Promises ----/

//  const promise1 = Promise.resolve("Promise 1")
//  const promise2 = new Promise((resolve,reject) => setTimeout(resolve,5000,"Promise 2"))
//  const promise3 = new Promise((resolve,reject) => setTimeout(resolve,10000,"Promise 3"))

//  const promisefetch = fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json());
//  Promise.all ([promise1,promise2,promise3,promisefetch]).then((result) => console.log(result))

// Async Await

// async function init(){
//     await addTeam({id:3, name:"KKR",tropies:2});

//     getTeams();
// }

// init();

// async function getUsers(){
//    const res = await fetch("https://jsonplaceholder.typicode.com/users")
//    const data = await res.json()
//    console.log(data)
// }

// getUsers()




function login(email,password){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log(email,password)
            resolve({email,password})
        },2000)
    })
    
 }
 
 function getTeams(user){
     return new Promise((resolve,reject) => {
        setTimeout(()=>{
            IplTeams.forEach((team) =>{
                console.log(team)
                resolve(team)
            })
        },1000)
     })
     
 }
 
 function getTeamDetails(team){
     return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve("CSK is a very consistent team in the IPL and it have four tropies ")
        })
     })
    
 }

//  login("462mohammed@gmail.com", 24021996)
//  .then((user) =>getTeams(user))
//  .then((team) => getTeamDetails(team))
//  .then((teamname) => console.log(teamname))
 
async function displayteams(){
    const loggedInUser = await login("462mohammed@gmail.com", 24021996);
    const teams = await getTeams(loggedInUser);
    const teamname = await getTeamDetails(teams);
    console.log(teams);
    
}

displayteams();