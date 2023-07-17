
const ToDo =(props) => {
    return <div>
        {props.todo.title}
        {props.todo.completed ? "Completed" : ""}
        </div>
}


const Todos =() => {

    const todo_list = [
        {
            title : "Go to the grocery store",
            completed: true,
        },
        {
            title : "Walk the dog",
            completed: false,
        },
        {
            title : "Feed the birds",
            completed: true,
        },
        {
            title : "Watch a movie",
            completed: false,
        }
    ]


  return (
    <div>
        {todo_list.map((todo) => 
            <ToDo todo = {todo} />
        )}
    </div>
  )
};

export default Todos;