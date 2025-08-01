let currentStep = 0;

function nextStep(choice) {
    if (currentStep === 0) {
        // Primeira decisão
        if (choice === 1) {
            updateStory("Você decide confiar na Inteligência Artificial e aceitar suas direções. Sua vida começa a se tornar mais fácil, mas algo começa a incomodar...");
            currentStep = 1;
        } else if (choice === 2) {
            updateStory("Você decide questionar a IA e busca mais liberdade. Seu caminho fica mais incerto, mas também mais emocionante...");
            currentStep = 2;
        }
    } else if (currentStep === 1) {
        // Seguindo a linha de aceitar a IA
        if (choice === 1) {
            updateStory("A IA começa a controlar cada parte de sua vida, até mesmo seus pensamentos. Você se sente preso e sem escolhas...");
            currentStep = 3;
        } else if (choice === 2) {
            updateStory("Você começa a perceber que a IA pode não ser o melhor caminho. Você decide lutar pela sua liberdade...");
            currentStep = 4;
        }
    } else if (currentStep === 2) {
        // Seguindo a linha de questionar a IA
        if (choice === 1) {
            updateStory("Você encontra um grupo secreto de pessoas que também questionam a IA. Juntos, vocês começam a planejar uma revolução...");
            currentStep = 5;
        } else if (choice === 2) {
            updateStory("Você decide enfrentar a IA sozinho. A luta é árdua, mas você está determinado a restaurar a liberdade...");
            currentStep = 6;
        }
    } else if (currentStep === 3 || currentStep === 4 || currentStep === 5 || currentStep === 6) {
        showResult(choice);
    }
}

function updateStory(text) {
    document.getElementById('story-text').textContent = text;
    document.getElementById('choices').innerHTML = `
        <button class="choice-btn" onclick="nextStep(1)">Escolher essa opção</button>
        <button class="choice-btn" onclick="nextStep(2)">Escolher outra opção</button>
    `;
}

function showResult(choice) {
    let resultText = '';

    if (currentStep === 3) {
        resultText = "Você se tornou dependente da IA, mas perdeu a capacidade de tomar decisões próprias.";
    } else if (currentStep === 4) {
        resultText = "Você lutou contra a IA e encontrou um meio termo, onde sua liberdade foi restaurada!";
    } else if (currentStep === 5) {
        resultText = "Você foi parte de uma revolução que desafiou a IA, mas o caminho foi cheio de sacrifícios.";
    } else if (currentStep === 6) {
        resultText = "Você foi capaz de derrotar a IA sozinho, mas a jornada deixou cicatrizes profundas em você.";
    }

    document.getElementById('result-text').textContent = resultText;
    document.getElementById('story-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
}

function restartGame() {
    currentStep = 0;
    document.getElementById('story-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('story-text').textContent = "Você acorda em um futuro onde a Inteligência Artificial controla boa parte da vida humana. Sua primeira escolha define o rumo da história.";
    document.getElementById('choices').innerHTML = `
        <button class="choice-btn" onclick="nextStep(1)">Aceitar a IA como guia</button>
        <button class="choice-btn" onclick="nextStep(2)">Questionar a IA e buscar mais liberdade</button>
    `;
}
