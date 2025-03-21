#!/usr/bin/env node

import got from 'got'

const API = "http://localhost:3000";
const usage = (msg = 'Back office for My App') => {
    console.log(`\n${msg}\n`);
    console.log("Usage: cmd <ID> <AMOUNT>");
};
