const j = [
    {
        id: 'v'
    },
    {
        id: 'r'
    },
    // {
    //     id:2
    // },
    {
        id: 'b'
    },
    {
        id: 'd'
    }
]


function compareStrings(a, b) {
    // Assuming you want case-insensitive comparison
    a = a.toLowerCase();
    b = b.toLowerCase();

    return (a < b) ? -1 : (a > b) ? 1 : 0;
}

j.sort(function (a, b) {
    return compareStrings(a.id, b.id);
})


console.log(j)