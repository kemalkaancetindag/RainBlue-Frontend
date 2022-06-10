export function compare( a, b ) {
    if ( a.activeUsers < b.activeUsers ){
      return 1;
    }
    if ( a.activeUsers > b.activeUsers ){
      return -1;
    }
    return 0;
}
  