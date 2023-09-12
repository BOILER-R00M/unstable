export const seedUsers = [
    {
        userDetails: {
            id: "U001",
            name: "Keino Chichester",
            username: "keinoc",
            email: "hello@keino.dev",
            city: "Brooklyn",
            state: "NY",
            createdAt: 122948585,
            displayImage: "https://www.wargamer.com/wp-content/sites/wargamer/2022/06/dnd-ai-player-eberron-robot-580x334.jpg",
        },
        social: {
            followers: [
                { id: "U002", name: "June Bug", username: "bugaboo" },
                { id: "U003", name: "Oof Magoo", username: "oofi" },
            ],
            following: [
                { id: "U002", name: "June Bug", username: "bugaboo" },
                { id: "U003", name: "Oof Magoo", username: "oofi" },
            ],
            messages: [
                { id: "U002", name: "June Bug", username: "bugaboo" },
                { id: "U003", name: "Oof Magoo", username: "oofi" },
            ],
        },
        games: [
            {
                platform: "unstablex",
                id: "unstablex001",
                name: "xyz adventure",
                createdAt: 23423412,
                createdBy: "U002",
                active: true,
                results: null,
            },
        ],
        stats: {}, // Stats go here, e.g., win/loss ratio, etc.
    },
    {
        userDetails: {
            id: "U005",
            name: "Nate",
            username: "Nate-chur-boy",
            email: "captain@fishyhero.dev",
            city: "Atlantic City",
            state: "NJ",
            createdAt: 987654321,
            displayImage: "https://www.wargamer.com/wp-content/sites/wargamer/2022/06/dnd-ai-player-eberron-robot-580x334.jpg",
        },
        social: {
            followers: [
                { id: "U001", name: "Keino Chichester", username: "keinoc" },
                { id: "U004", name: "Tony McStark", username: "IronMac" },
            ],
            following: [{ id: "U003", name: "Oof Magoo", username: "oofi" }],
            messages: [{ id: "U003", name: "Oof Magoo", username: "oofi" }],
        },
        games: [
            {
                platform: "unstableX",
                id: "deepseadive",
                name: "Fishy Quest",
                createdAt: 87654321,
                createdBy: "U004",
                active: true,
                results: null,
            },
        ],
        stats: {}, // Fishy stats go here
    },
    ////***
    // New User: U006 - Java the Hutt
    {
        userDetails: {
            id: "U006",
            name: "Chris",
            username: "The Deep",
            email: "java@huttcoffeeshop.dev",
            city: "Seattle",
            state: "WA",
            createdAt: 129876543,
            displayImage: "https://www.wargamer.com/wp-content/sites/wargamer/2022/06/dnd-ai-player-eberron-robot-580x334.jpg",
        },
        social: {
            followers: [],
            following: [],
            messages: [],
        },
        games: [],
        stats: {},
    },
    // New User: U007 - Elon Tusk
    {
        userDetails: {
            id: "U007",
            name: "Nikita",
            username: "Copy Ninja",
            email: "elon@spacex.dev",
            city: "Mars",
            state: "Space",
            createdAt: 135792468,
            displayImage: "https://www.wargamer.com/wp-content/sites/wargamer/2022/06/dnd-ai-player-eberron-robot-580x334.jpg",
        },
        social: {
            followers: [],
            following: [],
            messages: [],
        },
        games: [],
        stats: {},
    },
    // New User: U008 - Ada Lovelace
    {
        userDetails: {
            id: "U008",
            name: "Justin",
            username: "Beiber Fever",
            email: "ada@programming.dev",
            city: "London",
            state: "UK",
            createdAt: 141312111,
            displayImage: "https://www.wargamer.com/wp-content/sites/wargamer/2022/06/dnd-ai-player-eberron-robot-580x334.jpg",
        },
        social: {
            followers: [],
            following: [],
            messages: [],
        },
        games: [],
        stats: {},
    },
    // New User: U009 - Obi-Wan Codenobi
    {
        userDetails: {
            id: "U009",
            name: "Robert",
            username: "RoboCop",
            email: "obiwan@theforce.dev",
            city: "Tatooine",
            state: "Outer Rim",
            createdAt: 155423677,
            displayImage: "https://www.wargamer.com/wp-content/sites/wargamer/2022/06/dnd-ai-player-eberron-robot-580x334.jpg",
        },
        social: {
            followers: [],
            following: [],
            messages: [],
        },
        games: [],
        stats: {},
    },
];
