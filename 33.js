//pop_up_make_visible
let add_new_div = document.getElementById("Add_new");
let pop_id = document.getElementById("popadd");
let cancelbtn = document.getElementById("cancel");
let addbtn = document.getElementById("addtask");
let closepop = document.getElementById("close");
let tasks = document.getElementById("tasks");

add_new_div.onclick = divclick = () => {
  if (pop_id.classList.contains("pop_up_make_visible")) {
    pop_id.classList.toggle("pop_up_make_visible");
  } else {
    pop_id.classList.toggle("pop_up_make_visible");
    console.log("Scroll Y", window.scrollY);
    console.log("screen width: ", window.innerWidth);
    console.log("screen height: ", window.innerHeight);

    if (window.innerWidth <= 820) {
      pop_id.style.width = window.innerWidth * 0.7 + "px";
      pop_id.style.height = window.innerHeight * 0.7 + "px";
    } else if (window.innerWidth < 620) {
      pop_id.style.width = window.innerWidth * 0.95 + "px";
      pop_id.style.height = window.innerHeight * 0.95 + "px";
    } else {
      pop_id.style.width = window.innerWidth * 0.5 + "px";
      pop_id.style.height = window.innerHeight * 0.8 + "px";
    }
    console.log("pop width ", pop_id.width);
    pop_id.style.top = window.scrollY + 50 + "px";

    let partmrright = pop_id.getBoundingClientRect().right / 2;
    //let prmrright = (partmrright / window.innerWidth) * 100;
    //let partmrleft = pop_id.getBoundingClientRect().left;
    console.log("pop right dis ", partmrright);

    console.log("pop percent dis ", prmrright);
    //pop_id.style.marginLeft = prmrright - 6 + "%";
    pop_id.style.marginLeft = partmrright - 80 + "px";

    pop_id.getBoundingClientRect().right = 0 + "px";
    pop_id.getBoundingClientRect().left = 0 + "px";
  }
};

const fun1 = () => {
  pop_id.classList.toggle("pop_up_make_visible");
};
closepop.onclick = fun1;
cancelbtn.onclick = () => {
  pop_id.classList.toggle("pop_up_make_visible");
};
var taskarr = [];
var a = 0;
addbtn.onclick = () => {
  let taskinput = document.getElementById("taskinput").value;
  let trgtimeinput = document.getElementById("trgtime").value;
  sessionStorage.setItem(a, taskinput);
  //localStorage.clear();
  //sessionStorage.clear();
  localStorage.setItem(taskinput, trgtimeinput);
  a++;
  document.getElementById("taskinput").value = "";
  document.getElementById("trgtime").value = "";
  loading_tasks();
  fun1();
  //this is changing commment
};

const loading_tasks = () => {
  let i = 1;
  let html = "";
  for (let a = 0; a < localStorage.length; a++) {
    html += `<div class="card">
        <h4 id="task_no">Task no: ${i}</h4>
        <img id="task_img" src="img-2.jpeg" alt="" />
        <div class="detail">
          <p id="task_title" class="pdetail">${sessionStorage.getItem(a)}</p>
        </div>
        <div class="detail1">
          <h4 class="head4">Target_Time:</h4>

          <p class="pdetail">${localStorage.getItem(
            sessionStorage.getItem(a)
          )}</p>
        </div>
        <div class="detail1">
          <h4 class="head4">Time Left:</h4>
          <p class="pdetail">18:10:15</p>
        </div>
      </div>`;
    i++;
  }
  tasks.innerHTML = html;
};
loading_tasks();
