export default async function handler(req, res) {
  try {
    const url = "https://psl.noaa.gov/data/correlation/oni.data";

    const response = await fetch(url);
    const text = await response.text();

    const lines = text.trim().split("\n");
    const lastLine = lines[lines.length - 1];

    const parts = lastLine.trim().split(/\s+/);
    const oni = parseFloat(parts[parts.length - 1]);

    res.status(200).json({ oni });

  } catch (err) {
    res.status(500).json({ error: "Failed to fetch NOAA data" });
  }
}
