
# Medicine Reminder App

A mobile application built with React Native for tracking and managing medication schedules. The app allows users to:

- Add medicines manually by entering their names.
- Add additional details about the medicine, such as dosage and form.
- View a list of added medicines with their details.
- Store and manage the medicine data locally on the device.

## Features

1. **Add Medicine:**
   - Users can add medicines by entering their name via a text input.
   - Auto complete feature is enabled using the RxNorm API.
   - The app allows the user to enter additional details like dosage and form (e.g., tablet, syrup).
   - Data is stored locally in the device storage for future reference.

2. **Medicine Details:**
   - After adding a medicine, users can specify further details like:
     - Dosage (e.g., Once a day, Twice a day).
     - Form (e.g., Tablet, Syrup, Injection) – populated dynamically using RxNorm API.
   
3. **Medicine List:**
   - Displays all the medicines entered, along with their details.
   - Medicines are stored persistently across app restarts.

4. **Local Storage:**
   - Medicine data is stored on the device using an on-device storage service.

5. **Autocompletion:**
   - An API call to the RxNorm is used to suggest medicine names as the user types.
   - API caching is used to avoid repeated calls for the same data.

6. **Future Features:**
   - The barcode scanning feature is planned for future iterations.
   - Integration with other medicine APIs for extended functionality.

## Prerequisites

To run this app locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Yarn](https://yarnpkg.com/) (alternative to npm)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/TejasSriv/Medicines.git
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. For iOS (if on macOS):
   
   ```bash
   npx pod-install
   ```

4. Run the app on an Android emulator or physical device:

   ```bash
   npx react-native run-android
   ```

## API Integration

The app uses the following APIs:

- **RxNorm API**: Used to fetch and autocomplete medicine names, and fetches detailed information about medicines, such as their dosage forms.

### API Key

To use the RxNorm API, you’ll need an API key. Follow the instructions on the [UMLS website](https://uts.nlm.nih.gov/) to obtain a key.

## File Structure

- **AddMedicineScreen.tsx**: Screen to add a new medicine.
- **MedicationDetailsScreen.tsx**: Screen to add further details like dosage and form.
- **MedicineListScreen.tsx**: Displays a list of medicines.
- **StorageService.ts**: Manages local storage for medicines.
- **types.ts**: Type definitions for the app.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new Pull Request.
