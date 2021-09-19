const firebaseConfig = {
    apiKey: "AIzaSyCzZwf7RC3NFB0RtccZ-Co8Rfizw0JXHys",
    authDomain: "hackathoon-3b3a9.firebaseapp.com",
    databaseURL: "https://hackathoon-3b3a9-default-rtdb.firebaseio.com",
    projectId: "hackathoon-3b3a9",
    storageBucket: "hackathoon-3b3a9.appspot.com",
    messagingSenderId: "637825253103",
    appId: "1:637825253103:web:fac8974e1edd130c38251a",
    measurementId: "G-M2J0ZFZY0J"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function switchToSignUp(){
    document.getElementById("signIn-box").style.display="none";
    document.getElementById("signUp-box").style.display="block";
}

function switchToSignIn(){
    document.getElementById("signUp-box").style.display="none";
    document.getElementById("signIn-box").style.display="block";
}






function signIn() {
    const email = document.getElementById("iemail").value;
    const password = document.getElementById("ipassword").value;
    console.log(email, password);

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
}

function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

function signUp() {
    const email = document.getElementById("uemail").value;
    const password = document.getElementById("upassword").value;
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}


////game\\\

let popped = 0;

document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "balloon-red"){
        
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "POP!";
                popped++;
                removeEvent(e);
                checkAllPopped();
    }    else if (e.target.className === "balloon"){
        
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "FAIL!";
                popped++;
                removeEvent(e);
                checkAllPopped();
            }
            else if (e.target.className === "balloonyellow"){
        
                        e.target.style.backgroundColor = "#ededed";
                        e.target.textContent = "FAIL!";
                        popped++;
                        removeEvent(e);
                        checkAllPopped();
                    }
                    else if (e.target.className === "balloongrey"){
        
                                e.target.style.backgroundColor = "#ededed";
                                e.target.textContent = "FAIL!";
                                popped++;
                                removeEvent(e);
                                checkAllPopped();
                            }
});

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 24){
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};

































