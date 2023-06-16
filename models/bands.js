const Band = require("./band");

class Bands {
    constructor (){
        this.bands = [];
    }

    addband(band = new  Band()){
        return this.bands.push(band);
    }

    getbands(){
        console.log(this.bands);
        return this.bands;
    }

    deleteband( id = ''){
        this.bands = this.bands.filter(band => band.id !== id);
        return this.bands;
    }

    voteband(id = ''){
        this.bands = this.bands.map(
            band => {
                if(band.id == id){
                    band.votes++;
                    return band;
                }else{
                    return band;
                }
            }
        )

    }
}

module.exports = Bands;