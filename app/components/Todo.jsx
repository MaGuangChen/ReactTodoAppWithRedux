var React = require('react');

/*
性質：stateless component
負責工作：將收到的props object中的property變成jsx內的html tag
接收props：接收props從TodoList component
簡介：是指一項一項的待辦事項
*/
let Todo = React.createClass({
  render: function () {
    let {id, text} = this.props; 
    //傳進來的object中的property
    return (
      <div>
           待辦事項id：{id}----{text}
      </div>
    )
  }
});

module.exports = Todo;
