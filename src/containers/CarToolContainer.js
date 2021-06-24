import { useCarToolStoreContext } from '../contexts/carToolStoreContext';

import { ToolHeader } from '../components/ToolHeader';
import { CarTable } from '../components/CarTable';
import { CarForm } from '../components/CarForm';
import { ToolFooter } from '../components/ToolFooter';

export const CarToolContainer = () => {

  const { cars, carEditId, addCar, updateCar, deleteCar, editCar, cancelCar } = useCarToolStoreContext();

  console.log(cars);

  return (
    <>
      <ToolHeader toolTitle="Car Tool" />
      <CarTable carEdit={carEditId} cars={cars} onEditClick={editCar} onDeleteClick={deleteCar} onSaveClick={updateCar} onCancelClick={cancelCar} />
      <br/>
      <CarForm onSubmitForm={addCar} submitButtonLabel="Add Car"/>
      <br/>
      <ToolFooter />
    </>
  );

};
