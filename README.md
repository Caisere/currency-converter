# Currency Converter App
A React-based currency converter application that allows users to convert between different currencies using real-time exchange rates from the Frankfurter API.

## Features

- Convert between USD, EUR, and GBP currencies
- Real-time exchange rate data
- Form validation to prevent same-currency conversion
- Loading state during API requests
- Error handling for API failures

## Technologies Used

- React
- React Hook Form (for form management)
- TanStack Query (for data fetching)
- Frankfurter API (for currency exchange rates)

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd currency-converter
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

## Usage

- Enter an amount to convert in the "Currency" field
- Select the currency you're converting from in the "From" dropdown
- Select the currency you're converting to in the "To" dropdown
- Click "Convert" to see the result

The app will automatically prevent conversion between the same currencies and show an error message if attempted.

## API Reference

This application uses the free Frankfurter API for currency conversion rates.

## Project Structure

- App.js - Main application component with form and conversion logic
- App.css - Styling for the application

## Contributing

- Contributions are welcome! Please open an issue or submit a pull request for any improvements.
