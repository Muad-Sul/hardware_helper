
/* Hardware Helper - JavaScript */

// Find the diagnostic form
const diagnosticForm = document.getElementById("diagnostic-form");

// Only run this code on pages containing the form
if (diagnosticForm) {

    diagnosticForm.addEventListener("submit", function (event) {

        // Prevent the page from refreshing
        event.preventDefault();

        // Get the selected problem
        const problem = document.getElementById("problem").value;

        // Find the results section
        const results = document.getElementById("diagnostic-results");

        let message = "";

        // Determine which troubleshooting advice to display
        
    if (problem === "no-display") {
        results.innerHTML = `
            <h3>No Display Troubleshooting</h3>

            <p>Are your computer's fans spinning when you turn it on?</p>

            <button type="button" id="fans-yes">Yes</button>
            <button type="button" id="fans-no">No</button>

            <p id="follow-up-result" aria-live="polite"></p>
        `;

        document.getElementById("fans-yes").addEventListener("click", function() {
            document.getElementById("follow-up-result").textContent =
                "If the fans are spinning, check your monitor input and display cable. If your PC has a dedicated graphics card, make sure the monitor is connected to the correct video output.";
        });

        document.getElementById("fans-no").addEventListener("click", function() {
            document.getElementById("follow-up-result").textContent =
                "If the fans are not spinning, check the power cable, outlet, and power supply switch. Your system may not be receiving power.";
        });

        return;
    }

        
    else if (problem === "overheating") {
        results.innerHTML = `
            <h3>Overheating Troubleshooting</h3>

            <p>Does your computer get hot even when you're not running demanding programs?</p>

            <button type="button" id="heat-yes">Yes</button>
            <button type="button" id="heat-no">No</button>

            <p id="follow-up-result" aria-live="polite"></p>
        `;

        document.getElementById("heat-yes").addEventListener("click", function() {
            document.getElementById("follow-up-result").textContent =
                "Your PC may have poor airflow, dust buildup, or a cooling issue. Check that the fans are spinning and inspect the vents for dust.";
        });

        document.getElementById("heat-no").addEventListener("click", function() {
            document.getElementById("follow-up-result").textContent =
                "If overheating happens mainly during gaming or demanding tasks, check CPU and GPU temperatures, fan speeds, and case airflow.";
        });

        return;
    }

        
    else if (problem === "slow-performance") {
        results.innerHTML = `
            <h3>Slow Performance Troubleshooting</h3>

            <p>Is your computer slow even when you're only doing basic tasks, like browsing the internet?</p>

            <button type="button" id="slow-yes">Yes</button>
            <button type="button" id="slow-no">No</button>

            <p id="follow-up-result" aria-live="polite"></p>
        `;

        document.getElementById("slow-yes").addEventListener("click", function() {
            document.getElementById("follow-up-result").textContent =
                "Your computer may have too many background programs, low available RAM, or slow storage. Open Task Manager and check CPU, Memory, and Disk usage.";
        });

        document.getElementById("slow-no").addEventListener("click", function() {
            document.getElementById("follow-up-result").textContent =
                "If your computer slows down mainly during gaming or demanding programs, check CPU and GPU temperatures, RAM usage, and whether your hardware meets the program's requirements.";
        });

        return;
    }

        
    else if (problem === "no-power") {
        results.innerHTML = `
            <h3>No Power Troubleshooting</h3>

            <p>Do any lights or fans turn on when you press the power button?</p>

            <button type="button" id="power-yes">Yes</button>
            <button type="button" id="power-no">No</button>

            <p id="follow-up-result" aria-live="polite"></p>
        `;

        document.getElementById("power-yes").addEventListener("click", function() {
            document.getElementById("follow-up-result").textContent =
                "If lights or fans turn on, your PC is receiving some power. Check your monitor connection and look for any motherboard diagnostic lights. The issue may involve the display or another component.";
        });

        document.getElementById("power-no").addEventListener("click", function() {
            document.getElementById("follow-up-result").textContent =
                "If nothing turns on, check the power outlet, power cable, and power supply switch. If you're using a desktop, make sure the power cable is firmly connected. A faulty power supply could also be responsible.";
        });

        return;
    }

        else if (problem === "random-shutdown") {
            message = "Possible Cause: Overheating or power supply instability. Monitor your temperatures and check power connections.";
        }

        // Display the advice
        results.textContent = message;

    });
}
