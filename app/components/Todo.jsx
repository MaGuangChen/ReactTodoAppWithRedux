var React = require('react');
import moment from 'moment';//一個第三方套件，用來整理時間的
/*
性質：stateless component
負責工作：將收到的props object中的property變成jsx內的html tag
接收props：接收props從TodoList component
簡介：是指一項一項的待辦事項
*/
let Todo = React.createClass({
  render: function () {
    let {id, text,completed, createAt,completedAt} = this.props; 
    let renderDate = ()=>{
      let message = '建立時間 ';
      let timestamp = createAt;
      if(completed){//如果completed為true，則更新變數
        message = '完成時間';
        timestamp = completedAt;
      }
      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a'); 
    };
    //傳進來的object中的property
    return (
      <div onClick={()=>{
         this.props.onToggle(id);
      }}>
           <input type="checkbox" checked={completed}/>
           <p>{text}</p>
           <p>{renderDate()}</p>
      </div>
    )
  }
});

module.exports = Todo;
