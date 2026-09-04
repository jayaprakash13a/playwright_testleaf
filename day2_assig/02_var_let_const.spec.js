// Global variable
const browserName = "Chrome";

function getBrowserName() {
    if (browserName === "Chrome") {
        // Local variable using var
        let browserName = "Edge";
    }

    // Accessible outside the if block
    console.log(browserName);
}

getBrowserName();