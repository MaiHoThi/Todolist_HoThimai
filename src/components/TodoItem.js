import React, { Component } from 'react';
import classNames from 'classnames';
import flowerImage from '../img/flower.svg';
import flowerImageDone from '../img/flowerdone.svg';

class TodoItem extends Component {

    render() {
        // CSS line-through cho item
        const {item,onClick}=this.props;
        // let className='TodoItem';
        // if(item.isComplete){
        //     className+=' App-complete';
        // }
        // return ( <div className = "TodoItem " >
       let url=flowerImage;
       if(item.isComplete)
       {
           url = flowerImageDone;
       }
        return (
            // Handling events
             <div onClick={onClick} className = {classNames('TodoItem',{
                 'App-complete':item.isComplete
             })}>
                 <img src={url} width={32}/>
            <p> { this.props.item.title } </p> 
            </div >
        )
    }
}
export default TodoItem;