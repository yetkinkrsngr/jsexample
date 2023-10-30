// Yeni öğe eklemek için butonun tıklama olayını ve Enter tuşunu dinleyin
document.getElementById("addTask").addEventListener("click", addTask);

document.getElementById("task").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskInput = document.getElementById("task");
  const taskText = taskInput.value.trim();
  const list = document.getElementById("list");

  if (taskText !== "") {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${taskText} <span class="close">x</span>`;
    list.appendChild(listItem);

    taskInput.value = ""; // Giriş kutusunu temizle

    // Her x işaretine tıklamada ilgili öğeyi sil
    listItem.querySelector(".close").addEventListener("click", function () {
      listItem.remove();
    });

    showSuccessToast(); // "Listeye eklendi" mesajını göster
  } else {
    showErrorToast(); // "Listeye boş ekleme yapamazsınız" mesajını göster
  }
}

function showSuccessToast() {
  const successToast = new bootstrap.Toast(
    document.getElementById("liveToastSuccess")
  );
  successToast.show();
}

function showErrorToast() {
  const errorToast = new bootstrap.Toast(
    document.getElementById("liveToastError")
  );
  errorToast.show();
}

// Mevcut liste öğelerine x kapanış işareti ekle
const listItems = document.querySelectorAll("#list li");
listItems.forEach(function (item) {
  const closeBtn = document.createElement("span");
  closeBtn.className = "close";
  closeBtn.innerHTML = "x";
  item.appendChild(closeBtn);

  closeBtn.addEventListener("click", function () {
    item.remove();
  });
});
