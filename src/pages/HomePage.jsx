import { getApi, postApi, putApi, deleteApi } from '../utils/api';

const HomePage = () => {
  const getData = async () => {
    console.log(await getApi('/users'));
  };
  const createData = async () => {
    console.log(
      await postApi('/users', {
        name: 'Hello',
        surname: 'World',
        gender: 'female',
        email: 'email@mail.com',
        phoneNumber: '0855555555',
      })
    );
  };
  const editData = async () => {
    console.log(
      await putApi('/users', {
        no: 1,
        name: 'Hello2',
        surname: 'World',
        gender: 'female',
        email: 'email@mail.com',
        phoneNumber: '0855555555',
      })
    );
  };
  const removeData = async () => {
    console.log(
      await deleteApi('/users/1')
    );
  };
  return (
    <div className="flex flex-col">
      <span onClick={getData}>Get</span>
      <span onClick={createData}>Create</span>
      <span onClick={editData}>Edit</span>
      <span onClick={removeData}>Delate</span>
    </div>
  );
};

export default HomePage;
