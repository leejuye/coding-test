const users = new Map();
const logs = [];

function solution(record) {
    const recordResult = [];
    let move, uid, userName;
    
    record.forEach( r =>{
        [move, uid, userName] = r.split(' ');
        
        switch(move) {
            case 'Enter':
                setUserName(uid, userName);
                enterUser(uid);
                break;
            case 'Leave':
                leaveUser(uid);
                break;
            case 'Change':
                setUserName(uid, userName);
                break;
            default:
                break;
        }
    });
    
    return logs.map(log=>(users.get(log.uid) + log.account));
}

function setUserName(uid, newName) {
    users.set(uid, newName);
}

function enterUser(uid) {
    logs.push({ uid: uid, account: '님이 들어왔습니다.' });
}

function leaveUser(uid) {
    logs.push({ uid: uid, account: '님이 나갔습니다.' });
}
