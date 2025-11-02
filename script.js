const ident=document.querySelectorAll(".ident div");



ident.forEach(iden => {
      iden.addEventListener('click', () => {
        ident.forEach(id => id.classList.remove('active'));
        contents.forEach(i => i.classList.remove('active'));
        iden.classList.add('active');
        document.getElementById(iden.dataset.target).classList.add('active');
      });
    });