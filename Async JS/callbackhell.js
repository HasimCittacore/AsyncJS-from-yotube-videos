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

function addTeam(team,callback){
    setTimeout(() =>{
        IplTeams.push(team);
        callback();
    },4000)
}


// addTeam({id:4,name:"KKR" ,tropies:2},getTeams);


/////////////

function login(email,password,callback){
   setTimeout(() =>{
       console.log("login")
       callback({email,password})
   },2000)
}

function getTeams(user,callback){
    setTimeout(()=>{
        IplTeams.forEach((team) =>{
            callback(team)
        })
    },2000)
}

function getTeamDetails(team ,callback){
    setTimeout(() =>{
        callback("CSK is a very consistent team in the IPL and it have four tropies ")
    })
}

login("462mohammed@gmail.com", 24021996,(user) =>{
    console.log(user);
    getTeams(user,(team) =>{
        console.log(team)
        getTeamDetails(team,(teamname)=>{
            console.log(teamname)
        })
    })
})