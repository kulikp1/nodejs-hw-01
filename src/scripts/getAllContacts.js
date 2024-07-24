import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contactsList = JSON.parse(data);
    return contactsList;
  } catch (error) {
    console.error(error);
  }
};

console.log(await getAllContacts());