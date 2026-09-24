interface Task{
  id:string;
  title:string;
  state:"TASK_INBOX"|"TASK_PINNED"|"TASK_ARCHIVED";
}

interface TasksProps{
  task:Task;
}

export default function Tasks({task:{id,title,state}} : TasksProps) {
  return (
    <div>
      <label>
        <input id={`title-${id}`} name="title" value={title} readOnly={true}/>
      </label>
    </div>
  );
}
