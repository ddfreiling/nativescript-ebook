/// <reference path="./native-definitions/objc!FolioReaderKit.d.ts" />

import * as utils from 'tns-core-modules/utils/utils';
import * as fs from 'tns-core-modules/file-system';
import { Color } from 'tns-core-modules/color';
import { topmost } from 'tns-core-modules/ui/frame';

import { Common } from './ebook.common';

export class EBookReader extends Common {
  public open(filePath: string) {
    const notaColor = new Color('#0074d9').ios;
    const config = new FolioReaderConfig();
    config.enableTTS = true
    config.displayTitle = false;
    config.hideBars = false;
    config.hidePageIndicator = false;
    config.shouldHideNavigationOnTap = false;
    config.canChangeScrollDirection = false;
    config.allowSharing = false;
    config.loadSavedPositionForCurrentBook = false;
    config.scrollDirection = FolioReaderScrollDirection.Horizontal;
    config.tintColor = notaColor;
    config.menuTextColor = notaColor;

    const folioReader = new FolioReader();

    folioReader.presentReaderWithParentViewControllerWithEpubPathUnzipPathAndConfigShouldRemoveEpubAnimated(
        topmost().currentPage.ios,
        filePath,
        fs.knownFolders.temp().path,   /* unzipPath */
        config,
        false,  /* shouldRemoveEpub */
        true    /* animated */
    );
  }
}
