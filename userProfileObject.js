let colorPreferences = [];

for (let i = 0; i < 3; i++) {
    let color = prompt("Enter a color you like:");
    colorPreferences.push(color);
    console.log("Updated color preferences:", colorPreferences);
}
const userProfile = {
    fullName: "John Bryan D. Lomuntad",
    age: 20, 
    favoriteNumber: 14,
    favoriteColors: ["black", "Gray", "white"]
};

console.log(userProfile);