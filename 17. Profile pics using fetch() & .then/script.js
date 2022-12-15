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
