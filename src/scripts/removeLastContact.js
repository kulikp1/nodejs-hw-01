import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contactsList = JSON.parse(data);

    if (!contactsList.length) return;

    contactsList.pop();
    fs.writeFile(PATH_DB, JSON.stringify(contactsList, undefined, 2));
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();