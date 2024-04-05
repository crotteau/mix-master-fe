const mixedDrinkRecipes = [
    {
        id: 1,
        name: "Mojito",
        ingredients: ["2 oz white rum", "1 oz lime juice", "2 tsp sugar", "6-8 fresh mint leaves", "Club soda"],
        directions: {
            step1: "In a glass, muddle the mint leaves, sugar, and lime juice together.",
            step2: "Add rum and fill the glass with ice.",
            step3: "Top with club soda and stir gently.",
            step4: "Garnish with a sprig of mint and a lime wedge.",
        },
        alcoholic: true,
        isFavorite: false,
        image: "",
    },
    {
        id: 2,
        name: "Gin and Tonic",
        ingredients: ["2 oz gin", "4 oz tonic water", "Lime wedge"],
        directions: {
            step1: "Fill a highball glass with ice cubes.",
            step2: "Pour gin over ice and top with tonic water.",
            step3: "Stir gently and garnish with a lime wedge.",
        },
        alcoholic: true,
        image: "",
    },
    {
        id: 3,
        name: "Bloody Mary",
        ingredients: ["1 1/2 oz vodka", "3 oz tomato juice", "1/2 oz lemon juice", "Dash of Worcestershire sauce", "Dash of hot sauce", "Celery salt", "Black pepper", "Celery stalk", "Lemon wedge"],
        directions: {
            step1: "Rim a highball glass with celery salt and fill with ice cubes.",
            step2: "Add vodka, tomato juice, lemon juice, Worcestershire sauce, and hot sauce to the glass.",
            step3: "Stir well and garnish with a celery stalk and lemon wedge.",
            step4: "Season with black pepper.",
        },
        alcoholic: true,
        isFavorite: false,
        image: "",
    },
    {
        id: 4,
        name: "Martini",
        ingredients: ["2 1/2 oz gin or vodka", "1/2 oz dry vermouth", "Lemon twist or olive"],
        directions: {
            step1: "Fill a mixing glass with ice cubes.",
            step2: "Pour gin (or vodka) and dry vermouth over the ice.",
            step3: "Stir well (or shake) and strain into a chilled martini glass.",
            step4: "Garnish with a lemon twist or olive.",
        },
        alcoholic: true,
        isFavorite: false,
        image: "",
    },
    {
        id: 5,
        name: "Cosmopolitan",
        ingredients: ["1 1/2 oz vodka", "1/2 oz triple sec", "1/2 oz cranberry juice", "1/4 oz lime juice", "Lime twist"],
        directions: {
            step1: "Fill a shaker with ice cubes.",
            step2: "Add vodka, triple sec, cranberry juice, and lime juice to the shaker.",
            step3: "Shake well and strain into a chilled martini glass.",
            step4: "Garnish with a lime twist.",
        },
        alcoholic: true,
        isFavorite: false,
        image: "",
    },
    {
        id: 6,
        name: "Long Island Iced Tea",
        ingredients: ["1/2 oz vodka", "1/2 oz tequila", "1/2 oz rum", "1/2 oz gin", "1/2 oz triple sec", "1 oz sour mix", "Splash of cola", "Lemon wedge"],
        directions: {
            step1: "Fill a highball glass with ice cubes.",
            step2: "Pour vodka, tequila, rum, gin, triple sec, and sour mix over ice.",
            step3: "Top with a splash of cola and stir gently.",
            step4: "Garnish with a lemon wedge.",
        },
        alcoholic: true,
        isFavorite: false,
        image: "",
    },
    {
        id: 7,
        name: "Margarita",
        ingredients: ["2 oz tequila", "1 oz lime juice", "1 oz triple sec", "Salt for rim", "Lime wedge"],
        directions: {
            step1: "Rim a margarita glass with salt.",
            step2: "Fill a shaker with ice cubes.",
            step3: "Add tequila, lime juice, and triple sec to the shaker.",
            step4: "Shake well and strain into the prepared glass filled with ice.",
            step5: "Garnish with a lime wedge.",
        },
        alcoholic: true,
        isFavorite: false,
        image: "",
    },
    {
        id: 8,
        name: "Old Fashioned",
        ingredients: ["2 oz bourbon or rye whiskey", "2 dashes Angostura bitters", "1 sugar cube", "Splash of water", "Orange twist", "Cherry"],
        directions: {
            step1: "Place the sugar cube in an old fashioned glass.",
            step2: "Add two dashes of Angostura bitters and a splash of water.",
            step3: "Muddle until the sugar is dissolved.",
            step4: "Fill the glass with ice cubes.",
            step5: "Pour bourbon or rye whiskey over the ice and stir well.",
            step6: "Garnish with an orange twist and a cherry.",
        },
        alcoholic: true,
        isFavorite: false,
        image: "",
    },
    {
        id: 9,
        name: "Pina Colada",
        ingredients: ["2 oz white rum", "4 oz pineapple juice", "2 oz coconut cream", "Pineapple slice", "Maraschino cherry"],
        directions: {
            step1: "Blend rum, pineapple juice, and coconut cream with ice until smooth.",
            step2: "Pour into a chilled glass.",
            step3: "Garnish with a pineapple slice and maraschino cherry.",
        },
        alcoholic: true,
        isFavorite: false,
        image: "",
    },
    {
        id: 10,
        name: "Sex on the Beach",
        ingredients: ["1 1/2 oz vodka", "1/2 oz peach schnapps", "2 oz cranberry juice", "2 oz orange juice", "Orange slice", "Maraschino cherry"],
        directions: {
            step1: "Fill a highball glass with ice cubes.",
            step2: "Pour vodka and peach schnapps over ice.",
            step3: "Top with cranberry juice and orange juice.",
            step4: "Garnish with an orange slice and maraschino cherry.",
        },
        alcoholic: true,
        isFavorite: false,
        image: "",
    },
    {
        id: 11,
        name: "Whiskey Sour",
        ingredients: ["2 oz bourbon whiskey", "3/4 oz lemon juice", "1/2 oz simple syrup", "Lemon wheel", "Cherry"],
        directions: {
            step1: "Fill a shaker with ice cubes.",
            step2: "Add bourbon whiskey, lemon juice, and simple syrup to the shaker.",
            step3: "Shake well and strain into a chilled glass filled with ice.",
            step4: "Garnish with a lemon wheel and a cherry.",
        },
        alcoholic: true,
        isFavorite: false,
        image: "",
    },
    {
        id: 12,
        name: "White Russian",
        ingredients: ["2 oz vodka", "1 oz coffee liqueur", "Light cream"],
        directions: {
            step1: "Fill a rocks glass with ice cubes.",
            step2: "Pour vodka and coffee liqueur over ice.",
            step3: "Top with light cream and stir gently.",
        },
        alcoholic: true,
        isFavorite: false,
        image: "",
    },
    {
        id: 13,
        name: "Negroni",
        ingredients: ["1 oz gin", "1 oz Campari", "1 oz sweet vermouth", "Orange twist"],
        directions: {
            step1: "Fill a mixing glass with ice cubes.",
            step2: "Add gin, Campari, and sweet vermouth to the glass.",
            step3: "Stir well and strain into a rocks glass filled with ice.",
            step4: "Garnish with an orange twist.",
        },
        alcoholic: true,
        isFavorite: false,
        image: "",
    },
    {
        id: 14,
        name: "Daiquiri",
        ingredients: ["2 oz white rum", "1 oz lime juice", "3/4 oz simple syrup", "Lime wheel"],
        directions: {
            step1: "Fill a shaker with ice cubes.",
            step2: "Add rum, lime juice, and simple syrup to the shaker.",
            step3: "Shake well and strain into a chilled glass.",
            step4: "Garnish with a lime wheel.",
        },
        alcoholic: true,
        isFavorite: false,
        image: "",
    },
    {
        id: 15,
        name: "Singapore Sling",
        ingredients: ["1 1/2 oz gin", "1/2 oz cherry brandy", "1/4 oz grenadine", "4 oz pineapple juice", "1/2 oz lime juice", "1/4 oz Cointreau", "1/4 oz Benedictine", "1 dash Angostura bitters", "Pineapple slice", "Maraschino cherry"],
        directions: {
            step1: "Fill a shaker with ice cubes.",
            step2: "Add all ingredients except pineapple juice to the shaker.",
            step3: "Shake well and strain into a Collins glass filled with ice.",
            step4: "Top with pineapple juice and stir gently.",
            step5: "Garnish with a pineapple slice and maraschino cherry.",
        },
        alcoholic: true,
        isFavorite: false,
        image: "",
    },
    {
        id: 16,
        name: "Manhattan",
        ingredients: ["2 oz rye whiskey", "1 oz sweet vermouth", "2 dashes Angostura bitters", "Maraschino cherry"],
        directions: {
            step1: "Fill a mixing glass with ice cubes.",
            step2: "Add whiskey, sweet vermouth, and bitters to the glass.",
            step3: "Stir well and strain into a chilled martini glass.",
            step4: "Garnish with a maraschino cherry.",
        },
        alcoholic: true,
        isFavorite: false,
        image: "",
    },
    {
        id: 17,
        name: "Tequila Sunrise",
        ingredients: ["1 1/2 oz tequila", "4 oz orange juice", "1/2 oz grenadine", "Orange slice", "Cherry"],
        directions: {
            step1: "Fill a highball glass with ice cubes.",
            step2: "Pour tequila and orange juice over ice.",
            step3: "Gently pour grenadine into the glass so it sinks to the bottom.",
            step4: "Garnish with an orange slice and cherry.",
        },
        alcoholic: true,
        isFavorite: true,
        image: "",
    },
    {
        id: 18,
        name: "Tom Collins",
        ingredients: ["2 oz gin", "1 oz lemon juice", "1/2 oz simple syrup", "Club soda", "Lemon wheel", "Cherry"],
        directions: {
            step1: "Fill a Collins glass with ice cubes.",
            step2: "Add gin, lemon juice, and simple syrup to the glass.",
            step3: "Top with club soda and stir gently.",
            step4: "Garnish with a lemon wheel and cherry.",
        },
        alcoholic: true,
        isFavorite: false,
        image: "",
    },
    {
        id: 19,
        name: "Blue Lagoon",
        ingredients: ["1 oz vodka", "1 oz blue curaçao", "Lemonade", "Lemon wheel"],
        directions: {
            step1: "Fill a highball glass with ice cubes.",
            step2: "Add vodka and blue curaçao to the glass.",
            step3: "Top with lemonade and stir gently.",
            step4: "Garnish with a lemon wheel.",
        },
        alcoholic: true,
        isFavorite: true,
        image: "",
    },
    {
        id: 20,
        name: "Pisco Sour",
        ingredients: ["2 oz pisco", "1 oz lemon juice", "3/4 oz simple syrup", "1 egg white", "Angostura bitters"],
        directions: {
            step1: "Fill a shaker with ice cubes.",
            step2: "Add pisco, lemon juice, simple syrup, and egg white to the shaker.",
            step3: "Shake well and strain into a chilled glass.",
            step4: "Garnish with a few drops of Angostura bitters.",
        },
        alcoholic: true,
        isFavorite: false,
        image: "",
    },
    {
        id: 21,
        name: "Mai Tai",
        ingredients: ["1 1/2 oz white rum", "1/2 oz dark rum", "1/2 oz orange curaçao", "3/4 oz lime juice", "1/2 oz Orgeat syrup", "Pineapple spear", "Mint sprig"],
        directions: {
            step1: "Fill a shaker with ice cubes.",
            step2: "Add white rum, dark rum, orange curaçao, lime juice, and Orgeat syrup to the shaker.",
            step3: "Shake well and strain into a rocks glass filled with crushed ice.",
            step4: "Garnish with a pineapple spear and mint sprig.",
        },
        alcoholic: true,
        isFavorite: false,
        image: "",
    },
    {
        id: 22,
        name: "Hurricane",
        ingredients: ["2 oz light rum", "2 oz dark rum", "1 oz lime juice", "1 oz orange juice", "2 oz passion fruit juice", "1/4 oz simple syrup", "1/4 oz grenadine", "Orange slice", "Cherry"],
        directions: {
            step1: "Fill a shaker with ice cubes.",
            step2: "Add light rum, dark rum, lime juice, orange juice, passion fruit juice, simple syrup, and grenadine to the shaker.",
            step3: "Shake well and strain into a hurricane glass filled with ice cubes.",
            step4: "Garnish with an orange slice and cherry.",
        },
        alcoholic: true,
        isFavorite: false,
        image: "",
    },
    {
        id: 23,
        name: "Screwdriver",
        ingredients: ["1 1/2 oz vodka", "4 oz orange juice", "Orange slice"],
        directions: {
            step1: "Fill a highball glass with ice cubes.",
            step2: "Pour vodka and orange juice over ice.",
            step3: "Stir gently and garnish with an orange slice.",
        },
        alcoholic: true,
        isFavorite: false,
        image: "",
    },
    {
        id: 24,
        name: "Rum and Coke",
        ingredients: ["2 oz rum", "Coca-Cola", "Lime wedge"],
        directions: {
            step1: "Fill a highball glass with ice cubes.",
            step2: "Pour rum over ice and top with Coca-Cola.",
            step3: "Stir gently and garnish with a lime wedge.",
        },
        alcoholic: true,
        isFavorite: false,
        image: "",
    },
    {
        id: 25,
        name: "Mai Tai",
        ingredients: ["1 1/2 oz white rum", "1/2 oz dark rum", "1/2 oz orange curaçao", "3/4 oz lime juice", "1/2 oz Orgeat syrup", "Pineapple spear", "Mint sprig"],
        directions: {
            step1: "Fill a shaker with ice cubes.",
            step2: "Add white rum, dark rum, orange curaçao, lime juice, and Orgeat syrup to the shaker.",
            step3: "Shake well and strain into a rocks glass filled with crushed ice.",
            step4: "Garnish with a pineapple spear and mint sprig.",
        },
        alcoholic: true,
        isFavorite: false,
        image: "",
    },
    {
        id: 26,
        name: "Piña Colada",
        ingredients: ["2 oz white rum", "4 oz pineapple juice", "2 oz coconut cream", "Pineapple slice", "Maraschino cherry"],
        directions: {
            step1: "Blend rum, pineapple juice, and coconut cream with ice until smooth.",
            step2: "Pour into a chilled glass.",
            step3: "Garnish with a pineapple slice and maraschino cherry.",
        },
        alcoholic: true,
        isFavorite: false,
        image: "",
    },
    {
        id: 27,
        name: "Paloma",
        ingredients: ["2 oz tequila", "1/2 oz lime juice", "Grapefruit soda", "Lime wedge", "Salt for rim"],
        directions: {
            step1: "Rim a highball glass with salt.",
            step2: "Fill the glass with ice cubes.",
            step3: "Add tequila and lime juice to the glass.",
            step4: "Top with grapefruit soda and stir gently.",
            step5: "Garnish with a lime wedge.",
        },
        alcoholic: true,
        isFavorite: false,
        image: "",
    },
    {
        id: 28,
        name: "Mint Julep",
        ingredients: ["2 oz bourbon", "1/2 oz simple syrup", "6-8 fresh mint leaves", "Crushed ice", "Mint sprig"],
        directions: {
            step1: "In a glass or silver julep cup, muddle mint leaves and simple syrup.",
            step2: "Fill the glass with crushed ice and pour bourbon over the ice.",
            step3: "Stir well and garnish with a mint sprig.",
        },
        alcoholic: true,
        isFavorite: false,
        image: "",
    },
    {
        id: 29,
        name: "Irish Coffee",
        ingredients: ["1 1/2 oz Irish whiskey", "Hot coffee", "Whipped cream"],
        directions: {
            step1: "Preheat a glass with hot water, then discard the water.",
            step2: "Add Irish whiskey to the warmed glass.",
            step3: "Fill the glass with hot coffee.",
            step4: "Top with whipped cream.",
        },
        alcoholic: true,
        isFavorite: false,
        image: "",
    },
    {
        id: 30,
        name: "Mint Julep",
        ingredients: ["2 oz bourbon", "1/2 oz simple syrup", "6-8 fresh mint leaves", "Crushed ice", "Mint sprig"],
        directions: {
            step1: "In a glass or silver julep cup, muddle mint leaves and simple syrup.",
            step2: "Fill the glass with crushed ice and pour bourbon over the ice.",
            step3: "Stir well and garnish with a mint sprig.",
        },
        alcoholic: true,
        isFavorite: false,
        image: "",
    },
];

const drinkNames = mixedDrinkRecipes.map((drink) => drink.name)

// names only:
// [
//     'Mojito',          'Gin and Tonic',
//     'Bloody Mary',     'Martini',
//     'Cosmopolitan',    'Long Island Iced Tea',
//     'Margarita',       'Old Fashioned',
//     'Pina Colada',     'Sex on the Beach',
//     'Whiskey Sour',    'White Russian',
//     'Negroni',         'Daiquiri',
//     'Singapore Sling', 'Manhattan',
//     'Tequila Sunrise', 'Tom Collins',
//     'Blue Lagoon',     'Pisco Sour',
//     'Mai Tai',         'Hurricane',
//     'Screwdriver',     'Rum and Coke',
//     'Mai Tai',         'Piña Colada',
//     'Paloma',          'Mint Julep',
//     'Irish Coffee',    'Mint Julep'
//   ]
// console.log(drinkNames)

module.exports = mixedDrinkRecipes;