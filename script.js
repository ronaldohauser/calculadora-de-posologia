function calcularPosologia() {
    document.getElementById("alertModal").style.display = "flex";

    // Obtém os valores dos campos
    const pesoAnimal = parseFloat(document.getElementById("peso").value);
    const dosagemMedicamento = parseFloat(document.getElementById("medicamento").value);
    const doseMedicamento = parseFloat(document.getElementById("dose").value);
    const concentracaoMedicamento = parseFloat(document.getElementById("concentracao").value);

    if (isNaN(pesoAnimal) || isNaN(dosagemMedicamento)) {
        alert("Por favor, preencha o peso e a dosagem do medicamento.");
        return;
    }

    if (concentracaoMedicamento && doseMedicamento) {
        alert("Preencha apenas um dos campos: Dose ou Concentração.");
        return;
    }

    let volumeMedicamento;

    if (concentracaoMedicamento) {
        const concentracaoDecimal = concentracaoMedicamento > 1 && concentracaoMedicamento <= 100
            ? concentracaoMedicamento / 100
            : concentracaoMedicamento;

        const quantidadeMedicamentoMg = pesoAnimal * dosagemMedicamento;
        volumeMedicamento = quantidadeMedicamentoMg / (concentracaoDecimal * 1000);
    } else if (doseMedicamento) {
        volumeMedicamento = doseMedicamento / (pesoAnimal * dosagemMedicamento);
    }

    if (volumeMedicamento !== undefined) {
        document.getElementById("resultado").innerText = `${volumeMedicamento.toFixed(3)} mL`;
    } else {
        alert("Preencha a concentração ou a dose.");
    }
}

document.getElementById("okButton").onclick = function() {
    document.getElementById("alertModal").style.display = "none";
};
