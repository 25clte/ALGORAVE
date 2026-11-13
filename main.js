// Startar PixiJs och skapar en canvas som täcker hela fönstret
//Ändrade bakgrundsfärgen för att matcha rymdtemat
const app = new PIXI.Application();
await app.init({ resizeTo: window, background: "#050510" });
document.body.appendChild(app.canvas);

//Skapar prickarna som visas på skärmen
const dots = new PIXI.Graphics();
app.stage.addChild(dots);

// sparaar musens position med hjälp av X och Y
const mouse = { x: 0, y: 0 };

// uppdaterar musens position varje gång den rör sig
window.addEventListener("pointermove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// guppdaterar animationen varje bildruta
app.ticker.add(() => {

  //tar bort de gamla prickarna innan nya ritas
  dots.clear();

  //skapar ett rutnät av prickar över hela skärmen
  //avståndet mellan prickarna är 30px
  for (let x = 0; x < app.screen.width; x += 30) {
    for (let y = 0; y < app.screen.height; y += 30) {
     
     //Räknar ut avståndet mellan musen och varje prick
      const distance = Math.hypot(x - mouse.x, y - mouse.y);
      //prickarna blir större baserat på musen men blir aldrig mindre än 1
      dots.circle(x, y, Math.max(1, 8 - distance / 30));
    }
  }
  //Färgen på prickarna
  dots.fill("#750358");
});
