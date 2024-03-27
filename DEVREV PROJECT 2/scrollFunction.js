let TableHeight = document.querySelector(".table__body");
  console.log(TableHeight.offsetHeight);//visible area
  console.log(TableHeight.scrollTop);  //how much scrolled
  TableHeight.onscroll = function() {
 console.log(TableHeight.scrollTop);  
    let r = 0;
    if(r == 0){
      if ((TableHeight.scrollTop+ TableHeight.offsetHeight) >= TableHeight.offsetHeight) {
        let hiddenRows = document.querySelectorAll(".hiddenR");
        r = 1;
        for (let i = 0; i < hiddenRows.length; i++) {
           hiddenRows[i].style.display = 'table-row';
        }
      }
    }
    };
