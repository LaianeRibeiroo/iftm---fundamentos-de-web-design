function mouseEnter1() {
    document.getElementById("foto1").src = "imagens/batman10g.png";
  }

  function mouseLeave1() {
    document.getElementById("foto1").src = "imagens/batman10.png";
  }//aqui tem que ter a imagem pro qual ela vai retornar!

  function mouseEnter2() {
    document.getElementById("foto2").src="imagens/wonderwoman8g.png";
  }

  function mouseLeave2() {
    document.getElementById("foto2").src = "imagens/wonderwoman8.png";
  }

  function mouseEnter3() {
    document.getElementById("foto3").src="imagens/superman2g.png" ;
  }

  function mouseLeave3() {
    document.getElementById("foto3").src = "imagens/superman2.png";
  }
//o nome de cada função TEM QUE SER DIFERENTE!
//como vc estava usando tudo com mesmo nome, só o super
//estava funcionando pois era a última função!

//com essas alterações que eu fiz, agora é so estilizar o css!