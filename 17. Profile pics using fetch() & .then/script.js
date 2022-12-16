function createUser({name,avatar,id}){
  const container=document.createElement('div');
  container.setAttribute('class','profile');
  container.innerHTML=`<img src='${avatar}'/>
  <div class='content'>
    <h4>${name}</4>
    <p>Office Id:${id}</p>
  </div>`
  document.body.append(container);
}

fetch('https://62ec04c755d2bd170e7b4d17.mockapi.io/users')
.then(data=>data.json())
.then((persons)=>{
  persons.forEach((ppl)=>{
    const details={
      name:ppl.name,
      avatar:ppl.avatar,
      id:ppl.id
    };
    createUser(details)
  })
  
})





-------------------------------------------------------
  
  
  
  
function createUser(person){
  const card=document.createElement('div');
  card.setAttribute('class','card');
  card.innerHTML=`<img src='${person.avatar}'/><h1>${person.name}</h1>`;
  document.body.append(card);
}

function getUser(){
  fetch('https://62ec04c755d2bd170e7b4d17.mockapi.io/users')
  .then((data)=>data.json())
  .then((result)=>{
  result.forEach((person)=>createUser(person))
})
  
}
getUser()



