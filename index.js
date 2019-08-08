// require users json
const users = [
    {
      "id": 1,
      "first_name": "Raul",
      "last_name": "Wynter",
      "email": "rwynter0@google.com"
    },
    {
      "id": 2,
      "first_name": "Demetri",
      "last_name": "Dakin",
      "email": "ddakin1@google.com"
    },
    {
      "id": 3,
      "first_name": "Lira",
      "last_name": "Collishaw",
      "email": "lcollishaw2@google.com"
    },
    {
      "id": 4,
      "first_name": "Jennette",
      "last_name": "O'Brollachain",
      "email": "jobrollachain3@msn.com"
    },
    {
      "id": 5,
      "first_name": "Annaliese",
      "last_name": "Marishenko",
      "email": "amarishenko4@msn.com"
    },
    {
      "id": 6,
      "first_name": "Delano",
      "last_name": "Millins",
      "email": "dmillins5@yahoo.com"
    },
    {
      "id": 7,
      "first_name": "Allister",
      "last_name": "Rizzetti",
      "email": "arizzetti6@yahoo.com"
    },
    {
      "id": 8,
      "first_name": "Yul",
      "last_name": "Slite",
      "email": "yslite7@yahoo.com"
    },
    {
      "id": 9,
      "first_name": "Stu",
      "last_name": "Liveing",
      "email": "sliveing8@devmountain.com"
    },
    {
      "id": 10,
      "first_name": "Carla",
      "last_name": "Gisbye",
      "email": "cgisbye9@devmountain.com"
    }
  ];



/* Execute This Script Using NODE In The Terminal */

// 1. Console Log The Users Array
console.log(users);

// 2. Write A Function To Return All Users
const allUsers = () => {
    return users;
};

// 3. Write A Function To Return A User Matching A Passed ID
const matchingId = (id) => {
    const filteredUsers = users.filter(user => user.id === id);
    return filteredUsers[0];
};

// 4. Write A Function To Return A User Matching A Passed In Email
const matchingEmail = (email) => {
    const filteredUsers = users.filter(user => user.email === email);
    return filteredUsers[0];
};

// 5. Write A Function That Returns All Users With A Gmail Account
const gmailAccounts = () => {
    const googleUsers = users.filter(user => user.email.endsWith('google.com'))
    return googleUsers;
};

/* Now Split This Code Into Seperate Files */