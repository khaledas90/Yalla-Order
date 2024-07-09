export async function signUp(url,email, name, password, phone) {
  // Assuming the CSRF token is stored in a meta tag
  // const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  const data = {
       name: name,
      email: email,
      password: password,
      phone: phone
  };

  try {
      const response = await fetch(`${url}/register`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
      });

      if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
      }

      const result = await response.json();
      console.log('Success:', result);
      return result;
  } catch (error) {
      console.error('Error:', error);
      throw error;
  }
}
