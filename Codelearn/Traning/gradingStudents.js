function gradingStudents(grades){
    return grades.map(el => {
        if(el < 38) return el;
    })
        let other = Math.ceil(el / 5) * 5;
        if(other - el < 3) return other;
        return el;
}