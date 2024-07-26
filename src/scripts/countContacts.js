import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contactsNumber = JSON.parse(data).length;
    return contactsNumber;
  } catch (error) {
    console.error(error);
  }
};

console.log(await countContacts());