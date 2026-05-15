// api/enso.js
export default async function handler(req, res) {
  try {
    // Example: fetch from a real ENSO data source
    // You can replace this URL with your actual data source
    const response = await fetch("https://your-live-oni-source.com/latest.json");
    const data = await response.json();

    const oni = parseFloat(data.oni); // ensure it’s a number

    res.status(200).json({ oni });
  } catch (error) {
    console.error("Error fetching ONI:", error);
    // Fallback to last known value if live fetch fails
    res.status(200).json({ oni: 0.85 });
  }
}
