var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'vik'
    };
    
    setTimeout(() => {
        callback(user);
    }, 300);
};

getUser(21, (user) => {
    console.log(user);
});

