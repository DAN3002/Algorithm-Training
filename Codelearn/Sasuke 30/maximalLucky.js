function maximalLucky(l1,r1,t1,l2,r2,t2){
    let no1 = r1 - l1 + 1;
	let no2 = r2 - l2 + 1;
	let max = 0;
	let temp;
	if (t1 == t2) {
		let no = no1 > no2 ? no2 : no1;
		max = (no - Math.abs(l1 - l2)) > max ? (no - Math.abs(l1 - l2)) : max;
	}
	else if (t1 > t2) {
		let a = t1, d = t2;
		while (a % d != 0) {
			temp = a % d;
			a = d;
			d = temp;
		}
		if (d != 1) {
			temp = (l2 + t1 - l1) % d;
			if (!temp) {
				max = no1 > no2 ? no2 : no1;
			}
			else {
				if (no1 <= no2) {
					max = (no1 - temp) > max ? (no1 - temp) : max;
					if (d - temp < no2) {
						let temp1 = (no2 - d + temp) > no1 ? no1 : (no2 - d + temp);
						max = temp1 > max ? temp1 : max;
					}
				}
				else {
					let d1 = no1 - no2;
					if (temp <= d1) {
						max = no2;
					}
					else {
						max = (no2 - temp + d1) > max ? (no2 - temp + d1) : max;
					}
					if (d - temp < no2) {
						let temp1 = (no2 - d + temp) > no1 ? no1 : (no2 - d + temp);
						max = temp1 > max ? temp1 : max;
					}
				}
			}
		}
		else {
			let no = no1 > no2 ? no2 : no1;
			max = no;
		}
	}
	else {
		let a = t2, d = t1;
		while (a % d != 0) {
			temp = a % d;
			a = d;
			d = temp;
		}
		if (d != 1) {
			temp = (l1 + t2 - l2) % d;
			if (!temp) {
				max = no1 > no2 ? no2 : no1;
			}
			else {
				if (no2 <= no1) {
					max = (no2 - temp) > max ? (no2 - temp) : max;
					if (d - temp < no1) {
						let temp1 = (no1 - d + temp) > no2 ? no2 : (no1 - d + temp);
						max = temp1 > max ? temp1 : max;
					}
				}
				else {
					let d1 = no2 - no1;
					if (temp <= d1) {
						max = no1;
					}
					else {
						max = (no1 - temp + d1) > max ? (no1 - temp + d1) : max;
					}
					if (d - temp < no1) {
						let temp1 = (no1 - d + temp) > no2 ? no2 : (no1 - d + temp);
						max = temp1 > max ? temp1 : max;
					}
				}
			}
		}
		else {
			let no = no1 > no2 ? no2 : no1;
			max = no;
		}
	}
	return max;
}
