export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { mac, logs } = req.body;  // Extract device MAC address and logs
  
      // Here, you can process the logs as needed, for example:
      console.log(`Received logs from MAC: ${mac}`);
      console.log(`Logs: ${logs}`);
  
      // Respond with success
      return res.status(200).json({ message: 'Logs received successfully' });
    } else {
      // Handle other HTTP methods (e.g., GET)
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  