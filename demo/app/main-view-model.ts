import { Observable } from 'tns-core-modules/data/observable';
import { EBookReader } from 'nativescript-ebook';

export class HelloWorldModel extends Observable {
  public message: string;
  private ebook: EBookReader;

  constructor() {
    super();

    this.ebook = new EBookReader();
    this.message = this.ebook.message;
  }
}
