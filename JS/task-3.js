function sortByDescendingFriendCount(users) {
    for (let i = 0; i < users.length; i++) {
        for (let j = i + 1; j < users.length; j++) {
            if (users[i].friends.length < users[j].friends.length) {
                let temp = users[i];
                users[i] = users[j];
                users[j] = temp;
            }
        }
    }
    return users;
}

const Users = [
    {
        name: "Moore Hensley",
        friends: ["Sharron Pace"],
        gender: "male",
    },
    {
        name: "Sharlene Bush",
        friends: ["Briana Decker", "Sharron Pace"],
        gender: "female",
    },
    {
        name: "Ross Vazquez",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        gender: "male",
    },
    {
        name: "Elma Head",
        friends: ["Goldie Gentry", "Aisha Tran"],
        gender: "female",
    },
    {
        name: "Carey Barr",
        friends: ["Jordan Sampson", "Eddie Strong"],
        gender: "male",
    },
    {
        name: "Blackburn Dotson",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        gender: "male",
    },
    {
        name: "Sheree Anthony",
        friends: ["Goldie Gentry", "Briana Decker"],
        gender: "female",
    }
];
console.log(sortByDescendingFriendCount(Users));