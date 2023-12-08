function getTimestamp(req,res,next) {

    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const time = `${hour}:${minute}`;
    
    // req.timeStamp = date.toLocaleString([],{hour: "2-digit",minute: "2-digit"});
    req.timeStamp = time;

    console.log(req.timeStamp);
    next();
}

// function sayHello(req,res,next) {
//     console.log('Hello')
//     next();
// }

module.exports = {
    getTimestamp: getTimestamp,
    // sayHello: sayHello
}