
document.querySelectorAll("input, textarea").forEach(field => {
    field.addEventListener("input", generateResume);
});

function generateResume() {

    document.getElementById("preview-name").innerText =
        document.getElementById("name").value || "Your Name";

    document.getElementById("preview-email").innerText =
        document.getElementById("email").value || "email@example.com";

    document.getElementById("preview-phone").innerText =
        document.getElementById("phone").value || "XXXXXXXXXX";

    document.getElementById("preview-about").innerText =
        document.getElementById("about").value || "---";

    document.getElementById("preview-skills").innerText =
        document.getElementById("skills").value || "---";

    document.getElementById("preview-education").innerText =
        document.getElementById("education").value || "---";

    document.getElementById("preview-experience").innerText =
        document.getElementById("experience").value || "---";

    
    const file = document.getElementById("image").files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("preview-img").src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
}


function downloadPDF() {

    const original = document.getElementById("resume");
    const pdf = document.getElementById("resume-pdf");

    pdf.innerHTML = original.innerHTML;

    const opt = {
        margin: 10,
        filename: "My_Resume.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: {
            scale: 2,
            useCORS: true
        },
        jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait"
        },
        pagebreak: {
            mode: ['css', 'legacy']
        }
    };

    html2pdf().set(opt).from(pdf).save();
}
