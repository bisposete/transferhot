$("#navbar a, .btn").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
  
      const hash = this.hash;
  
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        800
      );
    }
  });
  
  // Sticky menu background
  window.addEventListener("scroll", function() {
    if (window.scrollY > 150) {
      document.querySelector("#navbar").style.opacity = 0.9;
    } else {
      document.querySelector("#navbar").style.opacity = 1;
    }
  });
  
  
  
  function iniciaModal(modalID) {
    if (localStorage.fechaModal !== modalID) {
      const modal = document.getElementById(modalID);
      if (modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
          if (e.target.id == 'fechar') {
            modal.classList.remove('mostrar')
          }
        })
  
      }
    };
  }
  
  const botao = document.querySelector('.loginStart');
  botao.addEventListener('click', function() {
    iniciaModal('login')
  })
  console.log(botao);
  

  let pais = document.getElementById("pais");

const value_ligas = { 
    'Selecione Um Pais' : ['Selecione Uma Liga'],

    'inglaterra' : ['Premier League', 'EFL Championship' ],
   
    'Espanha' : ['La Liga Santander','La Liga Smartbankl'],
    
    'Brasil' : ['Brasileirao Serie A', 'Brasileirao Serie B', 'Brasileirao Serie C', 'Brasileirao Serie D'],

    'Portugal' : ['Liga Portugal 1 Bwin', 'Liga Portugal 2 Bwin'],

    'Alemanha' : ['Bundesliga', 'Bundesliga 2'],

    'Italia' : ['Serie A TIM', 'Serie B BKT']

 };

pais.onchange = function(){
    let pais = this.value;
    let selLigas = document.getElementById( 'ligas' );
    
    
    selLigas.innerHTML = "";
    
    
    selLigas.style.display="inline-flex";
    
    
    let ligas = value_ligas[ pais ];
    
    ligas.forEach( function( ligas ){
        
        let opt = document.createElement("option");
        let tbl = document.createElement("table")
        
        
        opt.innerHTML = ligas;
        
        
        selLigas.appendChild(opt);
        selLigas.appendChild(tbl);

        
        
    });
}