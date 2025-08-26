class language {
  reference: string;
  color: string;
  name: string;
  favorite: boolean;

  constructor(languageReference: string, languageColor: string, languageName : string, languageFavorite : boolean){
    this.reference = languageReference;
    this.color = languageColor;
    this.name = languageName;
    this.favorite = languageFavorite;
  }
}