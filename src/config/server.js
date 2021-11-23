class Server {
    #http;
    constructor (http){
        this.#http = http;
    }
    middlewares(middlewares){

        for(const key in middlewares)
        this.#http.use(middlewares[key]);
    }
    routres(routres){
        for (const path in routres){
            this.#http.use(path, routres[path]);
        }
        
    }
    errorHandler(errorHandler){
        this.#http.use(errorHandler)
        
    }

    start(port){
        this.#http.listen( port, () => {
            console.log('the server is runing ' + port);
        })
    }


}

export default Server;