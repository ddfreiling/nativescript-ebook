/// <reference path="./android-FolioReader.d.ts" />

import * as app from 'tns-core-modules/application';

import { Common } from './ebook.common';

export class EBookReader extends Common {

  private folioReader: com.folioreader.util.FolioReader;

  public open(filePath: string) {
    this.folioReader = new com.folioreader.util.FolioReader(app.android.context);
    this.folioReader.openBook(filePath);
  }
}
