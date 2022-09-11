let add = document.querySelector('#add');

add.onclick = (e) => {
  let task = document.querySelector('#task').value
  let nTask = document.createElement('div')


  if(task!=''){
    let list = document.querySelector('#divList');
    let txt = document.createTextNode(task)
    nTask.classList.toggle('col-sm-4');

    let card = document.createElement('div')
    card.classList.toggle('card');
    let cardBody = document.createElement('div')
    cardBody.classList.toggle('card-body')
    let cardP = document.createElement('p')
    cardP.classList.toggle('card-text')
    cardP.appendChild(txt)

    let divOpt = document.createElement('div');
    divOpt.classList.toggle('dots')
    let a = document.createElement('a');
    a.classList.toggle('nav-link')
    a.classList.toggle('fa')
    a.classList.toggle('fa-ellipsis-v')
    a.setAttribute('role','button');
    a.setAttribute('data-bs-toggle','dropdown');

    let ul = document.createElement('ul');
    ul.classList.toggle('dropdown-menu')
    ul.classList.toggle('dropdown-menu-dark')

    let liEdit = document.createElement('li');
    let aEdit = document.createElement('a');
    aEdit.classList.toggle('dropdown-item');
    let txtEdit = document.createTextNode('check')
    aEdit.appendChild(txtEdit)
    liEdit.appendChild(aEdit)

    let liDelete = document.createElement('li');
    let aDelete = document.createElement('a');
    aDelete.classList.toggle('dropdown-item');
    let txtDelete = document.createTextNode('Delete')
    aDelete.appendChild(txtDelete)
    liDelete.appendChild(aDelete)

    liDelete.onclick = () => {
      nTask.style.display = "none";
    }
    ul.appendChild(liEdit)
    ul.appendChild(liDelete)

    divOpt.appendChild(a)
    divOpt.appendChild(ul)

    cardBody.appendChild(divOpt)
    cardBody.appendChild(cardP)


    card.appendChild(cardBody)
    nTask.appendChild(card)


    liEdit.onclick=()=>{
      nTask.classList.toggle('checked');
    }

    nTask.addEventListener("mouseover",(e)=>{
      divOpt.style.visibility='visible'
    })
    nTask.onmouseout = ()=>{
      divOpt.style.visibility='hidden'
    }
    list.appendChild(nTask)
  }
  document.querySelector('#task').value=''

};

let card = document.querySelectorAll(".card");
card.forEach((elm) => {
  let che = elm.querySelector('.che')
  let del = elm.querySelector('.del')

  elm.addEventListener("mouseover",(e)=>{
      let dots = elm.querySelector('.dots')
      dots.style.visibility='visible'
    })

  elm.onmouseout = () => {
    let dots = elm.querySelector('.dots')
    dots.style.visibility='hidden'
  }
  if(che){
    che.onclick = () => {
      elm.classList.toggle('checked')
    }
  }
  if(del){
    del.onclick = () => {
      elm.parentNode.style.display = "none";
    }
  }

})

//------------//----------//


