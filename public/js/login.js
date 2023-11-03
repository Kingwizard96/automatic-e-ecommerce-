
const signupHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const username = document.querySelector('#username').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ username, email, password}),
            headers: { 'Content-Type': 'application/json'},

        });

        if (response.ok) {
            document.location.replace('/home');
        } else {
            alert(response.statusText);
        }
    }
};

const loginHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#loginUsername').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            const data = await response.json();

            localStorage.setItem('jwtToken', data.token);

            document.location.replace('/home');
        } else {
            alert('Login failed. Please check your credentials.');
        }
    }
};


document.querySelector('.signup-form').addEventListener('submit', signupHandler);
document.querySelector('login-form').addEventListener('submit', loginHandler);