function categorizeAge(age) {
    if (age < 0) {
        console.log("Invalid age. Please enter a valid age.");
    } else {
        if (age < 5) {
            console.log("You are a Teddler (under 5 years).");
        } else {
            if (age <= 12) {
                console.log("You are a Child (5-12 years).");
            } else {
                if (age <= 19) {
                    console.log("You are a Teenager (13-19 years).");
                } else {
                    if (age <= 35) {                      console.log("You are a Young Adult (20-35 years).");
                    } else {
                        if (age <= 60) {
                            console.log("You are Middle Aged (36-60 years).");
                        } else {
                            console.log("You are a Senior (over 60 years).");
                        }
                    }
                }
            }
        }
    }
}

// Example usage
const userAge = parseInt(prompt("Please enter your age: "), 10);
categorizeAge(userAge);