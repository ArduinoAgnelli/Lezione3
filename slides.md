---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Lezione 3
  Pulsante, bottone e potenziometro

# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS
css: unocss
---

# Lezione 3

Il potenziometro

---

# Digitale vs Analogico

<p>&nbsp;</p>
<p>Un segnale digitale, come abbiamo visto l'altra volta può avere solo due valori 0(spento) e 1 (acceso)
</p>
<p>Un segnale analogico, invece, può assumere valori tra 0(spento) e 255(acceso)</p>

<div flex justify-center items-center gap-2>
  <div>
    <img src="/img/digitale.gif"/>
  </div>
  <div>
      <img src="/img/analogico.gif"/>
</div>
</div>

<p>Quindi un valore come 100, cosa vorrebbe dire?</p>

---

# Il potenziometro

<p></p>
Il potenziometro è un componente analogico perchè può restituire molti valori(0 a 1024) in base a quanto lo giriamo.

<center>
  <img src="/img/pot.jpg"/>
</center>

---

# A cosa serve?

<p></p>

Se noi vogliamo ridurre l'intensità della luce di un LED, se vogliamo regolare la velocità dalla luce oppure se vogliamo regolare la velocità di un effetto di luce usiamo il potenziometro.

<center>
  <img src="/img/pot_schema.jpg"/>
</center>

---

# Come si collega?

<p></p>

Il potenziometro ha 3 pin: Positivo, Negativo e il pin di uscita(restituisce il valore dei giri del potenziometro)

<div flex justify-center items-center gap-2>
  <div>
    <img src="/img/pot_schema_collegamento.webp"/>
  </div>
  <div>
  <img src="/img/pot_schema.jpg"/>
</div>
</div>

---

# Come si programma?

<p></p>

```c
#define LEDROSSO 3
#define POTENZIOMETRO A0
 
void setup() {
  pinMode(LEDROSSO, OUTPUT);
  pinMode(POTENZIOMETRO, INPUT);
}
 
void loop() {
  int value = analogRead(POTENZIOMETRO)/4; // Il potenziometro restituisce 1024 ma l'arduino legge solo fino a 255 quindi dobbiamo dividere per 4
  analogWrite(LEDROSSO,value);
}
```

int value indica un numero intero, in questo caso il valore di un potenziometro

Il potenziometro restituisce un valore troppo grande per essere usato dal LED quindi dobbiamo divederlo per 4

---

# Monitoriamo il cambiamento del LED

<p></p>

L'arduino può anche comunicare con il PC i valori del potenziometro, usando la porta seriale.

Per usarla dobbiamo inizializzare la porta nel setup e nel loop dire all'arduino cosa mandare al PC.

```c
#define LEDROSSO 3
#define POTENZIOMETRO A0
 
void setup() {
  pinMode(LEDROSSO, OUTPUT);
  pinMode(POTENZIOMETRO, INPUT);
  Serial.begin(9600); // Inizializzo la porta
}
 
void loop() {
  int value = analogRead(POTENZIOMETRO)/4; // Il potenziometro restituisce 1024 ma l'arduino legge solo fino a 255 quindi dobbiamo dividere per 4
  analogWrite(LEDROSSO,value);
  Serial.println(value);  // Manda al computer il valore del potenziometro
}
```

---

# Guardiamo i dati che arrivano al PC.

<p></p>

Apriamo l'arduino IDE e andiamo su strumenti poi monitor seriale e vedremo tutti i cambiamenti del potenziometro.

<h1 style="text-align:center;">Happy coding!</h1>