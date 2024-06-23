let btnSave, todoText, todoDate, todoTime;
let editDiv = null;

function init() {
  btnSave = document.querySelector("#btnSave");
  btnSave.addEventListener("click", btnSaveHandler);
}
window.addEventListener("load", init);

let btnSaveHandler = function () {
  todoText = document.querySelector("#todoText");
  todoDate = document.querySelector("#todoDate");
  todoTime = document.querySelector("#todoTime");

  if (editDiv) {
    editDiv.textContent = `${todoText.value}  [${todoDate.value}  ${todoTime.value}] `;
    editDiv = null;
    todoText.value = null;
  } else {
    // listDiv 값 가져오기
    let listDiv = document.createElement("div");
    listDiv.classList.add("listDiv");
    document.querySelector("#container").appendChild(listDiv);
    listDiv.textContent = `${todoText.value}  [${todoDate.value}  ${todoTime.value}] `;
    todoText.value = null;

    //수정 버튼 만들기
    let btnEdit = document.createElement("button");
    document.querySelector("#container").appendChild(btnEdit);
    btnEdit.classList.add("btnEdit");
    btnEdit.innerHTML = "수정";

    //삭제 버튼 만들기
    let btnDelete = document.createElement("button");
    document.querySelector("#container").appendChild(btnDelete);
    btnDelete.classList.add("btnDelete");
    btnDelete.innerHTML = "삭제!";

    //수정 버튼 기능
    btnEdit.addEventListener("click", function () {
      todoText.value = listDiv.textContent.split("  [")[0];
      editDiv = listDiv;
    });

    //삭제 버튼 기능 함수
    btnDelete.addEventListener("click", function () {
      listDiv.remove();
      btnEdit.remove();
      btnDelete.remove();
    });
  }
};
