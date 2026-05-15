// api/enso.js
export default function handler(req, res) {
  // Set your current ONI value here
  const oni = 0.85; // Replace with your latest real value

  res.status(200).json({ oni });
}
