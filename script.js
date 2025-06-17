function calculateRisk() {
    var likelihood = parseInt(document.getElementById("likelihood").value);
    var severity = parseInt(document.getElementById("severity").value);
    var riskScore = likelihood * severity;
    var level = "";

    if (riskScore >= 15) {
        level = "High Risk";
    } else if (riskScore >= 6) {
        level = "Medium Risk";
    } else {
        level = "Low Risk";
    }

    document.getElementById("riskResult").innerText = "Risk Score: " + riskScore + " (" + level + ")";
}
