import Clients from '../components/Clients';
import Project from '../components/Project';
import AddClientModal from '../components/addClientModal';
import AddProjectModal from '../components/AddProjectModal';

export default function Home() {
  return (
    <>
      <div className='d-flex gap-3 mb-4'>
        <AddClientModal />
        <AddProjectModal />
      </div>
      <Project />
      <hr />
      <Clients />
    </>
  );
}