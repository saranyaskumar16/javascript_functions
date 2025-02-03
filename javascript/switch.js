// switch statement -------->direct checking
let day="Wednesday";
day === "monday"
switch(day){
    case "Monday":
        console.log("It is the start of the wok week");
        break;
    case "Tuesday":
        console.log("Its tuesday keep going");
        break;
    case "Wednesday":
        console.log("Half way through the week");
        break;
    case "Thursday":
        console.log("Almost there!");
        break;
    case "Friday":
        console.log("It's friday, the weekend is near");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Enjoy your weekend!");
        break;
    default:
        console.log("Invalid day!!");
        
}