// implementaion of queue data structure

class queues {
    constructor(){
        this.queue_data = []
    }

    get_queue_data (){
        console.log(this.queue_data)
    }

    add_item_to_queue (item){      
        
        this.queue_data.push(item)
    }

    remove_item_from_queue(){
        if(this.get_queue_data.length<1){
            console.log("No items in queue to be removed")
        }
        else{
         this.queue_data.shift()
        }
    }
}

// initializing queue

let queue = new queues()


// adding item to queue

queue.add_item_to_queue(1)
queue.add_item_to_queue(2)
queue.add_item_to_queue(3)

// print current state of queue after adding 1,2,3 the output will 1,2,3
queue.get_queue_data()


// remove item from queue

queue.remove_item_from_queue()


queue.get_queue_data()
// out put will 2,3

