function getUsersWithFriend(users, friendName) {
    return users.filter(user => user.friends.includes(friendName));
}
const allUsers1 = [
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
console.log(getUsersWithFriend(allUsers1, "Briana Decker"));
/* [ // { name: "Sharlene Bush", friends: ["Briana Decker",
"Sharron Pace"] }, 
{ name: "Sheree Anthony", friends: ["Goldie Gentry", "Briana
Decker"] } // ]*/
console.log(getUsersWithFriend(allUsers1, "Goldie Gentry"));
/* [ // { name: "Elma Head", friends: ["Goldie Gentry", "Aisha
Tran"] }, 
{ name: "Sheree Anthony", friends: ["Goldie Gentry",
"Briana Decker"] } // ]*/
console.log(getUsersWithFriend(allUsers1, "Adrian Cross"));
// []