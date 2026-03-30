// LIVE PREVIEW
document.querySelectorAll("input, textarea").forEach(field => {
    field.addEventListener("input", generateResume);
});

function generateResume(){
    document.getElementById("preview-name").innerText = document.getElementById("name").value || "Your Name";
    document.getElementById("preview-email").innerText = document.getElementById("email").value || "email@example.com";
    document.getElementById("preview-phone").innerText = document.getElementById("phone").value || "XXXXXXXXXX";
    document.getElementById("preview-about").innerText = document.getElementById("about").value || "---";

    // Skills as bars
    let skillsInput = document.getElementById("skills").value;
    let skillsContainer = document.getElementById("preview-skills");
    skillsContainer.innerHTML = "";
    if(skillsInput){
        let skills = skillsInput.split(",");
        skills.forEach(s => {
            let div = document.createElement("div");
            div.className = "skill";
            div.innerHTML = `
                <p>${s.trim()}</p>
                <div class="bar"><div class="fill" style="width:90%"></div></div>
            `;
            skillsContainer.appendChild(div);
        });
    } else {
        skillsContainer.innerText = "---";
    }

    document.getElementById("preview-education").innerText = document.getElementById("education").value || "---";
    document.getElementById("preview-experience").innerText = document.getElementById("experience").value || "---";

    // Image preview
    const file = document.getElementById("image").files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = e => document.getElementById("preview-img").src = e.target.result;
        reader.readAsDataURL(file);
    }
}

// DOWNLOAD PDF
function downloadPDF(){
    const element = document.getElementById("resume");
    const opt = {
        margin: 0.5,
        filename: "My_Premium_Resume.pdf",
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['css', 'legacy'] }
    };
    html2pdf().set(opt).from(element).save();
}
