
const userProfile = document.getElementById("user-profile");

// Modifying data attributes using dataset
userProfile.dataset.role = "user";
userProfile.dataset.name = "David Smith";

console.log(`Updated User Role: ${userProfile.dataset.role}`); // "user"
console.log(`Updated User Name: ${userProfile.dataset.name}`); // "David Smith"

