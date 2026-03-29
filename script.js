let skills = [];

// Add Skill
function addSkill() {
    let name = document.getElementById("skillName").value;
    let level = document.getElementById("skillLevel").value;

    if(name && level){
        skills.push({name, level});
        displaySkills();

        document.getElementById("skillName").value = "";
        document.getElementById("skillLevel").value = "";
    }
}

// Preview
function displaySkills(){
    let preview = document.getElementById("skillPreview");
    preview.innerHTML = "";

    skills.forEach(s=>{
        let p = document.createElement("p");
        p.innerText = s.name + " (" + s.level + "%)";
        preview.appendChild(p);
    });
}

// Generate Resume
function generateResume(){
    rName.innerText = name.value;
    rEmail.innerText = email.value;
    rPhone.innerText = phone.value;
    rAbout.innerText = about.value;
    rEducation.innerText = education.value;
    rExperience.innerText = experience.value;

    let container = document.getElementById("rSkills");
    container.innerHTML = "";

    skills.forEach(s=>{
        let div = document.createElement("div");
        div.className = "skill";

        div.innerHTML = `
        <p>${s.name}</p>
        <div class="bar">
            <div class="fill" style="width:${s.level}%"></div>
        </div>
        `;

        container.appendChild(div);
    });

    // Photo
    let file = photo.files[0];
    if(file){
        let reader = new FileReader();
        reader.onload = () => rPhoto.src = reader.result;
        reader.readAsDataURL(file);
    }

    // SHOW POPUP
    showPopup();
}

// Popup
function showPopup() {
    document.getElementById("popup").classList.add("active");
}

function closePopup() {
    document.getElementById("popup").classList.remove("active");
}

// PDF
function downloadPDF(){
    html2pdf().from(document.getElementById("resume")).save();
}