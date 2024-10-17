function getUsersWithFriend(users, friendName) {
    const result = [];
    for (const user of users) {
        for (let i = 0; i < user.friends.length; i++) {
            if (user.friends[i] === friendName) {
                result.push(user);
                break;
            }
        }
    }
    return result;
}
const allUsers = [
    {
        name: "Moore Hensley",
        friends: ["Sharron Pace"],
    },
    {
        name: "Sharlene Bush",
        friends: ["Briana Decker", "Sharron Pace"]
    },
    {
        name: "Ross Vazquez",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    },
    {
        name: "Elma Head",
        friends: ["Goldie Gentry", "Aisha Tran"],
    },
    {
        name: "Carey Barr",
        friends: ["Jordan Sampson", "Eddie Strong"],
    },
    {
        name: "Blackburn Dotson",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
    },
    {
        name: "Sheree Anthony",
        friends: ["Goldie Gentry", "Briana Decker"],
    }
];
console.log(getUsersWithFriend(allUsers, "Briana Decker"));
/* [ // { name: "Sharlene Bush", friends: ["Briana Decker",
"Sharron Pace"] }, 
{ name: "Sheree Anthony", friends: ["Goldie Gentry", "Briana
Decker"] } // ]*/
console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
/* [ // { name: "Elma Head", friends: ["Goldie Gentry", "Aisha
Tran"] }, 
{ name: "Sheree Anthony", friends: ["Goldie Gentry",
"Briana Decker"] } // ]*/
console.log(getUsersWithFriend(allUsers, "Adrian Cross"));
// []