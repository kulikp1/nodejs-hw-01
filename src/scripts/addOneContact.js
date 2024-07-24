import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    await fs.writeFile(
      PATH_DB,
      JSON.stringify([...contacts, createFakeContact()], undefined, 2),
    );
  } catch (error) {
    console.error(error);
  }
};

addOneContact();