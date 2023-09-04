function adicionarTarefa() {
    event.preventDefault();
    var tarefa = document.getElementById("nova-tarefa").value;
    var lista = document.getElementById("lista-de-tarefas");
    var item = document.createElement("li");
    item.appendChild(document.createTextNode(tarefa));
    lista.appendChild(item);
  }
  var lista = document.getElementById("lista-de-tarefas");
  var itens = lista.getElementsByTagName("li");
  
  for (var i = 0; i < itens.length; i++) {
    itens[i].addEventListener("click", function() {
      this.classList.toggle("checked");
    });
  }