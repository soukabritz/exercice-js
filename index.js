const restaurantName = "Italian Kitchen"
let totalTables = 20
let tablesUsed = 12
let price = 25

let tablesRemaining = totalTables - tablesUsed;
tablesRemaining -= 1
let test = tablesRemaining >= 1
let revenue = tablesUsed * price
revenue += 10

let message1 = "Bienvenue au restaurant"
let message2 = "Italian Kitchen"
let messageAccueil = message1 + message2 + tablesRemaining
console.log("message d'accueil + tables restantes", messageAccueil)