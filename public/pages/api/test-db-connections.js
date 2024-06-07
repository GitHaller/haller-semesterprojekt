import clientPromise from '../../lib/mongodb';

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db();
    const collections = await db.listCollections().toArray();
    
    res.status(200).json({ message: 'Connection successful', collections });
  } catch (error) {
    res.status(500).json({ message: 'Connection failed', error: error.message });
  }
};
