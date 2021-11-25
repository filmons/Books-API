class Server {
    #http;
    // #middlewares;
    // #routre;
    
    constructor (http){
        this.#http = http;
        // this.#middlewares = middlewares;
        // this.#routre = routre;
    }
    middlewares(middlewares){

        for(const key in middlewares)
        this.#http.use(middlewares[key]);
    }
    routre(routre){
        for (const path in routre){
            this.#http.use(path, routre[path]);
        }
        
    }
    errorHandler(errorHandler){
        this.#http.use(errorHandler)
        
    }

    start(port){
        this.#http.listen( port, () => {
            console.log('Server is listening on port'  + port);
        })
    }


}

export default Server;