const data = [
    { 
      src: 'https://picsum.photos/200/150?random=1',
      id: 1,
      first_name: "Sophronia",
      last_name: "Stoddart",
      email: "sstoddart0@howstuffworks.com",
      gender: "Female",
      ip_address: "80.215.124.45",
    },
    { 
      src: 'https://picsum.photos/200/150?random=2',
      id: 2,
      first_name: "Elie",
      last_name: "Ashenhurst",
      email: "eashenhurst1@ameblo.jp",
      gender: "Female",
      ip_address: "68.37.253.68",
    },
    { 
      src: 'https://picsum.photos/200/150?random=3',
      id: 3,
      first_name: "Elianore",
      last_name: "Eaddy",
      email: "eeaddy2@chronoengine.com",
      gender: "Female",
      ip_address: "67.148.137.105",
    },
    { 
      src: 'https://picsum.photos/200/150?random=4',
      id: 4,
      first_name: "Brittne",
      last_name: "Heditch",
      email: "bheditch3@businessweek.com",
      gender: "Female",
      ip_address: "100.224.120.91",
    },
    { 
      src: 'https://picsum.photos/200/150?random=5',
      id: 5,
      first_name: "Harman",
      last_name: "Mashal",
      email: "hmashal4@sakura.ne.jp",
      gender: "Male",
      ip_address: "135.116.148.60",
    },
    { 
      src: 'https://picsum.photos/200/150?random=6',
      id: 6,
      first_name: "Flore",
      last_name: "Zappel",
      email: "fzappel5@tripod.com",
      gender: "Female",
      ip_address: "78.191.118.28",
    },
    { 
      src: 'https://picsum.photos/200/150?random=7',
      id: 7,
      first_name: "Angelina",
      last_name: "Manneville",
      email: "amanneville6@lycos.com",
      gender: "Bigender",
      ip_address: "176.253.242.10",
    },
    { 
      src: 'https://picsum.photos/200/150?random=8',
      id: 8,
      first_name: "Merilyn",
      last_name: "Marusik",
      email: "mmarusik7@1und1.de",
      gender: "Female",
      ip_address: "221.137.214.47",
    },
    { 
      src: 'https://picsum.photos/200/150?random=9',
      id: 9,
      first_name: "Jeddy",
      last_name: "Brunn",
      email: "jbrunn8@umn.edu",
      gender: "Male",
      ip_address: "9.189.41.129",
    },
    { 
      src: 'https://picsum.photos/200/150?random=10',
      id: 10,
      first_name: "Kilian",
      last_name: "Chadderton",
      email: "kchadderton9@wix.com",
      gender: "Male",
      ip_address: "177.47.251.168",
    },
    { 
      src: 'https://picsum.photos/200/150?random=11',
      id: 11,
      first_name: "Kilian",
      last_name: "Chadderton",
      email: "kchadderton9@wix.com",
      gender: "Male",
      ip_address: "177.47.251.168",
    },
    { 
        src: 'https://picsum.photos/200/150?random=12',
        id: 11,
        first_name: "Kilian",
        last_name: "Chadderton",
        email: "kchadderton9@wix.com",
        gender: "Male",
        ip_address: "177.47.251.168",
      },
  ];

const ul = document.querySelector('ul')
const ulContent = document.createDocumentFragment(' ')

function userFunction (tagName, className){
    var tagName = document.createElement(tagName)
    tagName.className = (className)
    return tagName
}

function cardText (forText,data){
    forText.textContent = (data)
    return forText
}


for(let i = 0;i <= data.length -1; i++ ) {
  const userItem = userFunction(`li`, ` card d-inline-block col-12 col-lg-4 col-md-6 col-xl-3 px-2'`);
  const userContent = userFunction(`div`, `card-body`);
  const userimg = userFunction(`img`, `card-img`);
  userimg.src = data[i].src;
  const userName = userFunction(`h3`,`h5 mt-3`);
  cardText(userName,[data[i].first_name + " "+ data[i].last_name]);
  const userEmail = userFunction(`a`,`h5 mt-3`);
  cardText(userEmail,data[i].email);;
  const userGender = userFunction(`p`, `h6`);
  cardText(userGender,data[i].gender)
  const userIpAdres = userFunction(`p`, `text-bg-info rounded text-white ps-2`)
  cardText(userIpAdres,data[i].ip_address)
  userContent.append(userimg,userName,userEmail,userGender,userIpAdres)
  userItem.append(userContent)
  ulContent.append(userItem)
  ul.append(ulContent)
}


