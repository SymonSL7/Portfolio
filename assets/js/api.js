
async function fetchProfileData() {
    
    const url = 'https://raw.githubusercontent.com/SymonSL7/Portfolio/refs/heads/main/assets/data/profile.json';

    const fetching = await fetch(url);

    return fetching.json();

}