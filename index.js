console.log('here');

const parentMatrix = document.getElementById('input_matrix');
const setDataBtn = document.getElementById('setDataBtn');
let totalTimesDataChanged = 0;


setDataBtn.addEventListener('click',function(){
    let newParentMatrix = document.getElementById('input_matrix');
    let dataRowsNew = [];

    totalTimesDataChanged+=1;
    console.log('times set data button clicked :',totalTimesDataChanged);
    console.log('fetching data from matrix...');
    
    // for each row in inputMatrix
    // get data from cells 1->last child




    console.log('data set');
    // console.log(newParentMatrix);
    for(let i=1;i<newParentMatrix.childElementCount;i++){
        // skipped row 1 -- not fetching headers

        let dataCellsList = [];

        console.log(`--extracting data from row #${i}--`);
        // console.log(newParentMatrix.childNodes[i]);
        let currRowDiv = newParentMatrix.childNodes[i];
        // skipped cells 0 and 1 for each row
        for(let j=2;j<currRowDiv.childElementCount;j++){
            let currCellData = currRowDiv.childNodes[j].textContent;
            console.log(`\t--> data in cell${j} : ${currCellData}`);
            dataCellsList.push(parseFloat(currCellData));
            // appending data into cellsList 
            // only data from cells --- nothing from fixed columns


        }
        dataRowsNew.push(dataCellsList);
        console.log('--------------------------------');

    };
    console.log('new data list : \n\n\n',dataRowsNew);
    let timestampText = `last data set at ${new Date()}`;
    // let timestampPara = document.createElement('p');
    // timestampPara.textContent = timestampText;
    document.getElementById('timestampDiv').textContent = timestampText;

})


let dummyContent = [
    ["patients/hour", "Visits/day", "PCA", "MA", "Scribe", "Provider", "CallCenter_L1", "CallCenter_L2", "VirtualScribe", "VirtualScheduler", "VirtualDocument"],
    ["0-2", "0-24", 1, 1, 1, 1, 0.33, 0.25, 1, 1, 1],
    ["2-3", "25-36", 1, 1, 1, 1, 0.5, 0.38, 1, 1, 1],
    ["3-4", "36-48", 1, 1.5, 1, 1, 0.67, 0.5, 1.5, 1.5, 1],
    ["4-5", "49-60", 1.5, 2, 1, 1, 0.83, 0.63, 2, 2, 1],
    ["5-6", "61-72", 2, 2, 1, 1, 1, 0.75, 2, 2, 1],
    ["6-7", "73-84", 2, 2, 1.5, 1.5, 1.17, 0.88, 2, 2, 1],
    ["7-8", "85-96", 2, 2, 2, 2, 1.33, 1, 2, 2, 1],
    ["8-9", "97-104", 2, 2, 2, 2, 1.5, 1.13, 2, 2, 1],
    ["9-10", "105-120", 2, 2.5, 2, 2, 1.67, 1.25, 2, 3, 1],
    ["10-11", "121-132", 2, 2.5, 2, 2, 1.83, 1.38, 2, 3, 1],
    ["11-12", "133-144", 2, 3, 2, 2, 2, 1.5, 2, 3, 1],

];

console.log('adding cells to page for matrix input');
for (let i = 0; i < 11; i++) {
    console.log(`running for row #${i}`);
    let currDataRow = dummyContent[i];
    console.log('appending to page :',currDataRow);
    
    let rowDiv = document.createElement('div');
    // rowDiv.textContent = currDataRow.toString();
    // rowDiv.textContent = currDataRow.join(' | ');

    for(let j=0;j<currDataRow.length;j++){
        let cellData = currDataRow[j];
        console.log(`\t--> adding cell ${j} to row with data : ${cellData}`);
        let cellDiv = document.createElement('div');
        cellDiv.textContent = cellData;
        // make it contenteditable="true"
        cellDiv.className = 'cell' + j;
        // cellDiv.contenteditable="true";
        if(i>0 && j>1){
            cellDiv.style.cursor='cell';
            cellDiv.setAttribute("contenteditable", "true");

        }
        else{
            cellDiv.style.cursor='pointer';
        }
        // else contenteditable false -- headers remain same        
        rowDiv.appendChild(cellDiv);        
    }

    // append rowchild to parentMatrix
    parentMatrix.appendChild(rowDiv);


}

//  set data button functionality


