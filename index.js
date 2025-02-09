const fs = require("fs");
const dayjs = require("dayjs");
const csv = require("csv-parser");

/* TODO: use env var instead of hardcode */
const inputFilePath = "./data/statement.csv";
const outputFilePath = "./data/statement_converted.csv";

const headers = [
  "Bank Account",
  "Date",
  "Description",
  "Payee",
  "Reference Number",
  "Cheque Number",
  "Withdrawals",
  "Deposits",
  "Balance",
];

const results = [];

fs.createReadStream(inputFilePath)
  .pipe(csv({ headers: false }))
  .on("data", (data) => {
    const description = data[2].substring(0, 29).trim();
    const refno = data[2].substring(29, 86).trim();
    const memo = data[2].substring(86).trim();
    const payee = description.startsWith("e-Transfer")
      ? memo.replace("; Memo: ", "")
      : refno;
    const isDeposit = data[5] !== "";
    const row = {
      "Bank Account": data[0],
      Date: dayjs(data[1], "DD-MMM-YYYY").format("YYYY-MM-DD"),
      Description: data[2],
      Payee: payee,
      "Reference Number": refno,
      "Cheque Number": data[3],
      Withdrawals: data[4],
      Deposits: data[5],
      Balance: data[6],
    };
    results.push(row);
  })
  .on("end", () => {
    const csvContent = [
      headers.join(","),
      ...results.map((row) => headers.map((header) => row[header]).join(",")),
    ].join("\n");

    fs.writeFileSync(outputFilePath, csvContent);
    console.log("CSV file has been converted and saved.");
  });
