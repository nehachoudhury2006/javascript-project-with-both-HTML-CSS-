// function onclickFunc() {
//     console.log("here it is clickable");
// }

 function KeypressEvent() {
    console.log("The key was pressed");
 }
// Event Listerns
// const box1 = document.getElementById('box-1');

//   box1.addEventListener('click', () => {
//     console.log("it can");
//   });
//   const cont = document.getElementById('cont');

//   box1.addEventListener('click', () => {
//     console.log("it hrer");
//   });

    

const box1 = document.getElementById('box-1');
    box1.addEventListener('click', () => {
      box1.style.backgroundColor = "red";
    });

    const box2 = document.getElementById('box-2');
    box2.addEventListener('click', () => {
      box2.style.backgroundColor = "blue";
    });

    const box3 = document.getElementById('box-3'); 
    box3.addEventListener('click', () => {
      box3.style.backgroundColor = "green";
    });

    const box4 = document.getElementById('box-4');
    box4.addEventListener('click', () => {
        box4.style.backgroundColor = "yellow";
    }); 
document.getElementById("mybutton").addEventListener("click", function() {
    var inputText = document.getElementById("myinput").value;
    document.getElementById("myheading").innerText = inputText;
});
