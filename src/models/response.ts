export interface Response {
  license: License;
  meanings: Array<Meaning>;
  partOfSpeech: string;
  synonyms: string[];
  word: string;
  phonetic: string;
  sourceUrls: string[];
}

export interface License {}

export interface Meaning {
  anatonyms: string[];
  definitions: Array<Definition>;
  synonyms: string[];
}

export interface Definition {
  antonyms: string[];
  definition: string;
  synonyms: string[];
}
