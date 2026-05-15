// api/enso.js
export default function handler(req, res) {
  // Put your correct ONI value here
  const oni = 0.5; // Example value, can change

  // Return the value as JSON
  res.status(200).json({ oni });
}

