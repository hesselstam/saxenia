var user = firebase.auth().currentUser;

function adminAuth() {
    var docRef = db.collection("users").doc(user.email);
    docRef.get().then((doc) => {
        if (doc.exists) {
            if(docRef.data().admin == true) {
                console.log("User is an admin");
            } else {
                console.log("User is not an admin");
            }
        } else {
            console.log("Member not logged in");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

adminAuth();
console.log("Admin Auth loaded");