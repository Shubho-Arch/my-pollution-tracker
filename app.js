async function fetchData() {
  const container = document.getElementById('result');
  container.innerHTML = 'Loading...';

  try {
    // Fetching data from a public REST API
    const response = await fetch('https://randomuser.me/api/');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const user = data.results[0];

    // Updating the DOM with fetched data
    container.innerHTML = `
      <div class="card">
        <img src="${user.picture.medium}" alt="User Portrait">
        <h3>${user.name.first} ${user.name.last}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
      </div>
    `;
  } catch (error) {
    container.innerHTML = `<p class="error">Failed to load data: ${error.message}</p>`;
  }
}
