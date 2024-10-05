import { API } from 'aws-amplify';
import { listRoyalties } from '../graphql/queries';
import { createRoyalty } from '../graphql/mutations';

export default function Royalties() {
  const [royaltyData, setRoyaltyData] = useState([]);

  useEffect(() => {
    fetchRoyalties();
  }, []);

  async function fetchRoyalties() {
    try {
      const royaltyData = await API.graphql({ query: listRoyalties });
      setRoyaltyData(royaltyData.data.listRoyalties.items);
    } catch (error) {
      console.error('Error fetching royalties:', error);
    }
  }

  async function simulateRoyaltyIncrease() {
    try {
      const newRoyalty = {
        amount: Math.floor(Math.random() * 100),
        source: 'Spotify',
        date: new Date().toISOString(),
      };
      await API.graphql({ 
        query: createRoyalty, 
        variables: { input: newRoyalty }
      });
      fetchRoyalties();
    } catch (error) {
      console.error('Error creating royalty:', error);
    }
  }

  // Rest of the component code...
}
