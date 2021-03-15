string update(string board) {        
    int i = 0;            
    while (i < board.size()) {
        int j = i;
        while (j < board.size() && board[i] == board[j]) ++j;
        if (j - i >= 3) {
            board = board.substr(0, i) + board.substr(j);
            i = 0;
        } else {
            ++i;
        }
    }
    return board;
} 
int dfs(const string& board, vector<int>& hand) {        
    if (board.empty()) return 0;
    
    int ans = INT_MAX;
    int i = 0;
    int j = 0;
    while (i < board.size()) {
        while (j < board.size() && board[i] == board[j]) ++j;            
        // board[i] ~ board[j - 1] have the same color
        const char color = board[i];
        // Number of balls needed to clear board[i] ~ board[j - 1]
        const int b = 3 - (j - i);
        // Have sufficient balls in hand
        if (hand[color] >= b) {