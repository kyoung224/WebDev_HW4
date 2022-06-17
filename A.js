function input(){
  var state = true;
  var employeeNum = 1;
  var hours = 0;
  var employeeInfo = [];
  var pay = 0;
  var totalPay = 0;

  while (state){
    hours = prompt("Please enter the number of hours worked by the employee" + employeeNum + ": (If there are no more employees left, please enter a negative number)");
    if (hours < 0){
      state = false;
    } else{
      employeeInfo.push(parseInt(hours));
      employeeNum++;
    }
  }

  document.write("<table>");
    document.write("<tr>");
      document.write("<td> Employee Number </td>");
      document.write("<td> Hours Worked </td>");
      document.write("<td> Employee's Pay");
    document.write("</tr>");

  for (var i = 0; i < employeeInfo.length; i++){
    var j = i + 1;
    document.write("<tr>");
      document.write("<td>" + j + "</td>");
      document.write("<td>" + employeeInfo[i] + "</td>");

      if (employeeInfo[i] <= 40){
        pay = (employeeInfo[i] * 15);
      } else{
        pay = (40 * 15) + (employeeInfo[i] - 40) * (15 * 1.5);
      }

      document.write("<td> $" + pay + "</td>");
      totalPay = totalPay + pay;
    document.write("</tr>");
  }
  document.write("</table>");
  document.write("The total pay of all the employees were: $" + totalPay);
}
