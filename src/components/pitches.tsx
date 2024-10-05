import { Storage, API, Predictions } from 'aws-amplify';
import { createPitch } from '../graphql/mutations';
import { listPitches } from '../graphql/queries';

export default function Pitches() {
  const [pitches, setPitches] = useState([]);

  useEffect(() => {
    fetchPitches();
  }, []);

  async function fetchPitches() {
    try {
      const pitchData = await API.graphql({ query: listPitches });
      setPitches(pitchData.data.listPitches.items);
    } catch (error) {
      console.error('Error fetching pitches:', error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // Upload pitch file
      const file = e.target.pitchFile.files[0];
      const fileName = `pitches/${Date.now()}-${file.name}`;
      await Storage.put(fileName, file, {
        contentType: file.type
      });

      // Analyze pitch description
      const { text } = await Predictions.interpret({
        text: {
          source: {
            text: newPitch.description
          },
          type: "ALL"
        }
      });

      // Create pitch in database
      const newPitch = {
        title: e.target.title.value,
        description: e.target.description.value,
        audioFileUrl: fileName,
        status: 'PENDING',
        submissionDate: new Date().toISOString(),
      };
      await API.graphql({ 
        query: createPitch, 
        variables: { input: newPitch }
      });

      fetchPitches();
    } catch (error) {
      console.error('Error submitting pitch:', error);
    }
  }

  // Rest of the component code...
}
