import React from 'react';

class Esone extends React.Component {
    constructor(name = 'Anonyumus', age=0){
      super();
      this.name = name;
      this.age = age;
    }

    getGreetings = () => {
        return `Hi I am ${this.name}!`;
    }
    getDescription = () =>{
        return `${this.name} is ${this.age} Years Old.`;

    }
   
    render(){
        const me = new Esone ('Vishal Mule', 26);
        console.log(me.getDescription());

        const description = new Esone();
        console.log(description.getDescription())

        return (
            <div>
                dvcfd
            </div>
        )
    }

}
export default Esone;