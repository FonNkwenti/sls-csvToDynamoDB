"use strict";

module.exports.csvToDynamoDB = async (event) => {
  console.log(`The event is === ${JSON.parse(event.body)}`);
  console.log(`the event is ===`, event);
  console.log(`the event records are ===`, event.Records);
};
