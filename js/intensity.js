const years = ['2023', '2022', '2021', '2020'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const places = ['Pune', 'Mumbai', 'Satara'];
const boolOptions = ['Very light','Light','Moderate', 'Heavy', 'Very heavy' , 'Extremely heavy'];

// Initial Year Rendering in Select Button
!function(){
  let yearSelectors = '';

  for (const key in years) {
    yearSelectors += `<option value="${years[key]}">${years[key]}</option>`
  }

  document.querySelector('#year').innerHTML = yearSelectors;
}();

// Initial Month Rendering in Select Button
!function(){
  let monthSelectors = '';

  for (const key in months) {
    monthSelectors += `<option value="${months[key]}">${months[key]}</option>`
  }

  document.querySelector('#month').innerHTML = monthSelectors;
  
}();

// Initial Place Rendering in Select Button
!function(){
  let placeSelectors = '';

  for (const key in places) {
    placeSelectors += `<option value="${places[key]}">${places[key]}</option>`
  }

  document.querySelector('#place').innerHTML = placeSelectors;
  
}();

// Initial Input Data Rendering in input section
!function(){
  const tableBody = document.querySelector('.input-table');
  console.log(tableBody);
  const numRows = 31;
  const numCols = 6;

  for (let i = 0; i < numRows; i++) {
    const row = document.createElement('tr');
    const date = document.createElement('div');
    row.className = 'input-row';
    date.innerHTML = `${i+1}`;
    date.className = 'input-text';
    row.appendChild(date);
    
    for (let j = 0; j < numCols; j++) {
      const cell = document.createElement('td');
      const selectbar = document.createElement('select');
      selectbar.className = 'input-bar'
      selectbar.id = `array-${i}-${j}`;
      selectbar.innerHTML = '';
      for (const key in boolOptions) {
        selectbar.innerHTML += `<option value="${boolOptions[key]}">${boolOptions[key]}</option>`
      }

      cell.appendChild(selectbar);
      row.appendChild(cell);
    }
    console.log('Running');
    tableBody.appendChild(row);
  }
}();