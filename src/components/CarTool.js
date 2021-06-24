import { useCarToolStore } from '../hooks/useCarToolStore';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';
import { ToolFooter } from './ToolFooter';

export const CarTool = ({ initialCars }) => {

  const { cars, carEditId, addCar, updateCar, deleteCar, editCar, cancelCar } = useCarToolStore([ ...initialCars ]);

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

CarTool.defaultProps = {
  initialCars: [
    { id: 1, carMake: "Toyota", carModel: "Avalon Limited Hybrid", carYear: "2019", carColor: "White", carPrice: "$45,000" },
    { id: 2, carMake: "Porche", carModel: "911 Spyder", carYear: "2021", carColor: "Navy", carPrice: "$150,000" },
  ],
};