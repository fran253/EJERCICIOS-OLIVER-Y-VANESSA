function pingPong() {
    numMax = 100;
    for (let index = 1; index <= numMax; index++) {
        if (index % 10 == 0) {
            console.log('PONG')
            
        }
        else if (index % 5 == 0) 
        {
            console.log('PING')
        }
        else
        {
            console.log(index)
        }
        
        
    }

}
