
// program to generate a multiplication table
  function displayTable() {
      let num= document.getElementById("userInPut").value;
      let table = "";
      for (let i = 1; i <= 10; i++) {
      table += `${num} * ${i} = ${num * i} <br>`;
      }
      document.write(table);
  }
// take input from the user
// const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table



