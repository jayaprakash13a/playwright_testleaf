// Numeric Enum for Days of the Week
enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

// String Enum for Browsers
enum Browsers {
    Chrome = "chrome",
    Firefox = "firefox",
    Edge = "edge"
}

// Heterogeneous Enum
enum apiResponse {
    Success = 200,
    Error = "ERROR"
}

// Const Enum for Environments
const enum Environments {
    QA = "https://qa.testleaf.com",
    PROD = "https://prod.testleaf.com"
}


// Enum name and member name
console.log("Days.Monday:", Days.Monday);
console.log("Browsers.Chrome:", Browsers.Chrome);

// Enum value using numeric index
console.log("Days[1]:", Days[1]);

// Loop through enum values
console.log("Days:", Object.values(Days));
console.log("Browsers:", Object.values(Browsers));

// Use enum values in variables
let selectedDay: Days = Days.Friday;
let selectedBrowser: Browsers = Browsers.Firefox;
let currentEnvironment: Environments = Environments.PROD;

console.log("Selected Day:", selectedDay);
console.log("Selected Browser:", selectedBrowser);
console.log("Current Environment:", currentEnvironment);