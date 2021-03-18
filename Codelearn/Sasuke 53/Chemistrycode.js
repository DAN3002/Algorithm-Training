function matter(s){
    const [start, end] = s.split('=')
                        .map(el => el.split('+'));
    if(!start || !end) return '';
    if(start.length > 1 && end.length > 1) return '';
 
    if(start.length == 1 && start[0].trim() !== '') return 'Phan ung phan huy';
    if(end.length == 1 && end[0].trim() !== '') return 'Phan ung hoa hop';
 
    return '';
}