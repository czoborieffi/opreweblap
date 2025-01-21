function ertekel(){

    var egyedisegMerteke = Number(document.getElementById("egyediseg").value) * 2;
    var szolgaltatasID = String(document.getElementById("tipus"));
    var szolgId = String(document.getElementById("tipus").value);
    console.log(egyedisegMerteke);

    var ar = 20000;
    var tol = ar * szolgId * egyedisegMerteke;
    var ig = tol * 1.5;

    console.log(tol);
    console.log(ig);
    var figyelem = "<p class='fontos'>A kalkuláció fontos részét képezi a végső ár meghatározásának, ugyanakkor nem garantálja a tényleges költségeket. A számos szempont, amit figyelembe veszünk a kalkuláció során, befolyásolhatja az eredményt, így a végső ár eltérhet a kalkulációtól.</p>";
    var szoveg = "A kalkulált összeg körülbelül: <br>" + tol + " - " + ig +"Ft <br><br> " + figyelem;

    document.getElementById("eredmeny").innerHTML=szoveg;
}