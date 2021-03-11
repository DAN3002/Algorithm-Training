#include <bits/stdc++.h>
using namespace std;
typedef long long ll;

ll const field = 5ll * (1ll<<25ll) + 1; // needs to be prime
ll mow(ll n,ll k){return k? ((k&1? n:1) * mow((n*n)%field,k/2))%field: 1;}
ll mow2(ll n,ll k){return k>=0? mow(n,k): mow(n,(field-1)-(abs(k)%(field-1)));}

ll maxn;
ll base;
ll mown;
vector<int32_t> tmp;

auto get(int n){
  vector<int> res(n);
  for (auto &i: res){
    int steps;
    char dirn;
    assert(scanf(" %c", &dirn));
    if (dirn=='?') continue;
    assert(scanf(" %d",&steps));
    i=steps*4+(dirn=='n'?0:dirn=='e'?1:dirn=='s'?2:3);
  }
  return res;
}

void fnt(int32_t *v,int32_t n,int8_t dirn=+1,int32_t s=1,int32_t each=0){
  if (n<2) return;
  if (each==0) each=mow2(base,s*dirn); else each=(each*(ll)each)%field;

  fnt(v+0,n/2,dirn,s*2,each);
  fnt(v+s,n/2,dirn,s*2,each);

  for (int i=0,j=n/2; j<n; ++i,++j){
    tmp[i]=v[i*2*s+0];
    tmp[j]=v[i*2*s+s];
  }

  ll by=mown;
  for (int i=0,j=n/2; j<n; ++i,++j){
    v[i*s]=(tmp[i]+field+((tmp[j]*(    0+by))))%field;
    v[j*s]=(tmp[i]+field+((tmp[j]*(field-by))))%field;
    (by*=each)%=field;
  }
}

void convolve(int32_t *a,int32_t *b,ll n){
  if (true) fnt(a,n,+1);
  if (a!=b) fnt(b,n,+1);
  for (int i=n; i--;) a[i]=(a[i]*(ll)b[i])%field;
  fnt(a,n,-1);
  ll const maxinv=mow(maxn,field-2);
  for (int i=n; i--;) a[i]=(a[i]*maxinv)%field;
}

int init_nft(int n){
  maxn=2; while (maxn<n) maxn<<=1ll;
  base=mow(3ll, (field-1) / maxn);
  mown=mow(base,maxn);
  tmp.resize(maxn);
  return maxn;
}

int main(){
  int n1,n2; assert(scanf("%d%d",&n1,&n2));
  auto const a=get(n1),b=get(n2);
  int const k=8;

  vector<int> cost(n1-n2+1);

  // cost+=(a[i+j]!=0)*(b[j]!=0)
  {
    int const n=init_nft(n1);
    vector<int32_t> u(n),v(n);
    for (int i=0; i<n1; i++) u[i]=(a[i]!=0);
    for (int i=0; i<n2; i++) v[i]=(b[i]!=0);
    reverse(v.begin(),v.begin()+n2);
    convolve(&u[0],&v[0],n);
    for (int i=0; i<=n1-n2; i++)
      cost[i]+=u[i+n2-1]*k;
  }

  // cost[i]-=(a[i+j]==b[j] and a[i+j]!=0 and b[j]!=0);
  {
    int const n=init_nft(n1*k);
    vector<int32_t> u(n),v(n);
    for (int i=0; i<n1; i++)
      if (a[i]!=0)
        for (int j=0; j<k; j++)
          u[i*k+j]=(a[i]&(1<<j)?1:field-1);
    for (int i=0; i<n2; i++)
      if (b[i]!=0)
        for (int j=0; j<k; j++)
          v[i*k+j]=(b[i]&(1<<j)?1:field-1);
    reverse(v.begin(),v.begin()+n2*k);
    convolve(&u[0],&v[0],n);
    for (int i=0; i<=n1-n2; i++)
      cost[i]-=u[(i+n2)*k-1];
  }

  int res=0;
  for (int i=0; i<=n1-n2; i++){
    // res+=(cost[i]==0);
    // for (int j=0; j<n2; j++) cost[i]-=(a[i+j]==b[j] and a[i+j]!=0 and b[j]!=0)*k;
    if (cost[i]==0){
      ++res;
    }
  }
  cout<<res<<endl;
}
