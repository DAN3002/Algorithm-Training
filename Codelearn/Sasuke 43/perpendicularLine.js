function perpendicularLine(arr) {
   const [A, B, C, D] = arr;

   let AB = [B[0] - A[0], B[1] - A[1]];
   let CD = [D[0] - C[0], D[1] - C[1]];

   AB = beautyLine(AB);

   const newPoint1 = beautyLine([-CD[1], CD[0]]);
   const newPoint2 = beautyLine([CD[1], -CD[0]]);

   return compare(AB, newPoint1) || compare(AB, newPoint2);
}

function compare(line1, line2){
   return line1.every((el, index) => el == line2[index]);
}

function beautyLine(line) {
   const gcd = GCD(line[0], line[1]);

   return line.map(el => el / gcd);
}

function GCD(a,b){
   return !b  ? a : GCD(b, a%b);
}
