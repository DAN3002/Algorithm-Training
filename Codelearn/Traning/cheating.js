function cheating(arr, need) {
	for(let i = 0; i <= arr[0]; i++) {
		for(let j = 0; j <= arr[1]; j++) {
			for(let k = 0; k <= arr[2]; k++) {
				for(let l = 0; l <= arr[3]; l++) {
					if(i * 20 + j * 50 + k * 100 + l * 200 == need) return 0;
				}
			}
		}
	}
	return need * 3;
}
