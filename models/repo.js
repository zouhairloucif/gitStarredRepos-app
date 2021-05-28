export class Repo {
   constructor(owner, name, description, stars, issues, created_at, url) {
    this.name = name;
    this.description = description;
    this.stars = stars;
    this.issues = issues;
    this.owner = owner;
    this.created_at = created_at;
    this.url = url;
  }
}