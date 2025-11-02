const ident=document.querySelectorAll(".ident div");

const butlink=document.querySelector(".butlink");

// ident.forEach(iden => {
//       iden.addEventListener('click', () => {
//         ident.forEach(id => id.classList.remove('active'));
//         contents.forEach(i => i.classList.remove('active'));
//         iden.classList.add('active');
//         document.getElementById(iden.dataset.target).classList.add('active');
//       });
//     });

ident.forEach(identi => {
  identi.addEventListener('click', ()=>{
    ident.forEach(id=>id.classList.remove('active'));
    identi.classList.add('active');
    document.getElementById(identi.dataset.target).classList.add('active');
  })
})

ident[0].addEventListener('click', ()=>{
  butlink.innerHTML=`<a href="admin\\admin.html">Verify & Sign up</a>`;
});
ident[1].addEventListener('click', ()=>{
  butlink.innerHTML=`<a href="citizen\\home.html">Verify & Sign up</a>`;
});
ident[2].addEventListener('click', ()=>{
  butlink.innerHTML=`<a href="admin\\admin.html">Verify & Sign up</a>`;
});
