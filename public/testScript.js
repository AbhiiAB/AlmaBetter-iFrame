const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  appId: 'YOUR_APP_ID',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storageRef = firebase.storage().ref();

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  // Get the entered link
  const linkInput = document.getElementById('linkInput');
  const link = linkInput.value;

  // Store the link in Firebase
  const fileRef = storageRef.child('gs://almabetter-iframe.appspot.com/'); // Specify the desired file path
  fileRef.putString(link)
    .then(() => {
      console.log('Link stored successfully!');
    })
    .catch((error) => {
      console.error('Error storing link:', error);
    });
}