import ButtonAddCars from "./components/ButtonAddCar/ButtonAddCar";

export default function CarsManagerPage() {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font">Manager your Cars</h2>
        <ButtonAddCars />
      </div>
    </div>
  );
}
