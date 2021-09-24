//Custom menu 
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Evaluation Menu')
      .addItem('Attendance checker', 'menuItem1')
      .addSeparator()
      .addItem('Grade situation checker', 'menuItem2')
      .addToUi();
}
//Menu items
function menuItem1() {
  SpreadsheetApp.getUi() 
  checkAttendance();
}

function menuItem2() {
  SpreadsheetApp.getUi()
    checkGrade();
}

function checkGrade() {
  //Get spreadsheet by id and sheet by name, could be replaced with SpreadsheetApp.getActiveSheet();
  var sheet = SpreadsheetApp.openById('15nPLvvGO_i3MS0uVwNv85r7qJ77AiIG7joS04LymT_A').getSheetByName('engenharia_de_software');
  var data = sheet.getDataRange().getValues(); // Value of all cells in the spreadsheet
  var aluno,m,p1,p2,p3,situation,naf, result;
  //check attendance before start checking grades
  checkAttendance();
  // for with i=4 since 'i' is the row, and rows 1 to 3 are table headers 
  for (var i = 4; i < (data.length + 1); i++) {   //Simple loop until the last written cell
    // Get values of P1,P2,P3 on columns B,D,E,F
    aluno=sheet.getRange(i,2).getValue();     //Column 'B'
    p1=sheet.getRange(i,4).getValue();        //Column 'D'
    p2=sheet.getRange(i,5).getValue();        //Column 'E'
    p3=sheet.getRange(i,6).getValue();        //Column 'F'
    situation=sheet.getRange(i,7).getValue(); //Column 'G' 
    // Checks if the students have attendance
    if(situation!='Reprovado por Falta'){ 
      //Log the rows to check values
      Logger.log('Aluno: '+aluno +' P1:'+p1+' P2:'+p2+' P3:'+p3+' Situação: '+situation);
      // Calculate the median grade
      m=(p1+p2+p3)/3; 
      //Using grades range of 0 to 100  instead of 0 to 10 since that doesn't fit the sheet data
      if(m>=70){
        //Set the value of Gi
        result =sheet.getRange(i,7).setValue('Aprovado');
        //Log to check the current situation
        Logger.log('Aluno: ' +aluno +' Situação: ' +result.getValue());
     }if(m >= 50 & m<70){
       //Set the value of Gi
       result =sheet.getRange(i,7).setValue('Exame Final');
         //Log to check the current situation
        Logger.log('Aluno: ' +aluno +' Situação: ' +result.getValue());
       //Calculate naf from 50>=(naf+m)/2
       naf=100-m;
       //Set the value of Hi
       result =sheet.getRange(i,8).setValue(naf); 
         //Log to check the current situation
        Logger.log('Aluno: ' +aluno +' Nota para Aprovação Final: ' +result.getValue());
     }
      if(m<50){
        //Set the value of Gi
       var result =sheet.getRange(i,7).setValue('Reprovado por Nota');
          //Log to check the current situation
        Logger.log('Aluno: ' +sheet.getRange(i,2).getValue() +' Situação: ' +result.getValue());
        }
  }
}
}

function checkAttendance() {
  //Check attendance on specific sheet
  var sheet = SpreadsheetApp.openById('15nPLvvGO_i3MS0uVwNv85r7qJ77AiIG7joS04LymT_A').getSheetByName('engenharia_de_software');
  var data = sheet.getDataRange().getValues();
  for (var i = 4; i < data.length; i++) {
    var attendance = sheet.getRange(i,3).getValue();
    //Check if attendance is under 25% of 60 (15)
    if(attendance > 15){
      //Set the value of Gi
      var result =sheet.getRange(i,7).setValue('Reprovado por Falta');
    }
  }
}
