const divTodos = document.getElementById("todos");
const frmTodos = document.getElementById("frmTodos");
const txtTitle = document.getElementById("title");

let todos = [{ title: "", done: false }];

//* Asagidaki fonksiyon ile yeni bir div olusturup, yapcaklar listesini ekleyecegiz.
//* divTodos.append(div): Olusturulan yeni divi divTodos icine ekliyoruz
//* divTodos.innerHTML="": Fonksiyon tekrar tekrar calsiacagi icin divTodos'un ici temizlendi.
//* let input = document.createElement("input"): Yeni bir input ogesi olsuturuldu
//* input.setAttribute("type", "checkbox"): Yeni bir attribute olusturuldu. (type attribute olsuturudldu ve ozelligine checkbox verildi)
//* input.checked = todo.done: (input isaretli mi degil mi durumu todos dizisi icindeki ilgili todo objesinin done ozelliginden alinip ture or false kontrolu yapildi)
//* Yeni bir span ogesi olusturuldu. Ardindan (span.textContent = todo.title) ile span ogesi icine yapilacak olan aktivite eklendi.
//* todos.sort((a, b) => a.done - b.done): Eger todo yapilmamissa yani checkbox tikli degilse yukarida olacak ve Son eklenen ogeleri yukarida birakmaya yarar.

function listTodos() {
  todos.sort((a, b) => a.done - b.done);
  //* Save Data
  saveData();

  divTodos.innerHTML = "";

  for (const todo of todos) {
    let div = document.createElement("div");
    // input olsuturma
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.checked = todo.done;
    input.onchange = (e) => toggleTodo(todo);
    div.append(input);
    // span olsuturma
    let span = document.createElement("span");
    span.textContent = todo.title;
    div.append(span);
    // Silme Butonu
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.onclick = (e) => {
      deleteTodo(todo);
    };
    button.innerHTML = "&times";
    div.append(button);
    //divi ekleme
    divTodos.append(div);
  }
}

//* Local Storeage kaydetme
//* Local storage'e kayit yapmak icin stringe Donsuturmek lazim. JSON.stringify tam oalrak bunu yapiyor
function saveData() {
  localStorage["data"] = JSON.stringify(todos);
}

//* Burada 2 ihtimal var. Eger data bulunmadyisa yada string yapamadiysa hata verecektir.
//* LocalStorage icinde data diye birsey yoksa cik.
//*
function loadData() {
  let json = localStorage["data"];
  if (!json) return;
  try {
    todos = JSON.parse(json);
  } catch (error) {}
}

//* Eger Gorev yapilmis ise alta alacak.
function toggleTodo(todo) {
  todo.done = !todo.done;
  listTodos();
}

//* Asagidaki fonksiyon ile silme islemi yapiliyor.
function deleteTodo(todo) {
  console.log(todo);
  let i = todos.indexOf(todo);
  todos.splice(i, 1);
  listTodos();
}

//* Form gonderme durumuna gecmemesi icin preventDefaultu kullandik
//* Yeni bir Aktivite olusturulup todos dizisi icine atiliyor.
frmTodos.onsubmit = function (event) {
  event.preventDefault();
  todos.push({
    title: txtTitle.value.trim(),
    done: false,
  });
  listTodos();
  txtTitle.value = "";
};

//* Load Data
loadData();
listTodos();
