import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import tick from './img/tick.svg';
import tickAll from './img/tick-all.svg';
class App extends Component {
  constructor()
  {
      super();
      this.state = {
        newItem: '',
        currentFilter: 'all',
        list_todoItem: [
          { title: '1h -> 11h: Learn Laravel and project', isComplete: false },
          { title: '11h30 -> 13h: Eat Lunch and Snap', isComplete: false },
          { title: '13h -> 17h: Learn Reactjs', isComplete: false }, 
        ],
      }
      // this.onEnter = this.onEnter.bind(this);
      // this.onChange = this.onChange.bind(this);
  }

  onHandelClick(item)
  {
    // console.log(item);
    return () => {
      const { list_todoItem } = this.state;
      const { isComplete } = item.isComplete;
      const index = list_todoItem.indexOf(item);
      this.setState({
        newItem: '',
        list_todoItem: [
          ...list_todoItem.slice(0, index),
          {
            ...item,
            isComplete: !isComplete,
          },
          ...list_todoItem.slice(index+1),
        ]
      })
    }
  }

  onKeyUp = (event) => {
    if(event.keyCode === 13) {
      //enter key
      let text = event.target.value;
      if(!text) return;
  
      text =text.trim();
      if(!text) return;
      
      this.setState({
        newItem: '',
        list_todoItem: [
          { title: text, isComplete: false },
          ...this.state.list_todoItem,
        ]
      });
    }
  }

  onChange = (event) => {
    this.setState({
      newItem: event.target.value,
    });
  }

  render() {
    const { list_todoItem, newItem } = this.state;
    let choose = tick;
    return (
      <div className="App">
        <header className="App-header">  
          <div className="header-content">
            <img src={choose} width="30px"/>
            <input type="text" value={newItem} onChange={this.onChange}  onKeyUp={this.onKeyUp} placeholder="Nhập mới"/>
          </div>
          <div className="list-todo">
            { 
              list_todoItem.length > 0 && list_todoItem.map((item, index) => 
                <TodoItem key={index} item={item} onClick={this.onHandelClick(item)}></TodoItem>
              )
            }
            { list_todoItem.length === 0 && 'Hãy thêm mục cần làm của bạn!!' }
          </div>
        </header>
      </div>
    );
  }
}

export default App;
