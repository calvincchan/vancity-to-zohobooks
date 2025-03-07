# Vancity to ZohoBooks

**Author:** Calvin C Chan

This project is designed to help you migrate your financial data from Vancity to ZohoBooks seamlessly.

## Features

- Automated data extraction from Vancity transaction CSV
- Data transformation to match ZohoBooks format
- Secure data transfer
- Error handling and logging

## Prerequisites

- Node.js 20 or higher
- Vancity CSV export

## Usage

### Installation

1. Clone this repository:

```bash
git clone https://github.com/calvincchan/vancity-to-zohobooks.git
cd vancity-to-zohobooks
```

2. Install dependencies:

```bash
npm install
```

### Running the Script

1. Run the script:

```bash
node index.js data/your-statement.csv
```

3. The converted file will be generated as `data/your-statement-converted.csv`

### CSV Format Requirements

#### Input (Vancity statement.csv)

- Account number
- Transaction date (DD-MMM-YYYY)
- Description
- Reference number
- Withdrawals
- Deposits
- Balance

#### Output (ZohoBooks transaction csv format)

- Bank Account
- Date (YYYY-MM-DD)
- Description
- Payee
- Reference Number
- Cheque Number
- Withdrawals
- Deposits
- Balance

## Error Handling

The script includes basic error handling for:

- File reading/writing errors
- Data parsing errors
- CSV format validation

If you encounter any issues, check the console output for error messages and let me know by creating an issue.
