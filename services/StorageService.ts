import AsyncStorage from '@react-native-async-storage/async-storage';
import { Medicine } from '../types';

// const MEDICINE_KEY = 'MEDICINES_KEY';

class StorageService{
  static async addMedicine(medicine: Medicine): Promise<void> {
    try{
      const storedMedicines = await this.getMedicines();
      storedMedicines.push(medicine);
      await AsyncStorage.setItem('medicines', JSON.stringify(storedMedicines));
    } catch(error) {
      console.error('Error saving medicines:', error);
    }
  }
  static async getMedicines(): Promise<Medicine[]> {
    try{
      const storedMedicines = await AsyncStorage.getItem('medicines');
      return storedMedicines ? JSON.parse(storedMedicines) : [];
    } catch(error) {
      console.error('Error retrieving medicines:', error);
      return [];
    }
  }
  static async clearMedicines(): Promise<void> {
    try{
      await AsyncStorage.removeItem('medicines');
    } catch (error) {
      console.error('Error clearing medicines:', error);
    }
  } 
}

export default StorageService;