const axios = require('axios');

async function registerAdmin() {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/register', {
            email: 'admin@mds.com',
            password: 'admin',
            name: 'Admin User'
        });
        console.log('Admin registered successfully:', response.data);
    } catch (error) {
        if (error.response) {
            console.log('Error registering admin:', error.response.data);
        } else {
            console.log('Error:', error.message);
        }
    }
}

registerAdmin();
