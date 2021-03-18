int count1=0,N,dem=0,d=0;
void dequy(int i){
	if (dem<N/2){
		dem++;
		d++;
		dequy(i+1);
		dem--;
		d--;
	}
	if (d>0){
		if (i==N){
			count1++;
		}
		else{
			d--;
			dequy(i+1);
			d++;
		}
	}
}
int countRightBracket(int n)
{
    N=n;
    dequy(1);
    return count1;
}
