
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
            message = "Possible Cause: Dust buildup or poor airflow. Check your fans and clean dust from the computer.";
        }
        else if (problem === "slow-performance") {
            message = "Possible Cause: Low available memory or too many background programs. Check Task Manager for high resource usage.";
        }
        else if (problem === "no-power") {
            message = "Possible Cause: Power supply or power connection issue. Check the power cable, outlet, and power switch.";
        }
        else if (problem === "random-shutdown") {
            message = "Possible Cause: Overheating or power supply instability. Monitor your temperatures and check power connections.";
        }

        // Display the advice
        results.textContent = message;

    });
}
