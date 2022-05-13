import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttpRequest from '../../hooks/useHttpRequest';

const NewTask = (props) => {
  

  const setValues = (taskText, data) => {
    console.log(data);
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);

  }
  const { isLoading, error, fetchOrGetData } = useHttpRequest();

  const handlerAddingTask = (taskText) => {
    const config = {
      url: 'https://customhook-7d8ba-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST',
      body: { text: taskText },
      headers: { 'Content-Type': 'application/json' },
    }
    fetchOrGetData(config, setValues.bind(null, taskText))
  }
  return (
    <Section>
      <TaskForm onEnterTask={handlerAddingTask} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
