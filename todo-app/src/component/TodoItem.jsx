function TodoItem({todoName, todoDate,onDeleteClick}){
  
    return(
      <div className="container ">
      <div className="row am-row">
        <div className="col-sm-6">{todoName}</div>
        <div className="col-sm-4">{todoDate}</div>
        <div className="col-sm-2">
          <button type="button" className="btn btn-danger am-button"
          onClick={() => onDeleteClick(todoName)}>Delete</button>
        </div>
      </div>
      </div>  
    );

}
export default TodoItem;