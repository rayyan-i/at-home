 var urdu = Number(prompt("Entrer your obtain marks in urdu "));
 var english = Number(prompt("Entrer your obtain marks in english "));
 var maths = Number(prompt("Entrer your obtain marks in maths "));
 var science = Number(prompt("Entrer your obtain marks in science "));
 var pst = Number(prompt("Entrer your obtain marks in pst "));
 var totalMarks = 100 * 5;
 var obtainedMarks = english + urdu + maths + science + pst;
 var getPercentage = (obtainedMarks/ totalMarks) * 100;

 var grade;
if(percentage >=80){
    grade ="A+;"
}else if(getPercentage<80){
    grade ="A"
}
 var grade;
 if(getPercentage>=70){
    grade = "A";
 }else if(getPercentage<70){
    grade="B"
 }
 var grade;
if(getPercentage=60){
    grade ="B";
}else if(getPercentage<60){
    grade="C"
}
 alert("Marksheet" +"\n" + "Total Marks:" + totalMarks + "\n" + "Obtained Marks:" + obtainedMarks + "\n" + "Percentage:"+ getPercentage);