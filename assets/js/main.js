
function updateProfileInfo(profileData) {

    const photo = document.getElementById('profile.photo');
    photo.src = profileData.photo;
    photo.alt = profileData.name;

    const name = document.getElementById('profile.name');
    name.innerText = profileData.name;

    const job = document.getElementById('profile.job');
    job.innerText = profileData.job;
    job.href = `${profileData.linkedin}`;

    const location = document.getElementById('profile.location');
    location.innerText = profileData.location;

    const phone = document.getElementById('profile.phone');
    phone.innerText = profileData.phone;
    phone.href = `https://wa.me/${profileData.phoneRef}`;

    const email = document.getElementById('profile.email');
    email.innerText = profileData.email;
    email.href = `mailto:${profileData.email}`;
};

function updateSoftSkills(profileData) {

    const softSkills = document.getElementById('profile.skills.softSkills');

    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');

};

function updateHardSkills(profileData) {

    const hardSkills = document.getElementById('profile.skills.hardSkills');

    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('');

}

function updateLanguages(profileData) {

    const languages = document.getElementById('profile.languages');

    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('');

}

function updatePortfolio(profileData) {

    const portfolio = document.getElementById('profile.portfolio');

    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
        <li>
            <span ${project.github ? 'class="title github"' : 'title'}>${project.name}</span>
            <a href="${project.url}" target="_blank" rel="noopener">${project.url}</a>
        </li>
        `
    }).join('');

}

function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('profile.professionalExperience');

    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
        
        let descriptionContent;
        
        if (typeof experience.description === 'object' && experience.description !== null) {
            descriptionContent = Object.entries(experience.description)
                .map(([key, value]) => `<p>${value}</p>`)
                .join('');
        } else {
            descriptionContent = `<p>${experience.description || ''}</p>`;
        }

        return `
            <li>
                <h3 class="title">${experience.name}</h3>
                <span class="period">${experience.period}</span>
                ${descriptionContent}
            </li>
        `;
    }).join('');
}

(async () => {
    
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
    updateProfessionalExperience(profileData);

})();