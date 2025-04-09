// Parte degli upvote e downvote


const pulsantiUpvote = document.querySelectorAll('.upvote');
const pulsantiDownvote = document.querySelectorAll('.downvote');

for(const pulsanteUpvote of pulsantiUpvote)
{
  pulsanteUpvote.addEventListener('click',Upvote);
}

for(const pulsanteDownvote of pulsantiDownvote)
{
  pulsanteDownvote.addEventListener('click',Downvote);
}


function Upvote(event)
{
  const pulsante = event.currentTarget;
  const votiContainer = pulsante.parentNode // siamo su post-voto
  const contatore = votiContainer.querySelector('.contatore-voto');
  const pulsanteDownvote = votiContainer.querySelector('.downvote');
  const VotiCorrenti = parseInt(contatore.textContent);


  if(pulsante.classList.contains('votato'))
  {
    pulsante.classList.remove('votato');
    contatore.textContent = VotiCorrenti - 1;
  }
  else
  {
    if(pulsanteDownvote.classList.contains('votato'))
    {
      pulsanteDownvote.classList.remove('votato');
      contatore.textContent = VotiCorrenti + 2;
    }
    else
    {
      contatore.textContent = VotiCorrenti + 1;
    }
    pulsante.classList.add('votato');
  }
}



function Downvote(event)
{
  const pulsante = event.currentTarget;
  const votiContainer = pulsante.parentNode // siamo su post-voto
  const contatore = votiContainer.querySelector('.contatore-voto');
  const pulsanteUpvote = votiContainer.querySelector('.upvote');
  const VotiCorrenti = parseInt(contatore.textContent);


  if(pulsante.classList.contains('votato'))
  {
    pulsante.classList.remove('votato');
    contatore.textContent = VotiCorrenti + 1;
  }
  else
  {
    if(pulsanteUpvote.classList.contains('votato'))
    {
      pulsanteUpvote.classList.remove('votato');
      contatore.textContent = VotiCorrenti - 2;
    }
    else
    {
      contatore.textContent = VotiCorrenti - 1;
    }
    pulsante.classList.add('votato');
  }
}


// Parte per nascondere i commenti


const pulsantiNascondi = document.querySelectorAll('.toggle-commenti');
for (const pulsante of pulsantiNascondi) {
  pulsante.addEventListener("click", nascondiCommenti);
}

function nascondiCommenti(event) {
  const pulsante = event.currentTarget;
  const toggleContainer = pulsante.parentNode;
  const post = toggleContainer.parentNode;
  const commentiContainer = post.querySelector('.sezione-commenti');
  
  if (commentiContainer.classList.contains('nascosto')) 
  {
    commentiContainer.classList.remove('nascosto');
    pulsante.textContent = 'Nascondi commenti';
    pulsante.classList.remove('collapsed');
  } 
  else 
  {
    commentiContainer.classList.add('nascosto');
    pulsante.textContent = 'Mostra commenti';
    pulsante.classList.add('collapsed');
  }
}


// Parte per il tema chiaro/scuro


const tema = document.querySelector("#tema-toggle");

tema.addEventListener('click', cambioTema);

function cambioTema() {
  
  if (document.body.classList.contains('tema-chiaro')) 
  {
    document.body.classList.remove('tema-chiaro');
    tema.querySelector('.icona-tema').textContent = '☀️';
  } 
  else 
  {
    document.body.classList.add('tema-chiaro');
    tema.querySelector('.icona-tema').textContent = '🌙';
  }
}



// Cambio immagine in modo dinamico


const immagineCommento = document.querySelectorAll('.immagine-commento-cambiata');

for (const immagine of immagineCommento) {
  immagine.addEventListener('click', cambioImmagine);
  immagine.dataset.originale = immagine.src;
}

function cambioImmagine(event) {
  const immagine = event.currentTarget;

  
  if (immagine.classList.contains('alterata')) 
  {
    immagine.src = immagine.dataset.originale;
    immagine.classList.remove('alterata');
    immagine.alt = "Scheda grafica NVIDIA 4080";
  } 
  else 
  {
    immagine.src = "https://d1q3zw97enxzq2.cloudfront.net/images/7900gre.width-1000.format-webp.webp";
    immagine.classList.add('alterata');
    immagine.alt = "Scheda grafica AMD RX 7900XTX";
  }
}



// Parte invia commento

const pulsanteInviaCommento = document.querySelectorAll('.pulsante_invia-commento');

for (const pulsante of pulsanteInviaCommento)
{
  pulsante.addEventListener('click', inviaCommento);
}

function inviaCommento(event)
{
  const pulsante = event.currentTarget;
  const sezioneVoti = pulsante.parentNode; // siamo su commento-sezione_voti
  const aggiungiCommento = sezioneVoti.parentNode; // siamo su aggiungi-commento
  const postFooter = aggiungiCommento.parentNode; // siamo su post-footer
  const sezioneCommenti = postFooter.parentNode; // siamo su sezione-commenti

  const testoCommento = aggiungiCommento.querySelector('.inserisci-commento');
  const textArea = testoCommento.value;

  if(textArea === '')
  {
    alert('Non puoi inviare un commento vuoto!');
    return;
  }

  const nuovoCommento = document.createElement('div');
  nuovoCommento.classList.add('commento');
  nuovoCommento.innerHTML = `
    <div class="commento-contenuto">
              <div class="header-commenti">
                <div class="avatar-commento">
                  <img src="reddit-logo.png" alt="Avatar utente">
                </div>
                <div class="commenti-info">
                  <h3 class="autore-commento">Tu</h3>
                  <p class="testo-commento">${textArea}</p>
                </div>
              </div>
            </div>
  `;
  sezioneCommenti.appendChild(nuovoCommento);
  sezioneCommenti.appendChild(postFooter);

  testoCommento.value = '';
}



// Immagine modale

const immaginiPost = document.querySelectorAll('.immagine-post');
const modale = document.querySelector('#immagine-modale');
const immagineModale = document.querySelector('#img-modale');
const didascaliaModale = document.querySelector('.didascalia-modale');
const chiudiBtn = document.querySelector('.chiudi-modale');

for (const immagine of immaginiPost) {
  immagine.addEventListener('click', apriModale);
}

chiudiBtn.addEventListener('click', chiudiModale);


modale.addEventListener('click', chiudiModaleClick);
document.addEventListener('keydown', chiudiModaleEsc);

function chiudiModaleClick(event) {
  if (event.target === modale) {
    chiudiModale();
  }
}

function chiudiModaleEsc(event) {
  if (event.key === 'Escape') {
    chiudiModale();
  }
}

function apriModale(event) {
  const immagine = event.currentTarget;
  
  modale.classList.remove('nascosto');
  
  immagineModale.src = immagine.src;
  
  const post = immagine.parentNode.parentNode; // cosi andiamo in corpo-post e poi post
  const titoloPost = post.querySelector('.titolo-post');
  didascaliaModale.textContent = titoloPost ? titoloPost.textContent : immagine.alt;
  
  document.body.classList.add('no-scroll');
}

function chiudiModale() {
  modale.classList.add('nascosto');
  document.body.classList.remove('no-scroll');
}