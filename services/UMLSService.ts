import { UMLS_API_KEY } from '@env';

export async function getDisplayNames(apikey: string) {
    try {
        const response = await fetch(`https://rxnav.nlm.nih.gov/REST/displaynames.json?apiKey=${apikey}`);
        if (!response.ok) {
            throw new Error('Failed to fetch display names');
        }
        const data = await response.json();
        console.log('Connected to UMLS');
        // console.log(data);
        return data.displayTermsList?.term || []; // This should contain the display names array
    } catch (error) {
        console.error(error);
        return [];
    }
}
