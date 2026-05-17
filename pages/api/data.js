export default async function handler(req, res) {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbxtFrlRNMv0dTIy1KfUm0N0COnhUZ1gEJTSyq1pNpFlKNI7qVWO8QE1WOMm9tmuCYBh/exec"
  );

  const data = await response.json();

  res.status(200).json(data);
}
