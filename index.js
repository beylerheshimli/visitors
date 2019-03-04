

// Hansı otağa heç kimin giriş etmədiyini təyin edən ən optimal alqoritmi yazmağınız lazımdır.

const visitors = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Doctor Alex',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

var notEnteredRooms = [];
for (let i = 0; i < visitors.length; i++) {
    if (notEnteredRooms.length !== 1) {
        if (visitors[i]['rooms'].length > 0 && visitors[i]['present'] === true) {
            for (let j = 0; j < visitors[i]['rooms'].length; j++) {

                const room = visitors[i]['rooms'][j];
                const roomName = Object.keys(visitors[i]['rooms'][j])[0];
                const roomValue = room[roomName];

                if (i === 0) {
                    if (roomValue === false) notEnteredRooms.push(roomName);
                } else {

                    if (notEnteredRooms.indexOf(roomName) > -1)
                        if (roomValue === true) notEnteredRooms.splice(notEnteredRooms.indexOf(roomName), 1);
                }
            }
        }
    }
}
console.log(notEnteredRooms);

