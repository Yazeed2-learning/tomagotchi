class Tomagatchi {
    constructor(name, age) {
        this.name = name
        this.hunger = 0
        this.boredom = 0
        this.sleepnes = 0
        this.age = age



    }


    addAge() {
        this.age++
    }
    hung() {
        this.hunger -= 1
        if(this.hunger >= 10){
            alert('died of hunger')
            // location.reload()
        }
    }
    feed() {
        this.hunger += 1
    }
    lightsOn() {
        this.sleepnes += 1
    }
    lightsOff() {
        this.sleepnes -= 1
        if(this.sleepnes >= 10){
            alert('died of sleepnes')
            // location.reload()
        }
    }
    play() {
        this.boredom += 1
    }
    bored() {
        this.boredom -= 1
        if(this.boredom >= 10){
            alert('died of bored')
            // location.reload()
        }
    }

}



let tomagatchi = new Tomagatchi('fon6ol')
setInterval(() => {
    tomagatchi.addAge()
}, 60 * 1000);


setInterval(() => {
    tomagatchi.hung()
    tomagatchi.bored()
    tomagatchi.lightsOff()



}, 30 * 1000);