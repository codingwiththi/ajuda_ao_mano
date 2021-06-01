var form = {
  get element() {
    return document.getElementById("formCadastro");
  },
  submit: function (event) {
    event.preventDefault();

    var formData = new FormData(form.element);
    var data = {};
    formData.forEach(function (value, key) {
      data[key] = value;
    });
    console.log(data);

    table.add(data);
  },
};
form.element.addEventListener("submit", form.submit);

var table = {
  get element() {
    return document.getElementById("cadastros");
  },
  add: function (data) {
    var row = table.element.insertRow();

    var cell = row.insertCell();

    var options = document.createElement("input");
    options.type = "button";
    options.classList.add("options");
    options.value = "X";
    options.title = "Remover";
    options.onclick = table.remove;
    cell.appendChild(options);

    for (var property in data) {
      var cell = row.insertCell();
      cell.innerHTML = data[property];
    }
  },
  update: function (event) {
    var row = table.element.insertRow();
  },
  remove: function (event) {
    var row = event.target.closest("tr");
    table.element.deleteRow(row.rowIndex);
  },
};

window.onload = function () {
  document.getElementsByName("nome")[0].value = "João";
  document.getElementsByName("email")[0].value = "joao@mail.com";
};

var tables = document.getElementById("cadastros");
var cells = tables.getElementsByTagName("tr");

for (var i = 0; i < cells.length; i++) {
  cells[i].onclick = function () {
    console.log("clicked");
    var input = document.createElement("input");
    input.setAttribute("type", "text");

    input.value = this.innerHTML;
    input.style.width = this.offsetWidth - this.clientLeft * 2 + "px";
    input.style.height = this.offsetHeight - this.clientTop * 2 + "px";
    input.style.border = "0px";

    this.innerHTML = "";
    this.append(input);
    this.firstElementChild.select();
  };
}
