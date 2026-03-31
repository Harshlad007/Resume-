document.querySelectorAll("input, textarea").forEach(field => {
    field.addEventListener("input", generateResume);
});

document.getElementById("image").addEventListener("change", generateResume);

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
        reader.onload = e => {
            document.getElementById("preview-img").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    document.getElementById("generate-popup").classList.add("active");
    setTimeout(() => {
        document.getElementById("generate-popup").classList.remove("active");
    }, 1200);
}

function downloadPDF() {

    generateResume();

    const pdfContainer = document.getElementById("resume-pdf");

    document.getElementById("loader").classList.add("active");

    document.getElementById("pdf-name").innerText = document.getElementById("name").value;
    document.getElementById("pdf-email").innerText = document.getElementById("email").value;
    document.getElementById("pdf-phone").innerText = document.getElementById("phone").value;
    document.getElementById("pdf-about").innerText = document.getElementById("about").value;
    document.getElementById("pdf-skills").innerText = document.getElementById("skills").value;
    document.getElementById("pdf-education").innerText = document.getElementById("education").value;
    document.getElementById("pdf-experience").innerText = document.getElementById("experience").value;

    document.getElementById("pdf-img").src =
        document.getElementById("preview-img").src;

    pdfContainer.style.position = "relative";
    pdfContainer.style.left = "0";

    const opt = {
        margin: 0,
        filename: "My_Resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 1 },
        jsPDF: { unit: "mm", format: "a4" }
    };

    html2pdf().set(opt).from(pdfContainer).save().then(() => {

        pdfContainer.style.position = "absolute";
        pdfContainer.style.left = "-9999px";

        document.getElementById("loader").classList.remove("active");
        document.getElementById("success-popup").classList.add("active");
    });
}

function closePopup() {
    document.getElementById("success-popup").classList.remove("active");
}
