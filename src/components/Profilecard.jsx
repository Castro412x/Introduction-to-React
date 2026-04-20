function ProfileCard() {
  const name = "Chukwuemeka Obi";
  const course = "Frontend Engineering";
  const city = "Aba";
  const tuitionPaid = 150000;

  return (
    <div className="bg-white shadow-md rounded-lg p-10 max-w-sm">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700">Course: {course}</p>
      <p className="text-gray-700">City: {city}</p>
      <p className="text-gray-900 font-semibold mt-2">
        Tuition Paid: ₦{tuitionPaid.toLocaleString()}
      </p>
    </div>
  );
}

export default ProfileCard;