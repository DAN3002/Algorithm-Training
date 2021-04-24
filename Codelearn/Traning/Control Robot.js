function controlRobot(start,directions){
    const map = ['B', 'DB', 'D', 'DN', 'N', 'TN', 'T', 'TB'];

    let index = map.indexOf(start);

    for(const i of [...directions]) {
        index = index + (i === 'P' ? 1 : -1);
        if(index === -1) {
            index = map.length - 1;
        }
        if(index === map.length) {
            index = 0;
        }
    }

    return map[index];
