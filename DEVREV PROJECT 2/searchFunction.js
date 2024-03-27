const table = document.querySelector("table");
const totalRowCount = table.rows.length;
//console.log(table)
const tbodyRowCount = table.tBodies[0].rows.length;
console.log(tbodyRowCount)

console.log(totalRowCount, tbodyRowCount)
let a = document.querySelector(".countText");
a.innerText = tbodyRowCount;
console.log(a);
let count = 0;
document.addEventListener("DOMContentLoaded", () => {
    
    document.querySelectorAll(".search-input").forEach((inputField) => {
      const tableRows = inputField
        .closest("table")
        .querySelectorAll("tbody > tr");
      console.log("tablerows")
      console.log(tableRows)
      const headerCell = inputField.closest("th");
      console.log("headercell")
      console.log(headerCell)
      const otherHeaderCells = headerCell.closest("tr").children;
      console.log("otherHeaderCells")
      console.log(otherHeaderCells)
      const columnIndex = Array.from(otherHeaderCells).indexOf(headerCell);
      console.log("columnindex")
      console.log(columnIndex)
      const searchableCells = Array.from(tableRows).map(
        (row) => row.querySelectorAll("td")[columnIndex]
                
      );
      console.log("searchableCells")
      console.log(searchableCells)
      
      inputField.addEventListener("input", () => {
        const searchQuery = inputField.value.toLowerCase();
        count = 0;
        for (const tableCell of searchableCells) {
          console.log(tableCell)
          const row = tableCell.closest("tr");
          console.log("row")
          console.log(row)
          const value = tableCell.textContent.toLowerCase().replace(",", "");
  
          row.style.visibility = null;
  
          if (value.search(searchQuery) === -1) {
            row.style.visibility = "collapse";
          }
          else{
            count = count+1;
            
          }
          
        }
       
        console.log(count);
        
        if(count < 10){
          count = "0"+count;
        }
        a.innerText = count;
      });
    });
  });
  