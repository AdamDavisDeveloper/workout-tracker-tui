import * as fs from 'fs';
import * as path from 'path';

export interface WorkoutEntry {
  id: number;
  date: string;
  exercise: string;
  sets: number;
  reps: number;
}

const DATA_FILE = path.join(__dirname, '../data.json');

/**
 * Reads workout data from the JSON file. Returns an array of WorkoutEntry.
 */
export function loadData(): WorkoutEntry[] {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      // If the file doesn't exist, return an empty array
      return [];
    }
    const jsonData = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error('Error reading data file:', error);
    return [];
  }
}

/**
 * Saves workout data array to the JSON file.
 */
export function saveData(data: WorkoutEntry[]): void {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing data file:', error);
  }
}

