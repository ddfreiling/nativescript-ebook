/// <reference path="./node_modules/tns-platform-declarations/ios.d.ts" />
/// <reference path="./native-definitions/objc!FolioReaderKit.d.ts" />

import * as utils from 'tns-core-modules/utils/utils'
import { topmost } from 'tns-core-modules/ui/frame';

import { Common } from './ebook.common';

export class EBookReader extends Common {
  public open(filePath: string) {
    const config = new FolioReaderConfig();
    const mainBundle = utils.ios.getter(NSBundle, NSBundle.mainBundle);
    const bookPath = mainBundle.pathForResourceOfType(filePath, 'epub');

    const folioReader = new FolioReader();

    folioReader.presentReaderWithParentViewControllerWithEpubPathAndConfigShouldRemoveEpubAnimated(
        topmost().currentPage.ios,
        bookPath,
        config,
        false,  /* shouldRemoveEpub */
        true    /* animated */
    );
  }
}
