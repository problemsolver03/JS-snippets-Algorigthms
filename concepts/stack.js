// simple implementation of stack using javascript

class stack {

    constructor(){
       this.stackData = []
    } 
    
    get_stack_data (){
     console.log(this.stackData)
    }

    add_items_to_stack(item){
        let data = [item,...this.stackData]
        this.stackData = data
    }

    remove_items_from_stack(item){
        this.stackData.shift()

    }

}

let stacks  = new stack();
stacks.add_items_to_stack(1)
stacks.add_items_to_stack(2)
stacks.add_items_to_stack(3)
stacks.get_stack_data() // will output 3,2,1
stacks.remove_items_from_stack() // will remove 3 since its on the top of the stack
stacks.get_stack_data() // will outut 2,1 since 3 is removed.

