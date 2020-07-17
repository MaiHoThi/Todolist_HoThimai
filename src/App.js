import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import tick from './img/tick.svg';
class App extends Component {
    constructor()
    {
        super();
        // c1
        // this.TodoItem=[
            // c2
            this.state={
                newItem: '',
                currentFilter:'all',//'all','active','completed'
                todoItems:[
            // Cách 3 tạo mảng
            {title:'Hoa Anh Đào', isComplete:true},
            {title:'Hoa Hồng',isComplete:true},
            {title:'Hoa Tulipe'}
            // 'Hoa Anh Đào',
            // 'Hoa Hồng',
            // 'Hoa Tulip' =>Cách 2 tạo dữ liệu array
        ]
        // Kế thưa TodoItem và tạo một mảng data       
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
}
    onItemClicked(item)
    {
    return (event)=>{
        // console.log('Item clicked',item); 
        const isComplete =item.isComplete;
        const {todoItems}=this.state;
        const index = todoItems.indexOf(item);
        this.setState(
            {
                todoItems: [
                    ...todoItems.slice(0,index),
                    {
                        ...item,
                        isComplete: !isComplete
                    },
                    ...todoItems.slice(index+1)

                ]
            });
    }
    }

    onKeyUp(event)
    {
        if(event.keyCode===13)
        {//enter key
            let text = event.target.value;
        // console.log(event.keyCode)
                // console.log(event.target.value);
            if(!text || text === ''){
                return;
            }
            text = text.trim();
            if(!text){return;}

        this.setState({
            newItem: '',
            todoItems:[
                {title: text,isComplete:false},
                ...this.state.todoItems//Cập nhật mới todoItems
            ]
        });
    }
}

onChange(event)
{
    this.setState({
        newItem: event.target.value
    });
}
    render() {

        // Cách 1: thông báo nếu trong mảng có đọ dài lớn hơn ko
        // if(this.TodoItem.length>0)
        // {
            const{ todoItems,newItem }=this.state;
            if(todoItems.length){
        return ( 
        <div className = "App" >
            <div className="Header">
            <img src={tick} width={32} height={32} />
            <input type="text" 
            value={newItem} 
            onChange={this.onChange}
            placeholder="Add a new item"
              onKeyUp={this.onKeyUp}/>
            </div>
            {
                // Cách 2: To show data
                // this.TodoItem.map((item,index)=><TodoItem key={index} title={item}/>)
                // Cách 3: To show data
                // Cách 2: thông báo nếu trong mảng có đọ dài lớn hơn ko
            //    this.TodoItem.length >0 && this.TodoItem.map((item,index)=><TodoItem key={index} item={item}/>)

            // Handing event
            todoItems.length && todoItems.map((item,index)=>
                <TodoItem 
                key={index} 
                item={item} 
                onClick={this.onItemClicked(item)} />
                )
                }

            
           
                {/* Show message c2
             this.TodoItem.length === 0 && 'h1 Nothing here'

            
             <TodoItem title = "Hoa anh đào" />
            <TodoItem title = "Hoa hồng" />
            <TodoItem title = "Hoa Tulip" /> =>Cách 1 để show data  */}
             </div>
        );
   
        // =>show message c1
        }else{
            return(
        <div className = "App" ><h1>Nothing here</h1></div>
            ); 
        }
    }
}

export default App;